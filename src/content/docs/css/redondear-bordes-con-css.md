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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMET3HY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc1k7Fa2RUR5tif5BYg468bPRSHOW7%2BxJhKKquH0mkzAIhALvAHCCJ%2BSB2GC6hJUdsGv77pju43sKENXoYZQ9ZREw8Kv8DCGwQABoMNjM3NDIzMTgzODA1Igyh2Yo2uf8k1NazL4kq3ANlbonFt4M9Jx0AUkcW2cXMDTBYVqk%2BZMW16IvrVzALLf5nUxcbp05QRx3sm7FL1o0Wff6yxXybueBgYwmnoM0DBL8uKGcpoXDwSQ6vfoGwpmf9HunnK94vtfYd9plcMyoFAHhCgHJmibtzRvr8kFRN%2FI6ynygr1JNiCUmyfGhr9hIZaz1EWJq%2FYIVeRLSdNSUVEt%2BV%2BuajIkUpRntkdtwQEV7a%2Fmq%2BYDz%2Be8MBuTOfWh4q00TdEX83WLHKxRRNUAjbMsKyFhcBPAr4Smcg9ircaG0nDU%2Bs9gdNHMv9YMyNZBJwVzJ8vRVkm0qaLirt84XPgRQ3fT%2BWc2%2BIkItN6L8e80TbX1jaOGrU%2BoaOZYuNPhHwgICgc%2FeYNfGaaM68A4AaYMCBgZq3msgWOuAnExDn6OYjrAXOyQJat5rcmj2b5iEo%2Ba4e8gOyziEs4hQZ8tG9yEgrJIoVDrrNxkkvVEDuuajL7K%2FZn3ZDWaB1NhpiYsDzZEEeda1xO059ZRWOIPiZwlKj%2F14xoW2uXBuNJukee%2B1AwLV3ZZO8AnmFoZ4XoTj8%2F8Ta4WKWeRlxhBnEPPSgIDMtwgQBhMVo1ts9FqWsGHzEaGj%2FjXMPcaoS%2BFtJG%2Fji5DaZJoNx%2B5vORjChqM7JBjqkARXHDdafNOooHbWlXFcx1Mo%2Fst4Bga6zfsvkIN4%2BlXJ0r7BbaHPGzy91P%2BqTELVDb1bqU9%2B0J9CX9mV3H20pPAAEmBCAP93jPpelboy1nHFttX%2BgtTh6D5E8wn5wrs%2BoSxYUcFRaEyOTh%2Fi9mVqvZFeL58UOWkMyP%2BYcdEPvbHVJ1mrv0Wr1K%2FKS8Z4XpCDtNNuw4%2F98nqaW8xcbmQuy7%2FJpyHiV&X-Amz-Signature=52a46db979722a81a928b929bad8eb03fd30c44e54f9e7308b5fcbd0894edea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMET3HY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc1k7Fa2RUR5tif5BYg468bPRSHOW7%2BxJhKKquH0mkzAIhALvAHCCJ%2BSB2GC6hJUdsGv77pju43sKENXoYZQ9ZREw8Kv8DCGwQABoMNjM3NDIzMTgzODA1Igyh2Yo2uf8k1NazL4kq3ANlbonFt4M9Jx0AUkcW2cXMDTBYVqk%2BZMW16IvrVzALLf5nUxcbp05QRx3sm7FL1o0Wff6yxXybueBgYwmnoM0DBL8uKGcpoXDwSQ6vfoGwpmf9HunnK94vtfYd9plcMyoFAHhCgHJmibtzRvr8kFRN%2FI6ynygr1JNiCUmyfGhr9hIZaz1EWJq%2FYIVeRLSdNSUVEt%2BV%2BuajIkUpRntkdtwQEV7a%2Fmq%2BYDz%2Be8MBuTOfWh4q00TdEX83WLHKxRRNUAjbMsKyFhcBPAr4Smcg9ircaG0nDU%2Bs9gdNHMv9YMyNZBJwVzJ8vRVkm0qaLirt84XPgRQ3fT%2BWc2%2BIkItN6L8e80TbX1jaOGrU%2BoaOZYuNPhHwgICgc%2FeYNfGaaM68A4AaYMCBgZq3msgWOuAnExDn6OYjrAXOyQJat5rcmj2b5iEo%2Ba4e8gOyziEs4hQZ8tG9yEgrJIoVDrrNxkkvVEDuuajL7K%2FZn3ZDWaB1NhpiYsDzZEEeda1xO059ZRWOIPiZwlKj%2F14xoW2uXBuNJukee%2B1AwLV3ZZO8AnmFoZ4XoTj8%2F8Ta4WKWeRlxhBnEPPSgIDMtwgQBhMVo1ts9FqWsGHzEaGj%2FjXMPcaoS%2BFtJG%2Fji5DaZJoNx%2B5vORjChqM7JBjqkARXHDdafNOooHbWlXFcx1Mo%2Fst4Bga6zfsvkIN4%2BlXJ0r7BbaHPGzy91P%2BqTELVDb1bqU9%2B0J9CX9mV3H20pPAAEmBCAP93jPpelboy1nHFttX%2BgtTh6D5E8wn5wrs%2BoSxYUcFRaEyOTh%2Fi9mVqvZFeL58UOWkMyP%2BYcdEPvbHVJ1mrv0Wr1K%2FKS8Z4XpCDtNNuw4%2F98nqaW8xcbmQuy7%2FJpyHiV&X-Amz-Signature=e159d84b29a686ae56672c3d8d8d138ea084f0999980a37ae0f50db713f3900a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
