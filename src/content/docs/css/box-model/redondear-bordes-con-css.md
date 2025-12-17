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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UR26OSO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcPVodIC9mtlIXNmXoHkh%2Fq83J1tcx8QCgo3JFh4kBJAiEAmuOlANwZ0hNTfUybNjUEJY4wRyumkmsJ8V1UGDIGkdkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLX44PffjjC8mTQqxSrcA%2B5iwrh2IjjoKifg9t607htOy2vEuQbJk%2BEE6Z9OUoP9o04qYNvtjGbtBcOenrDo2uGjsTteqDfhHaVMEYWZuh2Uo0N4%2B6%2FN%2BKW7LfU2f3CqPLAMdFLKttKB%2BFA8yi7zGBXLAdpNIgKIOZC7HptUt6ucvLPCtav4KlPkdZIn9HeVWpSwz4W6FnhEWZN2JPjfIzOFZIkc9wQZ5U%2F2FKLUO3NIZruMQWGcWS%2BdYdaeLj48I5A4wokLLv1p8W08FG4S5ZN61zBsuYspCk5VV7PdGWTsruFEZurjYObtMeGUVYvjXq%2BM310z3OKwZKtdAP7gFfrN9SCHXJbkytONGED4N%2BjB4aYpeSrEsGv20aXn3hVpQPIvuhEjSzQii%2FrjB9T%2BIQ%2FAIyr0jpGNAugGa3LGibVBfnF7CnkXZNgVLrNyCHd4GncqcBgN3GTldbYIpI%2BNB4SrypFUdY%2BJUkj2PIqRllM6G2pDlGXBjQ1K6lpl%2BUAPGzyaeoR6Nt7Vp392RUYeJdp8pSIIR1WDf92CN0w6GFNFKc80CVfsVw87Y%2F0xecLfmVN%2FRVMV%2BfwRsev%2FH886mlbzIfPppS0%2BBPI3XjfMIBM1GuZPZyhtLKqtR2GHXZaCpcf1s4TK4fLVik1jMJCujMoGOqUBRsG5T5V9NGUW7dFlhwOc4PwHr0Ex8oLxy4j4sC5NxHnii02a4VMynzkubWmDYQGVyf3wN7PftxnGwXp3FniWkgI5RNB37iWNb%2BwLQpfJMuJWeBA8ecoRXZjthu48vsDz6wWemNCUyFnw4yZ7ka%2BCXzV49Wz%2FeKF7b40HX%2FvZhYCVRF3aU8FXr3%2FV4ghWmqfxxm2h%2BuckkpvtTlBvZSfplj1QJ8%2FC&X-Amz-Signature=5f1afeb3fd13d70a3e926519684df6bea4c35ff2e20039659244e4eb181a5d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UR26OSO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcPVodIC9mtlIXNmXoHkh%2Fq83J1tcx8QCgo3JFh4kBJAiEAmuOlANwZ0hNTfUybNjUEJY4wRyumkmsJ8V1UGDIGkdkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLX44PffjjC8mTQqxSrcA%2B5iwrh2IjjoKifg9t607htOy2vEuQbJk%2BEE6Z9OUoP9o04qYNvtjGbtBcOenrDo2uGjsTteqDfhHaVMEYWZuh2Uo0N4%2B6%2FN%2BKW7LfU2f3CqPLAMdFLKttKB%2BFA8yi7zGBXLAdpNIgKIOZC7HptUt6ucvLPCtav4KlPkdZIn9HeVWpSwz4W6FnhEWZN2JPjfIzOFZIkc9wQZ5U%2F2FKLUO3NIZruMQWGcWS%2BdYdaeLj48I5A4wokLLv1p8W08FG4S5ZN61zBsuYspCk5VV7PdGWTsruFEZurjYObtMeGUVYvjXq%2BM310z3OKwZKtdAP7gFfrN9SCHXJbkytONGED4N%2BjB4aYpeSrEsGv20aXn3hVpQPIvuhEjSzQii%2FrjB9T%2BIQ%2FAIyr0jpGNAugGa3LGibVBfnF7CnkXZNgVLrNyCHd4GncqcBgN3GTldbYIpI%2BNB4SrypFUdY%2BJUkj2PIqRllM6G2pDlGXBjQ1K6lpl%2BUAPGzyaeoR6Nt7Vp392RUYeJdp8pSIIR1WDf92CN0w6GFNFKc80CVfsVw87Y%2F0xecLfmVN%2FRVMV%2BfwRsev%2FH886mlbzIfPppS0%2BBPI3XjfMIBM1GuZPZyhtLKqtR2GHXZaCpcf1s4TK4fLVik1jMJCujMoGOqUBRsG5T5V9NGUW7dFlhwOc4PwHr0Ex8oLxy4j4sC5NxHnii02a4VMynzkubWmDYQGVyf3wN7PftxnGwXp3FniWkgI5RNB37iWNb%2BwLQpfJMuJWeBA8ecoRXZjthu48vsDz6wWemNCUyFnw4yZ7ka%2BCXzV49Wz%2FeKF7b40HX%2FvZhYCVRF3aU8FXr3%2FV4ghWmqfxxm2h%2BuckkpvtTlBvZSfplj1QJ8%2FC&X-Amz-Signature=15b43590bea0b9f8b411cb226e6b0551018a9399dbc3f75fa0a541dbf77e1853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
