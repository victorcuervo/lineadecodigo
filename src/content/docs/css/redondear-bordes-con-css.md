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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GMUZXW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUclKOmXdTTlvaIXAzHSBbPaSZHVFg95AbhvfO%2Bta1DAiBWDed1uNHWhxubr7QGC1UdS4ZKVHk4cdfboqZ3M9iH8Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMImdfG5p2dS8JSMxrKtwDQ80YllJuXPFDxBndWkWhTStGRdzV4hIQc5y%2Bp9wfM5RmpOgu7Ym8cfGIt4XkUSOtOYSPJaGaEOwY%2FZMxx3RY4D%2B841E7MPEiMIHS%2B9%2F3J4LuJl7E7P7OpOl8km%2Fis62GV%2BxY1iN31tATvP47%2Fia4ZHqK2%2FCcm6HM2aRibRUmChxbgzHHlTl017NoBbExwTCxgSSPkp44wEfXE8GP9vneGRmWQgIDh9LMNRMToFOhA66YQWkd7g7qiFPNwi4toRo4VuMVv4LjSgJQ6bi8LH91oOmwV8v6ZReZLxvZQVBcqdFKW5S3ACnrJArg3UPQfvl8dNXQFAkYDjYmxmGLNq3Klweb6YOOklTbdpEBSy3bZAd%2B150ge0%2F49gcuHRD4rX2VyfYnd45tr7xsb67sS6EgCB8tKylHrhpkm88gdUEpsrWUopwP0Ip0ukmnLUQYq8Cxj2MW2Dlec7XVBx4MHxz5a91ZUMYHuK31CW86avNc2G1bBc06MyzJRYkPlxtyLqUYt46xLHpBPnp%2BhNpINIC4tnxuu9YAuLWsRD8oMm%2B1TOKvfnY1y%2FntdWGnTDOVAgOnlfMfvj50n3tO5A%2BY8x7KqVbOagxkUzfXkdPShIsoPJhAOpuqHNXbWwsFdvIw86vJyQY6pgFmcz%2BFgqQiLjrzz%2BuZbKn4LirUQZjrnpEx7beI%2F8ISjFtjwx3DP7qFF37AAxhAizVY2rY1IEbFfQemVoFS%2F7Ah0OWz5059LSZPPb%2BNmYCYeY17JuxNCalDMwdVHacmPEu6qkU2F9fiC6011NrdptuIYI5ff6cZ8jl30PYkWc%2BZxI9nJFhxlvAyoyusPW28TvYtRLMEdpOED6K8QeOXksWK2xUqGUNj&X-Amz-Signature=ee678d74d4b524ae1b1d3dc0158a9813041553dbd17ac0048e75987a8f9fd880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GMUZXW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUclKOmXdTTlvaIXAzHSBbPaSZHVFg95AbhvfO%2Bta1DAiBWDed1uNHWhxubr7QGC1UdS4ZKVHk4cdfboqZ3M9iH8Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMImdfG5p2dS8JSMxrKtwDQ80YllJuXPFDxBndWkWhTStGRdzV4hIQc5y%2Bp9wfM5RmpOgu7Ym8cfGIt4XkUSOtOYSPJaGaEOwY%2FZMxx3RY4D%2B841E7MPEiMIHS%2B9%2F3J4LuJl7E7P7OpOl8km%2Fis62GV%2BxY1iN31tATvP47%2Fia4ZHqK2%2FCcm6HM2aRibRUmChxbgzHHlTl017NoBbExwTCxgSSPkp44wEfXE8GP9vneGRmWQgIDh9LMNRMToFOhA66YQWkd7g7qiFPNwi4toRo4VuMVv4LjSgJQ6bi8LH91oOmwV8v6ZReZLxvZQVBcqdFKW5S3ACnrJArg3UPQfvl8dNXQFAkYDjYmxmGLNq3Klweb6YOOklTbdpEBSy3bZAd%2B150ge0%2F49gcuHRD4rX2VyfYnd45tr7xsb67sS6EgCB8tKylHrhpkm88gdUEpsrWUopwP0Ip0ukmnLUQYq8Cxj2MW2Dlec7XVBx4MHxz5a91ZUMYHuK31CW86avNc2G1bBc06MyzJRYkPlxtyLqUYt46xLHpBPnp%2BhNpINIC4tnxuu9YAuLWsRD8oMm%2B1TOKvfnY1y%2FntdWGnTDOVAgOnlfMfvj50n3tO5A%2BY8x7KqVbOagxkUzfXkdPShIsoPJhAOpuqHNXbWwsFdvIw86vJyQY6pgFmcz%2BFgqQiLjrzz%2BuZbKn4LirUQZjrnpEx7beI%2F8ISjFtjwx3DP7qFF37AAxhAizVY2rY1IEbFfQemVoFS%2F7Ah0OWz5059LSZPPb%2BNmYCYeY17JuxNCalDMwdVHacmPEu6qkU2F9fiC6011NrdptuIYI5ff6cZ8jl30PYkWc%2BZxI9nJFhxlvAyoyusPW28TvYtRLMEdpOED6K8QeOXksWK2xUqGUNj&X-Amz-Signature=8761ea7d6f0f01024dd40a3da605ec3b543496f7fb872671b3471df61ad8da0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
