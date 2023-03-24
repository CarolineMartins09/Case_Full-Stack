import styled from "styled-components";

export const MyOrderForm = styled.form`
  
    div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        border: 3px solid #6b1985;
        border-radius: 15px;
        padding:1vw 0 0.2vw 0;
        width: 50% ;
        margin-left: 25%;
        
        button{
            background: lavender;
            box-shadow: 0.5px 1px 4px #6b1985;
            font-size: 1vw;
            font-weight: bold;
            color: blue;
            padding: 0.2vw 1vw 0.2vw 1vw;
            margin-left:1vw;

            :active{
                background-color: #6b1985;
            }

        }
        label{
            font-size: 1vw;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 7px;
            margin-top: 7px;
        }
        input{
            margin-bottom: 7px;
            font-size: 1vw;
            padding: 0.2vw 1vw 0.2vw 1vw ;
            box-shadow:1px 2px 5px;
        }
    }
    #select-product{
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: space-evenly;
        border: 3px solid #6b1985;
        border-radius: 10px;
        p{
            font-size: 1.8vw;
            font-weight: bold;
        }
        label{
            font-size: 2vw;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 1%;
            margin-top: 0.5%;
        }
        input{
            margin-bottom: 7px;
            font-size: 1vw;
            padding: 0.2vw 1vw 0.2vw 1vw ;
            box-shadow:1px 2px 5px;
        }
    }
    #selec-client{
        justify-content: center;
        align-items: center;
        label{
            margin-right: 0.5vw;
        }
        input{
            width: 50vw;
        }
    }
    #order{
       display :flex ;
       flex-direction:column;
       align-items:center;
    }
`;