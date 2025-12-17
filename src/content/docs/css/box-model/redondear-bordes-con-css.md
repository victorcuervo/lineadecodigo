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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z47F4S6E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe3RvfJH9zOKoVbBg8BwZO1KFZjQYu4A%2Bpg%2Bbu0fLXJAiEAoBQhAm%2ByFzrXicJdaYA36DHqxkkViHcPmm8efjeQ1ekq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDL1cNVELN32kUJF0WSrcA8lwDwhj1xY92wE3olUccxvHOWYgz2PF6Q%2Fdd1MBkU9m03lX0vE2PNbva%2BiZXHcXXld%2B0CwB%2BFs0yQhQCSj66%2B4XbAuyKbHCrudVRO9LsiGLL9ILVusVoxb4jGuitks%2Fi1zjngI6cL2SdF%2BT4IRTr8zHzF1Ecmh98Chf77mLc8uMsZIbF%2BysCgXLqJBE4b6wa0XiAjRXprDkT8gf080Mr3ECeZaqQnRMn%2B2qoX81z5KVm0BA53258CenmMXDs2eBRdKHW2w2qr2S1pfGp7nwQhpj%2Fqsh6T7zFobSMVcoYRmzcJkCW8EPZkE392UQ%2BWvW8eyibeFedVvksS80rvLoJfQ2BmatETySb6VtAyHS8McwNsem4UU16ZmVg4uZIXoe1WIwCGsHDLsQA7MMXfS3ofly5sOtWYUHFgwsY6JRatEEFWIkfnNBaPvqFd6NmyjwVwLjLRWeO1Nt%2B5D3YzUGS6p%2BNtMpwiegU%2FaMbPLGo20eKM0glcGxgHzm39AxdJa550kwp9oHCiyaupIqmFk6JkgXs6MuVqQh6I%2Flqo5s7lh34nNpfipZdAJMJl%2Bxy5xMgLN2svf1n0BZNgUgEsrML1fYzBE4pn9FdW1UDb4u6qXyGDo0o84eNokU2fd5MP7QicoGOqUBU6MO0wXDoqXSIwRAC%2BLOnScE9Dbf6Jc4pRj%2FkKlUaVJEtHohvrhH8H2YjK%2BCBsalFwmxFK3F3oQcMYQ9Sp6E6Gvb68RCgq%2B8rcUSpRPV6%2F3Et0j31TygiD3yb4BzxfU2LLT03eQ9Os4RievKKOsvm4ZLcQ24DMfjgRpD%2Bqz3zcCa4PqSwBs5BlPHghWNr2p8MWO5t6ggtEOT4EnxcgoMUuA%2Bhgg7&X-Amz-Signature=ff3d8c255003ec5a04bf663db2c31d95211f1356ad4a5b50c5e1be9916b206aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z47F4S6E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe3RvfJH9zOKoVbBg8BwZO1KFZjQYu4A%2Bpg%2Bbu0fLXJAiEAoBQhAm%2ByFzrXicJdaYA36DHqxkkViHcPmm8efjeQ1ekq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDL1cNVELN32kUJF0WSrcA8lwDwhj1xY92wE3olUccxvHOWYgz2PF6Q%2Fdd1MBkU9m03lX0vE2PNbva%2BiZXHcXXld%2B0CwB%2BFs0yQhQCSj66%2B4XbAuyKbHCrudVRO9LsiGLL9ILVusVoxb4jGuitks%2Fi1zjngI6cL2SdF%2BT4IRTr8zHzF1Ecmh98Chf77mLc8uMsZIbF%2BysCgXLqJBE4b6wa0XiAjRXprDkT8gf080Mr3ECeZaqQnRMn%2B2qoX81z5KVm0BA53258CenmMXDs2eBRdKHW2w2qr2S1pfGp7nwQhpj%2Fqsh6T7zFobSMVcoYRmzcJkCW8EPZkE392UQ%2BWvW8eyibeFedVvksS80rvLoJfQ2BmatETySb6VtAyHS8McwNsem4UU16ZmVg4uZIXoe1WIwCGsHDLsQA7MMXfS3ofly5sOtWYUHFgwsY6JRatEEFWIkfnNBaPvqFd6NmyjwVwLjLRWeO1Nt%2B5D3YzUGS6p%2BNtMpwiegU%2FaMbPLGo20eKM0glcGxgHzm39AxdJa550kwp9oHCiyaupIqmFk6JkgXs6MuVqQh6I%2Flqo5s7lh34nNpfipZdAJMJl%2Bxy5xMgLN2svf1n0BZNgUgEsrML1fYzBE4pn9FdW1UDb4u6qXyGDo0o84eNokU2fd5MP7QicoGOqUBU6MO0wXDoqXSIwRAC%2BLOnScE9Dbf6Jc4pRj%2FkKlUaVJEtHohvrhH8H2YjK%2BCBsalFwmxFK3F3oQcMYQ9Sp6E6Gvb68RCgq%2B8rcUSpRPV6%2F3Et0j31TygiD3yb4BzxfU2LLT03eQ9Os4RievKKOsvm4ZLcQ24DMfjgRpD%2Bqz3zcCa4PqSwBs5BlPHghWNr2p8MWO5t6ggtEOT4EnxcgoMUuA%2Bhgg7&X-Amz-Signature=1797395e53b64fd321fa81ca0a05886706b84413f558d43dc50b3ec09db1d44a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
