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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPLPL66E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAqHae9ITwIHgVHPH1fJuhxIQ%2FLpkmHGZBxB7QujFv2hAiEAm7JAsgbo42V3MJhJV0tPjOV2RigsETY0iT627Eb9qYYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDW9oY4C7c6jGNfiZircA%2B78E%2BCiIk8Z%2BewrYdOGGDWK9jqFF915uO%2B0seR%2BRMyir3LH0748isXS1ngrcfcfvMdGow8dlJCfwSoPObE6gFKCJvWidAvr8QvQiVb%2FaP4jSHDBB%2BY8LwC6q0ugerXXqpODIWt0KgkggQF7U8%2FskAWcnGv4bb%2BoKr6OBZRwRPFUR3SG5djkSAgHi9QI9m4tl4hxfLfCV%2FZIL%2B%2F55lNLVJhmyi1%2BlJUd2B7O9sewyOUOK6i7xRU2%2BFzKFgwG7t%2F1O1fimFC1cqpyASSz3h2ZSWpC6n04swYtK04r%2BKmJBIycGAD4ChTVWAcLmGPQm8f7OKNAPHPOxsll7q4ILek86i%2FAk8%2FVfO1vZnoPe430ZJfcaIDsE8rARebkR4Xy4ggOHqXBsKVbJPJv9ZnHFj74TAsSGK%2BYdBCmPaXxOPmM7O4D9Iq9Ux2QM03eSfRvP8bI5S6TBtytKnRH%2BdH7WwMO1qLSbsX%2FKhLkoPcQ2T60HlcIaglRoFqrVEwsbdsSRemUaAKQWrIL7e4EwzMFOcd2%2FlOoKHN70iwC8ALTpW81wHNdCP7Oui8MtwgosmzL%2FTEdBxgS63C00JQI1mYs%2BZRyzsyKYOvJPUl5C8p7XjjUqOr3CqPG%2FnL7SOKJTwWvMIKWvskGOqUBn6TXACJTLJgmaZ771TpW4pA9q2D2WFkegy0BSSSU00cenU9hHTvDMC9eoZUIpLcUMRQNX6NOWMI0YEmwT5He%2FoO7ZMtZ3eVa2qGg%2BDezNFp3S%2FIC49MJqjCRvft2wvYuAEQro0g61zA%2FXx4O%2FQKR1eAL9epJzUBorPaIzuC4PT4mNUFOFezJWAzkSgBT3W2h%2BOGnT%2FLqq%2BCD30qgtYjpY6h0HyZ%2B&X-Amz-Signature=72f4eee4c992cd93713300f6b81c32f136c4954b819391904c9f2b2c8660bcfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPLPL66E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAqHae9ITwIHgVHPH1fJuhxIQ%2FLpkmHGZBxB7QujFv2hAiEAm7JAsgbo42V3MJhJV0tPjOV2RigsETY0iT627Eb9qYYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDW9oY4C7c6jGNfiZircA%2B78E%2BCiIk8Z%2BewrYdOGGDWK9jqFF915uO%2B0seR%2BRMyir3LH0748isXS1ngrcfcfvMdGow8dlJCfwSoPObE6gFKCJvWidAvr8QvQiVb%2FaP4jSHDBB%2BY8LwC6q0ugerXXqpODIWt0KgkggQF7U8%2FskAWcnGv4bb%2BoKr6OBZRwRPFUR3SG5djkSAgHi9QI9m4tl4hxfLfCV%2FZIL%2B%2F55lNLVJhmyi1%2BlJUd2B7O9sewyOUOK6i7xRU2%2BFzKFgwG7t%2F1O1fimFC1cqpyASSz3h2ZSWpC6n04swYtK04r%2BKmJBIycGAD4ChTVWAcLmGPQm8f7OKNAPHPOxsll7q4ILek86i%2FAk8%2FVfO1vZnoPe430ZJfcaIDsE8rARebkR4Xy4ggOHqXBsKVbJPJv9ZnHFj74TAsSGK%2BYdBCmPaXxOPmM7O4D9Iq9Ux2QM03eSfRvP8bI5S6TBtytKnRH%2BdH7WwMO1qLSbsX%2FKhLkoPcQ2T60HlcIaglRoFqrVEwsbdsSRemUaAKQWrIL7e4EwzMFOcd2%2FlOoKHN70iwC8ALTpW81wHNdCP7Oui8MtwgosmzL%2FTEdBxgS63C00JQI1mYs%2BZRyzsyKYOvJPUl5C8p7XjjUqOr3CqPG%2FnL7SOKJTwWvMIKWvskGOqUBn6TXACJTLJgmaZ771TpW4pA9q2D2WFkegy0BSSSU00cenU9hHTvDMC9eoZUIpLcUMRQNX6NOWMI0YEmwT5He%2FoO7ZMtZ3eVa2qGg%2BDezNFp3S%2FIC49MJqjCRvft2wvYuAEQro0g61zA%2FXx4O%2FQKR1eAL9epJzUBorPaIzuC4PT4mNUFOFezJWAzkSgBT3W2h%2BOGnT%2FLqq%2BCD30qgtYjpY6h0HyZ%2B&X-Amz-Signature=ee043d05d50ad5461e3fed4c525d2d7e0fc1bd6b77a4832ccd3bcee888c2cf57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

