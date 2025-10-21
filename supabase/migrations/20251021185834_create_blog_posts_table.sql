/*
  # Create blog posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `slug` (text, unique) - URL-friendly version of the title
      - `title` (text) - Blog post title
      - `summary` (text) - Short preview text for the blog list
      - `content` (text) - Full blog post content
      - `published` (boolean) - Whether the post is published
      - `created_at` (timestamptz) - When the post was created
      - `updated_at` (timestamptz) - When the post was last updated
  
  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for anyone to read published blog posts
    - Only authenticated users can manage blog posts
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  summary text NOT NULL,
  content text NOT NULL DEFAULT '',
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);