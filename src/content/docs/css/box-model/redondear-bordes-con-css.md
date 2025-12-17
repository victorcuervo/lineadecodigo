---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDD4WLYS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc1%2F9dRU6t32d4KjOFlT1nwdqS3vF73o9RNkjoEpWsIAiA3lV%2BINl526UP9VlgIGuMzvki5%2FjGInn22OZLLeLSVeiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHukTme8ZWMh%2BUAffKtwD5rQKTJDcy1mRI704yGjeWVCYqHgZnyLLq957ayCMzePXfPrYjFGiniO721Q%2BupkAFyjB9ND14SmI0rWZVPZUaC07p1sS3bIoXH7csNx9TWmPpyBHxlzk7IqaVyYV4UK4ilaiQnS0wqXU6Q2zGz4XIKzKX6%2FnNCK5ezVBsuj7y8535dp%2BJJBsN1zh4kQueE93arJgeM2gbQ9cBpieYKLGhJlR374keLWd1BhWRZ0%2BPzHZnm0MuH0OlmDEzLb1hYtvF2y%2BWoJyNLrpHMXPpw%2BOXP%2BlV8VinQLXR8IPuvchhajw0ZxKygyOC3pkrryX0%2FdZKghEtIpJtFlBlVMMr7kMxSx5UDx342PZRmn1UsHPOTD7l2dYS%2BFDxb6VTTLlNQUoTTLZIYfW%2BrQ1SnZRuEqLS7l3sSb0a7oJ6VS9SoFMrGceFJEhMfy9GdYfJPluN9%2Fjs%2FeWuHx8J5WMxfQMURmXq3b27EnrTRlHNs0EH0bNi5fplOXr5FAojCLCAe%2Bfc13F7E%2BX%2Fdj2C68BawqS9sDSZT%2BykNuFQwr5yggUeXssCCWcTZqp1RWJgLDPXwQyTWll%2FVyPSPTnGlK%2FhJOf3O1ETOiWsdRIRTaHcrQSaEJ1jUUQEjHXICq%2FkwGQeVAwoJ%2BLygY6pgHRpjVoy6vBGyqfS%2BjX3t1Qhf8W6jit6Hcxw5aw0WGYziW%2FjFGx9hqpCG%2BUJcvSjq0YMmyFol00hkI3%2BgHylnI7kcvR%2BNolsgo1PUcOWdLijNEET6saIizdeXxpxelYnNS%2FCsypfXfYGpRHrEYwQtQt%2BeUNxvKmkFZDmt86NCa9BcfUBj0VFMWIntiE3ArD6HDHlodahM4mBd1iRPSQKhzrGqaQuAWn&X-Amz-Signature=d57e07f4917275b9d3669155c12d1ebbff6c91f90008ea3f553c3bf2f4e16ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDD4WLYS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc1%2F9dRU6t32d4KjOFlT1nwdqS3vF73o9RNkjoEpWsIAiA3lV%2BINl526UP9VlgIGuMzvki5%2FjGInn22OZLLeLSVeiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHukTme8ZWMh%2BUAffKtwD5rQKTJDcy1mRI704yGjeWVCYqHgZnyLLq957ayCMzePXfPrYjFGiniO721Q%2BupkAFyjB9ND14SmI0rWZVPZUaC07p1sS3bIoXH7csNx9TWmPpyBHxlzk7IqaVyYV4UK4ilaiQnS0wqXU6Q2zGz4XIKzKX6%2FnNCK5ezVBsuj7y8535dp%2BJJBsN1zh4kQueE93arJgeM2gbQ9cBpieYKLGhJlR374keLWd1BhWRZ0%2BPzHZnm0MuH0OlmDEzLb1hYtvF2y%2BWoJyNLrpHMXPpw%2BOXP%2BlV8VinQLXR8IPuvchhajw0ZxKygyOC3pkrryX0%2FdZKghEtIpJtFlBlVMMr7kMxSx5UDx342PZRmn1UsHPOTD7l2dYS%2BFDxb6VTTLlNQUoTTLZIYfW%2BrQ1SnZRuEqLS7l3sSb0a7oJ6VS9SoFMrGceFJEhMfy9GdYfJPluN9%2Fjs%2FeWuHx8J5WMxfQMURmXq3b27EnrTRlHNs0EH0bNi5fplOXr5FAojCLCAe%2Bfc13F7E%2BX%2Fdj2C68BawqS9sDSZT%2BykNuFQwr5yggUeXssCCWcTZqp1RWJgLDPXwQyTWll%2FVyPSPTnGlK%2FhJOf3O1ETOiWsdRIRTaHcrQSaEJ1jUUQEjHXICq%2FkwGQeVAwoJ%2BLygY6pgHRpjVoy6vBGyqfS%2BjX3t1Qhf8W6jit6Hcxw5aw0WGYziW%2FjFGx9hqpCG%2BUJcvSjq0YMmyFol00hkI3%2BgHylnI7kcvR%2BNolsgo1PUcOWdLijNEET6saIizdeXxpxelYnNS%2FCsypfXfYGpRHrEYwQtQt%2BeUNxvKmkFZDmt86NCa9BcfUBj0VFMWIntiE3ArD6HDHlodahM4mBd1iRPSQKhzrGqaQuAWn&X-Amz-Signature=d4a16e1c3ef06e4ecbfc001bb95330e091425218a022d93988c039dabe436185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
