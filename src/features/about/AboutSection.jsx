import { useSelector } from 'react-redux';

export default function AboutSection() {
  const about = useSelector(state => state.about);

  return (
    <section id="about" className="bg-white py-12">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="text-gray-700 leading-relaxed">{about.content}</p>
    </section>
  );
}
