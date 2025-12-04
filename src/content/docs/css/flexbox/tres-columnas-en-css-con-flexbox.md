---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSH6ZUQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2QkqsSPvD2R5NcW1EehwGPH3Vhc0SqcZp3PgtfH6KqAiB3N09oqA0Ch2mrWAkCspQPaSOK9uZMSQ0tsvfihZomKyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMm1op8WajYOACn9yLKtwDz4yxvUBVgrJ%2F2aNA9WQIffimBa8nmNwWR3CpxofLZhKRQnjd6Lc7bmpeFdv0T4MrrLuOF%2BwfEB0qeu3to8f7TZf0LOimOhkJ4uBYrNuPUSc1xMAnbCx80CijmfUJifLtwbMbBbWxkcFdDYj5Xe9C32QPjGPXi0nSBixbc3twmU9StEhR1chE9tl4%2BbWJqIEZ68XVJpU5DQfHea%2FEkgxpVnoCiPnP7xY%2BbG%2BJ9dHV0oLFMwoXUFD8wnaIjpw%2BO9aic7suGC%2BngFGCChUO%2FKrVLeS%2FZBj6AZkIYcG0nqpNwrNg%2FHqoL13gyH4unyeJmIZs9Qr2yN8DbpI699cZr0RUpXaLvBssFvZH4E6W%2F%2Fc4KVGXQq0K4u5mKJoNICMf2LU8EhJ1RIPrTsOnJBELSSJGCmC8hIyGO1SnE6KbcjKS9lpbkwesMzkHfsvsEqU8Fe36HNQsa7aMbq%2FxsN5YLInEUYLi1JKJWUZlnEklg5zev33Wt7RFmrOw7jqc1d2PcLpMuI6NbLWBQCA45aKP%2BnrXRQEiErELNVINjYyj16MlCeObRawg0HiIlmVFSaO%2B%2FywO46fs%2BGmWp6rbPgcaEF5CV1nPwkyW3f4RiJgE0xqUmIwv%2BL9K8mzVPBC2hYQw0dvGyQY6pgH2i8aux%2F5QLW7F0kTRRhuFDZ4Ez%2F%2Fcr8NsDyY2B4J7K7wy%2FWieK2Dc0tjexMBvYHqWAcIGsgC9TgJViOOwgDHpIjqYufkLGyqjHYy4ZdlCrw8xWpA20mVUe8m8E2j%2FWW5288D58TCBWl6PLoup2qOs3viP2GlbIJprig8AlDCKL%2Fws%2BQvbQPVU9nCwGb5ciWoOWzvtsvyA7j0qa2Cu8kglN72TTg3P&X-Amz-Signature=f27da7990a9d7556f7872e14b676b3bc624325cf0e96a0be71e8b6064fe01c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOSH6ZUQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2QkqsSPvD2R5NcW1EehwGPH3Vhc0SqcZp3PgtfH6KqAiB3N09oqA0Ch2mrWAkCspQPaSOK9uZMSQ0tsvfihZomKyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMm1op8WajYOACn9yLKtwDz4yxvUBVgrJ%2F2aNA9WQIffimBa8nmNwWR3CpxofLZhKRQnjd6Lc7bmpeFdv0T4MrrLuOF%2BwfEB0qeu3to8f7TZf0LOimOhkJ4uBYrNuPUSc1xMAnbCx80CijmfUJifLtwbMbBbWxkcFdDYj5Xe9C32QPjGPXi0nSBixbc3twmU9StEhR1chE9tl4%2BbWJqIEZ68XVJpU5DQfHea%2FEkgxpVnoCiPnP7xY%2BbG%2BJ9dHV0oLFMwoXUFD8wnaIjpw%2BO9aic7suGC%2BngFGCChUO%2FKrVLeS%2FZBj6AZkIYcG0nqpNwrNg%2FHqoL13gyH4unyeJmIZs9Qr2yN8DbpI699cZr0RUpXaLvBssFvZH4E6W%2F%2Fc4KVGXQq0K4u5mKJoNICMf2LU8EhJ1RIPrTsOnJBELSSJGCmC8hIyGO1SnE6KbcjKS9lpbkwesMzkHfsvsEqU8Fe36HNQsa7aMbq%2FxsN5YLInEUYLi1JKJWUZlnEklg5zev33Wt7RFmrOw7jqc1d2PcLpMuI6NbLWBQCA45aKP%2BnrXRQEiErELNVINjYyj16MlCeObRawg0HiIlmVFSaO%2B%2FywO46fs%2BGmWp6rbPgcaEF5CV1nPwkyW3f4RiJgE0xqUmIwv%2BL9K8mzVPBC2hYQw0dvGyQY6pgH2i8aux%2F5QLW7F0kTRRhuFDZ4Ez%2F%2Fcr8NsDyY2B4J7K7wy%2FWieK2Dc0tjexMBvYHqWAcIGsgC9TgJViOOwgDHpIjqYufkLGyqjHYy4ZdlCrw8xWpA20mVUe8m8E2j%2FWW5288D58TCBWl6PLoup2qOs3viP2GlbIJprig8AlDCKL%2Fws%2BQvbQPVU9nCwGb5ciWoOWzvtsvyA7j0qa2Cu8kglN72TTg3P&X-Amz-Signature=edaa73930c870f1d0294b6fedf723c6a7a4ccdcd49efa717a13fb41f7d7e803c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

