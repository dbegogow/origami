import style from './Header.module.css'
import NavigationItem from './NavigationItem'

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className={style.listItem}><img src="/white-origami-bird.png" alt="White origami" /></li>
                <NavigationItem title="Home" route="/" />
                <NavigationItem title="About" route="/about" />
                <NavigationItem title="Contact Us" route="/contact-us" />
                <NavigationItem title="Going to 4" route="/about/4" />
                <NavigationItem title="Going to 5" route="/about/5" />
                <NavigationItem title="Going to 6" route="/about/6" />
                <NavigationItem title="Going to 7" route="/about/7" />
                <NavigationItem title="Going to 8" route="/about/8" />
                <NavigationItem title="Going to 9" route="/about/9" />
                <NavigationItem title="Going to 10" route="/about/10" />
                <NavigationItem title="Going to 11" route="/about/11" />
            </ul>
        </nav>
    );
};

export default Header;