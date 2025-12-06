---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNVA3BJN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLcE313MZsbD8iYLsUej56FfJ0hzOeBhrW51Zy8rMTWgIgWVSH21quiMv6ehlmSCWtec%2BmjmShb%2Fg3z3wvhNLcY0oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLkJPN6Gwn9eILxIkCrcA4KkTV%2B4cd7m%2FRb0nR2%2FPFlCWxMdPCMznVuDbgnm0wrWdNcL8%2Fi4R91p8L6qFINehsj58irSzYZabC9XKtT881Rt0G2V%2BWn5bhFE3nmp5jPFDm2hg4ACWZJL3hR6MnfG2411NmWp5FzjBt%2Fj37l1VWlYForFlirvpUaPuYvN4oPuQw3bgJuJaFgmzJDcy6amiMve4uAPt0rdfuosspR2Xcs2x%2BC4GfGUwCid4OI0dGC5oA9B72XnGhZOerYkU607BLV3XSMZedEwWaRoriYPfS3491wO9yXWqd%2BpDTbl3IZRmQsAnKfp3x4d1dWYzVly%2Fv%2Fp6pXyi5%2FibpfAs3OTV8xVTwpyX2%2FmArE5SDDJjhs4tdB5yCu4uuAhqn6u8oOxl67%2Bs0WnAMVkZvcxTpCKU%2FIOUqv5OpCudyQiOJGsof5OP2euq6ptxhtv6MhtVcFzkrEFQtlJb8FLnpdXMGTtg%2BrTyEf1t1%2BPtkdAxYsmpatKmKr5z%2F0wBTwXLNFZF8CiRAHtRGJe6eEu7dgz62%2BbE3NSzPB%2FlCS0YxDKt%2BnjCkBUUFeSYCIUlLyAJ6HeXbVgPTrz9ZIP0PhlHQyqtsHo05udi9Hvwg8pXrf9invSIqr1UPX85QHIbS4tX7mgMOum0MkGOqUBplj8THxkCAeqj4pZfDMBXGhm8CJ6XPsSFUFXFsXZw5P3vyaVQkxbtfP2nLM%2FHFfsIUshvSnKvO4cqGg14vPMBOdwPJCz%2BLf6HqOHPqD%2B0rB2p%2FfBHYRok%2Bq%2BtZry2sSAE%2Bdmn5UNWN%2FqL8m6JRMq8dPLp8lUd99fXKbRNu%2BFtwD98Y2wwUi1x0QWMVU3CPsqkUMgzZXnXAp41ujGy70mFDywzunF&X-Amz-Signature=0103941284249cbecaedc6b9911d9a9c7bd327e71dd3b79543b52ced94c24310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNVA3BJN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLcE313MZsbD8iYLsUej56FfJ0hzOeBhrW51Zy8rMTWgIgWVSH21quiMv6ehlmSCWtec%2BmjmShb%2Fg3z3wvhNLcY0oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLkJPN6Gwn9eILxIkCrcA4KkTV%2B4cd7m%2FRb0nR2%2FPFlCWxMdPCMznVuDbgnm0wrWdNcL8%2Fi4R91p8L6qFINehsj58irSzYZabC9XKtT881Rt0G2V%2BWn5bhFE3nmp5jPFDm2hg4ACWZJL3hR6MnfG2411NmWp5FzjBt%2Fj37l1VWlYForFlirvpUaPuYvN4oPuQw3bgJuJaFgmzJDcy6amiMve4uAPt0rdfuosspR2Xcs2x%2BC4GfGUwCid4OI0dGC5oA9B72XnGhZOerYkU607BLV3XSMZedEwWaRoriYPfS3491wO9yXWqd%2BpDTbl3IZRmQsAnKfp3x4d1dWYzVly%2Fv%2Fp6pXyi5%2FibpfAs3OTV8xVTwpyX2%2FmArE5SDDJjhs4tdB5yCu4uuAhqn6u8oOxl67%2Bs0WnAMVkZvcxTpCKU%2FIOUqv5OpCudyQiOJGsof5OP2euq6ptxhtv6MhtVcFzkrEFQtlJb8FLnpdXMGTtg%2BrTyEf1t1%2BPtkdAxYsmpatKmKr5z%2F0wBTwXLNFZF8CiRAHtRGJe6eEu7dgz62%2BbE3NSzPB%2FlCS0YxDKt%2BnjCkBUUFeSYCIUlLyAJ6HeXbVgPTrz9ZIP0PhlHQyqtsHo05udi9Hvwg8pXrf9invSIqr1UPX85QHIbS4tX7mgMOum0MkGOqUBplj8THxkCAeqj4pZfDMBXGhm8CJ6XPsSFUFXFsXZw5P3vyaVQkxbtfP2nLM%2FHFfsIUshvSnKvO4cqGg14vPMBOdwPJCz%2BLf6HqOHPqD%2B0rB2p%2FfBHYRok%2Bq%2BtZry2sSAE%2Bdmn5UNWN%2FqL8m6JRMq8dPLp8lUd99fXKbRNu%2BFtwD98Y2wwUi1x0QWMVU3CPsqkUMgzZXnXAp41ujGy70mFDywzunF&X-Amz-Signature=6ac840c109d971758808fa6131b222b6b153f684a768f259052a91d62edbcb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

