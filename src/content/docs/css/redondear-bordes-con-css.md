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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MYYTGWC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzdQSJv%2BoUf6YjgiQS6yLgejgEuuZy9%2F%2BEpFRdf8dsEwIgOy80IZt16J4JEt%2BTkb%2BlkZixNRcXx8L15%2Br66cSV71Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOhg7uS%2BEvRxqYcYvyrcA%2BElRu2f%2B%2FSh2%2Bdmhyspr3X9IXOkx9UhgyI5EFUB7XN0xTVIHKXtHfIeAG1%2BWxGWzSKH100owqdUXi%2FCFgO1NaVbVx%2B6Pt4WOqNBL%2FLr4VBtj1%2Bat2aerK0s%2B376ZgOkp4I%2F%2BI4YZIX833A6TaYeT7rKA%2Bj1iPLLJWCC6YxeEWOkBKaNgy9s2YybzYxCGUvA4NJHOtFuJLr7VEn6y%2BftXqwQS%2FIfc0nPv9D4l9Lxq7HrHDB7Y1mlk3SvTpEPtUOX8tKxq5hL7QN0XUfUrXpA3Ncwo9QgVRAdwuHFt2Kl23l%2FVk4pMRl7qajZMzZExcnVlv9dqSfXUQq4fKIh3nDh2bpM%2F8ysdLECS0HyaWHCB0j14I6%2F6be30j1YGVb7Of71w72jaqbhp3vPWATTtNf13ri4CjK2f5gaHiWvvTdK0DXBb%2BpPueoXG7zmo1LhQlbQCIrMbxyPElEbJtQVps%2B4kDv8IVVuYKcurgWO8Pc07Gl5lsKsD4SRUQD06HyjqRV4UQwDtNke4YERJvoBnZGTBonl%2FlHgMmbO926igaALIXzgvY6bgbcOcJra762iD1xY8ExICXeqOfh%2BDSGu0Nh%2F%2FVKAQnESOWE30hSOlzMECsKjo1sSh1SBok1i4cSqMO%2FKy8kGOqUBP3Z%2FZUrG%2F3Ju%2FKTXqlpjdMif2HLKn2x0je6OgTdjT%2BRXorXSf1Gvbdac5hWYXY9CP84kh9X8FBwqBnNKUQAwtb%2FBRQi1WH2Rjc9PFedBIvNRSDLVRJpUQz9ep5DPvp8%2BdRX4eFXXDoXeYBCE8Gupe4LyRjghJ9uNcFbgKvTIehraJDId6%2FY20X1pj17wZLssNXRzjvp0%2Fwbr4wWTmYOjKPKcaa0q&X-Amz-Signature=e27b06c6d7682cdfe06c7ad2756b7264d077c9934dcd13b7ad97954db01e08f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MYYTGWC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzdQSJv%2BoUf6YjgiQS6yLgejgEuuZy9%2F%2BEpFRdf8dsEwIgOy80IZt16J4JEt%2BTkb%2BlkZixNRcXx8L15%2Br66cSV71Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOhg7uS%2BEvRxqYcYvyrcA%2BElRu2f%2B%2FSh2%2Bdmhyspr3X9IXOkx9UhgyI5EFUB7XN0xTVIHKXtHfIeAG1%2BWxGWzSKH100owqdUXi%2FCFgO1NaVbVx%2B6Pt4WOqNBL%2FLr4VBtj1%2Bat2aerK0s%2B376ZgOkp4I%2F%2BI4YZIX833A6TaYeT7rKA%2Bj1iPLLJWCC6YxeEWOkBKaNgy9s2YybzYxCGUvA4NJHOtFuJLr7VEn6y%2BftXqwQS%2FIfc0nPv9D4l9Lxq7HrHDB7Y1mlk3SvTpEPtUOX8tKxq5hL7QN0XUfUrXpA3Ncwo9QgVRAdwuHFt2Kl23l%2FVk4pMRl7qajZMzZExcnVlv9dqSfXUQq4fKIh3nDh2bpM%2F8ysdLECS0HyaWHCB0j14I6%2F6be30j1YGVb7Of71w72jaqbhp3vPWATTtNf13ri4CjK2f5gaHiWvvTdK0DXBb%2BpPueoXG7zmo1LhQlbQCIrMbxyPElEbJtQVps%2B4kDv8IVVuYKcurgWO8Pc07Gl5lsKsD4SRUQD06HyjqRV4UQwDtNke4YERJvoBnZGTBonl%2FlHgMmbO926igaALIXzgvY6bgbcOcJra762iD1xY8ExICXeqOfh%2BDSGu0Nh%2F%2FVKAQnESOWE30hSOlzMECsKjo1sSh1SBok1i4cSqMO%2FKy8kGOqUBP3Z%2FZUrG%2F3Ju%2FKTXqlpjdMif2HLKn2x0je6OgTdjT%2BRXorXSf1Gvbdac5hWYXY9CP84kh9X8FBwqBnNKUQAwtb%2FBRQi1WH2Rjc9PFedBIvNRSDLVRJpUQz9ep5DPvp8%2BdRX4eFXXDoXeYBCE8Gupe4LyRjghJ9uNcFbgKvTIehraJDId6%2FY20X1pj17wZLssNXRzjvp0%2Fwbr4wWTmYOjKPKcaa0q&X-Amz-Signature=64a87f8f6a29db9dfc5f4364706f6ced457487c21af832a1edeffe6c51d6a664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
