---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JDXT22%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FoaQQrvkjUq6e8DGyiJoboh%2FrO7LpI4yELa4aIR%2Fq8AiEA4PiCJdR%2FqFHvSfpABKOvnZsxEM%2BH%2F6jVqSnN9pSjMf4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIOPsFZ8P0DHvIGCbSrcA%2Bc3EwQz8d9NN6a2gbI%2Fb7r55hifey3p6phE0w%2B5vSFWZpQpcTxbeTMP2%2BGSPfDnbgPsIUCV6jX2KXz10rz50rYIeagvNSAD2OrTCE%2B0ho%2BCTZgcs0PPQRHK0W2fJMRM5HaYxQ2%2BprNruv4VORt%2FPjOn6KAnQvluDvswU4Md0ZXhPIxHOlM11d%2FQJPLm5EfJS4HL%2FUwY%2Fe1eAhx0gQiNmB5O1gfntNmDGA%2B3fjZXW7rqcciTXa6ZXLGdCRG52xfyCSESxviTW%2Fo1bOlHrvZGrd3rGFy%2BhU9gMXgnZ8auxeVuTCYEuiGhFT89YDGFOXyL81ypEHlagWpHQoRuxcavpO7OKM1%2BEVZfyb0uowJBlB0YVOOc1kwBv6R0JdQR6k58f6uIuZ9%2FWVRiLK9Fa0YXkpuBgdfLeN4UIPRkG0Af48vNN0VYaJSYsKrLjXn7qnyYz8laQLVdiULFc51LW%2F09HObMQBQO8FtaFxHlZYsFLnQO9Q4DW7hX6XbD5l1YtnKK1vATl2EvQuu2FpLXWqzxo57o0Ij2J8I8I3LJt2fDH9qAdtPoxQh3pcUvaPGauoXL5YkgRAt2hWk1k6qnsmq4U0QwlLUTqR90PhWQDQJa2QfxBurirK0BPD3AvfPBMPem0MkGOqUBE%2BQcD7hhn4rJtsb9AbhqmJqFvM2SUrpGNwasLRr8hVgrBI448PGVMdhpPQsEVIPaAAzoojJxC0q2hkY5DkxnlAnsxJeT6icQwtU9w6MMCjm5BWge0N%2FDbzoUI3YF6egvy0GD6jqFvAJH1O0q85xWyoSfJ%2BnSyBNJXK0nJtiIm5ZcbTP0Y5hU8%2BDIOk3cZdMQAp8zU9BxR2IZAYBwbB7IeFdqqyqD&X-Amz-Signature=1ce3bd12feb1f4d0c30f145b80a764862465a9aa605464d9ef6c723909a4128e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JDXT22%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FoaQQrvkjUq6e8DGyiJoboh%2FrO7LpI4yELa4aIR%2Fq8AiEA4PiCJdR%2FqFHvSfpABKOvnZsxEM%2BH%2F6jVqSnN9pSjMf4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIOPsFZ8P0DHvIGCbSrcA%2Bc3EwQz8d9NN6a2gbI%2Fb7r55hifey3p6phE0w%2B5vSFWZpQpcTxbeTMP2%2BGSPfDnbgPsIUCV6jX2KXz10rz50rYIeagvNSAD2OrTCE%2B0ho%2BCTZgcs0PPQRHK0W2fJMRM5HaYxQ2%2BprNruv4VORt%2FPjOn6KAnQvluDvswU4Md0ZXhPIxHOlM11d%2FQJPLm5EfJS4HL%2FUwY%2Fe1eAhx0gQiNmB5O1gfntNmDGA%2B3fjZXW7rqcciTXa6ZXLGdCRG52xfyCSESxviTW%2Fo1bOlHrvZGrd3rGFy%2BhU9gMXgnZ8auxeVuTCYEuiGhFT89YDGFOXyL81ypEHlagWpHQoRuxcavpO7OKM1%2BEVZfyb0uowJBlB0YVOOc1kwBv6R0JdQR6k58f6uIuZ9%2FWVRiLK9Fa0YXkpuBgdfLeN4UIPRkG0Af48vNN0VYaJSYsKrLjXn7qnyYz8laQLVdiULFc51LW%2F09HObMQBQO8FtaFxHlZYsFLnQO9Q4DW7hX6XbD5l1YtnKK1vATl2EvQuu2FpLXWqzxo57o0Ij2J8I8I3LJt2fDH9qAdtPoxQh3pcUvaPGauoXL5YkgRAt2hWk1k6qnsmq4U0QwlLUTqR90PhWQDQJa2QfxBurirK0BPD3AvfPBMPem0MkGOqUBE%2BQcD7hhn4rJtsb9AbhqmJqFvM2SUrpGNwasLRr8hVgrBI448PGVMdhpPQsEVIPaAAzoojJxC0q2hkY5DkxnlAnsxJeT6icQwtU9w6MMCjm5BWge0N%2FDbzoUI3YF6egvy0GD6jqFvAJH1O0q85xWyoSfJ%2BnSyBNJXK0nJtiIm5ZcbTP0Y5hU8%2BDIOk3cZdMQAp8zU9BxR2IZAYBwbB7IeFdqqyqD&X-Amz-Signature=9564479f96651bc35ed6c4f3f8a00662e6cee3eaafdbd119e0dabde4a7e2ffba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

