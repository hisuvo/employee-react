import { toast, Toaster } from "react-hot-toast";
export default function Home() {
  const notify = () => toast("Here is your toast.");
  return (
    <div>
      <button className="btn" onClick={notify}>
        Click
      </button>
      <Toaster />
    </div>
  );
}
