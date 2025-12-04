---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYCRNDD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBMmT%2FHtBzOAZeyaaFOdFvsWr5OhrewTraSmrtBTta09AiEA4PMxQ3Ba9fkxlohbC%2FyNOPEC70oHHg4Pj7hU78m6QrAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLfhuLbVGGy9UbjxtircAwt55L%2BeCV4UqYyxN3ANq8x701doFuTdIyq%2BE698sqdeTa%2Fa36Cd4C6GugU%2B4WHjCZOzNWxUZH7rOipgFbCu7sau9vsbKownepdexMhgkWUPRxOAig0hog3sIp00PsOwz6knHPK6paZuQSb%2F%2BV44%2BCmR4m8yjjgd9o79AEh4EAlzsx2i5CT%2FaAlSd78Xj4jwX%2BEmPL9TiRup49nU375MVTQLX19RRQiD4FME5TcyIHlTk%2FuUW6qbAbkxBDPSW%2BHX9Ig2e22wR%2F22dHmRxn7YRZECPTtQEcre8EaQS9AZcRhF1rsVRbqFviegf1ijjgMXHkxfPaEon8IgkFIVn8UU58nrOzwcpsCnDC1M2WGIpRctN%2BMfStJHJ9qT0aui4%2FjNMQ5JeYtpBwc06Zjq9LX9g9f2%2BI6TrRegef6sNZcoYFP8FmeTdbsvaeWSd8R36TcimyxGgGShmH6Bo4kG9qsLgCbrPz0qDI2rYYx76vTUyZwlh5J3w8I4X0XBeowlr78qna8%2FCGTVnCpN23dJ7PoBOSC9GeHy9Ya1KHk%2FulpwxnY%2FvYKKwq%2F1U8N8ZCjGovwXXKnk0gk%2F67qnBdYfQexKIRizoOSdWd8nqqEghLlm4aCavnHBMD%2FcawhvcYt1MISRxMkGOqUBGTssQL7xMecObRbi6cBlOQp8TrFsr4hgD2HvD1vaH4fHc%2FmSfWzCff%2F2i3D6a7btd466FmFXgsGNxpAsYtzt2fvM7PcHw%2BHqhwtesQhqfXtln4EZ4staZZtVpSDAyn3JHrW2zFgeh5k1DZuINGosnj6ozbcFKKAp94JNfUZoetVNQGecorEmR7IJ4kssvfMNIeUfVp9Zo6dj0K2%2FrmOxRvYohAgU&X-Amz-Signature=fbfd53a674209ea44a5cbc6cda4c07b8fb82652af9953637649a55499468472f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYCRNDD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBMmT%2FHtBzOAZeyaaFOdFvsWr5OhrewTraSmrtBTta09AiEA4PMxQ3Ba9fkxlohbC%2FyNOPEC70oHHg4Pj7hU78m6QrAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLfhuLbVGGy9UbjxtircAwt55L%2BeCV4UqYyxN3ANq8x701doFuTdIyq%2BE698sqdeTa%2Fa36Cd4C6GugU%2B4WHjCZOzNWxUZH7rOipgFbCu7sau9vsbKownepdexMhgkWUPRxOAig0hog3sIp00PsOwz6knHPK6paZuQSb%2F%2BV44%2BCmR4m8yjjgd9o79AEh4EAlzsx2i5CT%2FaAlSd78Xj4jwX%2BEmPL9TiRup49nU375MVTQLX19RRQiD4FME5TcyIHlTk%2FuUW6qbAbkxBDPSW%2BHX9Ig2e22wR%2F22dHmRxn7YRZECPTtQEcre8EaQS9AZcRhF1rsVRbqFviegf1ijjgMXHkxfPaEon8IgkFIVn8UU58nrOzwcpsCnDC1M2WGIpRctN%2BMfStJHJ9qT0aui4%2FjNMQ5JeYtpBwc06Zjq9LX9g9f2%2BI6TrRegef6sNZcoYFP8FmeTdbsvaeWSd8R36TcimyxGgGShmH6Bo4kG9qsLgCbrPz0qDI2rYYx76vTUyZwlh5J3w8I4X0XBeowlr78qna8%2FCGTVnCpN23dJ7PoBOSC9GeHy9Ya1KHk%2FulpwxnY%2FvYKKwq%2F1U8N8ZCjGovwXXKnk0gk%2F67qnBdYfQexKIRizoOSdWd8nqqEghLlm4aCavnHBMD%2FcawhvcYt1MISRxMkGOqUBGTssQL7xMecObRbi6cBlOQp8TrFsr4hgD2HvD1vaH4fHc%2FmSfWzCff%2F2i3D6a7btd466FmFXgsGNxpAsYtzt2fvM7PcHw%2BHqhwtesQhqfXtln4EZ4staZZtVpSDAyn3JHrW2zFgeh5k1DZuINGosnj6ozbcFKKAp94JNfUZoetVNQGecorEmR7IJ4kssvfMNIeUfVp9Zo6dj0K2%2FrmOxRvYohAgU&X-Amz-Signature=1d7dcf44c3bd3790aef62f2189d727b9f171f41ac2249db1db81aeed8ece16e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

