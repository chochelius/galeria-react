// creamos el header

const Header = (props) => {
    return (
        <div className = 'header mb-5'>
             <h1>{props.titulo}</h1>
        </div>
    );
}

export default Header;
