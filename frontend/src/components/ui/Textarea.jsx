export default function Textarea({ className = "", ...props }) {
  return <textarea {...props} className={`w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 ${className}`} />;
}
