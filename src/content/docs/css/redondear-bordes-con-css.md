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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DKBVOV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCztJYd%2FFwpnrxLZUdMbXbVW0JH9QBPNx4ZoKo%2F7uaT0QIhAKEpuEnLKIoU3%2BU%2BGUcuF9kzTXKupgVfvwN0KEsOM83GKv8DCGAQABoMNjM3NDIzMTgzODA1Igw479dfciNS82R8su0q3ANZpPHntgphf626YY3QY8jw3GLqp7x2e8Gw8DwtDP2QYkUTh%2FGlrjfitI6YGfMPKnCuNWfaYj9M6c6qjYm0aJrE%2FSRG%2BJamS7kUSKA8Y5roA%2FZATGBNsIiW8%2BgxBbFE%2F%2BFwr3WvOAPEOHSg3QltIrKt%2Br%2BYIpPMVIAzeFe40It%2BnwA7amyY6IytbYuQiYeCFoE9gkr4IIN4qOEO3nheoZPnDjnHWg3cr5KSo9FJbPwbYg%2FqXXcCvcZh2G2TLNVXHeLetodLI6fqs6orG%2FNaEAl8uOknBpG0Ry9siOM2x4zSYbni7gIUippmar%2F65FKgiiTszP5Nf%2FCFU740Yir8IL2m%2Bu7yO79DRIYcWUMDdyXmk%2BCPnbnEZeyFrBqx%2BGKUa%2BqXM4Cq1hXiN%2BKTexqDSp4hD3oKz7pDwgUxy7E%2BQxm4dZiX7KhN0HfCiL1G3jMc34zx%2FUIWD8lPhSw9WPMNzpArTr4Pgg9yl%2Fx5ICxvjIKJdkj6HGZcIJ7rWZ7BwbssKLL60bY2hJ7xCBlMEQsq7EIgitN9esJf8gPyoO8RTQXwwuevaBx3fh7mr6RgJ4TZhH2464GvJ028R59zQvTp5j4BznlHxqCDqSKH8gppfVoNPQh088SvKgaL%2FhzlRDCL88vJBjqkATAWYQbOXR%2FBNbuQW3LDUvjXOEgrSzijwkUOjNi9csGOhfoOoImSizIrmLaamCNranhqPxiGlRq4pLomGTrc19DvxJQtc638dyrO4ppBzrwMos5HwH0PaYUAYG1YKoV%2FhhzhrlTZNHCrCnLNt8x8Z%2BbRrik5c1K31i1XnTkFQseBnUxXSUbaV8PHecC7zsxwX0KFQ%2B8%2BApcY%2FN4hj6lbMORE%2Bife&X-Amz-Signature=5a74038f1dcaf5876d3600a8cfb281170a85c7fc12b631eb069bb6199e6a8921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DKBVOV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCztJYd%2FFwpnrxLZUdMbXbVW0JH9QBPNx4ZoKo%2F7uaT0QIhAKEpuEnLKIoU3%2BU%2BGUcuF9kzTXKupgVfvwN0KEsOM83GKv8DCGAQABoMNjM3NDIzMTgzODA1Igw479dfciNS82R8su0q3ANZpPHntgphf626YY3QY8jw3GLqp7x2e8Gw8DwtDP2QYkUTh%2FGlrjfitI6YGfMPKnCuNWfaYj9M6c6qjYm0aJrE%2FSRG%2BJamS7kUSKA8Y5roA%2FZATGBNsIiW8%2BgxBbFE%2F%2BFwr3WvOAPEOHSg3QltIrKt%2Br%2BYIpPMVIAzeFe40It%2BnwA7amyY6IytbYuQiYeCFoE9gkr4IIN4qOEO3nheoZPnDjnHWg3cr5KSo9FJbPwbYg%2FqXXcCvcZh2G2TLNVXHeLetodLI6fqs6orG%2FNaEAl8uOknBpG0Ry9siOM2x4zSYbni7gIUippmar%2F65FKgiiTszP5Nf%2FCFU740Yir8IL2m%2Bu7yO79DRIYcWUMDdyXmk%2BCPnbnEZeyFrBqx%2BGKUa%2BqXM4Cq1hXiN%2BKTexqDSp4hD3oKz7pDwgUxy7E%2BQxm4dZiX7KhN0HfCiL1G3jMc34zx%2FUIWD8lPhSw9WPMNzpArTr4Pgg9yl%2Fx5ICxvjIKJdkj6HGZcIJ7rWZ7BwbssKLL60bY2hJ7xCBlMEQsq7EIgitN9esJf8gPyoO8RTQXwwuevaBx3fh7mr6RgJ4TZhH2464GvJ028R59zQvTp5j4BznlHxqCDqSKH8gppfVoNPQh088SvKgaL%2FhzlRDCL88vJBjqkATAWYQbOXR%2FBNbuQW3LDUvjXOEgrSzijwkUOjNi9csGOhfoOoImSizIrmLaamCNranhqPxiGlRq4pLomGTrc19DvxJQtc638dyrO4ppBzrwMos5HwH0PaYUAYG1YKoV%2FhhzhrlTZNHCrCnLNt8x8Z%2BbRrik5c1K31i1XnTkFQseBnUxXSUbaV8PHecC7zsxwX0KFQ%2B8%2BApcY%2FN4hj6lbMORE%2Bife&X-Amz-Signature=48443c6a4789502e6d05eae6a392b2560753648915232071ebb0f29ce5ee42c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
