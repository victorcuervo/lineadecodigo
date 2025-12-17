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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBZOEQA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBW2ji6aNqupdNWxXiUSIiR8UGIGHXQhp7Za8GKxEmxFAiBncGircWRyiT%2Fg8f4SUc0jpmbBIGxPcI0jJw6wPvvXuir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMVuzHTM9gkftJfnSQKtwDsIS%2FTKd54CyWddvmPikRjEMl%2FQFpPKPYTdSDlrx0Lj7CYNUQSljMgEQ%2FjCNSadiHlN%2Be%2FYJR65eE6Eumcb6THOSTTZ9O5mnVawh6bTtLnoot1JwLrp4LqRr7qYlhEZGQh6NDuGVO1hyAOvwgb1wum342QyI2Jc6JE0dO7z%2BNTrD4bAKOtTPcz3tR1XvUoulF3a7zm1EB9shGTLpxvpzp%2FqLQ8w%2BXkSBob0R1p98Vhv1nxAX3pt%2BfqLHT%2Bu43ClPKsS5XDQ0m1s4cjQpcopOKKvHoZQwDQkT95dgG8cqTR%2BduepA0%2FcSu6fH1svB%2FDf0Xw7OLQpBXH7KPhdje7qvJ1m1Z24huKP5JK674VJsjxNrMcR8JyMeD72f6aPJcP5oF8BoNzEN3kKKayh4SYozJjyy8rJ3GCjARsChRG0FTwjgQCOkW95vTvDzvWdkMYcg040nEQzJoDcYQ4NQIepNEV1ecX7vE%2FkU1%2B9EgL7Ih4dkqW8j5XQqrIkddq7ps8Pf1271hHbc%2FD9XkrvOuqFAaRxpHDkWFOTzRC%2BSBLXcVkL4tt3oXIo6EZaS7TSPcOWsbJ86vSkcHcuc1K0%2FA90jAyoYiAvz4oFS2u%2FLycPYWu3ggIZPr13RVs01vqukw686IygY6pgE%2FDqYgtx%2BMRBx6rImiWm97tQEsGrR5JgAiraXJTQV3twzCTSGWdRdM%2Fjjx8yF2cthz5SSkz%2BDyBANfslMgqyCYiO8GQdbGPUrx4phZCq84KF99yrk4mezpi2Tes10Oi9AUO%2FX9y65b0Myu50NbCI1JxmSm0jqTkV9vMh4iFSelwUV4BLAirZOgCCH5QDVA6XBIG%2Bkrh0lwrdws0pAsy8C58tGay3hr&X-Amz-Signature=62b6078a04fb2a4685ad86b9afb4c91bf624be85321ebc6a146be229032159bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBZOEQA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBW2ji6aNqupdNWxXiUSIiR8UGIGHXQhp7Za8GKxEmxFAiBncGircWRyiT%2Fg8f4SUc0jpmbBIGxPcI0jJw6wPvvXuir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMVuzHTM9gkftJfnSQKtwDsIS%2FTKd54CyWddvmPikRjEMl%2FQFpPKPYTdSDlrx0Lj7CYNUQSljMgEQ%2FjCNSadiHlN%2Be%2FYJR65eE6Eumcb6THOSTTZ9O5mnVawh6bTtLnoot1JwLrp4LqRr7qYlhEZGQh6NDuGVO1hyAOvwgb1wum342QyI2Jc6JE0dO7z%2BNTrD4bAKOtTPcz3tR1XvUoulF3a7zm1EB9shGTLpxvpzp%2FqLQ8w%2BXkSBob0R1p98Vhv1nxAX3pt%2BfqLHT%2Bu43ClPKsS5XDQ0m1s4cjQpcopOKKvHoZQwDQkT95dgG8cqTR%2BduepA0%2FcSu6fH1svB%2FDf0Xw7OLQpBXH7KPhdje7qvJ1m1Z24huKP5JK674VJsjxNrMcR8JyMeD72f6aPJcP5oF8BoNzEN3kKKayh4SYozJjyy8rJ3GCjARsChRG0FTwjgQCOkW95vTvDzvWdkMYcg040nEQzJoDcYQ4NQIepNEV1ecX7vE%2FkU1%2B9EgL7Ih4dkqW8j5XQqrIkddq7ps8Pf1271hHbc%2FD9XkrvOuqFAaRxpHDkWFOTzRC%2BSBLXcVkL4tt3oXIo6EZaS7TSPcOWsbJ86vSkcHcuc1K0%2FA90jAyoYiAvz4oFS2u%2FLycPYWu3ggIZPr13RVs01vqukw686IygY6pgE%2FDqYgtx%2BMRBx6rImiWm97tQEsGrR5JgAiraXJTQV3twzCTSGWdRdM%2Fjjx8yF2cthz5SSkz%2BDyBANfslMgqyCYiO8GQdbGPUrx4phZCq84KF99yrk4mezpi2Tes10Oi9AUO%2FX9y65b0Myu50NbCI1JxmSm0jqTkV9vMh4iFSelwUV4BLAirZOgCCH5QDVA6XBIG%2Bkrh0lwrdws0pAsy8C58tGay3hr&X-Amz-Signature=ed730b0bf324d343596e3c7971edfa1f8b50ec9df4caff0e72016f33254bc601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
