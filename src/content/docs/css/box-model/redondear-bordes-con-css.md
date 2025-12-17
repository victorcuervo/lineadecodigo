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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAGS6F2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH1GOw8BJ0qVyUwMgneRDX7cgxnWKjbALjepdRP3%2FyaACIEQ7grVQeLBM%2Bs9PPR99%2BTx%2F1Y4UPEBrTw6VZMKld7ZXKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw820pxisH9B%2F8NtaIq3AMTMtulOkSxx7j22Qbi13Q1Q31tWHzRhKI6nKgs1aBoGVSVuX%2FAhzPcQugD9TaVH5g5PnO3vNyZj3sTfm5AClM1%2FoO4pltwZA38AuApStxtKjoz00hs%2FrCSOByLVBzKYBLyATdPyT5Z3OKEDl%2FQnkrVGbjUZdcZFK4YNYTxSr2Bkat%2BTixy9fRXMDhQUR6wS9GANK9Wm44xAqEsN%2FHqs7BoUEHcuVjiiRkwQXr6KAXW9IJD5%2F8xL5Efkd7p2jmJPBbhJ7c7Sih56kTrh16SvwEDZIpBE1Ay4VMCi54FY9g2sywJ%2Bijr%2B1srGPQ74v%2BB3AawooQfDWd3Z%2FpfHvPYQe8VWVfe%2F8gXnq9XDMczQ0B8m%2BmHICaxzTrcAFvB%2FEl5pG5niKoZWId4yb7dePMquxhwV%2Fc4TbwBifJG%2BOszuHot3GtZOEWx4L8U6%2F01RhsxhceGB3s23OoL%2BdvdjB6pC8oav1LpNicgxR8Ic3X%2F%2BHjUcflZC5dxx17tK%2Fy0sfPVfV1g1jV%2Fwx993Q8HVQjAdpbOCMfYysuqPjgd2OGiwCnTIhSz2%2FuvM1ridZOzz4ZyS5tOXGDHDButUb%2Fme%2B%2FGxeWZPcEOxY6WPjnYUERO72yGlfPE4NCaknCBreRpXDDfiozKBjqnAYYrRc86d8bAE1s8yLlSimwIWHwbEb5VGz0L%2BNo2myXIlzX0YLa9ngec1W2suI5jSk%2BUZgfFVbkKPz3%2Fvo236WKBfixrQPY6U6rs3JjscIlvP6sBKo1GLJoer7m%2Fom4lwsxBan6yeCDnKQgjFvUbEQGXHuSJcAvvE2vd3mD3JBa9QZJ%2B%2BfcFhpMc1no7DJzlrabdUmfktWlQe1zCbJT351txtUvTPa%2FU&X-Amz-Signature=6ae33e4be002fe63dea033ae5d939306d6add4e86628ce38f18a92198c56c175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRAGS6F2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH1GOw8BJ0qVyUwMgneRDX7cgxnWKjbALjepdRP3%2FyaACIEQ7grVQeLBM%2Bs9PPR99%2BTx%2F1Y4UPEBrTw6VZMKld7ZXKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw820pxisH9B%2F8NtaIq3AMTMtulOkSxx7j22Qbi13Q1Q31tWHzRhKI6nKgs1aBoGVSVuX%2FAhzPcQugD9TaVH5g5PnO3vNyZj3sTfm5AClM1%2FoO4pltwZA38AuApStxtKjoz00hs%2FrCSOByLVBzKYBLyATdPyT5Z3OKEDl%2FQnkrVGbjUZdcZFK4YNYTxSr2Bkat%2BTixy9fRXMDhQUR6wS9GANK9Wm44xAqEsN%2FHqs7BoUEHcuVjiiRkwQXr6KAXW9IJD5%2F8xL5Efkd7p2jmJPBbhJ7c7Sih56kTrh16SvwEDZIpBE1Ay4VMCi54FY9g2sywJ%2Bijr%2B1srGPQ74v%2BB3AawooQfDWd3Z%2FpfHvPYQe8VWVfe%2F8gXnq9XDMczQ0B8m%2BmHICaxzTrcAFvB%2FEl5pG5niKoZWId4yb7dePMquxhwV%2Fc4TbwBifJG%2BOszuHot3GtZOEWx4L8U6%2F01RhsxhceGB3s23OoL%2BdvdjB6pC8oav1LpNicgxR8Ic3X%2F%2BHjUcflZC5dxx17tK%2Fy0sfPVfV1g1jV%2Fwx993Q8HVQjAdpbOCMfYysuqPjgd2OGiwCnTIhSz2%2FuvM1ridZOzz4ZyS5tOXGDHDButUb%2Fme%2B%2FGxeWZPcEOxY6WPjnYUERO72yGlfPE4NCaknCBreRpXDDfiozKBjqnAYYrRc86d8bAE1s8yLlSimwIWHwbEb5VGz0L%2BNo2myXIlzX0YLa9ngec1W2suI5jSk%2BUZgfFVbkKPz3%2Fvo236WKBfixrQPY6U6rs3JjscIlvP6sBKo1GLJoer7m%2Fom4lwsxBan6yeCDnKQgjFvUbEQGXHuSJcAvvE2vd3mD3JBa9QZJ%2B%2BfcFhpMc1no7DJzlrabdUmfktWlQe1zCbJT351txtUvTPa%2FU&X-Amz-Signature=3f4459aca94d915e565a8bedb590fb367491f57ee3702f32437a3c88f9557dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
