---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNB56M7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDwnr6yvGUFEidI5mM5WG%2BMPkd4KWDwBEE3sxI15BQ9jAiBHB49%2B4EC%2FUarMQjlU6oizMEx2KGOXdMirfVpVs4Tslir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMBNTnodNAbQJZHrrJKtwD14zLKgcWqtpGhxXxtHZ62UbWIIFvT8pwlXoK98oBJEGWmSHEwh7zYGhwFerHIslg%2F%2Fv2RC3WlNbJ1VInIBqBTZvEVv4RWwfQI2QPFimf0sEwPLBBJnOGiiBdpC1DNfdjjtC7eI5wi6lVCyvvY%2BXd2A6Dm0mjdBxZn48wG5yORql0gfula1oTOCAc217LWefcsUpdyTNXTw3q3QBTtJfziNMpasGtGy%2B34EQjew1Z29FBC1UDRcvmaAeMD5CAgFpqBbADb2dzrQOFqiFq0dEzpyvVg%2BCigEQ4bZ1FCUSxbpAVYudZCDRQMfSo9aWEeyuQ3b7lVdoaNlPFhweEScZaiU6jAZ2m31MjzlMfyOePV0InHTaX6ZNzJI5%2BUQQLVn84x6myMEnCVr9WNKQ8dy7jMuHxH4Forch6xokXw46lvCiX2P6jfsq9DnUjN8kFIW0pePKljaQBIM9VFJRSEbj0Q1oR5s6B311hK%2BSNx%2FHU9UHlBRkC3N7f%2FG3TaKfZrv9qIP2HNwOxryDWqUieB%2B71hKYNa7HSsI%2B8%2FWpOvH5MGlyOz1sQjSyP%2BIIZfcWPTsMmFsgASMJwSAGfirWAeG4XB1St5WME%2BBO%2BYMtLEZFtnlGscPSEBTTCSbcEHBEw5dPDyQY6pgFxMw0349Zqam36IyKeLPcu27vmQglU9YLKc8m6Swi3U3Uak%2Fi25BJsdZOxAsRaEWA%2F9kDgZzhrYXiSWpiKvDOd0X3KWQgkK3Zech2pBND0DMCLSCXaWT2Ba0Fa4x1SVgnbjOnHMb1lGTGfIm627O6RMr1E4l9H7Edtfk9f0PAs2aHt%2FJezPI6MUX%2BRj%2BoDhlby2C4s5gUE9JA7RTvznUcSYO2dO0PE&X-Amz-Signature=bb1c59d09273745d1cc17790651e028ecf3d32e4b538e42a6cdfaa0d760665d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNB56M7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDwnr6yvGUFEidI5mM5WG%2BMPkd4KWDwBEE3sxI15BQ9jAiBHB49%2B4EC%2FUarMQjlU6oizMEx2KGOXdMirfVpVs4Tslir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMBNTnodNAbQJZHrrJKtwD14zLKgcWqtpGhxXxtHZ62UbWIIFvT8pwlXoK98oBJEGWmSHEwh7zYGhwFerHIslg%2F%2Fv2RC3WlNbJ1VInIBqBTZvEVv4RWwfQI2QPFimf0sEwPLBBJnOGiiBdpC1DNfdjjtC7eI5wi6lVCyvvY%2BXd2A6Dm0mjdBxZn48wG5yORql0gfula1oTOCAc217LWefcsUpdyTNXTw3q3QBTtJfziNMpasGtGy%2B34EQjew1Z29FBC1UDRcvmaAeMD5CAgFpqBbADb2dzrQOFqiFq0dEzpyvVg%2BCigEQ4bZ1FCUSxbpAVYudZCDRQMfSo9aWEeyuQ3b7lVdoaNlPFhweEScZaiU6jAZ2m31MjzlMfyOePV0InHTaX6ZNzJI5%2BUQQLVn84x6myMEnCVr9WNKQ8dy7jMuHxH4Forch6xokXw46lvCiX2P6jfsq9DnUjN8kFIW0pePKljaQBIM9VFJRSEbj0Q1oR5s6B311hK%2BSNx%2FHU9UHlBRkC3N7f%2FG3TaKfZrv9qIP2HNwOxryDWqUieB%2B71hKYNa7HSsI%2B8%2FWpOvH5MGlyOz1sQjSyP%2BIIZfcWPTsMmFsgASMJwSAGfirWAeG4XB1St5WME%2BBO%2BYMtLEZFtnlGscPSEBTTCSbcEHBEw5dPDyQY6pgFxMw0349Zqam36IyKeLPcu27vmQglU9YLKc8m6Swi3U3Uak%2Fi25BJsdZOxAsRaEWA%2F9kDgZzhrYXiSWpiKvDOd0X3KWQgkK3Zech2pBND0DMCLSCXaWT2Ba0Fa4x1SVgnbjOnHMb1lGTGfIm627O6RMr1E4l9H7Edtfk9f0PAs2aHt%2FJezPI6MUX%2BRj%2BoDhlby2C4s5gUE9JA7RTvznUcSYO2dO0PE&X-Amz-Signature=a0ffa0629e6ac459d503a3761f50beb5ced3cb385a858bb3ba041197525ea23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

