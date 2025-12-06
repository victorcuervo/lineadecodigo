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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYAKEML%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIC2m3Dp8IPPnT58Y0iPgoInPZMxGBT3bEiLuDk3OIAAiEA%2Bq4HYoK57htzD8alf3GXUvF8KnZXi3P%2FJCVPcxyVijgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPL15%2FLdWT0KSeCDPircA%2B%2BdJ1KDEnOxvVi7BAsMwih4tNBuwTMIbiO1qx2oRdcI9SOjdfP9yMDiej%2FhlVZFQeF9Z78c%2BILbMj1M3CJT6Qs%2Fplq%2BQ3r5b8ijFpieiwCTsMFG3kZvOOcmE1TIMYq6408BcW6wlinGuRZcvrFNBgHfIs97OhB31YVPOt0gZJRhSuGRn5%2FqJdpOxh%2F9yU%2B%2BfDGlx7bKfrtLXlg3DPMqagMP3v2GGoejYV2ZW8wEg0HKwnjC5rhKd3pTr5q%2BcIAt90LHIpAC74tyHO5u8yyYCGuXdglyivdR2K6DtWN5O5NAUtlciQV8xlb%2FJYo52Fa8RW40l523gryZfXhAy8Jdb4bwTWYsYivOI4CvuKeYSy85p7gFNsIESrLTzSyh2kV6UIotjW1id9TglAjqkSNaRaiFLqbG%2FNuewj12pzl5MXeff%2Bxyc0PjoIBYkrhBZjf%2B1WsG%2Fhup%2Fbh2eJKKgKXvKrtMQYEPrKLoHd4OQAdEFRxVvkt4lZbNmWvExpr%2FtiA7EFA5lxOWoRyIY9yWSo3CG%2FLaLupH5a1Vl5jJ%2B5co%2F6F9UNq3TMRyAs6QRRgJlLsf5h7WpC1aRmPX8rnhCqk5Wi90WXe4GZFVVY2R2BRLQ7VHKthnfNfBjjja8CUGMM%2FI0ckGOqUB7IfuWh6T0VBOqQ2J%2FDjARt%2BzHguEh%2F4nQBdQ8KVsmW8PpBXxRufNdHMx8bYd%2B8%2Fn3PHx1CiHz2vaVnzxPSVlRVFGebS5gUzJ4FSecJqUSAgd1zlwpdPRCO7%2FNHR6Laj7z%2FLdGmwznEOItlaYmkLXxgWD9H0owAwrkRhtUUb48zlnTLl1yTpZm1L119HoYKoiF8efbj96drvO02h1XveBzJ4B2AO%2B&X-Amz-Signature=8c4208cf6ef87d8253bf19889393290469d165479953e22afa08b3023dad8ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AYAKEML%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIC2m3Dp8IPPnT58Y0iPgoInPZMxGBT3bEiLuDk3OIAAiEA%2Bq4HYoK57htzD8alf3GXUvF8KnZXi3P%2FJCVPcxyVijgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPL15%2FLdWT0KSeCDPircA%2B%2BdJ1KDEnOxvVi7BAsMwih4tNBuwTMIbiO1qx2oRdcI9SOjdfP9yMDiej%2FhlVZFQeF9Z78c%2BILbMj1M3CJT6Qs%2Fplq%2BQ3r5b8ijFpieiwCTsMFG3kZvOOcmE1TIMYq6408BcW6wlinGuRZcvrFNBgHfIs97OhB31YVPOt0gZJRhSuGRn5%2FqJdpOxh%2F9yU%2B%2BfDGlx7bKfrtLXlg3DPMqagMP3v2GGoejYV2ZW8wEg0HKwnjC5rhKd3pTr5q%2BcIAt90LHIpAC74tyHO5u8yyYCGuXdglyivdR2K6DtWN5O5NAUtlciQV8xlb%2FJYo52Fa8RW40l523gryZfXhAy8Jdb4bwTWYsYivOI4CvuKeYSy85p7gFNsIESrLTzSyh2kV6UIotjW1id9TglAjqkSNaRaiFLqbG%2FNuewj12pzl5MXeff%2Bxyc0PjoIBYkrhBZjf%2B1WsG%2Fhup%2Fbh2eJKKgKXvKrtMQYEPrKLoHd4OQAdEFRxVvkt4lZbNmWvExpr%2FtiA7EFA5lxOWoRyIY9yWSo3CG%2FLaLupH5a1Vl5jJ%2B5co%2F6F9UNq3TMRyAs6QRRgJlLsf5h7WpC1aRmPX8rnhCqk5Wi90WXe4GZFVVY2R2BRLQ7VHKthnfNfBjjja8CUGMM%2FI0ckGOqUB7IfuWh6T0VBOqQ2J%2FDjARt%2BzHguEh%2F4nQBdQ8KVsmW8PpBXxRufNdHMx8bYd%2B8%2Fn3PHx1CiHz2vaVnzxPSVlRVFGebS5gUzJ4FSecJqUSAgd1zlwpdPRCO7%2FNHR6Laj7z%2FLdGmwznEOItlaYmkLXxgWD9H0owAwrkRhtUUb48zlnTLl1yTpZm1L119HoYKoiF8efbj96drvO02h1XveBzJ4B2AO%2B&X-Amz-Signature=8609f3fc3b60902931e3d681e4b0ab1b68575a1370fe778559599f45ae19ed4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
