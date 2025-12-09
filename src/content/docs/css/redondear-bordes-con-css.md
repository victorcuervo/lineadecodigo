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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q5F73O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiLlII%2B6Z1micwgyi7xHnBan52Ifm3TRSMj0TSVFZWgAiA85GzMHQfWkhGtuEEeZGHaop98yDg6zCVBQIW9LMVDNCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2FY6eZmOuEhb0pqRKtwDuUS7mRg%2BWIW4zrDBdjEjg7spVzTGQKTKG1vxC5x%2BmYrL%2F9cx8gSQIUZNxyVTPYkkqzG4gLieKS2BFcwohL6GSGtWtNC2TIYI0L1IDs8IjMFaanjzAclgRA34%2FNU0tocld6OQCvYJZFAM5zGpAHrIe6x8EIxl7r0kTsKashfxrRmPV4Db1n2Al%2BiACU%2Bwy4lxkFAXz543Avgia981azy6dxP1qEqHQWy%2Fv1LfiMWOOL4ZQbugwqQTLfjiNgHNVzmIycksec1XHxvaDhBl8SQeOZxao2J6LaqAiwHx0alpVK1YyxsFKmBrW2lrmDXS%2BRABHfZiozO2IwZnV3esczDVyEepsoF87ifwi7n5tebNWGWHSnAijqAxvVLgFDg1lzFrGgHr9LwyJvGE9jm3AQ%2B3f2Xx%2BgTpFaW921nXI3hFizEpG2q9mhzaw9fp42zi7c8netehiU0q9VB6uE7fMl2PJ9LxhxQvOnxe2d1sSy18GaE9l72CQTgmxB1NyjhWL%2Bm%2Fk0m3%2Fcu4DMAN1XvwmsC8Kfemx9oCO1mE7fzcylqOcNZ1hjfnuQsQ0wqnSCUTzA3R4mf0sAlgwy6NZrUBdQeuNXDm5uFg1Zi5dfIURs1Rr0ukzzphWc8aL%2BbbK4AwosreyQY6pgHmhea8RWHFLdjgqhEyDtLHKvcCa6AlPegEu44%2BTKqminsuhJzVNHiYxBaz4%2FhyI89hB4T%2Bt0X3Wxi7oNHNZkrrRnGPennRV6H06ofkfAStEDuy0k8migOA9bwrcuyU9gDuKHgJT7gTRk9m4ZHQfCSNtxViitKBG%2FIgG6y3Fd%2BJJi20u1630WYW0%2FZoEF%2FGk5S1%2FB89ztCMomBdTxvsiK3pQ071LLDY&X-Amz-Signature=281dcacce0a1545c55f7fbe504ba86a8b930f6f1b4a62a13d21d192dee1a7a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q5F73O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiLlII%2B6Z1micwgyi7xHnBan52Ifm3TRSMj0TSVFZWgAiA85GzMHQfWkhGtuEEeZGHaop98yDg6zCVBQIW9LMVDNCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2FY6eZmOuEhb0pqRKtwDuUS7mRg%2BWIW4zrDBdjEjg7spVzTGQKTKG1vxC5x%2BmYrL%2F9cx8gSQIUZNxyVTPYkkqzG4gLieKS2BFcwohL6GSGtWtNC2TIYI0L1IDs8IjMFaanjzAclgRA34%2FNU0tocld6OQCvYJZFAM5zGpAHrIe6x8EIxl7r0kTsKashfxrRmPV4Db1n2Al%2BiACU%2Bwy4lxkFAXz543Avgia981azy6dxP1qEqHQWy%2Fv1LfiMWOOL4ZQbugwqQTLfjiNgHNVzmIycksec1XHxvaDhBl8SQeOZxao2J6LaqAiwHx0alpVK1YyxsFKmBrW2lrmDXS%2BRABHfZiozO2IwZnV3esczDVyEepsoF87ifwi7n5tebNWGWHSnAijqAxvVLgFDg1lzFrGgHr9LwyJvGE9jm3AQ%2B3f2Xx%2BgTpFaW921nXI3hFizEpG2q9mhzaw9fp42zi7c8netehiU0q9VB6uE7fMl2PJ9LxhxQvOnxe2d1sSy18GaE9l72CQTgmxB1NyjhWL%2Bm%2Fk0m3%2Fcu4DMAN1XvwmsC8Kfemx9oCO1mE7fzcylqOcNZ1hjfnuQsQ0wqnSCUTzA3R4mf0sAlgwy6NZrUBdQeuNXDm5uFg1Zi5dfIURs1Rr0ukzzphWc8aL%2BbbK4AwosreyQY6pgHmhea8RWHFLdjgqhEyDtLHKvcCa6AlPegEu44%2BTKqminsuhJzVNHiYxBaz4%2FhyI89hB4T%2Bt0X3Wxi7oNHNZkrrRnGPennRV6H06ofkfAStEDuy0k8migOA9bwrcuyU9gDuKHgJT7gTRk9m4ZHQfCSNtxViitKBG%2FIgG6y3Fd%2BJJi20u1630WYW0%2FZoEF%2FGk5S1%2FB89ztCMomBdTxvsiK3pQ071LLDY&X-Amz-Signature=b63583b629b2a359179d79476612266558d573d19320b8e3d64349d06412b7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
