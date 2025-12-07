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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4XKLR2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKGsUd%2Fu2hIE3zPrCJZ3ui4WO5WXVSdt3twU1j3PzruwIgEUbiH5UR%2BhpQbyzhHBCjp%2FEUkCUB2CB%2FPTGiiNwoPWcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPUbJgNXIJcvb7cBSrcAy%2BbV9w4%2FjyTR%2F0Za5y8iEVNkP03AZicSGhac14xV9ZEYrv2F2q0Y58hFBz8GTdJCz%2FQlgLOI%2FgwbI5IPTp5z%2Bhd0jIwJHdfGV2nwOPib%2BgC3KKRYjDw7oMKg8ORyCHHaVc4HgMhYFMiR7DqhaU1TLb4QuRIbrTlU9shRDGHNAkrW0aZQznlIzIplHM0R8irsgk0TKF9Bz7r1UKYBrCxY%2FI3Bw7nm2OOfd19hnwe2%2By3KrK6wL9Zom%2FHKLWrbSWPgrevJaBuidguyxfhEGmxd%2FGKI8aGGO5nSdh%2FrV4fsVpRp0iAhrxWAWk1%2BEZ3%2BXNEOJP2m1mLLBXvletqfmhtIy2J%2Flqz2LY%2BV2cxv1G1z0mCHMZD4XLkbCgFrrE%2B3Iss60Cwlwn8QcPNDcoHaWhmNP1Fxc3gMIXp2WvrFGs9PfJQvpABO4Qu0Z3qu0WZr8DKiXeCwzzifNCvFbO9sJNhaPuk9%2BwdrwTw5PzoZjL3aqs%2BVVoKbCjKzGJAaq91soMYhKe5HgiaRWKCEngvJS5wI9PnNGHxb%2BAVomxSAPqoDHCxX79YVGAT14V40V1NHCfXoedA4XNRrq4eMjuIBZX7miKmC1Tz%2F8zva%2B2n36HrgeLSt3SKiNelzdpcw%2B81MPL90skGOqUBgUSHVoZcszir3PONKYOf6IyvOF%2FwcM65rIx65COMLgFNStChUOwcPLAyrdshs5i%2B85F5PF8sDPh4v6bruK17vVa0bmTR7zDqBRwfqrt0qkPcSK4hD34qyM1Mk7o8llCRdmERU0jNhbfWQT%2B3uUWdhA%2FX7h8tIJcb8u4EpbDKlzJGVLb9GiLgF50RvzEgUT0Dw3kAKmpmQ0eF9s36ji50tNt6lOSV&X-Amz-Signature=c11ee5ea569d6f1aadc306d9739e196180ee35346d7f0df92b7f2704932de717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4XKLR2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKGsUd%2Fu2hIE3zPrCJZ3ui4WO5WXVSdt3twU1j3PzruwIgEUbiH5UR%2BhpQbyzhHBCjp%2FEUkCUB2CB%2FPTGiiNwoPWcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPUbJgNXIJcvb7cBSrcAy%2BbV9w4%2FjyTR%2F0Za5y8iEVNkP03AZicSGhac14xV9ZEYrv2F2q0Y58hFBz8GTdJCz%2FQlgLOI%2FgwbI5IPTp5z%2Bhd0jIwJHdfGV2nwOPib%2BgC3KKRYjDw7oMKg8ORyCHHaVc4HgMhYFMiR7DqhaU1TLb4QuRIbrTlU9shRDGHNAkrW0aZQznlIzIplHM0R8irsgk0TKF9Bz7r1UKYBrCxY%2FI3Bw7nm2OOfd19hnwe2%2By3KrK6wL9Zom%2FHKLWrbSWPgrevJaBuidguyxfhEGmxd%2FGKI8aGGO5nSdh%2FrV4fsVpRp0iAhrxWAWk1%2BEZ3%2BXNEOJP2m1mLLBXvletqfmhtIy2J%2Flqz2LY%2BV2cxv1G1z0mCHMZD4XLkbCgFrrE%2B3Iss60Cwlwn8QcPNDcoHaWhmNP1Fxc3gMIXp2WvrFGs9PfJQvpABO4Qu0Z3qu0WZr8DKiXeCwzzifNCvFbO9sJNhaPuk9%2BwdrwTw5PzoZjL3aqs%2BVVoKbCjKzGJAaq91soMYhKe5HgiaRWKCEngvJS5wI9PnNGHxb%2BAVomxSAPqoDHCxX79YVGAT14V40V1NHCfXoedA4XNRrq4eMjuIBZX7miKmC1Tz%2F8zva%2B2n36HrgeLSt3SKiNelzdpcw%2B81MPL90skGOqUBgUSHVoZcszir3PONKYOf6IyvOF%2FwcM65rIx65COMLgFNStChUOwcPLAyrdshs5i%2B85F5PF8sDPh4v6bruK17vVa0bmTR7zDqBRwfqrt0qkPcSK4hD34qyM1Mk7o8llCRdmERU0jNhbfWQT%2B3uUWdhA%2FX7h8tIJcb8u4EpbDKlzJGVLb9GiLgF50RvzEgUT0Dw3kAKmpmQ0eF9s36ji50tNt6lOSV&X-Amz-Signature=860b91f83a36eecb478a3962afcaa0406bd6b659706438ea9efe5daceb9fc4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
