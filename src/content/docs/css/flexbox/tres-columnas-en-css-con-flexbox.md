---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JLWYZGU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEGZLv0OOONxrNWrYACerI4NRRS3XBEO0ntl4ydQlaeuAiEA0AQXoNxtsrNQmr8MgT%2F7ifVx508FwmWJD3wsZs7SJF8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNrQ0k7XrEFuGfhymyrcA1ntAUVhhEE2HqnMqRq%2Fkve2U3yHP17deF6xFwvUfWgKU4i4NE4ZCKCmlV8W3wQO7%2F%2FzHLleVNujQppcUGSIgQFZo1SLSZK2DyxM%2B%2FLuQtDjFChYKDG%2FXfl9DwIJfUjXufurAfv3538s2dAVdmPNVihi3kuIuuuttWuLDfob9Uvz4KhHcthw6J0AfgIojIljqpuGkmP0cdl1KuAKzV7fQDasAM9j%2BEkMNMH5GRMFDaJeH0%2B9x%2BhTwmxXT8ln177dZ%2FS4Edcg0Pky50u6jX%2BDTLtdEtIptS2xH8M4rq0Ur022FufGkgWZF0ujQ%2FMkntoHqU%2BAPSmIN6QtTQdxgOoiVzztfEyVzLQFNKO9nZy0njTAt31LloAVHoZAIonFTOF0iMby8ZoB4Mg62W%2BBlYR1%2BLyy2torYmdjn650OwENutGVjSx3Poe9UHNZ6yPBzc16PicFH2WNgOpQj2ybCyTvYjZ8ybbmLJoORkGu1jp9jzL9KVKQLWCPKg8nsRYN4LajU1yKXglqRa2jHgb732qZbl1E9MEzHw3bDUZJdOfvCREMt8bPibpmUk1mOsCsLXJr2rxVZ%2Fx9DY8Tz54bLCT%2Bj%2Bqog9fDFMFo61KrN9LurSmxUjPJl3GNzJg0LvbvMPXIxckGOqUBoFlN4ZeqOnI0aoqNQz6DSL8bRMcWWu95YfyDniJvf%2BlB8YJGW2HR2wdPEgl5Y8pb2gThCYqlKcATU08x3TeSUD9RcfEbb0PrXQrb2FGmDLnRmTZ9Bcd8bJehoWCTjowzD%2FEkAWGnPPgNTDuTAhqSXlbxzJ50VZSpxfePWeAvIO0XYl8H5dLn4g48Pq1%2BxWUxYqHOds%2FVL%2BBlSky%2Bq3Fi2k7ZfIUj&X-Amz-Signature=f963b526c191fc97aedf4867c6377642fa8d54b0f6c1d196828e60cdf106ca4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JLWYZGU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEGZLv0OOONxrNWrYACerI4NRRS3XBEO0ntl4ydQlaeuAiEA0AQXoNxtsrNQmr8MgT%2F7ifVx508FwmWJD3wsZs7SJF8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNrQ0k7XrEFuGfhymyrcA1ntAUVhhEE2HqnMqRq%2Fkve2U3yHP17deF6xFwvUfWgKU4i4NE4ZCKCmlV8W3wQO7%2F%2FzHLleVNujQppcUGSIgQFZo1SLSZK2DyxM%2B%2FLuQtDjFChYKDG%2FXfl9DwIJfUjXufurAfv3538s2dAVdmPNVihi3kuIuuuttWuLDfob9Uvz4KhHcthw6J0AfgIojIljqpuGkmP0cdl1KuAKzV7fQDasAM9j%2BEkMNMH5GRMFDaJeH0%2B9x%2BhTwmxXT8ln177dZ%2FS4Edcg0Pky50u6jX%2BDTLtdEtIptS2xH8M4rq0Ur022FufGkgWZF0ujQ%2FMkntoHqU%2BAPSmIN6QtTQdxgOoiVzztfEyVzLQFNKO9nZy0njTAt31LloAVHoZAIonFTOF0iMby8ZoB4Mg62W%2BBlYR1%2BLyy2torYmdjn650OwENutGVjSx3Poe9UHNZ6yPBzc16PicFH2WNgOpQj2ybCyTvYjZ8ybbmLJoORkGu1jp9jzL9KVKQLWCPKg8nsRYN4LajU1yKXglqRa2jHgb732qZbl1E9MEzHw3bDUZJdOfvCREMt8bPibpmUk1mOsCsLXJr2rxVZ%2Fx9DY8Tz54bLCT%2Bj%2Bqog9fDFMFo61KrN9LurSmxUjPJl3GNzJg0LvbvMPXIxckGOqUBoFlN4ZeqOnI0aoqNQz6DSL8bRMcWWu95YfyDniJvf%2BlB8YJGW2HR2wdPEgl5Y8pb2gThCYqlKcATU08x3TeSUD9RcfEbb0PrXQrb2FGmDLnRmTZ9Bcd8bJehoWCTjowzD%2FEkAWGnPPgNTDuTAhqSXlbxzJ50VZSpxfePWeAvIO0XYl8H5dLn4g48Pq1%2BxWUxYqHOds%2FVL%2BBlSky%2Bq3Fi2k7ZfIUj&X-Amz-Signature=aec1a42aa06a16b89c3718ac7d720ada73d1b83516753982f86a961cdba5f547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

