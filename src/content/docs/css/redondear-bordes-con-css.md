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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRC5DAZV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfbYQ4MRFxUnSiNRwsqhgGTAayCQNL01TKpSbu0VIVUAiEA05PCrfD6iP%2FIdGlU3NLHFObSjeEHnb%2FZQNTdemMXL7oqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8HtS0RKvtdcSozWircA7zCgc59djxBZGNxpBUz5BpOrWXS0%2BwSk80Eg9sC0vOWvbX70t28GjYg0ANRnHV829nvLhstOAPuoFRwJKCr%2FihXN1Kpgqhb%2F0FfIru7sSLwArlacIBIIe7umHNCDF2pbbXc3JK8%2BvcLkBEAd5XSsFO6WovP%2FQEdAY7BCXauJ0nUZZ%2FqjrB0FJPrfMZ0nPDhA8c3Z02pQuNAdVB0zAzjqDWqqvZOb9%2BqhfTvVGJQU2cr4Pb9Um6Kt%2BEGx6vXH5ZD3qilObRQrSASXWiWegnK14Jz%2FHqm12MPF9A%2B0h%2BYjITex4csiM2zSqrKUbzRAsY%2FlNYcUTVuzJUKuLDi5IcthAld6risLlAsxVpcqYfskd%2FtqrCaQW9qpZ8KORLcSxjuquzJ664C3PGaD%2BmCgZCz%2FBvrI6iN5nIZswPjull4EHpvwLAoMw99b7w4yrm238%2FiWcYaUduJpnS0Z%2BYwebUN3mYZAx0gCG%2Bm9vUOr8IP%2FWufqG%2FupxX0Fw6oEHY%2Fv1iMpjB%2Bp6VDJgEAMyPZpZIehYW135fSrlyIwBFGCQUuSnbYrx1AOFFFg%2FaDtj0PlKylv16wpTz9zzIfY2MzGq8cWUz%2F5wR%2BKMviBD1wrUF5RWmpHN5zRbG%2BGdzruSoDMJmh2MkGOqUB%2Bfcy54UEce70UCrnpmILJckQt7noxUOmwjeCdsoKFkxUFJXk48o%2FFGpDv1HSc7CzqH7J8dwxtd6%2FC2kkoJAiKTh94UqKWsjz1oXRid0tyz0oylLuSBOtytueID4Caru0Ka29DgBFSdkTiZfLQaWMi7UOjOieEIGzB7T0AiPw4ToDBDy%2BbmfOSt0uVR%2FW%2BBWN%2Feb%2FwhwmgaieLjx0Gwwax1o3Y3Pu&X-Amz-Signature=f62bb205a1be251033a07cdb7022ec2a0a01c3b5d67a72dc283619b43801b41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRC5DAZV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfbYQ4MRFxUnSiNRwsqhgGTAayCQNL01TKpSbu0VIVUAiEA05PCrfD6iP%2FIdGlU3NLHFObSjeEHnb%2FZQNTdemMXL7oqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8HtS0RKvtdcSozWircA7zCgc59djxBZGNxpBUz5BpOrWXS0%2BwSk80Eg9sC0vOWvbX70t28GjYg0ANRnHV829nvLhstOAPuoFRwJKCr%2FihXN1Kpgqhb%2F0FfIru7sSLwArlacIBIIe7umHNCDF2pbbXc3JK8%2BvcLkBEAd5XSsFO6WovP%2FQEdAY7BCXauJ0nUZZ%2FqjrB0FJPrfMZ0nPDhA8c3Z02pQuNAdVB0zAzjqDWqqvZOb9%2BqhfTvVGJQU2cr4Pb9Um6Kt%2BEGx6vXH5ZD3qilObRQrSASXWiWegnK14Jz%2FHqm12MPF9A%2B0h%2BYjITex4csiM2zSqrKUbzRAsY%2FlNYcUTVuzJUKuLDi5IcthAld6risLlAsxVpcqYfskd%2FtqrCaQW9qpZ8KORLcSxjuquzJ664C3PGaD%2BmCgZCz%2FBvrI6iN5nIZswPjull4EHpvwLAoMw99b7w4yrm238%2FiWcYaUduJpnS0Z%2BYwebUN3mYZAx0gCG%2Bm9vUOr8IP%2FWufqG%2FupxX0Fw6oEHY%2Fv1iMpjB%2Bp6VDJgEAMyPZpZIehYW135fSrlyIwBFGCQUuSnbYrx1AOFFFg%2FaDtj0PlKylv16wpTz9zzIfY2MzGq8cWUz%2F5wR%2BKMviBD1wrUF5RWmpHN5zRbG%2BGdzruSoDMJmh2MkGOqUB%2Bfcy54UEce70UCrnpmILJckQt7noxUOmwjeCdsoKFkxUFJXk48o%2FFGpDv1HSc7CzqH7J8dwxtd6%2FC2kkoJAiKTh94UqKWsjz1oXRid0tyz0oylLuSBOtytueID4Caru0Ka29DgBFSdkTiZfLQaWMi7UOjOieEIGzB7T0AiPw4ToDBDy%2BbmfOSt0uVR%2FW%2BBWN%2Feb%2FwhwmgaieLjx0Gwwax1o3Y3Pu&X-Amz-Signature=81ba517cb5d1804a660b9d52464a4c9e0bb8182733ed3e89b502e73d0804670a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
