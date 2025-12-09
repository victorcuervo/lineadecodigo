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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UACUUNQD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJ%2FTz3MUm8KQ8X9lrFZQnR%2BpIyeXmctvCYhKgEbFRBxAiA7m1J4vMWu1HV8Ugj6LJ44cFuVJeetGOAfS64EUDXx2SqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXdZ2npj%2B2PSGuhVCKtwDfwiYpuInfgyU3sWup162pR3KvjFpA9RDpZ7jDNmSZyKNKnComxVJIH6vu6frOADPtq1Be2FHIgOnLe38U4UN%2BzFC0dlF6H4VBnh3Z8C89u3mCYFa4zGRDNNo9xZXiP6XHsUTQNOOfEYUgmHYpz%2BcWyvSWKT0mFgyfT4yjJl9paiHam%2BWAHtWrPX5NyZBOiPJ2VbKwUl5SbK%2BUhbqHZlaAATfltcfmJC3bDdtpfSE1QVigA7nFiQCWi1yZ2iYFTlWUjHX2cXZQh2VhuwRHWpQWDG9c3xJtV48jA5WZVeeTZpBQnkfJOAW9jfHsOtSa8tpmWFaZbbxljN1LTEbLkY%2Bq2LiL2ESvDK66JOJvQ44Hjme5qbjvlrfusk1SpDxhu8GOn8bXEIK3qPvdJLOmZQedKVpc07G2YFw7FIGhNFAzvjmbHYybWE5VLNM7ZdeDRat7193lsg6zIqvn0rE6eJ9HO5wvQvGiwQ5pjLf8%2BxG2R95Ydsq9HwJNLPytbFv20eqRvt9oGdvcRc7mDL9hpm4eSj6kfRL5WrbFkoefnnzrBwPCGdl3feCH1zXP3JOlTUhZDM6ZvQKxJwsKowzm%2FSQ5WMJNzaJ%2FOx18KMr2dW37nK1NpeRHhA7InXsbzsw9OndyQY6pgGxv8VrN%2FDROR%2FkrJQPlz2I9d89zk0CzurKGS65DlxhgePviekdZp3u8Bxcuc2opTlzIsDv%2BBugj61zXDIyodqExm7sJouQ%2FfyWV%2BISXqKIFR%2FmEZ0tr1n%2FIDYzNoSDA%2F015kJywzKm%2BupfsXnKthgmrme%2FwqOtOt4GDa35UJxxFhyrXKIkCWRlM4mdpuiglKTFPa3LhhVIWyZhLi0jamg0Wy%2Fzmj9q&X-Amz-Signature=29a901607881818563b93ea55fc2deb9257caebdac54db7d05c15ab6b1b0a5dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UACUUNQD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJ%2FTz3MUm8KQ8X9lrFZQnR%2BpIyeXmctvCYhKgEbFRBxAiA7m1J4vMWu1HV8Ugj6LJ44cFuVJeetGOAfS64EUDXx2SqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXdZ2npj%2B2PSGuhVCKtwDfwiYpuInfgyU3sWup162pR3KvjFpA9RDpZ7jDNmSZyKNKnComxVJIH6vu6frOADPtq1Be2FHIgOnLe38U4UN%2BzFC0dlF6H4VBnh3Z8C89u3mCYFa4zGRDNNo9xZXiP6XHsUTQNOOfEYUgmHYpz%2BcWyvSWKT0mFgyfT4yjJl9paiHam%2BWAHtWrPX5NyZBOiPJ2VbKwUl5SbK%2BUhbqHZlaAATfltcfmJC3bDdtpfSE1QVigA7nFiQCWi1yZ2iYFTlWUjHX2cXZQh2VhuwRHWpQWDG9c3xJtV48jA5WZVeeTZpBQnkfJOAW9jfHsOtSa8tpmWFaZbbxljN1LTEbLkY%2Bq2LiL2ESvDK66JOJvQ44Hjme5qbjvlrfusk1SpDxhu8GOn8bXEIK3qPvdJLOmZQedKVpc07G2YFw7FIGhNFAzvjmbHYybWE5VLNM7ZdeDRat7193lsg6zIqvn0rE6eJ9HO5wvQvGiwQ5pjLf8%2BxG2R95Ydsq9HwJNLPytbFv20eqRvt9oGdvcRc7mDL9hpm4eSj6kfRL5WrbFkoefnnzrBwPCGdl3feCH1zXP3JOlTUhZDM6ZvQKxJwsKowzm%2FSQ5WMJNzaJ%2FOx18KMr2dW37nK1NpeRHhA7InXsbzsw9OndyQY6pgGxv8VrN%2FDROR%2FkrJQPlz2I9d89zk0CzurKGS65DlxhgePviekdZp3u8Bxcuc2opTlzIsDv%2BBugj61zXDIyodqExm7sJouQ%2FfyWV%2BISXqKIFR%2FmEZ0tr1n%2FIDYzNoSDA%2F015kJywzKm%2BupfsXnKthgmrme%2FwqOtOt4GDa35UJxxFhyrXKIkCWRlM4mdpuiglKTFPa3LhhVIWyZhLi0jamg0Wy%2Fzmj9q&X-Amz-Signature=34f9ae6fb2eebcb84bc6c5a0f81dc403f888533c789c7cc3024caf594749f0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
