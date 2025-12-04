---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBCQE4JT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICotYaKyAVOLAXLHrhZDbSHVuueGPgSr9vP4xKlrKAnJAiAUUlbdx6j1pjqnxAhGxWOY91Jeqk%2B2UaNiJQsx51P%2FXir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMg2XpBQfS1ytGzTPIKtwDGAzOETBvlLxVk1oyHyKyOTelrMbwEjd2MreqSXL0pYhTRpSEwdTMbsXT9xdsCe8xKIvLAqDXKxUT6Xk0YlDT%2BeSFb502Ov5qFhufrXt%2FymGYb8M5ttX7jNbLFQ%2FrL6ZqN8kRXYbmI7iicZDqhhINRtcRIv13Ozrk33NQ2g1yz2c1lNLC9FT0fUV3xviO64nS9tqvXbNah%2BBx%2Frb%2FXjwu1pMA9ktj6%2FpPdObQLuXGF3m5XoDOZJR5wL9%2BDT93lK90yNoP%2F6sqyPrUjH5BSCX6h93hGo2MWoY5uQDwRXIvQBaoDJzlvKp2H5wB0yjXEiKuG7Ax4YqTub0OLwAMzgZjJGEqwm2qRzyhyI4hGE4dqxvEFMUAOaYYewaOcBSnANjV3vG6v6UOWMibBVb5IB73xcpEKmXFa8XC95hc9l2pK10Tlsb5awK4bAvL%2F7W4cQFRY5qQgAkTm7uTA%2BcrZS4ysLg2deG8XbsLzNiu8zWHnwHdNMPKd%2BqAlT%2B5SdXFWWrDefZ67wuIrkf8dQq5OQEiK2FklJmiikr7Hv0apcqFQzaJb2V9oN2OABqp92%2FWn4Fea2Q5CpGgNPNiJ60%2FhmfcSxDVZSAliwG7tyRgWM%2BccOeIWhBidMh7CRO%2Fp%2B0w9cjFyQY6pgFHVywc%2FgxTewX%2F76IJd%2FfQ2JvOKyK9xI2GM9zqF%2BGmJ6CnOG4kagHCuuzCqWFCQ7b%2F12aVOM6oJ9%2BviG5yorP8Iq78nmNlcev4Rsh6m18q%2FFbjBUtvA09TfTxMkdaxxLulrf2yYgtmwvr7VkphbblLRMWbItLW5hzZCicXVXrso2Vbkgpd7vzWoTQWXXdJpqI7TjiTz2EMSbMjw7hzmIp8k8%2Bjm4SU&X-Amz-Signature=938d596bdadb5364ab4f432a1f4c5b7759731793d255c3276a3bb33eeb473f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBCQE4JT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICotYaKyAVOLAXLHrhZDbSHVuueGPgSr9vP4xKlrKAnJAiAUUlbdx6j1pjqnxAhGxWOY91Jeqk%2B2UaNiJQsx51P%2FXir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMg2XpBQfS1ytGzTPIKtwDGAzOETBvlLxVk1oyHyKyOTelrMbwEjd2MreqSXL0pYhTRpSEwdTMbsXT9xdsCe8xKIvLAqDXKxUT6Xk0YlDT%2BeSFb502Ov5qFhufrXt%2FymGYb8M5ttX7jNbLFQ%2FrL6ZqN8kRXYbmI7iicZDqhhINRtcRIv13Ozrk33NQ2g1yz2c1lNLC9FT0fUV3xviO64nS9tqvXbNah%2BBx%2Frb%2FXjwu1pMA9ktj6%2FpPdObQLuXGF3m5XoDOZJR5wL9%2BDT93lK90yNoP%2F6sqyPrUjH5BSCX6h93hGo2MWoY5uQDwRXIvQBaoDJzlvKp2H5wB0yjXEiKuG7Ax4YqTub0OLwAMzgZjJGEqwm2qRzyhyI4hGE4dqxvEFMUAOaYYewaOcBSnANjV3vG6v6UOWMibBVb5IB73xcpEKmXFa8XC95hc9l2pK10Tlsb5awK4bAvL%2F7W4cQFRY5qQgAkTm7uTA%2BcrZS4ysLg2deG8XbsLzNiu8zWHnwHdNMPKd%2BqAlT%2B5SdXFWWrDefZ67wuIrkf8dQq5OQEiK2FklJmiikr7Hv0apcqFQzaJb2V9oN2OABqp92%2FWn4Fea2Q5CpGgNPNiJ60%2FhmfcSxDVZSAliwG7tyRgWM%2BccOeIWhBidMh7CRO%2Fp%2B0w9cjFyQY6pgFHVywc%2FgxTewX%2F76IJd%2FfQ2JvOKyK9xI2GM9zqF%2BGmJ6CnOG4kagHCuuzCqWFCQ7b%2F12aVOM6oJ9%2BviG5yorP8Iq78nmNlcev4Rsh6m18q%2FFbjBUtvA09TfTxMkdaxxLulrf2yYgtmwvr7VkphbblLRMWbItLW5hzZCicXVXrso2Vbkgpd7vzWoTQWXXdJpqI7TjiTz2EMSbMjw7hzmIp8k8%2Bjm4SU&X-Amz-Signature=a72b4d0b9bd88c6a5f035428344b5eab0342dd3f144e6af5835fed056942fac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
