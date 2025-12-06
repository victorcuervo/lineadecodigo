---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNA72PN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FWeClO1bntocET%2BuUx%2BEMOplqk9j7w1UY3%2FI%2BGXUupAiAVH6%2BdJ9nZDi6F%2BOG%2FeNjkH4qusLwTVAGf%2BEpegLyPxCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0XLc0XZTtMlh3aZFKtwD%2BIjzGIMucyRymN48whduj5zXtH%2B9uOfJwHrQI37pHSf4%2FFrp5dFcZpFxv01rBlH%2F0PLNvVvI617hQkNN2PJ4xduMe9RiEJ5tt%2FJ3ihkxX2erFisZe%2BA6tRhREjloZLz3usR3KiTTNW9n0r2rODChjfJ%2BMH5U9JENVpHPRum2sElMVsPJD4dDnlvb3mfuq00hwYJ8aauSg2o17YS%2Bh8UI%2B3LPtmbQr6YghiYLxyaTTQWYw3PCqDAuBJyiGRhrMgeFGzbcs9WWUTRCuv9Vknuav%2Fs7efEM5Mqckn0QPZepHJJxsScYjfKl6qPP6BQ5vsZlQ20uDaI5M5ARUltdkhj0b4vet94qR8OlCwprp7oyMbEY8IAOFteMsggNoHZUuJujRKJ6GOHijmN64tx1coj6N4rSKDeNQuU5uzNZ%2BV2RNXr62idYoIGR1GOFkUEOtKNRj721o7zb9JXLhiaQrZGtRvvIHDJQ5ArLWzcY28OX%2FGVmzu7La1UGHmRXwP8C1%2BhmegU%2FW%2BfJAe1Tpcc0r%2Fe1dMAAzO2u6LJtmLBXdye8oOEsqEcSN1DCOQFQ%2BoSVdTQSjVazuHXAcNDADfRhEkPShAkzMOFCkPBPhIFvR10ZDA2L8Z151wct4S3cYY8w1qbQyQY6pgE2lnsaKjYVdIKElBeXxJ5FJoVVjFJzWF%2FAem9CenkR6%2B5CgytnSRbMCmezs31c3rJFzAG%2FxjmeCaW9A2azsUnpPAGyNd0jZmI0%2Fidl4Jke5b9Wk73uvbXvnCkHLK5ZEoxCPDPjQ6wqMnKJqSZwQ97nxtOLijLbG43BoJxBvJ0asWERCP0c5BS%2BMnmopaAA0M21hfjA5qyaTzB7%2B89eMHTESDYUVUqD&X-Amz-Signature=c1abe049a218f984deec0ff894e49786d9515458154b9c81918ff086d1f04def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNA72PN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FWeClO1bntocET%2BuUx%2BEMOplqk9j7w1UY3%2FI%2BGXUupAiAVH6%2BdJ9nZDi6F%2BOG%2FeNjkH4qusLwTVAGf%2BEpegLyPxCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM0XLc0XZTtMlh3aZFKtwD%2BIjzGIMucyRymN48whduj5zXtH%2B9uOfJwHrQI37pHSf4%2FFrp5dFcZpFxv01rBlH%2F0PLNvVvI617hQkNN2PJ4xduMe9RiEJ5tt%2FJ3ihkxX2erFisZe%2BA6tRhREjloZLz3usR3KiTTNW9n0r2rODChjfJ%2BMH5U9JENVpHPRum2sElMVsPJD4dDnlvb3mfuq00hwYJ8aauSg2o17YS%2Bh8UI%2B3LPtmbQr6YghiYLxyaTTQWYw3PCqDAuBJyiGRhrMgeFGzbcs9WWUTRCuv9Vknuav%2Fs7efEM5Mqckn0QPZepHJJxsScYjfKl6qPP6BQ5vsZlQ20uDaI5M5ARUltdkhj0b4vet94qR8OlCwprp7oyMbEY8IAOFteMsggNoHZUuJujRKJ6GOHijmN64tx1coj6N4rSKDeNQuU5uzNZ%2BV2RNXr62idYoIGR1GOFkUEOtKNRj721o7zb9JXLhiaQrZGtRvvIHDJQ5ArLWzcY28OX%2FGVmzu7La1UGHmRXwP8C1%2BhmegU%2FW%2BfJAe1Tpcc0r%2Fe1dMAAzO2u6LJtmLBXdye8oOEsqEcSN1DCOQFQ%2BoSVdTQSjVazuHXAcNDADfRhEkPShAkzMOFCkPBPhIFvR10ZDA2L8Z151wct4S3cYY8w1qbQyQY6pgE2lnsaKjYVdIKElBeXxJ5FJoVVjFJzWF%2FAem9CenkR6%2B5CgytnSRbMCmezs31c3rJFzAG%2FxjmeCaW9A2azsUnpPAGyNd0jZmI0%2Fidl4Jke5b9Wk73uvbXvnCkHLK5ZEoxCPDPjQ6wqMnKJqSZwQ97nxtOLijLbG43BoJxBvJ0asWERCP0c5BS%2BMnmopaAA0M21hfjA5qyaTzB7%2B89eMHTESDYUVUqD&X-Amz-Signature=3d104da1d58b1fb9e5f5244bb373fe2994d05ee63232c0223c6e4b777e777d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

