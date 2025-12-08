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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYVHZPM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDns%2BcA0UjuxckuoSQWVLAbwsugMX3AiNKmzuZjICWYDwIgXckZoeY9vXjAB4y0CJY88gVjM%2B9O4oAVM%2FneFYH7b0kqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBofbTA3RFlh2fFPwyrcAyj0WQ%2FqxvWuCe%2FApZO88FkFmKHlwNieSVlSQU90KhljcELXmAZAaPAhM7cn%2FVTfJSELjuJdsklR68Dm4uhGMwfdNyqEVXTjMktWecUr6Ei5NN5ANOQhAyxEja3nLVjqCJHZZj%2Bl%2FtkVcHrubZ26qUf29%2B%2BRSdje4ISws5ILC4h%2FFwggzjoIIKgMnYhLfA7sA%2BzkwdBtUq8G%2BeG0P%2FtWjq%2FepEHOnYOZAHXpBPzAzv%2FM98QQalfew9nzRk%2B5xTJeu6HCZtRXieqzptpSveStVMZg4%2FXcy4eZ76tcPLrc4NyCbnp24uFAF1SWDENTym4XFYc9r9JUiBHd1%2BFusH%2B86DWYJSQxv8P74KNTl8SV1kiqpOFFAsdouCdZMs96o1ndc7gu86Q2I0V57YHZARYHKTntv9VFBJ0hJ%2BDDL6qXaVTlRDTGiOlaXV%2FkZkN%2FXo5GP29H4l9vC4CVwFfYjrcnrKRu890oXiX4J%2Fvo1Vv4ErJWpuog4WZMyunZb7v2kAEzGXEZ1n5HboALG07pwLUTxkkMrCNTxwzHXY30Z28lVnityfqbebMTuS71zg%2Blq1cN8O3S9V5aYktMZ6s82ztTr2VRqFZ1%2FaGJZBFN4ZDvPXeb6eeeAxQIeWmRgvrwMM2G3MkGOqUBIDK6RopMAJDShHva2yp4wzq82U7opWvW3Q2W5FYifbeNn8uHC%2FZ25D96in1RtO1XSL1V3GUzoPedYyGscWaoUzvX%2BO30q6SHnD1ogcHvwmiVTcjYb9hx%2FPvU5LP1affDHKVzzrtURCfZatZ1%2Bsv9wiTERkBxlAuNWlOmedoCM%2FsO1UNrdvSDI86j0V7FjP%2B%2BYnV8z2n4hBYgLVgW7HJ9aoo9YxBZ&X-Amz-Signature=535e2036568b0c1af62bd2391ef69f37a1e7ca4b3e3f2596c66e6e29f21e3691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYVHZPM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDns%2BcA0UjuxckuoSQWVLAbwsugMX3AiNKmzuZjICWYDwIgXckZoeY9vXjAB4y0CJY88gVjM%2B9O4oAVM%2FneFYH7b0kqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBofbTA3RFlh2fFPwyrcAyj0WQ%2FqxvWuCe%2FApZO88FkFmKHlwNieSVlSQU90KhljcELXmAZAaPAhM7cn%2FVTfJSELjuJdsklR68Dm4uhGMwfdNyqEVXTjMktWecUr6Ei5NN5ANOQhAyxEja3nLVjqCJHZZj%2Bl%2FtkVcHrubZ26qUf29%2B%2BRSdje4ISws5ILC4h%2FFwggzjoIIKgMnYhLfA7sA%2BzkwdBtUq8G%2BeG0P%2FtWjq%2FepEHOnYOZAHXpBPzAzv%2FM98QQalfew9nzRk%2B5xTJeu6HCZtRXieqzptpSveStVMZg4%2FXcy4eZ76tcPLrc4NyCbnp24uFAF1SWDENTym4XFYc9r9JUiBHd1%2BFusH%2B86DWYJSQxv8P74KNTl8SV1kiqpOFFAsdouCdZMs96o1ndc7gu86Q2I0V57YHZARYHKTntv9VFBJ0hJ%2BDDL6qXaVTlRDTGiOlaXV%2FkZkN%2FXo5GP29H4l9vC4CVwFfYjrcnrKRu890oXiX4J%2Fvo1Vv4ErJWpuog4WZMyunZb7v2kAEzGXEZ1n5HboALG07pwLUTxkkMrCNTxwzHXY30Z28lVnityfqbebMTuS71zg%2Blq1cN8O3S9V5aYktMZ6s82ztTr2VRqFZ1%2FaGJZBFN4ZDvPXeb6eeeAxQIeWmRgvrwMM2G3MkGOqUBIDK6RopMAJDShHva2yp4wzq82U7opWvW3Q2W5FYifbeNn8uHC%2FZ25D96in1RtO1XSL1V3GUzoPedYyGscWaoUzvX%2BO30q6SHnD1ogcHvwmiVTcjYb9hx%2FPvU5LP1affDHKVzzrtURCfZatZ1%2Bsv9wiTERkBxlAuNWlOmedoCM%2FsO1UNrdvSDI86j0V7FjP%2B%2BYnV8z2n4hBYgLVgW7HJ9aoo9YxBZ&X-Amz-Signature=11c36485196f4894d29d496a2d848630c7d10c540786868a37a985aa0ea1769f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
