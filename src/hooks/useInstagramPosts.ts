import { useState, useEffect } from 'react';

interface InstagramPost {
  id: string;
  type: 'post' | 'reel';
  thumbnail: string;
  likes: number;
  comments: number;
  caption: string;
  permalink?: string;
}

interface InstagramResponse {
  data: InstagramPost[];
  source: 'api' | 'mock';
}

export const useInstagramPosts = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const apiUrl = import.meta.env.DEV
          ? 'http://localhost:3001/api/instagram-posts'
          : '/api/instagram-posts';
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: InstagramResponse = await response.json();
        setPosts(data.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load Instagram posts');
        // Fallback to mock data on error
        setPosts([
          {
            id: '1',
            type: 'reel',
            thumbnail: '/instagram-placeholder-1.jpg',
            likes: 234,
            comments: 45,
            caption: 'Premium ceramic coating transformation ✨',
          },
          {
            id: '2',
            type: 'post',
            thumbnail: '/instagram-placeholder-2.jpg',
            likes: 189,
            comments: 32,
            caption: 'Before & After: Deep interior detailing',
          },
          {
            id: '3',
            type: 'reel',
            thumbnail: '/instagram-placeholder-3.jpg',
            likes: 312,
            comments: 67,
            caption: 'Paint correction magic 🎨',
          },
          {
            id: '4',
            type: 'post',
            thumbnail: '/instagram-placeholder-4.jpg',
            likes: 156,
            comments: 28,
            caption: 'Engine bay detailing excellence',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};
