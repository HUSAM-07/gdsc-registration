import dynamic from 'next/dynamic';

const Registration = dynamic(() => import('@/components/Registration'), {
  ssr: false,
});

export default function RegistrationPage() {
  return <Registration />;
}