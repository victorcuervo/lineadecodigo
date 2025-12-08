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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU27KTJ7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BKgOhLJLUewg72qP%2Bi1k1BBjoC5WmUMowtSgSwSbh2gIhAK4JMMEQkqXYL7viY5AvTZfqBanRaIai7l%2FxlNZzkiFcKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFCusY2nRn8bcohwoq3AMHsC67wgdw5DhksMoXddlxI4B4sfRUnL8i8Zjt3kzSJPqAqYiA5LyEQNZJFlHUBmcU5YWMpR6fntz7SPcZweghPltetlGZAG9QWc07BsXAdX7LeppVZS6%2FE%2BhKMWjEPegTEfD%2FoueORWo1U9%2B3R0mQnOygndCwJnSSFBUuLt0HKOLqfgsaw6hFOuk2odB3BTtE3XK5h10qEl2ZY46hm68FCdSt5Q23%2FGSA4YetPHlkerG1pyzFle8P6ZnXB068tA96zNQNUCxd4szbn%2BIjZih0p2GQeEDkOGVQOLtzU9DQPHAkD2Re8eG7csmYSv10Yoz7lJyl4vzwMHvgYG8%2B%2Flnt6qG1X%2B%2BSNL%2BMmcmVkNkRBBeXYyTzIcL7ELnGwZ0rZfpnyZKyRAny4Uh4R9PfdjgzvXkQWNCo682dus%2BYtLFHkfCf8tmmEIVgniD42TrMIo8cR%2BONKCPJVjQ1Xyy0WVgmeuIDzgtc4dUrlruNk88I%2BMb3Fmpwx%2B19O%2Bbnxm0BVSICHmXwS9YRx3obT64Q17S1aQnQipagcfamzGKR0OMM7urFxQiXivMoC4yimvFtOUypi3%2BXpZ7YMWNzzHlCRm0gWOCbE5hn9QFbU4Y%2F59qj82jDCrJC14NcbM%2FgdTCOh9zJBjqkAch81iJSqJbnS5x5UyoOAJuXtxJohf5vjkSbcqPLNfEqAps48FeRogjQwaPknBatm6yfDO8%2BdYHbHpTBgUngFKyD8DEZRmve8fK9Xs9kl%2FBBjupp7RNIiyEkVdYv5dT7HVMU3jXkcPo%2F6sbVj4F9vqRsVelKIrlgbvaLAqMGmr3NYPqOfEqGtKfm2Way5%2F6WViL1R19qErt%2BxDieuRCDuTDUAL23&X-Amz-Signature=77504b756c575c4b5690fcbedcc055b2625627b27ee25ee57bbeb16d44d3e5da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU27KTJ7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BKgOhLJLUewg72qP%2Bi1k1BBjoC5WmUMowtSgSwSbh2gIhAK4JMMEQkqXYL7viY5AvTZfqBanRaIai7l%2FxlNZzkiFcKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFCusY2nRn8bcohwoq3AMHsC67wgdw5DhksMoXddlxI4B4sfRUnL8i8Zjt3kzSJPqAqYiA5LyEQNZJFlHUBmcU5YWMpR6fntz7SPcZweghPltetlGZAG9QWc07BsXAdX7LeppVZS6%2FE%2BhKMWjEPegTEfD%2FoueORWo1U9%2B3R0mQnOygndCwJnSSFBUuLt0HKOLqfgsaw6hFOuk2odB3BTtE3XK5h10qEl2ZY46hm68FCdSt5Q23%2FGSA4YetPHlkerG1pyzFle8P6ZnXB068tA96zNQNUCxd4szbn%2BIjZih0p2GQeEDkOGVQOLtzU9DQPHAkD2Re8eG7csmYSv10Yoz7lJyl4vzwMHvgYG8%2B%2Flnt6qG1X%2B%2BSNL%2BMmcmVkNkRBBeXYyTzIcL7ELnGwZ0rZfpnyZKyRAny4Uh4R9PfdjgzvXkQWNCo682dus%2BYtLFHkfCf8tmmEIVgniD42TrMIo8cR%2BONKCPJVjQ1Xyy0WVgmeuIDzgtc4dUrlruNk88I%2BMb3Fmpwx%2B19O%2Bbnxm0BVSICHmXwS9YRx3obT64Q17S1aQnQipagcfamzGKR0OMM7urFxQiXivMoC4yimvFtOUypi3%2BXpZ7YMWNzzHlCRm0gWOCbE5hn9QFbU4Y%2F59qj82jDCrJC14NcbM%2FgdTCOh9zJBjqkAch81iJSqJbnS5x5UyoOAJuXtxJohf5vjkSbcqPLNfEqAps48FeRogjQwaPknBatm6yfDO8%2BdYHbHpTBgUngFKyD8DEZRmve8fK9Xs9kl%2FBBjupp7RNIiyEkVdYv5dT7HVMU3jXkcPo%2F6sbVj4F9vqRsVelKIrlgbvaLAqMGmr3NYPqOfEqGtKfm2Way5%2F6WViL1R19qErt%2BxDieuRCDuTDUAL23&X-Amz-Signature=9dab125a5488c622277f322efcaca6b1150b0026647fa7bc1e2ceb0f99349e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
