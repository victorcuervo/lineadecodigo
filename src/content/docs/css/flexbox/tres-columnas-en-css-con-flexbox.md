---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3GN347%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVgLH6M0v6xQIf6nbjfi5K1SFBHnmqG6%2Bm1vbtALiktAiAPyikl%2FOBs6FTUONNOIY%2Bj6jQIvkR7amuMw%2FZ74j5%2BiSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMLCe9dIQyx1iH4ew3KtwDG0NHaFfbaB%2FJrZv9CfnkxAoiZGO02vRg6%2BdcH5oGW4DcsTxSd%2Fjcht7lY3EKjr6e2hPFHgb%2ByzhBq%2BuWqbzw%2B5DcFgIQHDOiapon9XUwhmdyNWl7wUtRXMEmpLuyjxyFlYyPVk9JEYs%2BrKAZ1HmhLXWHcln952Ak7qp1XhQZoPWE4g7avDVN8yRgLTmh2EnB9yPGgFTZZ81x9fRuQMdlAJqto8%2Bf6Rl1YQhXN5mMEjsZzOdlJqldluiWrIXIz4iVI%2Fc3s3FmWA9MxTwUvEfemWTBBUW2A%2B9l%2Bnt8E1gcg2ab%2F9t6aCfCVvz8QC1uubw%2BLnQsmTLstlAV9YOjyIcZt0dEO%2F2fInAPCxX5a4o5eYisMN8g01gHu0gIvLd5txFiy95jqSodPh8%2Bx6ydEN15oHGGcObbfvdAz1d2c%2FqDAN%2FoT4M96VWKILpT6ArTh27uEDyaZ0d8Pr8iFaAImM58wi8avb%2BUhWt5uGPPJhcyUdpkj365yYWiS15L5sRLk1%2BQuKWfjmUWkykrqkBszCyiWFLM3ACxbGtTueHr31J9rrXL%2BjQJaNa%2Bh6GGFIWFyh%2Fc%2Fo0MT8RZ9nRvdusL2YRDxQTOwFBhs%2B23O5zxzYNwDnXzbkpGK08A8yrvZoAwosbRyQY6pgFkPJWAYKGj9GakrmG1fnYnWqvkY8RM7elbJcw%2FvL1U2gh%2FfukvVl7YKmIIieTOtSSqbOdxynQ5zA38rBd0ApSQH7QHNXPxWujaWERyD4pdSDjL9DbyLPRfJ2r5dw9%2B85BanPltP8jSh165k0xX3xms1nR4ssGkWqE%2F5Hg%2FfNE70%2BGa4RnzZ2ZHV14HJwumuTb4SzQuUcEtzEIP5ldo3lCjmyK5rfOg&X-Amz-Signature=d6e63e43ab5f42654fe1d9ecbf42a03cca65e94fdea7cc5201884cfb619cdc31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3GN347%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVgLH6M0v6xQIf6nbjfi5K1SFBHnmqG6%2Bm1vbtALiktAiAPyikl%2FOBs6FTUONNOIY%2Bj6jQIvkR7amuMw%2FZ74j5%2BiSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMLCe9dIQyx1iH4ew3KtwDG0NHaFfbaB%2FJrZv9CfnkxAoiZGO02vRg6%2BdcH5oGW4DcsTxSd%2Fjcht7lY3EKjr6e2hPFHgb%2ByzhBq%2BuWqbzw%2B5DcFgIQHDOiapon9XUwhmdyNWl7wUtRXMEmpLuyjxyFlYyPVk9JEYs%2BrKAZ1HmhLXWHcln952Ak7qp1XhQZoPWE4g7avDVN8yRgLTmh2EnB9yPGgFTZZ81x9fRuQMdlAJqto8%2Bf6Rl1YQhXN5mMEjsZzOdlJqldluiWrIXIz4iVI%2Fc3s3FmWA9MxTwUvEfemWTBBUW2A%2B9l%2Bnt8E1gcg2ab%2F9t6aCfCVvz8QC1uubw%2BLnQsmTLstlAV9YOjyIcZt0dEO%2F2fInAPCxX5a4o5eYisMN8g01gHu0gIvLd5txFiy95jqSodPh8%2Bx6ydEN15oHGGcObbfvdAz1d2c%2FqDAN%2FoT4M96VWKILpT6ArTh27uEDyaZ0d8Pr8iFaAImM58wi8avb%2BUhWt5uGPPJhcyUdpkj365yYWiS15L5sRLk1%2BQuKWfjmUWkykrqkBszCyiWFLM3ACxbGtTueHr31J9rrXL%2BjQJaNa%2Bh6GGFIWFyh%2Fc%2Fo0MT8RZ9nRvdusL2YRDxQTOwFBhs%2B23O5zxzYNwDnXzbkpGK08A8yrvZoAwosbRyQY6pgFkPJWAYKGj9GakrmG1fnYnWqvkY8RM7elbJcw%2FvL1U2gh%2FfukvVl7YKmIIieTOtSSqbOdxynQ5zA38rBd0ApSQH7QHNXPxWujaWERyD4pdSDjL9DbyLPRfJ2r5dw9%2B85BanPltP8jSh165k0xX3xms1nR4ssGkWqE%2F5Hg%2FfNE70%2BGa4RnzZ2ZHV14HJwumuTb4SzQuUcEtzEIP5ldo3lCjmyK5rfOg&X-Amz-Signature=34ccab5657c70a94841b6222395ca8e022cf252f3643cc8cae1c016606b7d1eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

