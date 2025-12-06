---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDOA3EJ7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBpQ0QnQmDWuXGxldJ7hAe58OPiZyZvA2USIJTUrliVwIhAMUUwo3lwnFEw5XxDpdeHjWzOWTtbRNYd1WI3kI4WFxlKv8DCH8QABoMNjM3NDIzMTgzODA1IgygTEtTYtLS%2Bln%2F9Voq3APO0Z2iH4dclXsyeavj3R0h1FRBWrHuCKVzCHpWdZifbE%2BKC8oH9gHN5aZ3KfDPAnj7%2FgaVyho6urBZ%2B5IwrHerTDQX63MLHIHORG85v%2FQ%2BTwNQzvVzyVfYG3iQGJWFVyPm0CQ8D8SjCfv3B3nP7fscF1L6KP2oGFHXM8bAJn46HN%2FPasrCD3ZYFKAZa2NsQtUIjnwIBkRID7%2FkoOFnoxnQWTgzrjzwj9c62n5Qnomtef0UVAwdxmciFghaxskZGJP%2FOEh0EZACa%2FQ03h5ESQF7VPtY2rBTfh1uaoo%2B%2BZ%2B9vf0%2FU6nryQ8rLTeEn1VeSqB8bASm1rz%2FYLqDavA45dhDqctCxoOmXY%2BT3TEoLL3r0EmeD8ZlipcMGn8ma04DBPib278I7tKE%2F49dXL9uxYwOgUhAQVYw%2BlW8s7IG5fAF4znUfpnlWCrfdHSbBs0wDwJkR%2B%2FckSfmmkQwQZbSVkx27eEpACYvGl7HoGuxnGpi6IiuPkJtAAAZ%2Bg0eZiQtyy1pSphI5rHVAHxBRGg3Mh2y1580%2B0jX0ZRT4k%2BjpzpX37n6KY3yWplxnGwRqQ7RuJdKtvjD2UU5OuRk00bGKCVHh4PgVfOTOXsBEGyoYTJD%2Bfr%2F0M61rnxA%2FMmHNjCV09LJBjqkAaw4uzwP%2Bmd2H07ie3jC7PKJn5wEVN2vC96U2EC3DJYV1UYPra%2FTpCD%2FfUqXcEPm4lZRXcFDRzlmohpoMrZtKdHmeDwsmyvDpyIfoKE7GdmMxUPaQi4vwqBFydu1qQGcXXzuc1RuMKvM%2FI9VIOnJfPAmLj%2BuBdIb2urJXtJeA5Oha0QRjqN4frt0z6wM2z%2FvbYQHxKfPE5BLKYEy0ty0HXhoIAyw&X-Amz-Signature=d7e502c981d42ea83a4f4136a9a5e654934eb9e36816f504a2da814b9f68395d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDOA3EJ7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBpQ0QnQmDWuXGxldJ7hAe58OPiZyZvA2USIJTUrliVwIhAMUUwo3lwnFEw5XxDpdeHjWzOWTtbRNYd1WI3kI4WFxlKv8DCH8QABoMNjM3NDIzMTgzODA1IgygTEtTYtLS%2Bln%2F9Voq3APO0Z2iH4dclXsyeavj3R0h1FRBWrHuCKVzCHpWdZifbE%2BKC8oH9gHN5aZ3KfDPAnj7%2FgaVyho6urBZ%2B5IwrHerTDQX63MLHIHORG85v%2FQ%2BTwNQzvVzyVfYG3iQGJWFVyPm0CQ8D8SjCfv3B3nP7fscF1L6KP2oGFHXM8bAJn46HN%2FPasrCD3ZYFKAZa2NsQtUIjnwIBkRID7%2FkoOFnoxnQWTgzrjzwj9c62n5Qnomtef0UVAwdxmciFghaxskZGJP%2FOEh0EZACa%2FQ03h5ESQF7VPtY2rBTfh1uaoo%2B%2BZ%2B9vf0%2FU6nryQ8rLTeEn1VeSqB8bASm1rz%2FYLqDavA45dhDqctCxoOmXY%2BT3TEoLL3r0EmeD8ZlipcMGn8ma04DBPib278I7tKE%2F49dXL9uxYwOgUhAQVYw%2BlW8s7IG5fAF4znUfpnlWCrfdHSbBs0wDwJkR%2B%2FckSfmmkQwQZbSVkx27eEpACYvGl7HoGuxnGpi6IiuPkJtAAAZ%2Bg0eZiQtyy1pSphI5rHVAHxBRGg3Mh2y1580%2B0jX0ZRT4k%2BjpzpX37n6KY3yWplxnGwRqQ7RuJdKtvjD2UU5OuRk00bGKCVHh4PgVfOTOXsBEGyoYTJD%2Bfr%2F0M61rnxA%2FMmHNjCV09LJBjqkAaw4uzwP%2Bmd2H07ie3jC7PKJn5wEVN2vC96U2EC3DJYV1UYPra%2FTpCD%2FfUqXcEPm4lZRXcFDRzlmohpoMrZtKdHmeDwsmyvDpyIfoKE7GdmMxUPaQi4vwqBFydu1qQGcXXzuc1RuMKvM%2FI9VIOnJfPAmLj%2BuBdIb2urJXtJeA5Oha0QRjqN4frt0z6wM2z%2FvbYQHxKfPE5BLKYEy0ty0HXhoIAyw&X-Amz-Signature=a739ce15fb02ef1a01697a91614ef6148dd7156fd90b75712cbef015d2dce5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

