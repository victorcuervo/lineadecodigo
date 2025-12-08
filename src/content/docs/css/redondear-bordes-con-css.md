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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HK5JV57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmisiVhreca0PltbjOe2I5ow2Hm5tAibCqwHYDG5wVnAiEAgf5IJgpEk0q3ODQZ0qkOkY%2BeQXKe0eKAiMzgNcbGcM0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1sDrJKJRY8JWatSCrcA%2FTpe2o6D35cHRDeaiHGe0p%2B7BLeBpIEYGYta%2BoiDxGRfRqKKGkzsXlJlkpZHpslH3%2FT%2FMD8nyR%2BcLIx0EVoCK6Nm0Mx7SEllnnL9fsAeIGLoy0JuDGr8I8WtK45AbOFGcAMwwrdlZQtA82hVh5wDNS0UrHykM0iAZ40vITgolN3gNGQnNM%2BnkBy3vN5c06jksWo4BgsJJQVHoDUQVOjYHVfZfDJGTSuSfEru8ZSMkUdyXU%2BRKlZYbwf2LGg7zXMk0dgDvWJJ1Z9VasoghuRjMKDkUb%2FgtKPdCIciS33DEYxZIQUJa82GBYx2yVoIiRPI%2FxAWpkAb4TU%2Fjp%2BWMDdgMrYDTEZiQhcBzEzrVkfjRq%2Fbst3uTtlUvSf43N4qekfmUPUJRWS6s%2Bm%2BUFfCg0t2BP4FLyGCCY2maQb9Wl%2FUNiUiUAPdU1tpjMcKqV09jaFAGMSloQ2qJ5GGLlScsnh4RzZV%2FJuvTnlMp0gVfIAi5%2B4NfnPVlDRYhGLXrMvmewc8wGwpohp2%2FgWhMFNWeBUoT%2BIEXNr7V6C2rat18uXMJt5CkceJVd%2B2ATCYDPeuhcJtYiyUQhItt3s3OOf5J2k%2B8OIQjkBJ5tblMkmpJVtKuILLp7I6JnJBckGXXYmMKPl28kGOqUBRYCeojWSiDIsba9CRsIa7t1evPteA90cwpgHA%2Fha4%2FwsHpfijpXpQn%2FLScRu1Px5fuVtQ3S19o1flnZuhL5yKo87riEhKC1y6eLAkYG07lNEYq8n95%2FC9b2AB7MED08Wqz7LzQM%2B3Su6d7NfSzQMPIMorPJNZ9y3pUyy4TYYvxjrC1gkU991HR7uULu%2Bt0Fthogxd1AfGd5OXg6qFZrG2N%2FtldV3&X-Amz-Signature=56d0696568b0d82953c3d1f553ecbcd747e133e07fca3a0a1d83151096c36778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HK5JV57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmisiVhreca0PltbjOe2I5ow2Hm5tAibCqwHYDG5wVnAiEAgf5IJgpEk0q3ODQZ0qkOkY%2BeQXKe0eKAiMzgNcbGcM0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1sDrJKJRY8JWatSCrcA%2FTpe2o6D35cHRDeaiHGe0p%2B7BLeBpIEYGYta%2BoiDxGRfRqKKGkzsXlJlkpZHpslH3%2FT%2FMD8nyR%2BcLIx0EVoCK6Nm0Mx7SEllnnL9fsAeIGLoy0JuDGr8I8WtK45AbOFGcAMwwrdlZQtA82hVh5wDNS0UrHykM0iAZ40vITgolN3gNGQnNM%2BnkBy3vN5c06jksWo4BgsJJQVHoDUQVOjYHVfZfDJGTSuSfEru8ZSMkUdyXU%2BRKlZYbwf2LGg7zXMk0dgDvWJJ1Z9VasoghuRjMKDkUb%2FgtKPdCIciS33DEYxZIQUJa82GBYx2yVoIiRPI%2FxAWpkAb4TU%2Fjp%2BWMDdgMrYDTEZiQhcBzEzrVkfjRq%2Fbst3uTtlUvSf43N4qekfmUPUJRWS6s%2Bm%2BUFfCg0t2BP4FLyGCCY2maQb9Wl%2FUNiUiUAPdU1tpjMcKqV09jaFAGMSloQ2qJ5GGLlScsnh4RzZV%2FJuvTnlMp0gVfIAi5%2B4NfnPVlDRYhGLXrMvmewc8wGwpohp2%2FgWhMFNWeBUoT%2BIEXNr7V6C2rat18uXMJt5CkceJVd%2B2ATCYDPeuhcJtYiyUQhItt3s3OOf5J2k%2B8OIQjkBJ5tblMkmpJVtKuILLp7I6JnJBckGXXYmMKPl28kGOqUBRYCeojWSiDIsba9CRsIa7t1evPteA90cwpgHA%2Fha4%2FwsHpfijpXpQn%2FLScRu1Px5fuVtQ3S19o1flnZuhL5yKo87riEhKC1y6eLAkYG07lNEYq8n95%2FC9b2AB7MED08Wqz7LzQM%2B3Su6d7NfSzQMPIMorPJNZ9y3pUyy4TYYvxjrC1gkU991HR7uULu%2Bt0Fthogxd1AfGd5OXg6qFZrG2N%2FtldV3&X-Amz-Signature=c0054b0f75c1bc9535cf34ccb95089918dd80b2add816f332cef6112f16b89be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
