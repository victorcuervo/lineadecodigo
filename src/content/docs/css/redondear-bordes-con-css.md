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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UV6CPXU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMyXagncyloebTqWk2%2FnZsSZWbo8sQQycR9ng1gwdWCwIhAO3GhVwjM1P3U1i2wTPmoED80qxltlQagcPWygHrRAiIKv8DCH8QABoMNjM3NDIzMTgzODA1IgyiK683XygsQEc3XlIq3AMeZBnmK9IcGstbL1Yh8Fagd%2FTx2OFClAB%2B8G8TVTxzwpwNY%2B41LHekbIBgpkOFQKSjdVqqwIAfWyBbDoIlSZb6oUIsSVE%2FMOTcoVSKg6r%2BsrjS%2FHHugU2gNlVoz9Eie%2FQg7Wh7AxrtBmzs77TcGhuYMt9LV94hT%2Fe%2BsYiFQEKzJRQdn6yNMshAyvzN%2F%2FREpnLXuvmJkgn75CgFcKe7Js2yqhDE4CjAd0DZySKkr6gOEona3jD1UKx4fDjZdJcUyOVgxmuOsEhkptoZ22KAwAqoDSwlWaJJg6sCG%2FFAVfRKv%2Bs3B9JZo9ydhgHkysZ20vwnu9nGEGinm5flnJJa8vDU6Iom9qkrGt45QFD2Thmx932AeGFZDdHpbME0OoVOGckligGqBajcZ8cz%2Fv6rqohe16y%2FFRilIvm6%2BhUIrCGK45exQCHpAEJAg70IqV5eVx23i8tkpZzQOu%2BLCAJOG%2Bfbsgi6EqYsh50WcHUVCgJUi0Rn7pSaYoiG8bWcp4dmdYdcItZAVhY%2BSc3C1AOvt3Kur%2BEOIyJ5%2B2Cap4rOoI3yit2yybzGxJGGm3EYsL%2BmsB5hDmsqib4SzKlU%2BD0J1n2Eh44abSRzI3JHI2FTeFtfdNwc32fxHMwzIgFGNDCH09LJBjqkARe25%2BQ4DCe3mDunaMTdZT6Xftuam0l2VfM6o9b98AuRWz2KTykHOga9jJc453m5sNLafyi%2BnYbkDZOZ0hoMD4fZ1x%2Bl34yOoiD3WPr0bU9%2FwSDkdsn4P0gIa0tWgM8UvyiSqN%2BiwYL67wuiricyEzINszgDV4l1DCETCOCPkMt67U5%2BtW0kgG2k5PyxdRurVLJqT20mwujhTY%2BdUkSkZelejhFf&X-Amz-Signature=fc30b592f0e7c5e78fc4d185ee54083ed590d0e2a4ce7367e43810a6362043d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UV6CPXU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMyXagncyloebTqWk2%2FnZsSZWbo8sQQycR9ng1gwdWCwIhAO3GhVwjM1P3U1i2wTPmoED80qxltlQagcPWygHrRAiIKv8DCH8QABoMNjM3NDIzMTgzODA1IgyiK683XygsQEc3XlIq3AMeZBnmK9IcGstbL1Yh8Fagd%2FTx2OFClAB%2B8G8TVTxzwpwNY%2B41LHekbIBgpkOFQKSjdVqqwIAfWyBbDoIlSZb6oUIsSVE%2FMOTcoVSKg6r%2BsrjS%2FHHugU2gNlVoz9Eie%2FQg7Wh7AxrtBmzs77TcGhuYMt9LV94hT%2Fe%2BsYiFQEKzJRQdn6yNMshAyvzN%2F%2FREpnLXuvmJkgn75CgFcKe7Js2yqhDE4CjAd0DZySKkr6gOEona3jD1UKx4fDjZdJcUyOVgxmuOsEhkptoZ22KAwAqoDSwlWaJJg6sCG%2FFAVfRKv%2Bs3B9JZo9ydhgHkysZ20vwnu9nGEGinm5flnJJa8vDU6Iom9qkrGt45QFD2Thmx932AeGFZDdHpbME0OoVOGckligGqBajcZ8cz%2Fv6rqohe16y%2FFRilIvm6%2BhUIrCGK45exQCHpAEJAg70IqV5eVx23i8tkpZzQOu%2BLCAJOG%2Bfbsgi6EqYsh50WcHUVCgJUi0Rn7pSaYoiG8bWcp4dmdYdcItZAVhY%2BSc3C1AOvt3Kur%2BEOIyJ5%2B2Cap4rOoI3yit2yybzGxJGGm3EYsL%2BmsB5hDmsqib4SzKlU%2BD0J1n2Eh44abSRzI3JHI2FTeFtfdNwc32fxHMwzIgFGNDCH09LJBjqkARe25%2BQ4DCe3mDunaMTdZT6Xftuam0l2VfM6o9b98AuRWz2KTykHOga9jJc453m5sNLafyi%2BnYbkDZOZ0hoMD4fZ1x%2Bl34yOoiD3WPr0bU9%2FwSDkdsn4P0gIa0tWgM8UvyiSqN%2BiwYL67wuiricyEzINszgDV4l1DCETCOCPkMt67U5%2BtW0kgG2k5PyxdRurVLJqT20mwujhTY%2BdUkSkZelejhFf&X-Amz-Signature=31e534e3ff42e0babecc151ef4eb3b0958637f7ec80f5ca58b192fb4c46ea44c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
