---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YMT4QRF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCtmcl4zQyxYhaBoVCe5DJr0RtoVmAh3XUGHiD85N%2BsnAIhAPOx5%2F74kRirqCm64gTk%2Be6SbdAZMpUfblGHALGJ%2FhhsKv8DCDgQABoMNjM3NDIzMTgzODA1Igz%2FSrJNmLGJvKRmfQoq3AMfBmEkQJjKfWushYbRb2H8eXGQ5%2FR9haJRJQ7OxLmYUhnsOgrSGHh4E%2FFDtPCNHHQa0v82A4XuW9N0Rce8LjNKfSrdiSxUXZqJQtzs40PSMFCk7YFZVLQz3jJ6EFtCJx2Ksl%2BLBjEwDK%2FenIK1%2BTkTsfO7t4MQVDoT1HKJDAZIgj77MvBCZRX4LXzlVrCATEySUo%2B9eupBHJxaNFZ%2Buj0Bpli1XH7xnzhibLegzuJafJABu63g479Ta2cequYdTRLWpPzfjH63ERsWKLSZ%2B43SuNiP7%2BQgxmSmAuLKJjjQ8EPErHm8OSJMcSk5KAatkdMBuQnB6t6OhsSfewa0WcjxcqI3eCF2bxfenpX7HAp8cSALnm8FLbcmWiNWPRvWiePSjR%2FMjR2jnhPZne%2BRjfsjaFYHnBG%2F7wJzfqyaBWpjX22oHtYspHwumHl3F2UmihsNYqMiaVq2cnAFeUAPE9yGjMGlxYk5bLR70Unjw9gN8hVmH1oKldib7TtAxouSF6MjJAlfWEB8TXSaHjA2BTwWPQqBp4ZJ04vIU3AGvOQsx2bFMzD0UsWZdmy%2B10uLF6I2sUjzzpZG%2FnvhsSKb1rdVMnBp3Q3%2F5tckcT3BQR7y7mrZsBo1GyES7bMrhjDX98LJBjqkAQh%2Fc0%2FsEkOI3%2BJMY99cvXLYHAZhj%2BADHqkI5V0K5nRyeEDCCigelkyKTWPUyFyQzbUvG0KVO%2Fg1vujh8MV4HWGb7MJerXt3zklfjVMjm%2BpzPK0IfMySP%2BG5C7qaucNB7DJ15ZREBrf6K%2FyY15HKgLjxJk2%2FApj%2Bd7zFF%2FsMbJkAh5HjahQaJEFdMwTPVgboYGogAct1GEIG4TzNdIIV%2BHMs0CrO&X-Amz-Signature=0f7bf2f13d0d7e7c57561f12304d7b1b6bf7a9f08699b74dacd3ba33b2c900d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YMT4QRF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCtmcl4zQyxYhaBoVCe5DJr0RtoVmAh3XUGHiD85N%2BsnAIhAPOx5%2F74kRirqCm64gTk%2Be6SbdAZMpUfblGHALGJ%2FhhsKv8DCDgQABoMNjM3NDIzMTgzODA1Igz%2FSrJNmLGJvKRmfQoq3AMfBmEkQJjKfWushYbRb2H8eXGQ5%2FR9haJRJQ7OxLmYUhnsOgrSGHh4E%2FFDtPCNHHQa0v82A4XuW9N0Rce8LjNKfSrdiSxUXZqJQtzs40PSMFCk7YFZVLQz3jJ6EFtCJx2Ksl%2BLBjEwDK%2FenIK1%2BTkTsfO7t4MQVDoT1HKJDAZIgj77MvBCZRX4LXzlVrCATEySUo%2B9eupBHJxaNFZ%2Buj0Bpli1XH7xnzhibLegzuJafJABu63g479Ta2cequYdTRLWpPzfjH63ERsWKLSZ%2B43SuNiP7%2BQgxmSmAuLKJjjQ8EPErHm8OSJMcSk5KAatkdMBuQnB6t6OhsSfewa0WcjxcqI3eCF2bxfenpX7HAp8cSALnm8FLbcmWiNWPRvWiePSjR%2FMjR2jnhPZne%2BRjfsjaFYHnBG%2F7wJzfqyaBWpjX22oHtYspHwumHl3F2UmihsNYqMiaVq2cnAFeUAPE9yGjMGlxYk5bLR70Unjw9gN8hVmH1oKldib7TtAxouSF6MjJAlfWEB8TXSaHjA2BTwWPQqBp4ZJ04vIU3AGvOQsx2bFMzD0UsWZdmy%2B10uLF6I2sUjzzpZG%2FnvhsSKb1rdVMnBp3Q3%2F5tckcT3BQR7y7mrZsBo1GyES7bMrhjDX98LJBjqkAQh%2Fc0%2FsEkOI3%2BJMY99cvXLYHAZhj%2BADHqkI5V0K5nRyeEDCCigelkyKTWPUyFyQzbUvG0KVO%2Fg1vujh8MV4HWGb7MJerXt3zklfjVMjm%2BpzPK0IfMySP%2BG5C7qaucNB7DJ15ZREBrf6K%2FyY15HKgLjxJk2%2FApj%2Bd7zFF%2FsMbJkAh5HjahQaJEFdMwTPVgboYGogAct1GEIG4TzNdIIV%2BHMs0CrO&X-Amz-Signature=210a6d0109efca6c2dd02245b9344653798449e65f1b68ad60676a16d72a08ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
