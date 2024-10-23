import "./Navbar.css";
import NavbarItem from "./NavbarItem";

const Navbar = ({ onClick }) => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavbarItem onClick={onClick} title="Home" category="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1.5rem"
            >
              <g id="_01_align_center" data-name="01 align center">
                <path d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z" />
              </g>
            </svg>
          </NavbarItem>
        </li>
        <li>
          <NavbarItem
            onClick={onClick}
            title="Top Games of All Time"
            category="games"
            time="all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="1.5rem"
            >
              <path d="M22.766,4.566A1.994,1.994,0,0,0,20.586,5L18,7.586,13.414,3a2,2,0,0,0-2.828,0L6,7.586,3.414,5A2,2,0,0,0,0,6.414V17a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6.414A2,2,0,0,0,22.766,4.566ZM22,17a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V6.414L5.293,9.707a1,1,0,0,0,1.414,0L12,4.414l5.293,5.293a1,1,0,0,0,1.414,0L22,6.414Z" />
            </svg>
          </NavbarItem>
        </li>
        <li>
          <NavbarItem
            onClick={onClick}
            title="Top Games This Year"
            category="games"
            time="year"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="1.5rem"
            >
              <path d="M15.091,16C21.661,15.964,24,12.484,24,9.5a3.5,3.5,0,0,0-2.764-3.419c.136-.387.254-.742.333-1.011a3.887,3.887,0,0,0-.626-3.458A3.979,3.979,0,0,0,17.729,0H6.271A3.979,3.979,0,0,0,3.057,1.612,3.887,3.887,0,0,0,2.431,5.07c.079.269.2.624.333,1.011A3.5,3.5,0,0,0,0,9.5c0,2.984,2.339,6.464,8.909,6.5A5.06,5.06,0,0,1,9,16.921V20a1.883,1.883,0,0,1-2,2H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2h-.992A1.885,1.885,0,0,1,15,20V16.92A5.058,5.058,0,0,1,15.091,16ZM20.5,8A1.5,1.5,0,0,1,22,9.5c0,2.034-1.609,4.2-6.036,4.47a4.847,4.847,0,0,1,.762-.821A15.132,15.132,0,0,0,20.453,7.99C20.469,7.991,20.483,8,20.5,8ZM2,9.5A1.5,1.5,0,0,1,3.5,8c.017,0,.031-.009.047-.01a15.132,15.132,0,0,0,3.727,5.159,4.847,4.847,0,0,1,.762.821C3.609,13.7,2,11.534,2,9.5ZM10.513,22A4.08,4.08,0,0,0,11,20V16.921a6.93,6.93,0,0,0-2.431-5.295A15.338,15.338,0,0,1,4.349,4.5a1.9,1.9,0,0,1,.31-1.694A1.994,1.994,0,0,1,6.271,2H17.729a1.994,1.994,0,0,1,1.612.81,1.9,1.9,0,0,1,.31,1.694,15.338,15.338,0,0,1-4.22,7.122A6.928,6.928,0,0,0,13,16.92V20a4.08,4.08,0,0,0,.487,2Z" />
            </svg>
          </NavbarItem>
        </li>
        <li>
          <NavbarItem
            onClick={onClick}
            title="Last 30 Days"
            category="games"
            time="month"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="1.5rem"
            >
              <path d="M19,2h-1V1c0-.552-.447-1-1-1s-1,.448-1,1v1H8V1c0-.552-.447-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM5,4h14c1.654,0,3,1.346,3,3v1H2v-1c0-1.654,1.346-3,3-3Zm14,18H5c-1.654,0-3-1.346-3-3V10H22v9c0,1.654-1.346,3-3,3Zm-1.168-8.848c.384,.397,.372,1.031-.025,1.414l-4.74,4.568c-.553,.553-1.307,.866-2.108,.866s-1.555-.312-2.121-.879l-2.252-2.092c-.404-.376-.428-1.009-.052-1.413,.378-.405,1.01-.427,1.413-.052l2.278,2.117c.433,.43,1.063,.402,1.439,.026l4.754-4.582c.398-.383,1.03-.371,1.414,.026Z" />
            </svg>
          </NavbarItem>
        </li>
        <li>
          <NavbarItem
            onClick={onClick}
            title="This Week"
            category="games"
            time="week"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="1.5rem"
            >
              <path d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z" />
            </svg>
          </NavbarItem>
        </li>
        <li>
          <NavbarItem
            onClick={onClick}
            title="Upcoming"
            category="games"
            time="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1.5rem"
            >
              <g id="_01_align_center" data-name="01 align center">
                <path d="M23.124,9.879,18.538,5.293,17.124,6.707l4.262,4.263L0,11l0,2,21.446-.03-4.323,4.323,1.414,1.414,4.587-4.586A3.007,3.007,0,0,0,23.124,9.879Z" />
              </g>
            </svg>
          </NavbarItem>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;