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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452OTYYK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3%2FG9Qc3rudB4vp39IkAEF3PBUdAJQ9fNquDELTl808AIgKSvGmw2gEm6iB98x3O0JM%2FY%2BLyiZ%2BP%2Fn8R9AKQ3Bp9oq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDERA0sh1vALxPWD0GircA%2F4%2Br%2FmezXgi3kuT31xc9zPZVOqRQ7rsHCu%2FhyBOVgPIiltKShLlMUKo1stIzM1RAdpVSqT4VX0tiT6X%2BR9ll9kUsbV%2FCch0%2FQMAeu8u7D%2FkAdbcmkszHKggzBn%2FBSnFo3vmCCe171Dsq2spli8L4bQXLi0EGrtwpMKDOvCr%2BZ1bTSJiw7fbkgTGb%2FRzDZvf1LgPomiVY5kCT%2BsWso93l296sk9tY71ROpputG%2Fi%2FoL13%2BgGM8S7QHrMODOYRDhk1Q%2FAo1yEBPnkiSrulegf4bVX2rtl%2BdtPyx0tRSYzrzy%2BWvARAf8S9TvaXjgdSFHLmgzGp2leDNlXgWgHlxpYD00WLPGnSK4jquSbNX957gLqPH671RyO2AOOYH96TO%2FOCURCeU%2Bl5yyBn6PCNamddSnETLG7fBWC79%2FSqmDT0IhpresLoQQrBD0dO0IR7vZmVKvEyHuBIeb90ybeHnL8DKbaSA38u3p8YWIihvttcbRgyiqK5w7CQfguLin%2F7CpfVrXdFWdzHeEQL8govXfu2hC2HEaHf3Gexz45yiEpOSpihOobI6TJxRJCbaHtmrILvU7639IpkLi0ZFhAD5mwr%2BTaOq%2B%2FV7ezltrR8zw2CeSMYbrtcELgQgGJYzfvMOXqy8kGOqUBen0yFNJRe5yLX72pHZLoZs9DgnPtfBCaoVDqYf9jGUUbofr0sZdqXLtL4N8xCrfdq0me8Mkz5Sx8MRCV6c4OPU0x5MeQckRjiwLlum4F%2FUmezFKuIkTwqJTW223vlFSuFAp0APUE9B8%2B9fXAmrHp%2F4uAokE65rMpADv1Y4E2NeW5FNmzyndDG%2BxLOrvmQYTEapPjaG0htLRcluVL9LAHBTBCd8LX&X-Amz-Signature=ebb0ef482e9c1e3c3f25883238c35c697b73f25222f80ac83465b03f1a71fc04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452OTYYK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3%2FG9Qc3rudB4vp39IkAEF3PBUdAJQ9fNquDELTl808AIgKSvGmw2gEm6iB98x3O0JM%2FY%2BLyiZ%2BP%2Fn8R9AKQ3Bp9oq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDERA0sh1vALxPWD0GircA%2F4%2Br%2FmezXgi3kuT31xc9zPZVOqRQ7rsHCu%2FhyBOVgPIiltKShLlMUKo1stIzM1RAdpVSqT4VX0tiT6X%2BR9ll9kUsbV%2FCch0%2FQMAeu8u7D%2FkAdbcmkszHKggzBn%2FBSnFo3vmCCe171Dsq2spli8L4bQXLi0EGrtwpMKDOvCr%2BZ1bTSJiw7fbkgTGb%2FRzDZvf1LgPomiVY5kCT%2BsWso93l296sk9tY71ROpputG%2Fi%2FoL13%2BgGM8S7QHrMODOYRDhk1Q%2FAo1yEBPnkiSrulegf4bVX2rtl%2BdtPyx0tRSYzrzy%2BWvARAf8S9TvaXjgdSFHLmgzGp2leDNlXgWgHlxpYD00WLPGnSK4jquSbNX957gLqPH671RyO2AOOYH96TO%2FOCURCeU%2Bl5yyBn6PCNamddSnETLG7fBWC79%2FSqmDT0IhpresLoQQrBD0dO0IR7vZmVKvEyHuBIeb90ybeHnL8DKbaSA38u3p8YWIihvttcbRgyiqK5w7CQfguLin%2F7CpfVrXdFWdzHeEQL8govXfu2hC2HEaHf3Gexz45yiEpOSpihOobI6TJxRJCbaHtmrILvU7639IpkLi0ZFhAD5mwr%2BTaOq%2B%2FV7ezltrR8zw2CeSMYbrtcELgQgGJYzfvMOXqy8kGOqUBen0yFNJRe5yLX72pHZLoZs9DgnPtfBCaoVDqYf9jGUUbofr0sZdqXLtL4N8xCrfdq0me8Mkz5Sx8MRCV6c4OPU0x5MeQckRjiwLlum4F%2FUmezFKuIkTwqJTW223vlFSuFAp0APUE9B8%2B9fXAmrHp%2F4uAokE65rMpADv1Y4E2NeW5FNmzyndDG%2BxLOrvmQYTEapPjaG0htLRcluVL9LAHBTBCd8LX&X-Amz-Signature=793394ead0fa47321c5f392da1dda0c678c5d27ea50e647ff638297262a8305c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
