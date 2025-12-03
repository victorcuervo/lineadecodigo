---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUT3TWK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCvR1TYshWCeerMOocweaxcD2AkyDWGm4BaUJ5RdYbSqwIgFslv0Xynf5Fou0tHkmBq5ljOgbeFe5mk6kUTfNobGhMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCP25SrwVJrBEDAn1CrcA%2B3yVVpHTfLZ%2Blm1%2BGd8pQqrIYyKGeCLrSN64hjqF9XLfGBRNZ2zOKXFB8xwGw0tmWP1iV0YvIf4tJXz4Xj%2BE3SK9sTYI4IhUEB5oTzPkyFWjYFGepnGvWPOzlluzLn0V3hiRbUcQVkCKVNGvMOJKlJcp8V51hWRQoDqslz8ntelWw6S3huPijxFp2VdRoikpcR8oRvvvfxMRhTJZ9KJa6oU63ANNrsWmVR5UkmjJZGY%2B3jzaVIND3DYKNQV0boz0BEU3QwB9w%2FyJArWVo4xEM1UJ4nLoDTf%2FRnB1yUbFuzheZsmkkr8EyQvvcp1%2BlZeYG19IAtncgl6AFjJ84QGPNFj8KwFEqPzvgNrn9%2F2akOit2tJEwaddTTX3ztSfkBwKGGdWoLER%2B9Wnr7wwqwR1D51dLoMoMXz4lLnhUb241fOa8peGNqvZnRvVSSGlpmTQWbkOIahyN6gTQ4dzxGKuydxCUU1YcOMeG2QUmzmcbQ3F1s1nOoo1icl5MMFWGdT9ee2ywOWCxo6cBqFJ3eCQRhAg3QVRYxk8uvyP1R%2BLu2Z7jp1wnFv8vm3t%2BhFiFM84A0q9Tha1pZXw5Cignnj0oKocQa0ruHECoGEx5TuBAbzoY5onDaXTcFtz%2BH8MOGRwskGOqUBscrZ9sIVq5wiIb6onQ7E5plLeihtxWE%2FjaJioR5JCDceu4L7atzoe7%2FnM1JMzoQh1o32ITCpjqFlLdzDesoJyaLZz%2BSRimjhc94gduT0TH95V9AibRjaSPcQXcnMwBSEZVB3CU4e2GVSS4kkfnGQSSqJgDda2gJ2hto4%2Fx5wlQBi3UrZ3Ia3Dw%2BbumcHymVmH7MASBaQl%2FdQySKJeLBU%2FFXrES4o&X-Amz-Signature=00dbc81602c36ed0da73e4549d3b488da1944b19acfff63005aaf5430c1fd426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUT3TWK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCvR1TYshWCeerMOocweaxcD2AkyDWGm4BaUJ5RdYbSqwIgFslv0Xynf5Fou0tHkmBq5ljOgbeFe5mk6kUTfNobGhMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCP25SrwVJrBEDAn1CrcA%2B3yVVpHTfLZ%2Blm1%2BGd8pQqrIYyKGeCLrSN64hjqF9XLfGBRNZ2zOKXFB8xwGw0tmWP1iV0YvIf4tJXz4Xj%2BE3SK9sTYI4IhUEB5oTzPkyFWjYFGepnGvWPOzlluzLn0V3hiRbUcQVkCKVNGvMOJKlJcp8V51hWRQoDqslz8ntelWw6S3huPijxFp2VdRoikpcR8oRvvvfxMRhTJZ9KJa6oU63ANNrsWmVR5UkmjJZGY%2B3jzaVIND3DYKNQV0boz0BEU3QwB9w%2FyJArWVo4xEM1UJ4nLoDTf%2FRnB1yUbFuzheZsmkkr8EyQvvcp1%2BlZeYG19IAtncgl6AFjJ84QGPNFj8KwFEqPzvgNrn9%2F2akOit2tJEwaddTTX3ztSfkBwKGGdWoLER%2B9Wnr7wwqwR1D51dLoMoMXz4lLnhUb241fOa8peGNqvZnRvVSSGlpmTQWbkOIahyN6gTQ4dzxGKuydxCUU1YcOMeG2QUmzmcbQ3F1s1nOoo1icl5MMFWGdT9ee2ywOWCxo6cBqFJ3eCQRhAg3QVRYxk8uvyP1R%2BLu2Z7jp1wnFv8vm3t%2BhFiFM84A0q9Tha1pZXw5Cignnj0oKocQa0ruHECoGEx5TuBAbzoY5onDaXTcFtz%2BH8MOGRwskGOqUBscrZ9sIVq5wiIb6onQ7E5plLeihtxWE%2FjaJioR5JCDceu4L7atzoe7%2FnM1JMzoQh1o32ITCpjqFlLdzDesoJyaLZz%2BSRimjhc94gduT0TH95V9AibRjaSPcQXcnMwBSEZVB3CU4e2GVSS4kkfnGQSSqJgDda2gJ2hto4%2Fx5wlQBi3UrZ3Ia3Dw%2BbumcHymVmH7MASBaQl%2FdQySKJeLBU%2FFXrES4o&X-Amz-Signature=2820c792532ca6ba905dca1079c7ed8433d6430767b69128323da6dd96be9b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

