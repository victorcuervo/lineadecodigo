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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622LR5XDC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFlmZbAukbWiP500vEk6wSx%2BCNEMFtuXq1Y%2FU%2Bl%2Bkq%2F7AiEAkn3GKcJ%2FNUzYKgPyjZAIZyd5EKU0l%2Fbce9HrPN8FQ%2F0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCJSZmKM%2F3ibYPb%2FCCrcAwOJwx81RItRr98Rr3pn%2BXFH56xjxOSoxfxtaWjy9ucihvmqu%2FJwW2xZVAXw0GFNLNw0mxsXaMRY8ia8wPfl0gv1L6je6Aevwm7WNHKYoDzBAAmeE28nIP7ud2wbH1SI7RpO%2Fx3LmTbvn%2B9hWEIpD2Fw6KsKDcZZ%2BbAG8dJ2I1WKZo2Cdc%2BAonNntMGvJhngBbkBQyqVOeI9w3ZWOJCj2waAyVIFFERGYsJGK3nlCnPNcVajtp3SQr3XI4SVPdldygBmmphR4%2FTs0p12mYEo5B7UeEA1p1nYtsfarCyjPWczCjuGKWPqQfQWmr%2BgOMAxjJLvfBjqdIUREkGaLN7%2FasS8aXWlTPa3UhbrIHkMu1dN66kTkvBgNCrUz04bDrpOSF6MFaHo4oBCxjYr1Y39Gf1K7jt8bYc8ZcOwpDRu1OsUyyyoEvcrBM5u348IWdb8Wezk0L0s81L38Fq%2FdIHHUmspZmLk9w0siibtdOl3ZwnWBQYWPihylPHK%2Byzxrl5HDtTPqclADqJR3tTnK7y9SX2bS%2BIKjhEFFBMKkpocctnfdNRfGkYlMrT7DkF%2F7VeCvVd9dw26qyM%2BGBo80BQlsVBIFezHDvyyJ8Qxy66Qs8U5zVjDNT6IRfJhck2PMNnnxckGOqUBoyqoSSqR6LWyIpojT7JqunxGRlJ0%2FMhfbUHn2EG4OVQ4VZCikwT%2F2Bt%2Bq6%2BfD4fxRMYnKwFVxH5781H8u9spl5RARQSY3IGAZV0pYc7a%2B2FBPSwR3%2Fa%2FRpz8Qq60Fa8gU1U2SjZmMJc%2BcRd4EBvCnCz8Tvmgx%2Fs8vHAVNjW3oRZNANDja7wEhaFphSCzes4SJ4dLSSp4Vs%2BZDcHtmC4oqOzgo9yg&X-Amz-Signature=b513fe517126355a66564db15832c9b72377d2b90df67739f59fd9367a14dc8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622LR5XDC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFlmZbAukbWiP500vEk6wSx%2BCNEMFtuXq1Y%2FU%2Bl%2Bkq%2F7AiEAkn3GKcJ%2FNUzYKgPyjZAIZyd5EKU0l%2Fbce9HrPN8FQ%2F0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCJSZmKM%2F3ibYPb%2FCCrcAwOJwx81RItRr98Rr3pn%2BXFH56xjxOSoxfxtaWjy9ucihvmqu%2FJwW2xZVAXw0GFNLNw0mxsXaMRY8ia8wPfl0gv1L6je6Aevwm7WNHKYoDzBAAmeE28nIP7ud2wbH1SI7RpO%2Fx3LmTbvn%2B9hWEIpD2Fw6KsKDcZZ%2BbAG8dJ2I1WKZo2Cdc%2BAonNntMGvJhngBbkBQyqVOeI9w3ZWOJCj2waAyVIFFERGYsJGK3nlCnPNcVajtp3SQr3XI4SVPdldygBmmphR4%2FTs0p12mYEo5B7UeEA1p1nYtsfarCyjPWczCjuGKWPqQfQWmr%2BgOMAxjJLvfBjqdIUREkGaLN7%2FasS8aXWlTPa3UhbrIHkMu1dN66kTkvBgNCrUz04bDrpOSF6MFaHo4oBCxjYr1Y39Gf1K7jt8bYc8ZcOwpDRu1OsUyyyoEvcrBM5u348IWdb8Wezk0L0s81L38Fq%2FdIHHUmspZmLk9w0siibtdOl3ZwnWBQYWPihylPHK%2Byzxrl5HDtTPqclADqJR3tTnK7y9SX2bS%2BIKjhEFFBMKkpocctnfdNRfGkYlMrT7DkF%2F7VeCvVd9dw26qyM%2BGBo80BQlsVBIFezHDvyyJ8Qxy66Qs8U5zVjDNT6IRfJhck2PMNnnxckGOqUBoyqoSSqR6LWyIpojT7JqunxGRlJ0%2FMhfbUHn2EG4OVQ4VZCikwT%2F2Bt%2Bq6%2BfD4fxRMYnKwFVxH5781H8u9spl5RARQSY3IGAZV0pYc7a%2B2FBPSwR3%2Fa%2FRpz8Qq60Fa8gU1U2SjZmMJc%2BcRd4EBvCnCz8Tvmgx%2Fs8vHAVNjW3oRZNANDja7wEhaFphSCzes4SJ4dLSSp4Vs%2BZDcHtmC4oqOzgo9yg&X-Amz-Signature=ffd94cb16c4bb392371928d69fee0e145d2767927a43cbcfc6a876f02a0653dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
