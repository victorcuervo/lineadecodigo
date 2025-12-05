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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LSN2C44%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlqCjZEpe6rpLGHriLq5dPLJmYLA0OrJn5jixmtXQpTQIgYSngwkQIx8uUpSlq0R3Qj060MOI80%2BmPol0l1PCYuzUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAPmBJNTfLK62mtmlircA4NNbu0MoFa40xa6MX5QoqwHlzlIr%2BgMjKxXxFg%2Bt%2B%2BP5a%2B0X2yXf9mm2bBl077zvOvS8pLVJ7DN4ikBdpb9UOLiaVRBIxep8v9raRklg31V3GD5iISimmvrEw%2FyAxXoPH55JE7MI6UlyMjBWiciEP6qe2Q2sOBjYn74L7qJVHgKpRXUa5pX%2FQXLPTZs8xu%2BBV03RZis8qEuhvW2g1aT9G6HSbSSCCnUUdZogTtv5tTqMqZh1CDVOUBKFCOd2xzWhecSLEtQanWBvkcZUk5RQdy%2F4k7JOE8cPdm3RNiRKP0IJTh84rtJECFW%2FO%2BDARC456FrE9QbDc8Q%2F%2BAiJnpWqG9%2FNnGSyn9kZsFroYULTGsmpSipEN8n4c0le29YLqti%2BieXjR0lrW8Emfsl5aEW%2B%2By8O9OsUbwFi0HmJtm8oQ2MaaDrhFSUiPB1fmVoxJ5F3kzsFZ6yD%2BsRdz4E6w3TXRduCdqzUEqFpoCQESnDd5wtmIGkPpEmV%2BWwazQUwLxn5lTPqwR0KGZ4QPXDV0eBfHtb219qyiWoVV5xQ%2BkV3D%2BpeLareBHYP2RnBbnGnKk00ZbtN3E1vPx%2B0ETgg8CqWfaUZVX7RxCjLyTxobD8ajgTPeKvg5TVj9WjBdg7MJL4y8kGOqUB9iWsi%2B7%2F6FA%2BomqGovUunuEoWDQemcafs8wNN3JhMPviAvd4jlQ9msrkW2plfYg%2BFrpu1JpUu%2F8Wlr29%2FCVF3ABV5XkagxHCKTjZ5t%2FkoaVBCDVaw1WrH7pGNQrSnFKLzptyixlmywQ4d6kKAgkWYGZqKqc5SrrPREIag3DOfsqUx6hXSZANkV%2B4OLHQpAWfXtyYzI8%2B39gOGMSjsfhSg%2FbvXCJn&X-Amz-Signature=79695e07fe9dba2f4d8fb02bfecc20298737c4865a6d6c713fb3880f5d6ed2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LSN2C44%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlqCjZEpe6rpLGHriLq5dPLJmYLA0OrJn5jixmtXQpTQIgYSngwkQIx8uUpSlq0R3Qj060MOI80%2BmPol0l1PCYuzUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAPmBJNTfLK62mtmlircA4NNbu0MoFa40xa6MX5QoqwHlzlIr%2BgMjKxXxFg%2Bt%2B%2BP5a%2B0X2yXf9mm2bBl077zvOvS8pLVJ7DN4ikBdpb9UOLiaVRBIxep8v9raRklg31V3GD5iISimmvrEw%2FyAxXoPH55JE7MI6UlyMjBWiciEP6qe2Q2sOBjYn74L7qJVHgKpRXUa5pX%2FQXLPTZs8xu%2BBV03RZis8qEuhvW2g1aT9G6HSbSSCCnUUdZogTtv5tTqMqZh1CDVOUBKFCOd2xzWhecSLEtQanWBvkcZUk5RQdy%2F4k7JOE8cPdm3RNiRKP0IJTh84rtJECFW%2FO%2BDARC456FrE9QbDc8Q%2F%2BAiJnpWqG9%2FNnGSyn9kZsFroYULTGsmpSipEN8n4c0le29YLqti%2BieXjR0lrW8Emfsl5aEW%2B%2By8O9OsUbwFi0HmJtm8oQ2MaaDrhFSUiPB1fmVoxJ5F3kzsFZ6yD%2BsRdz4E6w3TXRduCdqzUEqFpoCQESnDd5wtmIGkPpEmV%2BWwazQUwLxn5lTPqwR0KGZ4QPXDV0eBfHtb219qyiWoVV5xQ%2BkV3D%2BpeLareBHYP2RnBbnGnKk00ZbtN3E1vPx%2B0ETgg8CqWfaUZVX7RxCjLyTxobD8ajgTPeKvg5TVj9WjBdg7MJL4y8kGOqUB9iWsi%2B7%2F6FA%2BomqGovUunuEoWDQemcafs8wNN3JhMPviAvd4jlQ9msrkW2plfYg%2BFrpu1JpUu%2F8Wlr29%2FCVF3ABV5XkagxHCKTjZ5t%2FkoaVBCDVaw1WrH7pGNQrSnFKLzptyixlmywQ4d6kKAgkWYGZqKqc5SrrPREIag3DOfsqUx6hXSZANkV%2B4OLHQpAWfXtyYzI8%2B39gOGMSjsfhSg%2FbvXCJn&X-Amz-Signature=4be10bf4f4ee686020476343b6348056ff528fc55b9e78a5016754f2580594cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
