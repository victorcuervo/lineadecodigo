---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZXH7ZQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdZmF%2BPNyA36r2jmtSiC2wrdOS8rVOUKgXONvtkqVf%2FAiAxARTWkS0Umu22FLQYoojdbF190zQJ%2BZW1sugvYSwOKyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM2mQbA6Eo2AZCsNQuKtwD2ijzJMQQkw24pLELpbrwATZ1Pj2sByj%2F1K9VBuEpPOf%2BaprNXeSQDMUoZDFiY%2FdwRBJenkVb2BoWz4mNNsJP6qKCz0f%2Br8y6W7wTGbet4w3x79RnxVXdH6U3C65vLKOVg2yfD1IbtJ%2FIDjXZHIftno2h1czMTgUi8eyqzYC23QBhZP8qAw3SqPhLcI7fkynGwbdNRbcoTNkgdPDKVIXXDZWzbz6jDfQlia90ZJxM%2Bll%2BoJlnEXqsera6is5vwrmFo4n3s1eqMxTH%2F1QU4MUM%2FaYSTeRI%2FfoOWlDPiJhfri5XtfPosJ0QauavljooNHwD0vvhMF6F9hGHmjQTpYmAooDbZgW19vWg2gjD1F6MG5bhoJpKjd7fv9%2BVC9m4TVIPvQwDPiRc9lGUquMeykCAWKjjApMILKisH5jOQ3uyYjfWZgAgOrVpfOgdDwqIPFDBWeJOZfKM6Jn8is5daSRyzxh%2B1QM%2BCzQn3cbFZrJ5zYqfJBkSqsdMCdJHM9bayL8tiVZhZD7RTKzrPhEh%2BkFZHYNBxsRjujF9E4gfOW42RzhoYndKyKtETt3Y7wGo1vpqZMn3hinQmN%2F4lqe%2FP74dI5GpqFIOyIiu4pMT7pjX4HU9Oakb1kXnewwL7OQwyv3OyQY6pgGhfPVsNMw9PUFrN1Mt%2FhFRZkj%2B9W1Lp%2BhDUFZmqdC9sfzJO8%2BQhQbRUWkX8%2FIlRXKcMza86BuMp1dZ%2F5xdYj1%2BtzeaRkhtPXZS3TmOCzUI2mZU17WxO87%2FRA2LKQinXYHj4TyQql7ILUx9T3QdMotqpH8PjuA70SjayW%2FXnI0Yae6a74kse5TipgOWlITorTv1vm3cOGSwZozfZPKc0m67MtjwAPls&X-Amz-Signature=3e3fe10548a55507f49babfce2d31ebe04abe10307fbc08244fa4bb5e8c075d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZXH7ZQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdZmF%2BPNyA36r2jmtSiC2wrdOS8rVOUKgXONvtkqVf%2FAiAxARTWkS0Umu22FLQYoojdbF190zQJ%2BZW1sugvYSwOKyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM2mQbA6Eo2AZCsNQuKtwD2ijzJMQQkw24pLELpbrwATZ1Pj2sByj%2F1K9VBuEpPOf%2BaprNXeSQDMUoZDFiY%2FdwRBJenkVb2BoWz4mNNsJP6qKCz0f%2Br8y6W7wTGbet4w3x79RnxVXdH6U3C65vLKOVg2yfD1IbtJ%2FIDjXZHIftno2h1czMTgUi8eyqzYC23QBhZP8qAw3SqPhLcI7fkynGwbdNRbcoTNkgdPDKVIXXDZWzbz6jDfQlia90ZJxM%2Bll%2BoJlnEXqsera6is5vwrmFo4n3s1eqMxTH%2F1QU4MUM%2FaYSTeRI%2FfoOWlDPiJhfri5XtfPosJ0QauavljooNHwD0vvhMF6F9hGHmjQTpYmAooDbZgW19vWg2gjD1F6MG5bhoJpKjd7fv9%2BVC9m4TVIPvQwDPiRc9lGUquMeykCAWKjjApMILKisH5jOQ3uyYjfWZgAgOrVpfOgdDwqIPFDBWeJOZfKM6Jn8is5daSRyzxh%2B1QM%2BCzQn3cbFZrJ5zYqfJBkSqsdMCdJHM9bayL8tiVZhZD7RTKzrPhEh%2BkFZHYNBxsRjujF9E4gfOW42RzhoYndKyKtETt3Y7wGo1vpqZMn3hinQmN%2F4lqe%2FP74dI5GpqFIOyIiu4pMT7pjX4HU9Oakb1kXnewwL7OQwyv3OyQY6pgGhfPVsNMw9PUFrN1Mt%2FhFRZkj%2B9W1Lp%2BhDUFZmqdC9sfzJO8%2BQhQbRUWkX8%2FIlRXKcMza86BuMp1dZ%2F5xdYj1%2BtzeaRkhtPXZS3TmOCzUI2mZU17WxO87%2FRA2LKQinXYHj4TyQql7ILUx9T3QdMotqpH8PjuA70SjayW%2FXnI0Yae6a74kse5TipgOWlITorTv1vm3cOGSwZozfZPKc0m67MtjwAPls&X-Amz-Signature=0a9acadce8660d20dc940a83ab7bd115a254f302fccfa392b2c9ea687a33a1c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

