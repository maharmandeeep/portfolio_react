
import "./menu.scss";

function Menu( {sideMenu,setsideMenu}){

    return (
        <>
        <div className={"menu " +(sideMenu && "active")}>
            <ul>
                <li>
                    <a href="#intro" onClick={()=>setsideMenu(!sideMenu)}>Home</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={()=>setsideMenu(!sideMenu)}>Portfolio</a>
                </li>
                <li>
                    <a href="#works" onClick={()=>setsideMenu(!sideMenu)}>Works</a>
                </li> 
                <li>
                    <a href="#testimonials" onClick={()=>setsideMenu(!sideMenu)}>Testimonials</a>
                </li>
                <li>
                    <a href="#contact" onClick={()=>setsideMenu(!sideMenu)}>Contact</a>
                </li>
            </ul>
        </div>
        
        </>
    );
}


export default Menu;