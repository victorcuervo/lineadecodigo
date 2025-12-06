---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOATHGD3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Vb%2FAHKcm0d9rDNvXWo3jbgKYJpetVJ73PDGhkrYKZwIhAKlUAotnzz1LBWGT8tbkWcBzqf3yUpdxB5FGJLEnjT%2FsKv8DCHUQABoMNjM3NDIzMTgzODA1IgwAbsdRjBQy1lMFk4kq3AMXDmgDqbQBUiu7fZmeNH0vzUbD9hgMMBljOFNpFLk0ARp0tUu2XopmHpSW7QHP44%2FURv%2FFD0blYBTrCRxcdKtLFtfwIzprmOE6rxJExBSEqUujiBgVRKdg3W7%2B0LqfxInLN%2FHTlpeJfcLWdMJhXmmv7euYc6UYPMfTesNDB0PjiD75FGHnQi2SBE7AEijX9KVaIKNwMr8SaqDB%2FGWLt2RxNGFGayZ4f8dk9hZfSm20OdFSdHZ30oR9MJGYJ%2FRgMDxzL1jDa36Psulxq6xhzHbJAPA8G8is5oCibSDB9pcX14dLluGAbiTcvFmS5hUUvDVT1I%2FN6oRng0MYVUBQfGwTOIcwd%2B0hihqrsRqWqISym%2FAZauDjZ0oTZ%2BVOwZPasFF%2FVxrZFr%2BN5nVrUs23QNvCfDx%2FcF4%2BBdawNHDQLJ%2BjqTg1oMpZhL54wsZKOPwU2dVHczo4FLXYqEea0OkcBzYjPB0QhsWOgVgv7JNBFC1T7eW%2BJuvOi%2F%2F9ZyWQlVSkNv9QrprDVERJJDw99%2FZUXnRz9nYyeGKtIHCCQv3LW1Hnp5zW3XKXWNgR9U43kixbXx19yrmzrCYiS378CbfY4l8VPbGsUZnwbdphYhUICvZwsHG10kv4HRvgVZvoQDCEp9DJBjqkAQCYdwgX%2F%2FLwNERmlTlDpMbVKmsaaPNUdED9MCyx3NtqDb9R5bQ3aAJrkkW95DJYVzcuNp9GZFcJ64yUnraUQhnjmJcKNjEOltR2U4bfeKYy79XG9BQVxNvKrsR%2FThgfq4P3CFCI%2B%2Busa7DOvC%2FrL%2FLj8RM33GV%2BV5tGwGGlGc5k5YMJhFsNFh08Km0UmJAmBO3g%2Fn2rinwLBOo8BwgHX7SSYnXX&X-Amz-Signature=0c4780b7301f6ae1277df845439cdd1cc1ca7d205647958d507863c41b46bb00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOATHGD3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Vb%2FAHKcm0d9rDNvXWo3jbgKYJpetVJ73PDGhkrYKZwIhAKlUAotnzz1LBWGT8tbkWcBzqf3yUpdxB5FGJLEnjT%2FsKv8DCHUQABoMNjM3NDIzMTgzODA1IgwAbsdRjBQy1lMFk4kq3AMXDmgDqbQBUiu7fZmeNH0vzUbD9hgMMBljOFNpFLk0ARp0tUu2XopmHpSW7QHP44%2FURv%2FFD0blYBTrCRxcdKtLFtfwIzprmOE6rxJExBSEqUujiBgVRKdg3W7%2B0LqfxInLN%2FHTlpeJfcLWdMJhXmmv7euYc6UYPMfTesNDB0PjiD75FGHnQi2SBE7AEijX9KVaIKNwMr8SaqDB%2FGWLt2RxNGFGayZ4f8dk9hZfSm20OdFSdHZ30oR9MJGYJ%2FRgMDxzL1jDa36Psulxq6xhzHbJAPA8G8is5oCibSDB9pcX14dLluGAbiTcvFmS5hUUvDVT1I%2FN6oRng0MYVUBQfGwTOIcwd%2B0hihqrsRqWqISym%2FAZauDjZ0oTZ%2BVOwZPasFF%2FVxrZFr%2BN5nVrUs23QNvCfDx%2FcF4%2BBdawNHDQLJ%2BjqTg1oMpZhL54wsZKOPwU2dVHczo4FLXYqEea0OkcBzYjPB0QhsWOgVgv7JNBFC1T7eW%2BJuvOi%2F%2F9ZyWQlVSkNv9QrprDVERJJDw99%2FZUXnRz9nYyeGKtIHCCQv3LW1Hnp5zW3XKXWNgR9U43kixbXx19yrmzrCYiS378CbfY4l8VPbGsUZnwbdphYhUICvZwsHG10kv4HRvgVZvoQDCEp9DJBjqkAQCYdwgX%2F%2FLwNERmlTlDpMbVKmsaaPNUdED9MCyx3NtqDb9R5bQ3aAJrkkW95DJYVzcuNp9GZFcJ64yUnraUQhnjmJcKNjEOltR2U4bfeKYy79XG9BQVxNvKrsR%2FThgfq4P3CFCI%2B%2Busa7DOvC%2FrL%2FLj8RM33GV%2BV5tGwGGlGc5k5YMJhFsNFh08Km0UmJAmBO3g%2Fn2rinwLBOo8BwgHX7SSYnXX&X-Amz-Signature=0bbcb6f94ed39a5a333d9697e9d17e9f14c5a90b655d8ff3fbb1631555ada35c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

