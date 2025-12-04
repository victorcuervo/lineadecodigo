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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XILMSPQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCO79AykAUsfZgzmdtW9s3%2BvwYScGzXYgS9YCU0SSgjcQIgS32JQeGjZIgulUYLRkprPmUqGEtuS8t3evKT5ZdOTCYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDM%2FK%2BHnCd7pTMObYWircA19O%2BXh64jzoOpa9Qqz3esP7MF%2Boctebk2sfprhoFTdIO%2FLaj4WXtLqYTjeb2ENY98gmtM0XT31MXLDrQk8JqdgRgCFOxyPLXxYXyEgxRayGlQUkX0SHeMnFM0j376f2wgMVjhfrQHkk%2FmRNnA0d8dN9sEr%2F2ESk1K48h%2FYluOV0z3Bpa2gHxzY6cWGSvng71sWNgpk1aRHefsOJSKnXawUCMFAiO1CwYFwK2Dm1v2OcBN4QSN%2BrxQ7UqQMGescWHJZRSW4t5uDHTjB52rCjRNdBuchyZOAUCyykoSdyQGNabzEM%2BNlOSxXcoRDZE8s6V3wFCIoreIV3L2xpScTeZHmaKsGmKuTSalMgoApbuH8yOTjzkYUL8sYKonIjWC%2F0ZxgSErIqoN9X4LbqCH4mcGeRFGGaolIkC2tA3UQyw6%2Bh2fe44FEMpoC3TzsxPBbOikqnluEfVgFTeEBzca7rm45VKrBUXWQ76P%2F35ZgmWR18YjBU02kT0o%2F%2FFje9y7b1LSy2w7QFdEPWBc00nuy%2B5loyO3QqTi%2FZD97eZX%2B7smx5uQDZOjXtpPOFBN56%2BS2udt7Y1n7RJ%2FgnZklwut5n9T8Pdm2m%2BPEg%2BDee4prDNY4MhDlICPYBst%2FCYaKmMMDoxMkGOqUBYCyu%2FMAlsBmAURpj42KQ7%2BCkz2QQvN6bFqDwb2eu0jH9NVYyP8NJuWilHX1VQllR0EAmBuKcHjYw6xlOXnL2rKO7EQrefyBlyUuKeDWgvLQtN1dkAZMFZZsfNp3HkZOnCOjToN6CgRL5JXMrKX4wfGvWaI88jpQYt%2BaZYXrk9HpeGSnoehD8xHLLUzUDjbSSfJ%2BvHhVoQuwZ%2FpLiqZ7wsVviNv1r&X-Amz-Signature=98ee29a78fd3bf33f064330d49596ef8617cb442378620f8f1846a48dbabf578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XILMSPQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCO79AykAUsfZgzmdtW9s3%2BvwYScGzXYgS9YCU0SSgjcQIgS32JQeGjZIgulUYLRkprPmUqGEtuS8t3evKT5ZdOTCYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDM%2FK%2BHnCd7pTMObYWircA19O%2BXh64jzoOpa9Qqz3esP7MF%2Boctebk2sfprhoFTdIO%2FLaj4WXtLqYTjeb2ENY98gmtM0XT31MXLDrQk8JqdgRgCFOxyPLXxYXyEgxRayGlQUkX0SHeMnFM0j376f2wgMVjhfrQHkk%2FmRNnA0d8dN9sEr%2F2ESk1K48h%2FYluOV0z3Bpa2gHxzY6cWGSvng71sWNgpk1aRHefsOJSKnXawUCMFAiO1CwYFwK2Dm1v2OcBN4QSN%2BrxQ7UqQMGescWHJZRSW4t5uDHTjB52rCjRNdBuchyZOAUCyykoSdyQGNabzEM%2BNlOSxXcoRDZE8s6V3wFCIoreIV3L2xpScTeZHmaKsGmKuTSalMgoApbuH8yOTjzkYUL8sYKonIjWC%2F0ZxgSErIqoN9X4LbqCH4mcGeRFGGaolIkC2tA3UQyw6%2Bh2fe44FEMpoC3TzsxPBbOikqnluEfVgFTeEBzca7rm45VKrBUXWQ76P%2F35ZgmWR18YjBU02kT0o%2F%2FFje9y7b1LSy2w7QFdEPWBc00nuy%2B5loyO3QqTi%2FZD97eZX%2B7smx5uQDZOjXtpPOFBN56%2BS2udt7Y1n7RJ%2FgnZklwut5n9T8Pdm2m%2BPEg%2BDee4prDNY4MhDlICPYBst%2FCYaKmMMDoxMkGOqUBYCyu%2FMAlsBmAURpj42KQ7%2BCkz2QQvN6bFqDwb2eu0jH9NVYyP8NJuWilHX1VQllR0EAmBuKcHjYw6xlOXnL2rKO7EQrefyBlyUuKeDWgvLQtN1dkAZMFZZsfNp3HkZOnCOjToN6CgRL5JXMrKX4wfGvWaI88jpQYt%2BaZYXrk9HpeGSnoehD8xHLLUzUDjbSSfJ%2BvHhVoQuwZ%2FpLiqZ7wsVviNv1r&X-Amz-Signature=84435a247bd26c636fc0309115c5e4be96914fa8470f75f44503992366c623ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
