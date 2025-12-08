---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOLKJJZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZiASS9kSxbkmTmUd3nnKnIzlwWTt7K29%2BCg4eetXOXAIhAKqsbsw8i%2F0jOZPyPxYBWil7QAKIT7GfrJ%2BNVWL5eOVoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXf0w9nA0%2F2cZEgZMq3AMMFHAOOqmO1Mygas%2BI96p0x%2FrBdWpX3gWx%2F4q82D3bq5qHL336L1LhNNcE8rmzZQY3pkL%2Bi8SFVdiPhRcYPx%2BSZDXZ5dRLcpjwArDgFMv7mhjh1v6Rj4gGnZc7phsgroMu0pgpW%2Bcduqy5ikmp556jFsdyg3P1qlruiWfZDKXzvc66y%2BTrMFIodk0eaye%2F2UtSJf4D5paJCUvi1eco%2FiT9Vepk8Pk5RsBiZtRZzvt5dio3hQ4vGOu6%2FSW7wEaPhQoaMLBHfMK%2FrFRezDkcdATIT%2BDPLoVJKK4boF%2BJHe5KSc6SrId0muuNNkMrLluG00NShbIjwZqX%2FLHRNmItGJgXT%2FlO%2FJloRa%2BF61qqJPWfItEmd0hYt%2FRcD%2BAru%2BUSJCiKRmRHzMUPqGsiYqGXr2ZCCo4uY%2BMTiF4YPZ%2BXf20tjB6TryguaLMewBVnLjl%2FEJJvkKL%2Bx2xNuOSU%2Fq5kKmNJ0Ueo9AwAacYOtl4Ij%2BR17L84qDnC0sHTx%2Fckfkd7oxfzys9fBShhLJxkjgj9ukLxRCFzCQgSdAqP1nQ7dCRvDOulkLcyYqpVj7Hj8taxYs%2F8aKkpVOJR3xsGJko7%2BCmVZs3LFNS72TO0PYy2WmB8XptfAIpJpYBK4Q6cUzD57NnJBjqkAQm50tn1frrPio6dtuc4XyWKbdrUqf6p%2Bsvpg2Lr63cNDd0d%2BrCawHhXht%2FPbwFyoh02NQkEKNnz%2BG6nBX%2Bfi3AG8HhVkIlhRayMb96f7%2BzBWDQXk9isWr5XL7gWq4488NOtdlJHPhfK0cQOnu9XGMBOm2AM0WVedv16PBWn%2BC0VMpgdtw2JvczWecPqbbdC1pO6usCUG6tweryumL9KG76uTDJC&X-Amz-Signature=e6279497c4f76ba9b4dc7a59c3421462485d3f96e7bc32acc389a66c0a03b1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOLKJJZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZiASS9kSxbkmTmUd3nnKnIzlwWTt7K29%2BCg4eetXOXAIhAKqsbsw8i%2F0jOZPyPxYBWil7QAKIT7GfrJ%2BNVWL5eOVoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXf0w9nA0%2F2cZEgZMq3AMMFHAOOqmO1Mygas%2BI96p0x%2FrBdWpX3gWx%2F4q82D3bq5qHL336L1LhNNcE8rmzZQY3pkL%2Bi8SFVdiPhRcYPx%2BSZDXZ5dRLcpjwArDgFMv7mhjh1v6Rj4gGnZc7phsgroMu0pgpW%2Bcduqy5ikmp556jFsdyg3P1qlruiWfZDKXzvc66y%2BTrMFIodk0eaye%2F2UtSJf4D5paJCUvi1eco%2FiT9Vepk8Pk5RsBiZtRZzvt5dio3hQ4vGOu6%2FSW7wEaPhQoaMLBHfMK%2FrFRezDkcdATIT%2BDPLoVJKK4boF%2BJHe5KSc6SrId0muuNNkMrLluG00NShbIjwZqX%2FLHRNmItGJgXT%2FlO%2FJloRa%2BF61qqJPWfItEmd0hYt%2FRcD%2BAru%2BUSJCiKRmRHzMUPqGsiYqGXr2ZCCo4uY%2BMTiF4YPZ%2BXf20tjB6TryguaLMewBVnLjl%2FEJJvkKL%2Bx2xNuOSU%2Fq5kKmNJ0Ueo9AwAacYOtl4Ij%2BR17L84qDnC0sHTx%2Fckfkd7oxfzys9fBShhLJxkjgj9ukLxRCFzCQgSdAqP1nQ7dCRvDOulkLcyYqpVj7Hj8taxYs%2F8aKkpVOJR3xsGJko7%2BCmVZs3LFNS72TO0PYy2WmB8XptfAIpJpYBK4Q6cUzD57NnJBjqkAQm50tn1frrPio6dtuc4XyWKbdrUqf6p%2Bsvpg2Lr63cNDd0d%2BrCawHhXht%2FPbwFyoh02NQkEKNnz%2BG6nBX%2Bfi3AG8HhVkIlhRayMb96f7%2BzBWDQXk9isWr5XL7gWq4488NOtdlJHPhfK0cQOnu9XGMBOm2AM0WVedv16PBWn%2BC0VMpgdtw2JvczWecPqbbdC1pO6usCUG6tweryumL9KG76uTDJC&X-Amz-Signature=8d6e62744d5a82219fdcef069d1fbd90c5dce1d9ddcfa606d4dd99d2b7fc220e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

