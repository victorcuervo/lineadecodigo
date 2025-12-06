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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663E34LSP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv6nqKCAulaIpyvBCiI24eTjZhGQYrJRLL4WLIADfX7AiEA%2FcmH8C7KWJ7QoDKqwUh08OLRkKv40TJSiekm1g1JeDUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLICeLYE7vmK6AhsXSrcAyCgS%2BaTOT%2FhP6cOJbpwD%2BGLBEL8mCEb0uKYKjQ7us7BbvTQBdo9rreYlRfbvxlSwBAtDR8UVUy7zHfh9iV9nd1CSW6jbyv%2FNefqNoHiZG9q%2BCWbUCzQoRHKtLQJ4nno4cKdkTJ%2FSaU1yvQ5eXOPzqx%2FCvsHpK0MzQ93eXTU1PcUbcypTsoMby1cFwbxUDt2J6YE8Y20NWQxxiX5vLgHzvlnsjCSlWHh4DFoLNMi%2BHyqVs9cFJDkveE1Qm5A33nF4tP2KMv0Y8JnDTaOHKI8j7CJte8wne4U%2Bi95s48%2FE59B3F52Fln2Xv%2FDc8WICL28%2FmXbTkHcw3Z26jIeX8Rx7YRxxcUXZFhp86W0irXsvLkIu4Muuw4HT5IGdbiIB4cWxWFq67ZMsmAluDR%2Bg%2FAYudEfqEgpxLEPaqGUVC6l8ZKNpkDkIClMx6RMdnyguJH9Q9HdDf7P%2Bir3z04I7IdYr7WLYBxjXI75vv7REAccnOASgOtnWpln%2Fo9IUEb%2B6HUk4KMiBkCmwZzAqGwd%2FJbNw9XuJlvOszaLEXIGHSbvFpC2YwlXi6SJMMr%2FS5ItN0FGEWHERj7EP2E5OnSptwwO9wNnTi4T9P8p13PM8cz0Tg%2BzA0d9O0Rp6v4BIcnCMMKm0MkGOqUB0lq04P5CaB42iUvrj259V4y8IdRbjXdg5tWJntDlv2y%2FWBgBUapPBYolS0bON%2F6GmAItnb6JiqtghhMOX3PiLzF8zhSUgi%2FzZCTt4a3EWXEvhL5N6pr3Qf%2Bn5ATrcOLA3mZ9JF1n63SAmoEn1JDeHYxIqyH52p7MYDxFcgCcdrLTpz2Vig%2FCm3OVs6aXhu%2FCFvJ26CHmMbwz6SaC8fK2z2MZ0rTe&X-Amz-Signature=1be1698bd5a0095ca8dbbb5ef456666ec91ca3d1977c28fb53b3a9a05e6138e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663E34LSP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv6nqKCAulaIpyvBCiI24eTjZhGQYrJRLL4WLIADfX7AiEA%2FcmH8C7KWJ7QoDKqwUh08OLRkKv40TJSiekm1g1JeDUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLICeLYE7vmK6AhsXSrcAyCgS%2BaTOT%2FhP6cOJbpwD%2BGLBEL8mCEb0uKYKjQ7us7BbvTQBdo9rreYlRfbvxlSwBAtDR8UVUy7zHfh9iV9nd1CSW6jbyv%2FNefqNoHiZG9q%2BCWbUCzQoRHKtLQJ4nno4cKdkTJ%2FSaU1yvQ5eXOPzqx%2FCvsHpK0MzQ93eXTU1PcUbcypTsoMby1cFwbxUDt2J6YE8Y20NWQxxiX5vLgHzvlnsjCSlWHh4DFoLNMi%2BHyqVs9cFJDkveE1Qm5A33nF4tP2KMv0Y8JnDTaOHKI8j7CJte8wne4U%2Bi95s48%2FE59B3F52Fln2Xv%2FDc8WICL28%2FmXbTkHcw3Z26jIeX8Rx7YRxxcUXZFhp86W0irXsvLkIu4Muuw4HT5IGdbiIB4cWxWFq67ZMsmAluDR%2Bg%2FAYudEfqEgpxLEPaqGUVC6l8ZKNpkDkIClMx6RMdnyguJH9Q9HdDf7P%2Bir3z04I7IdYr7WLYBxjXI75vv7REAccnOASgOtnWpln%2Fo9IUEb%2B6HUk4KMiBkCmwZzAqGwd%2FJbNw9XuJlvOszaLEXIGHSbvFpC2YwlXi6SJMMr%2FS5ItN0FGEWHERj7EP2E5OnSptwwO9wNnTi4T9P8p13PM8cz0Tg%2BzA0d9O0Rp6v4BIcnCMMKm0MkGOqUB0lq04P5CaB42iUvrj259V4y8IdRbjXdg5tWJntDlv2y%2FWBgBUapPBYolS0bON%2F6GmAItnb6JiqtghhMOX3PiLzF8zhSUgi%2FzZCTt4a3EWXEvhL5N6pr3Qf%2Bn5ATrcOLA3mZ9JF1n63SAmoEn1JDeHYxIqyH52p7MYDxFcgCcdrLTpz2Vig%2FCm3OVs6aXhu%2FCFvJ26CHmMbwz6SaC8fK2z2MZ0rTe&X-Amz-Signature=d5587654f5d96b4566485ec4bc582ad66a66f1745251ec3a577b3bbb4aafb1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
