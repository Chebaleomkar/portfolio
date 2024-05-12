
  import React from 'react';
  import Link from 'next/link';
  import { Button } from './ui/button';
  import { cn } from '@/lib/utils';
import { Tag } from 'lucide-react';

  interface ProjectCardProps{
    title : string;
    description : string;
    tags : string[];
    imageUrl : string;
    demoUrl? : string;
    githubUrl : string;
    TitleColor? : string;
  }

  const ProjectCard = ({  title, description,tags, imageUrl, demoUrl, githubUrl , TitleColor  }:ProjectCardProps) => {

    return (
      <div className="bg-gray-800  shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-320 object-cover object-center" src={imageUrl} alt={title} />

        <div className="p-4">
          <h3 className={`text-xl font-bold mb-2 ${TitleColor ? `${TitleColor}` : 'text-black'} '}  `}>{title}</h3>
          
           <div className="flex flex-wrap gap-1 mb-4 h-16">
          {tags.map((tag, i) => (
          <span key={i} className="text-white p-2  border border-blue-300 rounded-md text-[11px] inline-block relative overflow-hidden">
          {tag}
        </span>
        
         
          ))}
        </div>

          <div className="flex justify-between">

          {demoUrl &&  <Link href={demoUrl}>
              <Button variant="secondary" className="text-blue-500 hover:underline">Live </Button>
            </Link>}

            <Link href={githubUrl}>
              <Button variant="secondary" className="text-green-500 hover:underline">GitHub</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default ProjectCard;
