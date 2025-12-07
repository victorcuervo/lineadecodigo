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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTWTMBV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQGdGrynXmLJXJP2mSRZGknaAIa5rSRQ8O2jOd%2BTTabwIhAO4mm83p9nJv8dGynthuPhB%2FxgSKPGd1myVhSY49PRSTKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx34b4FBuHpeSkVi5gq3APfDZGo%2F33bNyiadcrx42E%2BRKB02S6QN8H0%2FZ3q8tjbALlydFDkP85m7Q90oD5B0uI4GVVOxkR6INZvTiRqKDDqc68hYsSeLfADjgWeTJhvA%2BtUsgkrNHjJ2r28V%2F3acFaOGynCx02L%2FZ9xXr4R3fdxX0cqSVfshF3IlAZHXAvLhw16SnSv6GrUV%2BkMxlxY8cPeRYO9AvlRhmdoxpKoiWs%2FBiKmNKkDSShgWKtw5jxhU777pawxDQndolzXubtmjBkOTjejJt0uecRV8FnmGYKFcLOFKN5IZ2IJyeOykMCAyoKBYoTu594jg%2F9j5n8oxWzS6Hy2hh%2Bzte5NZS4SuPULNfyy4FHjEv9nEV6OvCEhs8oEpmBDFjBme4yuISqjfNofFHF9xfc5vdMMHfm2QawjCw3ce2Hiugy88VV0hbW1UddH9epM0pp7azVyGpwfn%2BJwvkz6P4cG78IvAxP6VcYYPQazBsphPgwtndhxsLMbq72coXIaEe5gJkD%2BLxFRH1YXQzSQ9A4uhYQZbzdtAP7Tg2snhTupJon62QQWeiuINqQQZss0aHHFQlmUGPK4TCRiF3mIcJCEq298zTxffQk1xHbo9Ofu0p9tgpTKEiakJgNT0tMg3nzdHPBzPTDgmtXJBjqkARK9mKNhKOJmBJTL3ein8gveWa4R%2BJnzRiTZt53H12G%2BnNdDdlxufrim71tS5ghkEqU6ae81Yglr5M0QMcc2QiezZ7HE5FE4fGwxAR4bnniaedz2%2FDynuVrsPg9655qcSAuLC08bbhb5ohrwQaf1oJgtVsHxZM5khJolPZfhTcajRnCvs8Eay%2FM%2FW6dNn0EK09In0Mj2LYsPvzaq4SJQ2SwWpj00&X-Amz-Signature=30e366bd7ecadbc90140b3fde134137df9f0e17cd0f62f1ec582ce843ceb46ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTWTMBV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQGdGrynXmLJXJP2mSRZGknaAIa5rSRQ8O2jOd%2BTTabwIhAO4mm83p9nJv8dGynthuPhB%2FxgSKPGd1myVhSY49PRSTKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx34b4FBuHpeSkVi5gq3APfDZGo%2F33bNyiadcrx42E%2BRKB02S6QN8H0%2FZ3q8tjbALlydFDkP85m7Q90oD5B0uI4GVVOxkR6INZvTiRqKDDqc68hYsSeLfADjgWeTJhvA%2BtUsgkrNHjJ2r28V%2F3acFaOGynCx02L%2FZ9xXr4R3fdxX0cqSVfshF3IlAZHXAvLhw16SnSv6GrUV%2BkMxlxY8cPeRYO9AvlRhmdoxpKoiWs%2FBiKmNKkDSShgWKtw5jxhU777pawxDQndolzXubtmjBkOTjejJt0uecRV8FnmGYKFcLOFKN5IZ2IJyeOykMCAyoKBYoTu594jg%2F9j5n8oxWzS6Hy2hh%2Bzte5NZS4SuPULNfyy4FHjEv9nEV6OvCEhs8oEpmBDFjBme4yuISqjfNofFHF9xfc5vdMMHfm2QawjCw3ce2Hiugy88VV0hbW1UddH9epM0pp7azVyGpwfn%2BJwvkz6P4cG78IvAxP6VcYYPQazBsphPgwtndhxsLMbq72coXIaEe5gJkD%2BLxFRH1YXQzSQ9A4uhYQZbzdtAP7Tg2snhTupJon62QQWeiuINqQQZss0aHHFQlmUGPK4TCRiF3mIcJCEq298zTxffQk1xHbo9Ofu0p9tgpTKEiakJgNT0tMg3nzdHPBzPTDgmtXJBjqkARK9mKNhKOJmBJTL3ein8gveWa4R%2BJnzRiTZt53H12G%2BnNdDdlxufrim71tS5ghkEqU6ae81Yglr5M0QMcc2QiezZ7HE5FE4fGwxAR4bnniaedz2%2FDynuVrsPg9655qcSAuLC08bbhb5ohrwQaf1oJgtVsHxZM5khJolPZfhTcajRnCvs8Eay%2FM%2FW6dNn0EK09In0Mj2LYsPvzaq4SJQ2SwWpj00&X-Amz-Signature=91aef33bfdf4a2445ead0541b7a3910aeb41675b1bea32c1672f7d5ffd663a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
