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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RRE7SQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx850ayzmqfw4bD7%2FI2NLJyMBoUBd4sONALxScsGVgrQIgSH1WM5tHBoXwXUNhc%2Fm5CmZkUtFzMly1WbmzzPDoynwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAajfgqkR%2B2UhxVjYCrcA9xXcpK0zxI4bPzqbqeiJE932PLJP9mFiBIgZ6YgUM8xYBCBZIlGMgLLGpla316K%2B7ypiBFEfqRiqYX9jmH8Cynm%2BUIVP8MUJ5JCy%2BHvZDWEACKPXwyrB1YJPqBHSPmD0vtSKpeQ0W8dU8GCZGW6ZWb9tr%2BWGvkk21e8O7%2Bjtq0AjRA4zpUCPqCqGAZVekDKgK9Wx3a%2BVE1kbTg34%2BwXNeBxtvdWFBqTxp7k5TjXwPDGWu24WLr3Xmc3UxInS6Uqn5tv0xhFUuX%2F1YmXacnDhCzfB0AmuhSkn1p77ZZfg6LXjbL5Qu3ez8ibM%2BQ5z8zDxziMRLfkcYuFOfaLsk7qcaCxvpb4AxowqXxkPNjWeLaqIW05IIuBadeRN%2Biy1dnpTbSx6ND2%2Flc1OSYPSDY7SrcZlQkqp16u1nvN%2BCYJ%2FdxDt6150cCB%2BHFLfLVP2ix830NMsWYgxAOmhdiLBVmioj850YBiR%2FQwXj%2FVM9%2FKkI9tBLqTLdUXqDsMF7ufbOkpBhRupZav%2BxjIDX9MNElbYBkm7Dq5%2BzYZlk5rkZXmUt%2BJHKJ2GRimkaHNKmIk8jpMXUUJ05WqIC2ztk5cfM0CELSZ4hFKI5D7sei1cBtRVIB7T%2FilE%2BVIUkK0RnCUMIbp3ckGOqUBcQzK4MQKbET54oDSZVWeAO%2BxswiZzS0ccAppgN%2FoOeFpk36jVai2OxlKGyJYdpAY0d5A1f%2BgeuAwWlHFLgLTgz%2Bv2JbvqBVUkMTYuDt6wiPqiK7rCeFffh8tpcT3AklERXPSl%2B4aZWrb6yBmAW1W9JNfGf8XjBayDEacvF9Xw14F%2FubbOqSK0rzLcfLaHZRzGY25YDPEe9LSdH2OXShrkIGEHTTA&X-Amz-Signature=a370c48ebd8391a9494fe0bae7a16704119940a474b4b6eb8aab4f7763e066f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6RRE7SQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx850ayzmqfw4bD7%2FI2NLJyMBoUBd4sONALxScsGVgrQIgSH1WM5tHBoXwXUNhc%2Fm5CmZkUtFzMly1WbmzzPDoynwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAajfgqkR%2B2UhxVjYCrcA9xXcpK0zxI4bPzqbqeiJE932PLJP9mFiBIgZ6YgUM8xYBCBZIlGMgLLGpla316K%2B7ypiBFEfqRiqYX9jmH8Cynm%2BUIVP8MUJ5JCy%2BHvZDWEACKPXwyrB1YJPqBHSPmD0vtSKpeQ0W8dU8GCZGW6ZWb9tr%2BWGvkk21e8O7%2Bjtq0AjRA4zpUCPqCqGAZVekDKgK9Wx3a%2BVE1kbTg34%2BwXNeBxtvdWFBqTxp7k5TjXwPDGWu24WLr3Xmc3UxInS6Uqn5tv0xhFUuX%2F1YmXacnDhCzfB0AmuhSkn1p77ZZfg6LXjbL5Qu3ez8ibM%2BQ5z8zDxziMRLfkcYuFOfaLsk7qcaCxvpb4AxowqXxkPNjWeLaqIW05IIuBadeRN%2Biy1dnpTbSx6ND2%2Flc1OSYPSDY7SrcZlQkqp16u1nvN%2BCYJ%2FdxDt6150cCB%2BHFLfLVP2ix830NMsWYgxAOmhdiLBVmioj850YBiR%2FQwXj%2FVM9%2FKkI9tBLqTLdUXqDsMF7ufbOkpBhRupZav%2BxjIDX9MNElbYBkm7Dq5%2BzYZlk5rkZXmUt%2BJHKJ2GRimkaHNKmIk8jpMXUUJ05WqIC2ztk5cfM0CELSZ4hFKI5D7sei1cBtRVIB7T%2FilE%2BVIUkK0RnCUMIbp3ckGOqUBcQzK4MQKbET54oDSZVWeAO%2BxswiZzS0ccAppgN%2FoOeFpk36jVai2OxlKGyJYdpAY0d5A1f%2BgeuAwWlHFLgLTgz%2Bv2JbvqBVUkMTYuDt6wiPqiK7rCeFffh8tpcT3AklERXPSl%2B4aZWrb6yBmAW1W9JNfGf8XjBayDEacvF9Xw14F%2FubbOqSK0rzLcfLaHZRzGY25YDPEe9LSdH2OXShrkIGEHTTA&X-Amz-Signature=96af3e572f8a1dc0d77d9062b7e77af0608605b51af72a9446df767d7ba58d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
