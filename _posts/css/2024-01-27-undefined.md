---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MMJORQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDMX7nOgBZEgd0YcpqOG1zve1ckB7CEgFJb6Lreqwi3jAiEA6MLMplHdw0FbRS0wyrhuq5EvWSMQKim4qegiBefBaZsq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDPUR361qybhfpnqLAyrcA%2FoMhj4oLTBh%2BfJKh3tM3VUjp8ukFb7Bd8irkb280MAcF9WgOxwM1IrGeJz%2BfKpBpZUe%2FidUz1YJh9kBCjmaSY4GV0mAu9E%2B%2FavoAjqi7zJoDwDJm4Rhtj21oGNP0J0GPtJ4JP5oaHSoZOKaqnqLtBcyjdfObaXpf%2BCBVFlTvfmLgiZY41WJX0qWa9HKuvqT2tRpwLYxzM5v9ncuCR7lG7pTMxij4X3WgaIk7lxzRKZ3Rd68XGFGeUDF2X3DHAFOYQpkmupJZLBgHtc%2Bu87SjSGWw8QtPRu8jcXcggBbJlegLYWHYZfF8l1XSzg14Y80prXBVKdIrt6ZvtxsckCOTSgoJuI%2FHBXRQcOpAxKL7G7swBO8Ka4i6B5bDHDg0DTVrfqGhWG6PAiHB49krMC6TIVZ7Ly5HBEaz6cJiD9mxrp3SnlwJIateOWjIybUvCiuSdy%2FoNoV%2FWKSk69plkF9qGNhHXtM66LSou5EJRfWN7zJTz3tzt8%2Fum5H4LYI1fYj3HAL6wTWTsOkOOoFTNP2gjPZN6jsj2W592nzm6%2BEaon8GGngJ%2Fc81VC591uc1laU8s1pt3kb15D0lyM4qtaaTeYTpNrFHJSdRQ9uaQ2%2FgfhEZy2QcQ%2FjKKF9euOBMOGlwckGOqUB1tT%2Bnii4rSTUp6uVkXsZHPOsjtWu9CTMmQlZjnK09xsPPBAEnO7hIj05FxIrF7OAor31UB6KrYDZ7ojG3yg%2Bi87jouEe3%2BamvAKgxWqQ43dFFxIa15K46yIgdwV31dpyw05wjkqzS2BbRSye%2BL%2BeUbEcLZUgpvJc%2BJx97FbLP%2F%2Fek4iGpX8LiPDszHQBwc6yLJxnd3lM%2FBEKdYUOLc0W3C8LV9eX&X-Amz-Signature=32af378aa6098ea858c27130af99c47c8d6e57b6288ecbe3c333659c1693942b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MMJORQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDMX7nOgBZEgd0YcpqOG1zve1ckB7CEgFJb6Lreqwi3jAiEA6MLMplHdw0FbRS0wyrhuq5EvWSMQKim4qegiBefBaZsq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDPUR361qybhfpnqLAyrcA%2FoMhj4oLTBh%2BfJKh3tM3VUjp8ukFb7Bd8irkb280MAcF9WgOxwM1IrGeJz%2BfKpBpZUe%2FidUz1YJh9kBCjmaSY4GV0mAu9E%2B%2FavoAjqi7zJoDwDJm4Rhtj21oGNP0J0GPtJ4JP5oaHSoZOKaqnqLtBcyjdfObaXpf%2BCBVFlTvfmLgiZY41WJX0qWa9HKuvqT2tRpwLYxzM5v9ncuCR7lG7pTMxij4X3WgaIk7lxzRKZ3Rd68XGFGeUDF2X3DHAFOYQpkmupJZLBgHtc%2Bu87SjSGWw8QtPRu8jcXcggBbJlegLYWHYZfF8l1XSzg14Y80prXBVKdIrt6ZvtxsckCOTSgoJuI%2FHBXRQcOpAxKL7G7swBO8Ka4i6B5bDHDg0DTVrfqGhWG6PAiHB49krMC6TIVZ7Ly5HBEaz6cJiD9mxrp3SnlwJIateOWjIybUvCiuSdy%2FoNoV%2FWKSk69plkF9qGNhHXtM66LSou5EJRfWN7zJTz3tzt8%2Fum5H4LYI1fYj3HAL6wTWTsOkOOoFTNP2gjPZN6jsj2W592nzm6%2BEaon8GGngJ%2Fc81VC591uc1laU8s1pt3kb15D0lyM4qtaaTeYTpNrFHJSdRQ9uaQ2%2FgfhEZy2QcQ%2FjKKF9euOBMOGlwckGOqUB1tT%2Bnii4rSTUp6uVkXsZHPOsjtWu9CTMmQlZjnK09xsPPBAEnO7hIj05FxIrF7OAor31UB6KrYDZ7ojG3yg%2Bi87jouEe3%2BamvAKgxWqQ43dFFxIa15K46yIgdwV31dpyw05wjkqzS2BbRSye%2BL%2BeUbEcLZUgpvJc%2BJx97FbLP%2F%2Fek4iGpX8LiPDszHQBwc6yLJxnd3lM%2FBEKdYUOLc0W3C8LV9eX&X-Amz-Signature=5fede35d7ab70b05ffa790cd6656faed2ce318979875f271cb90559f24d58b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

