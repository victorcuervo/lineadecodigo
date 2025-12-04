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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642Y4DUVD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDCV7jf9LZewnYDPOzp9xllDxHFpRNJ6L5GHwcFIcgz2AIgWEOi6SR2d5ygN9ylbD7RulqM2GTxvXV4DNhKnBV%2B0%2Bgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDESIIRtxaDje2Gk77yrcAzIGJ5vW9qFo304ksKk%2Bp3E13XJ3kLpttwfVE8cLZLBO6FY8pORbz0ZLTvpEWvAl3gkFJP3tZTBP%2F%2BR7A5SJRa0iHytSXtxRIzf4zZ%2BYzTBpxHhFgTCrAAZxmilxtP3Q2Tv9k0o7JcXnvGf9vcSY0X5JvYa9MjsOXWKAT%2F%2FW5OJ9rCsVOuAkRpw6kxe3A957eVcdmH8BNnyqCxaXsFQt%2B%2BvAOx8SlhsbkPTnOAGlbV4Hcp7szRe6oeJ7XtcU2WSc2f%2BeuftsRvoD8dM4AvN2keK117JdmGOpFCjSDXcO2RHt69skuH5OM2htjV7DSyn5TJ3rcOW4dkedgBbelTS5LG1s8lzAUhjiuAND4kkUfs%2FuuUybLSCnYRQAuX3tL1SSUW%2F5A56izk6%2FKat6lutxtX79JfEVakXLdH7pNOWItIH%2FBIO%2BzQB7AV4AzUomU1Mohp%2FsgdE%2Fx2BaT9A8F12MErjTeq1SkqDdFSqUp13X%2BFTFxt7xYOeqXmcw9G%2B82SKUjaB3iF6k5Phlrhdm%2Bi%2FwhMMQgDfKlhL%2F3%2BV8oOouTOgeZARkPFmdOEDn0te%2FEZG1RBFmUwrr%2Bf0RUYYm18yr2FyVedxj8oEb3g%2F6O%2BDnLXYLup8HoR3XrHdCh8AjMPnUw8kGOqUBumZZ4tG43iNj0KgTSkv%2BCTMoI3kSu2LIiLcvaMTCDu%2Bxnlkfh%2FZMDUQK7CAqb9RdFa7WUPAXtX0iV%2BD1mTVr%2FgUWHj%2F%2FMW0k0%2BQCpyZDIY8XtPf0F6JjkTz8Hgi4FyXhYi6PUqi%2FuECx4otAPAJeXo5CB5k6jc2HL4Y2yPTj0m4UzZngl7kZCu2amHUNJ22Y8jde2f%2B6hy1%2F3omQIXhLxl0ox%2FLQ&X-Amz-Signature=fb637352ba27145fa05c9257f09c4afb806babdbb95305d289f64c8f363c0c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642Y4DUVD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDCV7jf9LZewnYDPOzp9xllDxHFpRNJ6L5GHwcFIcgz2AIgWEOi6SR2d5ygN9ylbD7RulqM2GTxvXV4DNhKnBV%2B0%2Bgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDESIIRtxaDje2Gk77yrcAzIGJ5vW9qFo304ksKk%2Bp3E13XJ3kLpttwfVE8cLZLBO6FY8pORbz0ZLTvpEWvAl3gkFJP3tZTBP%2F%2BR7A5SJRa0iHytSXtxRIzf4zZ%2BYzTBpxHhFgTCrAAZxmilxtP3Q2Tv9k0o7JcXnvGf9vcSY0X5JvYa9MjsOXWKAT%2F%2FW5OJ9rCsVOuAkRpw6kxe3A957eVcdmH8BNnyqCxaXsFQt%2B%2BvAOx8SlhsbkPTnOAGlbV4Hcp7szRe6oeJ7XtcU2WSc2f%2BeuftsRvoD8dM4AvN2keK117JdmGOpFCjSDXcO2RHt69skuH5OM2htjV7DSyn5TJ3rcOW4dkedgBbelTS5LG1s8lzAUhjiuAND4kkUfs%2FuuUybLSCnYRQAuX3tL1SSUW%2F5A56izk6%2FKat6lutxtX79JfEVakXLdH7pNOWItIH%2FBIO%2BzQB7AV4AzUomU1Mohp%2FsgdE%2Fx2BaT9A8F12MErjTeq1SkqDdFSqUp13X%2BFTFxt7xYOeqXmcw9G%2B82SKUjaB3iF6k5Phlrhdm%2Bi%2FwhMMQgDfKlhL%2F3%2BV8oOouTOgeZARkPFmdOEDn0te%2FEZG1RBFmUwrr%2Bf0RUYYm18yr2FyVedxj8oEb3g%2F6O%2BDnLXYLup8HoR3XrHdCh8AjMPnUw8kGOqUBumZZ4tG43iNj0KgTSkv%2BCTMoI3kSu2LIiLcvaMTCDu%2Bxnlkfh%2FZMDUQK7CAqb9RdFa7WUPAXtX0iV%2BD1mTVr%2FgUWHj%2F%2FMW0k0%2BQCpyZDIY8XtPf0F6JjkTz8Hgi4FyXhYi6PUqi%2FuECx4otAPAJeXo5CB5k6jc2HL4Y2yPTj0m4UzZngl7kZCu2amHUNJ22Y8jde2f%2B6hy1%2F3omQIXhLxl0ox%2FLQ&X-Amz-Signature=f1c7a11d303f552aeb0cacbdca2d2ed958e6de4f34274784b6f93f9c590327ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
