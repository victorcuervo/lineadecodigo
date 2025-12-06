---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYNOBZN2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZa8%2BMI04qXUqWuN8%2FM6m1Lpq4s9IhF3UxeTa7PP0TxwIgPqBGNvtj9O79z7gYqph8E2WRl8I4GQ1WjUlMa7B1cooq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKfFx55tTxH6PpGCxCrcA0fij0bW70BCg0taOb65E98lza%2BSTImY6Ns4UzNBxUONPIC%2FVdKrc2NLXFlE2aGQ%2Fj2ZxfRf9iG0Ng3M8ygpC6fJXfQjOS4Fpdt4D4%2BaDhQT5kNcnq%2B6IH7rr7eDYOYiYOuOaw2e4dP80ZLZ7x6bARM%2Bn28Pn6UYeAHbpIBfXhtkTTXehcdD8nMRjk0KFV2SypbTJ5qUQ8pVHYERPGzyHUUqM6sknfA2el7ShAtHxOBuW%2BVqGkzeIxRD1NowdOhTMHnCkgb7OKTvNyuQ4c5NQ6pGmMWGYGBzSbtxIKG%2BmdPT%2Bh65COZPDY4BJGEnhyr7tVty%2BwHZWDI9h88M77SLuHxxU8nCWBHxvh0Ail%2FYph5IN5rBFZCwOUNFWLAShXBG%2BlMF6%2FoNLAKtgDgyb0dPeBnKXWSPYRAaKrkrdYrxXRSKC4WdxGz5673hnboDMz0bkYsfHUhv8nR0jVaYa7HpgLErR1oYwJMEErsg4guF11yJy73CpCUpnCEvm%2B3dTPosbmJfiz6f10M3zk88W63rL7wDPyXMin4zn8w1Xc15d3iHHPBJj7WGp31qekZrdYNKANNCguWZCkyDQ%2FLFQtDMmknlSeehXs2CyNTLqIM4Y2jD4O6dWmnK6mCa0T%2BAMNXC0ckGOqUByGgS%2F9qfLrcygD%2FJxbJYXHMXGIMRYVg9h7J4TU6lY5PnNCyy%2FoaFMHbVygGaNao83%2FVURN68AHiS94%2BO06iKqBf5Hu47P%2F%2BnjuSIwbEDSCWyDKPpHWYSYtJmA5KLcMK2jJUW0Ca1CM%2FyXyV8P6aOUmv8nY9d5NmFwn116e3eE4yS%2BQXFY7IugWQ6pk5jwSW%2BnMYHyhbb5XJo1IxYLcV%2F0mDkBKY2&X-Amz-Signature=e04d708ff1f4029819f5706939b8eafde6cbc8ba4fe5213af61cba50a6136d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYNOBZN2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZa8%2BMI04qXUqWuN8%2FM6m1Lpq4s9IhF3UxeTa7PP0TxwIgPqBGNvtj9O79z7gYqph8E2WRl8I4GQ1WjUlMa7B1cooq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKfFx55tTxH6PpGCxCrcA0fij0bW70BCg0taOb65E98lza%2BSTImY6Ns4UzNBxUONPIC%2FVdKrc2NLXFlE2aGQ%2Fj2ZxfRf9iG0Ng3M8ygpC6fJXfQjOS4Fpdt4D4%2BaDhQT5kNcnq%2B6IH7rr7eDYOYiYOuOaw2e4dP80ZLZ7x6bARM%2Bn28Pn6UYeAHbpIBfXhtkTTXehcdD8nMRjk0KFV2SypbTJ5qUQ8pVHYERPGzyHUUqM6sknfA2el7ShAtHxOBuW%2BVqGkzeIxRD1NowdOhTMHnCkgb7OKTvNyuQ4c5NQ6pGmMWGYGBzSbtxIKG%2BmdPT%2Bh65COZPDY4BJGEnhyr7tVty%2BwHZWDI9h88M77SLuHxxU8nCWBHxvh0Ail%2FYph5IN5rBFZCwOUNFWLAShXBG%2BlMF6%2FoNLAKtgDgyb0dPeBnKXWSPYRAaKrkrdYrxXRSKC4WdxGz5673hnboDMz0bkYsfHUhv8nR0jVaYa7HpgLErR1oYwJMEErsg4guF11yJy73CpCUpnCEvm%2B3dTPosbmJfiz6f10M3zk88W63rL7wDPyXMin4zn8w1Xc15d3iHHPBJj7WGp31qekZrdYNKANNCguWZCkyDQ%2FLFQtDMmknlSeehXs2CyNTLqIM4Y2jD4O6dWmnK6mCa0T%2BAMNXC0ckGOqUByGgS%2F9qfLrcygD%2FJxbJYXHMXGIMRYVg9h7J4TU6lY5PnNCyy%2FoaFMHbVygGaNao83%2FVURN68AHiS94%2BO06iKqBf5Hu47P%2F%2BnjuSIwbEDSCWyDKPpHWYSYtJmA5KLcMK2jJUW0Ca1CM%2FyXyV8P6aOUmv8nY9d5NmFwn116e3eE4yS%2BQXFY7IugWQ6pk5jwSW%2BnMYHyhbb5XJo1IxYLcV%2F0mDkBKY2&X-Amz-Signature=b631e3c4e712131dd20466916edfa83fb853e78e6a059c78a951baafc5104fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

