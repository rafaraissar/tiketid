import Header from "./header";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
export const config = {
  unstable_runtimeJS: false,
};
