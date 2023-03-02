function Header({ notes }) {
return <h1 className={`${notes.length > 0 ? 'text-danger' : 'text-info'}`}>Note taking app</h1>;
}

export default Header;