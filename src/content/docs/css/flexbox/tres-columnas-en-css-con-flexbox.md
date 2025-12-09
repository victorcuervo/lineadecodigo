---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIXBNEW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlkGFRIX3%2F%2BImnfArQLGH%2B%2B6IjxxlGuhQXDNPGqLTB3AiB7zDaMgEYQbIzkSSh5QuntgMhSnRu1IW20E4J8pex3pyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu8LSFKKpe1HOCgtRKtwD6Ucb3RVysbtN3Y2gx%2BoBHaBtIkuey58b4m7WLwiVQViuzADpsPZQ5HZerTsBvPJBhdSVDg8N5N2z%2BEBymdO9pS%2FG9f2byxxL%2FvsfuzDRbk7BNwpPz%2FXRSdMBoo1PWgbCW1h1XpLPNJxekwoSl4purCycNWXXPq7kCWgSEi48VHu%2BhbTJVO3W7nxQSHi81hwzvM%2B%2BSo5ZMFsVCTdF9%2FCxPb5%2BhHQeJPsVinnqiElNI0hIdi9tY%2Bk5RJUcevzFv7SyXhnrlQBo0Y5vt6nnIYvRMH%2FZfjYAhRHzvYofy55YUHeDJi0SxoYbIeTfFFLBvc4nuJYRCRy0Y9jFz70Dh62T2VoJRyx6yJYyUR0R6qt5yFH0aJ2ebt1xjS90dQC%2BMrUNWBQRYe6R%2FFi4GpzY38La%2Br%2B7lRyJYC3BHmV8xbrWAwuxRzv3mTTXIt9GkSuGHR5HQGYLmz2O%2Fi2Ftfzw8%2FPPnJTWSu%2F8LwqJqHa1D9lVYdqF7MbUi5s3IjJ6BMPj6fueLrDoVIikF6NTm%2BH%2F0Mv6K5ycWauhhDZruvZEiHajceSZffRW0ql%2FzPhoo2QjoxJysbeHUJ%2BCoG06B%2BPcr7yWCxj59qz%2Fw36XKdxBuvDHS4GAysDPmANEUFvkS1Aw863eyQY6pgGAJDRhrUohSDkbMeH0bo5jLPJUY6w0D63UJnTLc6bkKyejM1cboy5OeDyF9Pszh4twhiqeVy6mVuyYIXQc%2BZVCPPkD6YS6XCwK5%2FEXG9Lm9svUOsiVPXBK5NIUuZt4cSG2rHg8ZU41bJPEi56F493eJuge6YmIQHzXwnYj1sl8JiKzaFZ4v1GsXDery9%2F8n6u8a%2BTkvM%2B9I2tHCJryHrSo2lTcVlku&X-Amz-Signature=c17a0c994b6755102bf5ba65d1d71d92ce2f99ddbab95582aed9e420c907bbe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIXBNEW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlkGFRIX3%2F%2BImnfArQLGH%2B%2B6IjxxlGuhQXDNPGqLTB3AiB7zDaMgEYQbIzkSSh5QuntgMhSnRu1IW20E4J8pex3pyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu8LSFKKpe1HOCgtRKtwD6Ucb3RVysbtN3Y2gx%2BoBHaBtIkuey58b4m7WLwiVQViuzADpsPZQ5HZerTsBvPJBhdSVDg8N5N2z%2BEBymdO9pS%2FG9f2byxxL%2FvsfuzDRbk7BNwpPz%2FXRSdMBoo1PWgbCW1h1XpLPNJxekwoSl4purCycNWXXPq7kCWgSEi48VHu%2BhbTJVO3W7nxQSHi81hwzvM%2B%2BSo5ZMFsVCTdF9%2FCxPb5%2BhHQeJPsVinnqiElNI0hIdi9tY%2Bk5RJUcevzFv7SyXhnrlQBo0Y5vt6nnIYvRMH%2FZfjYAhRHzvYofy55YUHeDJi0SxoYbIeTfFFLBvc4nuJYRCRy0Y9jFz70Dh62T2VoJRyx6yJYyUR0R6qt5yFH0aJ2ebt1xjS90dQC%2BMrUNWBQRYe6R%2FFi4GpzY38La%2Br%2B7lRyJYC3BHmV8xbrWAwuxRzv3mTTXIt9GkSuGHR5HQGYLmz2O%2Fi2Ftfzw8%2FPPnJTWSu%2F8LwqJqHa1D9lVYdqF7MbUi5s3IjJ6BMPj6fueLrDoVIikF6NTm%2BH%2F0Mv6K5ycWauhhDZruvZEiHajceSZffRW0ql%2FzPhoo2QjoxJysbeHUJ%2BCoG06B%2BPcr7yWCxj59qz%2Fw36XKdxBuvDHS4GAysDPmANEUFvkS1Aw863eyQY6pgGAJDRhrUohSDkbMeH0bo5jLPJUY6w0D63UJnTLc6bkKyejM1cboy5OeDyF9Pszh4twhiqeVy6mVuyYIXQc%2BZVCPPkD6YS6XCwK5%2FEXG9Lm9svUOsiVPXBK5NIUuZt4cSG2rHg8ZU41bJPEi56F493eJuge6YmIQHzXwnYj1sl8JiKzaFZ4v1GsXDery9%2F8n6u8a%2BTkvM%2B9I2tHCJryHrSo2lTcVlku&X-Amz-Signature=290acd08dcb9f96c1c2b4a9a96553d87f9184bd82e7ce9d62c30ab0f1ea2bb6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

