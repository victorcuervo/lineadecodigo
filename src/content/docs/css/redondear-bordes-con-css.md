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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAH5LRK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGbzwA7LR2nE7NwpV7UdcKFikG%2BZF4PCfwpCgpgvgt7QIhAJCNxW5kRMbe05RbBw8G09i0k41a6gDJLMAipC9ZCUEHKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwBuQUPuD14%2Fu%2FchQq3AMPAe9LwgLH14JzelELN9xm5qaXOS%2B3601%2BwTtAj9xOiJF1grc3S43Yqy9soG2s7rXYDJtv7SIBsfVs1Rf6QDRaOp6kfXt2hTj2HxN2vDCU8E7qinMAeylRUaZ0EqfI%2FyEAPI6nur1hO47vkFcCOazbcybXPhZVxmcdvdba%2BZSj9VmO86YopwCwWlViVRw8%2FqFChWxTX%2B0AqXATw2xYPAiqapXeqIs7seAZMi72b%2FYKDoTKejBsPJIrDkKcw2tKw2EpQYney583BoIDerbomBuU8feRl01wvPU9W%2BAxAGzJLo2OFQjI8BzVmudlglRHH7FxSIQdlYoGzWGrw5mxCSZP%2Bg9sS8mWQEpC6%2BittRbEmXrAqNqiLfLEB%2FdUwOa3iyDV3I5BjycaAHtoUmMXjgS3JM%2FU81e8ns4fSpoBoUQ6oWdJTat4QPPd3oGFHNAOO60Wi73AVzbDaq51yACUeHssDEtOVBdislNPhCXrVosBz6BRgHsOZYSZACcgWiRGf%2F7PtmW%2BN%2B4bHHS%2BYwvVbGIT4F%2BnXJPnyrsKXoIRXA2Md4IVeg%2B0IapTZAielXPxGlIYl4t1n4TRXzOWimIu9y9zg%2BKtwKwCVnCc1TRnOe%2BAt9t2%2B8nuiKHc1nt6UjCYh9zJBjqkAX2SlFuL4zyzIYyrXbtGpSj%2FQ%2FM1HMJwNCLYx38%2FS1wB3WXDM4uc%2B365KQMIWn4wV48oTaKwdpNovex39aO5H3nQxh5Co6FOpnw5aSJeRJG7ANXWJMfmVDU3IojoeFGYgWxNulHZWLBytCP7P8y2JRlYtBlLrS%2FvYg6tDggppSrv0ZDgkGj%2FrKlqBfc9jE5adTgnNbeTwaMhjizvHMTRDfy0Lc%2B2&X-Amz-Signature=cfe574fa1bf54c5b5ae65b531d399ad5760f59e88eb4d5f2825af6cffe75de52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAH5LRK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGbzwA7LR2nE7NwpV7UdcKFikG%2BZF4PCfwpCgpgvgt7QIhAJCNxW5kRMbe05RbBw8G09i0k41a6gDJLMAipC9ZCUEHKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwBuQUPuD14%2Fu%2FchQq3AMPAe9LwgLH14JzelELN9xm5qaXOS%2B3601%2BwTtAj9xOiJF1grc3S43Yqy9soG2s7rXYDJtv7SIBsfVs1Rf6QDRaOp6kfXt2hTj2HxN2vDCU8E7qinMAeylRUaZ0EqfI%2FyEAPI6nur1hO47vkFcCOazbcybXPhZVxmcdvdba%2BZSj9VmO86YopwCwWlViVRw8%2FqFChWxTX%2B0AqXATw2xYPAiqapXeqIs7seAZMi72b%2FYKDoTKejBsPJIrDkKcw2tKw2EpQYney583BoIDerbomBuU8feRl01wvPU9W%2BAxAGzJLo2OFQjI8BzVmudlglRHH7FxSIQdlYoGzWGrw5mxCSZP%2Bg9sS8mWQEpC6%2BittRbEmXrAqNqiLfLEB%2FdUwOa3iyDV3I5BjycaAHtoUmMXjgS3JM%2FU81e8ns4fSpoBoUQ6oWdJTat4QPPd3oGFHNAOO60Wi73AVzbDaq51yACUeHssDEtOVBdislNPhCXrVosBz6BRgHsOZYSZACcgWiRGf%2F7PtmW%2BN%2B4bHHS%2BYwvVbGIT4F%2BnXJPnyrsKXoIRXA2Md4IVeg%2B0IapTZAielXPxGlIYl4t1n4TRXzOWimIu9y9zg%2BKtwKwCVnCc1TRnOe%2BAt9t2%2B8nuiKHc1nt6UjCYh9zJBjqkAX2SlFuL4zyzIYyrXbtGpSj%2FQ%2FM1HMJwNCLYx38%2FS1wB3WXDM4uc%2B365KQMIWn4wV48oTaKwdpNovex39aO5H3nQxh5Co6FOpnw5aSJeRJG7ANXWJMfmVDU3IojoeFGYgWxNulHZWLBytCP7P8y2JRlYtBlLrS%2FvYg6tDggppSrv0ZDgkGj%2FrKlqBfc9jE5adTgnNbeTwaMhjizvHMTRDfy0Lc%2B2&X-Amz-Signature=f8ecf1535ac1e493501626c1edfe846ba440e2ba07df3e10c906ea54e864a0b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
