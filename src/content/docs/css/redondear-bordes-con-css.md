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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JDLU4J%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFkjjb4fNeJ4YrPusbaErjDIQE%2FBiiLl2lkrQJSY4xtgIhAIgpVLxGAydYIrZnICHNeux0ytOyN0J88PMDAmILjJBYKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3Q%2FZf%2F7qNmtiyC3Uq3AONLmUm2iJHJrBh1ysHZQOnLhT2L9hnL7rctlM0EYwwBqkQWOEMrlJVcAcBvL20y6VXIDTZ94Yj1%2BfaKvJgPUY%2BRCWX5%2FsLi4vRO4xAULhaAyr1YZ49YKJEUd5Y8e3NaXtgXggzOs8v3b8la6cjXenqjtiUkAc87wM4Gk7giira%2B3%2FgAkBDgnnbLaQ6vg5GT4%2FYW79JjWzEz1%2BZH6ld68ABbSh7iUFRDneIuKFCXMyI%2B67Y%2FgXZ8mn2BbtpyFjP3D5lVaJAN640FRcwW2qFuFPz1i7SryWMSNq2iZEsalGVMF%2BRZDOQxdoKkaD69s%2Fs661n3yOx8kTDyoxQmSZcSeQsmNNuDW1XAIBeoRSqbZBvcU%2BKk5gBoszlGlFrnLoD3oI0cyQdRzsf7p5kpDS5P%2BCa61x3S12FzEAkuCWvV8aCWZJeAv4c2VuV1MNISPLpEva%2FrQFKGoeaeEIhftoS1UbHXo%2Fehbu2VjpzQaklv%2FeHuCPJ2fYWdpPkHkcqRlRgXvnzgwMuqMe8rensHqP9XqGNhP2RvRFuM86%2FOoAetM%2Fkjxb98AtX99hocGgW1iqN9a8r0kHVnF6t60x0Lds8ClyTsoPP0rKYhcEPv1XMo8qyzO%2FwRs9psChJxNLlVTCmxN%2FJBjqkAVnKn89HZQU9lKhNt%2Fh7y%2F9%2Fh8hDQj3uhgfgXmAmxCfEyeDe34%2B%2BkaJAP1qneByn8oH104X9ymhHyuIXyvCQEF6JY2QFQrOjyKK6KEjdHlWU03Fuuu18BVKbiudfb%2BDEd0llZQ49m9pdYCM4md4IeIW95rVROn%2Bo4M0H140FdiJ%2BUaX4FRPgvRRcbrLPtl18xENXHZf9Rvh4vTK%2FYGddG9wF8LIs&X-Amz-Signature=2dd50c58ac7bc4a2e0a4c8b16830a789cdf9e326978ed7d852e3c79e31d69e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JDLU4J%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFkjjb4fNeJ4YrPusbaErjDIQE%2FBiiLl2lkrQJSY4xtgIhAIgpVLxGAydYIrZnICHNeux0ytOyN0J88PMDAmILjJBYKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3Q%2FZf%2F7qNmtiyC3Uq3AONLmUm2iJHJrBh1ysHZQOnLhT2L9hnL7rctlM0EYwwBqkQWOEMrlJVcAcBvL20y6VXIDTZ94Yj1%2BfaKvJgPUY%2BRCWX5%2FsLi4vRO4xAULhaAyr1YZ49YKJEUd5Y8e3NaXtgXggzOs8v3b8la6cjXenqjtiUkAc87wM4Gk7giira%2B3%2FgAkBDgnnbLaQ6vg5GT4%2FYW79JjWzEz1%2BZH6ld68ABbSh7iUFRDneIuKFCXMyI%2B67Y%2FgXZ8mn2BbtpyFjP3D5lVaJAN640FRcwW2qFuFPz1i7SryWMSNq2iZEsalGVMF%2BRZDOQxdoKkaD69s%2Fs661n3yOx8kTDyoxQmSZcSeQsmNNuDW1XAIBeoRSqbZBvcU%2BKk5gBoszlGlFrnLoD3oI0cyQdRzsf7p5kpDS5P%2BCa61x3S12FzEAkuCWvV8aCWZJeAv4c2VuV1MNISPLpEva%2FrQFKGoeaeEIhftoS1UbHXo%2Fehbu2VjpzQaklv%2FeHuCPJ2fYWdpPkHkcqRlRgXvnzgwMuqMe8rensHqP9XqGNhP2RvRFuM86%2FOoAetM%2Fkjxb98AtX99hocGgW1iqN9a8r0kHVnF6t60x0Lds8ClyTsoPP0rKYhcEPv1XMo8qyzO%2FwRs9psChJxNLlVTCmxN%2FJBjqkAVnKn89HZQU9lKhNt%2Fh7y%2F9%2Fh8hDQj3uhgfgXmAmxCfEyeDe34%2B%2BkaJAP1qneByn8oH104X9ymhHyuIXyvCQEF6JY2QFQrOjyKK6KEjdHlWU03Fuuu18BVKbiudfb%2BDEd0llZQ49m9pdYCM4md4IeIW95rVROn%2Bo4M0H140FdiJ%2BUaX4FRPgvRRcbrLPtl18xENXHZf9Rvh4vTK%2FYGddG9wF8LIs&X-Amz-Signature=4f0012cc1547ee34e653d1e77bdcbf65e25b82eea7eeaa5d234b8a9e1fbca149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
