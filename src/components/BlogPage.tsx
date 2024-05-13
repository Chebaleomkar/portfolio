
import { Button } from "./ui/button";
import Tag from "./Tag";

const BlogPage = ({
  link,
  title,
  topic,
}: {
  link: string;
  title: string;
  topic?: string;
}) => {


  return (
    <div className="mb-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gray-900 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300 shadow-md"
      >
        <h3 className="text-xl font-bold text-white hover:underline mb-2 md:mb-4">
          {title}
        </h3>
        <div className="flex items-center justify-center gap-20 ">
          {topic && <Tag tag={topic} color="border-green-500" />}
          <Button className="text-sm md:text-base bg-blue-500 hover:bg-blue-600">
            Read more
          </Button>
        </div>
      </a>
    </div>
  );
};

export default BlogPage;
