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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UK5B52Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1A46qyCruHWt4Un2gJAwAaBgbXdBbU0FHwWL8xik2DAiEA5ri1Ku8iLep7EjkFYzRvH1XRqBSEpzBXAuulFPx2tSgqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPynHdThunX%2FNCWdyrcA3qnB8BQ7oaEBuXUogxujb06%2FLyoFm0hu%2FJioAU93%2FI3FIfhb0FVvTJYmjH3nk8wj4WpsCRUop8%2FYlnXt88ffi%2BsVGMnS0XFXscR7fapBWWsMfFKPl5m%2Fjbqm4hPv4JUlmi6%2BZZvztZbYp3EtEKYvbgbBrK1Qd0FPry5WmCHEBiYaR2QAnUMEZlYx5mEQejGB%2BRkTMi%2FBIVXY06n6dlZ23PiIesjyKeKrJbNyBBBQ6qwFhTGaVAPGdmAr%2B1XiHJleiG72t6f2EkbBH2AoNeRmg%2FKq96oZLI%2FnOiwWUyCY97mn%2BijqMLYuJmqU53CmZ1BATWRZZZgggaXswN1SOvMVZUWKdlOwfRIs2L9b2CCRaHl2T4ARbHuWHwaP1c%2BOrurnncBETpTziCHaQ4IcnhVvXPy8asSj1ScU7DA8bQX3IkQp6G9EhHVCemXZNOQnC3rYQqencZww5Qwh327Ral081FZJfTaUfpc8g62HUVcE%2BbLlMBX3S9kC29xZX7%2F2jtvkz%2FqxR5hW9pfALFJv1D2CSsk5nex0xKVPJOQccU4IAB1rRpYZlUG46zqV%2BfLKBv0D6g27PI2RQIMqlTTn15qAjMNjlvEES4xAM8DTJ%2FRFp0bi9PRTxp3v4q8E4hOMOyo18kGOqUBsM24z3uXOSopoTww7uY07Br8kszAFtf12x6g5K34OZscUlVmiobAiArJUnobHey1MtSAhohqmagIc4WZkJNUizVR3SM8i4HosOvfqNsflVCPu0ceSSF%2FVVF3kN9VZpxNRqHM0w77i34X1aL0u%2FuReRxIQl%2BCuxxTRT7a%2Fr4p6xpkMoyqtml6%2BQqKG6pzBQ%2BVnKPZWu1U7uNQMAtqLYUGwOMSZmBB&X-Amz-Signature=9c1b601007ed2aa03b78b71a5d91e0813c42161f544b25e9b8b7117c5d11316e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UK5B52Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1A46qyCruHWt4Un2gJAwAaBgbXdBbU0FHwWL8xik2DAiEA5ri1Ku8iLep7EjkFYzRvH1XRqBSEpzBXAuulFPx2tSgqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPynHdThunX%2FNCWdyrcA3qnB8BQ7oaEBuXUogxujb06%2FLyoFm0hu%2FJioAU93%2FI3FIfhb0FVvTJYmjH3nk8wj4WpsCRUop8%2FYlnXt88ffi%2BsVGMnS0XFXscR7fapBWWsMfFKPl5m%2Fjbqm4hPv4JUlmi6%2BZZvztZbYp3EtEKYvbgbBrK1Qd0FPry5WmCHEBiYaR2QAnUMEZlYx5mEQejGB%2BRkTMi%2FBIVXY06n6dlZ23PiIesjyKeKrJbNyBBBQ6qwFhTGaVAPGdmAr%2B1XiHJleiG72t6f2EkbBH2AoNeRmg%2FKq96oZLI%2FnOiwWUyCY97mn%2BijqMLYuJmqU53CmZ1BATWRZZZgggaXswN1SOvMVZUWKdlOwfRIs2L9b2CCRaHl2T4ARbHuWHwaP1c%2BOrurnncBETpTziCHaQ4IcnhVvXPy8asSj1ScU7DA8bQX3IkQp6G9EhHVCemXZNOQnC3rYQqencZww5Qwh327Ral081FZJfTaUfpc8g62HUVcE%2BbLlMBX3S9kC29xZX7%2F2jtvkz%2FqxR5hW9pfALFJv1D2CSsk5nex0xKVPJOQccU4IAB1rRpYZlUG46zqV%2BfLKBv0D6g27PI2RQIMqlTTn15qAjMNjlvEES4xAM8DTJ%2FRFp0bi9PRTxp3v4q8E4hOMOyo18kGOqUBsM24z3uXOSopoTww7uY07Br8kszAFtf12x6g5K34OZscUlVmiobAiArJUnobHey1MtSAhohqmagIc4WZkJNUizVR3SM8i4HosOvfqNsflVCPu0ceSSF%2FVVF3kN9VZpxNRqHM0w77i34X1aL0u%2FuReRxIQl%2BCuxxTRT7a%2Fr4p6xpkMoyqtml6%2BQqKG6pzBQ%2BVnKPZWu1U7uNQMAtqLYUGwOMSZmBB&X-Amz-Signature=1126af21b9d60ab4de920e2de73cdb1e5e46eb75244af89d9d0384e405ed606d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
