---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XOG23M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVFPn5DxrNDeULxZRHtd9Z5I37UDDk8QrjrTKWqT1yOAiA1uI83tUZK%2FtdwBzuqLMNyNWrtVv8T%2FfUdcRx9OwhbRSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC4ygBn8SVEqCccg%2BKtwDGNCyEa%2B7n5iQRABMX%2FN7OlxYU%2F3t%2FdxZERqhpMwEn9vgZWP%2B6WRUk%2BGqx3xLKh2Ro8LUCcQU0SfYNJw8uWcH7ZbxrQ3g2Bl2dKa1g3%2FHF8FO3HKunrRVt%2F58TcupMtZq8gJcZFY%2BcAWfbUwuP6iDvXZ%2FeWZwekeLFZ5wC2QG1J8sr7nuwEpMJxU02lZW4BweUJLuGjOzq1Irsb4lhUv7%2FtJKdoirLEnW3aWka0Ko5HH8gWT%2BjusV8wehNSKj8I7GLypbCjxrcTfXZm2ynl3iLCZfk6HnRpsqcfx2EUiMU1xB4pLGjM9IYBzumt1tzbBS3%2BgO2vJM8dve9sY3h5v2kLGg4Yqt8f3EYjCOsCpiau7vNY2atz360oteW6fxl7P%2FKSeWW2fAf8tqLGDmPogQBF0Re5aSh4Fa5keyV0h0HU%2FRQTawxt6q%2FGpHnyJ1paSVnQKRL1zzu4JtKDjJc6C1%2FLhZZGcD7bMj12xBF6xz2iYy3pP79MtcCwAW6p%2FcP3LQPVpdOtKWMB1Xfrf0Z9g5b2us8A01KvR%2B1QXzjo6azVNWREKUNrn9%2FeFwSLfYmaa0FmBK71d2lH7GoYaMJ46blNJieb3rHKVOjtPvwW8PDaz1I2Ehy6%2Bxk5ODU1Ew25rUyQY6pgGml4x0QA9PplDGqI3h4XwLwb8HiwuBs0cSThxPv%2B1i7KEQSQhEYNextCrV3fiQl%2F%2Fg0fDShLSVSuae554%2FNUt2YHbaB%2B20f6vXGC41JzR%2FkySyfALt8nluZFdkaz%2FApiyFFhX%2Fz4011eZb04pE6SEu%2BZDfYZ%2F2r3NjfxxxyIpttG5SQKvxekhR58%2BWcE9barOOIPkRgxNqvyclJPJxtEOjwKMnBZFJ&X-Amz-Signature=6dc9da11d9b6a421a6e82d1084f4ac47f0b8634d7a8e4fa02e40884737dbf316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XOG23M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVFPn5DxrNDeULxZRHtd9Z5I37UDDk8QrjrTKWqT1yOAiA1uI83tUZK%2FtdwBzuqLMNyNWrtVv8T%2FfUdcRx9OwhbRSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC4ygBn8SVEqCccg%2BKtwDGNCyEa%2B7n5iQRABMX%2FN7OlxYU%2F3t%2FdxZERqhpMwEn9vgZWP%2B6WRUk%2BGqx3xLKh2Ro8LUCcQU0SfYNJw8uWcH7ZbxrQ3g2Bl2dKa1g3%2FHF8FO3HKunrRVt%2F58TcupMtZq8gJcZFY%2BcAWfbUwuP6iDvXZ%2FeWZwekeLFZ5wC2QG1J8sr7nuwEpMJxU02lZW4BweUJLuGjOzq1Irsb4lhUv7%2FtJKdoirLEnW3aWka0Ko5HH8gWT%2BjusV8wehNSKj8I7GLypbCjxrcTfXZm2ynl3iLCZfk6HnRpsqcfx2EUiMU1xB4pLGjM9IYBzumt1tzbBS3%2BgO2vJM8dve9sY3h5v2kLGg4Yqt8f3EYjCOsCpiau7vNY2atz360oteW6fxl7P%2FKSeWW2fAf8tqLGDmPogQBF0Re5aSh4Fa5keyV0h0HU%2FRQTawxt6q%2FGpHnyJ1paSVnQKRL1zzu4JtKDjJc6C1%2FLhZZGcD7bMj12xBF6xz2iYy3pP79MtcCwAW6p%2FcP3LQPVpdOtKWMB1Xfrf0Z9g5b2us8A01KvR%2B1QXzjo6azVNWREKUNrn9%2FeFwSLfYmaa0FmBK71d2lH7GoYaMJ46blNJieb3rHKVOjtPvwW8PDaz1I2Ehy6%2Bxk5ODU1Ew25rUyQY6pgGml4x0QA9PplDGqI3h4XwLwb8HiwuBs0cSThxPv%2B1i7KEQSQhEYNextCrV3fiQl%2F%2Fg0fDShLSVSuae554%2FNUt2YHbaB%2B20f6vXGC41JzR%2FkySyfALt8nluZFdkaz%2FApiyFFhX%2Fz4011eZb04pE6SEu%2BZDfYZ%2F2r3NjfxxxyIpttG5SQKvxekhR58%2BWcE9barOOIPkRgxNqvyclJPJxtEOjwKMnBZFJ&X-Amz-Signature=445bd6f8a81c08325e8fa9b8b980f9b699de1babf6302cf6d8b8388c76e08c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

