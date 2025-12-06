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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFTKM34%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcYgOzG6XMy%2BoGXzckw245FDl%2BAeYct5b8PmZ5uEKwXQIgM%2B1JA2wNmjzxfygCQLGTRRSvfcbkYgNS28a64KbFtBsq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDBMaWgtAQQismIbQ3ircA8xvVCPMrZd3vu%2FpkYa6X7bKsbvtJ9MFfyQJQfWj7y4LSDik%2BQprZpMyXkFEV7Ra4xTVgXN6VB4a0QuuAHCa2q%2B9cfGqLjinAkRZ%2FlksFeTVjUg48lhC9EvazUtoIFlKgn0j%2BYi1oZrZkUc3l6pVvMWmEFFMwuntHswvNjK%2BGvdb%2FVcs1vW3T9ShNvJvSpSiBqTLqyu8IlofwZ2afOzFSdxrg3Ya4ZyPnYoZAM2T9N8DXtjE5N71H6DPEWBKtzqCMvGIoYvgu4yZR%2BVsiVvjkv%2BE1517EFngldsHRvoZh6e6mnLw8rjC4fMV%2BKKFAAsGaxKmm1Q4kPJkz8%2Bf6BW1wS2puzE%2FUZ9o%2Bl1wiWUFPcAMZUAUBYQfGCquiE38L4GRAIerRsi7DYCNd6P3zvfra0IGHynI0I8wyliB%2BkS16kKuM%2BOY98tf9%2ByJGqTqoUts9vjErogomWFoKUj0z%2FCGzXNUB5Om6T4roMByXavNg4eSpcsgX%2Fy9CIemmzFwkBU98FNS9crVACxC8Tbwee8%2BwWQ8%2Fk8OU1xiZVAUZGHWXxsTn3CkP6ArQVsdSAkHt7N9TTit87FYGsP73n8wtlW67xMJO5hM%2FPAIHy8wDOwQ21g5%2F6VAj%2BJbFXQILzazMKSnzskGOqUBDEvrR5SCnaej9is2n47H%2FYdSi0XA3nWLjvAnQ91suM9q4Fv4oFUT9Dv3vYY4GeH2Q%2Fx8HPd54c8omCjeethu7dwlHMdTdBzgDJ2OZrGq2Px0ucAmSNDVIJp6SSEkejF5dpRnNYhUHiBMJoLDK5WZ8Rm5fFpRwcAHXjh9lym0v%2BXBXCygK5oXf2MtbzearjEhWezO1M2zaLA7nYBvuNitMemr1KBy&X-Amz-Signature=720ba036248b6424ea761fb846e9706ba08bbbcbb201d6af8bb47f70eee1e4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFTKM34%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcYgOzG6XMy%2BoGXzckw245FDl%2BAeYct5b8PmZ5uEKwXQIgM%2B1JA2wNmjzxfygCQLGTRRSvfcbkYgNS28a64KbFtBsq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDBMaWgtAQQismIbQ3ircA8xvVCPMrZd3vu%2FpkYa6X7bKsbvtJ9MFfyQJQfWj7y4LSDik%2BQprZpMyXkFEV7Ra4xTVgXN6VB4a0QuuAHCa2q%2B9cfGqLjinAkRZ%2FlksFeTVjUg48lhC9EvazUtoIFlKgn0j%2BYi1oZrZkUc3l6pVvMWmEFFMwuntHswvNjK%2BGvdb%2FVcs1vW3T9ShNvJvSpSiBqTLqyu8IlofwZ2afOzFSdxrg3Ya4ZyPnYoZAM2T9N8DXtjE5N71H6DPEWBKtzqCMvGIoYvgu4yZR%2BVsiVvjkv%2BE1517EFngldsHRvoZh6e6mnLw8rjC4fMV%2BKKFAAsGaxKmm1Q4kPJkz8%2Bf6BW1wS2puzE%2FUZ9o%2Bl1wiWUFPcAMZUAUBYQfGCquiE38L4GRAIerRsi7DYCNd6P3zvfra0IGHynI0I8wyliB%2BkS16kKuM%2BOY98tf9%2ByJGqTqoUts9vjErogomWFoKUj0z%2FCGzXNUB5Om6T4roMByXavNg4eSpcsgX%2Fy9CIemmzFwkBU98FNS9crVACxC8Tbwee8%2BwWQ8%2Fk8OU1xiZVAUZGHWXxsTn3CkP6ArQVsdSAkHt7N9TTit87FYGsP73n8wtlW67xMJO5hM%2FPAIHy8wDOwQ21g5%2F6VAj%2BJbFXQILzazMKSnzskGOqUBDEvrR5SCnaej9is2n47H%2FYdSi0XA3nWLjvAnQ91suM9q4Fv4oFUT9Dv3vYY4GeH2Q%2Fx8HPd54c8omCjeethu7dwlHMdTdBzgDJ2OZrGq2Px0ucAmSNDVIJp6SSEkejF5dpRnNYhUHiBMJoLDK5WZ8Rm5fFpRwcAHXjh9lym0v%2BXBXCygK5oXf2MtbzearjEhWezO1M2zaLA7nYBvuNitMemr1KBy&X-Amz-Signature=02010300ea930a1b979f3f557a4474ebbbfa10cc8ff8288851d45ef44a4d646f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
