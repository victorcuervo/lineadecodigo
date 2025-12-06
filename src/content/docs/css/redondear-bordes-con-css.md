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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U47VTSLD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFjwYeWvPEkTJ%2FfJYpWX9XIRrCgi4gHxQRX6qVa9eh4AiEAgKH8K3YYgjqvnRn3%2Byytv2hvwniO0mKddcA8bz6LR24q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLZspfAxO6Pp0644nircA%2FLNoPUM%2Fxu24D4nlZOiWoYa%2B2EKRJwx6Zmf1%2BFThU66Mqy%2FlxZLe08M2kA1gSxYW%2FsJnZ4NrDHKAfBaK5dPtiRr2hKuwj5yMGSacjHX96x4JF%2FN2cBgJsJVeRUOxdcVeIGfRdKqWAX79u9y8PfevFXfe%2BhNLDMcf%2FOMd3sqFapRquTQZ6mw49tG%2FtyWQU9nh1AUIg7P0NncIg1K4TTY0Ica%2F5qyNLZXaORoldpYWJyFErjaKk8G6mrsxDeytqtqI3XVtVXFNmWkMtBxc17dMLIvx%2B%2FniXveqCTkMbZyKCvnC6nGxo2pOhW%2FXFlq33asuqwyuLFngriPkZKXYTwySSrEYASHxwynK4E3%2FoTCAfKUs%2BNXbFIhSzIf2PX49rV82y1nWOFjv0Ak4nIvBBC56XAp2D7V7u98uBvaShcilGY6pPU58xYIeZ%2BfAPiMLW7KZD7OBp78u9RcxZznzHcTEFmEDeUYuAubWyWj0MVqeT2Mv7p93h8XFpsaIPKX2L8Y0w4WIOiC6KFygU%2FylFHnKZV3LTJS0J9lYTV2k0xRFq8QANtYXBPSmxYjZX%2BGWLK8Us4S3sW3UXZYLiZLdD2Hre%2B4IaJq0n3T66b%2B7gBm7bR9UlKYfPWEA%2Bye9S1mMPem0MkGOqUB5rxkf5NoOYEuRhaPY9CgaWQcW5vCO%2FPma2R98wDy3%2FZxclCesuYahUriz1Vtsx5FsvAuv9Cr6qcXK3wWFXEBDN8RXdv2zhRwEZy9Sn%2B9t1XqDvUWBclkTIeCpnqFfTsP5IZPvvjSQptZEnGh%2BYHrYsKX1nK8QRjNRaAurTwNxg20uSvc2VmWOzTGN0Oa90y5ezuSGiY9sPjm6DBC%2FcsU9x1vmKiu&X-Amz-Signature=06ff189d7fc882f44c2298872164c0d764ae573ef2ccfa8dd87dd9ed2e0e9566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U47VTSLD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFjwYeWvPEkTJ%2FfJYpWX9XIRrCgi4gHxQRX6qVa9eh4AiEAgKH8K3YYgjqvnRn3%2Byytv2hvwniO0mKddcA8bz6LR24q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLZspfAxO6Pp0644nircA%2FLNoPUM%2Fxu24D4nlZOiWoYa%2B2EKRJwx6Zmf1%2BFThU66Mqy%2FlxZLe08M2kA1gSxYW%2FsJnZ4NrDHKAfBaK5dPtiRr2hKuwj5yMGSacjHX96x4JF%2FN2cBgJsJVeRUOxdcVeIGfRdKqWAX79u9y8PfevFXfe%2BhNLDMcf%2FOMd3sqFapRquTQZ6mw49tG%2FtyWQU9nh1AUIg7P0NncIg1K4TTY0Ica%2F5qyNLZXaORoldpYWJyFErjaKk8G6mrsxDeytqtqI3XVtVXFNmWkMtBxc17dMLIvx%2B%2FniXveqCTkMbZyKCvnC6nGxo2pOhW%2FXFlq33asuqwyuLFngriPkZKXYTwySSrEYASHxwynK4E3%2FoTCAfKUs%2BNXbFIhSzIf2PX49rV82y1nWOFjv0Ak4nIvBBC56XAp2D7V7u98uBvaShcilGY6pPU58xYIeZ%2BfAPiMLW7KZD7OBp78u9RcxZznzHcTEFmEDeUYuAubWyWj0MVqeT2Mv7p93h8XFpsaIPKX2L8Y0w4WIOiC6KFygU%2FylFHnKZV3LTJS0J9lYTV2k0xRFq8QANtYXBPSmxYjZX%2BGWLK8Us4S3sW3UXZYLiZLdD2Hre%2B4IaJq0n3T66b%2B7gBm7bR9UlKYfPWEA%2Bye9S1mMPem0MkGOqUB5rxkf5NoOYEuRhaPY9CgaWQcW5vCO%2FPma2R98wDy3%2FZxclCesuYahUriz1Vtsx5FsvAuv9Cr6qcXK3wWFXEBDN8RXdv2zhRwEZy9Sn%2B9t1XqDvUWBclkTIeCpnqFfTsP5IZPvvjSQptZEnGh%2BYHrYsKX1nK8QRjNRaAurTwNxg20uSvc2VmWOzTGN0Oa90y5ezuSGiY9sPjm6DBC%2FcsU9x1vmKiu&X-Amz-Signature=bcd035ec585adc9437fdecde659a1bbf6eafe0ca61cf8e32f5d0f1014bad37f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
