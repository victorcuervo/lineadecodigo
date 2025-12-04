---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCYKKBAQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC%2B5wUdu9aOLtSPBKrHBLcA8QKxQqk%2FQLNBrR5zmbExZAIhAKZmPKc0kXBHc3rhv4rVDoC2%2BYq%2B5xwNXo1Dt9GfcT7hKv8DCDwQABoMNjM3NDIzMTgzODA1IgzgtBaR07rReI1PnpYq3APdvODgk9DOsXClLL2Rg2LDp9%2FbxD70TLfJ22B2VvYLr23LFPs3rflxM4s686urh%2B4UWZrZb33EAKYqM42CTeBbmW0wSh7xeg7dv9Q5VjDmjkTl%2BZuCbhY0sW8tHiEcUeYRoxwiFFiNN9xtuGqKCva7%2FGxEr7B6hEbMfKdxGHOBJWs8yvYjM3tC6WcFiehrjOa1uJMbm3EG3qbD6J7j9WNv8RF%2Fqw7q%2F%2Fxwuc%2FPSNmu%2BG2CGK1Fu2JGZ4yZ14yCsjJsw9mvN1WcAyq304U%2BAaLDxmpvPo6S7OKVV%2FfgaAuUUXpGeqDYk7bBvRco0IvoM9W3DwXQj1N0uSPwnDfBxA9nNYPJPKagvEckkBFN0rnG62IxI7BlcYQ36%2BHJ8zt5nupCM2pPjerINun88Py3q%2FXI35Q0AubEsBB3V02Rgwuk5%2FsKlRrxNeBzbYE%2FsjhjkunowGK1ngOGN7Tqk9wEpakOjrBQsFc9qJVHRgNNESlRh%2F%2BA9LInbD4oCn45EtaVz%2FvGrM2IGmK%2FYVweVBF9bnh3i6%2BA1yCZK523P5Ra970OCf6ShYpiUxh0VEaZIJ7wQuloDmTk6LyAeH8THxEPGneyyYGlF4sAsL0n%2B04FOTlwTKfVcVS6Ul44Ap02HTDS8sPJBjqkAWG3SshnG%2BZUI%2FQFz0JRmlqevbavOfYJfolC9uUXSZJkIVOuQutlAyvO0TKC%2FLNm5gUWZwvLfU%2B9RZOcleZW3uzDhW7S1TUM629ZdiAf5px0nt%2FhpkIrip4LcempSS3Q6alVFddYVyZ21eaS7zUncmJ6ovtHS4vSk4Xiu4Jxem81JEuW3ce8jYn6t9qwgZ%2BZWwy36mZnauVTeO%2FuU%2FMgdSWiqaGe&X-Amz-Signature=95c9cc845714a789e21e9610c7b4335908d1da980c567a5ec2df5fc7395dc3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCYKKBAQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC%2B5wUdu9aOLtSPBKrHBLcA8QKxQqk%2FQLNBrR5zmbExZAIhAKZmPKc0kXBHc3rhv4rVDoC2%2BYq%2B5xwNXo1Dt9GfcT7hKv8DCDwQABoMNjM3NDIzMTgzODA1IgzgtBaR07rReI1PnpYq3APdvODgk9DOsXClLL2Rg2LDp9%2FbxD70TLfJ22B2VvYLr23LFPs3rflxM4s686urh%2B4UWZrZb33EAKYqM42CTeBbmW0wSh7xeg7dv9Q5VjDmjkTl%2BZuCbhY0sW8tHiEcUeYRoxwiFFiNN9xtuGqKCva7%2FGxEr7B6hEbMfKdxGHOBJWs8yvYjM3tC6WcFiehrjOa1uJMbm3EG3qbD6J7j9WNv8RF%2Fqw7q%2F%2Fxwuc%2FPSNmu%2BG2CGK1Fu2JGZ4yZ14yCsjJsw9mvN1WcAyq304U%2BAaLDxmpvPo6S7OKVV%2FfgaAuUUXpGeqDYk7bBvRco0IvoM9W3DwXQj1N0uSPwnDfBxA9nNYPJPKagvEckkBFN0rnG62IxI7BlcYQ36%2BHJ8zt5nupCM2pPjerINun88Py3q%2FXI35Q0AubEsBB3V02Rgwuk5%2FsKlRrxNeBzbYE%2FsjhjkunowGK1ngOGN7Tqk9wEpakOjrBQsFc9qJVHRgNNESlRh%2F%2BA9LInbD4oCn45EtaVz%2FvGrM2IGmK%2FYVweVBF9bnh3i6%2BA1yCZK523P5Ra970OCf6ShYpiUxh0VEaZIJ7wQuloDmTk6LyAeH8THxEPGneyyYGlF4sAsL0n%2B04FOTlwTKfVcVS6Ul44Ap02HTDS8sPJBjqkAWG3SshnG%2BZUI%2FQFz0JRmlqevbavOfYJfolC9uUXSZJkIVOuQutlAyvO0TKC%2FLNm5gUWZwvLfU%2B9RZOcleZW3uzDhW7S1TUM629ZdiAf5px0nt%2FhpkIrip4LcempSS3Q6alVFddYVyZ21eaS7zUncmJ6ovtHS4vSk4Xiu4Jxem81JEuW3ce8jYn6t9qwgZ%2BZWwy36mZnauVTeO%2FuU%2FMgdSWiqaGe&X-Amz-Signature=e09146d7d1e63b0933b56b5f752e3999941ba9cc6c76427fafccdf53a54dc9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

