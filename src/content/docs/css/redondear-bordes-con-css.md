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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGHNC3ZJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2F8SrmWs0dj9ulSnrDuiXM3Puf%2Fr9TWsNWcBdOCJQmAAiAYElPCg21MmB%2B%2Bl3XVj2XPUaTcflT28pFaaWkvKjQ9WCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDNBFdK1UT7VeJbVEKtwDP%2FNuhEaRA79jE3JVZKrD9I9fFfWGiAH4zK5u20PpZM02OF3Fyi41Z0MpIc27MyuR8DoIAEPmPteqtkNwcdqVcyKGU819ugsMxOQGUFB4mFiVpSsD32aeR1%2BxIbkd8FTree96a%2B9S8nA6ufeMiqq5GZw7prOzPmkLaVGZJqXumPnC234LcgMUMa2DVUIFpKqJao6WH2jYc2xmj08ltszT7UCl87MHQPXv6Y%2BpIGF7OMeTBZQVdqsnYLnWSuGu9K%2Bbr6jlIv%2B2wKZjpVPwIMU19u%2BKknAOreK5Pcmj52R0ygRO5ydUgg8E6HC1U7as1%2BOPcGbn%2B3ABreal2qWQc4TAOsD31SBhU9KkUGvcA4VgrWyUjNClMssR%2Bc%2B2o%2FozwKN6YNPsVjh6TBaeFH%2BtQdCou7mUGvRztUS1CLfwks%2FOgyBUVeepCwjA73aknWF80kytsruxNQCGjbLsK0lSJ9jxVlsQ7%2FNh1TH4adbG7ZuVID3kjeUnYNbOnFyMmoPSsTqhIGQLydXEiYpMa90fnSiU%2FgE3s5VeaiFTPQNWyA%2FT55BfVH846QMSa%2BRDLogc93yw47sE%2FWyd0fC6XBnroTYy9k1oB5vSj1aaSU6cLw0aBBmdys0P9YIW1RMuF8YwxZ7UyQY6pgHKvwZ%2BP%2F15WwvS%2Fg3RtrjTIf6rwJwUTvM81dKcm8RvlLJpJu5Y5Upk7cyxEQ0jlQHHX5ilRRMA3wblW%2B%2By6o%2FHmYrJk6nVu2XyYQ%2BHt9ydkh36yH9G8b7ylTpQey4ZDjOXCz6YShR%2BwfIneKNlIdX8U1U3VYJ%2BvGPCklWmEFwOX%2Bk0vvENGz8TZZxA3QtblSIJol5eJkBa7xgvlLULdN43DfK%2BqChM&X-Amz-Signature=a934460db9e94197731fdac8957c32a0ff33a179bfef16e09e7bca23df0ba0e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGHNC3ZJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2F8SrmWs0dj9ulSnrDuiXM3Puf%2Fr9TWsNWcBdOCJQmAAiAYElPCg21MmB%2B%2Bl3XVj2XPUaTcflT28pFaaWkvKjQ9WCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDNBFdK1UT7VeJbVEKtwDP%2FNuhEaRA79jE3JVZKrD9I9fFfWGiAH4zK5u20PpZM02OF3Fyi41Z0MpIc27MyuR8DoIAEPmPteqtkNwcdqVcyKGU819ugsMxOQGUFB4mFiVpSsD32aeR1%2BxIbkd8FTree96a%2B9S8nA6ufeMiqq5GZw7prOzPmkLaVGZJqXumPnC234LcgMUMa2DVUIFpKqJao6WH2jYc2xmj08ltszT7UCl87MHQPXv6Y%2BpIGF7OMeTBZQVdqsnYLnWSuGu9K%2Bbr6jlIv%2B2wKZjpVPwIMU19u%2BKknAOreK5Pcmj52R0ygRO5ydUgg8E6HC1U7as1%2BOPcGbn%2B3ABreal2qWQc4TAOsD31SBhU9KkUGvcA4VgrWyUjNClMssR%2Bc%2B2o%2FozwKN6YNPsVjh6TBaeFH%2BtQdCou7mUGvRztUS1CLfwks%2FOgyBUVeepCwjA73aknWF80kytsruxNQCGjbLsK0lSJ9jxVlsQ7%2FNh1TH4adbG7ZuVID3kjeUnYNbOnFyMmoPSsTqhIGQLydXEiYpMa90fnSiU%2FgE3s5VeaiFTPQNWyA%2FT55BfVH846QMSa%2BRDLogc93yw47sE%2FWyd0fC6XBnroTYy9k1oB5vSj1aaSU6cLw0aBBmdys0P9YIW1RMuF8YwxZ7UyQY6pgHKvwZ%2BP%2F15WwvS%2Fg3RtrjTIf6rwJwUTvM81dKcm8RvlLJpJu5Y5Upk7cyxEQ0jlQHHX5ilRRMA3wblW%2B%2By6o%2FHmYrJk6nVu2XyYQ%2BHt9ydkh36yH9G8b7ylTpQey4ZDjOXCz6YShR%2BwfIneKNlIdX8U1U3VYJ%2BvGPCklWmEFwOX%2Bk0vvENGz8TZZxA3QtblSIJol5eJkBa7xgvlLULdN43DfK%2BqChM&X-Amz-Signature=c7961f52f5e08c48128b638b4009e63e14b3d11733e3fd86e6dd73d9cd281525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
