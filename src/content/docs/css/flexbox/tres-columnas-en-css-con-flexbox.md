---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCMFCMNY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZVLxrI7CEd%2FUOalxrcvWVeCQlzyRLoO4qkS0SsuQreAiEA%2FiVNkCFoMZgZm2XuEzG7go0WIP1BVYdGklNS7lRLNygqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCanS0XI4EjNZbIl6CrcA2RUvW68chFRbATx%2FqcACoQwjwsVZjpriqFGo%2F54YLDs9CHNXahhyFH%2F6r6YGidz6vt21SbMkcmRJRWnLvS%2Fnj5wzzVQuvq1msZUfXLCiY13kOGDGYra95USFvcgmfm8l0xoiKrEHIKGUIXneFWO62r0pR1XNopqCGrNG4FVx2OiD%2BMx5%2F5Z71s%2F65pqLELe6YK2yjaoDwULtiTdjytlsoCjg3vCPLnKDj7NVr23eydpXOer7sjJwx6WcByqkzCYObj2UYBMZX%2B7QEHe3H05hQFfrq6bghqCTSPOe25mkFXMNKI5aQBE5bXPhYB2oubn1WyAEYkHSR%2FpP0ffdtVNxKezZYcBn1VJxQCV9LZV2eIRCqawBj3xYmxa0a1aFC4GnFM55EFk8U3ulX1wsH6nDva%2BSY8Fj8UwP3QGrHX7YCfTv7tCABJJVbD%2BI3IKDxpQHBzeDhmp%2BJVv3qqwElSEHxEF%2Fdpp61SOX9fYwLmqtOz4Se88A%2F6Y6CU3h5lthuwkmXa4mA%2BSOfk%2F6B%2BXo0%2B73cxp1CkXzBhGWV%2Fwtmae8hSPGJj94cddio%2BbvBn%2Bmw5RpCK%2BpK2BNlSzU6eGMm%2Bdmq%2FElgEOitY08C07aLPljlSNF0lFyxVjfyfF92vTMPyk38kGOqUB9PrEED6Z5BYakpmlVttOgJoGQAUWonnv2NR378YRI1KxU%2FKMefKInCzgg0N4Da2LI7UR%2F6GBhnqym5nS%2BBsRyXppqX%2FQGHMK6WN%2F3zYRz%2BPGh%2BhKBqMjNdoVFENO5zfqfif4QET8N2d4j9O%2BJXIAe03matxXFmf6rIsdZGXqZI%2B4OEhaxXZzTBN7YUba0sBBUEGJUYeJusZujSGS7shfuRI3crFZ&X-Amz-Signature=9846490f0e74a61973dec065bc9ad6a07d592aac239b9498df3f230c1013b634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCMFCMNY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZVLxrI7CEd%2FUOalxrcvWVeCQlzyRLoO4qkS0SsuQreAiEA%2FiVNkCFoMZgZm2XuEzG7go0WIP1BVYdGklNS7lRLNygqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCanS0XI4EjNZbIl6CrcA2RUvW68chFRbATx%2FqcACoQwjwsVZjpriqFGo%2F54YLDs9CHNXahhyFH%2F6r6YGidz6vt21SbMkcmRJRWnLvS%2Fnj5wzzVQuvq1msZUfXLCiY13kOGDGYra95USFvcgmfm8l0xoiKrEHIKGUIXneFWO62r0pR1XNopqCGrNG4FVx2OiD%2BMx5%2F5Z71s%2F65pqLELe6YK2yjaoDwULtiTdjytlsoCjg3vCPLnKDj7NVr23eydpXOer7sjJwx6WcByqkzCYObj2UYBMZX%2B7QEHe3H05hQFfrq6bghqCTSPOe25mkFXMNKI5aQBE5bXPhYB2oubn1WyAEYkHSR%2FpP0ffdtVNxKezZYcBn1VJxQCV9LZV2eIRCqawBj3xYmxa0a1aFC4GnFM55EFk8U3ulX1wsH6nDva%2BSY8Fj8UwP3QGrHX7YCfTv7tCABJJVbD%2BI3IKDxpQHBzeDhmp%2BJVv3qqwElSEHxEF%2Fdpp61SOX9fYwLmqtOz4Se88A%2F6Y6CU3h5lthuwkmXa4mA%2BSOfk%2F6B%2BXo0%2B73cxp1CkXzBhGWV%2Fwtmae8hSPGJj94cddio%2BbvBn%2Bmw5RpCK%2BpK2BNlSzU6eGMm%2Bdmq%2FElgEOitY08C07aLPljlSNF0lFyxVjfyfF92vTMPyk38kGOqUB9PrEED6Z5BYakpmlVttOgJoGQAUWonnv2NR378YRI1KxU%2FKMefKInCzgg0N4Da2LI7UR%2F6GBhnqym5nS%2BBsRyXppqX%2FQGHMK6WN%2F3zYRz%2BPGh%2BhKBqMjNdoVFENO5zfqfif4QET8N2d4j9O%2BJXIAe03matxXFmf6rIsdZGXqZI%2B4OEhaxXZzTBN7YUba0sBBUEGJUYeJusZujSGS7shfuRI3crFZ&X-Amz-Signature=af673b6a5196c5b7b2bc02e397fd4cd8e8fa8185ea323df9f1045e75765c3795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

