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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXPTDJY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSijqOFs8aJRRkV3aabUuk8o9m643oARFmEE%2FiKef76wIgQ4BB6alf0EBKC5UEdMNH%2F%2F63PV32AXHta8XA%2BRPGIIcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlTn3thZWyI1GsrqSrcA4sMcD6PqpiX4HxqSoY0LpHdLYVWRD4WpmFvrZctriDIvYreg4%2FMtCcT%2BGuJq8d8AxVX5I8O%2Fe%2FwTyDIsppTWXwi9Wtwi2rDN6SuKdPcSwmOBXcyDgQ3SNgcombo4G3yfL8Hm6d99uwCUUGsnbikcYXXLkDZcbdHrc1Ye5KFez4nrzjd09%2FpPWRDZ3rF9noqjNs1UrF6sJVcTNx4oKpOJc1Odeez89R7IEG%2BeH03MGRl033fi8VcHKhCjPWUO7RRR80yGzqZiRprQVPUuGBHN7K%2F9zmRNCj6to9weLCoHf2XOJsN6zkmM2xZ%2Ft7XN6MnVYM%2FxDEdAsITZDEbaz9aS1iPPnlzKtFmQjhuVoZPTXL1xFU%2BYdZi9%2Fcl1x%2F8NbrodksDYAnQqGYICXrjNenPEjvcCmoT1ygXVl0CaxatYjAfugoOf4q%2BRHJVvEwi5Bm5deK6zWpC5lPryqH0n1lCWk03pVenGky7GPp6e%2F8EzliDHhrNt7GgnvB4aOiR8mCC1UaNCDvls8xicPu97jTNJK0IE4zLkroUrQTEco6QtS4PtRsJWJhliTdGMT9ckc601UiYJbkhh0NN2ba0JwU2lJm7cJpmW1GWhErO%2FDBwb0Ps%2BCwKbQr8ysyYbpW7ML2a1ckGOqUBFvl6eTdOizo0WiVs9eIdahjU3wokMEBHumRKE2hbHH4NCVqwsuvDKKXwcq0PZYpOk6vNs73ktIb0EXjvHaR0Je6zFy5CSE3IklXMs6PzuPZWWUzd0w%2B6k%2Fvz%2BDsVyPZaXxBiMc3PjvahfTeE9bOLm1vsOEdedi5MQFnAskkbBwqIr151MRZCa0f6ypvwm82RcYTBek0X9kMZ8afhUv1Ae7QZX7IM&X-Amz-Signature=f28363f3f900d1bbcebecc733aafa9a2e01d77cda618d7db6ce5a1835f923c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXPTDJY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSijqOFs8aJRRkV3aabUuk8o9m643oARFmEE%2FiKef76wIgQ4BB6alf0EBKC5UEdMNH%2F%2F63PV32AXHta8XA%2BRPGIIcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlTn3thZWyI1GsrqSrcA4sMcD6PqpiX4HxqSoY0LpHdLYVWRD4WpmFvrZctriDIvYreg4%2FMtCcT%2BGuJq8d8AxVX5I8O%2Fe%2FwTyDIsppTWXwi9Wtwi2rDN6SuKdPcSwmOBXcyDgQ3SNgcombo4G3yfL8Hm6d99uwCUUGsnbikcYXXLkDZcbdHrc1Ye5KFez4nrzjd09%2FpPWRDZ3rF9noqjNs1UrF6sJVcTNx4oKpOJc1Odeez89R7IEG%2BeH03MGRl033fi8VcHKhCjPWUO7RRR80yGzqZiRprQVPUuGBHN7K%2F9zmRNCj6to9weLCoHf2XOJsN6zkmM2xZ%2Ft7XN6MnVYM%2FxDEdAsITZDEbaz9aS1iPPnlzKtFmQjhuVoZPTXL1xFU%2BYdZi9%2Fcl1x%2F8NbrodksDYAnQqGYICXrjNenPEjvcCmoT1ygXVl0CaxatYjAfugoOf4q%2BRHJVvEwi5Bm5deK6zWpC5lPryqH0n1lCWk03pVenGky7GPp6e%2F8EzliDHhrNt7GgnvB4aOiR8mCC1UaNCDvls8xicPu97jTNJK0IE4zLkroUrQTEco6QtS4PtRsJWJhliTdGMT9ckc601UiYJbkhh0NN2ba0JwU2lJm7cJpmW1GWhErO%2FDBwb0Ps%2BCwKbQr8ysyYbpW7ML2a1ckGOqUBFvl6eTdOizo0WiVs9eIdahjU3wokMEBHumRKE2hbHH4NCVqwsuvDKKXwcq0PZYpOk6vNs73ktIb0EXjvHaR0Je6zFy5CSE3IklXMs6PzuPZWWUzd0w%2B6k%2Fvz%2BDsVyPZaXxBiMc3PjvahfTeE9bOLm1vsOEdedi5MQFnAskkbBwqIr151MRZCa0f6ypvwm82RcYTBek0X9kMZ8afhUv1Ae7QZX7IM&X-Amz-Signature=bb0be59629cbace1f39492fdcf295f566987cc8e534e76482942d1c52e4926e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
