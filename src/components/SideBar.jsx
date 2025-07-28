import { useEffect, useRef } from 'react';
import { Link } from 'react-router';

export default function SideBar() {
    const didRunRef = useRef(false);
    
    useEffect(() => {
        if (didRunRef.current) return;
        didRunRef.current = true;
    
        const menu_script = document.createElement('script');
        menu_script.textContent = `
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSideBar();
    }
});

document.addEventListener('click', (e) => {
    const menu = document.getElementById('menu');
  
    if (menu && menu.contains(e.target) && e.target.tagName === 'A') {
        closeSideBar();
    }
});

function closeSideBar() {
    document.getElementById("navcheck").checked = false;
}
    `
        document.body.appendChild(menu_script);
    }, []);

    return (
        <gk-sidebar>
            <input type="checkbox" id="navcheck" role="button" />
            <label htmlFor="navcheck" aria-hidden="true" style={{
                cursor: 'inherit'
            }}>
                <span className="burger" style={{
                cursor: 'pointer'
            }}>
                    <span className="bar">
                        <span className="visuallyhidden">Menu</span>
                    </span>
                </span>
            </label>
            <nav id="menu">
                <Link to="/">Home</Link>
                <Link to="/information">Information</Link>
                <Link to="/community">Community</Link>
                <Link to="/project">Project</Link>
            </nav>
        </gk-sidebar>
  );
}
