---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTW4BUH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD1iQs%2FcBjupy7IhFlDuOTEswmZioqxue7a68mdt0SIeQIhAKsqWw4%2BZ4A1dIPy0c%2BWueMDBfFg49AnlZ98HINvrXzuKv8DCDcQABoMNjM3NDIzMTgzODA1Igx0HcJY46BuQVJaeycq3AMGvBbCmsKWOE5VwgmeiA2qgy6ZWyOIO42TBmvWQrhc%2BNwRs3t2m1iYOdDp8eYT2mh6VncpzygxVv1wIrhHvBgvdHYnp7M0SyN6YwoAOzV7ED4V4A9Rq%2Fvm3Lehi%2Bza84A%2F3jIOA6oskbUUh1p39%2BrTIl06eXIAvEWnoLTrVS4Vczu2b4EHXHOamYfslGmJHa39UOxAimMBNoH4TBw7UF0V75m6AhoF%2Bm1n711avt1B2FPzacrT6BgdRFpGdMJyaICsHdrnWTg1Ue9xnIUE3koUVO3M98E%2BI5W0Db1CgQ%2FS9DDc%2FNaz5cXr8ze9H0ZDt7aFCXYQI%2FG0Z%2BDKXKXd02BwzDUhgVklGrbT6kukwgmY%2F5ETXmkH9aZ1%2FFxU9Jg9rJvpN6AuaFQW2OSmoVjfKxBiztoBzqCHEQDsGsSfiYUIQcWNTtpxTcQXid4LXZztk4NNFFsDsZ54nVdW4KyT5sPdwMIbb0CBmPqXdYLWPki3SLlHzTwOOPlqqzx%2BU7%2BJaY%2FOHU0Fij6zqNySIDJAxLTYuplTiUEnZ9%2FCa%2B27wTrmLmBI1CruDSAviZCPViBcKf2zHeaKB0qngqSPWueaNG74r6ZUh%2FVkciiDa9QeXVuBOLMwR8i%2FN5ThD1Z0HjDh3cLJBjqkAXDRpM43F%2BzD5v%2BH%2BGV11g%2FXC%2BP%2FIZ5lNrMR9B5sHqtXglSmN5tp0YNR%2FziXYfwtWPF1frgcPu6ANwEJ9E%2F2h%2BAy89fIfMFFZgt10Flc7yJGpNnWQ3mhVzjIOkse%2FOAZSTKmot9prpooDlM%2BzO%2FbwrB9%2Bj1E9q2n4DpP9wtSt1Q4qEU1yeBG35jwKwrCqpZ8HVcxqtYJELVHJpPCSvSSN%2Bb8rDqT&X-Amz-Signature=0b3fad4462fd1afb0f18261ddf1fb0e5e7411352f741b6e1db92c5a25b182023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTW4BUH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD1iQs%2FcBjupy7IhFlDuOTEswmZioqxue7a68mdt0SIeQIhAKsqWw4%2BZ4A1dIPy0c%2BWueMDBfFg49AnlZ98HINvrXzuKv8DCDcQABoMNjM3NDIzMTgzODA1Igx0HcJY46BuQVJaeycq3AMGvBbCmsKWOE5VwgmeiA2qgy6ZWyOIO42TBmvWQrhc%2BNwRs3t2m1iYOdDp8eYT2mh6VncpzygxVv1wIrhHvBgvdHYnp7M0SyN6YwoAOzV7ED4V4A9Rq%2Fvm3Lehi%2Bza84A%2F3jIOA6oskbUUh1p39%2BrTIl06eXIAvEWnoLTrVS4Vczu2b4EHXHOamYfslGmJHa39UOxAimMBNoH4TBw7UF0V75m6AhoF%2Bm1n711avt1B2FPzacrT6BgdRFpGdMJyaICsHdrnWTg1Ue9xnIUE3koUVO3M98E%2BI5W0Db1CgQ%2FS9DDc%2FNaz5cXr8ze9H0ZDt7aFCXYQI%2FG0Z%2BDKXKXd02BwzDUhgVklGrbT6kukwgmY%2F5ETXmkH9aZ1%2FFxU9Jg9rJvpN6AuaFQW2OSmoVjfKxBiztoBzqCHEQDsGsSfiYUIQcWNTtpxTcQXid4LXZztk4NNFFsDsZ54nVdW4KyT5sPdwMIbb0CBmPqXdYLWPki3SLlHzTwOOPlqqzx%2BU7%2BJaY%2FOHU0Fij6zqNySIDJAxLTYuplTiUEnZ9%2FCa%2B27wTrmLmBI1CruDSAviZCPViBcKf2zHeaKB0qngqSPWueaNG74r6ZUh%2FVkciiDa9QeXVuBOLMwR8i%2FN5ThD1Z0HjDh3cLJBjqkAXDRpM43F%2BzD5v%2BH%2BGV11g%2FXC%2BP%2FIZ5lNrMR9B5sHqtXglSmN5tp0YNR%2FziXYfwtWPF1frgcPu6ANwEJ9E%2F2h%2BAy89fIfMFFZgt10Flc7yJGpNnWQ3mhVzjIOkse%2FOAZSTKmot9prpooDlM%2BzO%2FbwrB9%2Bj1E9q2n4DpP9wtSt1Q4qEU1yeBG35jwKwrCqpZ8HVcxqtYJELVHJpPCSvSSN%2Bb8rDqT&X-Amz-Signature=c427bde662bc22fcee12567fb6d74f3d5f02d233bfe98bd8cd2c092c7360a601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
