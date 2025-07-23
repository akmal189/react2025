import { useSelector } from 'react-redux';

export default function CompanyInfo() {
  const company = useSelector(state => state.company);

  return (
    <section className="bg-white py-12">
      <h2 className="text-3xl font-bold mb-4">{company.name}</h2>
      {company.description ? <p className="text-lg text-gray-600 mb-6">{company.description}</p> : null}
      <ul className="space-y-1 text-gray-700">
        <li><strong>📍 Address:</strong> {company.address}</li>
        <li><strong>📞 Phone:</strong> {company.phone}</li>
        <li><strong>📧 Email:</strong> {company.email}</li>
      </ul>
    </section>
  );
}
