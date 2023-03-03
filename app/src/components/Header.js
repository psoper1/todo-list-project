function Header({ notes }) {
return <h1 className={`${notes.length > 0 ? 'text-danger' : 'text-info'}`}>To-Do List</h1>;
}

export default Header;