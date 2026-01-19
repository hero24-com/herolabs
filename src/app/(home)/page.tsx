import type { Metadata } from 'next';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Herolabs - Professional Home Services in Finland | herolabs.fi',
  description:
    'Herolabs connects you with trusted professionals for all your home and property needs. From cleaning and HVAC to renovations and property maintenance. 100% satisfaction guarantee.',
};

export default function Page() {
  return <HomeView />;
}
