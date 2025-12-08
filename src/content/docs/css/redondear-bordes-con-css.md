---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOLKJJZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZiASS9kSxbkmTmUd3nnKnIzlwWTt7K29%2BCg4eetXOXAIhAKqsbsw8i%2F0jOZPyPxYBWil7QAKIT7GfrJ%2BNVWL5eOVoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXf0w9nA0%2F2cZEgZMq3AMMFHAOOqmO1Mygas%2BI96p0x%2FrBdWpX3gWx%2F4q82D3bq5qHL336L1LhNNcE8rmzZQY3pkL%2Bi8SFVdiPhRcYPx%2BSZDXZ5dRLcpjwArDgFMv7mhjh1v6Rj4gGnZc7phsgroMu0pgpW%2Bcduqy5ikmp556jFsdyg3P1qlruiWfZDKXzvc66y%2BTrMFIodk0eaye%2F2UtSJf4D5paJCUvi1eco%2FiT9Vepk8Pk5RsBiZtRZzvt5dio3hQ4vGOu6%2FSW7wEaPhQoaMLBHfMK%2FrFRezDkcdATIT%2BDPLoVJKK4boF%2BJHe5KSc6SrId0muuNNkMrLluG00NShbIjwZqX%2FLHRNmItGJgXT%2FlO%2FJloRa%2BF61qqJPWfItEmd0hYt%2FRcD%2BAru%2BUSJCiKRmRHzMUPqGsiYqGXr2ZCCo4uY%2BMTiF4YPZ%2BXf20tjB6TryguaLMewBVnLjl%2FEJJvkKL%2Bx2xNuOSU%2Fq5kKmNJ0Ueo9AwAacYOtl4Ij%2BR17L84qDnC0sHTx%2Fckfkd7oxfzys9fBShhLJxkjgj9ukLxRCFzCQgSdAqP1nQ7dCRvDOulkLcyYqpVj7Hj8taxYs%2F8aKkpVOJR3xsGJko7%2BCmVZs3LFNS72TO0PYy2WmB8XptfAIpJpYBK4Q6cUzD57NnJBjqkAQm50tn1frrPio6dtuc4XyWKbdrUqf6p%2Bsvpg2Lr63cNDd0d%2BrCawHhXht%2FPbwFyoh02NQkEKNnz%2BG6nBX%2Bfi3AG8HhVkIlhRayMb96f7%2BzBWDQXk9isWr5XL7gWq4488NOtdlJHPhfK0cQOnu9XGMBOm2AM0WVedv16PBWn%2BC0VMpgdtw2JvczWecPqbbdC1pO6usCUG6tweryumL9KG76uTDJC&X-Amz-Signature=9b4a2d85946cdfe05827b547a36bc00ffe5cb7f55690343c5945c1700d93807c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOLKJJZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZiASS9kSxbkmTmUd3nnKnIzlwWTt7K29%2BCg4eetXOXAIhAKqsbsw8i%2F0jOZPyPxYBWil7QAKIT7GfrJ%2BNVWL5eOVoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXf0w9nA0%2F2cZEgZMq3AMMFHAOOqmO1Mygas%2BI96p0x%2FrBdWpX3gWx%2F4q82D3bq5qHL336L1LhNNcE8rmzZQY3pkL%2Bi8SFVdiPhRcYPx%2BSZDXZ5dRLcpjwArDgFMv7mhjh1v6Rj4gGnZc7phsgroMu0pgpW%2Bcduqy5ikmp556jFsdyg3P1qlruiWfZDKXzvc66y%2BTrMFIodk0eaye%2F2UtSJf4D5paJCUvi1eco%2FiT9Vepk8Pk5RsBiZtRZzvt5dio3hQ4vGOu6%2FSW7wEaPhQoaMLBHfMK%2FrFRezDkcdATIT%2BDPLoVJKK4boF%2BJHe5KSc6SrId0muuNNkMrLluG00NShbIjwZqX%2FLHRNmItGJgXT%2FlO%2FJloRa%2BF61qqJPWfItEmd0hYt%2FRcD%2BAru%2BUSJCiKRmRHzMUPqGsiYqGXr2ZCCo4uY%2BMTiF4YPZ%2BXf20tjB6TryguaLMewBVnLjl%2FEJJvkKL%2Bx2xNuOSU%2Fq5kKmNJ0Ueo9AwAacYOtl4Ij%2BR17L84qDnC0sHTx%2Fckfkd7oxfzys9fBShhLJxkjgj9ukLxRCFzCQgSdAqP1nQ7dCRvDOulkLcyYqpVj7Hj8taxYs%2F8aKkpVOJR3xsGJko7%2BCmVZs3LFNS72TO0PYy2WmB8XptfAIpJpYBK4Q6cUzD57NnJBjqkAQm50tn1frrPio6dtuc4XyWKbdrUqf6p%2Bsvpg2Lr63cNDd0d%2BrCawHhXht%2FPbwFyoh02NQkEKNnz%2BG6nBX%2Bfi3AG8HhVkIlhRayMb96f7%2BzBWDQXk9isWr5XL7gWq4488NOtdlJHPhfK0cQOnu9XGMBOm2AM0WVedv16PBWn%2BC0VMpgdtw2JvczWecPqbbdC1pO6usCUG6tweryumL9KG76uTDJC&X-Amz-Signature=522ed7982d7b9ce19c0d0b499cb0038e57ab879d55b129a99aa659a9ac3791cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
