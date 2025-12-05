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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD62CK7Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMe1%2B5kw1W0O51dBk2cd3wnwMCMJ%2FvdVZIk0lSXzq6sAiEAnfJBFiszbPtwMyQNHEFV5gpbWLJKoXT6FVDao9wEupoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDK%2Bn8RfN2sijCQHlsSrcA0WxCt4FBhsCYXRxFn%2BzbDEGYqI0touZ6PxUm2LegjYMXqrp%2Bo3CyhjQjqVZWEU0YqoJTlMj1KsG1yMMCY8kimKkjYvHGZk%2FlIiZdeiGY1B8NrnRldqgWb1iGnoSdWdhWl%2Fy345l%2FsSXHulMgJ%2BsT%2Bq2jKzsq%2FCPj79WWCpaw9PotTY1OirWItSS%2BEh%2BzJcSccP106Sf3rS2xhj0qTQqDscNdlaf65TJoM5z9ciutVeF6dJzjilKM%2FSZvFGMqNZOI%2FXDuWoGObqbswHUcFtfU5ngBETLILLD%2BKm0%2FZ4lLRMYugdaYUbwjC0owdorlxtGNw%2BlnEQBI9yG4m9GnX%2BuWMVJCNhs2l9lzNcm0EPWISCnZcLEttFQzxm7s5DNpb3vXtsgD%2FifdF0bmEMD1ou0AoGAvm05QhfZm%2Favf6L557dnMFcTz%2BZaLbAPL6kxvBK1Z%2FeYPhB2tM%2F7hr1fftPqNJQsjuwf6%2BU%2FhY%2FCiO%2Br%2FClMuHNjNzADq3LdKKsS9b5ubUUmjUfX4ZX3QFC1USEeoDZFlYsypYSjpHtkPbRRaQIb7hbFH4Jzvu%2BRWn0CBxEYwoljqQGS1pdFXAj%2FLzV%2FuBrGHhkI4GTXlGvovao%2FTvAx6536C%2BpdXsFnQXTFMLbDyskGOqUBUGXTD8Hl1osKknYuyTI6i1kQRsnqHeYxMDQqXXAPBNDYrVkQGVlX9fDgC%2BTi66R2NGu3uJOaAyryS2BXNDV2wwzqtOonX2Ry6ltNdhfENaQh%2FoLDQ0gLXtAs4CjNxk6nTZb%2FDTMIhcbAentN6BB65ChCbblimH6Sl5iRh%2F70ILzGJf8b8Ie%2FVR0%2F%2F%2FRTM5vbymAwGujcu%2FErYQ942FUDMqhs0%2FhA&X-Amz-Signature=a06e1fe1b4db0c35fea7c2696c1f93d2b721955b82f54b6983c01828e170f676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD62CK7Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMe1%2B5kw1W0O51dBk2cd3wnwMCMJ%2FvdVZIk0lSXzq6sAiEAnfJBFiszbPtwMyQNHEFV5gpbWLJKoXT6FVDao9wEupoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDK%2Bn8RfN2sijCQHlsSrcA0WxCt4FBhsCYXRxFn%2BzbDEGYqI0touZ6PxUm2LegjYMXqrp%2Bo3CyhjQjqVZWEU0YqoJTlMj1KsG1yMMCY8kimKkjYvHGZk%2FlIiZdeiGY1B8NrnRldqgWb1iGnoSdWdhWl%2Fy345l%2FsSXHulMgJ%2BsT%2Bq2jKzsq%2FCPj79WWCpaw9PotTY1OirWItSS%2BEh%2BzJcSccP106Sf3rS2xhj0qTQqDscNdlaf65TJoM5z9ciutVeF6dJzjilKM%2FSZvFGMqNZOI%2FXDuWoGObqbswHUcFtfU5ngBETLILLD%2BKm0%2FZ4lLRMYugdaYUbwjC0owdorlxtGNw%2BlnEQBI9yG4m9GnX%2BuWMVJCNhs2l9lzNcm0EPWISCnZcLEttFQzxm7s5DNpb3vXtsgD%2FifdF0bmEMD1ou0AoGAvm05QhfZm%2Favf6L557dnMFcTz%2BZaLbAPL6kxvBK1Z%2FeYPhB2tM%2F7hr1fftPqNJQsjuwf6%2BU%2FhY%2FCiO%2Br%2FClMuHNjNzADq3LdKKsS9b5ubUUmjUfX4ZX3QFC1USEeoDZFlYsypYSjpHtkPbRRaQIb7hbFH4Jzvu%2BRWn0CBxEYwoljqQGS1pdFXAj%2FLzV%2FuBrGHhkI4GTXlGvovao%2FTvAx6536C%2BpdXsFnQXTFMLbDyskGOqUBUGXTD8Hl1osKknYuyTI6i1kQRsnqHeYxMDQqXXAPBNDYrVkQGVlX9fDgC%2BTi66R2NGu3uJOaAyryS2BXNDV2wwzqtOonX2Ry6ltNdhfENaQh%2FoLDQ0gLXtAs4CjNxk6nTZb%2FDTMIhcbAentN6BB65ChCbblimH6Sl5iRh%2F70ILzGJf8b8Ie%2FVR0%2F%2F%2FRTM5vbymAwGujcu%2FErYQ942FUDMqhs0%2FhA&X-Amz-Signature=cdfe4e2d6f24ca5b96f0d00f1b367f8753f4035a63e2d73b45b0694fb072a0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
