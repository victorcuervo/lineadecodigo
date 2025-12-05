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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUB36YGF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRrpAfgPTjcTj5jPp3onSn0ImzVEzXz0c9M9apo7KnvAiEAhK7vQ49l04MsJF2O2IcK75IhmaSHzvaoMcx5lTd5igwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJ94Yr%2FadnORuHrdqyrcA7aFxNWMIunW7UOBZsjJ%2B1et8x%2BHsgDkYDFUXfjXoqag9kwMDoh7hciu%2BNmiKsGU3UKPaYWg489B1PePdi5qMEPtbB5%2FjLbIjyYUH%2Bbt3uWycOp07Ma4d%2F6LhQWLlLZUKnh8wy1CtNSqlVIy9oShKiN0EsAXLJqx7QQH605lGNXY%2Fr4FiqxXnwZz4kV7iTWUvTWjQUJFlFXj%2FHN2vPCzsMSJXwac%2BMhRZBf3hxV%2BXDsnMZzOit20JtUoCdiWGLt6pfcvxbCXabV36JYlHs9HlHlH1M%2BpuGAei3fS83VlOLLBJvWG1RmrJ7XuvaQtIEQ296bs3%2BwS9g7gFdwYeZBdZam4tMmsux5xjdv2rA%2BQ2PVlzkGb%2BFMkgFBKGXbXGNBPDeUg0LUOXaBePyaKUUT%2FnBxv%2FNwjcbA2%2By99TsrKju7eONFQK215Cn5ggnX5X79dnbtkY60F2Rial78kEdmvuBzJEf799q%2FkRPfyN7drc9jb6cAYwELEVd4t7d5ODhzmi7JuT12I7Zt0yrJBvRDpWn4u3HQLSthjEUqBmxJLiCFFkwvJfgtzyza7Q9lpMGsJHtFfaGVPN1L5xPEGWPiE%2B9XFhih4n5LVxF9KAYJ%2BHuOcwFuEHBJcHFlTGhDGMOPNyskGOqUBIW%2FIQpRHG0s2NZEZDMrGBNZDfl7YP9Iwc8lCs%2BEdalBwtJ2SX7ICkEvNbVjc6qQNnmkk86i1crLPsawUUPAdusyLzJ17hnHX3LXa9qx%2BqES%2BsrTqxr%2FgSczyQeiVEZUk65OUUrwZYEqRjGuB1Qs1eNG6iPu%2FqCHpshn0yA%2BomatjOPmITgSxsKkuw%2FX%2BZwiIn1X0z8sQvUa0kZ4KzSUMGCsNTF69&X-Amz-Signature=2dcc0a26ed9b072f93ac681f9a9b713324162795ac07334219f39a676d47348a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUB36YGF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRrpAfgPTjcTj5jPp3onSn0ImzVEzXz0c9M9apo7KnvAiEAhK7vQ49l04MsJF2O2IcK75IhmaSHzvaoMcx5lTd5igwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJ94Yr%2FadnORuHrdqyrcA7aFxNWMIunW7UOBZsjJ%2B1et8x%2BHsgDkYDFUXfjXoqag9kwMDoh7hciu%2BNmiKsGU3UKPaYWg489B1PePdi5qMEPtbB5%2FjLbIjyYUH%2Bbt3uWycOp07Ma4d%2F6LhQWLlLZUKnh8wy1CtNSqlVIy9oShKiN0EsAXLJqx7QQH605lGNXY%2Fr4FiqxXnwZz4kV7iTWUvTWjQUJFlFXj%2FHN2vPCzsMSJXwac%2BMhRZBf3hxV%2BXDsnMZzOit20JtUoCdiWGLt6pfcvxbCXabV36JYlHs9HlHlH1M%2BpuGAei3fS83VlOLLBJvWG1RmrJ7XuvaQtIEQ296bs3%2BwS9g7gFdwYeZBdZam4tMmsux5xjdv2rA%2BQ2PVlzkGb%2BFMkgFBKGXbXGNBPDeUg0LUOXaBePyaKUUT%2FnBxv%2FNwjcbA2%2By99TsrKju7eONFQK215Cn5ggnX5X79dnbtkY60F2Rial78kEdmvuBzJEf799q%2FkRPfyN7drc9jb6cAYwELEVd4t7d5ODhzmi7JuT12I7Zt0yrJBvRDpWn4u3HQLSthjEUqBmxJLiCFFkwvJfgtzyza7Q9lpMGsJHtFfaGVPN1L5xPEGWPiE%2B9XFhih4n5LVxF9KAYJ%2BHuOcwFuEHBJcHFlTGhDGMOPNyskGOqUBIW%2FIQpRHG0s2NZEZDMrGBNZDfl7YP9Iwc8lCs%2BEdalBwtJ2SX7ICkEvNbVjc6qQNnmkk86i1crLPsawUUPAdusyLzJ17hnHX3LXa9qx%2BqES%2BsrTqxr%2FgSczyQeiVEZUk65OUUrwZYEqRjGuB1Qs1eNG6iPu%2FqCHpshn0yA%2BomatjOPmITgSxsKkuw%2FX%2BZwiIn1X0z8sQvUa0kZ4KzSUMGCsNTF69&X-Amz-Signature=d698d9ea1965bf10ef35d3a960c1129e5e81a8fd5e6f8ecb54729c6bea688b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
