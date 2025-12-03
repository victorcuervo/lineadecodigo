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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXSWU5ZH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDVg6z07e15zH6lu8fmJAx8A72zmY3ZKISQoNkmYcmpoQIhAJ6LMJQiLJXQJhQBeNvMKRBRXRbys3vjTTjgc%2Fpcjs4sKv8DCC4QABoMNjM3NDIzMTgzODA1IgytmL8R1Nazr2ZJiM0q3AMT0zQWP09UCfqidIDkCt410FCac4bkjZ58BVigQy40HaDZn3xpR6B2p4k1UHuH7K2aPArj3YSkqI6BDkZoRitgAszJ2hTYfg9A0vJgmP%2FTBpOoupUtCc1G21R%2F92QuMmvdxXs5PVD35MbGA%2FLqEG1erhI4UXPKXg3e60S36cwAMX6NCbui2iDrND4qZ9TIu2z4Nur35l0R%2FiGFBfOCAK8yOIv68DVV%2FgnPTKTAH5%2BbP8tT5I6thYlLunr04RiRL6OPpEUIAVnmLAasYFEN5WIT%2BZ7dAbYX4VR%2FgtPCfbJsSVUvsPghv8HN%2Bw1pEnopSrRLA0HUhsNWpvA5esSE5ziA9%2F9nkJybg4qVyS8Yg9Q7zklGGztS%2FM%2FHva%2Bwdjn9oWdHdlGji9Rc0S6DDahuVopLRUcSenQCV5J4CM9cmaBKjzVZuw6smvfWcykgRsk8K1D3kl02AWe9TLYLYiuYUyY%2FkxJj5pBhzTa%2BvyULyQJpPZeeLYCFUlZUakPXggtEZcXn9CSym5bVSNvzzcf9h%2B1LmGeX6oQOYXsPjxPYRjM%2B66KvzpyHAZQK4PzBafdBiCg2qsBP91oGAZuxFUwEAb68VbbvPvZf6nr3yCeZXMWAKAoBuwoXVdjdvmZGijDw6MDJBjqkAX4lmxrSqrO6Qnxs1WvvJkvSQqD1QuolMyWR0VhgNTYfRYsYaBtrIFKolS43jptjzHBK85L8ghIR9AAkZu7PDPlz5f3ynMKcSYnZglyWIGPh9iQmNezAM1ZYOpGgdDCW2zlwGy%2BLzKe7ib8Xqm2JkGOt7dtE73LpHRP8js1YFRhAmOuahAAz%2FYYOdpKFPeAAB3CqzJoU%2FzfgfA165JdjjqsOG0hV&X-Amz-Signature=327978a3153f3676ffc806cf3cb2983acbca6d00aab58ef65c372b05285e8db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXSWU5ZH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDVg6z07e15zH6lu8fmJAx8A72zmY3ZKISQoNkmYcmpoQIhAJ6LMJQiLJXQJhQBeNvMKRBRXRbys3vjTTjgc%2Fpcjs4sKv8DCC4QABoMNjM3NDIzMTgzODA1IgytmL8R1Nazr2ZJiM0q3AMT0zQWP09UCfqidIDkCt410FCac4bkjZ58BVigQy40HaDZn3xpR6B2p4k1UHuH7K2aPArj3YSkqI6BDkZoRitgAszJ2hTYfg9A0vJgmP%2FTBpOoupUtCc1G21R%2F92QuMmvdxXs5PVD35MbGA%2FLqEG1erhI4UXPKXg3e60S36cwAMX6NCbui2iDrND4qZ9TIu2z4Nur35l0R%2FiGFBfOCAK8yOIv68DVV%2FgnPTKTAH5%2BbP8tT5I6thYlLunr04RiRL6OPpEUIAVnmLAasYFEN5WIT%2BZ7dAbYX4VR%2FgtPCfbJsSVUvsPghv8HN%2Bw1pEnopSrRLA0HUhsNWpvA5esSE5ziA9%2F9nkJybg4qVyS8Yg9Q7zklGGztS%2FM%2FHva%2Bwdjn9oWdHdlGji9Rc0S6DDahuVopLRUcSenQCV5J4CM9cmaBKjzVZuw6smvfWcykgRsk8K1D3kl02AWe9TLYLYiuYUyY%2FkxJj5pBhzTa%2BvyULyQJpPZeeLYCFUlZUakPXggtEZcXn9CSym5bVSNvzzcf9h%2B1LmGeX6oQOYXsPjxPYRjM%2B66KvzpyHAZQK4PzBafdBiCg2qsBP91oGAZuxFUwEAb68VbbvPvZf6nr3yCeZXMWAKAoBuwoXVdjdvmZGijDw6MDJBjqkAX4lmxrSqrO6Qnxs1WvvJkvSQqD1QuolMyWR0VhgNTYfRYsYaBtrIFKolS43jptjzHBK85L8ghIR9AAkZu7PDPlz5f3ynMKcSYnZglyWIGPh9iQmNezAM1ZYOpGgdDCW2zlwGy%2BLzKe7ib8Xqm2JkGOt7dtE73LpHRP8js1YFRhAmOuahAAz%2FYYOdpKFPeAAB3CqzJoU%2FzfgfA165JdjjqsOG0hV&X-Amz-Signature=8aa5a4698100b2d7b9fde9e7c869affe1199b00b4d607633efc4b8a02e6b6958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

