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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QS3DISO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCDQYVIkOn2aI9rE%2Fq%2F33OEb6oDtIr0JUqwrSCUfeySAiEAjR%2FLGyXvIo73aLN9H5X1swNGOKRgs3CXFhF86VMoVnUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFiSrnzRD%2BjJJ0YTircA%2Bl89GvxpOlQIGRN02sTUvyORPGAjU5InpEpYgptSjHuNPGVqMAC06FmHYKH9%2BtQ2mKzkD3Nb8bq9pHU4ggM9zB3RWmW2u3p0mKNk%2F0x20T4oys9cXj1XBSRJ4Xlb7ILFmiKjEkAa%2FGQ%2B9cK6ATnNAzzEAvYoMZ%2FpKcw5B5eoYhLkWFId9cUHJ1bhN8EpSLX1x1iDWpr5VzgqNkMbZ6JTtRXx5qty6egwxY1pq723Oxz6zR3Ip44rylFaf04dk0p5PoRyKsVvEOqdHU5Z6gfbYQZISlI2xDKUN40pMeiGUA59d6NWZvg5%2FU3LasAqOj%2FG2k4oiPt7a8E%2BxlsNksr%2F3E2%2BZzDgFdwfoOMXNuZgzW350FiH45d%2FqGr%2B%2FlcwL7iZu9aoAsCHY9wzLBrbdhyQBW0ov0QcMmQE57TyOOfcEDgvm9GuSRRAgSOIj4Y7hduct1iki428d82Toq0jncfVxc7lxHEMeuXrJVdUeir6FTZYVPPw41vvxy7MGqIfWYhTMpTJrJ7pjpZucyPCr5vosRfjN8GmGiUzb%2Bu7p15T5l%2BX8IP7gZD%2B6%2B0ZL2I1nVT1Pc3kn1wiJV19JJj4ub9Q9i%2FmbeIe5%2FugUdkp3MQOjXBRE0Xa3sOsHfikDbhMLvH18kGOqUB3gC3kbvzC7oP8OmIug0zBZMbGG%2BHbkHCqGhSbT70ZjC1wqVv6kc793DYtVBa5PgYFeBUjMk9LLezD47itp4QBaIn3UuIAulLMQSq37cJgymFnNw8TW38DXzRRvXWzmccrI31ik%2BMDXtHm93PhI58LbFbL8tRscPY0Fn0T1i%2BoeRG6z9kVGGhlyYeRluoya0QG94KDTD3Y2dzifWTY9etk8a3n3Wq&X-Amz-Signature=b76f0943bce951676ae543b25f1474e72fe243777eea8af02001b0e218167e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QS3DISO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCDQYVIkOn2aI9rE%2Fq%2F33OEb6oDtIr0JUqwrSCUfeySAiEAjR%2FLGyXvIo73aLN9H5X1swNGOKRgs3CXFhF86VMoVnUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFiSrnzRD%2BjJJ0YTircA%2Bl89GvxpOlQIGRN02sTUvyORPGAjU5InpEpYgptSjHuNPGVqMAC06FmHYKH9%2BtQ2mKzkD3Nb8bq9pHU4ggM9zB3RWmW2u3p0mKNk%2F0x20T4oys9cXj1XBSRJ4Xlb7ILFmiKjEkAa%2FGQ%2B9cK6ATnNAzzEAvYoMZ%2FpKcw5B5eoYhLkWFId9cUHJ1bhN8EpSLX1x1iDWpr5VzgqNkMbZ6JTtRXx5qty6egwxY1pq723Oxz6zR3Ip44rylFaf04dk0p5PoRyKsVvEOqdHU5Z6gfbYQZISlI2xDKUN40pMeiGUA59d6NWZvg5%2FU3LasAqOj%2FG2k4oiPt7a8E%2BxlsNksr%2F3E2%2BZzDgFdwfoOMXNuZgzW350FiH45d%2FqGr%2B%2FlcwL7iZu9aoAsCHY9wzLBrbdhyQBW0ov0QcMmQE57TyOOfcEDgvm9GuSRRAgSOIj4Y7hduct1iki428d82Toq0jncfVxc7lxHEMeuXrJVdUeir6FTZYVPPw41vvxy7MGqIfWYhTMpTJrJ7pjpZucyPCr5vosRfjN8GmGiUzb%2Bu7p15T5l%2BX8IP7gZD%2B6%2B0ZL2I1nVT1Pc3kn1wiJV19JJj4ub9Q9i%2FmbeIe5%2FugUdkp3MQOjXBRE0Xa3sOsHfikDbhMLvH18kGOqUB3gC3kbvzC7oP8OmIug0zBZMbGG%2BHbkHCqGhSbT70ZjC1wqVv6kc793DYtVBa5PgYFeBUjMk9LLezD47itp4QBaIn3UuIAulLMQSq37cJgymFnNw8TW38DXzRRvXWzmccrI31ik%2BMDXtHm93PhI58LbFbL8tRscPY0Fn0T1i%2BoeRG6z9kVGGhlyYeRluoya0QG94KDTD3Y2dzifWTY9etk8a3n3Wq&X-Amz-Signature=95b931d909522f6843d4a29dde39e3b5b432651069631615b8edfd9a07e26300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
