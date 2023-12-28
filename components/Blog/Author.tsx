import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  author: string;
  date: string;
}

const Author = ({ author, date }: Props) => {
  return (
    <div className="flex items-center">
      <Link
        href={`/blog/author/${author.toLowerCase()}`}
        className="not-prose flex items-center hover:underline"
      >
        <Image
          src={`/images/avatar/${author.toLowerCase()}.png`}
          alt="프로필 사진"
          width={24}
          height={24}
          className="mr-1.5 rounded-full border border-slate-200"
        />
        <span>{author}</span>
      </Link>
      <time
        className="text-gray-500 before:px-1.5 before:content-['·']"
        dateTime={dayjs(date).format('YYYY-MM-DD')}
      >
        {dayjs(date).format('MMM D, YYYY')}
      </time>
    </div>
  );
};

export default Author;
