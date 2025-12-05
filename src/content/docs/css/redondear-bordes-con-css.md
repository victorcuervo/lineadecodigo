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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KL6ZSN6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnBtPnlSecMw4kGKRsfZGgWmEeUKgL7sRToiFu7WUJrAiBEze%2F8m%2FSSu9PSdAs5qfCUDNKjeNMSWLk%2B8%2FdTgKPWYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMW7W%2F4IXXfUPVPoSyKtwDlgTuqDj7GgvAWfwbqKw8ukTc%2FbEyL2bKsg9hjWbL2uHypOyJRBYmdguA2x7zbb9zKin6OGhSokvFUeMfxMasghDrMulfCOYQVHm3EiL0Rj0Jry6y2WmmQIx121HcNDKNb%2FNsvnBeDhLXuXsTHhB3RKkGOVys7H3UCpP3wglXxZ19s1y%2BhxtJpcP1bwihZHu7wlMuM6D9vDCDlpXhXSTMfAWx40THBRDJoVzAJ0n4YSGo59wPNLvyAN9LGFzf3N04j3lpIwCu7zaR95gf%2BFZ1A4cKs%2BZYyv6U%2BWt2mhQo4Jih7ZOwggncp7wkkn%2FGoIm1fkY%2BMfFmDSEuKXhAwNUjY0pEkP%2F4OqM%2F67ctJt89qFGhhP%2Fgu3lJ1U6gAzy%2BHztmOpAI%2BntEqjEjyp5ivM0NMUbzt7VltMrs%2FwjJErN7R1UHC%2F3Mr2gKvj%2FC34SYSxyCuO9r%2F%2FJfv1gucvQJfEByIrar6um581T9WMu6Mkh4Ate801%2FgK70Nn87RHUew9xjHwWg2RiAJb%2BhB4o7xPvzhFkKeHCKWPUzIa8yFdet3LcQ90N7yb7AuGlpGZ7ehfIqUS%2BIu%2BsYXECsLBw27n5hhVPPsFFz9Xk9pTVuRxnUiX0cZwhyZaOVxhJdpZxYwgM7KyQY6pgHqWMriJJfVMxaCPtExP509JlMlHuIRvxvxsz8Rskke%2FsKv9vFp%2FSn7j1C2o27Hc49IoFEy6TFeL8NVNFdEkWb40gtKfS2FRK%2BVlhn3gEPYhXKZ%2B6GQ5lSibBnGgxYRaVt6aAVMoVDAEG1LQNX6s8gVzVrMiBlobdBjFCiMIWGjDJBltfs3l1ExiUpdegiuPQn7bZCf5OhjlArDz0KQRZaHm7VOmQ6E&X-Amz-Signature=ab1f912d64e5763028c00b299adf02af0e664508b814bb612e4b1f24fe9497e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KL6ZSN6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnBtPnlSecMw4kGKRsfZGgWmEeUKgL7sRToiFu7WUJrAiBEze%2F8m%2FSSu9PSdAs5qfCUDNKjeNMSWLk%2B8%2FdTgKPWYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMW7W%2F4IXXfUPVPoSyKtwDlgTuqDj7GgvAWfwbqKw8ukTc%2FbEyL2bKsg9hjWbL2uHypOyJRBYmdguA2x7zbb9zKin6OGhSokvFUeMfxMasghDrMulfCOYQVHm3EiL0Rj0Jry6y2WmmQIx121HcNDKNb%2FNsvnBeDhLXuXsTHhB3RKkGOVys7H3UCpP3wglXxZ19s1y%2BhxtJpcP1bwihZHu7wlMuM6D9vDCDlpXhXSTMfAWx40THBRDJoVzAJ0n4YSGo59wPNLvyAN9LGFzf3N04j3lpIwCu7zaR95gf%2BFZ1A4cKs%2BZYyv6U%2BWt2mhQo4Jih7ZOwggncp7wkkn%2FGoIm1fkY%2BMfFmDSEuKXhAwNUjY0pEkP%2F4OqM%2F67ctJt89qFGhhP%2Fgu3lJ1U6gAzy%2BHztmOpAI%2BntEqjEjyp5ivM0NMUbzt7VltMrs%2FwjJErN7R1UHC%2F3Mr2gKvj%2FC34SYSxyCuO9r%2F%2FJfv1gucvQJfEByIrar6um581T9WMu6Mkh4Ate801%2FgK70Nn87RHUew9xjHwWg2RiAJb%2BhB4o7xPvzhFkKeHCKWPUzIa8yFdet3LcQ90N7yb7AuGlpGZ7ehfIqUS%2BIu%2BsYXECsLBw27n5hhVPPsFFz9Xk9pTVuRxnUiX0cZwhyZaOVxhJdpZxYwgM7KyQY6pgHqWMriJJfVMxaCPtExP509JlMlHuIRvxvxsz8Rskke%2FsKv9vFp%2FSn7j1C2o27Hc49IoFEy6TFeL8NVNFdEkWb40gtKfS2FRK%2BVlhn3gEPYhXKZ%2B6GQ5lSibBnGgxYRaVt6aAVMoVDAEG1LQNX6s8gVzVrMiBlobdBjFCiMIWGjDJBltfs3l1ExiUpdegiuPQn7bZCf5OhjlArDz0KQRZaHm7VOmQ6E&X-Amz-Signature=4dda3eb031264543f330e938141aff5fe0ce112e7f4338bb4265352247f7fee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
