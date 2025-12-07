---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5UOZ2OD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5xRPhOuBY1fsLg0iV5d7YnZ6moQdq7sz4589WN5j5LAiALlKjC7tpgygeldK9z8%2Fyqvm5PGZo2WtDqkoMKQz9QESqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9MR4bX4iB9Z%2FXeJKtwDmBuMt7dzKRJFVSLKmFCzLCP9SGvJDwOah7XV6dyy3a2wiIHM0QmtaSCbgzR3XqvG%2BNDM58Fvet05N12UgJOMZKFsG224L8C9Oqw1mIk4%2FBzJrG%2FeAzn9DuOhB2oaUJURulLYfCzMOXSfaYX6PTFuuMyhYl2kc%2FS9HafL4dxN%2B74bsBjm5BBL3Lzeimvf68ySu0LAAE7xZg%2FaWzxj%2B2tNd%2F6mUj8ndUf%2BK3Ks%2FVOpwcDaqr6172j5zmNgLpeYCM%2Bml7q7P7Zd4y6nRw29lQuYbOl4gRFJyUfuou91M0ZpwPibzL71EEUDgmL2Jj7Wo3J1FtfSGZ6ANBVEFrFGN2oEtkYwEdFisrinbjYvvj4YxIjQB7y3CsN%2FqMTeDaXgL9GWCk1WeyMaUK86n1hPi4%2BVK9C3pTl5tNhLxOtV0vvhUJiPa%2Fq583%2Fjj4kCfu2KwnCCqTVemNX%2B9kpxEUASS7fhACVKY9bHRe7asMytvu3Eb6WUjZ%2FOxFogRvZxpcKDE49vdu82AaylLkt6hkBdF8QBc5Yx15%2F5cygLpIjt0lHSfTcs%2BzmpVfTdJs9MbcWegpP6XJtuqyqk7ttQsqa9VvSlPDyMaLDLsD1AnxxIUDcpSgQovo%2FhqERNgwx0%2BNUwxJrUyQY6pgFqo7O2XBqsWoMLIxtotvgnF4u%2BjZsF54QM3DWUPv%2FRSCbWB7Jf2PwGde54vcCgSP%2F2nS41eg6UTA0Mwhq78y0bDQg%2BqPKyBevIgvXs7yLEhYkyqlMaQdlaiNSjFyOIwhvJ6gFApPdY5wVa6NqgQy1kNfGlXDqrgxz%2Fl1RhD8Va%2B33dvAsgFn9qMTY8Kzfe7YkH6ffzX%2FxPbhfDU428aCwmLv%2Bo%2FFgW&X-Amz-Signature=292772df9d7b5935a3d67698277065770d36b0d5981f9d0e317432fc210b0156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5UOZ2OD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5xRPhOuBY1fsLg0iV5d7YnZ6moQdq7sz4589WN5j5LAiALlKjC7tpgygeldK9z8%2Fyqvm5PGZo2WtDqkoMKQz9QESqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ9MR4bX4iB9Z%2FXeJKtwDmBuMt7dzKRJFVSLKmFCzLCP9SGvJDwOah7XV6dyy3a2wiIHM0QmtaSCbgzR3XqvG%2BNDM58Fvet05N12UgJOMZKFsG224L8C9Oqw1mIk4%2FBzJrG%2FeAzn9DuOhB2oaUJURulLYfCzMOXSfaYX6PTFuuMyhYl2kc%2FS9HafL4dxN%2B74bsBjm5BBL3Lzeimvf68ySu0LAAE7xZg%2FaWzxj%2B2tNd%2F6mUj8ndUf%2BK3Ks%2FVOpwcDaqr6172j5zmNgLpeYCM%2Bml7q7P7Zd4y6nRw29lQuYbOl4gRFJyUfuou91M0ZpwPibzL71EEUDgmL2Jj7Wo3J1FtfSGZ6ANBVEFrFGN2oEtkYwEdFisrinbjYvvj4YxIjQB7y3CsN%2FqMTeDaXgL9GWCk1WeyMaUK86n1hPi4%2BVK9C3pTl5tNhLxOtV0vvhUJiPa%2Fq583%2Fjj4kCfu2KwnCCqTVemNX%2B9kpxEUASS7fhACVKY9bHRe7asMytvu3Eb6WUjZ%2FOxFogRvZxpcKDE49vdu82AaylLkt6hkBdF8QBc5Yx15%2F5cygLpIjt0lHSfTcs%2BzmpVfTdJs9MbcWegpP6XJtuqyqk7ttQsqa9VvSlPDyMaLDLsD1AnxxIUDcpSgQovo%2FhqERNgwx0%2BNUwxJrUyQY6pgFqo7O2XBqsWoMLIxtotvgnF4u%2BjZsF54QM3DWUPv%2FRSCbWB7Jf2PwGde54vcCgSP%2F2nS41eg6UTA0Mwhq78y0bDQg%2BqPKyBevIgvXs7yLEhYkyqlMaQdlaiNSjFyOIwhvJ6gFApPdY5wVa6NqgQy1kNfGlXDqrgxz%2Fl1RhD8Va%2B33dvAsgFn9qMTY8Kzfe7YkH6ffzX%2FxPbhfDU428aCwmLv%2Bo%2FFgW&X-Amz-Signature=96376b3c4990f38b0cd7925423cdd068cfdcdff45909a9a78817a85f22ac3380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

