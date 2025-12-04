---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37FRV3K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC2Ewhv4rO7orcqkXL%2Fi7Ok4rhngm5N4czR4SwATmdYtAIgFcyn%2B4qIKzKBBBlfKQmLaFB2JMcKrbEHhO7N%2Fhr627oq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEnOhYdhZlCIbKtbcSrcA74NP1fxo1gTNNj7%2BbDlL3VrGuVQgSxP9H5l6Xu7d6KP5NaXfB75XD9WeDDvwlFtiGRLeD50Drel9Z2GFQKgZBEo3fhcqXr7Imp0yLCWKpvRh6JSosbdYLTcZEuU63FRtE49bT%2Be2kv2CffSMPBFlEbfipxEz6cJP9XoHvRNMa9Tqvc802vf5nNMTj8%2FLPZs4K%2FYAyEFKgX1qEJ3OPQYIfBjSUa2gS2%2Fr%2Fo4aThzxRthhEHrT4YPnEQjZBxnHfiefHuAu3cOMBmxdLtM1XqTIyCxHwWsrVFeRs2GVtHm9bnd1XvsljjnVo6lb9W9gz0fqEFQtZxsIH41GqkizGT77koBtDoyQAKC7a1apgOKfpZKirBofZyfoOuN%2Fzst3YCaNxng5hDmRVPiaJ2PCpiHqGWoEW5uKAoBqQ9Oy8efaCUR6qIh5XRrdWmf1XdJswD1X2BfLVgITo6qzqFoNxQWR4RrZS9Q%2BKgwN%2Bf0X1MJnQGRVDZw2SjUg60bq0eJrR0OUb2to9WCs33kpmPx6c4kf28pi24K4d4wbqTnDtxvnaLz2RX54v7cFxoXVAmA2VhDGwwBgeW%2FXekTCEc4knqIYuyho%2F4wGctkiwyW2lg9oK3Rl0kPyxeUVxalvXYgMJmRxMkGOqUBIBFA0bQOgoxd%2FhkC%2BeoWAtI4OrqXWKLvLmur8INSPZR3rY%2B8oxOmjSMev7s7iYgmtRpJMCIPVIoKgzmIkONruwuYTloMFTNLuksinzgQ8HNlrLgqcp8DUw071cGr%2BLPxomQvUKuxHOsfKt3uLd%2BCIdlmRQiMDBtxqsRwz43%2BfdEsGL55F3Rej5j5%2FzdFvnzffBpsLeg1%2Bu%2BpUWe%2FRaZRHlnJJ9qv&X-Amz-Signature=5ac71feef1b415950063da07410d6c26395ad562a5b25ec77b036701c0efd350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U37FRV3K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC2Ewhv4rO7orcqkXL%2Fi7Ok4rhngm5N4czR4SwATmdYtAIgFcyn%2B4qIKzKBBBlfKQmLaFB2JMcKrbEHhO7N%2Fhr627oq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEnOhYdhZlCIbKtbcSrcA74NP1fxo1gTNNj7%2BbDlL3VrGuVQgSxP9H5l6Xu7d6KP5NaXfB75XD9WeDDvwlFtiGRLeD50Drel9Z2GFQKgZBEo3fhcqXr7Imp0yLCWKpvRh6JSosbdYLTcZEuU63FRtE49bT%2Be2kv2CffSMPBFlEbfipxEz6cJP9XoHvRNMa9Tqvc802vf5nNMTj8%2FLPZs4K%2FYAyEFKgX1qEJ3OPQYIfBjSUa2gS2%2Fr%2Fo4aThzxRthhEHrT4YPnEQjZBxnHfiefHuAu3cOMBmxdLtM1XqTIyCxHwWsrVFeRs2GVtHm9bnd1XvsljjnVo6lb9W9gz0fqEFQtZxsIH41GqkizGT77koBtDoyQAKC7a1apgOKfpZKirBofZyfoOuN%2Fzst3YCaNxng5hDmRVPiaJ2PCpiHqGWoEW5uKAoBqQ9Oy8efaCUR6qIh5XRrdWmf1XdJswD1X2BfLVgITo6qzqFoNxQWR4RrZS9Q%2BKgwN%2Bf0X1MJnQGRVDZw2SjUg60bq0eJrR0OUb2to9WCs33kpmPx6c4kf28pi24K4d4wbqTnDtxvnaLz2RX54v7cFxoXVAmA2VhDGwwBgeW%2FXekTCEc4knqIYuyho%2F4wGctkiwyW2lg9oK3Rl0kPyxeUVxalvXYgMJmRxMkGOqUBIBFA0bQOgoxd%2FhkC%2BeoWAtI4OrqXWKLvLmur8INSPZR3rY%2B8oxOmjSMev7s7iYgmtRpJMCIPVIoKgzmIkONruwuYTloMFTNLuksinzgQ8HNlrLgqcp8DUw071cGr%2BLPxomQvUKuxHOsfKt3uLd%2BCIdlmRQiMDBtxqsRwz43%2BfdEsGL55F3Rej5j5%2FzdFvnzffBpsLeg1%2Bu%2BpUWe%2FRaZRHlnJJ9qv&X-Amz-Signature=12a4ddf4ca8f84d58116fa19715acb7d1de8b229b1e9e2b76d2e561b720545c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

