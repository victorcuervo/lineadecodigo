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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6WR2OD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2B7HXEjNh5w4IMEgXS2jmrkreELqUzL52pMej6jjRPwIgLnn%2Bh6oAvAv7Ihvp7YGPRzb4tDteeliUKrQeo%2FolnSoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDGZOdQ%2BMez3F9OChircA%2FSA0p0zax05ZMWD%2FZPlwzkGWXUuBoLeI91SlyemnqdaVPC3Gp0kpQBnOrlTkxS2EvsC%2BdSXCyRuuLDIDQBgOI%2FOflG2lootsLZFdUpqi1LgU0rrDed4O8SzI8pEveJp4fynIvHARFTnYqvwy0M1ttClqGrRYDDGf5XIinTsYiLpagUy7TGJrYIRWm4LUbQQr8%2BQJyA88MQUhzpEC1cpjWfk4lNq%2FI9AA2rsrfZ4BmwBbXi0dhM01nUJhtYiNNmuzAp6Lhr1VyJjJcLiJv6P35nIsd9%2BT0TcoCpnM4EnXUGNdnZSU5r3SDnGVRLchf5bpd3OzShhX7B6q5ebOrkhO799R18O3NRs43yJcTy2QfnoBZx1WI%2FINel8CP5wQGAV5%2BefK%2F2h5fNS1mUPcWr3I8iAUuJ%2BEk0MNHpI%2Fd%2BAFkXbA2N23xb9B0uyxLnnB23PVMDrzT%2By%2F1HXI9bIrxLgccaemRUAAhg00tnEf1CFzryqRZ1dY9xYHhlKVzDJQuy1oMMcn1kauVm2dY7SUHHLQa94W8QTCT%2B%2FhIqW8jpHPtdIayg%2F526GrVWoj4WR%2F2s1a4uEwT9ZZ%2FYxrP4MXLTHm646m009g4ueW8BM1Oz81btkLULr0cO1KRH286DaMIS02ckGOqUBhGafGMx06qzs8K%2BCZJMbui0FePNbfJKPLYQ0KAGB8dfUm2BTwmfe8daoXlDopfLjxSk8ou%2BLuFTiXsg9OPJkMUf%2BiUkyxyEkGreHhxDYBQGk2Ea0lL5Ncy%2BG%2Fsa1pjs05ho3BcihKTiNJOj2CEAVZcC3c5IWrxUY4QQ%2FIus%2B9qn7xCjAlnBs4aGBIDm1wk2fa9PI%2F6y6Gs5%2FuXUR0fwXejANakT2&X-Amz-Signature=8d83db5409c1565e2db1e2ea2a6f94fcc5c01e3e18feba64602e98717b2bc817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW6WR2OD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk%2B7HXEjNh5w4IMEgXS2jmrkreELqUzL52pMej6jjRPwIgLnn%2Bh6oAvAv7Ihvp7YGPRzb4tDteeliUKrQeo%2FolnSoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDGZOdQ%2BMez3F9OChircA%2FSA0p0zax05ZMWD%2FZPlwzkGWXUuBoLeI91SlyemnqdaVPC3Gp0kpQBnOrlTkxS2EvsC%2BdSXCyRuuLDIDQBgOI%2FOflG2lootsLZFdUpqi1LgU0rrDed4O8SzI8pEveJp4fynIvHARFTnYqvwy0M1ttClqGrRYDDGf5XIinTsYiLpagUy7TGJrYIRWm4LUbQQr8%2BQJyA88MQUhzpEC1cpjWfk4lNq%2FI9AA2rsrfZ4BmwBbXi0dhM01nUJhtYiNNmuzAp6Lhr1VyJjJcLiJv6P35nIsd9%2BT0TcoCpnM4EnXUGNdnZSU5r3SDnGVRLchf5bpd3OzShhX7B6q5ebOrkhO799R18O3NRs43yJcTy2QfnoBZx1WI%2FINel8CP5wQGAV5%2BefK%2F2h5fNS1mUPcWr3I8iAUuJ%2BEk0MNHpI%2Fd%2BAFkXbA2N23xb9B0uyxLnnB23PVMDrzT%2By%2F1HXI9bIrxLgccaemRUAAhg00tnEf1CFzryqRZ1dY9xYHhlKVzDJQuy1oMMcn1kauVm2dY7SUHHLQa94W8QTCT%2B%2FhIqW8jpHPtdIayg%2F526GrVWoj4WR%2F2s1a4uEwT9ZZ%2FYxrP4MXLTHm646m009g4ueW8BM1Oz81btkLULr0cO1KRH286DaMIS02ckGOqUBhGafGMx06qzs8K%2BCZJMbui0FePNbfJKPLYQ0KAGB8dfUm2BTwmfe8daoXlDopfLjxSk8ou%2BLuFTiXsg9OPJkMUf%2BiUkyxyEkGreHhxDYBQGk2Ea0lL5Ncy%2BG%2Fsa1pjs05ho3BcihKTiNJOj2CEAVZcC3c5IWrxUY4QQ%2FIus%2B9qn7xCjAlnBs4aGBIDm1wk2fa9PI%2F6y6Gs5%2FuXUR0fwXejANakT2&X-Amz-Signature=30a33c4b451d9bf6150d8ed73d658cb89b4c65f8cbe1a401fc8906d590097324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
