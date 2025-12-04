---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4LSL6S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBKA9Ay%2FiUpVx1uI2haZ6vaJQlS90aWqsaVDJ36C4TS%2BAiEAvQnOmAdgTWsyZEqolvZt2B%2B6C%2F2izdfVPaTLrdSBSN8q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBWSgxHji27DGtfGeyrcAxE5MzwVu77pFiu400qFbnADgbH%2Fx%2F2XxqNhCx5vK%2BcCLAqxGwSjgbRTCiAqUn50nLGlkSzzmnaqQST%2FDCliX1csh7wuWL0Phh0uHll9h8wOh43eV%2BfUGKUod7suql2u5OBVmcdfujLSBFXQFWV0RLl6WBuwZCyu7cQ%2BsJ5I3Wyfv%2BjeE3eXuEPaLEog%2FBG3gj3Q%2BnndCi63U%2FtT20ZtqTTYdIhU4NqjUOpOpU9WzyDGeTI1LvVHExccc6fmuIivN4U4gXpfF1BXiSB%2FyZT7WFuv%2Bq4YGS33hLiNYLNXrXwXtz79FKDcHjBzhX%2B44zqymQa9czcEp3lkS3gwQnQYezOiSszMkF%2Biqgvs9Jnr3OxsN9td33bLaKxx2PYtcT8gWrup8Ov0RwJz8GpHPWj7qQkP%2BhH0Wk8jf0pXWgW6uow9ecLenQsxs32m%2FHqa%2B83eBSl7koVbPAg9cKnTMcjWMe3Y9ZF8yfLEEY46ukQuIUoO0T0w9CoLD%2BOA6E7cXOh0dZ6inc9pTDM6yp3TxTQ2Z2xyzcTcV2x%2F4NbHFEDTV14NNIip0XXWLur1pbASzWF0nD7iuhW831jWE5hvwHzE4mH9Hef21OoqrG1XZ6j4m9vXLC6QaYV9PAgwYf3CMKrzw8kGOqUBmoz3JeXqfXHFhCodjqVR0PYJ3aCq4qQRfqi1jr%2Br8Gbo846rDKD8s%2Bbqzysb1bshmPxR5Il%2BifWx0IAU%2FXlF5YyHuQZQErqMds6Ze4gFSo5lbIosRwcHHB3vpUUSAE52jCTnRS0alhEEEYJ%2BCU3KhWlbOpaW6NjTBveCXLPnASXlFln92BaHmYVj67Q1gcL5ovhNv8n7tdUtosmRX1i2lEihxTmj&X-Amz-Signature=0f9e63c7651c906a4eee91f7fc8cc0c427e3a6bc7e182aa1391dc2dbda77ec03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4LSL6S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBKA9Ay%2FiUpVx1uI2haZ6vaJQlS90aWqsaVDJ36C4TS%2BAiEAvQnOmAdgTWsyZEqolvZt2B%2B6C%2F2izdfVPaTLrdSBSN8q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBWSgxHji27DGtfGeyrcAxE5MzwVu77pFiu400qFbnADgbH%2Fx%2F2XxqNhCx5vK%2BcCLAqxGwSjgbRTCiAqUn50nLGlkSzzmnaqQST%2FDCliX1csh7wuWL0Phh0uHll9h8wOh43eV%2BfUGKUod7suql2u5OBVmcdfujLSBFXQFWV0RLl6WBuwZCyu7cQ%2BsJ5I3Wyfv%2BjeE3eXuEPaLEog%2FBG3gj3Q%2BnndCi63U%2FtT20ZtqTTYdIhU4NqjUOpOpU9WzyDGeTI1LvVHExccc6fmuIivN4U4gXpfF1BXiSB%2FyZT7WFuv%2Bq4YGS33hLiNYLNXrXwXtz79FKDcHjBzhX%2B44zqymQa9czcEp3lkS3gwQnQYezOiSszMkF%2Biqgvs9Jnr3OxsN9td33bLaKxx2PYtcT8gWrup8Ov0RwJz8GpHPWj7qQkP%2BhH0Wk8jf0pXWgW6uow9ecLenQsxs32m%2FHqa%2B83eBSl7koVbPAg9cKnTMcjWMe3Y9ZF8yfLEEY46ukQuIUoO0T0w9CoLD%2BOA6E7cXOh0dZ6inc9pTDM6yp3TxTQ2Z2xyzcTcV2x%2F4NbHFEDTV14NNIip0XXWLur1pbASzWF0nD7iuhW831jWE5hvwHzE4mH9Hef21OoqrG1XZ6j4m9vXLC6QaYV9PAgwYf3CMKrzw8kGOqUBmoz3JeXqfXHFhCodjqVR0PYJ3aCq4qQRfqi1jr%2Br8Gbo846rDKD8s%2Bbqzysb1bshmPxR5Il%2BifWx0IAU%2FXlF5YyHuQZQErqMds6Ze4gFSo5lbIosRwcHHB3vpUUSAE52jCTnRS0alhEEEYJ%2BCU3KhWlbOpaW6NjTBveCXLPnASXlFln92BaHmYVj67Q1gcL5ovhNv8n7tdUtosmRX1i2lEihxTmj&X-Amz-Signature=b7ea2652083fc8c725b617ece9ffc9015e7e0eac82d95b736fb4e80531c4b1c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
