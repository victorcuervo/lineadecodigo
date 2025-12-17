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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSDXZHQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICB0UALWYAv%2BZisYpwufccWbDnCsUq1jwjg55XOsxOPAAiEA2qHRvbwJwafE0zgeNzPGSyEaKC0oCW3jUKE43AOwvtQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDcqXHlWPt%2BCAbjTHCrcAxweZ%2BEcDKuvPkh5icrmaua98dBRCyXKGE8LnaV9wegGseL%2FVIdoKPOf86YjMO%2BHdQBTOj89yvb1ibPnhMm5BfCy4NvxY1onYrWyZtPgxEOLQo5V0WJQTcG19qJ0D0kHyF8FErjgKmu%2F86wjQjGeb2YCBJWZ%2B2%2Buj5yX3uKWt0jDp1VnOLbG1ZakXIiE%2Fb5hn3dMfoVSbU%2BU1zp1aggR0%2BxHRLLVpXsKjOf%2Fq%2F00kpACyLw2ZdHoPEpaagHIAA%2FdY%2BgwSCnthO%2Fa55G2RkxHrwLd1H9NlENaUqViIHlzPuTo8ZUaGW3sMQ6j6E35ytU2fj%2Fg%2BJ1eUx2t3Lh7a%2BuTv%2B5VhB%2Flpp%2Fw6%2BRrCoD3LpY%2FdfMa%2F%2FctrGPcTZ8vpJrrC6aTxIYxkR8vZdlHfaL9YDTjHrdVLupaxzoL5kKxVB1lhLCbN5LJznzMmdVzHoYjiwZe0hIAMkqER8oC9x2B3MFHKeJ2IOc9bj%2FHe6kdEfSf%2BThrg0rMWNjyeiWQWE9E2CY7ELtum%2FCAshUgbmr%2F0OoJiWzr5PeIl12QfPBFuR3KztDTW0mgaBhzQGqGXoUplxUYeZEhmC8zLzggKkYmsPB1pddzfMdjjnHA62xT5Xd%2BBGgRuSKBFPi7%2FUenMLqdicoGOqUBn%2FEP3jihifQLUp0xmFk3ECw1i9Wph0iXcFMvqHOYVB8JKFDB1wkeXi9qcmtawRO9Vxd1rf2vNM1BCtk3kZWMIs%2B7ccUKJhquFLlI4Co0gyOujyJN48nU1vteTplPaRDC3uy6yDat%2FVdSnUnRezVOOgOW5LbZhl1q%2BhdPvjqeiRuPqRq7HlsYY0PlVrop%2Bw2iiBpGWLyjFtvuuxAAzaOO8fjHnzEb&X-Amz-Signature=031081a89d44c36efe7780d27feecaef627629b1b49215cffe4a4d5270452120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSDXZHQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICB0UALWYAv%2BZisYpwufccWbDnCsUq1jwjg55XOsxOPAAiEA2qHRvbwJwafE0zgeNzPGSyEaKC0oCW3jUKE43AOwvtQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDcqXHlWPt%2BCAbjTHCrcAxweZ%2BEcDKuvPkh5icrmaua98dBRCyXKGE8LnaV9wegGseL%2FVIdoKPOf86YjMO%2BHdQBTOj89yvb1ibPnhMm5BfCy4NvxY1onYrWyZtPgxEOLQo5V0WJQTcG19qJ0D0kHyF8FErjgKmu%2F86wjQjGeb2YCBJWZ%2B2%2Buj5yX3uKWt0jDp1VnOLbG1ZakXIiE%2Fb5hn3dMfoVSbU%2BU1zp1aggR0%2BxHRLLVpXsKjOf%2Fq%2F00kpACyLw2ZdHoPEpaagHIAA%2FdY%2BgwSCnthO%2Fa55G2RkxHrwLd1H9NlENaUqViIHlzPuTo8ZUaGW3sMQ6j6E35ytU2fj%2Fg%2BJ1eUx2t3Lh7a%2BuTv%2B5VhB%2Flpp%2Fw6%2BRrCoD3LpY%2FdfMa%2F%2FctrGPcTZ8vpJrrC6aTxIYxkR8vZdlHfaL9YDTjHrdVLupaxzoL5kKxVB1lhLCbN5LJznzMmdVzHoYjiwZe0hIAMkqER8oC9x2B3MFHKeJ2IOc9bj%2FHe6kdEfSf%2BThrg0rMWNjyeiWQWE9E2CY7ELtum%2FCAshUgbmr%2F0OoJiWzr5PeIl12QfPBFuR3KztDTW0mgaBhzQGqGXoUplxUYeZEhmC8zLzggKkYmsPB1pddzfMdjjnHA62xT5Xd%2BBGgRuSKBFPi7%2FUenMLqdicoGOqUBn%2FEP3jihifQLUp0xmFk3ECw1i9Wph0iXcFMvqHOYVB8JKFDB1wkeXi9qcmtawRO9Vxd1rf2vNM1BCtk3kZWMIs%2B7ccUKJhquFLlI4Co0gyOujyJN48nU1vteTplPaRDC3uy6yDat%2FVdSnUnRezVOOgOW5LbZhl1q%2BhdPvjqeiRuPqRq7HlsYY0PlVrop%2Bw2iiBpGWLyjFtvuuxAAzaOO8fjHnzEb&X-Amz-Signature=ec806a8e258bfc65b83d5593fa9966113ed3040cbdeac0353ec85d8e9c42ea94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
