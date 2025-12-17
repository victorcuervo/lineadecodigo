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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675G22VJF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj9Pz43%2F%2BqBxKIyJw9yXXVxJy%2FgZOPB80R9AqwRDWj6QIhAK%2B198enWOV1FHOUZRa9K8lQYQwFwi3voPXGVSRMEjndKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx08048P4MUTYgrVfAq3APW%2Bp11pW8PuI9MfCk38OC%2BvUHYWYiTRZcISx8vS3EwFKPK3GUOuzbZgRC0CvWRcEh58MDqdqDaDzoauhjE9MEJ68gfp9%2BmUnIu6zWTgi2bJhKd782Y8NDoq%2BAoqqjAFQvzOV7sIjuUI0zNL7nxeUpcXzlu1MC0bCUQv%2FTJrVY5IqqnK8qLyKfcP7rt4x7gPUqApH5G9zNQx8aZiBZe035BkANr%2FI5nYMFznPPkj6jr6g02Cltetjw8oWH%2FCUFQWzR9xEhJDa0LvJ9pHdEPpIugH7EKNjn4G%2Fm%2F41wRDagJ5tMj6Vw1xZ6Tw66%2BFmECXCKlHc1qPOriaGCtJHR9kjvIlPdurkd3SXbKWbTHxzJQkqNsmg2fpPl5wlOPAzCcOYGPUcJPlUSjVtekT3Av4HqUE8M7x04TfPeVhToqXFoj5Dg0QgV6jbXs0W7rkf4NECo8Tg3WfIRF3X%2BEe2dvwumMGCrQHkUMVMG4vIEMZsGL4K79vxdCVcA3oZpDe370elOEX7U0kOPXAvf%2FAq2nZ4Rc7Pi2E8qs511bmiMUy4I5dcKCzNV1FCpPcGw92newMpwSp6PTpZFMItTjB2nltmegg34jQZB5OSbrIyrmrhUju2W62OXiv7UfQsasRjChn4vKBjqkAd3S5Ei6fufDyF4r%2Bf5xzTFldyNx0lSMxUHQiCIZK9aG0JUn3eNYx9AOunXnflB2NyAp8ih4zNfZdkD6kxspRx5j66iIScHC2BuMnLfSj%2F6d%2FxQkfWdOcnorwxoYveKVIn7smu%2FdL4%2BsXg%2BBmG0pv7QJ7khtjNqF2WyQ55BdCgll%2FnObc0hhjosNVAG2MKXJnZFn%2BuRwoYLj0bScbiruAg8odx2I&X-Amz-Signature=3522034ea8fb439a47646270432b90fb097a12177ec0cd132cd0a49def0dad81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675G22VJF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj9Pz43%2F%2BqBxKIyJw9yXXVxJy%2FgZOPB80R9AqwRDWj6QIhAK%2B198enWOV1FHOUZRa9K8lQYQwFwi3voPXGVSRMEjndKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx08048P4MUTYgrVfAq3APW%2Bp11pW8PuI9MfCk38OC%2BvUHYWYiTRZcISx8vS3EwFKPK3GUOuzbZgRC0CvWRcEh58MDqdqDaDzoauhjE9MEJ68gfp9%2BmUnIu6zWTgi2bJhKd782Y8NDoq%2BAoqqjAFQvzOV7sIjuUI0zNL7nxeUpcXzlu1MC0bCUQv%2FTJrVY5IqqnK8qLyKfcP7rt4x7gPUqApH5G9zNQx8aZiBZe035BkANr%2FI5nYMFznPPkj6jr6g02Cltetjw8oWH%2FCUFQWzR9xEhJDa0LvJ9pHdEPpIugH7EKNjn4G%2Fm%2F41wRDagJ5tMj6Vw1xZ6Tw66%2BFmECXCKlHc1qPOriaGCtJHR9kjvIlPdurkd3SXbKWbTHxzJQkqNsmg2fpPl5wlOPAzCcOYGPUcJPlUSjVtekT3Av4HqUE8M7x04TfPeVhToqXFoj5Dg0QgV6jbXs0W7rkf4NECo8Tg3WfIRF3X%2BEe2dvwumMGCrQHkUMVMG4vIEMZsGL4K79vxdCVcA3oZpDe370elOEX7U0kOPXAvf%2FAq2nZ4Rc7Pi2E8qs511bmiMUy4I5dcKCzNV1FCpPcGw92newMpwSp6PTpZFMItTjB2nltmegg34jQZB5OSbrIyrmrhUju2W62OXiv7UfQsasRjChn4vKBjqkAd3S5Ei6fufDyF4r%2Bf5xzTFldyNx0lSMxUHQiCIZK9aG0JUn3eNYx9AOunXnflB2NyAp8ih4zNfZdkD6kxspRx5j66iIScHC2BuMnLfSj%2F6d%2FxQkfWdOcnorwxoYveKVIn7smu%2FdL4%2BsXg%2BBmG0pv7QJ7khtjNqF2WyQ55BdCgll%2FnObc0hhjosNVAG2MKXJnZFn%2BuRwoYLj0bScbiruAg8odx2I&X-Amz-Signature=8f4321e1dfee977a4a9760098c4840b06c2394a3aeb62715d6771b46e5ac6b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
