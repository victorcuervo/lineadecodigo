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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2OAVHGK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BpGFZnBdFGbT%2BwZXR7Uhm6moNaf5NfVakhMco9kEv5QIgCIxB8BGMPpnIgW8lP536N8AAUSkBOC6j2A402FRCKCQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHL06ne2Wihn55sOiCrcA5OI70k6aALsdmsGNcWm%2Fq%2BqXzPJT7oldWZivYjhlgR4vZVkYPZwzDqRsC7FIC6MJlnocLVzpMHVRH2N7frXXhEUcCHoc4wLFKelV4mKM57cRziSVj6wswAVDKSvXoweRI3sy8rJDdCnuXu7C1H0mcGz3YinaI7JK7LuRvf%2BLmHgZtndMpu390KgsIcuM6DcUJh%2ByUSKhdoan1HfCh3usGwWyXXiLwIYEZENBFHvyDvZT7I%2B6w9%2FFbZfWYTPUiEQaRVF%2B%2BfHKvySOgO3p1k2m%2BBfGlr2q4E1q%2FT0mQf9MGTane3avh07ybms2tz79c5EPFprxhvaHNf77TEjpZMAmFcfaVT6Uym3wMwx3IBbBOlG1hsPAJZbHqwQf7czbssS6%2BItVHrR%2FpxOAclQoLRU%2BI5RAp42LO3UgFCK4dJrRXQn1QmSnrd5nyQ%2FMEMmr2kYeZ4Ljy9Pm8ViUKfUhJMfpG3mYFU63Q42GtMwYK2DB%2BiS%2BPyMSOBAnzqQZmCacVOZvi5NmXR8IhBVKpsII1qDpoQ6%2FNwRSP16E%2FYUyTcBZDlcEm3y%2Foh7VzNwAenPOymdiln414O%2BPoeC4I4xwJp3wCUVTCabPSweV4OxQA4xIadtU54rotJ8WopthPGXMNytjMoGOqUBo1Vdtr04LlrMFzr7pOeJopq91Ni80TPA9kjXzwd2aCqQxuq%2FGHhnXdYENAma0EW3fNTC79AekQce7FomSdrMVti%2F%2FxYDkN11ywHyYLyRlSeGsAF6qDUwFP8BPAcUJOfHlN1rANsRt7CKV5c6q7zII3NOY8gwdy9gx8M%2BMIRKARE3Sz3EdtnA07xdZjoNANfaXNJXt6oF%2BHTLBfgFOuakEU0a43XK&X-Amz-Signature=f047876381b1fbcc63ea6e8b6786283324e2ea8102bd2a48bd218e367d13c76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2OAVHGK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BpGFZnBdFGbT%2BwZXR7Uhm6moNaf5NfVakhMco9kEv5QIgCIxB8BGMPpnIgW8lP536N8AAUSkBOC6j2A402FRCKCQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHL06ne2Wihn55sOiCrcA5OI70k6aALsdmsGNcWm%2Fq%2BqXzPJT7oldWZivYjhlgR4vZVkYPZwzDqRsC7FIC6MJlnocLVzpMHVRH2N7frXXhEUcCHoc4wLFKelV4mKM57cRziSVj6wswAVDKSvXoweRI3sy8rJDdCnuXu7C1H0mcGz3YinaI7JK7LuRvf%2BLmHgZtndMpu390KgsIcuM6DcUJh%2ByUSKhdoan1HfCh3usGwWyXXiLwIYEZENBFHvyDvZT7I%2B6w9%2FFbZfWYTPUiEQaRVF%2B%2BfHKvySOgO3p1k2m%2BBfGlr2q4E1q%2FT0mQf9MGTane3avh07ybms2tz79c5EPFprxhvaHNf77TEjpZMAmFcfaVT6Uym3wMwx3IBbBOlG1hsPAJZbHqwQf7czbssS6%2BItVHrR%2FpxOAclQoLRU%2BI5RAp42LO3UgFCK4dJrRXQn1QmSnrd5nyQ%2FMEMmr2kYeZ4Ljy9Pm8ViUKfUhJMfpG3mYFU63Q42GtMwYK2DB%2BiS%2BPyMSOBAnzqQZmCacVOZvi5NmXR8IhBVKpsII1qDpoQ6%2FNwRSP16E%2FYUyTcBZDlcEm3y%2Foh7VzNwAenPOymdiln414O%2BPoeC4I4xwJp3wCUVTCabPSweV4OxQA4xIadtU54rotJ8WopthPGXMNytjMoGOqUBo1Vdtr04LlrMFzr7pOeJopq91Ni80TPA9kjXzwd2aCqQxuq%2FGHhnXdYENAma0EW3fNTC79AekQce7FomSdrMVti%2F%2FxYDkN11ywHyYLyRlSeGsAF6qDUwFP8BPAcUJOfHlN1rANsRt7CKV5c6q7zII3NOY8gwdy9gx8M%2BMIRKARE3Sz3EdtnA07xdZjoNANfaXNJXt6oF%2BHTLBfgFOuakEU0a43XK&X-Amz-Signature=ebac2dcef031dcadf94f3afd2a11d251443ae6519cfbd4acceed66e2a3072bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
