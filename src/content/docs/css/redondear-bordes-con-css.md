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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNP7GOZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDuq%2FhVR%2BN0SyXa4nHk7WT3xWYYbskjIq6Xq8d5F5vdygIgZu0Bg8nzga6m2rTQTFdYzRMZ9D7XZD3TPnRMtMuTdR4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKNFdkgcYgzSvRlgsSrcA3ROFWhAP23yTKKm4WzDEERYdb4qb503qbfbQ3rrYhIiOFe%2BeB1zVRKLoG9dXE8ow9XsRNXKAmVsaj2pajsuMtCxXO9VSKuEFFkPxIYq1hP6euuhGV8KV%2FlygAAGxj0VzZ2sOeAOLDBZZwmF985ehj%2BmQKi6YSwyRFsimQdDBNrRKH2JdbpI7TQZ2ohkF9Fwa35ldi1pdgZ%2Bn1tHVhg%2BYih8MNR9oOWbP7cds7uqLyfaDiMUY5OsI1eVelaDe%2BuZ1Ep%2F9%2Bey1CPoiP67ancUgebc9YUJfoEo6Sl3Ln0Qz%2B05G3iJhEf5MhgFOKTN0C%2F14hxLkBdln%2BzdY7IZKkXQHTJZVhP%2FvwAE%2Bs3n1tx0lgvPTzQ5mJ8mdWMUPOiSFReJWExSSDyFTwrudeeUPf2%2FMMWpc9zlk%2B7NYkMHubNbvfmo5y3p%2Fo69zo3A%2B4MvSd6HaiGOWPGi0VjCze3YnzqrhSevAVneRYq6ubk1HWc10ZVGARC8asXa8Df%2Bh%2BzCGTb8lP99nVxfBCFfD0l5ymJmlo%2F%2F%2BLPZI%2F3NiXbAy4vU7BnR8sGutlxF1UXGYWAjDgUjEoJmiOI5BMQAkKIml%2B8FI359V8DMhRTBAAzww3hW6evPGhCBz5Onvgbt%2BV6PMPbKxMkGOqUBE9ocLCSfOyKUq6mRRIWHEL%2FM1O%2B1K7UL5frciPdJi2NqmxzOfrmilW8zhUeSpNUxanQtl0UsJuciZe9xmn2FutbESclICbZZxP%2BVc%2Fau%2FBEpDvNA59dDav0jAIMA5XJhTnqi09nUic060L3ngv7vwLOZHDJK6gqXK66fkIKNRrYQpuK2R1TVXXzq9%2FFuaefBijOHBC8GoEycy4S6%2FfvOJU0Y67B4&X-Amz-Signature=dc4ab2e8edd59e5b401816d79fbb77cbf7d070749261e91e2873e79618684b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNP7GOZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDuq%2FhVR%2BN0SyXa4nHk7WT3xWYYbskjIq6Xq8d5F5vdygIgZu0Bg8nzga6m2rTQTFdYzRMZ9D7XZD3TPnRMtMuTdR4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKNFdkgcYgzSvRlgsSrcA3ROFWhAP23yTKKm4WzDEERYdb4qb503qbfbQ3rrYhIiOFe%2BeB1zVRKLoG9dXE8ow9XsRNXKAmVsaj2pajsuMtCxXO9VSKuEFFkPxIYq1hP6euuhGV8KV%2FlygAAGxj0VzZ2sOeAOLDBZZwmF985ehj%2BmQKi6YSwyRFsimQdDBNrRKH2JdbpI7TQZ2ohkF9Fwa35ldi1pdgZ%2Bn1tHVhg%2BYih8MNR9oOWbP7cds7uqLyfaDiMUY5OsI1eVelaDe%2BuZ1Ep%2F9%2Bey1CPoiP67ancUgebc9YUJfoEo6Sl3Ln0Qz%2B05G3iJhEf5MhgFOKTN0C%2F14hxLkBdln%2BzdY7IZKkXQHTJZVhP%2FvwAE%2Bs3n1tx0lgvPTzQ5mJ8mdWMUPOiSFReJWExSSDyFTwrudeeUPf2%2FMMWpc9zlk%2B7NYkMHubNbvfmo5y3p%2Fo69zo3A%2B4MvSd6HaiGOWPGi0VjCze3YnzqrhSevAVneRYq6ubk1HWc10ZVGARC8asXa8Df%2Bh%2BzCGTb8lP99nVxfBCFfD0l5ymJmlo%2F%2F%2BLPZI%2F3NiXbAy4vU7BnR8sGutlxF1UXGYWAjDgUjEoJmiOI5BMQAkKIml%2B8FI359V8DMhRTBAAzww3hW6evPGhCBz5Onvgbt%2BV6PMPbKxMkGOqUBE9ocLCSfOyKUq6mRRIWHEL%2FM1O%2B1K7UL5frciPdJi2NqmxzOfrmilW8zhUeSpNUxanQtl0UsJuciZe9xmn2FutbESclICbZZxP%2BVc%2Fau%2FBEpDvNA59dDav0jAIMA5XJhTnqi09nUic060L3ngv7vwLOZHDJK6gqXK66fkIKNRrYQpuK2R1TVXXzq9%2FFuaefBijOHBC8GoEycy4S6%2FfvOJU0Y67B4&X-Amz-Signature=0a598ca17c0f9482c3a55cc79ca4dc45b4e023af9b4a467c348e5a41a6abda57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
