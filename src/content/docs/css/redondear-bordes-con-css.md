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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEMZS524%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRH8RgBSHCSujUYg35zjTi7gpcvQiOmZsL3QPh8QQn4QIgbbO08Qs%2FthVtgg69pQv4xEaGI01QJ36ru8CgMezOF0cq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDP70Jcexllh8Qew5aCrcA63MHJAGtJfa54WoHMcF55syDUOwV4j%2BB3Mc2BFJ7207coEJzqcRiJDfI%2FgqANPHk1t5aUIijNug6AsTlTOMV35XfYo9XWRj%2BYVf0bM9sBwxDDSa%2BfCYSD11Coyb%2FJnauvF%2B%2BiT15OQ9We371YupvJbrhTTkoGueWVP9UFubZxohpb%2Bugq8xYNpZ5nL6sNcF9oVbkrO5uws85Am%2FUaxOSN7yD09xN1USOurnNNLWHCpjy23LJyrSSMjxHqR%2Fo%2BMwVDruUGv9%2BIOn7%2FK8yeo0qGgMMwFu8jjbKqJHSCaPtHkmXf%2BiDRTfx%2F7Mwz%2BoHaJaLtMFyPa6GaO%2FmKFdFY44Vp3LDDObZGyaJcVqL6rsr6xFuZby6FsYxujrIJRs7bFBT%2Bd18YxhqO594P%2Bvebos0NfIwX5DMrUcVZOkgLmg%2BGu8SYkE%2FVaekcTi9Q7zcBsqibd5sg%2BS%2F1JC7qBxuwhTvDjE2Z6182BsVvS4DeyfdTJ2fzFXaM8Za0j6opQbQaSm3uYDem%2BYkOveJuvdLRzeydaint5G%2Bt2El1zKBFHkiG5jdaYy%2FzKaFx7qwmnZ1r%2FLtDMGNcAcUMabo02lrEe0REdH18Waluh2ZTt24jBYnDtmM4pG97PT7CiJwuHmMIDGzckGOqUB8aVt7PydTLZCaJPM93KFibDwEtuhRjRDRzdYI%2B1VjqywNJ195mi8a6RuoHJ799zwv6dM5bE1cES%2FUXGsBy2Mrj2HsGCesmpZ7DpaqfzhJ2KeoH7I4NbMsUBILE3k9qA8wR1J6818JP1dIFz4Gre6P7uXYVQ5snuRWQwFBPEC7zzIbt8%2FAkc8GhnBvwk0989ufcbqLhWcc6OMjkSLHm%2F1%2B%2BZ0cib6&X-Amz-Signature=9bbb9be1b328b7a5f8d61cad8f3e1a80fb93763500612e3d3cea710619804d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEMZS524%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRH8RgBSHCSujUYg35zjTi7gpcvQiOmZsL3QPh8QQn4QIgbbO08Qs%2FthVtgg69pQv4xEaGI01QJ36ru8CgMezOF0cq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDP70Jcexllh8Qew5aCrcA63MHJAGtJfa54WoHMcF55syDUOwV4j%2BB3Mc2BFJ7207coEJzqcRiJDfI%2FgqANPHk1t5aUIijNug6AsTlTOMV35XfYo9XWRj%2BYVf0bM9sBwxDDSa%2BfCYSD11Coyb%2FJnauvF%2B%2BiT15OQ9We371YupvJbrhTTkoGueWVP9UFubZxohpb%2Bugq8xYNpZ5nL6sNcF9oVbkrO5uws85Am%2FUaxOSN7yD09xN1USOurnNNLWHCpjy23LJyrSSMjxHqR%2Fo%2BMwVDruUGv9%2BIOn7%2FK8yeo0qGgMMwFu8jjbKqJHSCaPtHkmXf%2BiDRTfx%2F7Mwz%2BoHaJaLtMFyPa6GaO%2FmKFdFY44Vp3LDDObZGyaJcVqL6rsr6xFuZby6FsYxujrIJRs7bFBT%2Bd18YxhqO594P%2Bvebos0NfIwX5DMrUcVZOkgLmg%2BGu8SYkE%2FVaekcTi9Q7zcBsqibd5sg%2BS%2F1JC7qBxuwhTvDjE2Z6182BsVvS4DeyfdTJ2fzFXaM8Za0j6opQbQaSm3uYDem%2BYkOveJuvdLRzeydaint5G%2Bt2El1zKBFHkiG5jdaYy%2FzKaFx7qwmnZ1r%2FLtDMGNcAcUMabo02lrEe0REdH18Waluh2ZTt24jBYnDtmM4pG97PT7CiJwuHmMIDGzckGOqUB8aVt7PydTLZCaJPM93KFibDwEtuhRjRDRzdYI%2B1VjqywNJ195mi8a6RuoHJ799zwv6dM5bE1cES%2FUXGsBy2Mrj2HsGCesmpZ7DpaqfzhJ2KeoH7I4NbMsUBILE3k9qA8wR1J6818JP1dIFz4Gre6P7uXYVQ5snuRWQwFBPEC7zzIbt8%2FAkc8GhnBvwk0989ufcbqLhWcc6OMjkSLHm%2F1%2B%2BZ0cib6&X-Amz-Signature=41d3e18b994c0a35aebcaa5ade9ac6d81f667bb015a08eb0881de5a77f0c0406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
