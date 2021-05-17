import sidebarStyles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <>
      <div className={sidebarStyles["sidebar-container"]}>
        <h2>Sidebar</h2>
        <div className={sidebarStyles["content"]}>
          <div>Hello1</div>
          <div>Hello2</div>
          <div>Hello3</div>
          <div>Hello4</div>
          <div>Hello5</div>
          <div>Hello6</div>
        </div>
      </div>
    </>
  );
}