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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C72Z5E5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBPw9GmM3ejD9AFq0wOCAjgmjV6vZPUblvCm3Zv3KbYAIhAP8hr%2FpODYSwJPdRb1w4Dh9PvBgy%2FMJQyN0grEj%2FYNnHKv8DCG0QABoMNjM3NDIzMTgzODA1Igz3iwpSlb1t41%2BBXy8q3AOKvuy26Tfm1klyALkZRnPef%2B6TtgQ7P%2BP8KuiSl%2F2Sjj5Z0wodTLZxRRp6mv7Mo6mn3dMuWt2iydmFLBCf8x6vsR%2BMxse%2BWLAJBgnjEaAGsRLPuWvD1SzAUIWJpUNg0k%2F3paY1s%2B9qSO6l0Zialt5XgEyTwkttXpOp%2F4vchkaOApyhpWGsJSVOqjo5r%2B7sub0Tx9k%2BaIUXAZUOZeQx12ZQNPC0U7GW7APJufhgtg4zhQMHewuuowfL1WAFLhrh8Su0OB7BgB19TlR2uMOcGsba0%2Bxu7UAf5M6XqY8VhJlysMRtJoXXRrio%2BZenlmz%2BJjDmqvOlYQTdTpQ1AOhcymRjXfrt0Q0ooM%2B0rFhi2zaS%2BoTUp6lBCgPhUZ4fkHX2v60%2Fm%2BLEBY%2BRBLQJRoSNEiIYdHxqFMPdGa3%2FvqEIkYTK%2BXeroft2qjV80MeDN8B%2FT7wt4bbn2b4fGHrJly6wyZTcGsvOWxj15uYsNHERLG7q5mrrhs7Ak4P8HPfXQcYZYbqiwQROeh%2FyxleCIL%2F%2FzZu%2FB2Ltq15K17gSvwVjlCFpAUfNMu3OT%2FLkI%2BLSzttzOlGCH2iK7V31pu9L%2FrFKwi59zBijwJ8V82NLHWneLDv4enf4TYXkreX5fj6V2zDV3s7JBjqkAe0k%2FL%2FOOcpKMDD2HGOHMMNUYWnjIvvhxf%2BliXrCnWEIGrZ60TC4PSEFYI5yKM7lwPqBfuIJUOIcC2RrHzu1m4IF1h2D%2Fvhr93C2UkYjEB4xFm8w99o4RcbPe%2FqaeMxYUfWodQxCM5o08Nv2uY4svl%2FtnFgeLRScXXnpFw0h76N7ugRHM9kPEhcsGF0BEwCUILuD1TtKXhffR2%2BGdB%2BnSUWywHy9&X-Amz-Signature=54d83b358addef3e7ffaf2a9d9f2bd4967d51dafd08a15fc72cdb874a2633720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C72Z5E5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBPw9GmM3ejD9AFq0wOCAjgmjV6vZPUblvCm3Zv3KbYAIhAP8hr%2FpODYSwJPdRb1w4Dh9PvBgy%2FMJQyN0grEj%2FYNnHKv8DCG0QABoMNjM3NDIzMTgzODA1Igz3iwpSlb1t41%2BBXy8q3AOKvuy26Tfm1klyALkZRnPef%2B6TtgQ7P%2BP8KuiSl%2F2Sjj5Z0wodTLZxRRp6mv7Mo6mn3dMuWt2iydmFLBCf8x6vsR%2BMxse%2BWLAJBgnjEaAGsRLPuWvD1SzAUIWJpUNg0k%2F3paY1s%2B9qSO6l0Zialt5XgEyTwkttXpOp%2F4vchkaOApyhpWGsJSVOqjo5r%2B7sub0Tx9k%2BaIUXAZUOZeQx12ZQNPC0U7GW7APJufhgtg4zhQMHewuuowfL1WAFLhrh8Su0OB7BgB19TlR2uMOcGsba0%2Bxu7UAf5M6XqY8VhJlysMRtJoXXRrio%2BZenlmz%2BJjDmqvOlYQTdTpQ1AOhcymRjXfrt0Q0ooM%2B0rFhi2zaS%2BoTUp6lBCgPhUZ4fkHX2v60%2Fm%2BLEBY%2BRBLQJRoSNEiIYdHxqFMPdGa3%2FvqEIkYTK%2BXeroft2qjV80MeDN8B%2FT7wt4bbn2b4fGHrJly6wyZTcGsvOWxj15uYsNHERLG7q5mrrhs7Ak4P8HPfXQcYZYbqiwQROeh%2FyxleCIL%2F%2FzZu%2FB2Ltq15K17gSvwVjlCFpAUfNMu3OT%2FLkI%2BLSzttzOlGCH2iK7V31pu9L%2FrFKwi59zBijwJ8V82NLHWneLDv4enf4TYXkreX5fj6V2zDV3s7JBjqkAe0k%2FL%2FOOcpKMDD2HGOHMMNUYWnjIvvhxf%2BliXrCnWEIGrZ60TC4PSEFYI5yKM7lwPqBfuIJUOIcC2RrHzu1m4IF1h2D%2Fvhr93C2UkYjEB4xFm8w99o4RcbPe%2FqaeMxYUfWodQxCM5o08Nv2uY4svl%2FtnFgeLRScXXnpFw0h76N7ugRHM9kPEhcsGF0BEwCUILuD1TtKXhffR2%2BGdB%2BnSUWywHy9&X-Amz-Signature=e160a8067fc3a3e7996b96cade8eb8bfdef323edc9cff5f6415630d5ef6320df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
