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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57266N5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICGAfl0eRzScBJgkUbKM1zSfS6jrtw9WAXD4U2wCutudAiEAsZU5gea2bx7gqUKcrnXAOpSfRuD5IOL2E2%2BHq0y2vkgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKNgoWc6926BPu5SqyrcA9C2L1Zdg%2BIpUG3jvXkVAwILveLncTeY2MVWNtLW92Y7WfaGlrt6OE35Ms2OrJysWYvcI4PXdsPgw%2BI6Fu6MNgOrotoa2vA%2BQPjKAb0QFagCWCPIQRzqTJ%2BRGNDO%2FpC54fuIhJcg0OG%2BLXMNioMfgaJ8mtI6W0D%2Fi0HKGCC6Juk9gZ8s5TuY8dmxaOsegkyHNZrO7NRKAIE9gJxzosrSkurED4CR2AVUYzvRaAt2%2Fwawkk8Jc2iOyaib0dYyNiPtHMzrpXDbhd6Fvx4CX7cabLNlQuf8G8ymOoAaE%2F%2FPRlcwp611YrbEXMdfRNBYrQdFGjaC3Q6L24bMVfqbD5YTzMo%2FDNr8t3Lq9%2F3YKLYal8yksLiVNb26%2Fizqu26x%2B%2FgYMYlc0aERfaQsx%2B4x1E6OSjLwwMGQSrWHx3lGT%2FqMIoWLgURkAt7reMx1PSmvxEumJwjL8w3Wl1wuVeJRIALdHHv7a4SgIswOQStIjaPXB%2BVrnl6vdYZh35bpi1ruKB%2FVMPFUKTnYdYMwlFQdAGIgYMcx4xCmjM%2FhiO2fFDn5unWcIvOx6sP%2FM%2BzdHHUl9X3jICdxSXWDDORTa23x3LrtqKrJOpe64v3%2B7tOamTqaMR52TgBqjS0WKBApxnbzMPGFxckGOqUBNxa1ToDCSLFQFxQ0xdliApRpbtRjCbqBZ%2BCQpncBUdZs20eWQBv8o%2F8wjPhppfBEtk0CneruvUkbDSJZbn21ddCZXux%2B9%2BWIwg8rNaY%2BP6QYh%2BJ20hsSQV4Ug9ooBtSiLZjnX5aUvquO4xoHeSpZXlKVHF1a6yKNhTjh7B9xi34Fdc0FHvHmLRIGTZKHkZqPJQ0YpK60T0aAC3y1KgWHzdHn8aLT&X-Amz-Signature=3162be51ea725866d857910662c657924ca87be4a5e3b5eb06f56f6bc33840b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57266N5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T082222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICGAfl0eRzScBJgkUbKM1zSfS6jrtw9WAXD4U2wCutudAiEAsZU5gea2bx7gqUKcrnXAOpSfRuD5IOL2E2%2BHq0y2vkgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKNgoWc6926BPu5SqyrcA9C2L1Zdg%2BIpUG3jvXkVAwILveLncTeY2MVWNtLW92Y7WfaGlrt6OE35Ms2OrJysWYvcI4PXdsPgw%2BI6Fu6MNgOrotoa2vA%2BQPjKAb0QFagCWCPIQRzqTJ%2BRGNDO%2FpC54fuIhJcg0OG%2BLXMNioMfgaJ8mtI6W0D%2Fi0HKGCC6Juk9gZ8s5TuY8dmxaOsegkyHNZrO7NRKAIE9gJxzosrSkurED4CR2AVUYzvRaAt2%2Fwawkk8Jc2iOyaib0dYyNiPtHMzrpXDbhd6Fvx4CX7cabLNlQuf8G8ymOoAaE%2F%2FPRlcwp611YrbEXMdfRNBYrQdFGjaC3Q6L24bMVfqbD5YTzMo%2FDNr8t3Lq9%2F3YKLYal8yksLiVNb26%2Fizqu26x%2B%2FgYMYlc0aERfaQsx%2B4x1E6OSjLwwMGQSrWHx3lGT%2FqMIoWLgURkAt7reMx1PSmvxEumJwjL8w3Wl1wuVeJRIALdHHv7a4SgIswOQStIjaPXB%2BVrnl6vdYZh35bpi1ruKB%2FVMPFUKTnYdYMwlFQdAGIgYMcx4xCmjM%2FhiO2fFDn5unWcIvOx6sP%2FM%2BzdHHUl9X3jICdxSXWDDORTa23x3LrtqKrJOpe64v3%2B7tOamTqaMR52TgBqjS0WKBApxnbzMPGFxckGOqUBNxa1ToDCSLFQFxQ0xdliApRpbtRjCbqBZ%2BCQpncBUdZs20eWQBv8o%2F8wjPhppfBEtk0CneruvUkbDSJZbn21ddCZXux%2B9%2BWIwg8rNaY%2BP6QYh%2BJ20hsSQV4Ug9ooBtSiLZjnX5aUvquO4xoHeSpZXlKVHF1a6yKNhTjh7B9xi34Fdc0FHvHmLRIGTZKHkZqPJQ0YpK60T0aAC3y1KgWHzdHn8aLT&X-Amz-Signature=91727d4591de54f670ec89185521a0ecaadfa58640c4283929b6b53840437460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
