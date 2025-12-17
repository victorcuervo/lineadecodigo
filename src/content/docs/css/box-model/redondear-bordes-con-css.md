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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRBWEU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqiPgbmk1RiOpGcIS3bVdESoqEUxVMoAPWoMpES4XfKwIgTUrhAKcVo1oNgtp6b2pMOjPIAbMX080aadboURLfGSEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHN47YLT8foNJdVubCrcA8feJoWORdkMeakE%2B3oc7J5jOi7iisCB%2B3X4bQiAEdnF7BmwIfr%2Bawm%2F7FLByCuPOcAzS8xg7FyG2mb44j3X90PHFBQh%2BopbY11On1hgCDOyOfkQP2xDojvy0CbVT7WyaiwfG7mR6ChY2nvrMaaUIGGHdVw9c3%2F56GOMiFP1TxdDgYD8TV6XnKSV%2BFEwc2swyOPyg%2BgO2xXm%2B936FPONUvrLpzuJVcG9thhXL1AVJlMsUHlbNV7rw13cBYW1pm6GuiawPWb5SF%2F%2BbpbddlIrpa2ztzahDoyXzHUXYFgWrDgusa91xtOtu%2BX1pS1zcAz2amocSazsAwkqLU%2FwW1uIrPoY7fIg%2FOZab9tN0X8mQmRd74IaWe135hblsltIEji%2BZKGnJT%2BupcbcfjZj6b%2FtgLboRLsPgkIX8OSA7lvf7Qd3FG%2BHrsvyyJDFhgve1X2q%2F7K7KEBGOyMjGBkyEvU8wpmKTxv7a3ZSZq%2BFpkHsPGU4LBZuOOTDqHv5jRqpRyyK6g7Sijk24hu1qNvK1pK7Advp9G6fj31sFKbdyKokrm8SLO8yyhNBLjFncM8fe2BTZlT2KbQHXNsUHgazaeyNHuct6zqVbWSbaKB8cfXouHkcLz0GWm7g6rWPq5G9MJnSicoGOqUBAwa9Td3X1iLL2MdwJsUK6s1TzsPgthDNf2gKVWrleWqOGV1KPJA9ea46i6gv32dvlP3sRIMeZQsrfts%2F7Birp9PG2cCDN7hmhlR7xwpqlnrSzl2gV8gs1mAsCOXSGurMkN4Em%2BJtHbarzSWzkvoztnS8Ju4M4Zb%2BWk9BKEo1%2FefgMkyrZntbRcGEtE1F0zxZqV3cxn6CEpYum%2BMQqo1LIjRyF50W&X-Amz-Signature=9d016a4d35ef11c2c91c45b71d859250384d6426f34ae7c7a220daa375fe00a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKRBWEU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqiPgbmk1RiOpGcIS3bVdESoqEUxVMoAPWoMpES4XfKwIgTUrhAKcVo1oNgtp6b2pMOjPIAbMX080aadboURLfGSEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHN47YLT8foNJdVubCrcA8feJoWORdkMeakE%2B3oc7J5jOi7iisCB%2B3X4bQiAEdnF7BmwIfr%2Bawm%2F7FLByCuPOcAzS8xg7FyG2mb44j3X90PHFBQh%2BopbY11On1hgCDOyOfkQP2xDojvy0CbVT7WyaiwfG7mR6ChY2nvrMaaUIGGHdVw9c3%2F56GOMiFP1TxdDgYD8TV6XnKSV%2BFEwc2swyOPyg%2BgO2xXm%2B936FPONUvrLpzuJVcG9thhXL1AVJlMsUHlbNV7rw13cBYW1pm6GuiawPWb5SF%2F%2BbpbddlIrpa2ztzahDoyXzHUXYFgWrDgusa91xtOtu%2BX1pS1zcAz2amocSazsAwkqLU%2FwW1uIrPoY7fIg%2FOZab9tN0X8mQmRd74IaWe135hblsltIEji%2BZKGnJT%2BupcbcfjZj6b%2FtgLboRLsPgkIX8OSA7lvf7Qd3FG%2BHrsvyyJDFhgve1X2q%2F7K7KEBGOyMjGBkyEvU8wpmKTxv7a3ZSZq%2BFpkHsPGU4LBZuOOTDqHv5jRqpRyyK6g7Sijk24hu1qNvK1pK7Advp9G6fj31sFKbdyKokrm8SLO8yyhNBLjFncM8fe2BTZlT2KbQHXNsUHgazaeyNHuct6zqVbWSbaKB8cfXouHkcLz0GWm7g6rWPq5G9MJnSicoGOqUBAwa9Td3X1iLL2MdwJsUK6s1TzsPgthDNf2gKVWrleWqOGV1KPJA9ea46i6gv32dvlP3sRIMeZQsrfts%2F7Birp9PG2cCDN7hmhlR7xwpqlnrSzl2gV8gs1mAsCOXSGurMkN4Em%2BJtHbarzSWzkvoztnS8Ju4M4Zb%2BWk9BKEo1%2FefgMkyrZntbRcGEtE1F0zxZqV3cxn6CEpYum%2BMQqo1LIjRyF50W&X-Amz-Signature=8011a1f2d38cfdaf88a4faeccd403aa7b96f30e807f65142b456b5b9ba72547f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
