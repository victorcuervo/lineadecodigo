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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S66A5T3M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCGsbdvZnFrwveVxuWXN9zsmuRuWJYYPP%2B7X8Owb3%2B7wIgb6eEg6Y0pM%2F%2Bvcb0DK8kOK0YSH5dfvg0kiX37%2B9sSKEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKzQddSfDnISpXDtCrcA8%2FyFRChgpFNDb%2BJdwnFDvVuNjBbGpmvEJJsWTWehl51OeW8wcrjhoxyaNVzvHTJd4mXHmkzPu2R33%2F8eJtyYsqiwa9ODgzEm8nhhu%2FO6sMj5S4fcd72l%2BAAjWUyc3cHsE%2FlQc%2Bxc05TXi92kY7vOx2iu6EZ%2FQWm0UvXHm40p8Y%2BZTlRf44DmsvoUR5RjuRaGFb8lseOuJWMgN%2FZXJ0e9vpqAhkJGhWFugwscou1hSBAkn19F%2FuVXq6K2mNZBaffkRGJeQu56hlhA7EXdH%2FezyPgEgCKOUH4doZ3FEYQWAb51ITZ4PjDF1JXArPtO%2FV9cZL23hzaMeMNAz5UvWcmxkSlj61udMz4KljiKPLBHWUrl8dy0rxkUJ%2BCbkNQfg8Cr663r%2FzPgfNtr1g8D0sEQLR%2B4CM7K8vqYXhrX8AYATNv82WXNGQRSGOX%2BfE8j9lZ%2Fd2oVRmzr8RAH%2BayDhn3LJftfASYpNUXzi3d8etIsgz8YgSE8KjaCmE5IcrT70d4tcVjmwKJX0%2BongYqisgKEY0bLUuMLTl6RkaCykNwz7C%2FWIqbTRhGTN5SGABgjqc%2F%2BePDt8kRI509oBQvjLTTazjrLtN2%2FcO%2Fvl%2Fgx2iDV6NXkdxs5HGmajmdokgRMK2N3skGOqUBKU8j%2FrF4HeIn2soakhwy1zWfhZSpEVkG%2B3VkoVCGspc9z1Hi3ftzDwpYpDlsoeVAPGCoV4xww2QgytTB0QRWPh%2FPHfinlLN0%2F5lamOR36WfqVCgKqx8Ec0T2gVULfxF8Bt5UeDgaEJqGhQ4k1z7uDk%2B9JguKTWlmv2fgcxzIap05t%2FEn1IOzEs%2FJkLYYwByHSXqr57Mr22%2BOmrViQ0Dyfy85soOJ&X-Amz-Signature=6136e3658ab539fee5af2f1811c3079c3e7b8da57b4c8d306cf131e9238cd5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S66A5T3M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCGsbdvZnFrwveVxuWXN9zsmuRuWJYYPP%2B7X8Owb3%2B7wIgb6eEg6Y0pM%2F%2Bvcb0DK8kOK0YSH5dfvg0kiX37%2B9sSKEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKzQddSfDnISpXDtCrcA8%2FyFRChgpFNDb%2BJdwnFDvVuNjBbGpmvEJJsWTWehl51OeW8wcrjhoxyaNVzvHTJd4mXHmkzPu2R33%2F8eJtyYsqiwa9ODgzEm8nhhu%2FO6sMj5S4fcd72l%2BAAjWUyc3cHsE%2FlQc%2Bxc05TXi92kY7vOx2iu6EZ%2FQWm0UvXHm40p8Y%2BZTlRf44DmsvoUR5RjuRaGFb8lseOuJWMgN%2FZXJ0e9vpqAhkJGhWFugwscou1hSBAkn19F%2FuVXq6K2mNZBaffkRGJeQu56hlhA7EXdH%2FezyPgEgCKOUH4doZ3FEYQWAb51ITZ4PjDF1JXArPtO%2FV9cZL23hzaMeMNAz5UvWcmxkSlj61udMz4KljiKPLBHWUrl8dy0rxkUJ%2BCbkNQfg8Cr663r%2FzPgfNtr1g8D0sEQLR%2B4CM7K8vqYXhrX8AYATNv82WXNGQRSGOX%2BfE8j9lZ%2Fd2oVRmzr8RAH%2BayDhn3LJftfASYpNUXzi3d8etIsgz8YgSE8KjaCmE5IcrT70d4tcVjmwKJX0%2BongYqisgKEY0bLUuMLTl6RkaCykNwz7C%2FWIqbTRhGTN5SGABgjqc%2F%2BePDt8kRI509oBQvjLTTazjrLtN2%2FcO%2Fvl%2Fgx2iDV6NXkdxs5HGmajmdokgRMK2N3skGOqUBKU8j%2FrF4HeIn2soakhwy1zWfhZSpEVkG%2B3VkoVCGspc9z1Hi3ftzDwpYpDlsoeVAPGCoV4xww2QgytTB0QRWPh%2FPHfinlLN0%2F5lamOR36WfqVCgKqx8Ec0T2gVULfxF8Bt5UeDgaEJqGhQ4k1z7uDk%2B9JguKTWlmv2fgcxzIap05t%2FEn1IOzEs%2FJkLYYwByHSXqr57Mr22%2BOmrViQ0Dyfy85soOJ&X-Amz-Signature=479dd2504f32e6984866c3a7bf437a32842231c2b3b04d2b000feadab8244538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
