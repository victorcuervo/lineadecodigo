---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNNCNP2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwHdavEH4et98HjFsQiCsidqLTwCohl3XY7uiTuV4hlAiA%2FtBPtBqFARgxJdFfJdafJdY0f3yUaJR1iaItz%2FZZ1hSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMlU82f4ZR%2BeyMuWVSKtwDYwg9QVlnk5UVU1gLqx%2FBgwmQJny2QQVycuu3wRntd%2BQvj2BR9Qgbt6YxLAoVJNgUarJju%2BDgWM6jpcBZt7EKieb9XM7GIrr16u0QHoqPeej6C5bNumF9W%2BR5e0QEBjiVSxA7CPOruBds9XNwtVhw4s1H87XqQ%2FbZNyABGZNJ4VeorIu74%2B1oPoPMpVNkwpZoQ612M7y9QvFLbI8rL3fML8AvQJsmfTeeEt4BizAxs%2B1U9ZCHVgEBNU4Nbb%2BVFhKZdTUs27k1qiUCIF5yKi4nABqaw5sr3DyNtCkpx97NF6BqDTiHCyiKU9niM3yr4GSaYbZDWvLyO0P0JuCNx%2BRXGOsOR2XN5QMXgo3pm0anBJMg8kT%2BhNUNqLkqpjAZXoKGgt3kIn3k2eo%2FASAqS46PeuNp6DuzG2nBwz9OvnrKFklSLsy38hi0KhEDbtKJ3BIfzCdC8RMMjDLVkNF7IyNTgi0fMtogcD7lsXypbayPsjjn2pLPR1%2Fm8u8UItnV5%2F63eBnOm2TxHKD0Nw4OWI4I6e28ICkhIFu4zdvyxKZ80KAliLEdx4p3NdLWJ6ZQJhW7Dm6dYy%2F6OC0ho1J%2BErIcFAgGgGF3nfdB6F%2F3H2nicuENH%2B8Szqe4jHvWnnMwl%2BvPyQY6pgGj1QJGSrps6bs4s2vXzUMR2DOjPQm0BjRXqowU7cfgnN0LP8%2BcQOpoQL%2Fx2YiAQ7yKYrsiYa76Mq74Y%2FBaBxOij0eKfM044Gdu0u3kLUJSt74BSZcxANkeGe1qYHqbiZiTKKKTSSk%2BB%2FKNVrEzMZJY0oeAh9EQSktK9XqwqlxDymjEz1kBW5ajXIVDGLsw6fVnTo6k7dzBlUKkSA6ZB42DU4uKgTRb&X-Amz-Signature=e369037abf6595a66f90ccccd42960fa561d4a2397dd1bedd0a2892551baaa4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNNCNP2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwHdavEH4et98HjFsQiCsidqLTwCohl3XY7uiTuV4hlAiA%2FtBPtBqFARgxJdFfJdafJdY0f3yUaJR1iaItz%2FZZ1hSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMlU82f4ZR%2BeyMuWVSKtwDYwg9QVlnk5UVU1gLqx%2FBgwmQJny2QQVycuu3wRntd%2BQvj2BR9Qgbt6YxLAoVJNgUarJju%2BDgWM6jpcBZt7EKieb9XM7GIrr16u0QHoqPeej6C5bNumF9W%2BR5e0QEBjiVSxA7CPOruBds9XNwtVhw4s1H87XqQ%2FbZNyABGZNJ4VeorIu74%2B1oPoPMpVNkwpZoQ612M7y9QvFLbI8rL3fML8AvQJsmfTeeEt4BizAxs%2B1U9ZCHVgEBNU4Nbb%2BVFhKZdTUs27k1qiUCIF5yKi4nABqaw5sr3DyNtCkpx97NF6BqDTiHCyiKU9niM3yr4GSaYbZDWvLyO0P0JuCNx%2BRXGOsOR2XN5QMXgo3pm0anBJMg8kT%2BhNUNqLkqpjAZXoKGgt3kIn3k2eo%2FASAqS46PeuNp6DuzG2nBwz9OvnrKFklSLsy38hi0KhEDbtKJ3BIfzCdC8RMMjDLVkNF7IyNTgi0fMtogcD7lsXypbayPsjjn2pLPR1%2Fm8u8UItnV5%2F63eBnOm2TxHKD0Nw4OWI4I6e28ICkhIFu4zdvyxKZ80KAliLEdx4p3NdLWJ6ZQJhW7Dm6dYy%2F6OC0ho1J%2BErIcFAgGgGF3nfdB6F%2F3H2nicuENH%2B8Szqe4jHvWnnMwl%2BvPyQY6pgGj1QJGSrps6bs4s2vXzUMR2DOjPQm0BjRXqowU7cfgnN0LP8%2BcQOpoQL%2Fx2YiAQ7yKYrsiYa76Mq74Y%2FBaBxOij0eKfM044Gdu0u3kLUJSt74BSZcxANkeGe1qYHqbiZiTKKKTSSk%2BB%2FKNVrEzMZJY0oeAh9EQSktK9XqwqlxDymjEz1kBW5ajXIVDGLsw6fVnTo6k7dzBlUKkSA6ZB42DU4uKgTRb&X-Amz-Signature=4e9d778948a452eb210f6c8c9c834082bfc51f95e9ae0711ac7b85486fbf7733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

