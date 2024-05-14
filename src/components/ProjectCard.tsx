import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Tag from './Tag'; // Import Tag component
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl: string;
  TitleColor?: string;
}

const ProjectCard = ({ title, description, tags, imageUrl, demoUrl, githubUrl, TitleColor }: ProjectCardProps) => {
  return (
    <div className="bg-gray-800 border border-yellow-500 shadow-lg rounded-lg overflow-hidden group relative">
      <img className="w-full h-320 object-cover object-center" src={imageUrl} alt={title} />

      <div className="p-4">
        <h3 className={`text-xl font-bold mb-2 ${TitleColor ? `${TitleColor}` : 'text-black'}`}>{title}</h3>

        <div className="flex flex-wrap gap-1 mb-4 h-16">
          {tags.map((tag, i) => (
            <Tag key={i} tag={tag} color={i % 2 === 0 ? 'border-green-500' : 'border-blue-500'} />
          ))}
        </div>

        <div  className={`flex justify-${demoUrl ? 'between' : 'center'}`}>
          {demoUrl && (
            <Link href={demoUrl}>
              <Button variant="secondary" className="text-blue-500 hover:underline">
                Live
              </Button>
            </Link>
          )}

          <Link href={githubUrl}>
            <Button variant="secondary" className="text-green-500 hover:underline">
              GitHub
            </Button>
          </Link>
        </div>
      </div>
      </div>
  );
};

export default ProjectCard;
