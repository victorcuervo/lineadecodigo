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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MACTT3T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMDm4yHtmr%2BR6oWmOkcEBEhs1S4KdeM7e2vKRTHSbm5AiEAoyDGQNKAmMickJwTdp9Fy53uou2T%2Fu6OHhZLeEuZwQwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAydNIYvJS2k85Zq9ircAxntXQZtabBtyc7RkQD1itFS4F3VaKGjF7dIvX65X4eXMjlbRot0kWuUhJclXRb%2FtvAy4u6aRA8X4ztQ3li5W8GOMGCSFs9dR4my03nKrsWikGZk39%2FRQ8tHQaPGagatksrh1p%2BCC2K2oz93t3nkypVKoDulZCvjWQnc89g%2BVmB%2BPFoKQQ4SG4gr5wMNSp9vnl%2BN%2FmL%2Fl6%2FkZccRNyp290nEvk77gEbGxLOrpOzw5oDX8bATE88w%2BEdI85v89nokH7063TN%2FDXDRfGSv%2BHk9mAp9fkK9U6ewkoy3CM2iCW5ys6Co2tzalAR6R1baYi%2FufaN6EInS4ZsFw7KdlhWvIfv3X48rcVGO1IQYB6pNkJOUBxeT2Lbd8TkxyyYPqrKnZkhtHq1wxAfOrHGqmu1Kfk02MYD%2FQ7aTa1DqwnztWSti9CvFCBzL1eRbXzptyrbQ7o7sX0Co%2FZIv05te%2B3EDlpHQzZbAWd%2FKEU7UHwxNgUQ8asbIudOyfEj33P0RXNRQrZJKVC2%2BIRGa8QEH8uUcDD31JkhHeEBwJ83L1wZmInKonD6%2B83%2F88c85%2BHzdSS2qsZ0%2FuNObhPGlljoOvuegoH24DKnbEnVT4MwRMaSBKuryoIuCQI24y%2FStBc%2FJMLifi8oGOqUBzgf8a4xEVB%2BpNftHP1tX3AuIevmNJPgc7hqNwfbnxbbUyd5jsfXpVfFDOhsua0y%2B%2FrpwnB6B0992v9WxK8lkkNQ6I2mOgi7prmtp30LeT5a9SwgH%2BgkLqQOAMweFbil%2Fei8rwQR4g0z8IbeI5coKtI4U%2B7ahxoedtv2Y8pfTtysqXnt8Yr6n2DwYLqm36NzRMfXWIxkC1EU7H%2F0mLyW2o8rWpKLB&X-Amz-Signature=23527e8ac3d1d1902b71d5cc2b46467c6b7b08850d166e1bc99b0b0af5aa73ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MACTT3T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMDm4yHtmr%2BR6oWmOkcEBEhs1S4KdeM7e2vKRTHSbm5AiEAoyDGQNKAmMickJwTdp9Fy53uou2T%2Fu6OHhZLeEuZwQwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAydNIYvJS2k85Zq9ircAxntXQZtabBtyc7RkQD1itFS4F3VaKGjF7dIvX65X4eXMjlbRot0kWuUhJclXRb%2FtvAy4u6aRA8X4ztQ3li5W8GOMGCSFs9dR4my03nKrsWikGZk39%2FRQ8tHQaPGagatksrh1p%2BCC2K2oz93t3nkypVKoDulZCvjWQnc89g%2BVmB%2BPFoKQQ4SG4gr5wMNSp9vnl%2BN%2FmL%2Fl6%2FkZccRNyp290nEvk77gEbGxLOrpOzw5oDX8bATE88w%2BEdI85v89nokH7063TN%2FDXDRfGSv%2BHk9mAp9fkK9U6ewkoy3CM2iCW5ys6Co2tzalAR6R1baYi%2FufaN6EInS4ZsFw7KdlhWvIfv3X48rcVGO1IQYB6pNkJOUBxeT2Lbd8TkxyyYPqrKnZkhtHq1wxAfOrHGqmu1Kfk02MYD%2FQ7aTa1DqwnztWSti9CvFCBzL1eRbXzptyrbQ7o7sX0Co%2FZIv05te%2B3EDlpHQzZbAWd%2FKEU7UHwxNgUQ8asbIudOyfEj33P0RXNRQrZJKVC2%2BIRGa8QEH8uUcDD31JkhHeEBwJ83L1wZmInKonD6%2B83%2F88c85%2BHzdSS2qsZ0%2FuNObhPGlljoOvuegoH24DKnbEnVT4MwRMaSBKuryoIuCQI24y%2FStBc%2FJMLifi8oGOqUBzgf8a4xEVB%2BpNftHP1tX3AuIevmNJPgc7hqNwfbnxbbUyd5jsfXpVfFDOhsua0y%2B%2FrpwnB6B0992v9WxK8lkkNQ6I2mOgi7prmtp30LeT5a9SwgH%2BgkLqQOAMweFbil%2Fei8rwQR4g0z8IbeI5coKtI4U%2B7ahxoedtv2Y8pfTtysqXnt8Yr6n2DwYLqm36NzRMfXWIxkC1EU7H%2F0mLyW2o8rWpKLB&X-Amz-Signature=4c30a418bbac5b4a0b8f3cd58060236a8ecd26b379a49a44c11cfe192d052455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
