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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMTC3NGT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzZKSfY5O10SANfl0M6M9J3018T5k3Lnc1zVpyXTpayAiBnDovzRRURByzDkbmXTQEWdZAJasWHROErnklFabIYgSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4yh%2FOliNUQPkxL0jKtwD%2BT0zvPW3%2BmH5BR0zkmoF30%2FmuQRh%2BpBLJKQ5JLnU%2FeF0oDC%2B5mc0aAC2SlvgX1y%2FKIKfMVhVul6uX9dKyjGiZJhD7lYSgiTMICATJrerYNvoKTcrCMkyWYOXIV6ldHZIwPyyXbwRVRu03ZDZ9GMy41aXjyNgY9x802opFJpC8QL6NuGa7OQ3mvz5aqwF12ULAVvQ4iLSQ0CCi5RRMyT%2B9eyiBeYF6%2FwG7ZDEBcOn2Xv%2BrAyS6W1xbK0Rd3MAhIZ0d2SKRZsHS%2BwyR24XGVOz9q8uECnSTTNw9aEwGhxSaPi%2FlBxVP0q%2BxCo8AsNm%2FLbKaRYpVyCF5U%2FiJZUtqcG5%2BE%2FPuQBWDqS1WdGv1wp6nfPZ1QYFZBKjI8sweHqn4iyjkIBFAUTURJo1CoWhMnzgfo8ZHAOvlf9F1TWmVICJvwNyoy9kOpUkpxassTVBt4PbBak3MibIFDOrVfuy2H7dq9zKymbixqHw71qOICVzgkgn8URkG%2Fx0qr7EqfWV9KuD0Z37MLzgIJu7Cxzr%2BE2X%2FjqRSkxqzOc%2B2dd7r72UW7yV6qVcYfHyhy5r1SIszJsQxO11pNjgVysVboNGXiYWhKQEQhN%2FZzMJksO4AxyuYAKerXT50U3tmuJVvm4w%2FpTZyQY6pgGvaZmCdMHep%2BVgncrIAidJthKbFqWdWm6hglHtOSQM1JChIv5laWrMEYGFjtIHn1QP4RFlRXIuKrGL7yfbfwPbtIBGEOhUij4hP5IYdGuFgHo9rrGe8Oqy%2FK1ygmccXO2PRlcGixSFtaYwjrEdmlApSQrCcb7JaKo8YnN5M0s7NqSQXGhNCrD9iqXoNnMCl7EhzvzIxWYs0mdxRm0rrqt%2BIsKM8ZD8&X-Amz-Signature=3688c2b5788e7dd1a2ae2bc2917a549bb1de0ba06082e624138325e7e1aabf62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMTC3NGT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzZKSfY5O10SANfl0M6M9J3018T5k3Lnc1zVpyXTpayAiBnDovzRRURByzDkbmXTQEWdZAJasWHROErnklFabIYgSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4yh%2FOliNUQPkxL0jKtwD%2BT0zvPW3%2BmH5BR0zkmoF30%2FmuQRh%2BpBLJKQ5JLnU%2FeF0oDC%2B5mc0aAC2SlvgX1y%2FKIKfMVhVul6uX9dKyjGiZJhD7lYSgiTMICATJrerYNvoKTcrCMkyWYOXIV6ldHZIwPyyXbwRVRu03ZDZ9GMy41aXjyNgY9x802opFJpC8QL6NuGa7OQ3mvz5aqwF12ULAVvQ4iLSQ0CCi5RRMyT%2B9eyiBeYF6%2FwG7ZDEBcOn2Xv%2BrAyS6W1xbK0Rd3MAhIZ0d2SKRZsHS%2BwyR24XGVOz9q8uECnSTTNw9aEwGhxSaPi%2FlBxVP0q%2BxCo8AsNm%2FLbKaRYpVyCF5U%2FiJZUtqcG5%2BE%2FPuQBWDqS1WdGv1wp6nfPZ1QYFZBKjI8sweHqn4iyjkIBFAUTURJo1CoWhMnzgfo8ZHAOvlf9F1TWmVICJvwNyoy9kOpUkpxassTVBt4PbBak3MibIFDOrVfuy2H7dq9zKymbixqHw71qOICVzgkgn8URkG%2Fx0qr7EqfWV9KuD0Z37MLzgIJu7Cxzr%2BE2X%2FjqRSkxqzOc%2B2dd7r72UW7yV6qVcYfHyhy5r1SIszJsQxO11pNjgVysVboNGXiYWhKQEQhN%2FZzMJksO4AxyuYAKerXT50U3tmuJVvm4w%2FpTZyQY6pgGvaZmCdMHep%2BVgncrIAidJthKbFqWdWm6hglHtOSQM1JChIv5laWrMEYGFjtIHn1QP4RFlRXIuKrGL7yfbfwPbtIBGEOhUij4hP5IYdGuFgHo9rrGe8Oqy%2FK1ygmccXO2PRlcGixSFtaYwjrEdmlApSQrCcb7JaKo8YnN5M0s7NqSQXGhNCrD9iqXoNnMCl7EhzvzIxWYs0mdxRm0rrqt%2BIsKM8ZD8&X-Amz-Signature=3ff25fdc17c7c9613cf370efafb23f53913a9142a22c9434c30c04065bfd4022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
