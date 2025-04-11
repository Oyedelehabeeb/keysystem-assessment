// import { MousePointer2 } from "lucide-react";

// export default function CustomCard({
//   text,
//   gradient,
//   center = false,
// }: {
//   text: string;
//   gradient: string;
//   center?: boolean;
// }) {
//   return (
//     <div
//       className={`rounded-full p-6 flex flex-col items-center gap-2 ${
//         center ? "justify-center text-center" : ""
//       } text-white bg-gradient-to-br ${gradient} border border-white/10 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300`}
//     >
//       <span>{text}</span>
//       <MousePointer2 size={20} />
//     </div>
//   );
// }

import { MousePointer2 } from "lucide-react";

export default function CustomCard({
  text,
  gradient,
  center = false,
}: {
  text: string;
  gradient: string;
  center?: boolean;
}) {
  return (
    <div
      className={`rounded-full p-6 flex flex-col items-center gap-2 
        ${center ? "justify-center text-center" : ""} 
        text-white bg-gradient-to-br ${gradient} 
        border border-white/10 shadow-lg cursor-pointer 
        hover:scale-105 transition-transform duration-300
        w-[300px] h-[100px] min-w-[300px] min-h-[100px]`}
    >
      <span className="w-full truncate text-center">{text}</span>
      <MousePointer2 size={20} className="text-indigo-500" />
    </div>
  );
}
