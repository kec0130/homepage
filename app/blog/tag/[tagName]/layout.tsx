import { Metadata, ResolvingMetadata } from 'next';
import { defaultMetadata } from '@/constants/metadata';
import { tags } from '@/constants/pages';

interface Props {
  params: {
    tagName: string;
  };
}

export const generateMetadata = async (
  { params: { tagName } }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { title: siteName, description } = defaultMetadata;
  const tag = tags.find((tag) => tag.toLowerCase() === tagName);
  const ogTitle = `${tag} 관련 글 - ${siteName}`;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${tag} 관련 글`,
    description,
    openGraph: {
      title: ogTitle,
      description,
      url: `/blog/tag/${tagName}`,
      siteName,
      type: 'website',
      images: previousImages,
    },
    twitter: {
      title: ogTitle,
      description,
      card: 'summary_large_image',
    },
  };
};

const Layout = ({ children }: { children: React.ReactNode }) => children;

export default Layout;
