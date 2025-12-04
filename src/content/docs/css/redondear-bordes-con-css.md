---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA553TT3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDf59cYdcNfUm0Jef%2FwCJ10vsK3ZFFugAYf1%2FuuDPZzhAiEAsTA78aNMJ5J0vZPN2TWJXkDjpWMCaeBYZpHYydJ3%2Fhkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIDSgADRgZ7LpsUesircA%2FVBfm%2Fk0Go2A0%2BYwkoHS7De4rithhqZZftow4YCoAQPEfFRV6e6PftTMyguFFq1AwcsSkCcGaYiVlQMZK4tUCzWJj23kkAzn8FPuppoMNFMKnAbU0N9yJ5yB9i%2Bc7HqIoD%2BUhyHQzP0oO3AIiyfnXNI%2BSfrh9SZLHhSwRaeclatR0xo2o6YEbxskwRG8Vm%2Frx%2BYU4p6VIQqLwVumcSItwRXO%2BQX7iSGNmx3LZEmcCJ95Oa9CGFmot9AliGGa0i4E%2BzQ0skwVDPnnT1j33U27cU%2FAaE%2FL4MDUdgue35ANjJWndg%2FxO1cA0jB47fLu1TuXi84UcxkwtMZoTvlONfvKWItHkCgxpxJdn4lIaK5E3AqsRJwqulKG9ENetkltBNYv6mUzMd%2FxTj8ACOZeHjbFIRLoPh0dq5CeesoC9wTPIkldFU4fzQTsglm3spCGTwks%2FbSnH14HX1xlAT5dTcdYBCDCMn1EJcLz29v02sddTFRXf8LSoCG6t%2FwkKZvKR3ye8zAPAPNOnNGl7wmhwuSnZfjTR0eqPYDb0RSeyi%2Boqqb2cfoIGHarcQkTHIU1dASS73aUybSH3jm4dIxmqo00tCg2Ynyw4i%2B76KNp1F7Nxx0%2BDZAaevhc7Z%2FET%2FJMNCgxskGOqUBN%2FTsHowW6kSjW0iER1pjKXITtS1giEZZraex4bvnkOa2xh22WayCqDp%2BsCq2VYHHc2LX%2FPeuIjXPgPwT8gmfx9PibF0ZVPNtQpAfgWJ2DBqaSdteuxPrShUU982B40X5zORp7vnuwLjOjm9msdpT%2F1mXOen61oqb0Q1Y6T9dpm5IpTjVSYV8AIpLekCMJqWdsGfTy%2F%2BEFwQDdOM%2B9l6HfCzQl5T2&X-Amz-Signature=dc110e1be393bece77d6245157da107338c88a38cd5a1c96a5fee242066c56a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA553TT3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDf59cYdcNfUm0Jef%2FwCJ10vsK3ZFFugAYf1%2FuuDPZzhAiEAsTA78aNMJ5J0vZPN2TWJXkDjpWMCaeBYZpHYydJ3%2Fhkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDIDSgADRgZ7LpsUesircA%2FVBfm%2Fk0Go2A0%2BYwkoHS7De4rithhqZZftow4YCoAQPEfFRV6e6PftTMyguFFq1AwcsSkCcGaYiVlQMZK4tUCzWJj23kkAzn8FPuppoMNFMKnAbU0N9yJ5yB9i%2Bc7HqIoD%2BUhyHQzP0oO3AIiyfnXNI%2BSfrh9SZLHhSwRaeclatR0xo2o6YEbxskwRG8Vm%2Frx%2BYU4p6VIQqLwVumcSItwRXO%2BQX7iSGNmx3LZEmcCJ95Oa9CGFmot9AliGGa0i4E%2BzQ0skwVDPnnT1j33U27cU%2FAaE%2FL4MDUdgue35ANjJWndg%2FxO1cA0jB47fLu1TuXi84UcxkwtMZoTvlONfvKWItHkCgxpxJdn4lIaK5E3AqsRJwqulKG9ENetkltBNYv6mUzMd%2FxTj8ACOZeHjbFIRLoPh0dq5CeesoC9wTPIkldFU4fzQTsglm3spCGTwks%2FbSnH14HX1xlAT5dTcdYBCDCMn1EJcLz29v02sddTFRXf8LSoCG6t%2FwkKZvKR3ye8zAPAPNOnNGl7wmhwuSnZfjTR0eqPYDb0RSeyi%2Boqqb2cfoIGHarcQkTHIU1dASS73aUybSH3jm4dIxmqo00tCg2Ynyw4i%2B76KNp1F7Nxx0%2BDZAaevhc7Z%2FET%2FJMNCgxskGOqUBN%2FTsHowW6kSjW0iER1pjKXITtS1giEZZraex4bvnkOa2xh22WayCqDp%2BsCq2VYHHc2LX%2FPeuIjXPgPwT8gmfx9PibF0ZVPNtQpAfgWJ2DBqaSdteuxPrShUU982B40X5zORp7vnuwLjOjm9msdpT%2F1mXOen61oqb0Q1Y6T9dpm5IpTjVSYV8AIpLekCMJqWdsGfTy%2F%2BEFwQDdOM%2B9l6HfCzQl5T2&X-Amz-Signature=070e16c04aeeac4923290b32130692e0b30cc1db6a3793f62508ce2036b6c13a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
