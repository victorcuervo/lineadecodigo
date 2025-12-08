---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ATQW7Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH27w8KkX4m5tWU4tFeOrJBZK5g%2BHT3gUfFWwx2lINkzAiAmifPWxpv393q1x7hjykQQYW30bT9zgVoXqLyD0BTcWCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaJ6R%2FF7B3xI0OkQOKtwDpzq3nkTmTUKD0YrlKl4YnDVVennYbVy6RZ%2BwnnZrdFzSd4ENsw3vhwI0%2B9zldlx%2BB%2BdI3vwNB%2BuuZ3Jo4hgqq005P2%2BUWM3I3E854RDrW6ipOlbs8k1R1SWgfe2C0KAvXPksUE%2BER9LtEkvh74fxj4KIf5%2FGccZ3uV9A1bXE7V6Gxr0nbubKTLAQ854wCHJ9VVQl81nbMIPMJpz0xgtbtvNe5%2Fv1%2B%2Bc4WH%2FDNWLonuvOXknVUPqzWzOuEC5n4I1Uy2iFh%2B2PBLw%2BOxzkbe2r2WW9fxOOLYKt0kQLgEuwHCJhgCMm14boCaQ6TcC9Fo19%2BSe%2BJHR2WPV8gdDw1OMhjLR4E4XCWxXTMuhFIQN6F0tbAukDZHqAxCqGZ2WoU9jMPatX5m0PH%2BJD%2FLQzVdNRaCudUfuKNKRyqNMKB4fUOLed0OQI7ZBRnA%2FwRkJRVVhXW9wjcaSK90MJd%2BA78aE4RLoS9vxXJc4TAzXz10T%2FMRlNeYwDC3ffn5xlRHYzabhcoPDHb7gPlnCwpUTXshGUGfSsIs7rGfneIOKafMsvQKSzRNynLbSdbXh5L39JMXIzOPXav1p6CHwLOiXMXdBLiXzOozf8ZrVJompbMC7Wj%2BLmTxdXnJb4DGKYrDowsO3ZyQY6pgGbJPGPyNWp7ZH9kshLb2T5wzRW7z%2B6CDy3zCXRaCVWw%2FxEyAidUK1R1u0JKP1hGni9YCqNRE9ntc6rxfT5NDlrg1mbbP1fOsU9HPdR9J0Kcx%2FkAu6Qz1tA7ktbOzimfqaOsztjANfVdwBTbOXtvA%2BtmynkQ%2Fzzz%2F7sxR5zNLPs3D%2FcyGLsaCv20rPHGtyJoX73uVgRw2ZWDfjFkoIm6pnuACUAT4oz&X-Amz-Signature=f141d02fb8c3218084e58bd8143e96ad3daaef83e6e3993c9d6eeb0bc213dc72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ATQW7Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH27w8KkX4m5tWU4tFeOrJBZK5g%2BHT3gUfFWwx2lINkzAiAmifPWxpv393q1x7hjykQQYW30bT9zgVoXqLyD0BTcWCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaJ6R%2FF7B3xI0OkQOKtwDpzq3nkTmTUKD0YrlKl4YnDVVennYbVy6RZ%2BwnnZrdFzSd4ENsw3vhwI0%2B9zldlx%2BB%2BdI3vwNB%2BuuZ3Jo4hgqq005P2%2BUWM3I3E854RDrW6ipOlbs8k1R1SWgfe2C0KAvXPksUE%2BER9LtEkvh74fxj4KIf5%2FGccZ3uV9A1bXE7V6Gxr0nbubKTLAQ854wCHJ9VVQl81nbMIPMJpz0xgtbtvNe5%2Fv1%2B%2Bc4WH%2FDNWLonuvOXknVUPqzWzOuEC5n4I1Uy2iFh%2B2PBLw%2BOxzkbe2r2WW9fxOOLYKt0kQLgEuwHCJhgCMm14boCaQ6TcC9Fo19%2BSe%2BJHR2WPV8gdDw1OMhjLR4E4XCWxXTMuhFIQN6F0tbAukDZHqAxCqGZ2WoU9jMPatX5m0PH%2BJD%2FLQzVdNRaCudUfuKNKRyqNMKB4fUOLed0OQI7ZBRnA%2FwRkJRVVhXW9wjcaSK90MJd%2BA78aE4RLoS9vxXJc4TAzXz10T%2FMRlNeYwDC3ffn5xlRHYzabhcoPDHb7gPlnCwpUTXshGUGfSsIs7rGfneIOKafMsvQKSzRNynLbSdbXh5L39JMXIzOPXav1p6CHwLOiXMXdBLiXzOozf8ZrVJompbMC7Wj%2BLmTxdXnJb4DGKYrDowsO3ZyQY6pgGbJPGPyNWp7ZH9kshLb2T5wzRW7z%2B6CDy3zCXRaCVWw%2FxEyAidUK1R1u0JKP1hGni9YCqNRE9ntc6rxfT5NDlrg1mbbP1fOsU9HPdR9J0Kcx%2FkAu6Qz1tA7ktbOzimfqaOsztjANfVdwBTbOXtvA%2BtmynkQ%2Fzzz%2F7sxR5zNLPs3D%2FcyGLsaCv20rPHGtyJoX73uVgRw2ZWDfjFkoIm6pnuACUAT4oz&X-Amz-Signature=013f16e8e204a35d438f90e7d69d32673f3a1af1fdd299ba5df8608df6ae4a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

