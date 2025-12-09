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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3DCKFM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7PiFQkeT4YY6uepsXL1tAunZnRnLD4iOiXhuMViXvjgIhANULa8bpvw%2F7r%2BvyXxr8VoPe4KjwS4GFdRRz8oic%2BO%2FfKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbqTJLrdFU7wU4%2BJwq3AMJWBWCzzRyKPXMiCq3H3Kzdf4bRqGqcI6gD4kM7NPApbHTS3RHKa6tUpeiw65ctg26o5520RvI4SWs6lisaYruuOKIMt8413qi9RtwrKjWjq4nDHmHGdKwPFIvdtl%2BVSjikQNrQ3b95SYPIzqxFaP1d6a4dtcwUQ2k4Snaz5RV6OxxThUfRxGZUIaPSHhnfnNuQipnaLvvN%2Bf9RyA0PVnrMT%2Fe2iFekcK99KZbu%2FYPNGrLEhbmirYjKd1yRCiFVr6vCj07ME%2Bj779dnOHzwkYI7Wxcp%2BmwDLpNUPvFsh2BGso46iunik4AB3PprBmKyhv64%2B7m8BaMMohcbcJTWwIgKii0dWJgra9JirtliGMUvPhUsI5%2BfYXp2YrOX0F5B9bXGTEnxyf6vw1k7rKvYLpe%2F4qI22VdpeXk3r5b%2Bhgq%2FrKFruY1DXvFMcPBf%2F30UImfBWmHYv%2FAL3hhuF3LHKJ3mUrm92B9%2FAURdt9ITIiEnxO88iFKmVY8LEsewm6Ssd1IOamj0u3uWcbSR8dtohLhOhZ0KebV1NMMLaO3tfmupq7uJE9GVDvuno5c6ge2hpmj7dBZdB0TR3LY%2BkkxptFYDgbzqAsc%2BG%2FQKDE5FcVdsDLss02iLiv1AgzoIzD06d3JBjqkASTDAVtT7X3nhzZ484VVjMZ4y5rVkqWoO4hS4k51CMsh7%2F%2FRP0d2jzKK78taBotNuf7DIKfAmoQMTKBhTl4AESqKHJusOQQjTsX9vEuZs4mklKfz3tOp91F1h4OajGwpag%2BxQE5Q9VA%2BB9AoICre9F6O3ldDgUv89Kg12B2zQv4XDaLAIfqHB%2F7I7k7HZgVj4ovcixbbOeSuODh%2BMHSSw5Kz4mzt&X-Amz-Signature=1cacf2cbb3100fb8e11e29f30aa841612fe996edee73dba4f5f3ed580460a3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3DCKFM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7PiFQkeT4YY6uepsXL1tAunZnRnLD4iOiXhuMViXvjgIhANULa8bpvw%2F7r%2BvyXxr8VoPe4KjwS4GFdRRz8oic%2BO%2FfKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbqTJLrdFU7wU4%2BJwq3AMJWBWCzzRyKPXMiCq3H3Kzdf4bRqGqcI6gD4kM7NPApbHTS3RHKa6tUpeiw65ctg26o5520RvI4SWs6lisaYruuOKIMt8413qi9RtwrKjWjq4nDHmHGdKwPFIvdtl%2BVSjikQNrQ3b95SYPIzqxFaP1d6a4dtcwUQ2k4Snaz5RV6OxxThUfRxGZUIaPSHhnfnNuQipnaLvvN%2Bf9RyA0PVnrMT%2Fe2iFekcK99KZbu%2FYPNGrLEhbmirYjKd1yRCiFVr6vCj07ME%2Bj779dnOHzwkYI7Wxcp%2BmwDLpNUPvFsh2BGso46iunik4AB3PprBmKyhv64%2B7m8BaMMohcbcJTWwIgKii0dWJgra9JirtliGMUvPhUsI5%2BfYXp2YrOX0F5B9bXGTEnxyf6vw1k7rKvYLpe%2F4qI22VdpeXk3r5b%2Bhgq%2FrKFruY1DXvFMcPBf%2F30UImfBWmHYv%2FAL3hhuF3LHKJ3mUrm92B9%2FAURdt9ITIiEnxO88iFKmVY8LEsewm6Ssd1IOamj0u3uWcbSR8dtohLhOhZ0KebV1NMMLaO3tfmupq7uJE9GVDvuno5c6ge2hpmj7dBZdB0TR3LY%2BkkxptFYDgbzqAsc%2BG%2FQKDE5FcVdsDLss02iLiv1AgzoIzD06d3JBjqkASTDAVtT7X3nhzZ484VVjMZ4y5rVkqWoO4hS4k51CMsh7%2F%2FRP0d2jzKK78taBotNuf7DIKfAmoQMTKBhTl4AESqKHJusOQQjTsX9vEuZs4mklKfz3tOp91F1h4OajGwpag%2BxQE5Q9VA%2BB9AoICre9F6O3ldDgUv89Kg12B2zQv4XDaLAIfqHB%2F7I7k7HZgVj4ovcixbbOeSuODh%2BMHSSw5Kz4mzt&X-Amz-Signature=25db75c4508be759fdb4097b76ce5a2c0c8a35ed62cc2c9900362ec4e91e07f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
