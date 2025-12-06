---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDQN54TC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAttDsRiLvdNnsWqYwnJDEe8sDyUmIqzc6GzFADk8hHgAiAHyw7b5tW7MefxMlwyXCUpSS0Y1ULLE9b8PcFy6IWJ0ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMIBaNWAjaTeppf4gvKtwDnTMJogzsDUflRDegdO8yzpGoZ3hFHoBOalymVClIcxCVE%2FhblkzR7VqBbkUjCo1gqNwC%2BV1scY2ATnHP8EXMhJevlRmyxTSkjuU6dbqea50kxSsUaFoqE9OkmoHtA6vvkjd%2F7F%2BPCmiHeQyadoh1A1N%2F3Jhrp8VXNrMj%2FGLVHPTnwjTFWedIoMwHNWjagQ2JUbXcufZtTwvngSIAF8Dl%2BHPMmrS38EMNztHHtoWC%2F9D9Mkm5hk%2BHSOEPdb%2BMk8AsdFHeNyFVqXqixrZIMgRb%2FS5%2BTPDq41MXgAgNp54QFranw5yxacb3J4RWNJYBfwACMc7exn8eBnJIhW6shPWs2hl9PdlAg4hL529O7DMRjU%2FZdtj89lPt3uf9p6O5FSh0IFI5CuEFRFSEHV6vJ4HY6gqKFfak20n4VjQKz6vxPmM84u%2Fzx7Yt3p4ckGAVhmZKNYYYJE14FFSQJgaBFUfeUCqTZzFmB1wNkDIZLv9LZJ2dIVwKpL6iz4dZHINdw5736RoeKAqoQgo1s3Vpm8KkRotzl%2FSICARI5yTd1W9cyR8%2FZ7SZ%2FpzifWOMANVFjAk59uAXxdsndm1rOYNxigKxKja05yWOgqBODjagnP3p9OAxiQOUNlJIZbqs8Jkw%2FqbQyQY6pgH3GiJ%2BTm22OD2ymaEu0M%2Fg%2FSO9YdTQIQ32MvOda1vezW%2F78rOCLJKL%2Bjkf9NY97PDqTHDz9m8iQ%2F1YeK9w2OG5M3nKXLJUeMqId%2FKxCC%2F96qlO%2Fc1Vh33K3d3ig%2FAkg%2Bfuw0p%2BvwL9koDUvgFaoQeknCyHXEmjB1cdRH4PZLwadZpxvuIUniz7W4jXcB7lXVLhT5cTtavG7CpP2EEog2ESVzXVIjN8&X-Amz-Signature=8114a235a89ee4684fa75fe22243e084fd29142e207b6199e31cc4e96162b6ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDQN54TC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAttDsRiLvdNnsWqYwnJDEe8sDyUmIqzc6GzFADk8hHgAiAHyw7b5tW7MefxMlwyXCUpSS0Y1ULLE9b8PcFy6IWJ0ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMIBaNWAjaTeppf4gvKtwDnTMJogzsDUflRDegdO8yzpGoZ3hFHoBOalymVClIcxCVE%2FhblkzR7VqBbkUjCo1gqNwC%2BV1scY2ATnHP8EXMhJevlRmyxTSkjuU6dbqea50kxSsUaFoqE9OkmoHtA6vvkjd%2F7F%2BPCmiHeQyadoh1A1N%2F3Jhrp8VXNrMj%2FGLVHPTnwjTFWedIoMwHNWjagQ2JUbXcufZtTwvngSIAF8Dl%2BHPMmrS38EMNztHHtoWC%2F9D9Mkm5hk%2BHSOEPdb%2BMk8AsdFHeNyFVqXqixrZIMgRb%2FS5%2BTPDq41MXgAgNp54QFranw5yxacb3J4RWNJYBfwACMc7exn8eBnJIhW6shPWs2hl9PdlAg4hL529O7DMRjU%2FZdtj89lPt3uf9p6O5FSh0IFI5CuEFRFSEHV6vJ4HY6gqKFfak20n4VjQKz6vxPmM84u%2Fzx7Yt3p4ckGAVhmZKNYYYJE14FFSQJgaBFUfeUCqTZzFmB1wNkDIZLv9LZJ2dIVwKpL6iz4dZHINdw5736RoeKAqoQgo1s3Vpm8KkRotzl%2FSICARI5yTd1W9cyR8%2FZ7SZ%2FpzifWOMANVFjAk59uAXxdsndm1rOYNxigKxKja05yWOgqBODjagnP3p9OAxiQOUNlJIZbqs8Jkw%2FqbQyQY6pgH3GiJ%2BTm22OD2ymaEu0M%2Fg%2FSO9YdTQIQ32MvOda1vezW%2F78rOCLJKL%2Bjkf9NY97PDqTHDz9m8iQ%2F1YeK9w2OG5M3nKXLJUeMqId%2FKxCC%2F96qlO%2Fc1Vh33K3d3ig%2FAkg%2Bfuw0p%2BvwL9koDUvgFaoQeknCyHXEmjB1cdRH4PZLwadZpxvuIUniz7W4jXcB7lXVLhT5cTtavG7CpP2EEog2ESVzXVIjN8&X-Amz-Signature=7381150f9fd1e8692e1b457449b3888d6d2d814749cac39b49b4aebb5a836dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

