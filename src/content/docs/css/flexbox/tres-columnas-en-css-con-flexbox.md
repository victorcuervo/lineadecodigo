---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6Z2AE6F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNRVR2K6vIwgaFxVx7EZlzDD95bTJGPkEtmWFcnDju9gIhAKVEFXj%2FgNzCC9EkfK0%2FS%2BWKKHCown2zlzig%2FL29mnseKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztLvIbF9hr6Q%2Fc%2FHMq3AM6bdum0NrbJasbodH9csHTEN6Wk%2BOkWdwTdCQPJf%2BewvcxthNDf6yRif3ogd%2Brr9OKCxQPxeBGgRIrwcp%2F8CCKyi34G1uMO9o9te0jce5N1qQESJT1rnCQbIAyEqgrOzmefA8mlcUUebXmip4DBRLThypesMy2a8FVlBq1IjLXcVK6Khs%2F0T7dGfdtWNmosjlclad6mtsRC8o7RGggl7Y7567I5MxnQSASfdvC3zkpUE1l2D%2B08XGsbHjouGpmkKgvC%2FehA%2F3BWbRLfoPWrzluXBgJOzRAQKO00IW7w0t2mtNdvr5nF%2Bx1S2aD1XnL3Bmc2fJqr8Bs15av5Q4nQNAIQ3%2ByxuIMnDT8tV9W20iQoCKm6dCykQb1xr7IGfjhW7kmgnipv3zQ9fCtqocLvwC%2BCIOFqrlxhBv8Z%2BxjFnm5c1GVfaDTmf06r5sjYxE%2F%2FwfdFk8DiLLIOfijq5y07wUPOs4e%2BIeQfEnPV%2FDJj6wv%2FCjh%2Fz9QsNr0jcvQM7oLb7yd%2FkcdfyvbDTTekohz8ZAhTyN1%2BS66B%2BCaPXoZZkC%2Fwkct3SXKx%2BMHzm17JFFNF4LzLK5w%2F%2BiBosr2VA2C27IIqJhT5edPijo16rkDokCZDpY%2F61%2FsC7lCw5aqbzC3jt7JBjqkAa96TNwrPXjZgS5mxGIVB5iwjjMFPZuUHqCYH3p%2Fx7%2BXGaOGv8uKTrtd1kA5aEIguASNTVcBkeVWe4Dm1okYOJxdlW8sADhW%2FJglWcd7I%2BvEL3s0Y07KG%2F2MNTI9%2FC%2FiROKXBzyLSYC1s8GVXs4a9oVvrllB%2BGSIfA6LwOrqtE3XiiqGY6DWI0iAVPEYu4h%2BO9YfE4vk1OJpTlJRG6JkMLhVue%2BK&X-Amz-Signature=5b6e781565d4730554e3a962e148d122d85baa443a83f22a5a6f20e87a5960d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6Z2AE6F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNRVR2K6vIwgaFxVx7EZlzDD95bTJGPkEtmWFcnDju9gIhAKVEFXj%2FgNzCC9EkfK0%2FS%2BWKKHCown2zlzig%2FL29mnseKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztLvIbF9hr6Q%2Fc%2FHMq3AM6bdum0NrbJasbodH9csHTEN6Wk%2BOkWdwTdCQPJf%2BewvcxthNDf6yRif3ogd%2Brr9OKCxQPxeBGgRIrwcp%2F8CCKyi34G1uMO9o9te0jce5N1qQESJT1rnCQbIAyEqgrOzmefA8mlcUUebXmip4DBRLThypesMy2a8FVlBq1IjLXcVK6Khs%2F0T7dGfdtWNmosjlclad6mtsRC8o7RGggl7Y7567I5MxnQSASfdvC3zkpUE1l2D%2B08XGsbHjouGpmkKgvC%2FehA%2F3BWbRLfoPWrzluXBgJOzRAQKO00IW7w0t2mtNdvr5nF%2Bx1S2aD1XnL3Bmc2fJqr8Bs15av5Q4nQNAIQ3%2ByxuIMnDT8tV9W20iQoCKm6dCykQb1xr7IGfjhW7kmgnipv3zQ9fCtqocLvwC%2BCIOFqrlxhBv8Z%2BxjFnm5c1GVfaDTmf06r5sjYxE%2F%2FwfdFk8DiLLIOfijq5y07wUPOs4e%2BIeQfEnPV%2FDJj6wv%2FCjh%2Fz9QsNr0jcvQM7oLb7yd%2FkcdfyvbDTTekohz8ZAhTyN1%2BS66B%2BCaPXoZZkC%2Fwkct3SXKx%2BMHzm17JFFNF4LzLK5w%2F%2BiBosr2VA2C27IIqJhT5edPijo16rkDokCZDpY%2F61%2FsC7lCw5aqbzC3jt7JBjqkAa96TNwrPXjZgS5mxGIVB5iwjjMFPZuUHqCYH3p%2Fx7%2BXGaOGv8uKTrtd1kA5aEIguASNTVcBkeVWe4Dm1okYOJxdlW8sADhW%2FJglWcd7I%2BvEL3s0Y07KG%2F2MNTI9%2FC%2FiROKXBzyLSYC1s8GVXs4a9oVvrllB%2BGSIfA6LwOrqtE3XiiqGY6DWI0iAVPEYu4h%2BO9YfE4vk1OJpTlJRG6JkMLhVue%2BK&X-Amz-Signature=d43f481750581bb6a1b05022738f2e3dddd590fcdd8ae4952b42067473baa500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

