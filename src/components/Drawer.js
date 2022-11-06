function Drawer(){
    return(
        <div style={{display: "none"}} className="overlay">
        <div className="drawer">
      <h2 className="d-flex justify-between mb-30">Корзина <img className="removeBtn" src="/img/btn-remove.svg" alt="delete" /></h2>
      

      <div className="items">
      <div className="cartItem d-flex align-center mb-20">
          <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
          <div className="mr-20 flex">
          <p className="mb-5">Мужские кроссовки Nke Blazr Mid Suede</p>
          <b>12 999 $</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="delete" />
</div>
<div className="cartItem d-flex align-center mb-20">
          <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
          <div className="mr-20 flex">
          <p className="mb-5">Мужские кроссовки Nke Blazr Mid Suede</p>
          <b>12 999 $</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="delete" />
</div>
      </div>
      <div className="cartTotalBlock">
      <ul>
        <li className="d-flex">
        <span>Итого:</span>
        <div></div>
        <b>21 498 $</b>
        </li>
        <li className="d-flex">
        <span>Налог 5%:</span>
        <div></div>
        <b>1074 $</b>
        </li>
      </ul>
      <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
      </div>
    </div>
    </div>
    );
}

export default Drawer;