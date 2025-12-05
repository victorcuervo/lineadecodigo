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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOBPMPQS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIqYkRwUSkLWdNDO0Kk4vCGUYcsPsCHOcCNa4fXlNMlAiEA0WahBXYnvfv6dwA6OOyRRAHu772UoVsKOVNZIipaROYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHzU7%2F%2Bjtnq7JUitSCrcA4bCYyLWhAI68ar2Fm%2F7XBJVZ57RS5dFcUtf%2FC%2B2X1YvvxoXBDDqLBO8DgpM9kamUzZCY1ObnzD4Wz4mMluIvTT%2BG0ZfoCkEIL2SRSqYskq5%2Bg7MVhKaKWFO%2BkDjLLmYQa2Ac0KpgOKqVwat%2BndHrF3UikFYd6Z5jsEiAhlQ5%2B3N369u3yrVXmw9iWH8w%2BHF7zPhsq%2FM4wvNJPtTQrOlHcXhW%2BqFKdnAkw5q%2FNGySZuO%2FZpXWviUjSce3xZ83czI6VWQlf968I%2ByuuS7zhptEztPPqarE7YktEGkGTrArJi4OI17EvyGOClGZJnII1i%2FYhS3cJr%2BnZJcuOe7WwZm%2FW7JPRYHmG6kSL4gzUkqSPDEmgR4zASE5PGoKz%2BhHPzWKrkd1uV7Fxhxize1cuELo1%2FhT%2BQ831l1w9ovPZT%2BoBhoBs5NaS93UxjH4tKfSTdFkGbN10iuH2kiajo5QvQZUyQTVkT1GM9VEuZ1ISw1sGdt8%2F1d15W3ME%2Fm7J9U1tZA7%2Bq77Jb5F5a0oHnCvrRXULZrD4M7tNLhpMQ2O7ZqD1kWw29cSooLa76kVrGRyF1hoNhpfILrGWhfVTKoK7oyLxuozUTae5zp2jAjEcSsStxBjRpx5f3%2F3w81HbCmMNz2y8kGOqUBKzNNHUmd6NHonSLwpfEvWEWNdc2iMM4L7VGPn438%2BlrCCiYojVXwlx%2FekSJBgkkbQ2bJVh85nApuJldkMFpekNbGAFhizja5KVBsvNBcWfYJjdJ5W4REXVCLd2cDW5WNHfGjbmXw%2FCqbU8ksbUOoU0bOkjXYIP6sSVPjozT6YObsY%2FEe5GsBC4rCiJC2DT1rb5f8426C%2FYhWQTadmE63eQgpdOrN&X-Amz-Signature=7f627bc610770ab18c45206bef79054d544174517bfef3d5794333cfadd50583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOBPMPQS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIqYkRwUSkLWdNDO0Kk4vCGUYcsPsCHOcCNa4fXlNMlAiEA0WahBXYnvfv6dwA6OOyRRAHu772UoVsKOVNZIipaROYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHzU7%2F%2Bjtnq7JUitSCrcA4bCYyLWhAI68ar2Fm%2F7XBJVZ57RS5dFcUtf%2FC%2B2X1YvvxoXBDDqLBO8DgpM9kamUzZCY1ObnzD4Wz4mMluIvTT%2BG0ZfoCkEIL2SRSqYskq5%2Bg7MVhKaKWFO%2BkDjLLmYQa2Ac0KpgOKqVwat%2BndHrF3UikFYd6Z5jsEiAhlQ5%2B3N369u3yrVXmw9iWH8w%2BHF7zPhsq%2FM4wvNJPtTQrOlHcXhW%2BqFKdnAkw5q%2FNGySZuO%2FZpXWviUjSce3xZ83czI6VWQlf968I%2ByuuS7zhptEztPPqarE7YktEGkGTrArJi4OI17EvyGOClGZJnII1i%2FYhS3cJr%2BnZJcuOe7WwZm%2FW7JPRYHmG6kSL4gzUkqSPDEmgR4zASE5PGoKz%2BhHPzWKrkd1uV7Fxhxize1cuELo1%2FhT%2BQ831l1w9ovPZT%2BoBhoBs5NaS93UxjH4tKfSTdFkGbN10iuH2kiajo5QvQZUyQTVkT1GM9VEuZ1ISw1sGdt8%2F1d15W3ME%2Fm7J9U1tZA7%2Bq77Jb5F5a0oHnCvrRXULZrD4M7tNLhpMQ2O7ZqD1kWw29cSooLa76kVrGRyF1hoNhpfILrGWhfVTKoK7oyLxuozUTae5zp2jAjEcSsStxBjRpx5f3%2F3w81HbCmMNz2y8kGOqUBKzNNHUmd6NHonSLwpfEvWEWNdc2iMM4L7VGPn438%2BlrCCiYojVXwlx%2FekSJBgkkbQ2bJVh85nApuJldkMFpekNbGAFhizja5KVBsvNBcWfYJjdJ5W4REXVCLd2cDW5WNHfGjbmXw%2FCqbU8ksbUOoU0bOkjXYIP6sSVPjozT6YObsY%2FEe5GsBC4rCiJC2DT1rb5f8426C%2FYhWQTadmE63eQgpdOrN&X-Amz-Signature=8b13b03bc5387aa4fa9ad7802308be625cc481913b6a59b704ea065866f123e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
