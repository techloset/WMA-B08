import First from '../assets/first.jpg';
function Sidebar() {
    return (
        <div>
            <h2>Sidebar</h2>
            <img src={First} alt="First" />

        <img src={require("../assets/first.jpg")} />
            <h4>Links</h4>
        </div>
    );
}

export default Sidebar;