import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

const VIDEO_EXT = /\.(mp4|webm|mov)$/i;

export function findPublicVideos(publicDir: string): string[] {
  const videos: string[] = [];

  const walk = (dir: string, prefix = '') => {
    if (!fs.existsSync(dir)) return;

    for (const name of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, name);
      const relativePath = prefix ? `${prefix}/${name}` : name;

      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath, relativePath);
        continue;
      }

      if (VIDEO_EXT.test(name)) {
        videos.push(`/${relativePath.replace(/\\/g, '/')}`);
      }
    }
  };

  walk(publicDir);
  return videos.sort((a, b) => a.localeCompare(b));
}

export function publicVideosPlugin(): Plugin {
  const virtualModuleId = 'virtual:public-videos';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  const publicDir = path.resolve(process.cwd(), 'public');

  const loadVideosModule = () => {
    const videos = findPublicVideos(publicDir);
    return `export const publicVideos = ${JSON.stringify(videos)};`;
  };

  return {
    name: 'public-videos',
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId;
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return loadVideosModule();
      }
    },
    configureServer(server) {
      server.watcher.add(publicDir);
      server.watcher.on('all', (event, file) => {
        if (!file.startsWith(publicDir) || !VIDEO_EXT.test(file)) return;

        const mod = server.moduleGraph.getModuleById(resolvedVirtualModuleId);
        if (mod) {
          server.moduleGraph.invalidateModule(mod);
          server.reloadModule(mod);
        }
      });
    },
  };
}
