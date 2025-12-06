---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2E7X5W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD34n8zSFmFeMu0fxxtGJwyhjIWgzVmsiUCH3vWiLZd2gIhANCXv6YAYRREZCcZIyjf4iVDGiHX%2FqyDcjITIcOidIthKv8DCG8QABoMNjM3NDIzMTgzODA1IgxgiKdf5eagYWzNFiAq3AM8HaEUAvZUpqermOGEr3sd17vRI8PlzBh51xsNJ%2FidWhhJ9T%2FiHt5y7EDgqxxv%2BqZOJLh6P7nzCQmmr3UCcyFFXqMG0XJlkzMpQjekTmwihLejxM%2BBhRJOimhJA4%2BEdkfDx2lFIAwo57hQKzgJXzuW1jNfISN3j99HgocQr2Zij2vJIxU4Dj2zCRJhGoRrgvksMRYyTBMjIaH4khHGCgTugFF3z%2BkE0OlSMUgL7hX6dP3DUNDnu5ytWZ71ahxUJTRkvFRBbkPkFLAqayn6nrgeZmow8qE2CRom%2BYZj%2FUpoUAZfL4EhLQO3kldy%2Be2G%2B97uDcvf3TF6GPIuCY6VXDLnGrdbIYwWiATuX5GCBVlBogOYRNgyzBua9o%2B9IfSvwohH7u7Wubq2pEbdVRPcNbGckWqTY3nCp5dgG7y2ifHjSa1Zbkd58EINmEYQdri%2Fvs2SP6FHRYfqluQpRIqzRP%2B5ZhFydzX9mMvcedIdZde6Kkry%2FO2YB3EWckhEYEWli06prrbSoz3eIBtfUQLWaPR1G2F9e3k7ouW1EvysROEv2O3S0hscXx6Ti%2FsoWCWX8t%2FsZvsVqX2W43IUaam4%2BEJjcv4sugkv9NU6mHk4rlsbxCFWGycUqxIiFGxqlTDV%2Fc7JBjqkAd6y5uTVSRSJWQsoWTxfm52O71EGPKook3eB%2FUw0O1Pw3SvWtg1o6uHJKQPgZDgWHpURoMTXTivBSti%2FdO4IW0LzDBKd04ToX7jUWgj8Th5vaum7IDMM6NerthFRoT%2Bf98ThXWo04d2fb4ZVarMeJXZvMhnkbArueyIc2FFd8IeDoBGkkoGvR9jQ%2F2cfxK1aBTy6I%2BQ4hLq%2FEANPrqY3pp6OK2Ts&X-Amz-Signature=296528cfc536c36d6e46bc0aab4305c0c84ef1f5ee7a76b89be3d9008290268a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2E7X5W%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD34n8zSFmFeMu0fxxtGJwyhjIWgzVmsiUCH3vWiLZd2gIhANCXv6YAYRREZCcZIyjf4iVDGiHX%2FqyDcjITIcOidIthKv8DCG8QABoMNjM3NDIzMTgzODA1IgxgiKdf5eagYWzNFiAq3AM8HaEUAvZUpqermOGEr3sd17vRI8PlzBh51xsNJ%2FidWhhJ9T%2FiHt5y7EDgqxxv%2BqZOJLh6P7nzCQmmr3UCcyFFXqMG0XJlkzMpQjekTmwihLejxM%2BBhRJOimhJA4%2BEdkfDx2lFIAwo57hQKzgJXzuW1jNfISN3j99HgocQr2Zij2vJIxU4Dj2zCRJhGoRrgvksMRYyTBMjIaH4khHGCgTugFF3z%2BkE0OlSMUgL7hX6dP3DUNDnu5ytWZ71ahxUJTRkvFRBbkPkFLAqayn6nrgeZmow8qE2CRom%2BYZj%2FUpoUAZfL4EhLQO3kldy%2Be2G%2B97uDcvf3TF6GPIuCY6VXDLnGrdbIYwWiATuX5GCBVlBogOYRNgyzBua9o%2B9IfSvwohH7u7Wubq2pEbdVRPcNbGckWqTY3nCp5dgG7y2ifHjSa1Zbkd58EINmEYQdri%2Fvs2SP6FHRYfqluQpRIqzRP%2B5ZhFydzX9mMvcedIdZde6Kkry%2FO2YB3EWckhEYEWli06prrbSoz3eIBtfUQLWaPR1G2F9e3k7ouW1EvysROEv2O3S0hscXx6Ti%2FsoWCWX8t%2FsZvsVqX2W43IUaam4%2BEJjcv4sugkv9NU6mHk4rlsbxCFWGycUqxIiFGxqlTDV%2Fc7JBjqkAd6y5uTVSRSJWQsoWTxfm52O71EGPKook3eB%2FUw0O1Pw3SvWtg1o6uHJKQPgZDgWHpURoMTXTivBSti%2FdO4IW0LzDBKd04ToX7jUWgj8Th5vaum7IDMM6NerthFRoT%2Bf98ThXWo04d2fb4ZVarMeJXZvMhnkbArueyIc2FFd8IeDoBGkkoGvR9jQ%2F2cfxK1aBTy6I%2BQ4hLq%2FEANPrqY3pp6OK2Ts&X-Amz-Signature=8a34b60b3cc3b75903c936628847af66b4e0461fd615d7fcf43a4567fe53da3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

