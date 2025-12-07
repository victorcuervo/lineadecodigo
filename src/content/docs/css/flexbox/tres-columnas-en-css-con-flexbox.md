---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXRXVX4O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaHtqv8fGnU0os0WoKL5X8W0pp4zgh9LXdlhqZacYSdAiEAlPWA58z4PaP2c96%2BcxJnCcSl34NKuucr3qMdOAonEL0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf2fZcb%2BbvCqXvuxSrcAz3GHBpVDxEllMnOnKdLfICPr%2FGzZtVL%2BORgEK0VItgi9nXWezI2uDk62GgNfwpq1uOLDRowCcQlyCgf6ScZuQy5w9KSGwbcEfR0C64F9XCWLInam3zCsdKq8%2BamlAjjEQEgnNc3NetakYef%2FkDpkzkbLEqWDgAc74MnuWWmtQc%2BiME4cYsB%2BWXzj0kB3TtQf4Mq5AFeb8ehIm7QHcidw0ae%2FL3F17wlxcKJNRb9CIhhIvFJvFBm%2B9HlOXaqgwcJAzTz7sLM17B%2FbUl8NwzEDB9UADCTZEKnhJY9va9XdoI3av8iQCmFYzYyI36MYFAzftsGYK%2Bo8V6QpHZDIdsnnBKEw3BCvwgzXGSJhJRGge1jiKpKkHj47E7VVRjt1MGSzQ%2F3hPqTR9BFPYRJxle9bDaE%2BvnFaAgAEPcRgOYhVCBQbSTy8HbB8AOz0Vlz7k243MdPJOxXWjHhr8wA16bKR%2Bzl7zNDkf0avbeCxcgXfz38eO8GD0EeDegEO%2Fj%2B6y7mRpMYsnAXsrgMhVnf8R9wZg%2Ft%2FReZmcDa9Lw%2Fm5bb%2FdTmWQbE39O%2FSmzw2KEUdPIhJst7LSvaXBdyALJaqrM0yDk3pQWmmpoMMWPEduQiZaGtgvBG5RusYq4sU81jMLzI18kGOqUBXyU5VcM8xPMV3QUgiXMb7LrKM8krYpGrBEIlCVGb5WGQppNVFJ0gNZWMM5%2FZM7nhd6y4xYzgMFRiVrnTPLx035lRpgkxCm5fEj%2BhJQUfT5VyxAqbzJuwZ1HjTrEyel372fOCsQGmNevBGMu2ZuF3z5g3GN%2BHGj5Mc3ZIIaa9nJ8aUHdx7tRpODbaJyfbobaqUKHfGoBe9cw4R6Ikb4KR8KvAj78S&X-Amz-Signature=6b3009f26fc7933d9ef65b6575eb9f77297aec62490ebb6e8bf81aff5165ee22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXRXVX4O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaHtqv8fGnU0os0WoKL5X8W0pp4zgh9LXdlhqZacYSdAiEAlPWA58z4PaP2c96%2BcxJnCcSl34NKuucr3qMdOAonEL0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf2fZcb%2BbvCqXvuxSrcAz3GHBpVDxEllMnOnKdLfICPr%2FGzZtVL%2BORgEK0VItgi9nXWezI2uDk62GgNfwpq1uOLDRowCcQlyCgf6ScZuQy5w9KSGwbcEfR0C64F9XCWLInam3zCsdKq8%2BamlAjjEQEgnNc3NetakYef%2FkDpkzkbLEqWDgAc74MnuWWmtQc%2BiME4cYsB%2BWXzj0kB3TtQf4Mq5AFeb8ehIm7QHcidw0ae%2FL3F17wlxcKJNRb9CIhhIvFJvFBm%2B9HlOXaqgwcJAzTz7sLM17B%2FbUl8NwzEDB9UADCTZEKnhJY9va9XdoI3av8iQCmFYzYyI36MYFAzftsGYK%2Bo8V6QpHZDIdsnnBKEw3BCvwgzXGSJhJRGge1jiKpKkHj47E7VVRjt1MGSzQ%2F3hPqTR9BFPYRJxle9bDaE%2BvnFaAgAEPcRgOYhVCBQbSTy8HbB8AOz0Vlz7k243MdPJOxXWjHhr8wA16bKR%2Bzl7zNDkf0avbeCxcgXfz38eO8GD0EeDegEO%2Fj%2B6y7mRpMYsnAXsrgMhVnf8R9wZg%2Ft%2FReZmcDa9Lw%2Fm5bb%2FdTmWQbE39O%2FSmzw2KEUdPIhJst7LSvaXBdyALJaqrM0yDk3pQWmmpoMMWPEduQiZaGtgvBG5RusYq4sU81jMLzI18kGOqUBXyU5VcM8xPMV3QUgiXMb7LrKM8krYpGrBEIlCVGb5WGQppNVFJ0gNZWMM5%2FZM7nhd6y4xYzgMFRiVrnTPLx035lRpgkxCm5fEj%2BhJQUfT5VyxAqbzJuwZ1HjTrEyel372fOCsQGmNevBGMu2ZuF3z5g3GN%2BHGj5Mc3ZIIaa9nJ8aUHdx7tRpODbaJyfbobaqUKHfGoBe9cw4R6Ikb4KR8KvAj78S&X-Amz-Signature=bfad4212c07c68d9baad49296eaab2d41c6385c8c3f494240f88f4d58c9148ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

