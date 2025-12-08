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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LTAEFEF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiYV6icirLiK%2B7WcErrxJnEsADlsn8UqXDAnNAtO2zbAiEA4JUzSuCqCSwCFZYzWTiAXy8J7ZOfAxaqhvPUxLF3%2BnsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY8%2B%2BrOraRaNJ1JQyrcA66PwbIeRslnSu21AYWj4pFyuJmkYayLva2PS2t9NGZy4aMi3DmIG%2BwvLM9D9SMK3c3n9AE8LgQ7UXsyfcfnFFFYb93%2Fisn3zQwZ2twKGpUSOJBWPR9L%2FZD275o%2FT8LlmMQ6%2FGA%2FY3t4X78AyZh9lxY%2Bsd3OWsS%2FhSoNOMb2nxZsQLDBCiom5Sv6NIa9Mrryc5%2FKMPM%2BBXCTWytxx8LMW3o0Qe3alf82gxG0lTvLvsu0UTlWWz0yuX0fsD7Glfsl8NwEGw%2FkcApQt4MlZ5e0H6dvU4bjXwOXaxjz8pRpeP%2B99HdPm53FRzpBtd4Ob8BRcTke5KU0OVI910uf5L1gizgU%2BXhMpkIkbxrrIMdNj3QB3ksXaZz00y1FOEbsZzCK64cQYQFeaNWbufD46q9On4MdohszcuDTCCqCLgNlv2Mf6huSjg%2BJ8vwBujz%2BWSM2%2FyHsYAGOo8E1Ri89k8W6Jj9siCtxSm41Z7mpSCTWUd9630TFgSP7O0kXeiqsTfzA3GhqBFzLX4PEXUcpWE0NNB42ra1z%2F0BWo6rLZe53Rv4k0doPkTpGYyNNfLsnU2cDJsqnNlnoyHjalen0yFz5NAIkrSMAibt6qnMXkHNcjlr4PnG2%2FpMbqkhzuZLMMOfR2MkGOqUB%2BDq84bK02jWZ%2BIAF96EAXkOROcuOK9ZZKG1x2%2BAOKhLNfhhbMR6x0q1wSY%2B6hnXF0ZXzs7H8R6AX7SSdQImj7hx8LTy3r4ozd7Mv0nd6mB7MpFLcueWGeqdlOuLh7myzCgW1oDPKlhgxcTfaSxKCuiWcG39foDAvF%2B2Rxs748WVT5i1Q6rvDrzSbaFqVxc16jLdybLYTpdv1W2q3aqHCXKniBkwR&X-Amz-Signature=93fa19d587d669b8ba81fddee9100eee3cfd50abb0e812ccdb1cf438519e1c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LTAEFEF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiYV6icirLiK%2B7WcErrxJnEsADlsn8UqXDAnNAtO2zbAiEA4JUzSuCqCSwCFZYzWTiAXy8J7ZOfAxaqhvPUxLF3%2BnsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY8%2B%2BrOraRaNJ1JQyrcA66PwbIeRslnSu21AYWj4pFyuJmkYayLva2PS2t9NGZy4aMi3DmIG%2BwvLM9D9SMK3c3n9AE8LgQ7UXsyfcfnFFFYb93%2Fisn3zQwZ2twKGpUSOJBWPR9L%2FZD275o%2FT8LlmMQ6%2FGA%2FY3t4X78AyZh9lxY%2Bsd3OWsS%2FhSoNOMb2nxZsQLDBCiom5Sv6NIa9Mrryc5%2FKMPM%2BBXCTWytxx8LMW3o0Qe3alf82gxG0lTvLvsu0UTlWWz0yuX0fsD7Glfsl8NwEGw%2FkcApQt4MlZ5e0H6dvU4bjXwOXaxjz8pRpeP%2B99HdPm53FRzpBtd4Ob8BRcTke5KU0OVI910uf5L1gizgU%2BXhMpkIkbxrrIMdNj3QB3ksXaZz00y1FOEbsZzCK64cQYQFeaNWbufD46q9On4MdohszcuDTCCqCLgNlv2Mf6huSjg%2BJ8vwBujz%2BWSM2%2FyHsYAGOo8E1Ri89k8W6Jj9siCtxSm41Z7mpSCTWUd9630TFgSP7O0kXeiqsTfzA3GhqBFzLX4PEXUcpWE0NNB42ra1z%2F0BWo6rLZe53Rv4k0doPkTpGYyNNfLsnU2cDJsqnNlnoyHjalen0yFz5NAIkrSMAibt6qnMXkHNcjlr4PnG2%2FpMbqkhzuZLMMOfR2MkGOqUB%2BDq84bK02jWZ%2BIAF96EAXkOROcuOK9ZZKG1x2%2BAOKhLNfhhbMR6x0q1wSY%2B6hnXF0ZXzs7H8R6AX7SSdQImj7hx8LTy3r4ozd7Mv0nd6mB7MpFLcueWGeqdlOuLh7myzCgW1oDPKlhgxcTfaSxKCuiWcG39foDAvF%2B2Rxs748WVT5i1Q6rvDrzSbaFqVxc16jLdybLYTpdv1W2q3aqHCXKniBkwR&X-Amz-Signature=6731752b209d09885283ee7d1a702f249ad5c82ea3397e0d1042eee5eeefb160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
