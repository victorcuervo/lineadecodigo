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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF2RY5I5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFTU9fvCAGKaYak9YzMI7qLYbb8si3j8N0CBJgE4%2BZcQIgMhyCdcq8Ei6EJoMio%2BiEih7q2SrB6FWfSeflOha%2Fl1kq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNWBWAmkRWr8qXytSircA3rGMwm5%2BV5%2BqSEyuRJ9WHw1FLoEMRyCtqo7LJL9U%2FnE3ecu1fZ2O2jxNGCi4ZJP2z%2B4S4kYZ3RChWYfrtaN%2Fi6etPmlVLEcq3prEy%2F028h5BTvG5sb1nOpt%2B8o8hbvhCgNMiXrPbzLXQotlhIXJJtHbljbJj%2BjUBpP6uVI2ar6sOEfPjQUKsODjgfsLZyDs6THkUk6aH8IrfKlpBQnHSLXRUbTN2y7fCvp9iJpfND2%2FSrGEUe3nxSKeHZFqqh0kfGG2kkDxyGu%2Bxo%2F9JiPFRgDznR5Nfq3my8H3o%2FSsYJJAZOgirI34XDktZ%2Fl%2FVDs8Tfo4oWw3fjVuSc9KvJGY3tLB5hu0wNgVFVmxcZO3mnULzv0yalTKTlFZrDZ%2B5KnpkmUZgfs2orjOsi08FDcdrSsmhRRyiTkGKvZyKqy3B7NocEkOC3R6alu3GSuQgr%2BJAhwF37dnl6MKMbn%2FAX8Oj9JF%2Fzebsv%2BB651y9PyggCd2X4oZNXo4OYUPjEFwYfyqjfo1%2BfVrGJIDa7adgDX0BaI6Gv33TpeuxeQ3arwVv8%2BTBlqADUMILRmydG%2FWiMH7vU1MmaotMAhENSFz31o87lxYWXiDs9Yjj1SkqQwt8XvjmxwgsvZjMBZXVaWzMPfFzckGOqUBxe3ng5ap8mhW5r7yxTHXj%2FxbenUkIsAVEB%2BSSeQEKNOKhUMLd6iSP5lwlGZNypZQKQ%2ByJYPFJYDEyM%2FektUjNWVeX5cV%2BJDrEoD9BkIGuqrjby4N%2BDf2neYyZzBFLkmZHLtNseJuFjv2n1PH%2FgeagLm5KURxgpsJ%2F65%2BIk%2B6JpWA2J8agh6Pv6f6VbuWYXzMwAYCOjM4wSCitANDESb%2FwD6028OA&X-Amz-Signature=cb5fb991a4c3c04bc9c3912a1ba4e18e1c5d50ce59e2f36087237a5bc4d35fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF2RY5I5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFTU9fvCAGKaYak9YzMI7qLYbb8si3j8N0CBJgE4%2BZcQIgMhyCdcq8Ei6EJoMio%2BiEih7q2SrB6FWfSeflOha%2Fl1kq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNWBWAmkRWr8qXytSircA3rGMwm5%2BV5%2BqSEyuRJ9WHw1FLoEMRyCtqo7LJL9U%2FnE3ecu1fZ2O2jxNGCi4ZJP2z%2B4S4kYZ3RChWYfrtaN%2Fi6etPmlVLEcq3prEy%2F028h5BTvG5sb1nOpt%2B8o8hbvhCgNMiXrPbzLXQotlhIXJJtHbljbJj%2BjUBpP6uVI2ar6sOEfPjQUKsODjgfsLZyDs6THkUk6aH8IrfKlpBQnHSLXRUbTN2y7fCvp9iJpfND2%2FSrGEUe3nxSKeHZFqqh0kfGG2kkDxyGu%2Bxo%2F9JiPFRgDznR5Nfq3my8H3o%2FSsYJJAZOgirI34XDktZ%2Fl%2FVDs8Tfo4oWw3fjVuSc9KvJGY3tLB5hu0wNgVFVmxcZO3mnULzv0yalTKTlFZrDZ%2B5KnpkmUZgfs2orjOsi08FDcdrSsmhRRyiTkGKvZyKqy3B7NocEkOC3R6alu3GSuQgr%2BJAhwF37dnl6MKMbn%2FAX8Oj9JF%2Fzebsv%2BB651y9PyggCd2X4oZNXo4OYUPjEFwYfyqjfo1%2BfVrGJIDa7adgDX0BaI6Gv33TpeuxeQ3arwVv8%2BTBlqADUMILRmydG%2FWiMH7vU1MmaotMAhENSFz31o87lxYWXiDs9Yjj1SkqQwt8XvjmxwgsvZjMBZXVaWzMPfFzckGOqUBxe3ng5ap8mhW5r7yxTHXj%2FxbenUkIsAVEB%2BSSeQEKNOKhUMLd6iSP5lwlGZNypZQKQ%2ByJYPFJYDEyM%2FektUjNWVeX5cV%2BJDrEoD9BkIGuqrjby4N%2BDf2neYyZzBFLkmZHLtNseJuFjv2n1PH%2FgeagLm5KURxgpsJ%2F65%2BIk%2B6JpWA2J8agh6Pv6f6VbuWYXzMwAYCOjM4wSCitANDESb%2FwD6028OA&X-Amz-Signature=00c4c077576131876471bdf58e57dd6318066fda264cc7abb8e477261d819608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
