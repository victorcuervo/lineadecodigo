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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVUGVPCL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn0tiSq1Sz9tVwZdMJPoFYBfISMt%2F5L69EmqCPRGKceAiEA3Ak0oDMzRX7zi7gAPEA9YORtPcob%2FEsHn4D68Qpk19QqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnjRBrEDtR2faLGSircAxxqGbsIPJFcqFMwgtRG7yyVbiyvtJ%2BMDp%2FrklZ7l%2F%2Faz181zFv27hvQZ9qpOHDcn6NS55rZWQel3mATLZM0Ky8tByD8Xy7%2FyKdwhx1mCpEHLijDG3FF4xfi3TmQU5XFU2mPsDJR9P1zIUAM9uuM8Y9BEmu5At8f0f7Kr9CchfHMtIyP2K52kSoVoGIlPf7nqPIAejNJpGXgi7eSjWjpObPtxzAHrF%2Fmv24AEPf3AR1mQA%2BFpx39djcAUw3y8ddG63JXkiaezCA3Oj5%2F7OrgojKIXqQxOSMcIAOnXLzFf8%2Bx3Qe%2FP2QwVPXVkgQVwqKGlOmtv1RQV1R866b9OA3PGYYFNSqDpDTt%2FuEJDO8pAseBjs0icY3%2BAp1FUKhygtH44DtEw3JpmQTt12gln%2F6abGXRMs3dB6yLdY9uNF2LIia8T%2B1Z5MXkoQpsQ50xqPSLsA1UgOjEIvKQSj57UhpiV0bX9P0LGAHan2g7YABPx7WsMatvfayEOnytwUMwabYbwHttVHPclQbKks6szfXG900AiM65rRoFn8hT3deZcVKrPHafj624OhRxmnfWZbR%2B%2FfpJXMcTSVDIWmLe5ViNRBEiTA0oyuF4b3utP9CrSQzyjCJuMU4YuooDqckyMO%2BP28kGOqUBDvAo4kZMztkxBPCjrE%2B6LpdoN2NqjGukBJ7xbhK79Fz%2FLYppuIuR5r2f2bPeyV%2BFN14%2B2334y1AoHDX98yXhukzsz%2Buzqo%2Bdk%2Fcz5%2BpwIxo0HsZiNpWl3yjibygV5syD0ox0TJi8cSwp0I0rOq%2FvIP98SO5d5o7oAYERjM%2BWY114psuJ7IMZ1HpbOu9%2BPdGaGBvgCNuUqYmClofOQ1y3UoZORs1S&X-Amz-Signature=7f74ab679fd239faae90a08b9313c67431b36abc5656adeaecab0e5c640d6fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVUGVPCL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn0tiSq1Sz9tVwZdMJPoFYBfISMt%2F5L69EmqCPRGKceAiEA3Ak0oDMzRX7zi7gAPEA9YORtPcob%2FEsHn4D68Qpk19QqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnjRBrEDtR2faLGSircAxxqGbsIPJFcqFMwgtRG7yyVbiyvtJ%2BMDp%2FrklZ7l%2F%2Faz181zFv27hvQZ9qpOHDcn6NS55rZWQel3mATLZM0Ky8tByD8Xy7%2FyKdwhx1mCpEHLijDG3FF4xfi3TmQU5XFU2mPsDJR9P1zIUAM9uuM8Y9BEmu5At8f0f7Kr9CchfHMtIyP2K52kSoVoGIlPf7nqPIAejNJpGXgi7eSjWjpObPtxzAHrF%2Fmv24AEPf3AR1mQA%2BFpx39djcAUw3y8ddG63JXkiaezCA3Oj5%2F7OrgojKIXqQxOSMcIAOnXLzFf8%2Bx3Qe%2FP2QwVPXVkgQVwqKGlOmtv1RQV1R866b9OA3PGYYFNSqDpDTt%2FuEJDO8pAseBjs0icY3%2BAp1FUKhygtH44DtEw3JpmQTt12gln%2F6abGXRMs3dB6yLdY9uNF2LIia8T%2B1Z5MXkoQpsQ50xqPSLsA1UgOjEIvKQSj57UhpiV0bX9P0LGAHan2g7YABPx7WsMatvfayEOnytwUMwabYbwHttVHPclQbKks6szfXG900AiM65rRoFn8hT3deZcVKrPHafj624OhRxmnfWZbR%2B%2FfpJXMcTSVDIWmLe5ViNRBEiTA0oyuF4b3utP9CrSQzyjCJuMU4YuooDqckyMO%2BP28kGOqUBDvAo4kZMztkxBPCjrE%2B6LpdoN2NqjGukBJ7xbhK79Fz%2FLYppuIuR5r2f2bPeyV%2BFN14%2B2334y1AoHDX98yXhukzsz%2Buzqo%2Bdk%2Fcz5%2BpwIxo0HsZiNpWl3yjibygV5syD0ox0TJi8cSwp0I0rOq%2FvIP98SO5d5o7oAYERjM%2BWY114psuJ7IMZ1HpbOu9%2BPdGaGBvgCNuUqYmClofOQ1y3UoZORs1S&X-Amz-Signature=d3126bc89e64c3cd24df9df849d653d5b8028440fe6281bac42c1dd8f8499c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
