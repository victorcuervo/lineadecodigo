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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHXXZHI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDCBwqeQKdJQ8FrLfn50%2F1cyQ%2FJ%2BWgVJmpvdewBmdb4AIgNmm6AF9etx%2BKEyumUuUVpG38qvJZOLIk%2Biolw5v7A6Yq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKMb4Q0qSDomAvmoSCrcAw3gd371Pl8XXENeYsBhyiEqx%2F3qMG07vfwd9PVYjyLF0lOofM4RDR363ow3Di%2B81ZdndvqXCJ4dP3nJTqvZKzzYXe4hYWFzCpjv1jL7aUtzSvtS1LdrqlOBsl269TjMIVcJRYp83faNcgwHoihO0imOrbaU0n2rh6LLZBK%2Fd6R9uF%2FZmPF6hsdn2JGVv1T7vVeEnYgq8d4Mm661WVs97rgJTZ8TL4EHBgUMKuE22jtkP%2BU89g0Wt8k1BOehDxrdGXyn%2B4tsWJKYBJ4K15pOvSIQoHfP%2FwzM8up03qaPJTMvHsiafuMImruQi5DTJE6OTC%2Fh5dKsuwliCg1cRyU9yneslT7o2%2FVG%2F%2BTTPWJ1s82SRIQF8pUeo2jwOwCRauh2y7jJa2WahriNVVKt5iXF4yiTBDFaieBsw6yPlWxD84AaoqcaiBKHKdKkpTKpz2IU4YwlFdwqxQ%2FH%2FP%2Bujt4WzBk%2BoKSQwIo%2BDchsAnMUa9OwJeF2zq5iiTilLO1AZ3UuKsUAcToz3O5xkzqplWOLPMPi3rrE%2FeLsOBUjC9b%2FYNS6wAtwdko1U6tlzHgSZl4QiFWEfUf1p6grf6RJFYx%2BFjJTm0nR0DfBvcEq%2BaRnVOmFJWht2%2B2hQjjJdQG3MKS4icoGOqUByYoh0UR%2BHhN93yU26YyALdQjapHv%2FGiTszwbYhoMTpTqXQ2NzFqX9ygnNnD8GDfg0qG%2B%2Bf4cvZ5BdO95uaM5S%2FLQqiOqfDgkaGkSDZgfPHPCj1pNUtbB%2BQtDcOl%2FekSgDNhhqZhBi8rAxKSFKQme7mN6SqJaexw9%2FDD26ZnPXXBW9hfFpqr7gqrLrSb8Y6sKRjBLH12SYTVkL6VLNc6a8EvEDXHW&X-Amz-Signature=9b498eb018b810e561b93c4ad1bd357909ca5f1bd8a11647546a9f2288a88c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHXXZHI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDCBwqeQKdJQ8FrLfn50%2F1cyQ%2FJ%2BWgVJmpvdewBmdb4AIgNmm6AF9etx%2BKEyumUuUVpG38qvJZOLIk%2Biolw5v7A6Yq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKMb4Q0qSDomAvmoSCrcAw3gd371Pl8XXENeYsBhyiEqx%2F3qMG07vfwd9PVYjyLF0lOofM4RDR363ow3Di%2B81ZdndvqXCJ4dP3nJTqvZKzzYXe4hYWFzCpjv1jL7aUtzSvtS1LdrqlOBsl269TjMIVcJRYp83faNcgwHoihO0imOrbaU0n2rh6LLZBK%2Fd6R9uF%2FZmPF6hsdn2JGVv1T7vVeEnYgq8d4Mm661WVs97rgJTZ8TL4EHBgUMKuE22jtkP%2BU89g0Wt8k1BOehDxrdGXyn%2B4tsWJKYBJ4K15pOvSIQoHfP%2FwzM8up03qaPJTMvHsiafuMImruQi5DTJE6OTC%2Fh5dKsuwliCg1cRyU9yneslT7o2%2FVG%2F%2BTTPWJ1s82SRIQF8pUeo2jwOwCRauh2y7jJa2WahriNVVKt5iXF4yiTBDFaieBsw6yPlWxD84AaoqcaiBKHKdKkpTKpz2IU4YwlFdwqxQ%2FH%2FP%2Bujt4WzBk%2BoKSQwIo%2BDchsAnMUa9OwJeF2zq5iiTilLO1AZ3UuKsUAcToz3O5xkzqplWOLPMPi3rrE%2FeLsOBUjC9b%2FYNS6wAtwdko1U6tlzHgSZl4QiFWEfUf1p6grf6RJFYx%2BFjJTm0nR0DfBvcEq%2BaRnVOmFJWht2%2B2hQjjJdQG3MKS4icoGOqUByYoh0UR%2BHhN93yU26YyALdQjapHv%2FGiTszwbYhoMTpTqXQ2NzFqX9ygnNnD8GDfg0qG%2B%2Bf4cvZ5BdO95uaM5S%2FLQqiOqfDgkaGkSDZgfPHPCj1pNUtbB%2BQtDcOl%2FekSgDNhhqZhBi8rAxKSFKQme7mN6SqJaexw9%2FDD26ZnPXXBW9hfFpqr7gqrLrSb8Y6sKRjBLH12SYTVkL6VLNc6a8EvEDXHW&X-Amz-Signature=3cadb5399ee951a06f9d1258a9a578f3854982b4b43f3aa1434265bf276dfc38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
