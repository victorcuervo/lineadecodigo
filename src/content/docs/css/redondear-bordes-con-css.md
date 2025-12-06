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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYEFLWX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwYpeEbRDQWvTaesTnKVfbJ%2B9qViHoK7ZHHG2kdXnZBAiEAzJBWUut7uY3SMUbXmfhEj5Ta%2BJq6MLXyINQhLGCHweMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEFOc1UKsnb0y%2F%2B6VyrcA2cSHCLWkv6OPl%2Fyuwj5ht7QZUGyIxCVo%2BI0eIVvjXbp7EcRfk2Q9j3lmWOL6NsxR35lLl%2BrQI77rc6CtMhBzJUTBZxYGtQmC%2FJbg6LB8A6%2FtKtHApSc2W2LETRopnY2xwgPuj2UtmZ4mgdGtruzwXThdnIrN9wnb%2Fpt5n1ULbEPmhwDAAZaR%2FQmS1hFg%2F%2FTmmvETPCrfXPJMgvyIVcbk7tN9t%2Fc8NVmQyIfbDFqnIfUl0%2FVtQ3pBo%2Bt%2FZw9GG2arrJm7EeSSFsYGCtJgzMFEKDUIKKMAV9LB%2FrkuysJMiGciam3kWxznj8%2FtvvS3W%2FM5kxyhgY3YoxNmGhgO3bX5%2BL%2FowSAXc12jw4sog%2F5isDb2V1qSxEBEiELMjlAPymcXmXB1UQwoAZI5tK7moAbJplga2ZakxmJDT0%2Fr5EXllyjBTdhZZsToi0EzCoxlLd%2BPti92OyTXOJipWJ4c%2Bt%2FM%2Fv6HiXyWMWLq%2B6BvqrFcJsoKZC8iltgk7rjkctK%2BWzz4mI8%2FIh%2FUUQ23C7ddgzgh%2FgVfzCWWvKN9007t198OMworF%2BPF1XtiZppNpEqYykIxJnmW%2Fhn8tnzd2%2BvUqmEPWqufuIxdBj%2Bnq6TE3ZoHwdqJWgNNF8YSfyI%2BtS2MKGm0MkGOqUBP5KqI2DmDIA8nzeaqfWlTsCR2fpKUxy3I%2FZWhrH5VtqfNxv9azGHSTMKJ7k8C5Mz2f%2Fuwm8hsnY3z75aIoonWUs5kT%2B5kXe8EoOsMH8AbrK4ckrnCiIPv3LJXD1X3eMiStnZgZyJXHcHajLRIElVxDWdiJ3HLnaKUtD9ocWCxIx60emG2bQDq5WYWxTnwyYnhVclyEnnxUjnquNpIEiBnWCZVoXk&X-Amz-Signature=b58e9bd1d6cb3593285510dc4552a4e18640b7c7672fc2b4c4f6beb96615853a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UYEFLWX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwYpeEbRDQWvTaesTnKVfbJ%2B9qViHoK7ZHHG2kdXnZBAiEAzJBWUut7uY3SMUbXmfhEj5Ta%2BJq6MLXyINQhLGCHweMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEFOc1UKsnb0y%2F%2B6VyrcA2cSHCLWkv6OPl%2Fyuwj5ht7QZUGyIxCVo%2BI0eIVvjXbp7EcRfk2Q9j3lmWOL6NsxR35lLl%2BrQI77rc6CtMhBzJUTBZxYGtQmC%2FJbg6LB8A6%2FtKtHApSc2W2LETRopnY2xwgPuj2UtmZ4mgdGtruzwXThdnIrN9wnb%2Fpt5n1ULbEPmhwDAAZaR%2FQmS1hFg%2F%2FTmmvETPCrfXPJMgvyIVcbk7tN9t%2Fc8NVmQyIfbDFqnIfUl0%2FVtQ3pBo%2Bt%2FZw9GG2arrJm7EeSSFsYGCtJgzMFEKDUIKKMAV9LB%2FrkuysJMiGciam3kWxznj8%2FtvvS3W%2FM5kxyhgY3YoxNmGhgO3bX5%2BL%2FowSAXc12jw4sog%2F5isDb2V1qSxEBEiELMjlAPymcXmXB1UQwoAZI5tK7moAbJplga2ZakxmJDT0%2Fr5EXllyjBTdhZZsToi0EzCoxlLd%2BPti92OyTXOJipWJ4c%2Bt%2FM%2Fv6HiXyWMWLq%2B6BvqrFcJsoKZC8iltgk7rjkctK%2BWzz4mI8%2FIh%2FUUQ23C7ddgzgh%2FgVfzCWWvKN9007t198OMworF%2BPF1XtiZppNpEqYykIxJnmW%2Fhn8tnzd2%2BvUqmEPWqufuIxdBj%2Bnq6TE3ZoHwdqJWgNNF8YSfyI%2BtS2MKGm0MkGOqUBP5KqI2DmDIA8nzeaqfWlTsCR2fpKUxy3I%2FZWhrH5VtqfNxv9azGHSTMKJ7k8C5Mz2f%2Fuwm8hsnY3z75aIoonWUs5kT%2B5kXe8EoOsMH8AbrK4ckrnCiIPv3LJXD1X3eMiStnZgZyJXHcHajLRIElVxDWdiJ3HLnaKUtD9ocWCxIx60emG2bQDq5WYWxTnwyYnhVclyEnnxUjnquNpIEiBnWCZVoXk&X-Amz-Signature=6e7d306dcefb432a8f2b93076a6dcdeb7d0911fbd5209c57e1dbad5f931831d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
