export default function Input({ className = "", ...props }) {
  return <input {...props} className={`w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 ${className}`} />;
}
