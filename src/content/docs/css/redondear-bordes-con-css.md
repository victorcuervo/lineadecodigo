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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZQCTB2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvDtjPCc9VFy4sOGsRzz9TGKyqPrwiNoPyBynEjHPIDgIhAOoI6fl01aSMNn0akC8j0H1Il98ZoUcNYpdhWObD8VFuKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa0sFCfVl1ie3Q9WIq3AMLOGNAc1cmEFK5q2mitFhm%2FAmT%2BMDLlw13gMFiyPhowZ%2Bx0Afvz7nywBy%2BESTWzrbvVa2%2BUhc72NTyJpS25AeIpr6Y3oXVlDdGQVs4ere51BB%2FDdtvMMF5Xw5kTpACOb4pC6X8wFHAh3lVgpKAxDFZbAYD45sUeBdPy1GnULF1HJll7WE7gWN6cdmF1ojvSFd5FdSQEaLPl3euCQ6knxxC662Qigtiy7whKgPAP5HB%2BD0vN0xcVwg5LM9zjzXN%2BsNtJJreTws%2F9RanskfCVehHOeMDkUj%2FvnAyPOGARIIIslRL84l%2FjnVxJPPhteFSWefjx1q%2BYxTDS3alGLEer0pfDYhN88Legfe8cGCeI%2FW1FjJkeX%2Brlsl1URcmT92lWaELGrPPLjW58Xxw%2FcfBwDWqPM43T4BTKOMytJxzpMP3x%2B2l%2FlZdr%2FLzHmnbcytD6MWH2I2PmkkeyJDNoZw%2BQpOvYSw4HYFxy0OtqL%2Fnjm2uXssBB7kda8hj7%2F1JjotHQlOIYV8SY6RVf0e2qK2vVp8l7davOhP579KabLBhWVHxQvP%2FjksVEgI8OnJi6fjMv4U2yCSP9N19U4FFZg2XegJJvkmN1EYWsI3M6fJKR7FCIlYrF12FhIws0%2FEFmjDe7dnJBjqkAYl%2Br7uTH9ABOOH2%2BbeWfpImsOtaindPHzNFdKAzwWkDwrMeNv1mJeMB8GBXWrSa6OXUlGp70Auq56RTeHqDyhkC2JMYGN1pcrEEpApgp9r7uoZNvUARRBWyyJFWiRwM4tyCdoJwNHuOGWa5u91zaUZYPtA0jpYb9kD17u1rNAg4B4EZ9y4uT1dX%2FOrHngd4vER3Tmmv%2BVCppMcbBD9vCBXq0sC4&X-Amz-Signature=feccadcccbf9364efc56c69a620f6c460f163a2a1f8614a015abf7f9be21fff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZQCTB2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvDtjPCc9VFy4sOGsRzz9TGKyqPrwiNoPyBynEjHPIDgIhAOoI6fl01aSMNn0akC8j0H1Il98ZoUcNYpdhWObD8VFuKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa0sFCfVl1ie3Q9WIq3AMLOGNAc1cmEFK5q2mitFhm%2FAmT%2BMDLlw13gMFiyPhowZ%2Bx0Afvz7nywBy%2BESTWzrbvVa2%2BUhc72NTyJpS25AeIpr6Y3oXVlDdGQVs4ere51BB%2FDdtvMMF5Xw5kTpACOb4pC6X8wFHAh3lVgpKAxDFZbAYD45sUeBdPy1GnULF1HJll7WE7gWN6cdmF1ojvSFd5FdSQEaLPl3euCQ6knxxC662Qigtiy7whKgPAP5HB%2BD0vN0xcVwg5LM9zjzXN%2BsNtJJreTws%2F9RanskfCVehHOeMDkUj%2FvnAyPOGARIIIslRL84l%2FjnVxJPPhteFSWefjx1q%2BYxTDS3alGLEer0pfDYhN88Legfe8cGCeI%2FW1FjJkeX%2Brlsl1URcmT92lWaELGrPPLjW58Xxw%2FcfBwDWqPM43T4BTKOMytJxzpMP3x%2B2l%2FlZdr%2FLzHmnbcytD6MWH2I2PmkkeyJDNoZw%2BQpOvYSw4HYFxy0OtqL%2Fnjm2uXssBB7kda8hj7%2F1JjotHQlOIYV8SY6RVf0e2qK2vVp8l7davOhP579KabLBhWVHxQvP%2FjksVEgI8OnJi6fjMv4U2yCSP9N19U4FFZg2XegJJvkmN1EYWsI3M6fJKR7FCIlYrF12FhIws0%2FEFmjDe7dnJBjqkAYl%2Br7uTH9ABOOH2%2BbeWfpImsOtaindPHzNFdKAzwWkDwrMeNv1mJeMB8GBXWrSa6OXUlGp70Auq56RTeHqDyhkC2JMYGN1pcrEEpApgp9r7uoZNvUARRBWyyJFWiRwM4tyCdoJwNHuOGWa5u91zaUZYPtA0jpYb9kD17u1rNAg4B4EZ9y4uT1dX%2FOrHngd4vER3Tmmv%2BVCppMcbBD9vCBXq0sC4&X-Amz-Signature=aa0cd7c501ee3a5bf1ea00317e0051b48f525150ef36ed399a20b46ab9787d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
