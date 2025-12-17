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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XEYWEIG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzWrNfBPxW6F5uDCV7i5JrNgYf4WZwDPO%2BivFIP9cLgCIFTLHBU2RNNzrbv1m4Q2gktvFvDtoFXlIDApZCdJZENJKv8DCH8QABoMNjM3NDIzMTgzODA1IgzXZSb5QIvxXUTGDN8q3ANret%2Fe4wN0zY2rXnAhcEqye4684eEbvQIsbPVlslocBYAoiyZnREh%2B9hwxHxZcehNf61paulHerexXmMFroId%2B51W%2FPW71rJRz0vqwUsU10hTGcnPovnpx09jDPFFnH219J%2BFpq5NCAh5uPwLACFbzC9Jj%2BbWCOY9DMk4ir0ha6BLNEt3Oh5ju8NPzsOVzjAj60oRsopJz1FbO8NTed%2B5AdubUSwVvoAT2niKSxuwHFawVeMG556v0DDQqS5jg4VvBLNhmeWwVO1%2BKOFXW91kMX3lfBs88eD1pYNz6JRXrQXbTc6r0Lm46DWpOMEvCc9NsNg2DYp7veWnUnKT7bDmU3QCuWDGVEFfmcUtytVN615uIY4ILb2vj%2B5E3%2FFZGC2FDDuy0%2BpcheTZcbNfA3lXW7QKkeCG5%2ByZWAnKoLj8EhgbSNXMZgnaCyqA7D6DYivc6g53Pzku5tTbKsLVGMtNHPXbO7ZjRphjPR8l0vukxFtTmegNgTfn4OWCzRSBIlXKOFgmxtQikGTAleVE8uAt4bXYxB89KDIAB0%2FwktvBNfQb5vxbzdLHGdKPd2JzQKNkiMl4YZvQaZIwYsDoPv8nH7uFb86npNL6o1W0D6J4giKdCGHgTP47xkAPrmzCF4orKBjqnAS4YDrhYrlvOxBfdFDzjTE8XuTVjB%2B0lemENDs6yeOk0eYNMyJTU2C8YDB7vwdvrizV%2F95CMFStnV0LK6s%2F72EpxTt3LehqfcSAVTW2o%2Btd9s4wAo%2F6ci7k%2FKyUG%2BkkQru9%2FFC5htQ6PKNdZQFX4TaxPJt%2BeIswFwqJaNfqYvXkyau5tEyt%2B11owD70wamYAFGj3Bg0POKYnGrWTu8UIe5PEfSBAmfnn&X-Amz-Signature=cae923b2e9b2e0d3b3b5c73ecda1a2417ab0b5471695e8703de3c218895d7532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XEYWEIG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzWrNfBPxW6F5uDCV7i5JrNgYf4WZwDPO%2BivFIP9cLgCIFTLHBU2RNNzrbv1m4Q2gktvFvDtoFXlIDApZCdJZENJKv8DCH8QABoMNjM3NDIzMTgzODA1IgzXZSb5QIvxXUTGDN8q3ANret%2Fe4wN0zY2rXnAhcEqye4684eEbvQIsbPVlslocBYAoiyZnREh%2B9hwxHxZcehNf61paulHerexXmMFroId%2B51W%2FPW71rJRz0vqwUsU10hTGcnPovnpx09jDPFFnH219J%2BFpq5NCAh5uPwLACFbzC9Jj%2BbWCOY9DMk4ir0ha6BLNEt3Oh5ju8NPzsOVzjAj60oRsopJz1FbO8NTed%2B5AdubUSwVvoAT2niKSxuwHFawVeMG556v0DDQqS5jg4VvBLNhmeWwVO1%2BKOFXW91kMX3lfBs88eD1pYNz6JRXrQXbTc6r0Lm46DWpOMEvCc9NsNg2DYp7veWnUnKT7bDmU3QCuWDGVEFfmcUtytVN615uIY4ILb2vj%2B5E3%2FFZGC2FDDuy0%2BpcheTZcbNfA3lXW7QKkeCG5%2ByZWAnKoLj8EhgbSNXMZgnaCyqA7D6DYivc6g53Pzku5tTbKsLVGMtNHPXbO7ZjRphjPR8l0vukxFtTmegNgTfn4OWCzRSBIlXKOFgmxtQikGTAleVE8uAt4bXYxB89KDIAB0%2FwktvBNfQb5vxbzdLHGdKPd2JzQKNkiMl4YZvQaZIwYsDoPv8nH7uFb86npNL6o1W0D6J4giKdCGHgTP47xkAPrmzCF4orKBjqnAS4YDrhYrlvOxBfdFDzjTE8XuTVjB%2B0lemENDs6yeOk0eYNMyJTU2C8YDB7vwdvrizV%2F95CMFStnV0LK6s%2F72EpxTt3LehqfcSAVTW2o%2Btd9s4wAo%2F6ci7k%2FKyUG%2BkkQru9%2FFC5htQ6PKNdZQFX4TaxPJt%2BeIswFwqJaNfqYvXkyau5tEyt%2B11owD70wamYAFGj3Bg0POKYnGrWTu8UIe5PEfSBAmfnn&X-Amz-Signature=83593694e0477af8f3ccc7d4d8963a38169bd9a74c071cc7a394f41f3494902d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
