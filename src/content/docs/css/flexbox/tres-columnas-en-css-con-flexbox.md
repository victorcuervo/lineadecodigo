---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QEO7OU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDuvWRkXYejqIV9EiAbrEbpgL4XcpFuGmdqx4QCnqOa6gIgFDt%2Ft%2F4PeHoJ4Y2R0E0m4e4o1t3fJFWqoOViey0CnVcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBZQLkyDzYDdOmrGwSrcAx8V5vaOU0%2FloW1P4cCK0hZn7cI2zFEPJnmYOm92M2yyLAKmhQdPTlOs%2BR78zRNMVap3Kew5e%2FFA5Nkc1XHpsoqaRRInPbPcqnM89%2Fy9H9ftTQ5zAz%2B5lfXi20Z6xMQ0VG4b%2FHc7NZ0ngySi9jZ%2FFIPAgnzAYD%2BZc8gIoO%2BjuhJS51n1A1o9tA9SaKVwmoDmvs%2BBgCiCm%2Fj7WYBf1DP0MxocNwvlPOGkQ36Agy5pJK3mLsAg%2FM2TSE%2BIV9tUnrs4NKhseCIdzHOSk7VMyPdnHUaQbZWzNOzvNqJ42M9LJ9QOqUi6%2FteEevKhHBJM24hp7UCxW5aY1Tu7dYpe%2FXl7Tme2pX6YYow7j%2BvVVT%2FxMvJKJjL6Zj2i0A7EVKn2AF0ZTFg0WwUV11A9B9zlB0CCn7fJeNM7thQW6eVNVtz72ccXcbee46UbBJhuQm6%2BleHmDLiNVHPhnbKlh%2ByQ%2BErgGsNA5si0yebk5Gf5nWykdNjeoEFN8Gc%2B8kQ5M9BLpxJ82pZToltUPUHqIDDVEXLNnAQMH0ksqHLKfogjJA8kEB2DCANgPexHl96uqyptQZuwuPuQXLt%2BypW5H1NT%2FhxQnlTCD7xUqZETawKeyL1cX6LRh7uSByc%2BXzvWHKFjMMKixskGOqUBa8TgQmDnAHshZ%2B%2BjsJmOoM2OBbiuEYRBxsnbgMO%2B1jtOSj%2F0AHqdDhItgF8Ss5ViHgL%2FKo1Tf8bz2HwjCYDLvM8MXhSWL2oodeGCJOT6hvBum2%2BYGKTcjJYQeK9BGpIzyB5Q9sQ5WF5AZLFxQS597jAUXkGGq%2BDaW0NzC3UN11ZufC1hzqWSx%2BtbH%2BKEJHqbyH5vMkd4GGPqZZybdQTU4tIt4m0p&X-Amz-Signature=277f26109905344386af002fe59c69e97aca0b430625f478da6e8fd91d4718a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QEO7OU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDuvWRkXYejqIV9EiAbrEbpgL4XcpFuGmdqx4QCnqOa6gIgFDt%2Ft%2F4PeHoJ4Y2R0E0m4e4o1t3fJFWqoOViey0CnVcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBZQLkyDzYDdOmrGwSrcAx8V5vaOU0%2FloW1P4cCK0hZn7cI2zFEPJnmYOm92M2yyLAKmhQdPTlOs%2BR78zRNMVap3Kew5e%2FFA5Nkc1XHpsoqaRRInPbPcqnM89%2Fy9H9ftTQ5zAz%2B5lfXi20Z6xMQ0VG4b%2FHc7NZ0ngySi9jZ%2FFIPAgnzAYD%2BZc8gIoO%2BjuhJS51n1A1o9tA9SaKVwmoDmvs%2BBgCiCm%2Fj7WYBf1DP0MxocNwvlPOGkQ36Agy5pJK3mLsAg%2FM2TSE%2BIV9tUnrs4NKhseCIdzHOSk7VMyPdnHUaQbZWzNOzvNqJ42M9LJ9QOqUi6%2FteEevKhHBJM24hp7UCxW5aY1Tu7dYpe%2FXl7Tme2pX6YYow7j%2BvVVT%2FxMvJKJjL6Zj2i0A7EVKn2AF0ZTFg0WwUV11A9B9zlB0CCn7fJeNM7thQW6eVNVtz72ccXcbee46UbBJhuQm6%2BleHmDLiNVHPhnbKlh%2ByQ%2BErgGsNA5si0yebk5Gf5nWykdNjeoEFN8Gc%2B8kQ5M9BLpxJ82pZToltUPUHqIDDVEXLNnAQMH0ksqHLKfogjJA8kEB2DCANgPexHl96uqyptQZuwuPuQXLt%2BypW5H1NT%2FhxQnlTCD7xUqZETawKeyL1cX6LRh7uSByc%2BXzvWHKFjMMKixskGOqUBa8TgQmDnAHshZ%2B%2BjsJmOoM2OBbiuEYRBxsnbgMO%2B1jtOSj%2F0AHqdDhItgF8Ss5ViHgL%2FKo1Tf8bz2HwjCYDLvM8MXhSWL2oodeGCJOT6hvBum2%2BYGKTcjJYQeK9BGpIzyB5Q9sQ5WF5AZLFxQS597jAUXkGGq%2BDaW0NzC3UN11ZufC1hzqWSx%2BtbH%2BKEJHqbyH5vMkd4GGPqZZybdQTU4tIt4m0p&X-Amz-Signature=163b11a12952c4f5566059e3794f9d4a0c1db65beb773264540dbf030958a33e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

