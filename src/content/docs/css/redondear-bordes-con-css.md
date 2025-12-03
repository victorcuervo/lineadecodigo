---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLYZ7PXQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAYy8aIYQyRKuq%2FDSAdykmu60T6YPMxCTGZumugih7G2AiEAhtOQ2pelH0Vrx%2BPosC8IePDx5wGQCeUlUlB%2F7jHf%2B5Mq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKVz%2BivNhQa3ykaidSrcA4utDvrl8LIn4IeVtMf9QP2z8yfFUjEIjoa4OrCe%2FPchHy7N13jQ8TDRhZyJyWnnEY5GtDXcklAFtZokSaRN8K0xtpihg8GcJO%2B0IZrqOqS%2FwAA1km7ecUwfoYLlWOxZHzfyvLqFQNPMSwe0A0g0QC1LruCiDsa%2B0WXktUAST1qAW5z%2BN%2B6kwLUgUh1g51Qcc5w9e%2B%2FEp5Z2rESf2Y6lbXAJro4RhzuBh8bbYx9Te0toxCWg7TYSVDwqcUdPV38P591MPNQ67n3O50vy1sLhuzHSP5UABPyAU%2BzuNl4EzAG%2BSTPTV65TTyvkaLefH%2Bs%2FcLl9Sts8XRs0PE0mRYJlFRQUkTLswBT7tk4SyKm6GY7ZRnjiL4NtgcGOatHLbZnOICTP21vh0qItp5797dq%2FA5vVCE1C57xCDAFFaQL6smEXZE%2Fhh9hKLJRxd%2Bv2qnQ9if37GPgnnzVzHXoGEu%2Ft4yNl6j%2ByBcEG%2BqxvYV%2Bu2P5pKu1N0GfNxx%2FDkEYKzCIYSn900MFVsYUQ0mYc4km2yeFKykC2HB2EXdk5CfklMUHV%2B2VosQD9iu2f39XBmdsaaVzBV2Vo6DoP4GuvZSE%2FAHQaJ0GJmRgxbWPgaWSRGOe8cPY50U8yU3oWU13nMLG9wskGOqUBu1JhSYNRBemGdgwCca0eMf55esI9hT5%2BIa3%2FkRakv3kteqPNJX0I9YQslZyHahYTfeMYl4ogJ4epeeg%2FeR%2FTZ7THBBw0UNrUTejaflBhFLAKhI22l2mkVmMmnr4gM3W53EYQHf0aFtuinbUrfnT7lmlvV0bgyQ0s88ZzKffDeJ4NJOD2Znq4NonP8uDOnUY3pHhHXVwUXXlogWw5ZT7%2FQVQvEXR6&X-Amz-Signature=ee62dadb7a14c73d6a22ffa0dd6f33a03dd7e2419f431af263e2759a208fd80a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLYZ7PXQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAYy8aIYQyRKuq%2FDSAdykmu60T6YPMxCTGZumugih7G2AiEAhtOQ2pelH0Vrx%2BPosC8IePDx5wGQCeUlUlB%2F7jHf%2B5Mq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKVz%2BivNhQa3ykaidSrcA4utDvrl8LIn4IeVtMf9QP2z8yfFUjEIjoa4OrCe%2FPchHy7N13jQ8TDRhZyJyWnnEY5GtDXcklAFtZokSaRN8K0xtpihg8GcJO%2B0IZrqOqS%2FwAA1km7ecUwfoYLlWOxZHzfyvLqFQNPMSwe0A0g0QC1LruCiDsa%2B0WXktUAST1qAW5z%2BN%2B6kwLUgUh1g51Qcc5w9e%2B%2FEp5Z2rESf2Y6lbXAJro4RhzuBh8bbYx9Te0toxCWg7TYSVDwqcUdPV38P591MPNQ67n3O50vy1sLhuzHSP5UABPyAU%2BzuNl4EzAG%2BSTPTV65TTyvkaLefH%2Bs%2FcLl9Sts8XRs0PE0mRYJlFRQUkTLswBT7tk4SyKm6GY7ZRnjiL4NtgcGOatHLbZnOICTP21vh0qItp5797dq%2FA5vVCE1C57xCDAFFaQL6smEXZE%2Fhh9hKLJRxd%2Bv2qnQ9if37GPgnnzVzHXoGEu%2Ft4yNl6j%2ByBcEG%2BqxvYV%2Bu2P5pKu1N0GfNxx%2FDkEYKzCIYSn900MFVsYUQ0mYc4km2yeFKykC2HB2EXdk5CfklMUHV%2B2VosQD9iu2f39XBmdsaaVzBV2Vo6DoP4GuvZSE%2FAHQaJ0GJmRgxbWPgaWSRGOe8cPY50U8yU3oWU13nMLG9wskGOqUBu1JhSYNRBemGdgwCca0eMf55esI9hT5%2BIa3%2FkRakv3kteqPNJX0I9YQslZyHahYTfeMYl4ogJ4epeeg%2FeR%2FTZ7THBBw0UNrUTejaflBhFLAKhI22l2mkVmMmnr4gM3W53EYQHf0aFtuinbUrfnT7lmlvV0bgyQ0s88ZzKffDeJ4NJOD2Znq4NonP8uDOnUY3pHhHXVwUXXlogWw5ZT7%2FQVQvEXR6&X-Amz-Signature=797a909301e98c8a85b416de067635201a8c294aa8b9b91cf457a83e1a307572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
