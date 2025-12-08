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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F7QOTDE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX7BLGw1Ry0pHqF2C3hoszmG7k00M%2FpKPu7h8eGUzd6QIhAIQao4Stk%2BHlNSOWWJsbkP18Cpc6UXtPoouOrGHQov3LKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbmCB57cus8WWfV4Aq3AMvtHl5RO2EBDYenm%2F0BHd9AJJtTUu13RwmbjwMaZtFk9tBbjEwhut9xoyRMy%2BMACb8Hbuk%2BlY2BlaQ%2BZF7%2BdAPHs%2FU%2FLDI7FrN2Her4vv8ZCM5fFPxNJpgo3DsRTk%2Bbzmadd2QlB7H4iXBqBphJw4MSD9WPDxtMJ9Jk1sO%2FQpaVXpsWoYsfAtIC2oskM8B3i1euh7WcCjSgiFdGHWAV%2BV04o6%2BGmRfbpZf%2Fn7nZiwkHRUvuHwf%2B7e2rz3YpyxzS64n3SiBkRX22OmfTkMf33cqMI%2FqCKlWxdsBH71AeaUeMaFwur8MseSV3YX%2BuHFAoXgPDUOQRhlwC1SpSuNfU4SbevXrThh8lF2JaeqBZTnXGOVhqe83n4iDM7Hd%2F6hrG6jgLMAwhuvGAgNDuV%2BvfffsSmknhBt7rBe%2Bbqx9UVd7OYy8EOOnfBpgK3FWZGf2TwT7DBc26ZsWbxSj6LQpIXxK8e2Z0ZJiAeax5QcsvTHhkIIy3hl1WhY%2FU27bBEs%2BqNo19Dzymq%2FMFnvK35QRNDSeI5%2F%2B%2FMEqRB09vBAhLSIE%2FJP4x%2FBpSssbWq0IPRMVUIRv6qhTChF3nBfuMIfnYuu5lDmX0H0TnbjXgnopxboN6GLYHLbV6jstwHgo0TDowdvJBjqkAbPBlYTLrGiFiOMpZk17LFsiK%2B9Z74YGxeRnNwSXK981%2B2xWxOUvxQasDa0SsYvLwcugt8Xn%2FH65ifmOp2SKUyZ%2Fe1nn5HjYDDrUYl%2BPNcJtHqE5GVYHwrAHn5i1CBVQ2ANB1%2FE4%2B5llcqJOMkZ6dnNLZr54tb5w8A4O6FQWxp6OPzLy7GjdevcQvW7xZzOt2rfGuv%2F0XLq9mX8%2BUX%2BJ8Cwk77cK&X-Amz-Signature=b17828ad2fc8a78ce34f3e73e231e8f12fc7346809a103176308527f4f57582e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F7QOTDE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX7BLGw1Ry0pHqF2C3hoszmG7k00M%2FpKPu7h8eGUzd6QIhAIQao4Stk%2BHlNSOWWJsbkP18Cpc6UXtPoouOrGHQov3LKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbmCB57cus8WWfV4Aq3AMvtHl5RO2EBDYenm%2F0BHd9AJJtTUu13RwmbjwMaZtFk9tBbjEwhut9xoyRMy%2BMACb8Hbuk%2BlY2BlaQ%2BZF7%2BdAPHs%2FU%2FLDI7FrN2Her4vv8ZCM5fFPxNJpgo3DsRTk%2Bbzmadd2QlB7H4iXBqBphJw4MSD9WPDxtMJ9Jk1sO%2FQpaVXpsWoYsfAtIC2oskM8B3i1euh7WcCjSgiFdGHWAV%2BV04o6%2BGmRfbpZf%2Fn7nZiwkHRUvuHwf%2B7e2rz3YpyxzS64n3SiBkRX22OmfTkMf33cqMI%2FqCKlWxdsBH71AeaUeMaFwur8MseSV3YX%2BuHFAoXgPDUOQRhlwC1SpSuNfU4SbevXrThh8lF2JaeqBZTnXGOVhqe83n4iDM7Hd%2F6hrG6jgLMAwhuvGAgNDuV%2BvfffsSmknhBt7rBe%2Bbqx9UVd7OYy8EOOnfBpgK3FWZGf2TwT7DBc26ZsWbxSj6LQpIXxK8e2Z0ZJiAeax5QcsvTHhkIIy3hl1WhY%2FU27bBEs%2BqNo19Dzymq%2FMFnvK35QRNDSeI5%2F%2B%2FMEqRB09vBAhLSIE%2FJP4x%2FBpSssbWq0IPRMVUIRv6qhTChF3nBfuMIfnYuu5lDmX0H0TnbjXgnopxboN6GLYHLbV6jstwHgo0TDowdvJBjqkAbPBlYTLrGiFiOMpZk17LFsiK%2B9Z74YGxeRnNwSXK981%2B2xWxOUvxQasDa0SsYvLwcugt8Xn%2FH65ifmOp2SKUyZ%2Fe1nn5HjYDDrUYl%2BPNcJtHqE5GVYHwrAHn5i1CBVQ2ANB1%2FE4%2B5llcqJOMkZ6dnNLZr54tb5w8A4O6FQWxp6OPzLy7GjdevcQvW7xZzOt2rfGuv%2F0XLq9mX8%2BUX%2BJ8Cwk77cK&X-Amz-Signature=4b9407235248ab8df7bec469b2e2085beb64fe875208449eb21ae3523ea3034c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
