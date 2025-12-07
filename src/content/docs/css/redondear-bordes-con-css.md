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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PTPZSIU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfZIHqPc%2B%2BSf0vVlbsTliwvul2%2BovSxVJw3h5Vxq%2B3WAiBZpQv0n8oTuVZFBCxmibmPruOWpnISrU%2FrauK8BPN8oiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRymZ2ZOBNqLdnjsRKtwDdIdASH5yKos70WTDJS5mNfD%2FcX3DZoPhl2lJ5TTVzpLQwgkVNg5i49i3ttPsL8llfr8q5CWMCQRcpPEu8Z2JE0BR017PKFkE9Jl6jZyx9Pozw%2F5WGQiNrL0mY99HB3JlkTsmcNj%2FwT7J2Uji%2BGEKesrDnJ9BNIpj1Hwj19dp4PI0PMmO3m0Dj9bo3r5eF0MGCD4PzK4lwbUqQXLkLlS55m5rUf5GOWa1OyfJienfP5wur5sKX13dqiHeoPYl2j2Q2YWMI11sv2r6p0VwV65SWHfSvwWq%2B%2FzLaf6RL2QBZygi%2BcLuCasUiyxMA0f3Ph7%2F654QvXZeC9HYAHkiUHCtU2anmyNgeFdXiGXQFs9jQs9Hyuvseym%2F9T5YVU5Z7FFEO9jFZZlMfrTLHuAJjQRs1CrLpdF7VfvzcrYcn9HCF%2BJ8%2FGXoAMhqHvV7MMgQDaLu%2FvcdKU%2BfaU%2FDBnCg%2FHR5UQIgkD0zIKTWnRYDB7u6%2BGn0KEhTRaiA1a8VeW%2B7ASPtWFuQp8taAzHf9MtF%2FMdluJcOTaV0hF96HqCZgn4nVbryN%2BNNooqlZI%2F3TyCXc1WIa%2BTVzlcbHyjrIg1fLCx3InWwzfU6MRPNjglGC53gE5t2OMjYUlEewdTqbLgw14TYyQY6pgGJFXTZXrZK7jx14UiU1pHaexc9Dwb78p%2FOC4b3%2BFh6vC1wFeg07g%2FkCF4c%2F0IyX8LUWKBNA0IMg5OJ57uztAWdfabusO8XUDMYcXmvrkhdhJS3KZQ7eHdSy8%2ByIhyUf4Q6EEQZdC6X2mNDtVI%2BCEBfg6KaE41%2BCr10bhITiAI%2BwRRWppzQM0rlQYYQWpDy%2Be9sNaOyan4LDCKXq0eSqaZFYXSxuUp6&X-Amz-Signature=a5dd0bd201c5d597c8e964e5a0232e5635cd336f992b9381fbceaa090b269654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PTPZSIU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfZIHqPc%2B%2BSf0vVlbsTliwvul2%2BovSxVJw3h5Vxq%2B3WAiBZpQv0n8oTuVZFBCxmibmPruOWpnISrU%2FrauK8BPN8oiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRymZ2ZOBNqLdnjsRKtwDdIdASH5yKos70WTDJS5mNfD%2FcX3DZoPhl2lJ5TTVzpLQwgkVNg5i49i3ttPsL8llfr8q5CWMCQRcpPEu8Z2JE0BR017PKFkE9Jl6jZyx9Pozw%2F5WGQiNrL0mY99HB3JlkTsmcNj%2FwT7J2Uji%2BGEKesrDnJ9BNIpj1Hwj19dp4PI0PMmO3m0Dj9bo3r5eF0MGCD4PzK4lwbUqQXLkLlS55m5rUf5GOWa1OyfJienfP5wur5sKX13dqiHeoPYl2j2Q2YWMI11sv2r6p0VwV65SWHfSvwWq%2B%2FzLaf6RL2QBZygi%2BcLuCasUiyxMA0f3Ph7%2F654QvXZeC9HYAHkiUHCtU2anmyNgeFdXiGXQFs9jQs9Hyuvseym%2F9T5YVU5Z7FFEO9jFZZlMfrTLHuAJjQRs1CrLpdF7VfvzcrYcn9HCF%2BJ8%2FGXoAMhqHvV7MMgQDaLu%2FvcdKU%2BfaU%2FDBnCg%2FHR5UQIgkD0zIKTWnRYDB7u6%2BGn0KEhTRaiA1a8VeW%2B7ASPtWFuQp8taAzHf9MtF%2FMdluJcOTaV0hF96HqCZgn4nVbryN%2BNNooqlZI%2F3TyCXc1WIa%2BTVzlcbHyjrIg1fLCx3InWwzfU6MRPNjglGC53gE5t2OMjYUlEewdTqbLgw14TYyQY6pgGJFXTZXrZK7jx14UiU1pHaexc9Dwb78p%2FOC4b3%2BFh6vC1wFeg07g%2FkCF4c%2F0IyX8LUWKBNA0IMg5OJ57uztAWdfabusO8XUDMYcXmvrkhdhJS3KZQ7eHdSy8%2ByIhyUf4Q6EEQZdC6X2mNDtVI%2BCEBfg6KaE41%2BCr10bhITiAI%2BwRRWppzQM0rlQYYQWpDy%2Be9sNaOyan4LDCKXq0eSqaZFYXSxuUp6&X-Amz-Signature=a32fa73a1049484a1c3c577a5074a50641b0c1a64ba0f99ea4cd99d4fe5e47de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
