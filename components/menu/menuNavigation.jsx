export default function MenuNavigation(props) {
  return (
    <button className=" header my-4 font-semibold text-xs tracking-[4px] block" onClick={props.click}>
      {props.children}
    </button>
  );
}
