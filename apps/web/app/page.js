import Header from "./(dashboard)/header";
import Home from "./(dashboard)/home/page";

export default function Web() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
export const config = {
  unstable_runtimeJS: false,
};
