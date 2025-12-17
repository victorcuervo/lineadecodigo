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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637BLZK4C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxXqWGUd4PoZuoOVJChofAg8wwe%2FudR8nY%2Bpj9yvqYVAiB%2FFVavK3CSqs7HYxyRzn2Huo0YOSaD7v3ksS2PnpHj%2FSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTdnKxZ1BvC8LDtNAKtwDNDeoOSkoWc547595zyCl9MZkWwmUkiN%2FmUZ1AWGXkKFtTsZcfyjEFxMOD6CUdtocGQ%2Byqa2RSCqumOI7i432QD2KkYLY2qx6LpcMb5CiEkc768sK6OC3kzStCtN8SUgDA9a50zmKZVgPgrJCnzrIQgA5rNR%2FGLimImMS9n0P7LUx8b7odCGrmmCIeHZT2J4Lo6lw8Yo9JPqJM0bhMoQI%2FmLO96FL0sk46%2FsyjoH73kmSgAGHVkxv2FqeNJ4DHbrMquvX12kB23yVgpQO3YM46UvUDIGZXqDj1L39T5Y8XssKJipns%2F1ZOWcilFTLxMobkLRBN9jJ2AgclUolwUGBnQBEzMAhBTBHPM3n%2FNzGQwms%2Bp5LqlFg%2F2sPZQFA3FigLrMvzh8CZ81nPHHNRwH%2FnaensEOKx6sx5A2AkPpxcF%2BFjvy9M3oQz5%2FuhSVZFQFUpigvPHtcLIpccK7ttu0APK%2Bgis1pW5nS0dKfna39MM63bH2P6SSFCYFbIhXaO6pphPOSKo4JtBDd%2BYUAUTUykfrubB5lnKlky06jPp027Dg6zG9bU8%2FuSBEc7VnFx1Ju7KnyyvS91LzIEc%2BmT5iO7CxIEGSxb%2FvPlk037AXJWbJlG9LsRSF4pabq7yswlIGLygY6pgGxLkmVU0czQdiVjuoujAbDSPv4bXzwj%2FCC54mP931agx7VcIXHFzyCuvFEDQHlKLvah9eZXmCZutbbNAT%2FqkhPqeFhjr%2Fy2WLqdoL02WgSU5An72Fkki9ZoerRy%2FUfD0IctGydCMgdPmAdIIfNbL4GNeVLbKJgd0W7PlYKJfWe3yiicwCacd%2BLQ0fsWQ4jJB5KieCf2UPUB132ZNDHUoom9wgh%2Fjfo&X-Amz-Signature=1f63590e5df79d328e3bda02f372aa50d57dc3d1b0028966354ceed2bc136f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637BLZK4C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxXqWGUd4PoZuoOVJChofAg8wwe%2FudR8nY%2Bpj9yvqYVAiB%2FFVavK3CSqs7HYxyRzn2Huo0YOSaD7v3ksS2PnpHj%2FSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTdnKxZ1BvC8LDtNAKtwDNDeoOSkoWc547595zyCl9MZkWwmUkiN%2FmUZ1AWGXkKFtTsZcfyjEFxMOD6CUdtocGQ%2Byqa2RSCqumOI7i432QD2KkYLY2qx6LpcMb5CiEkc768sK6OC3kzStCtN8SUgDA9a50zmKZVgPgrJCnzrIQgA5rNR%2FGLimImMS9n0P7LUx8b7odCGrmmCIeHZT2J4Lo6lw8Yo9JPqJM0bhMoQI%2FmLO96FL0sk46%2FsyjoH73kmSgAGHVkxv2FqeNJ4DHbrMquvX12kB23yVgpQO3YM46UvUDIGZXqDj1L39T5Y8XssKJipns%2F1ZOWcilFTLxMobkLRBN9jJ2AgclUolwUGBnQBEzMAhBTBHPM3n%2FNzGQwms%2Bp5LqlFg%2F2sPZQFA3FigLrMvzh8CZ81nPHHNRwH%2FnaensEOKx6sx5A2AkPpxcF%2BFjvy9M3oQz5%2FuhSVZFQFUpigvPHtcLIpccK7ttu0APK%2Bgis1pW5nS0dKfna39MM63bH2P6SSFCYFbIhXaO6pphPOSKo4JtBDd%2BYUAUTUykfrubB5lnKlky06jPp027Dg6zG9bU8%2FuSBEc7VnFx1Ju7KnyyvS91LzIEc%2BmT5iO7CxIEGSxb%2FvPlk037AXJWbJlG9LsRSF4pabq7yswlIGLygY6pgGxLkmVU0czQdiVjuoujAbDSPv4bXzwj%2FCC54mP931agx7VcIXHFzyCuvFEDQHlKLvah9eZXmCZutbbNAT%2FqkhPqeFhjr%2Fy2WLqdoL02WgSU5An72Fkki9ZoerRy%2FUfD0IctGydCMgdPmAdIIfNbL4GNeVLbKJgd0W7PlYKJfWe3yiicwCacd%2BLQ0fsWQ4jJB5KieCf2UPUB132ZNDHUoom9wgh%2Fjfo&X-Amz-Signature=59d81f23c9c48ff87b3db0a24d9275bcd9cbae694696bf870c85bde22fb4d243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
