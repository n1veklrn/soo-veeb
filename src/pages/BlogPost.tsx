import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  async function fetchPost() {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setError(true);
      } else {
        setPost(data);
      }
    } catch (err) {
      console.error('Error fetching blog post:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Post Not Found</h1>
            <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
        >
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-8 pb-8 border-b border-slate-200">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{post.title}</h1>
            <div className="flex items-center text-slate-600">
              <time dateTime={post.created_at}>
                {new Date(post.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.updated_at !== post.created_at && (
                <span className="ml-4 text-sm">
                  Updated: {new Date(post.updated_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              )}
            </div>
          </header>

          <div className="prose prose-slate max-w-none">
            <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
              {post.content}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
