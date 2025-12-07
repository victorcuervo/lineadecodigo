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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676CDXZRY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoHAkl61iHS8amKUQZF9jnJPbDiCCtzu9ny5lERgCRVAiBqdzJGWkBXhP8tWlpnHIChwvZpT8yTrMHv5NMDt4jxsiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmpzrI%2F2jJJtRaGhKtwDuL91PhxUUFaSrqLYsgkmB1BPLmjRSh7MpxfivFn91WRJDsI4RL2wikxsQnRtHU4R9HpqoY8EHQffGnTcWwCwF%2Bwi24%2FOj%2BV1OCmwg7e13quiXZ6ZRnQo6461auoNwPnZWf6E1jEKxdfZFYkH4MOJyYdJUySrC8fPXr7hIeoO4lNkJoLVGoT%2B9MT4WlXLE3ZLn%2BYCG2%2B3sTLAqOKK%2Fcj78ASGnFELG9uqXPrsDVjsDiirpSsBNUGyU3IwYkIcIq2XUMHNBQluty3T2WhVhbiLr%2FqkAfuwfXLD1IEgfSAhErKyyfDWcha6jAeN23FKNdlJiKViBb0nmvwtx39msUpd7DzkMOgOMN2QgV1oh39pC2%2BIYr9sonUhXHABkCZC06PboTeLO86MsqxdtEiYm7oE1A%2B45X8hKF2BMaK1Ovq3QKuLnFKj0xNPj1isLzQdTZ3303qlUqJ97F063fUcBqQcUd7iVZEH9pzdKB3lumobn4nxy6NweGTBVNXsORqhSqnz90aCK6zmC2B2kPvZl%2F9sRvqff4w5xBKFJ3G3LHM1%2BYurkYsNtlITx1GDCErBAKXXvTP4vtPX%2Fta4K%2FzHBCwpCmMEU%2BEiWjvr3C7Y1qaIDfVtL%2Fk7IiGSpC9Q4Jkwjf7SyQY6pgGRfCv1dGt46kAoqMNAtiCjp6MwPR93cG7H%2BRVz1Axx3mEjE7VjevtarZgEm44Y2gvq6vtSAxLdxnCi5TeE%2FxRB%2BUW%2FDxMjK%2FrgNS5dMffGS5heSZf4TIBjzncEzGnn9HUOroSXBktmCSE5QXWzfbJIQDOD1d2tfAMCG09pZK%2FPwjiX%2FN63ZpPB4kg5bRN6QQ2krP1cwAaY1KeCBRhWQmD7gWPErGhl&X-Amz-Signature=0821221d8a7771f5f283cbc10edfc9cc6c283af4541ebee997543c8bbade0b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676CDXZRY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoHAkl61iHS8amKUQZF9jnJPbDiCCtzu9ny5lERgCRVAiBqdzJGWkBXhP8tWlpnHIChwvZpT8yTrMHv5NMDt4jxsiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmpzrI%2F2jJJtRaGhKtwDuL91PhxUUFaSrqLYsgkmB1BPLmjRSh7MpxfivFn91WRJDsI4RL2wikxsQnRtHU4R9HpqoY8EHQffGnTcWwCwF%2Bwi24%2FOj%2BV1OCmwg7e13quiXZ6ZRnQo6461auoNwPnZWf6E1jEKxdfZFYkH4MOJyYdJUySrC8fPXr7hIeoO4lNkJoLVGoT%2B9MT4WlXLE3ZLn%2BYCG2%2B3sTLAqOKK%2Fcj78ASGnFELG9uqXPrsDVjsDiirpSsBNUGyU3IwYkIcIq2XUMHNBQluty3T2WhVhbiLr%2FqkAfuwfXLD1IEgfSAhErKyyfDWcha6jAeN23FKNdlJiKViBb0nmvwtx39msUpd7DzkMOgOMN2QgV1oh39pC2%2BIYr9sonUhXHABkCZC06PboTeLO86MsqxdtEiYm7oE1A%2B45X8hKF2BMaK1Ovq3QKuLnFKj0xNPj1isLzQdTZ3303qlUqJ97F063fUcBqQcUd7iVZEH9pzdKB3lumobn4nxy6NweGTBVNXsORqhSqnz90aCK6zmC2B2kPvZl%2F9sRvqff4w5xBKFJ3G3LHM1%2BYurkYsNtlITx1GDCErBAKXXvTP4vtPX%2Fta4K%2FzHBCwpCmMEU%2BEiWjvr3C7Y1qaIDfVtL%2Fk7IiGSpC9Q4Jkwjf7SyQY6pgGRfCv1dGt46kAoqMNAtiCjp6MwPR93cG7H%2BRVz1Axx3mEjE7VjevtarZgEm44Y2gvq6vtSAxLdxnCi5TeE%2FxRB%2BUW%2FDxMjK%2FrgNS5dMffGS5heSZf4TIBjzncEzGnn9HUOroSXBktmCSE5QXWzfbJIQDOD1d2tfAMCG09pZK%2FPwjiX%2FN63ZpPB4kg5bRN6QQ2krP1cwAaY1KeCBRhWQmD7gWPErGhl&X-Amz-Signature=212494984cad2b6aa9f2f8f5c7021758effe4a8d344b51ab47dfcaea58217679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
