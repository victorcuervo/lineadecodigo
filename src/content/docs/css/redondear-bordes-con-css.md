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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JDE42CC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIF9ijG6hL7bT3N7hwOwvsoguO5p7ah6I5AWHWjyTHWAiBaitHeBeqpomSh2tgEivmVUKSDb5PtwUcZBdFh5eoK1Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM1zF02vIoz7t2NwqoKtwDxQV5zgPdkJ%2B%2FFRTMrW9yil%2BQihvi8VdUPbsQSQFU6Ez4w4a53gsPv0ctazPaV%2Fl0bIoBgE5FmJv3p3mmeqPP%2B1ESmq5X5bLWwNnujIvVSoa36TU%2FLh%2F36fz%2BWMywWqdeTa2Q6Dl5p4fGw6Onq8i%2F61NTazxjHxXL7zFIDQ2wCCqwlzOyQKVVVGupIX11YdZ1t0LnrBQUS7SbetmI4k50Zga25XjsjkLt3cQa9Mf80AbF%2FoNjcjORpngNIueLZqonmg2hMfBB3tsYu5T6pjMpVDDznoWnVQ4bf17GnCk1io5T3NW%2BaqMiqr3LLcAiIPieK45pDROdRw3DSaltk24F%2F6YVPuUH1qbl6NjEtI2fq0Zhgpb3vqdtryFezYX%2FiyrhLmJhnjZf%2FEbVeY4zj6MQuZAWfboxYO0gu%2B41ASwBwFzHdJrOB8uLV6wcvIMxRqx2AS%2BlfdbPeyDJkMRTCQBz9xjGIHXYTQ5YuGm09a%2F6avV28nZVSXZRjHbVTIkCCqX6365t35m4eciAKRUW8iNvVqhQEUay%2FbBnc5CMgdexkB9WQiRdqL2ihjN5yfPa6gPAYFSynpP2VYdcUy3htG%2B1G9iDzi5P80Kh86YpZ5vYqEJ5PmH1MTLfjgy0xdEwxKbJyQY6pgFyYEwuwLB2MPPy1hSFut4V5Lbok6P7ZSL9xLMCY569NB14fqD1q9BmsvnPBvdbmqLqB89qWGYkPfrH8pgz2R3CfwcqxwNFHe8YNaN1eTitmW1s25j%2F%2FMY49J0oc9dGtEqRjXWHpbGlSwZDndkLBdL25lO%2FZ28dcAl9sZIy0lI0nJpoBiU67x43OqcRqc%2B5RQUPmMNcDYLd3fJ4vba6X3vjWd3dRkai&X-Amz-Signature=542785b973b06c97403a1b8f266ac9df04e445f6cd85618c6a136ac93a5e88f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JDE42CC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIF9ijG6hL7bT3N7hwOwvsoguO5p7ah6I5AWHWjyTHWAiBaitHeBeqpomSh2tgEivmVUKSDb5PtwUcZBdFh5eoK1Cr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM1zF02vIoz7t2NwqoKtwDxQV5zgPdkJ%2B%2FFRTMrW9yil%2BQihvi8VdUPbsQSQFU6Ez4w4a53gsPv0ctazPaV%2Fl0bIoBgE5FmJv3p3mmeqPP%2B1ESmq5X5bLWwNnujIvVSoa36TU%2FLh%2F36fz%2BWMywWqdeTa2Q6Dl5p4fGw6Onq8i%2F61NTazxjHxXL7zFIDQ2wCCqwlzOyQKVVVGupIX11YdZ1t0LnrBQUS7SbetmI4k50Zga25XjsjkLt3cQa9Mf80AbF%2FoNjcjORpngNIueLZqonmg2hMfBB3tsYu5T6pjMpVDDznoWnVQ4bf17GnCk1io5T3NW%2BaqMiqr3LLcAiIPieK45pDROdRw3DSaltk24F%2F6YVPuUH1qbl6NjEtI2fq0Zhgpb3vqdtryFezYX%2FiyrhLmJhnjZf%2FEbVeY4zj6MQuZAWfboxYO0gu%2B41ASwBwFzHdJrOB8uLV6wcvIMxRqx2AS%2BlfdbPeyDJkMRTCQBz9xjGIHXYTQ5YuGm09a%2F6avV28nZVSXZRjHbVTIkCCqX6365t35m4eciAKRUW8iNvVqhQEUay%2FbBnc5CMgdexkB9WQiRdqL2ihjN5yfPa6gPAYFSynpP2VYdcUy3htG%2B1G9iDzi5P80Kh86YpZ5vYqEJ5PmH1MTLfjgy0xdEwxKbJyQY6pgFyYEwuwLB2MPPy1hSFut4V5Lbok6P7ZSL9xLMCY569NB14fqD1q9BmsvnPBvdbmqLqB89qWGYkPfrH8pgz2R3CfwcqxwNFHe8YNaN1eTitmW1s25j%2F%2FMY49J0oc9dGtEqRjXWHpbGlSwZDndkLBdL25lO%2FZ28dcAl9sZIy0lI0nJpoBiU67x43OqcRqc%2B5RQUPmMNcDYLd3fJ4vba6X3vjWd3dRkai&X-Amz-Signature=85907e361f24f2e44c1a2b5fbe1ce38a4ab49e8e28d5c4abc59354b8ea1ab220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
