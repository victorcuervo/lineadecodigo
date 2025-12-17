---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCGWNNFT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS5y1zN3sG0wqenGZzbF4iCHZEnGmkFtc1bZBSus2NCAiEAkfT99l0SAH2P1XMsDDOTGMFe6TCvEzTFRE5jGQ3dl9cq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDE6SBKz36fGxa7tdYCrcA4WxJXTMHkFLqPcQm29Ne%2Btb0wn%2BDF7DNCQPTmdOs8YOeR7gnML1zlipIztAfwDQEjTO2l5kQsKpFNfHicpjKbeVU%2BwHtpVq46vUjqZYkBuXS7v5tRdi36bhJk2hNLyzRTP9qg9GVu%2BNpyNh7b5eUURElh5BRB9n9O1bOiMXafiS4O0joNj48hbvtvAsABIfnAPu0nahsmkUIG1nYJwcoUVQyQjxWQkOW1OjOgwIsveX3wy49TJfwAnSTTr1%2F5BOO9pV%2FHt9u3kCE524LdgsbeVC96FIy0kK98cue8%2BS7MyHMfIQ3ulV79%2BDRuEq8iyV2uVDevzfPj2BoszmvCeuMMW4TBVKcpqM3wnMJj7r1N3q0nTRl1lBtcwBJ22fl50Pn5yTEZP%2B3Iyk%2Btk6TCi%2F41ob7OaXQne3fWd3FurkkG2sYxXiqc4c1xKWlL%2F9rYN3QgeZx2mtWosPY7F9VFd4C0U%2B3NGRKjDutHslFaETYmIDnAqq1RIRJ6ILsJ4SiYc0GoWewvENp8G9Dyu6GKk0rkglQiXfj5ueH9KGiWt7PkefJNWWsGeZ2i9mYFdlD7c3JZYMNp2SDjZ%2BDcJNcQWa%2FUS1wXggJ6RHwlkgBNNJMvEwjwAXnb5%2ByFu7e4MpMMqCicoGOqUBGrNycNOSi97Gv4yr1pFhJK3gs3rYGuYUrXEbEYKKG%2BV0OO4%2B565C02o%2F0rxq9J5GvsRkVh9H5nTN2NaBRzN%2FB7vlAsbTGNGBDjjRcUdzPpKAnaSPb%2BT6seOxeEOsjD4kyOhqr1px5cIZuatb%2B3A00j%2B1pOFIxYKX46O1iAJ%2BKDTUrmTuVEeqjeEi3DSUa0OiKWJU2izmfQIHk%2FzrUrMgkqXTx7hy&X-Amz-Signature=c2f77ba02a7a3c3edcb5d0c6c997df57afb56733cc2b8dd4bd08be90c09a2866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCGWNNFT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS5y1zN3sG0wqenGZzbF4iCHZEnGmkFtc1bZBSus2NCAiEAkfT99l0SAH2P1XMsDDOTGMFe6TCvEzTFRE5jGQ3dl9cq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDE6SBKz36fGxa7tdYCrcA4WxJXTMHkFLqPcQm29Ne%2Btb0wn%2BDF7DNCQPTmdOs8YOeR7gnML1zlipIztAfwDQEjTO2l5kQsKpFNfHicpjKbeVU%2BwHtpVq46vUjqZYkBuXS7v5tRdi36bhJk2hNLyzRTP9qg9GVu%2BNpyNh7b5eUURElh5BRB9n9O1bOiMXafiS4O0joNj48hbvtvAsABIfnAPu0nahsmkUIG1nYJwcoUVQyQjxWQkOW1OjOgwIsveX3wy49TJfwAnSTTr1%2F5BOO9pV%2FHt9u3kCE524LdgsbeVC96FIy0kK98cue8%2BS7MyHMfIQ3ulV79%2BDRuEq8iyV2uVDevzfPj2BoszmvCeuMMW4TBVKcpqM3wnMJj7r1N3q0nTRl1lBtcwBJ22fl50Pn5yTEZP%2B3Iyk%2Btk6TCi%2F41ob7OaXQne3fWd3FurkkG2sYxXiqc4c1xKWlL%2F9rYN3QgeZx2mtWosPY7F9VFd4C0U%2B3NGRKjDutHslFaETYmIDnAqq1RIRJ6ILsJ4SiYc0GoWewvENp8G9Dyu6GKk0rkglQiXfj5ueH9KGiWt7PkefJNWWsGeZ2i9mYFdlD7c3JZYMNp2SDjZ%2BDcJNcQWa%2FUS1wXggJ6RHwlkgBNNJMvEwjwAXnb5%2ByFu7e4MpMMqCicoGOqUBGrNycNOSi97Gv4yr1pFhJK3gs3rYGuYUrXEbEYKKG%2BV0OO4%2B565C02o%2F0rxq9J5GvsRkVh9H5nTN2NaBRzN%2FB7vlAsbTGNGBDjjRcUdzPpKAnaSPb%2BT6seOxeEOsjD4kyOhqr1px5cIZuatb%2B3A00j%2B1pOFIxYKX46O1iAJ%2BKDTUrmTuVEeqjeEi3DSUa0OiKWJU2izmfQIHk%2FzrUrMgkqXTx7hy&X-Amz-Signature=b653be24e2e6cf96c7b9be056386cbce844367fb67d76be684d919f1d309508f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
