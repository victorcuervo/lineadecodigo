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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLYSG3Q3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICVwdxAMRfsjZRXKlGn177SyQUdV3Z2T7pY38Mrh9GDTAiBS06PQz4FguvPUukYFaPGVlOlrWueUNp4f6xfJf4MqLSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMC%2Fhii6LYYvCCQap7KtwDKkJ6yLXONP%2FCVsP7wNKAutcOqMHbhRl9x4i45bR9qRJ7WA6H7jY1SrINh6BAHu353JORQ6D%2BDBX70cpmJfN5TnV5%2FqcZlAPWbQAAepQaAtIrJIv%2BjUaBqYMi5mZG7TBnW7OxY6tfuUV5%2BjmJ2X6TU%2BTd9%2BBSFbJicsLYgsMFgsSL6h2hG7cXumnJ3n9tYREZgTGo3aTtEmCIxcXRDYS0adCTw%2F5o%2Fp7OGns0nAz5j2g5wufzq9Tjp6ei%2BL9LNTAHXhh%2BIqgYLpEG2t8OcMiVicsEg%2By5XrdDMZBP5sDPAKKilYpcW%2FJrxti8IxZxhEMjl5Kf2ZgfhpXvs4GcKchjYSiFdiPjS7%2BDzLhKx3AK7DI08FwcfSML0s9eiAJHIGOAA1AYhrBU3gRDPwAfYvmLP9DUvUwmmASmF%2F6XCJjjTLAWBiYAUwA0qXXmwAhGz92%2BlpnnGBq30xVRWkG7c%2FURFJL9dBJAHQXoPv4HQqy6Jdx%2F129Dc%2FEO4hbTkyxu7WDSDxeBWKC7A00Khg%2B3EO2DuFDY7Ycl64uFpPU3ms9caS2m8aS3NGtv3A8wJBNd2rbh1gGK%2Fo6T6gBZMwjosS4BiDhP9lMCeGn%2FSLyWPdXBpVkv2p%2FzWovrg8xpILAwlJW%2ByQY6pgF82batEp4HxPkjFi80czCX%2FctZaMj1LUeUHNADwWCHKJkc4pbTNAgA9STEScY3q78U0%2FDThwb%2BtJdlFJGg2mB8WP4uv1qJrJogMYMTOjE9UKxvfxBWCT6F7uoI%2FPQzoOFpB2pnw42mw4rdB7JSSzx%2Bb6iEbmN7fMFu%2BAvoD9SCULIpFLAR3F5t05uT74ZYV782uccuiSm4rK1QNeN7O6yYkjvlKLGe&X-Amz-Signature=15d44eb2db9737a9e2d9ce4769bf1567b2df227230f90ded93774e07020a0318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLYSG3Q3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICVwdxAMRfsjZRXKlGn177SyQUdV3Z2T7pY38Mrh9GDTAiBS06PQz4FguvPUukYFaPGVlOlrWueUNp4f6xfJf4MqLSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMC%2Fhii6LYYvCCQap7KtwDKkJ6yLXONP%2FCVsP7wNKAutcOqMHbhRl9x4i45bR9qRJ7WA6H7jY1SrINh6BAHu353JORQ6D%2BDBX70cpmJfN5TnV5%2FqcZlAPWbQAAepQaAtIrJIv%2BjUaBqYMi5mZG7TBnW7OxY6tfuUV5%2BjmJ2X6TU%2BTd9%2BBSFbJicsLYgsMFgsSL6h2hG7cXumnJ3n9tYREZgTGo3aTtEmCIxcXRDYS0adCTw%2F5o%2Fp7OGns0nAz5j2g5wufzq9Tjp6ei%2BL9LNTAHXhh%2BIqgYLpEG2t8OcMiVicsEg%2By5XrdDMZBP5sDPAKKilYpcW%2FJrxti8IxZxhEMjl5Kf2ZgfhpXvs4GcKchjYSiFdiPjS7%2BDzLhKx3AK7DI08FwcfSML0s9eiAJHIGOAA1AYhrBU3gRDPwAfYvmLP9DUvUwmmASmF%2F6XCJjjTLAWBiYAUwA0qXXmwAhGz92%2BlpnnGBq30xVRWkG7c%2FURFJL9dBJAHQXoPv4HQqy6Jdx%2F129Dc%2FEO4hbTkyxu7WDSDxeBWKC7A00Khg%2B3EO2DuFDY7Ycl64uFpPU3ms9caS2m8aS3NGtv3A8wJBNd2rbh1gGK%2Fo6T6gBZMwjosS4BiDhP9lMCeGn%2FSLyWPdXBpVkv2p%2FzWovrg8xpILAwlJW%2ByQY6pgF82batEp4HxPkjFi80czCX%2FctZaMj1LUeUHNADwWCHKJkc4pbTNAgA9STEScY3q78U0%2FDThwb%2BtJdlFJGg2mB8WP4uv1qJrJogMYMTOjE9UKxvfxBWCT6F7uoI%2FPQzoOFpB2pnw42mw4rdB7JSSzx%2Bb6iEbmN7fMFu%2BAvoD9SCULIpFLAR3F5t05uT74ZYV782uccuiSm4rK1QNeN7O6yYkjvlKLGe&X-Amz-Signature=2b04f52cafc57d1fe4944756a50f9e1bbd5fd84b77f88539916a63cbe767834e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

