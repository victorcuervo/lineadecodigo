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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCCXXUY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzcV33gXjbqlpFpipAVnWXXJCakLUfYV7ixFzm9F7WHAiAQ%2BkcpKEM6C590ZjxFvsQoe8b45EufgkWM%2Fnd3pC7vmCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FCXpl58IXC8pBblOKtwDWCFSAa5WcHCzoQOl221uyN6YRu4AGJEBn%2B5E1fzcYebDshL4tWOBj6M6nUrJllUvoFXPankfVuyDM4x5yEdiX464%2FNimMB3LbSV4hnA%2BN6CpiWHJ1Uc2WM7B%2FgEau9ruwLrkk2dSoRfvtZN%2FeTayzjtM%2FR1Cnraei9xz1e%2BFiskTTIjkcz%2FaMo3ieuQkCMkGuGnqGhye7f4UhWniWjag6Ae4Ocpi7yDDDSdkHni62%2FMXVazag1G5l%2FGMZjXPTTSQGmj0629f9z5f9xVWqQxdBe076IsMz19T9jd%2FjPiAkt97X4d2L9l5BH0wP62LN2WunBnKp9Wvgf7lqSj%2BCjtiepbfgd0WRdDBLhpyZMe5p7N7XfqS4SdXPQR9dmbw3WU0rtg0Vo4levIkK%2BixBIwvC4ZcR%2BYuXqB24PVwqjqWr27kmzv4z3WfzHxwIzVynApW4lbcVWsp0EvAPGGYKA9fJTduNc7X2VajbhzuLsEov2dZWLz%2Fm%2BGwCrR81TLH0kvWjVBNLL1XwAjUttpDzL3DzXK8phyL7uCJtlSdqNE%2FMk5YHZF6CwrPayjBEjP0H7gXglNEOWUdrTO6%2FmmaquE5zm2xy5Odw%2B%2F9h%2BStbEEsR1fd%2Bmf1dAP57pLqQPQw45rUyQY6pgHRiDKy5poEB7TWNqOxDu%2FnsXI16aUoXoUQOa1FuUT9%2F5zHBjeZgLC243fli0ltVvM2%2B9pCMTrp0Ku7m0UjrB6r1V4RIsHrE4yrSC1hRrCtyAAKQd9jD49nLiEVLpEeTzyV0ZPcE5QOvUOZ8eOz0Entq0cSv8y52BylrgzTyU0aQal6I%2Fp5OiQ5Ge1MfsZsmsRXn6pR17FJlJelqx1v%2F2Uo%2FOgVMvCE&X-Amz-Signature=dfbb1cb2e2306d6a862fcea9c07f16ab6665e71e33278056e6a5f9bc5e8171b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCCXXUY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzcV33gXjbqlpFpipAVnWXXJCakLUfYV7ixFzm9F7WHAiAQ%2BkcpKEM6C590ZjxFvsQoe8b45EufgkWM%2Fnd3pC7vmCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FCXpl58IXC8pBblOKtwDWCFSAa5WcHCzoQOl221uyN6YRu4AGJEBn%2B5E1fzcYebDshL4tWOBj6M6nUrJllUvoFXPankfVuyDM4x5yEdiX464%2FNimMB3LbSV4hnA%2BN6CpiWHJ1Uc2WM7B%2FgEau9ruwLrkk2dSoRfvtZN%2FeTayzjtM%2FR1Cnraei9xz1e%2BFiskTTIjkcz%2FaMo3ieuQkCMkGuGnqGhye7f4UhWniWjag6Ae4Ocpi7yDDDSdkHni62%2FMXVazag1G5l%2FGMZjXPTTSQGmj0629f9z5f9xVWqQxdBe076IsMz19T9jd%2FjPiAkt97X4d2L9l5BH0wP62LN2WunBnKp9Wvgf7lqSj%2BCjtiepbfgd0WRdDBLhpyZMe5p7N7XfqS4SdXPQR9dmbw3WU0rtg0Vo4levIkK%2BixBIwvC4ZcR%2BYuXqB24PVwqjqWr27kmzv4z3WfzHxwIzVynApW4lbcVWsp0EvAPGGYKA9fJTduNc7X2VajbhzuLsEov2dZWLz%2Fm%2BGwCrR81TLH0kvWjVBNLL1XwAjUttpDzL3DzXK8phyL7uCJtlSdqNE%2FMk5YHZF6CwrPayjBEjP0H7gXglNEOWUdrTO6%2FmmaquE5zm2xy5Odw%2B%2F9h%2BStbEEsR1fd%2Bmf1dAP57pLqQPQw45rUyQY6pgHRiDKy5poEB7TWNqOxDu%2FnsXI16aUoXoUQOa1FuUT9%2F5zHBjeZgLC243fli0ltVvM2%2B9pCMTrp0Ku7m0UjrB6r1V4RIsHrE4yrSC1hRrCtyAAKQd9jD49nLiEVLpEeTzyV0ZPcE5QOvUOZ8eOz0Entq0cSv8y52BylrgzTyU0aQal6I%2Fp5OiQ5Ge1MfsZsmsRXn6pR17FJlJelqx1v%2F2Uo%2FOgVMvCE&X-Amz-Signature=3f9f24efbb279348e61396003992e17a63956e7aa3f3c087f2bbded2c06e2cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
