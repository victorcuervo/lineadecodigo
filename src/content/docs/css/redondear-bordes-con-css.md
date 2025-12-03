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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ36RHB3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICobAh3DL07%2FvD3xbuFyqj1h5%2B7osqaB2gbK6uliFHarAiBvdHbLMTum%2B9nZAiM6jK1INWW3%2BvJiQUFFJ36DCEdzsir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMwBegDX7M3kJS7MzOKtwDBSKZAbG7NQYRhlbqwGNuCqi19qGEukoKwTKHUYrQGYSzQRah5EB04OF0r%2FUyCEnIhmGSOsiwNBxWNUFdIfMW84%2F9jrtCEU%2B3SJf129%2B0zwQKNSuVRsHAPxlSjeHnP1ribg%2BoqWGZelGJwnDOUHGIRO2YdFs%2FfrZIKmYr%2F%2BAMOuWnDjLVaywNHE0Mafhwz%2Ff9mYwWG776x7JJnav3HO%2FX7avmXzwKfSqsec%2BZHffCPaukcXQq5fO9UMlXJGGi6%2FJ0KbdU09QDWmgi8531UApwavm3B5C0Yilmzx7rfk3%2BAWced5nXvjGfwq9G%2BsPHCaePM3PKrOgaf4XXU9gxA9CQPtzrB5Gbu97zIkj4Vs9gtDy%2FhfAB%2BDxvwfmOzxKcGJQ2ie%2Fa6idVWjzQx0L1NicbYKVJOSJ7RkkeIym4INR4qNnVcEeCh05p0WK5tfpWBsBiGL04NCMzl%2FN8%2FuEKtZeI42jbr4475xVhBDsvotgzL1%2BuziBy0ZvDUWcCMGLE8zfwFE4ESUit0blcrBBhpgl8b5iOECRfAbuDzDbstjwT1hmLIjGeU36LLj0bYWe66%2Ft3D3GYPCi6RPXP%2FAwSBxcAUh0Gg05KQTeH2KD3L0%2Bk0xVfyJ%2FwF1QkUgYJAEQwqPjCyQY6pgGI8brQJCYWcS00MwjeSk4cQVnwDJMy5xkj6PlXuAT37SmMqN7Ia%2Frh30YrXlcE%2F2Bsl12zakb2ViV%2BPeDprUhsle9FHp3qkQV4%2Bm19Qdh158g7nxDQJGLIv7aSNq%2FJ5QgzLybs9rqyP4u2sQmchkiLhNPMJH6PqVNPzEyrEWXbBqnPDmUgsUudVrdD6GeuHNoAhusbsx%2FY6D8iACtoB3mGRBatGC2V&X-Amz-Signature=c82721efde4b0177c880c80903a21875365415b704564e205d433933548cc37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ36RHB3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICobAh3DL07%2FvD3xbuFyqj1h5%2B7osqaB2gbK6uliFHarAiBvdHbLMTum%2B9nZAiM6jK1INWW3%2BvJiQUFFJ36DCEdzsir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMwBegDX7M3kJS7MzOKtwDBSKZAbG7NQYRhlbqwGNuCqi19qGEukoKwTKHUYrQGYSzQRah5EB04OF0r%2FUyCEnIhmGSOsiwNBxWNUFdIfMW84%2F9jrtCEU%2B3SJf129%2B0zwQKNSuVRsHAPxlSjeHnP1ribg%2BoqWGZelGJwnDOUHGIRO2YdFs%2FfrZIKmYr%2F%2BAMOuWnDjLVaywNHE0Mafhwz%2Ff9mYwWG776x7JJnav3HO%2FX7avmXzwKfSqsec%2BZHffCPaukcXQq5fO9UMlXJGGi6%2FJ0KbdU09QDWmgi8531UApwavm3B5C0Yilmzx7rfk3%2BAWced5nXvjGfwq9G%2BsPHCaePM3PKrOgaf4XXU9gxA9CQPtzrB5Gbu97zIkj4Vs9gtDy%2FhfAB%2BDxvwfmOzxKcGJQ2ie%2Fa6idVWjzQx0L1NicbYKVJOSJ7RkkeIym4INR4qNnVcEeCh05p0WK5tfpWBsBiGL04NCMzl%2FN8%2FuEKtZeI42jbr4475xVhBDsvotgzL1%2BuziBy0ZvDUWcCMGLE8zfwFE4ESUit0blcrBBhpgl8b5iOECRfAbuDzDbstjwT1hmLIjGeU36LLj0bYWe66%2Ft3D3GYPCi6RPXP%2FAwSBxcAUh0Gg05KQTeH2KD3L0%2Bk0xVfyJ%2FwF1QkUgYJAEQwqPjCyQY6pgGI8brQJCYWcS00MwjeSk4cQVnwDJMy5xkj6PlXuAT37SmMqN7Ia%2Frh30YrXlcE%2F2Bsl12zakb2ViV%2BPeDprUhsle9FHp3qkQV4%2Bm19Qdh158g7nxDQJGLIv7aSNq%2FJ5QgzLybs9rqyP4u2sQmchkiLhNPMJH6PqVNPzEyrEWXbBqnPDmUgsUudVrdD6GeuHNoAhusbsx%2FY6D8iACtoB3mGRBatGC2V&X-Amz-Signature=518e0746b77f00f6dc1dc38b3ef9ba8e4b596ccf75746db00339d9ae6a34faa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
