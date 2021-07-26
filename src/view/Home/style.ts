import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: auto;

section{
    height: auto;
    width: 100%;
    background: #808010;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 12px;    

    .product-content{
        display: grid;
        text-align: center;
        height: 300px;
        background: #808050;
        border-radius: 12px;
        padding: 12px;
        margin: 12px;

        img{
            width: 200px;
            height: 100px;
        }

        button{
            border-radius: 5px;
            border: none;
            background-color: #476072;
            color: #eeeeee;
            text-align: center;
            cursor: pointer;
            &:hover {
            background: #eeeeee;
            color: #334257;
            border: 1px solid #334257;
            transition: 0.4s ease-in-out;
            }
        }
    }
}
`
