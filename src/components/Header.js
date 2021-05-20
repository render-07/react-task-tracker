import Button from './Button'

const Header = ({jakol, onAdd, changeColor}) => {
    return (
        <header className = 'header'>
            <h1>{jakol}</h1>
            <Button onAdd = {onAdd} kulay = {changeColor ? 'red' : 'green'} text = {changeColor ? 'Close' : 'Add'}/>
        </header>
    )
}

export default Header
