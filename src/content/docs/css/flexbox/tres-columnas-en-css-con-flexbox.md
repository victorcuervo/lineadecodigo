---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DNSNCWQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtsx2XqajLvykL0RSr13RonqR7yRlHPXWMYl48iIHq5AiB6b90dEhN9O1bWJo1LnuviXqxYd3GopLgH68tRssbA1CqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYtJufwJfmeTN61SbKtwD8SiYE8cz7luBXJWQFiJaJJ4kwhMynxazmLWlGBjgIjbMxje72DAaB8sX4jvh6RDPVpW%2Bkr3xN677jMid%2B3hzAN291%2F%2FfKCyuzu1aM09Jb1o6hCoLQVbIjdZYRY4zc454z1m0BjVQvoc4rDeC%2BIF5MGV1pO177E8Kr7wZBRKqsrceu441rqQw663NVLPZRws99NfRmHMnA3bks3DL9NkzWTVO9PAO%2FNvqTSksUK0wWI%2BpG5gUjRDM2I%2BxvDmR6XO7gT%2FX7e45wX0aVgeBn2vXY50OkmxJuHcHoTOhTbkVoIbXgvXceTN5T2J1flxCK20vEbP85Ia5IigyhcUv%2FL%2Fj9YXAjnxpGD9ID3wugunw2%2BbKjvBmY6cKgUHLf72%2BSYVe4EtLrouoUcmd%2F7vQKhi4vS20IkVDjxmYh%2BEzNEHHzHIO1cLpt2awcx4MjrzLArOJvwfZcxxqi3IrPEIaHI8UnwJpCgUYr%2B6c%2FURSO5j2ysUA%2BX0EoN6FqW093qtqJCZw%2FAUj0GPcTbUn3KXlahq1OllGDQ%2Fib2y33A%2FqLjEjo0QVTh%2BcCAZK2EKUL4wxR1KF8Fv00zLwP63vytR%2BNxyxHKTIKgRaNRBnHBrPHmCvt1KUbg6vchQaUmNEc44wnKjXyQY6pgHN2%2BEQGTD0Y1H1Osgwx4VX0FxHF3F9Bevz4SdgUuDcGI7F5nm2xSdB5JfIqTx8Is7VqI6Vr%2F1rQC1Dq7ASno7bryiI5xaoLyixYnCbYqBiuaS7hVpBCr2uF9R9x27cM%2FI%2BsRVFXxDF0jRtIXJ6SAV8IsBEgsYqSIfJIN%2FEIDA%2F8bW9Ow%2BTWjCT5VY5HoeW3%2BBOQavt4%2FLe95zY4%2BdoLCfMBmU8h%2BPA&X-Amz-Signature=61cc4f1292a999bc5aea1fbb153beb29999d0da00e7266d45db95a3d014b7158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DNSNCWQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtsx2XqajLvykL0RSr13RonqR7yRlHPXWMYl48iIHq5AiB6b90dEhN9O1bWJo1LnuviXqxYd3GopLgH68tRssbA1CqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYtJufwJfmeTN61SbKtwD8SiYE8cz7luBXJWQFiJaJJ4kwhMynxazmLWlGBjgIjbMxje72DAaB8sX4jvh6RDPVpW%2Bkr3xN677jMid%2B3hzAN291%2F%2FfKCyuzu1aM09Jb1o6hCoLQVbIjdZYRY4zc454z1m0BjVQvoc4rDeC%2BIF5MGV1pO177E8Kr7wZBRKqsrceu441rqQw663NVLPZRws99NfRmHMnA3bks3DL9NkzWTVO9PAO%2FNvqTSksUK0wWI%2BpG5gUjRDM2I%2BxvDmR6XO7gT%2FX7e45wX0aVgeBn2vXY50OkmxJuHcHoTOhTbkVoIbXgvXceTN5T2J1flxCK20vEbP85Ia5IigyhcUv%2FL%2Fj9YXAjnxpGD9ID3wugunw2%2BbKjvBmY6cKgUHLf72%2BSYVe4EtLrouoUcmd%2F7vQKhi4vS20IkVDjxmYh%2BEzNEHHzHIO1cLpt2awcx4MjrzLArOJvwfZcxxqi3IrPEIaHI8UnwJpCgUYr%2B6c%2FURSO5j2ysUA%2BX0EoN6FqW093qtqJCZw%2FAUj0GPcTbUn3KXlahq1OllGDQ%2Fib2y33A%2FqLjEjo0QVTh%2BcCAZK2EKUL4wxR1KF8Fv00zLwP63vytR%2BNxyxHKTIKgRaNRBnHBrPHmCvt1KUbg6vchQaUmNEc44wnKjXyQY6pgHN2%2BEQGTD0Y1H1Osgwx4VX0FxHF3F9Bevz4SdgUuDcGI7F5nm2xSdB5JfIqTx8Is7VqI6Vr%2F1rQC1Dq7ASno7bryiI5xaoLyixYnCbYqBiuaS7hVpBCr2uF9R9x27cM%2FI%2BsRVFXxDF0jRtIXJ6SAV8IsBEgsYqSIfJIN%2FEIDA%2F8bW9Ow%2BTWjCT5VY5HoeW3%2BBOQavt4%2FLe95zY4%2BdoLCfMBmU8h%2BPA&X-Amz-Signature=ffc3d29cce9c0aef12c9703e6487e6ad46fd6349172be2e18ce7c6cb7cde4360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

