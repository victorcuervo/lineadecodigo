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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOMQ6GC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCx6npOqwHuJwMX6m9m%2BoccLca337mpP4uWdPs3e3SHAiANY2hBHavJS1JQWgzumg0p5xMqylnAD17Ncw%2FgC%2FrkySr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMhPUQx0QN1Zypq9w4KtwDGRv3WnuMEg9duB4SjB4SheLPlwoEgRfqvwX67LeA1M%2By5KgsaJqbwItS%2B57TvsDPSm1yd7WcB2HDFWb6yFmJeRbeRGvTdHNSk8WZb7XAhUaCQXE%2ByOs06VA3Nz9RHaYFpdkgrKNqKwdwpZpqqgzERGEqPbxhBRon1Vj0Wv3COClrV3y9BgwdrWVVOzphsGGC5yIwZuyGah59U4Whf2EgwvrkXsp5VCkY8f6VepIqtDnjO054z1pMA6CZvY0ia%2FFUraPCHA8ouZDbjBpTQvBwL18eSO8SN1lhIm2uz57B4ddFEjVN65ZyLiQRCM8rHJtOAVlQPp87zXhvNmWaSpYRk5qWCy%2FCspGQjCSAobkX%2FRGHMu%2F%2BRp7va%2FfF8adhP8VgKPXfkWhOxU8fgpKj8p5yQrfYnUJ%2BguFf144%2B8Gr%2BnVBY6VJmpQagPqsUuAkqFdPQnRvyQkGCbOilwDRcXtcrPzJckYvclFm6AT2a8tKwz2xs%2BpwV%2FeY7Sp9sJyLm4jMrMeY8HlB7usVRU7D3AXFI2SV0vkr91MHv1%2FDx6XYpSIcaGN7ejaT1djn9VJuhP43K%2FWXyeX797IzkWLJm0%2Fz71UaEd8S6ZSehatrZSFKI4tYX3nu3Ff7BzD710dUw3pWIygY6pgElKPAEk4zTaynp8SZqfnxw6UgJpri5HYHM2FZdWx1g1jYuHKxU9IFtelcZp0ZTnUtzruFVeYI5zoheTEwg94%2FtiE%2FqMPycMFqUpp0aJ2P4ztVm%2FR0DGHa4%2FFO3J%2BKKpAUs%2BiL7X78RetmG6wkLWnxi7mOh6L73NJcqCrS7BUjFtPjFxboMrLkPJgL8VG3yWOI4jYo6oBnbkIonWzNATIO%2FTeRbIYGq&X-Amz-Signature=47670309b90b5d028d8c42551fb6190a8e48b7c52819a907ad593a44f27151d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOMQ6GC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCx6npOqwHuJwMX6m9m%2BoccLca337mpP4uWdPs3e3SHAiANY2hBHavJS1JQWgzumg0p5xMqylnAD17Ncw%2FgC%2FrkySr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMhPUQx0QN1Zypq9w4KtwDGRv3WnuMEg9duB4SjB4SheLPlwoEgRfqvwX67LeA1M%2By5KgsaJqbwItS%2B57TvsDPSm1yd7WcB2HDFWb6yFmJeRbeRGvTdHNSk8WZb7XAhUaCQXE%2ByOs06VA3Nz9RHaYFpdkgrKNqKwdwpZpqqgzERGEqPbxhBRon1Vj0Wv3COClrV3y9BgwdrWVVOzphsGGC5yIwZuyGah59U4Whf2EgwvrkXsp5VCkY8f6VepIqtDnjO054z1pMA6CZvY0ia%2FFUraPCHA8ouZDbjBpTQvBwL18eSO8SN1lhIm2uz57B4ddFEjVN65ZyLiQRCM8rHJtOAVlQPp87zXhvNmWaSpYRk5qWCy%2FCspGQjCSAobkX%2FRGHMu%2F%2BRp7va%2FfF8adhP8VgKPXfkWhOxU8fgpKj8p5yQrfYnUJ%2BguFf144%2B8Gr%2BnVBY6VJmpQagPqsUuAkqFdPQnRvyQkGCbOilwDRcXtcrPzJckYvclFm6AT2a8tKwz2xs%2BpwV%2FeY7Sp9sJyLm4jMrMeY8HlB7usVRU7D3AXFI2SV0vkr91MHv1%2FDx6XYpSIcaGN7ejaT1djn9VJuhP43K%2FWXyeX797IzkWLJm0%2Fz71UaEd8S6ZSehatrZSFKI4tYX3nu3Ff7BzD710dUw3pWIygY6pgElKPAEk4zTaynp8SZqfnxw6UgJpri5HYHM2FZdWx1g1jYuHKxU9IFtelcZp0ZTnUtzruFVeYI5zoheTEwg94%2FtiE%2FqMPycMFqUpp0aJ2P4ztVm%2FR0DGHa4%2FFO3J%2BKKpAUs%2BiL7X78RetmG6wkLWnxi7mOh6L73NJcqCrS7BUjFtPjFxboMrLkPJgL8VG3yWOI4jYo6oBnbkIonWzNATIO%2FTeRbIYGq&X-Amz-Signature=4e36496c945b54e814a1182fc81ec6696c1412e8f5d904e41b1f90e14137436f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
