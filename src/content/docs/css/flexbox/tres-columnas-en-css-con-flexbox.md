---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLG4GHB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FzVvIriqXpmVZyPW6hColLahhzove55gBc4Xw8mYsAIgHE0LG7OzlnTtqHu8PdYB8d2S%2BOREVj5HPe%2B51hyE8Jkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAUPsnyiS42ymy9b3CrcA59RFTOpKKpgvitA0ea2f4C9GLJz4uABqIJhBiIcNNqxPiLOnpF7dmYqyUdCZQRDiCkYkukdKByDu1qhvuPHzB%2F%2BfCl1Sh%2FO6LjO5%2FNRJxYSLoCz276grmvUDkYaPbI%2Fe9hO0qEAga5gG%2BwqGHrKZzMCZDT4CrUW3T%2FXM%2F7BxHwf2qkvTjOsF2qSjh3XQEUmKyeTbYCbfMl0%2Byy415muKs%2BlWEDuUZDE95GZ%2FooTcjv5mlB5jRY8m2D0MvOsprJGFRuv1%2B0jJFG%2BCfxtpshwkddEQvBXJKpUunNA7p%2Fv%2BcwSv%2B0yQnrG0AtJbOZ2WBAZ8Lls5lpREMxo8N4i8tw5iniijLSVe9v%2BO6Dxg4xrOrejdZlOulgIVik2uBLQLnjLTCixJoaKM7F8nrPfQWtVVtudXaBhIbvECa5Mcs9%2BjBqvzPB4v8LDNb2XP%2Fu%2FAp%2F1DQP0HJswa0zf%2BOm0FmmDyXyR10sAJCaNupAdqlLg6sKOPku9hsmkETVchAp6n5vIoxk1kdfSMWQHlRH0f7aSEaT7e9rz8dHq4PsoOiswuN%2FusysL76z531w7H19gDGibOkrRRDw3d6KhBxcS8w2fqS6PZ%2Bixwi3jK096I3xZ9r5uqIhp3T4X8fGzEhQoMKeuyckGOqUBnn1GGxBjGGhrcrgVWrNDckKibsMxiU6J6DPTe6tnudEXlrqz0ZVYIylaDX823fkzltN2K4aAwQUTq0UKdncit1Q1fKgxsbNOg7oqGhnqwYGa3h14YZN%2BPabCTu680Bfqgk3ckKwUZRMBYKy3d4hT%2FbgG2ZzJ2jsakiz%2BZdNl41RdtWz2qoI9z4HfV2ysHhkb8hj6yR0mqSwohZK8xuq2YRxZsaq%2B&X-Amz-Signature=7286cedd76d8156ea6c9947c160302fd1b5884c1f69ee378e6e70ed61cb99934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLG4GHB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FzVvIriqXpmVZyPW6hColLahhzove55gBc4Xw8mYsAIgHE0LG7OzlnTtqHu8PdYB8d2S%2BOREVj5HPe%2B51hyE8Jkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAUPsnyiS42ymy9b3CrcA59RFTOpKKpgvitA0ea2f4C9GLJz4uABqIJhBiIcNNqxPiLOnpF7dmYqyUdCZQRDiCkYkukdKByDu1qhvuPHzB%2F%2BfCl1Sh%2FO6LjO5%2FNRJxYSLoCz276grmvUDkYaPbI%2Fe9hO0qEAga5gG%2BwqGHrKZzMCZDT4CrUW3T%2FXM%2F7BxHwf2qkvTjOsF2qSjh3XQEUmKyeTbYCbfMl0%2Byy415muKs%2BlWEDuUZDE95GZ%2FooTcjv5mlB5jRY8m2D0MvOsprJGFRuv1%2B0jJFG%2BCfxtpshwkddEQvBXJKpUunNA7p%2Fv%2BcwSv%2B0yQnrG0AtJbOZ2WBAZ8Lls5lpREMxo8N4i8tw5iniijLSVe9v%2BO6Dxg4xrOrejdZlOulgIVik2uBLQLnjLTCixJoaKM7F8nrPfQWtVVtudXaBhIbvECa5Mcs9%2BjBqvzPB4v8LDNb2XP%2Fu%2FAp%2F1DQP0HJswa0zf%2BOm0FmmDyXyR10sAJCaNupAdqlLg6sKOPku9hsmkETVchAp6n5vIoxk1kdfSMWQHlRH0f7aSEaT7e9rz8dHq4PsoOiswuN%2FusysL76z531w7H19gDGibOkrRRDw3d6KhBxcS8w2fqS6PZ%2Bixwi3jK096I3xZ9r5uqIhp3T4X8fGzEhQoMKeuyckGOqUBnn1GGxBjGGhrcrgVWrNDckKibsMxiU6J6DPTe6tnudEXlrqz0ZVYIylaDX823fkzltN2K4aAwQUTq0UKdncit1Q1fKgxsbNOg7oqGhnqwYGa3h14YZN%2BPabCTu680Bfqgk3ckKwUZRMBYKy3d4hT%2FbgG2ZzJ2jsakiz%2BZdNl41RdtWz2qoI9z4HfV2ysHhkb8hj6yR0mqSwohZK8xuq2YRxZsaq%2B&X-Amz-Signature=48489397dca0b604c28bccc17abed0376f3a308eea12bfdd7502e25747098ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

