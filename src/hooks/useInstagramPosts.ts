import { useState, useEffect } from 'react';

export interface InstagramPost {
  id: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  mediaUrl: string;
  thumbnail: string;
  caption: string;
  permalink: string;
}

interface GraphApiMediaItem {
  id: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  caption?: string;
  permalink?: string;
}

interface GraphApiResponse {
  data?: GraphApiMediaItem[];
}

const mapMediaType = (type?: string): InstagramPost['mediaType'] => {
  if (type === 'VIDEO') return 'VIDEO';
  if (type === 'CAROUSEL_ALBUM') return 'CAROUSEL_ALBUM';
  return 'IMAGE';
};

const transformPost = (item: GraphApiMediaItem): InstagramPost => ({
  id: item.id,
  mediaType: mapMediaType(item.media_type),
  mediaUrl: item.media_url ?? '',
  thumbnail: item.thumbnail_url ?? item.media_url ?? '',
  caption: item.caption ?? '',
  permalink: item.permalink ?? '',
});

export const useInstagramPosts = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const apiUrl =
          import.meta.env.VITE_INSTAGRAM_API_URL 
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: GraphApiResponse = await response.json();
        const transformed = (data.data ?? []).map(transformPost);
        setPosts(transformed);
        setError(null);
      } catch {
        setError('Failed to load Instagram posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};
