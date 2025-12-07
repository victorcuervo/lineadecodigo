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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSCZVM4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcJ9VPUzoClrW6rHRFDWzxi%2Fb1HIsOp3qOTfstV37rpwIhAKU4sH%2FTRcwPEBYCsi6%2BXcnSKeIHis2DXpGzBOx4ekRMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb9PzxTawI3OOvcRIq3ANpOwsDRFA3imOm45vhoZQAYowLTpKXN%2BlfB3%2F2k00NsU6Y7dNXFSVvNxOTuKgRcaFuA2dS%2BejuRc4xmDe6cmlgAlWpZnSOaqxWN8AuKcUUmvj1epPAIudKjbrBJXEwevgZtSu9niz0%2Bcsfw9sPUczM8gEFuOa3EDqRtylvH8f84hfzeMD8AhliXjmLw1RhJb0%2FuI6Js9%2FGRgxTYYUNE5aVWpJehYaz9exPC0VQtClpL%2BJuv1vuVZYnuLhh7LFM0jzFB%2FyRWL9UqFVyD6b8NIrxWKT%2Bz6uKbiNyU850IkF%2FDctEt8ZfXJx63KWi3SfU9P2JNy%2BdDv0yfbjmjDf8nyi3LJ9nPH1A7RruJ9soeKgJtsYIurn5xU6uRb3BeEoxNO5EwGQVEohJRvNWw9YMETsF77uwK%2FFFpZgPPMBGamTL2OwLoqOKdS9DsSXmIE1Vi5KdRnk5M05xTJI%2FG45u5kisuYcmifpdNkLWk%2FHvjrNiiuzlq1MM2JLMCzi3d5Yo7mGQ8C8H7yMoTJpp4JRFvYmx1Y7CX1IGrl8Ip01u7zkJt8AcD%2BQoF%2F8CqzFnXB8Df8rl3PCW1PiLT49Kbgx0ybAEPrrh%2Bs5qN%2FLdsOGgnd0cADS1hqk6xBtb1%2FP0bjCHqNfJBjqkAeGByBeHEFE%2FrexUEEzDrSp9nI%2F5%2BlaeaFttifsX8eKlvWIHo7dbxMIou6WejJJezu7O%2FxtkLASRsPn1pqU%2F5AXIEfg%2BArMxTa6a0ZZhQghnNF%2B0xXwKDl%2F%2FBXpuVHI5YSDlQ7tMwjl6fxqCW%2FuWxC1cVcHAaiZkXQj3pBss6uskJ7oxETtmGOw8JMOBDpUsLNtQPryhKodaOdxAI3wzMkvsJjTG&X-Amz-Signature=fcabf8a0cb07ff5690cc98afac038fb4a6540d4173159d0b465312f26fc5680f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSCZVM4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcJ9VPUzoClrW6rHRFDWzxi%2Fb1HIsOp3qOTfstV37rpwIhAKU4sH%2FTRcwPEBYCsi6%2BXcnSKeIHis2DXpGzBOx4ekRMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb9PzxTawI3OOvcRIq3ANpOwsDRFA3imOm45vhoZQAYowLTpKXN%2BlfB3%2F2k00NsU6Y7dNXFSVvNxOTuKgRcaFuA2dS%2BejuRc4xmDe6cmlgAlWpZnSOaqxWN8AuKcUUmvj1epPAIudKjbrBJXEwevgZtSu9niz0%2Bcsfw9sPUczM8gEFuOa3EDqRtylvH8f84hfzeMD8AhliXjmLw1RhJb0%2FuI6Js9%2FGRgxTYYUNE5aVWpJehYaz9exPC0VQtClpL%2BJuv1vuVZYnuLhh7LFM0jzFB%2FyRWL9UqFVyD6b8NIrxWKT%2Bz6uKbiNyU850IkF%2FDctEt8ZfXJx63KWi3SfU9P2JNy%2BdDv0yfbjmjDf8nyi3LJ9nPH1A7RruJ9soeKgJtsYIurn5xU6uRb3BeEoxNO5EwGQVEohJRvNWw9YMETsF77uwK%2FFFpZgPPMBGamTL2OwLoqOKdS9DsSXmIE1Vi5KdRnk5M05xTJI%2FG45u5kisuYcmifpdNkLWk%2FHvjrNiiuzlq1MM2JLMCzi3d5Yo7mGQ8C8H7yMoTJpp4JRFvYmx1Y7CX1IGrl8Ip01u7zkJt8AcD%2BQoF%2F8CqzFnXB8Df8rl3PCW1PiLT49Kbgx0ybAEPrrh%2Bs5qN%2FLdsOGgnd0cADS1hqk6xBtb1%2FP0bjCHqNfJBjqkAeGByBeHEFE%2FrexUEEzDrSp9nI%2F5%2BlaeaFttifsX8eKlvWIHo7dbxMIou6WejJJezu7O%2FxtkLASRsPn1pqU%2F5AXIEfg%2BArMxTa6a0ZZhQghnNF%2B0xXwKDl%2F%2FBXpuVHI5YSDlQ7tMwjl6fxqCW%2FuWxC1cVcHAaiZkXQj3pBss6uskJ7oxETtmGOw8JMOBDpUsLNtQPryhKodaOdxAI3wzMkvsJjTG&X-Amz-Signature=175229eda300ff4db230a73ad58b35c9edd48880b08875321e39dc144ce134fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
