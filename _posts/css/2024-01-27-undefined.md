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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WLY2S4Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIATew3XTeyfqkwqjIOgJ2BTSKAk3QpFcM4Z5KR1kEaUmAiEAo6DyFqTBNDdVwW%2FJ%2F13dR4%2B1tTGn%2FjU%2Fvxkv%2FHa1dvoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIHbgRxKs%2FZvcGntMyrcA46y9p9EgdrS%2BH%2FX5SPrpTYPyVcaU1nBasBVOFc33LU3plExcLdncnzN1aXfSfVwZB9%2BA2ic8IZ0yclI%2BpsEoQIJbC7F%2FclK9gWpsLhZD2hkg5pO6TOiEIaYeKrZfXpFez%2Fp8fIPMt51kXmWd2IMIJmz4%2BsVX4JCWOG0Jx%2BMA1SmKRsJkSVRvaoK9ALCnd2KUVBQ8kF7TU4piqAUKuEclSPgzM%2FXJ5Akl%2Bd7kXW0sBf97PciBamQ6P7k0IlXE6QMHtTDxz7RJfo5s1vxzOzmRLO6C7Pgk9fjpc418WxdArv74ds%2Bll9mkcXCUrSioBmheGCE2hldNWrokXkvrqWcpJR8pyBi7hnxQ0A7EyQRq1FG6uBWQA4bsPCv%2BwnmdFkeZe3tzCRiAQGUZOCi%2FDJg2%2Fk05hXFf8HIsSN6IVrUXzXE4jRIbyeUixZqd39SX5QhNEE7%2FyYe2HWsUewbzoINQ6N5ORQSvAJNKSzwHQHperFPqG8QT1ZSSSnYQ78fSXdLNkLmW41Iv%2BRXm8DJO6D8ZSs1zFj3nEuCVC91u5Wn%2BMXQslUt08xAeCw7tl4PjHpZopK1HHMAUwwXtXv0NTy46J1oZZXm8oIg7UVQY1Qi4xsy0u6n%2FD0a30BhKLB%2FMLSUvskGOqUBaIkeXrKQf%2F0A9COa20xYr5XGGVUIspFoellK%2Fvqhjsu6wh69crdbv86xkRxdPIK2GRfISKXHYTN2tjuSrCl8Uj3deFyCerpWqCgKIPY3Ftqz%2BVOvd8sRhPCkYA%2FF%2BIfrbvCWro0bZ99cWsLgyjh1xuzTDRbwNwKOX06foSlQ5LBB7eBAKh7hAQP%2BOYKxSL3mGY1zsLQHloRu%2F1xhAqshALSUHOcf&X-Amz-Signature=6fdec75fc693af213604b70a71e945b8031988b85d8536b1bb572682112e9518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WLY2S4Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIATew3XTeyfqkwqjIOgJ2BTSKAk3QpFcM4Z5KR1kEaUmAiEAo6DyFqTBNDdVwW%2FJ%2F13dR4%2B1tTGn%2FjU%2Fvxkv%2FHa1dvoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIHbgRxKs%2FZvcGntMyrcA46y9p9EgdrS%2BH%2FX5SPrpTYPyVcaU1nBasBVOFc33LU3plExcLdncnzN1aXfSfVwZB9%2BA2ic8IZ0yclI%2BpsEoQIJbC7F%2FclK9gWpsLhZD2hkg5pO6TOiEIaYeKrZfXpFez%2Fp8fIPMt51kXmWd2IMIJmz4%2BsVX4JCWOG0Jx%2BMA1SmKRsJkSVRvaoK9ALCnd2KUVBQ8kF7TU4piqAUKuEclSPgzM%2FXJ5Akl%2Bd7kXW0sBf97PciBamQ6P7k0IlXE6QMHtTDxz7RJfo5s1vxzOzmRLO6C7Pgk9fjpc418WxdArv74ds%2Bll9mkcXCUrSioBmheGCE2hldNWrokXkvrqWcpJR8pyBi7hnxQ0A7EyQRq1FG6uBWQA4bsPCv%2BwnmdFkeZe3tzCRiAQGUZOCi%2FDJg2%2Fk05hXFf8HIsSN6IVrUXzXE4jRIbyeUixZqd39SX5QhNEE7%2FyYe2HWsUewbzoINQ6N5ORQSvAJNKSzwHQHperFPqG8QT1ZSSSnYQ78fSXdLNkLmW41Iv%2BRXm8DJO6D8ZSs1zFj3nEuCVC91u5Wn%2BMXQslUt08xAeCw7tl4PjHpZopK1HHMAUwwXtXv0NTy46J1oZZXm8oIg7UVQY1Qi4xsy0u6n%2FD0a30BhKLB%2FMLSUvskGOqUBaIkeXrKQf%2F0A9COa20xYr5XGGVUIspFoellK%2Fvqhjsu6wh69crdbv86xkRxdPIK2GRfISKXHYTN2tjuSrCl8Uj3deFyCerpWqCgKIPY3Ftqz%2BVOvd8sRhPCkYA%2FF%2BIfrbvCWro0bZ99cWsLgyjh1xuzTDRbwNwKOX06foSlQ5LBB7eBAKh7hAQP%2BOYKxSL3mGY1zsLQHloRu%2F1xhAqshALSUHOcf&X-Amz-Signature=19d812400d54dcb98811c92d12bf98ed4b9fd894701cc0ee8174725ebf85dcd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

