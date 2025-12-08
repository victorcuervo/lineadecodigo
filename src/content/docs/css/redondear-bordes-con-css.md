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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGSXDNLH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUaep2xlAMqFNcRAnTOH90WoYfg5ho0ohEanwOprU2%2FAiBLdJwGCj6oIHn9nIMU78PfQaH7cVfRKbroJLsirAstriqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML5V0kAM0YcHr4WHaKtwDJTmDdmR5OcfEB8Y5UcFPqGXu5fSIus2eT%2FK%2Bf%2FbJfUAWY7q5GW56xXi2x9fLQ%2BHsdnfpNtxek01W%2FssNLCaT4TelbFz4VvIny87%2BvIoL2FI3dSIolSE3TnF2sCGFsOxv5Zfov8yYNxA8zsX2LRZeB%2FYsMZ5nrg2weXJiSDFF9gm7jeNCR32A92DMqNSlbbZ%2BTHJyru51vLUN8xn8iUt%2Fv3a5ye%2FWw%2B5srnskXm1aBZRjLheInzTgjeJjLy4DdKyQiupUPmHCoZdD16Px0VVJYkH%2BbY6VucQ1wO8N2lkio6ktmvpWAlJIgm37Bw6iqtRq%2BDfOf2EIpb5HyWvdmzf33d0ue6bx97cFq4ba8NGfVoe0GkS5Kap4AiCtmqmtoiR0wOULlgLsZba99BinvmdId5kKOb7eik81JjNB8Lq9Pqfkdh5%2BmECdtLKNKfIo0dDsZgW37aYpE%2BOnkxONyPkeSZ7D1%2FFGpz%2FRW9XgycCJkwv1We57OfVdxaMoRX%2F2YDNe5MHw%2FefNgLxYvedL5vhnZPUwhC24IzIkuvMpTv0d2BDJ6bDv0yJiL9Dj76GKlKmjudB%2FfedxelAZtQ49u38adZibR3O3hvkrUONRzioeCcSBWopP2NWS63XAakww4qHdyQY6pgEkD4OQ3Zi7nUvDsO3Rj3qce8jjrBEwmmbVRos2FGndt3SliImaSc4qPe1gTjwfdWaAXHIiMA9AzWN3ZzAh%2FEavtUW57pyGq5f8aLIfWEVgfs3lbD8n2wmDOxR5HSjqxhosJakhiaL5cEXx%2FJbOYnDZML6G%2BJRHwjLgBtBNXufOR%2F9Qnsr60q6UumAoHecpCsnbrzxaOLNZb0VeUIPtNTIZV79aL9%2Fx&X-Amz-Signature=61c7cfeefb43b4a88a11350bf2c7d073196e293c2078cb9333f36ba9ba4ca62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGSXDNLH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUaep2xlAMqFNcRAnTOH90WoYfg5ho0ohEanwOprU2%2FAiBLdJwGCj6oIHn9nIMU78PfQaH7cVfRKbroJLsirAstriqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML5V0kAM0YcHr4WHaKtwDJTmDdmR5OcfEB8Y5UcFPqGXu5fSIus2eT%2FK%2Bf%2FbJfUAWY7q5GW56xXi2x9fLQ%2BHsdnfpNtxek01W%2FssNLCaT4TelbFz4VvIny87%2BvIoL2FI3dSIolSE3TnF2sCGFsOxv5Zfov8yYNxA8zsX2LRZeB%2FYsMZ5nrg2weXJiSDFF9gm7jeNCR32A92DMqNSlbbZ%2BTHJyru51vLUN8xn8iUt%2Fv3a5ye%2FWw%2B5srnskXm1aBZRjLheInzTgjeJjLy4DdKyQiupUPmHCoZdD16Px0VVJYkH%2BbY6VucQ1wO8N2lkio6ktmvpWAlJIgm37Bw6iqtRq%2BDfOf2EIpb5HyWvdmzf33d0ue6bx97cFq4ba8NGfVoe0GkS5Kap4AiCtmqmtoiR0wOULlgLsZba99BinvmdId5kKOb7eik81JjNB8Lq9Pqfkdh5%2BmECdtLKNKfIo0dDsZgW37aYpE%2BOnkxONyPkeSZ7D1%2FFGpz%2FRW9XgycCJkwv1We57OfVdxaMoRX%2F2YDNe5MHw%2FefNgLxYvedL5vhnZPUwhC24IzIkuvMpTv0d2BDJ6bDv0yJiL9Dj76GKlKmjudB%2FfedxelAZtQ49u38adZibR3O3hvkrUONRzioeCcSBWopP2NWS63XAakww4qHdyQY6pgEkD4OQ3Zi7nUvDsO3Rj3qce8jjrBEwmmbVRos2FGndt3SliImaSc4qPe1gTjwfdWaAXHIiMA9AzWN3ZzAh%2FEavtUW57pyGq5f8aLIfWEVgfs3lbD8n2wmDOxR5HSjqxhosJakhiaL5cEXx%2FJbOYnDZML6G%2BJRHwjLgBtBNXufOR%2F9Qnsr60q6UumAoHecpCsnbrzxaOLNZb0VeUIPtNTIZV79aL9%2Fx&X-Amz-Signature=7bf964e1d6b6361d99d2780e63c6e9e1a1119f1d28db4b2d6a476ca436ec8c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
