---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKCEJWXE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe7n4e3SilcIcN0l2sSCGkI4u4tOsbrB7MNFp12HMsBQIgQS%2BCIOqYvClw8ZP0XwWi5%2FPeuWvFbohbXgEJVMMZPc0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA7iTcxpPynVW%2BlaXircAxweegYf%2BHxIok7%2FYgiKOsRtIzM1nozA6m85Jx86oZK%2F4V4MvvsovnlTI7ydB5rCTqidGD6svmZ1QIm%2FRE07BawtbXfA6SFAFyH4%2Fgf2rD9mXCwDY9rLTYMgZ%2BrAdTG6sr%2FNDDeHv20oY%2BIianqaW3J8XY59sIzhnPXKseZAV5P737wu%2Bnp2rKGMBcH4Kmwahyes3WbAHcTr2zCpbKnYVsn7bOR87jq5XJrG%2FIMDeXZrFaxXr%2BWCGNjFm2gTh2Asc81D2AUpl9zkqZ6o5tC05Y9IEoesEgmb4RxNm5SJ7pgkylTBqyHenjyWMKioaUNhSsqUQdkfIG5L2QAU9IlrnnDqT9%2F7sYJS5EvPTj7hYrZB62tSqvjkTTlC%2FX4dppITILj5ArwZRJ5s58l9eHlws0FYpLU01TgoK9MtcnhPlD5SJg0BsmMYKS0u0XL%2Bfq28TBcklB7MGDua4L%2BM9W3Znfv%2FpaGhH4aYZBIdNe8KyIo0h3v3%2B%2B2X%2F%2F%2BZIlkFbihXE7cSghmGSDmqy8n7z1KqUJQ3GbL64wHwSTXqe0SJdrRM8imnAYorYzF41hEq18WhG8oQi%2B1yGg8%2Bgiw6g6oLyDUb0dVH%2BKcHojZkJhiK2f%2Fgmk3XxbccVzjaRBcYMNPezskGOqUB0ku2dvQVwCQuCyNbIyp32pKrur692gBGX9D%2Fc4v6hcfqmdGGQVQOvzZfBma6KzM9FCaQfX5ouKp7v4HZebZRyugPZlIIEvlbwr4krYj9ysWe4bbJ%2BtslHZ6ZXLcpqR57EAeAPqKK2O8Dlk%2BYF8tyhgmojTwpJJvZhtDzkSKsvNEFrX5kQbUDBiaQ6U8q2YlGUsLyGFweP1sRVOk%2BsAkEEZ3fhoLv&X-Amz-Signature=cb1568d0f9cf919d87fc45d7fe69b1ed1dfb72dd4c75f6cdc587f590997eda4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKCEJWXE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe7n4e3SilcIcN0l2sSCGkI4u4tOsbrB7MNFp12HMsBQIgQS%2BCIOqYvClw8ZP0XwWi5%2FPeuWvFbohbXgEJVMMZPc0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA7iTcxpPynVW%2BlaXircAxweegYf%2BHxIok7%2FYgiKOsRtIzM1nozA6m85Jx86oZK%2F4V4MvvsovnlTI7ydB5rCTqidGD6svmZ1QIm%2FRE07BawtbXfA6SFAFyH4%2Fgf2rD9mXCwDY9rLTYMgZ%2BrAdTG6sr%2FNDDeHv20oY%2BIianqaW3J8XY59sIzhnPXKseZAV5P737wu%2Bnp2rKGMBcH4Kmwahyes3WbAHcTr2zCpbKnYVsn7bOR87jq5XJrG%2FIMDeXZrFaxXr%2BWCGNjFm2gTh2Asc81D2AUpl9zkqZ6o5tC05Y9IEoesEgmb4RxNm5SJ7pgkylTBqyHenjyWMKioaUNhSsqUQdkfIG5L2QAU9IlrnnDqT9%2F7sYJS5EvPTj7hYrZB62tSqvjkTTlC%2FX4dppITILj5ArwZRJ5s58l9eHlws0FYpLU01TgoK9MtcnhPlD5SJg0BsmMYKS0u0XL%2Bfq28TBcklB7MGDua4L%2BM9W3Znfv%2FpaGhH4aYZBIdNe8KyIo0h3v3%2B%2B2X%2F%2F%2BZIlkFbihXE7cSghmGSDmqy8n7z1KqUJQ3GbL64wHwSTXqe0SJdrRM8imnAYorYzF41hEq18WhG8oQi%2B1yGg8%2Bgiw6g6oLyDUb0dVH%2BKcHojZkJhiK2f%2Fgmk3XxbccVzjaRBcYMNPezskGOqUB0ku2dvQVwCQuCyNbIyp32pKrur692gBGX9D%2Fc4v6hcfqmdGGQVQOvzZfBma6KzM9FCaQfX5ouKp7v4HZebZRyugPZlIIEvlbwr4krYj9ysWe4bbJ%2BtslHZ6ZXLcpqR57EAeAPqKK2O8Dlk%2BYF8tyhgmojTwpJJvZhtDzkSKsvNEFrX5kQbUDBiaQ6U8q2YlGUsLyGFweP1sRVOk%2BsAkEEZ3fhoLv&X-Amz-Signature=0fb38c4f3869912535055f61f0c2798cfa6427c0da9133fcdf7912e0094f3e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

