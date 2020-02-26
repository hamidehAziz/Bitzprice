class Prices extends React.Component{
    state = {
        currency: 'USD'
    }

    render() {
        return ( 
            <div> 
                <ul className="ist-group">
                  <li className="list-group-item">
                   Bitcoin rate for AAA
                   <span className = "badge badge-primary">BBB</span> 
                    <strong>C</strong>
                 </li>  
                </ul>
            </div>
        );

    }

}


export default Prices;