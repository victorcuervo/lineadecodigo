---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNBQCYPC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC23CXJ%2FpkTjEJqv6nHE5WM0WFcbAwCmQjn8PqBwkV1oAiAp%2FTjssNgCL0pk1O%2BsU%2BI1hWkXNrjCPgfvD%2B18RAh%2F%2FSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMdKL88lacAwnbwQclKtwDquel0S83aw4sbe%2FtRlJyAw7GZX2X3HmEmMcKP2R4D50iTMKCaRTE3xMM5moGgi8EFQamY8RYuXLbeuzkAD8KO7DuDufFOb32Bj%2BaeTBTrT4CPtLKmGJWglHVInu0jMguGUunQmbFjgGL%2BhEuAkvvKi2OkO%2FGnS0nEGynSmuw89d8fnjuNvjkyQwVUi1ABUp1J61r6sWxBbXGDjkOhuifbeBDPDsTrxdT5BugqJ6qFvuebayP6sORW9%2B6tiUeetBgnvIYlbBfXO30mG4GimhuTrOW5b3tcyT5g4WhmiATCPgGfguNJsO9mGwJxVKG7nNV1YTD1a%2Fcs6w0rbh50rm9rdJlH6%2FDD7dlEo9q6vE%2BJ2GbGtxmKR6mfcRHkn5%2BWPAiGAaGj0p7ucJoTueHCQb6mL7tSiS2Af1YgFzWyFqA7I%2Fcqi69HL5L409f9jRl%2BjISpttRD9lMwvEPHxnW892j0GJbgtKep9wgPvufceQk14A%2Bd67pUAQwp%2FGwsF7I9IILfUd85gF2cJBh3hQy2DR0rtmLKXu3i9WtUftuQW1W26WHLTAX2J3lPXbVX4rBcwHyFhRsXOqK4CufDsHX9dI%2BE4vAtpp9koERrboJyM%2FH8DeiJLC7yMCOSl9ZqhswytvGyQY6pgHGSo7t1XP8nrgTJLf98lVobN6bmxUx59shcofuLElcJCYkf9ry9Hwyovfch8DtrDJA8monClDX4DBDvvmOeX0k070IW0rbqpe3nSmZQu9EXhoCPjGVV68JfqekjEcHFqUlGUGFIYVqHNjqDL64CWaODdKTE8XV3%2BC7%2FLSfRwRi8PypilUeSPTIOWSCyNPfOk0Jg3NlYuW4ZZxehp1F2MP9q6MJBye2&X-Amz-Signature=a6e5ddd0fd2ce09d8bdb15f6676766db578ac71746f93b84651b5f729657d37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNBQCYPC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC23CXJ%2FpkTjEJqv6nHE5WM0WFcbAwCmQjn8PqBwkV1oAiAp%2FTjssNgCL0pk1O%2BsU%2BI1hWkXNrjCPgfvD%2B18RAh%2F%2FSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMdKL88lacAwnbwQclKtwDquel0S83aw4sbe%2FtRlJyAw7GZX2X3HmEmMcKP2R4D50iTMKCaRTE3xMM5moGgi8EFQamY8RYuXLbeuzkAD8KO7DuDufFOb32Bj%2BaeTBTrT4CPtLKmGJWglHVInu0jMguGUunQmbFjgGL%2BhEuAkvvKi2OkO%2FGnS0nEGynSmuw89d8fnjuNvjkyQwVUi1ABUp1J61r6sWxBbXGDjkOhuifbeBDPDsTrxdT5BugqJ6qFvuebayP6sORW9%2B6tiUeetBgnvIYlbBfXO30mG4GimhuTrOW5b3tcyT5g4WhmiATCPgGfguNJsO9mGwJxVKG7nNV1YTD1a%2Fcs6w0rbh50rm9rdJlH6%2FDD7dlEo9q6vE%2BJ2GbGtxmKR6mfcRHkn5%2BWPAiGAaGj0p7ucJoTueHCQb6mL7tSiS2Af1YgFzWyFqA7I%2Fcqi69HL5L409f9jRl%2BjISpttRD9lMwvEPHxnW892j0GJbgtKep9wgPvufceQk14A%2Bd67pUAQwp%2FGwsF7I9IILfUd85gF2cJBh3hQy2DR0rtmLKXu3i9WtUftuQW1W26WHLTAX2J3lPXbVX4rBcwHyFhRsXOqK4CufDsHX9dI%2BE4vAtpp9koERrboJyM%2FH8DeiJLC7yMCOSl9ZqhswytvGyQY6pgHGSo7t1XP8nrgTJLf98lVobN6bmxUx59shcofuLElcJCYkf9ry9Hwyovfch8DtrDJA8monClDX4DBDvvmOeX0k070IW0rbqpe3nSmZQu9EXhoCPjGVV68JfqekjEcHFqUlGUGFIYVqHNjqDL64CWaODdKTE8XV3%2BC7%2FLSfRwRi8PypilUeSPTIOWSCyNPfOk0Jg3NlYuW4ZZxehp1F2MP9q6MJBye2&X-Amz-Signature=238b3a0288a54cbc58aedbb76b4d5c3ebf3d903f9a6293e90f7cfecaba38bac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

