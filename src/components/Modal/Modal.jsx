import styled from 'styled-components';

const ModalHeader = styled.div`
    padding: 2px 8px;
    background-color: #5cb85c;
    color: white;
`;

const Modal = ({Header, children, onClose} ) => {
    return(
        <div className="modal">
            <div className="modal-content">

                    <ModalHeader>
                        <span className="close" onClick={onClose}>&times;</span>
                        <h4>{Header}</h4>
                    </ModalHeader>
                <div className="modal-body">
                    {children}
                </div> 
                
            </div>
        </div>
    )
}

export default Modal;