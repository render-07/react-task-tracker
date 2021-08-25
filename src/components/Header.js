import Button from './Button'

const Header = ({header, onAdd, changeColor}) => {
    return (
        <header className = 'header'>
            <h1>{header}</h1>
            <Button onAdd = {onAdd} kulay = {changeColor ? 'red' : 'green'} text = {changeColor ? 'Close' : 'Add'}/>
        </header>
    )
}

export default Header
