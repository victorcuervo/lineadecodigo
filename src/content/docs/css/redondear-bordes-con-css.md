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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG4IAWQZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgXJjGlYBcT9litOPfYHpBotp%2FDLX4MlxQgpTnkg88DAiBtnEaASp90j9EaxGfGBPTMbXReT1AcgpIzIAooLdktmCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeVj%2FGyr33scwdPIQKtwDJkwByextLFXQgwg4IeLSc2EBEhjLEFjXnsf%2B1o6L918hk5%2F7Z9nOtx4e35H%2FeMfqkdmNXpJjtSjznrAHaIvY6T38uqVELHc4WWzilePB4XRq9iPUxe%2F%2FncSYqCdGukoC62AxTWSbEwkWmc2gw07ZvyhYgDTSxW7IxE7UnaC4wCrAFy1iwly95%2BRzwsVRYaIDNKkQvMjfG6zIg2AkYN7Gl%2BbCze4feb%2FQCh%2Fu3saLuWrTy0IgFOKRPvT65LXfZqGp%2FQcJ5RWjYTl%2FCbh%2FYdxYDOcBVPC5OLfR0olsyq45m6XeMEaXdi1Fk6Z%2BrT1nRsoUE9TTRYnw1MSn7GyMYRBZDb0o7fJF3hj2JJyU8evcwuMRCalmwENGKEwfgFrYy%2Fllpl9TFfuBxutB6v3%2FiZtlZASWZQj5e9pKjFOnnxgI0SQgv%2B4hwcdYQXLyeLAyg8uJzeyuc8%2BGOc4phLXsJ3XLie0UyM9gadfbcHaklt3vuC0g2b2n4GeD%2FgVSkDsvMStH5Wg7ODaKycCqyVoViS5WrwoeGob36NULRVtnsQhnniLgrwAAuT1mg4FZKC2nsV6vwMClLG3DIMma3kP3EdhNoFxkz%2FH%2FWQ%2FgN%2FU3Pq2DYz%2FeXdaLSatO3s4FgKUwjsHbyQY6pgGET6veS8vFinXhWhMeXutXfJGeCrq%2FdrYUUbPop7QrTIIjtbydlb9f367nOugpm6aA1MihDo%2BbsX1oY4t6ASj5fMFZdf7tyjur7m81PjfRpEGh7PyRjl5dduF8Jqqq3dLTsRkxu49yD%2BFKdnydZ3IR%2BiUG8fe6S%2BZYzwj05HiFWJU%2FEArOSB3Iy%2B5%2BhNH%2FFISdhj9Dyn0NH28ntbcjhrqNpGHOXgXB&X-Amz-Signature=95108633b15a7cf5086d5a560fc9e802591dec98618ac934e803558398796ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG4IAWQZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgXJjGlYBcT9litOPfYHpBotp%2FDLX4MlxQgpTnkg88DAiBtnEaASp90j9EaxGfGBPTMbXReT1AcgpIzIAooLdktmCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeVj%2FGyr33scwdPIQKtwDJkwByextLFXQgwg4IeLSc2EBEhjLEFjXnsf%2B1o6L918hk5%2F7Z9nOtx4e35H%2FeMfqkdmNXpJjtSjznrAHaIvY6T38uqVELHc4WWzilePB4XRq9iPUxe%2F%2FncSYqCdGukoC62AxTWSbEwkWmc2gw07ZvyhYgDTSxW7IxE7UnaC4wCrAFy1iwly95%2BRzwsVRYaIDNKkQvMjfG6zIg2AkYN7Gl%2BbCze4feb%2FQCh%2Fu3saLuWrTy0IgFOKRPvT65LXfZqGp%2FQcJ5RWjYTl%2FCbh%2FYdxYDOcBVPC5OLfR0olsyq45m6XeMEaXdi1Fk6Z%2BrT1nRsoUE9TTRYnw1MSn7GyMYRBZDb0o7fJF3hj2JJyU8evcwuMRCalmwENGKEwfgFrYy%2Fllpl9TFfuBxutB6v3%2FiZtlZASWZQj5e9pKjFOnnxgI0SQgv%2B4hwcdYQXLyeLAyg8uJzeyuc8%2BGOc4phLXsJ3XLie0UyM9gadfbcHaklt3vuC0g2b2n4GeD%2FgVSkDsvMStH5Wg7ODaKycCqyVoViS5WrwoeGob36NULRVtnsQhnniLgrwAAuT1mg4FZKC2nsV6vwMClLG3DIMma3kP3EdhNoFxkz%2FH%2FWQ%2FgN%2FU3Pq2DYz%2FeXdaLSatO3s4FgKUwjsHbyQY6pgGET6veS8vFinXhWhMeXutXfJGeCrq%2FdrYUUbPop7QrTIIjtbydlb9f367nOugpm6aA1MihDo%2BbsX1oY4t6ASj5fMFZdf7tyjur7m81PjfRpEGh7PyRjl5dduF8Jqqq3dLTsRkxu49yD%2BFKdnydZ3IR%2BiUG8fe6S%2BZYzwj05HiFWJU%2FEArOSB3Iy%2B5%2BhNH%2FFISdhj9Dyn0NH28ntbcjhrqNpGHOXgXB&X-Amz-Signature=7f41a6a26a9520d1e01372125d1003076dde790d10d4be8d33215532663019c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
