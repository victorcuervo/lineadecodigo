---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHWESKC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9lVYrSOX7VA4bp5LujSibidxI96Z0bI5NsSGt9V0GKAiBK33%2BVp7I8%2B7fwS8VUoB3KhRhkv7elCQHshFpqOzBZRCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpIgpCVTFhOxvjWLSKtwDzyBSOx8hEnNEln2C7fLd%2FHaCeE%2B4BEnSK5ghKdvdIFF8BNy0VVl62q034vbyDmbvheiqYR3i81tP3QI61rw1VQ6SSSt9ozSCHjMN6gc10ViqxdiKOZq2SMkBvQmsWSM%2BzO32NQLaTq9nN%2FzdZwu2VDIY5BvHY99HEMqOMxRxq2g7sfohdTzIJYkQ8HG8a8%2FjwXBMAAJDFcWnPiQ9RZTWeud0Ds7V%2F74V%2Fybw%2B9WqiBZQQ0c9RZviArepR7o7Cr%2FSr%2FUYcqY2xlboOtMVhIHxdKT6wfB6I5vhDlPcI%2FPHTvMLzTmYIXViZy4wVOdxPgVFaW9%2BHzx0wc4pOeDMvjmVqiqAlmlnISFMl9a9uzw3%2FD9LjvoDCfGjGyvZEBC78gZqvL2%2Bj%2FUQirw24or8TtXOWUOMZCNh46sM7ctpBDVeBkMAbFsy2gIj0T4DC5mGylSj%2FKNnLk2urNMO56gXhZTAIw4aq67%2FHCALTfeoW6fP9tOBzEKnmZWZFDidUgwrxNiAcM2g%2BuRRNcatO46VzYDvRq9OY84LrfLFoMq7ZLkOeqag1mp4%2B9FNsdKbyavNrK2l1HIZZf3g0ZNO9VShRTw9KDwtcjaWYYi2xrDX%2BSDNzWHSqdIQo1tmZtTKFEMw1creyQY6pgEjpzkgrOa7yO%2Fp%2FBQpY0z0oLYEXPZl0gA0Ic%2FNFDvSbi8Rad3IYtkAl3jqaZZjpJ%2FVIILwWhyvkBLnfmAKm%2FDQcEDLedT25%2FE0%2FeQRe16qDuRPvUcSqbV3bV6m0Nb3wVtZ7G0deJCTRfEks40Hj7LlM4ToXMU8QNgRWEsJpWA9sWbyEFrqXeK6ZFBk%2BZG5ZmAXX3exc0NIe3Tm7F0r5h%2Fg78BIL%2FsC&X-Amz-Signature=fecdd89638bfee2608fc06b8dcfbd6d9e8d4d09f018757f75ee2aacf750fc3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MHWESKC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9lVYrSOX7VA4bp5LujSibidxI96Z0bI5NsSGt9V0GKAiBK33%2BVp7I8%2B7fwS8VUoB3KhRhkv7elCQHshFpqOzBZRCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpIgpCVTFhOxvjWLSKtwDzyBSOx8hEnNEln2C7fLd%2FHaCeE%2B4BEnSK5ghKdvdIFF8BNy0VVl62q034vbyDmbvheiqYR3i81tP3QI61rw1VQ6SSSt9ozSCHjMN6gc10ViqxdiKOZq2SMkBvQmsWSM%2BzO32NQLaTq9nN%2FzdZwu2VDIY5BvHY99HEMqOMxRxq2g7sfohdTzIJYkQ8HG8a8%2FjwXBMAAJDFcWnPiQ9RZTWeud0Ds7V%2F74V%2Fybw%2B9WqiBZQQ0c9RZviArepR7o7Cr%2FSr%2FUYcqY2xlboOtMVhIHxdKT6wfB6I5vhDlPcI%2FPHTvMLzTmYIXViZy4wVOdxPgVFaW9%2BHzx0wc4pOeDMvjmVqiqAlmlnISFMl9a9uzw3%2FD9LjvoDCfGjGyvZEBC78gZqvL2%2Bj%2FUQirw24or8TtXOWUOMZCNh46sM7ctpBDVeBkMAbFsy2gIj0T4DC5mGylSj%2FKNnLk2urNMO56gXhZTAIw4aq67%2FHCALTfeoW6fP9tOBzEKnmZWZFDidUgwrxNiAcM2g%2BuRRNcatO46VzYDvRq9OY84LrfLFoMq7ZLkOeqag1mp4%2B9FNsdKbyavNrK2l1HIZZf3g0ZNO9VShRTw9KDwtcjaWYYi2xrDX%2BSDNzWHSqdIQo1tmZtTKFEMw1creyQY6pgEjpzkgrOa7yO%2Fp%2FBQpY0z0oLYEXPZl0gA0Ic%2FNFDvSbi8Rad3IYtkAl3jqaZZjpJ%2FVIILwWhyvkBLnfmAKm%2FDQcEDLedT25%2FE0%2FeQRe16qDuRPvUcSqbV3bV6m0Nb3wVtZ7G0deJCTRfEks40Hj7LlM4ToXMU8QNgRWEsJpWA9sWbyEFrqXeK6ZFBk%2BZG5ZmAXX3exc0NIe3Tm7F0r5h%2Fg78BIL%2FsC&X-Amz-Signature=a4bd1b7ec89e858d80157c129474268c1f7b8514a877355186643cd7a1bc8ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

