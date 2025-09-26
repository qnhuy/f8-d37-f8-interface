const Notification = function() {
    const bellStyles = {
        color: '#525252ff',
        fontSize: '2rem',
        cursor: 'pointer',
        padding: '4px'
    }

    return <div>
        <i className="fa-solid fa-bell" style={bellStyles}></i>
    </div>
}

export default Notification