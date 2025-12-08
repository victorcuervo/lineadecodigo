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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G6IYSJQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFM6s9EDXmIAa6sjonzdOMeETRTPEyq6adUlNgYtjG2uAiBEw5310rqjVqD0wksdZzYNkSMAuqLm14wYBjPDEQVhuiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRvCF9ZxAd%2BeqsmQKtwDBwH6DIwYkHV3ezLis5FOeHggArbabHwHkCvngv0oRiaS9czJcsiNPCoAEqnV%2F6ekA0KGTiDQuN6JzmXzH3%2FzLmC4jkbIrfUNaRGAR8gi8iaKZBfhgaNrT84mIu7h0435jC0zNQ1550%2F%2FxX4qzoc%2FMlc3Vl5wVafqBmiVv0MNKxsqppJWDNbvNWjQhL3J98RyXrHn1CS%2B1Z7%2BwJEDOyA3okc%2FUxmN1OAPMFGbh4YuS2ASt24XxZ9mnsl5hWD%2BxGKfu57AuWKHOq86AULqF0KhbYTyPW649%2FSMugnThUc1ePjbQj%2FTudHBgbYvXdyAXILgnU6aJdAhU6kBG9kuE%2F1WChbV%2BXWJcpw68JVpAy5lRTdC%2BzOeaU3Kiuidiy97PhCw95g9mLNVQXuUgKAgnu3G7wnSgEd%2BEhz3A%2BGXAiFYNYLEScp1LMtZCB4DWPjwRZqNyTyd9fFpn4xKlQ6jj7N2lcjyokFgX28YtirlpR2NwnnIMrBLyLG%2FEt741cgrDyKBTrIOhtfNVWJmXHguXNXDcSd9qH7Jw7ImuT0BV9m%2BsEpuNZnc3UwHy5qfd3DEhelxtVpMsStEyyxzVHYpzsPIvf8f6gVHJbUPxGb6Ehbc%2F%2Fqfe6L46IfHGAmG%2BZowwaLdyQY6pgEbffV819gOkp%2F0xXtS48WLjmSYZQzDsQ1ke7WTIwOlP87XMeYxslgp0Z78vRnz4BXtdzPHT1SwBI4SEMczXv7ypbVVZMtW9Ng3rezHB3Uj8v1V9k4gqB7v5I5IVfS20Kl4C3DMTXFQwetc43ktdxUiBYRr0DlM4G8wHQSA6gu1aNEDtjPYxg3CNwVnDFMZaIx%2FKuBNZsD8EWtBUn1hHEU9bSXxyPsH&X-Amz-Signature=599ba5f7c18a336015a70546c963a0e9349f2d2af699af44414c2d1093ee9a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G6IYSJQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFM6s9EDXmIAa6sjonzdOMeETRTPEyq6adUlNgYtjG2uAiBEw5310rqjVqD0wksdZzYNkSMAuqLm14wYBjPDEQVhuiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRvCF9ZxAd%2BeqsmQKtwDBwH6DIwYkHV3ezLis5FOeHggArbabHwHkCvngv0oRiaS9czJcsiNPCoAEqnV%2F6ekA0KGTiDQuN6JzmXzH3%2FzLmC4jkbIrfUNaRGAR8gi8iaKZBfhgaNrT84mIu7h0435jC0zNQ1550%2F%2FxX4qzoc%2FMlc3Vl5wVafqBmiVv0MNKxsqppJWDNbvNWjQhL3J98RyXrHn1CS%2B1Z7%2BwJEDOyA3okc%2FUxmN1OAPMFGbh4YuS2ASt24XxZ9mnsl5hWD%2BxGKfu57AuWKHOq86AULqF0KhbYTyPW649%2FSMugnThUc1ePjbQj%2FTudHBgbYvXdyAXILgnU6aJdAhU6kBG9kuE%2F1WChbV%2BXWJcpw68JVpAy5lRTdC%2BzOeaU3Kiuidiy97PhCw95g9mLNVQXuUgKAgnu3G7wnSgEd%2BEhz3A%2BGXAiFYNYLEScp1LMtZCB4DWPjwRZqNyTyd9fFpn4xKlQ6jj7N2lcjyokFgX28YtirlpR2NwnnIMrBLyLG%2FEt741cgrDyKBTrIOhtfNVWJmXHguXNXDcSd9qH7Jw7ImuT0BV9m%2BsEpuNZnc3UwHy5qfd3DEhelxtVpMsStEyyxzVHYpzsPIvf8f6gVHJbUPxGb6Ehbc%2F%2Fqfe6L46IfHGAmG%2BZowwaLdyQY6pgEbffV819gOkp%2F0xXtS48WLjmSYZQzDsQ1ke7WTIwOlP87XMeYxslgp0Z78vRnz4BXtdzPHT1SwBI4SEMczXv7ypbVVZMtW9Ng3rezHB3Uj8v1V9k4gqB7v5I5IVfS20Kl4C3DMTXFQwetc43ktdxUiBYRr0DlM4G8wHQSA6gu1aNEDtjPYxg3CNwVnDFMZaIx%2FKuBNZsD8EWtBUn1hHEU9bSXxyPsH&X-Amz-Signature=5b0a777e288b852f5f637fc578a0cc43a8637ee0db10a5b0a9c9f0d5ec174826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
