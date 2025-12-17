---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJR42FF2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIScftXvaNhpvkkOykbZEvDQbNEFc1pcPRhxrs71ha2AIhAIwohBX4AARIeGJ5Ey11MfZhBQ8oJibyQ5oZuAz370xWKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOSs6DNQ1CHXTqp8gq3AP6vpYNotZt9YdaKWSJfF0OcOaGHmbrKm1Xhk6uxYCoLcoBtaBo6Z6FRokLoCLRJzH%2F2zD2dAila0otla7GvkIJntScgh2cc3lVqGcNI7ALO6uTxCNLtLqg7ZBV0XQEj%2BJR%2BmTj8E0ZP%2FXdpRB9iPtX7vmDgmulZIqgDdAd0TTRnjEvpG9xBSjYvlvD4kmp7xQwoEshHuAxtn2Bw%2FRU0jOGwfB%2BinM8RZXkSvTU7QbASXQnprzNNOoKl8ESWjbMXFi5xbOlsPmEWRxHgTnVe61%2B0pGQ5CaLccHIHaB91O%2B0NAmpOLSQyk8JUKlCz%2FS6f1AEgVOdAx1gJp47QcrVBp8qXHZWyarnHj8wSHyphdhOLxBe%2BjkWQP%2F0oIjYhsaWG0Aa9%2FacpFcMvqI%2FE4o2HgbmhleCNc2ORarhA1Tt38p0X0JW5nGbDryTxTzJ3eUJuyZXO4KAAGk5hU%2BokXuHf6IYlHYnJs0G2e40dtOiKIC7Sed%2Bi%2BoXJcy3WTZKtHdO3dDsGjObH4b7WajP69JVmnvvToufejm0jkpAZHKXNTUWZUGq2IS0y1ufNvjX%2B5kPln7VfRfU7MovuTgBjtUhRL5SG637zNGtY2c3suVJSSpRZD6cd4HN3kN2uR8g2zCmn4vKBjqkAd06OU%2Fz39pADcF8v1G37yAE94XIFULuDlUrGmVns%2Bwzm2VyM1I5vPbNQCspCV%2B8AN3xo06gjo7voGKui%2BmIEwcJY8lp3rbxgmD1%2F%2BVtPnVSbKzOc42HyJKCl4cLbAoLqW85JmCiV6lQ5hpbc8CenaHArUKGopIOstTwyUjYFeA1DiRR%2F08H7ewV6faDZmGs55WXQjFypT%2BmXq425tnSEiggo6%2FO&X-Amz-Signature=f69b385242ccb7877e7ae2d0678bad56d51eeb2705f8e1df472b57b7e92993e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJR42FF2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIScftXvaNhpvkkOykbZEvDQbNEFc1pcPRhxrs71ha2AIhAIwohBX4AARIeGJ5Ey11MfZhBQ8oJibyQ5oZuAz370xWKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOSs6DNQ1CHXTqp8gq3AP6vpYNotZt9YdaKWSJfF0OcOaGHmbrKm1Xhk6uxYCoLcoBtaBo6Z6FRokLoCLRJzH%2F2zD2dAila0otla7GvkIJntScgh2cc3lVqGcNI7ALO6uTxCNLtLqg7ZBV0XQEj%2BJR%2BmTj8E0ZP%2FXdpRB9iPtX7vmDgmulZIqgDdAd0TTRnjEvpG9xBSjYvlvD4kmp7xQwoEshHuAxtn2Bw%2FRU0jOGwfB%2BinM8RZXkSvTU7QbASXQnprzNNOoKl8ESWjbMXFi5xbOlsPmEWRxHgTnVe61%2B0pGQ5CaLccHIHaB91O%2B0NAmpOLSQyk8JUKlCz%2FS6f1AEgVOdAx1gJp47QcrVBp8qXHZWyarnHj8wSHyphdhOLxBe%2BjkWQP%2F0oIjYhsaWG0Aa9%2FacpFcMvqI%2FE4o2HgbmhleCNc2ORarhA1Tt38p0X0JW5nGbDryTxTzJ3eUJuyZXO4KAAGk5hU%2BokXuHf6IYlHYnJs0G2e40dtOiKIC7Sed%2Bi%2BoXJcy3WTZKtHdO3dDsGjObH4b7WajP69JVmnvvToufejm0jkpAZHKXNTUWZUGq2IS0y1ufNvjX%2B5kPln7VfRfU7MovuTgBjtUhRL5SG637zNGtY2c3suVJSSpRZD6cd4HN3kN2uR8g2zCmn4vKBjqkAd06OU%2Fz39pADcF8v1G37yAE94XIFULuDlUrGmVns%2Bwzm2VyM1I5vPbNQCspCV%2B8AN3xo06gjo7voGKui%2BmIEwcJY8lp3rbxgmD1%2F%2BVtPnVSbKzOc42HyJKCl4cLbAoLqW85JmCiV6lQ5hpbc8CenaHArUKGopIOstTwyUjYFeA1DiRR%2F08H7ewV6faDZmGs55WXQjFypT%2BmXq425tnSEiggo6%2FO&X-Amz-Signature=d8ef57df0a50caf46a5f5ce2033c888ad673bb438b777b450584d78a5ccec9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
