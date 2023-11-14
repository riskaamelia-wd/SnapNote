import Button from "./Button"

const Card = ({title, date, note, styleEdit, styleDiv, styleBtn, classNameBtn, textBtn}) => {
    return(
        <div 
            style={styleDiv}
            className="p-2 pb-3 m-1 rounded-3"
        >
            <div className="d-flex flex-row justify-content-between mb-2" >
                <div className="col-9" >
                    <p 
                        className="fw-bold m-0 p-0 fs-5" 
                    >{title}</p>
                    <small 
                        className="fw-lighter " 
                        style={{fontSize:'10px'}}
                    >{date}</small>
                </div>
                <div className="col-2 col-md-1 m-0 p-0 d-flex justify-content-end">
                    <Button
                        className={'m-0 p-0'}
                        style={{
                            color:'var(--danger)'
                        }}
                        text={<i className="bi bi-trash3"></i>}
                    />
                    <Button
                        className={'m-0 p-0 ms-2'}
                        style={styleEdit}
                        text={<i className="bi bi-pencil-square"></i>}
                    />
                </div>
            </div>
                <small
                    style={{
                        fontSize:'13px'
                    }}
                >
                    {note}
                </small>
                <div className="m-auto col-6 mt-3">
                    <Button
                        style={styleBtn}
                        className={classNameBtn}
                        text={textBtn}
                    />
                </div>
        </div>
    )
}

export default Card