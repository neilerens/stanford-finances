import { createRef } from "react";
import ScrollSpy from "react-scrollspy";

const Navbar = () => {
  const itemList = ["intro", "budget", "sankey", "endowment", "timeline", "faq", "resources"];

  return(
    <ScrollSpy   
      style={{marginTop: 50, marginBottom: 50}}
      id="#nav"
      className="nav-style hidden-mobile"
      items={itemList}
      currentClassName="current-section"
    >
      <li className="no-bullet"><a className="nav-link nav-link-ltr" href="#intro" ref={createRef()}>INTRO</a></li>
      <li className="no-bullet"><a className="nav-link nav-link-ltr" href="#budget" ref={createRef()}>BUDGET</a></li>
      <li className="no-bullet"><a className="nav-link nav-link-ltr" href="#sankey" ref={createRef()}>TUITION</a></li>
      <li className="no-bullet"><a className="nav-link nav-link-ltr" href="#endow" ref={createRef()}>ENDOWMENT</a></li>
      <li className="no-bullet"><a className="nav-link nav-link-ltr" href="#resources" ref={createRef()}>RESOURCES</a></li>
    </ScrollSpy>
  )
}

export default Navbar;