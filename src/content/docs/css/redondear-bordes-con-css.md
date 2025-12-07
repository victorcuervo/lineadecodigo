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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5JH45TT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW9LblcDAzd5h3NY9vJjY5oyj25f8NiyNoRJa1DH0VeQIgFy%2FdXx%2BazUdYm%2Be%2BrfqV2MTJm%2BMmZLjjcFkZXVEFQWEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPdi1%2Fzo%2FtGWssdtircAx3xpHHDODnQKUQKWkENOUua01uz90OStgOkWB3BNn6%2BkfffYdHUnxOrmjbK1e%2BNdlzO5ss%2BZgIY5Rt2PDIHUfyXqj0RfIt7OyCDLC1ZdXPDJAdPHIjsbYXBo6IVPveiQ1F7A5vELqv4D3gGkgKukPkVb9S9kBzjgu2cl2yF5k2%2FSxJGZvR%2B9yOB1cnMAy4PDuDVpR7g7IK1sRFseBRsprt%2BhWRCxfrKch7dmQ8i2YDOWSc7KiljEa7as5ExgfhxnkKM0BI43Vh5CGgaxpTujka8FI0R9JWGUBGdUBpSqtMSAwWnQwNdlp8cHAOg0d7x9S0n7fbZP3bBmLpFbr9UVpupnz7KOk0E7LZF3oT766nGMLdFpoC74slQjOogIrkZnqGQ1M8U%2FfpIhTVyW35q%2FEyMlD3sQBuIidJYqOYHsovHLLDinqP6oOnG5Yk9ltD7kytwXo3Sqx7OdkPqkXg5t6qgr%2BUGkkUeQH%2FKFYhuGIiQ7aDJyXXCSqqulPjQCtagMxYjzBavkCsO5XRnOvXittOkzALk%2F45Vj2TkPciCcU51ULCqvTOzwnOd6TDmHcLNpZrqfrMAKbbaY%2BQFVcQUnR3B5bzqQSCcr0%2B3Zg1daUylp6oTFpk4JG0v4iNBMMqZ1ckGOqUBxIR0%2F61VT0xRb1cftkjYSafBR3XQtXsFb3iom%2BVFVPYYtuTfH4%2Bo10RdtNYED1U5SgGIjtD6qAc68ae0F9xiGHbszOIi2nnqg%2FUzFFeRArgb%2Bxobs1pEHsCbvaaJtf3jlqdnGtYmYfBP3lZBEuh8aQ5bD2GN0pPcTICrpCGOX0Sx2PWsaeOhqR2Md83sGr9cjPBtHnrcZXWFgDNEUFi9zuyYsReU&X-Amz-Signature=6e587b51fa95fb8db85b08bd8127099175f8b434d2023dc14741e42529c8674f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5JH45TT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW9LblcDAzd5h3NY9vJjY5oyj25f8NiyNoRJa1DH0VeQIgFy%2FdXx%2BazUdYm%2Be%2BrfqV2MTJm%2BMmZLjjcFkZXVEFQWEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPdi1%2Fzo%2FtGWssdtircAx3xpHHDODnQKUQKWkENOUua01uz90OStgOkWB3BNn6%2BkfffYdHUnxOrmjbK1e%2BNdlzO5ss%2BZgIY5Rt2PDIHUfyXqj0RfIt7OyCDLC1ZdXPDJAdPHIjsbYXBo6IVPveiQ1F7A5vELqv4D3gGkgKukPkVb9S9kBzjgu2cl2yF5k2%2FSxJGZvR%2B9yOB1cnMAy4PDuDVpR7g7IK1sRFseBRsprt%2BhWRCxfrKch7dmQ8i2YDOWSc7KiljEa7as5ExgfhxnkKM0BI43Vh5CGgaxpTujka8FI0R9JWGUBGdUBpSqtMSAwWnQwNdlp8cHAOg0d7x9S0n7fbZP3bBmLpFbr9UVpupnz7KOk0E7LZF3oT766nGMLdFpoC74slQjOogIrkZnqGQ1M8U%2FfpIhTVyW35q%2FEyMlD3sQBuIidJYqOYHsovHLLDinqP6oOnG5Yk9ltD7kytwXo3Sqx7OdkPqkXg5t6qgr%2BUGkkUeQH%2FKFYhuGIiQ7aDJyXXCSqqulPjQCtagMxYjzBavkCsO5XRnOvXittOkzALk%2F45Vj2TkPciCcU51ULCqvTOzwnOd6TDmHcLNpZrqfrMAKbbaY%2BQFVcQUnR3B5bzqQSCcr0%2B3Zg1daUylp6oTFpk4JG0v4iNBMMqZ1ckGOqUBxIR0%2F61VT0xRb1cftkjYSafBR3XQtXsFb3iom%2BVFVPYYtuTfH4%2Bo10RdtNYED1U5SgGIjtD6qAc68ae0F9xiGHbszOIi2nnqg%2FUzFFeRArgb%2Bxobs1pEHsCbvaaJtf3jlqdnGtYmYfBP3lZBEuh8aQ5bD2GN0pPcTICrpCGOX0Sx2PWsaeOhqR2Md83sGr9cjPBtHnrcZXWFgDNEUFi9zuyYsReU&X-Amz-Signature=b95dfbcce5c02981567b8162f2a3a627c2137041ce6f3abad6c8db282e1c52f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
