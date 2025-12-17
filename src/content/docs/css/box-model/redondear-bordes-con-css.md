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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL2TABU5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW%2FEbqPfNCen5a%2Fkc33NO%2B33yctNdjerRwqeRrMSRTsQIgTT5D6scnjC7ZFJJne8xdsqlYLvc5wxqI%2FTnYtTCbF5Eq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN%2BaQKjdbun72fFx9ircA1lEx1w70GKwk8fEbOajkBSFcMgJdFj0t0USvwHIPWIrcw58boHP88nqtoj9gF3EmOsQto1jzBtiZwVzU2RxaXIyWiypm82TG4oO0ATFPZo3t7dm4IYsMA1jIsYaLzp3q%2FsNOqhcd%2F0AyZc%2FaHpD9AAMsSaur9jyrhPHu3UTXmXog5JoavXsw1zNF3McYcpd5dkVUEdNPxElhSNErADkNdtrB00ma4pjMJmQzAEAaVZ%2FubZglnobzwhSJYDWJhR41zAKwD2QPQqxQ5hXrsDeD1Q%2BjrPd4ioVEohzS0Q%2Flc3CtZCA7kABjS%2BEPuaCw9U98P3gi1mg%2Fy7Q%2B2%2BTtjn2yp9xpWzlimuKjl3JEWXTLEvTQKllVf6yWfgFMZO9epYBA%2B1ddlOAu1pDXjbW5K0nEWSbT31kwcMoNfh60BiKhXawBaE4ypxkkLUTzVl41MY2AzaX43cBE4Q%2FLH5dbClsaXxjuNUvhgkrS3s7LU3Yt9bGbhF%2FE0q%2Fh6uvY%2FOQ%2BecCOAahVdcTd6DqKfArlEGb%2FSYIgrGayBsS5vfmsKSlN1J6YaHc4lR31%2BClQaGIQNjtE8GEs%2FsvKa39OY0VDFe8Y70JktP8OarFCf42ZSdjHTrwka8O2dU0azzkaR3TMJnOiMoGOqUBjUnKVEEuHpXn24SN4LdOPaSZtsD3X9B%2FZfOfpGLPv5OtfS%2F3iDIOVRtst0bD21oQX6XbmMVydP3hj%2Ft0x1tX475scRqTb65e7ywMzWflNlolgWANoEAv6erD0sEECTUA6cy05oZHul8TE%2B4DOQRbnarK2ASONFbKPngwjTXKYJbSeovD2tXPYaY2eQHQzy85t9Pwk4qrUTpM6OT%2FUpcrvS6s%2Bmwb&X-Amz-Signature=4f5f3c346b9f680d54df498e94a7db81678789845df2c2030589034d35d3dc07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL2TABU5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW%2FEbqPfNCen5a%2Fkc33NO%2B33yctNdjerRwqeRrMSRTsQIgTT5D6scnjC7ZFJJne8xdsqlYLvc5wxqI%2FTnYtTCbF5Eq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN%2BaQKjdbun72fFx9ircA1lEx1w70GKwk8fEbOajkBSFcMgJdFj0t0USvwHIPWIrcw58boHP88nqtoj9gF3EmOsQto1jzBtiZwVzU2RxaXIyWiypm82TG4oO0ATFPZo3t7dm4IYsMA1jIsYaLzp3q%2FsNOqhcd%2F0AyZc%2FaHpD9AAMsSaur9jyrhPHu3UTXmXog5JoavXsw1zNF3McYcpd5dkVUEdNPxElhSNErADkNdtrB00ma4pjMJmQzAEAaVZ%2FubZglnobzwhSJYDWJhR41zAKwD2QPQqxQ5hXrsDeD1Q%2BjrPd4ioVEohzS0Q%2Flc3CtZCA7kABjS%2BEPuaCw9U98P3gi1mg%2Fy7Q%2B2%2BTtjn2yp9xpWzlimuKjl3JEWXTLEvTQKllVf6yWfgFMZO9epYBA%2B1ddlOAu1pDXjbW5K0nEWSbT31kwcMoNfh60BiKhXawBaE4ypxkkLUTzVl41MY2AzaX43cBE4Q%2FLH5dbClsaXxjuNUvhgkrS3s7LU3Yt9bGbhF%2FE0q%2Fh6uvY%2FOQ%2BecCOAahVdcTd6DqKfArlEGb%2FSYIgrGayBsS5vfmsKSlN1J6YaHc4lR31%2BClQaGIQNjtE8GEs%2FsvKa39OY0VDFe8Y70JktP8OarFCf42ZSdjHTrwka8O2dU0azzkaR3TMJnOiMoGOqUBjUnKVEEuHpXn24SN4LdOPaSZtsD3X9B%2FZfOfpGLPv5OtfS%2F3iDIOVRtst0bD21oQX6XbmMVydP3hj%2Ft0x1tX475scRqTb65e7ywMzWflNlolgWANoEAv6erD0sEECTUA6cy05oZHul8TE%2B4DOQRbnarK2ASONFbKPngwjTXKYJbSeovD2tXPYaY2eQHQzy85t9Pwk4qrUTpM6OT%2FUpcrvS6s%2Bmwb&X-Amz-Signature=acfaba20a3dcf0743c01d0430ce5e70fa3e7e6a5c1a6a46dac2b9191b5b8b629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
