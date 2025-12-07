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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466444RHGYC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8r6KI8DRINDxe%2BUuq%2FAPfD3X9uihy%2BFtazYFJRCn7mQIhAPDufY72SErwEPFQz%2BvOUE9pSpCAjpgwjuF0MtO4v07SKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJJUFiSSXb%2Fd%2FpoYQq3AMZ2s3n%2FBSTT4c4ipN0SZHsX%2Bt8YtmWtXjsRKaSAJai0i%2F87%2FVRkPcHGk6%2FWgWTomV2%2B1kY9jc6KvzmKViFxkLsDFiUtFyu5NxsraaPW0JY%2BIgrduAwsyEyCzbZtZ%2FFiBiOjb9JpEGRKgG6mOuq46zpEG1DXaDgvsWs7g%2BOLlXwxCN6FiMVACgmud8QCyF1wyNbdeJ185QTZevDaKw9MiNT1yqoIYf2NPZqNDgX2yjsF6Dz24%2BKFLqYCUdUvGwGst1vwvlavRQ0kHCavXx2ngi2uyGKb0u8zUpfg2SO9tYSueC8DNfk53I0zvjnez%2FGCM%2BYMLB7e%2BNKKA9XgVtAyojn8lE%2BcB0yCrQPMKrluOzTbIEBjemRmTbCWqtoTyhv4B8kr3TvbaRfr%2Fok4opfeX2DtIM%2F8ze%2BeGDGC%2F68xntYC1fttmmL36Cmv16RNYO%2Fcco8QFQ9RZt3QxLjwpAlmxp%2Bu04KrXRkmIcfm1XIGwULgDs1P608HJf0nDXRkN%2FIxQoy5%2Fa3Xmr8Wtx8n9aKIg39C7d1TlE7fbnE9Qfcew7l2zwflKWDOZlR2J1f0m%2F2s%2FoNaaC6mAexKvUkjjRepE5RJb5dTP2f03%2F18VsN1Emxrk7%2FB1IwqOvpEpBfxzCWx9fJBjqkAZqmG6aKnpYBb3HC%2B%2FV%2BzDiomikt297y3P31uXSTCmYoY4G5Xw5j05YKJNBuwPOXK3Ed%2FKpOPMsZml5fqH%2BV9BuIqnhe0Jxei%2B06jA8cE%2BeCNybaJI5Ox8dZiNV6BngByXlttnaq%2BvPECLPqXajp1jVjAL8KTk94gHtYxh8HeVtTwL%2BRt0Pmqm5pTDDnlENaMVySxLmvrMa6iMY8eiH2A7unSnQs&X-Amz-Signature=7dcd6e5a9249929fb7bf51c9be522367d0792db00d532623da8275025394fee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466444RHGYC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8r6KI8DRINDxe%2BUuq%2FAPfD3X9uihy%2BFtazYFJRCn7mQIhAPDufY72SErwEPFQz%2BvOUE9pSpCAjpgwjuF0MtO4v07SKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJJUFiSSXb%2Fd%2FpoYQq3AMZ2s3n%2FBSTT4c4ipN0SZHsX%2Bt8YtmWtXjsRKaSAJai0i%2F87%2FVRkPcHGk6%2FWgWTomV2%2B1kY9jc6KvzmKViFxkLsDFiUtFyu5NxsraaPW0JY%2BIgrduAwsyEyCzbZtZ%2FFiBiOjb9JpEGRKgG6mOuq46zpEG1DXaDgvsWs7g%2BOLlXwxCN6FiMVACgmud8QCyF1wyNbdeJ185QTZevDaKw9MiNT1yqoIYf2NPZqNDgX2yjsF6Dz24%2BKFLqYCUdUvGwGst1vwvlavRQ0kHCavXx2ngi2uyGKb0u8zUpfg2SO9tYSueC8DNfk53I0zvjnez%2FGCM%2BYMLB7e%2BNKKA9XgVtAyojn8lE%2BcB0yCrQPMKrluOzTbIEBjemRmTbCWqtoTyhv4B8kr3TvbaRfr%2Fok4opfeX2DtIM%2F8ze%2BeGDGC%2F68xntYC1fttmmL36Cmv16RNYO%2Fcco8QFQ9RZt3QxLjwpAlmxp%2Bu04KrXRkmIcfm1XIGwULgDs1P608HJf0nDXRkN%2FIxQoy5%2Fa3Xmr8Wtx8n9aKIg39C7d1TlE7fbnE9Qfcew7l2zwflKWDOZlR2J1f0m%2F2s%2FoNaaC6mAexKvUkjjRepE5RJb5dTP2f03%2F18VsN1Emxrk7%2FB1IwqOvpEpBfxzCWx9fJBjqkAZqmG6aKnpYBb3HC%2B%2FV%2BzDiomikt297y3P31uXSTCmYoY4G5Xw5j05YKJNBuwPOXK3Ed%2FKpOPMsZml5fqH%2BV9BuIqnhe0Jxei%2B06jA8cE%2BeCNybaJI5Ox8dZiNV6BngByXlttnaq%2BvPECLPqXajp1jVjAL8KTk94gHtYxh8HeVtTwL%2BRt0Pmqm5pTDDnlENaMVySxLmvrMa6iMY8eiH2A7unSnQs&X-Amz-Signature=831b173ea88d32ef4ddea021370f21f55c04819b82fc2e4e8db556aa8d6cfd0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
