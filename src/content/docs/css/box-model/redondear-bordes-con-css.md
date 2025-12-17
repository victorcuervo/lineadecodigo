---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VME3W2FP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClo9p7UuJF3cYT1w6m9xzs9%2FkrINlAMBIPYjRshn9ZeQIhAOUEwr3RzY5zGheUSkYzP4bN6bfOhh0CkpcycKfZN1ixKv8DCH8QABoMNjM3NDIzMTgzODA1IgwFREnyfw99TW0QLzIq3AMJs5ADCmz%2FEVdqKTCwgeYjb6boBoXmmfZM5Ug7%2BUb1S3X6vYtZXnruh413G3C7UPyEKQIjp0NowEGFP3XdbZGnKZ1FcOBm9fjbPa27PjR12CnBs6iXpBu0X%2BC5QyVWcQG7dOXV%2BcbGoNVTW6zrjTFu3x6M2BHoLZ7PbOOMqDc3E1vRnATDZwtwd28SvcSep0etxwXrpSHpkamQdWIGTI59Mw6US72Gu%2F0XYiSUqyKfAj87i60JRsDm4ZZEw9xPSmepQ3VP%2FDW4SgRqY3vnYrMIp1%2BgkxtvRj06ZFn86OSG5I%2Fp9BH%2BPsxdkB6HiGhA6jIFqxEy8LKfhSkb5AufwdmczZb%2FjmhnXiGKr2QYODNAm1aNQ41%2Bf3whkRaVjPc2D8nCIytgrfqEfDZMGSDYzp7JE0XJEZmoprgf5NmvRwHp3JhK7Gx2KMjiR6e0ZUfqRWdo%2Ffpm0Z60lOBWq1o1Gg8jaydze5x2tkaniPrFlGiJwcfBAVDXIoUjq1Mmh4SJK73C3onuTAWI3Qx3POQEpC3qMIOsFc2eTdWaw8Um2qfcOByYYoPUibN8iXoR6izC74wQc51MV82CbrVEkXz5RINq2ghHuWO9L0WvlnhNdOin9px%2F81Vvb5ccx8Gq3DDp4YrKBjqkAeWTkkRfasOpIIKG3pTUD8uCZxwmaJ1hn%2BAfEIg5CA4ceC0WxIZbTh5GwJIfvo5JUJsCzInkYBsiP2JmaJRmiB9t%2BTjakK%2FZIwJD6TeqlH71AaX%2BRUNP8L0maSFdOzn9CXJUcCActphgnMryJuOs4JPIdwLJCDJh0jGxZIbX2m6GLR4%2B5QKZT%2BsZ06eatBO3rPLwGU%2B0sMjkbOr%2BPvDEJmBKwpjl&X-Amz-Signature=59d5b18b1a5cf43115ebeefc987a948b4545469bbf8bf28fbe228a3998278829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VME3W2FP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClo9p7UuJF3cYT1w6m9xzs9%2FkrINlAMBIPYjRshn9ZeQIhAOUEwr3RzY5zGheUSkYzP4bN6bfOhh0CkpcycKfZN1ixKv8DCH8QABoMNjM3NDIzMTgzODA1IgwFREnyfw99TW0QLzIq3AMJs5ADCmz%2FEVdqKTCwgeYjb6boBoXmmfZM5Ug7%2BUb1S3X6vYtZXnruh413G3C7UPyEKQIjp0NowEGFP3XdbZGnKZ1FcOBm9fjbPa27PjR12CnBs6iXpBu0X%2BC5QyVWcQG7dOXV%2BcbGoNVTW6zrjTFu3x6M2BHoLZ7PbOOMqDc3E1vRnATDZwtwd28SvcSep0etxwXrpSHpkamQdWIGTI59Mw6US72Gu%2F0XYiSUqyKfAj87i60JRsDm4ZZEw9xPSmepQ3VP%2FDW4SgRqY3vnYrMIp1%2BgkxtvRj06ZFn86OSG5I%2Fp9BH%2BPsxdkB6HiGhA6jIFqxEy8LKfhSkb5AufwdmczZb%2FjmhnXiGKr2QYODNAm1aNQ41%2Bf3whkRaVjPc2D8nCIytgrfqEfDZMGSDYzp7JE0XJEZmoprgf5NmvRwHp3JhK7Gx2KMjiR6e0ZUfqRWdo%2Ffpm0Z60lOBWq1o1Gg8jaydze5x2tkaniPrFlGiJwcfBAVDXIoUjq1Mmh4SJK73C3onuTAWI3Qx3POQEpC3qMIOsFc2eTdWaw8Um2qfcOByYYoPUibN8iXoR6izC74wQc51MV82CbrVEkXz5RINq2ghHuWO9L0WvlnhNdOin9px%2F81Vvb5ccx8Gq3DDp4YrKBjqkAeWTkkRfasOpIIKG3pTUD8uCZxwmaJ1hn%2BAfEIg5CA4ceC0WxIZbTh5GwJIfvo5JUJsCzInkYBsiP2JmaJRmiB9t%2BTjakK%2FZIwJD6TeqlH71AaX%2BRUNP8L0maSFdOzn9CXJUcCActphgnMryJuOs4JPIdwLJCDJh0jGxZIbX2m6GLR4%2B5QKZT%2BsZ06eatBO3rPLwGU%2B0sMjkbOr%2BPvDEJmBKwpjl&X-Amz-Signature=4714c95dd862fab05d3f40ecc5cfad14ac6232f261a61ac9e6729b38d7c7c3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
