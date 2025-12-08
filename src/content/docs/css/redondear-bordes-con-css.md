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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL2IZEWH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjpdAtzEbEy0ejRMlLY%2BxJoGKYS%2FcsVboEvsYeeK9vuQIgOxJeNiX8%2BqYdZ9%2BG068fVfpMIbGV0YHr%2B3zDlIXqwa0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfHKDZMirnmVLYjxCrcA6dAZS4KqOko7eZNMZ14zgU9ESpBv0NP86ARU9pRWAvq9UIdGTY66W8eedkBKwJkkQcx%2BIW8gy1IfTFWiQCa4m3HkcKE2qlifB%2BL7qgX676Bccw9nfQCBO629Ad%2FOPkeZWq%2BusPqD7Hz0Uh7PXncrSHWPz5Oh66AgSENx3Z32kMU0oMrMGraq18pHY%2BuY32%2FQ9BSY%2FGhw%2B8mYFCkfapy2JPreJVw1IHcvcfvnK1cRfJC9EDHkfLZ7allGXmQP3RmLlK3%2BMSYTf4vJkDZTUXYS5hL07R6oEqG4chily3qMhZJkHTvba12HMFQjw1aJ4U7ma6VPHChh9PoXvhZrqM9P%2FYhhoZxooAHYKC2iydBmkn6ffwgt1QRiIkbb8bTTRySquj2e%2FFfIwt4cpn11%2BVvwsnE8nMDtRe78BMiQmjbuc6sWEbKGv%2Ba%2BOYBScugEv65FqZ237w8XnBl0%2Fvy%2FreGpk18g%2BoZzGmw0e17SjqYwNeao%2FP547HDzhHd2KMdUGMezEOr1Z0mFgOzhBjhbnD3331jot6H%2BsguhxlfRIMQ8aiS8J5nWxCE3ATj%2BBd%2BQF6vmQlwOinSffeYJZYwrApSaHIh61qoMMscVqyy5dSdp5pXL5s4zVlGEAhLQVyoMKrt2ckGOqUBdkR4CztcpU2RJBlVoMlMaSOhByO95v5nSHqdX0%2FduqA7vMwqga9lc61mLKhLfTrlW1QI%2F24FvQirVKFnh0DIaMEykR3v93QA8TGDDEu6JnD1YMabYfrOjy2Fg0c3AuXuvK8ulYydkK7HCvpIyRkXZE5Lc9pe9AdSqUmibT6zm92BkLLs%2BKnH3kBkWwzB4NSX95WZLjKnd%2B9Vda%2ByPJNVkRCeMBkQ&X-Amz-Signature=669143cca90fd97ba6beb34750794f8c32b85a61e1b4580ba190b821afe3c089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL2IZEWH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjpdAtzEbEy0ejRMlLY%2BxJoGKYS%2FcsVboEvsYeeK9vuQIgOxJeNiX8%2BqYdZ9%2BG068fVfpMIbGV0YHr%2B3zDlIXqwa0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfHKDZMirnmVLYjxCrcA6dAZS4KqOko7eZNMZ14zgU9ESpBv0NP86ARU9pRWAvq9UIdGTY66W8eedkBKwJkkQcx%2BIW8gy1IfTFWiQCa4m3HkcKE2qlifB%2BL7qgX676Bccw9nfQCBO629Ad%2FOPkeZWq%2BusPqD7Hz0Uh7PXncrSHWPz5Oh66AgSENx3Z32kMU0oMrMGraq18pHY%2BuY32%2FQ9BSY%2FGhw%2B8mYFCkfapy2JPreJVw1IHcvcfvnK1cRfJC9EDHkfLZ7allGXmQP3RmLlK3%2BMSYTf4vJkDZTUXYS5hL07R6oEqG4chily3qMhZJkHTvba12HMFQjw1aJ4U7ma6VPHChh9PoXvhZrqM9P%2FYhhoZxooAHYKC2iydBmkn6ffwgt1QRiIkbb8bTTRySquj2e%2FFfIwt4cpn11%2BVvwsnE8nMDtRe78BMiQmjbuc6sWEbKGv%2Ba%2BOYBScugEv65FqZ237w8XnBl0%2Fvy%2FreGpk18g%2BoZzGmw0e17SjqYwNeao%2FP547HDzhHd2KMdUGMezEOr1Z0mFgOzhBjhbnD3331jot6H%2BsguhxlfRIMQ8aiS8J5nWxCE3ATj%2BBd%2BQF6vmQlwOinSffeYJZYwrApSaHIh61qoMMscVqyy5dSdp5pXL5s4zVlGEAhLQVyoMKrt2ckGOqUBdkR4CztcpU2RJBlVoMlMaSOhByO95v5nSHqdX0%2FduqA7vMwqga9lc61mLKhLfTrlW1QI%2F24FvQirVKFnh0DIaMEykR3v93QA8TGDDEu6JnD1YMabYfrOjy2Fg0c3AuXuvK8ulYydkK7HCvpIyRkXZE5Lc9pe9AdSqUmibT6zm92BkLLs%2BKnH3kBkWwzB4NSX95WZLjKnd%2B9Vda%2ByPJNVkRCeMBkQ&X-Amz-Signature=10fc1ad3cfa9550084f7d5a4d616bab9727a563f0e93bcc2ac2c9a2293592428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
