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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO3PT4LC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCo1nQRBdJFF2NyLwvMTj1ePcjN6RaolJ3cO52rVVv%2FwIgffE8ue93%2F3u%2F4HdwBZ8Ktg5jLsKNaM9cIX07bf4W0WsqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqxQSULDdC7SnbMvSrcA6blg9b3Gk9GBY6%2B%2BaqzUJLtvCvw%2Bvtina27HaGRUZE3K8ej%2BPilwOUUnM48RpHS%2BkbteYfU0lGTNwepoy8A5Xt0tCDHMIU3Gj6Bi6s%2FvUjTeSHEVypD97P5Zr1Gt%2FhsRQGtSPYZUj%2B%2FUTxJYpMQRwHe0FIluodr3n14N0g8C3ZlSsx4iQjwgDmVx%2F%2B%2Fdghjz3viaA0Lw%2FtHenETYARvAAhB3JhenpcGtAfjCKmqygITCm9rEQgy6AGhA1tr5YAqscgtEpOszO61XfwdZdTt6RPFoU4uW8S3ekxYx0TArFiPfSdW4GCEQgoROiwgJU1uzR7oMW%2BgD18zzo5GVK%2FxmY%2BFLY5EbstcTQvVyZLFqjOihE5XgEjzDStw6wDksR29AYVn4dsG3Jnbu6kuQ12D%2FsaWcUG%2BngiFeYGwxnWVKNS%2F6m6WxDi8qK7jot%2FdRJzjOPQH5dXaupN8trgW9jFIGY0GiO9fss2EtjaHbqQwCzPLnruLU3JWVBKu1c%2FclCOR5MY9QxVafQkYhhFWmgZ%2B9OvBdt49nu46wqPpJ6S7px%2FN3d5WanT%2F3qCOqrhObROjQDyW6o3bSlIeedAmpQjUaqSO%2FAQ4PsvSKg71jrT9j5YkIlGKm1ZGfMQKLkXKMPDp3ckGOqUBECyRW4wWWL89N8ZfcJKMvsZ%2FCYObbuH%2BArm90dI862yqtRVPy%2FH4qwi4q3yeKQNS4MjRs4KAVP50l0coDgDbZfKFo3FDQHqNCCNX3HThRqUD%2F%2FbY5yNVSeSd84yIlKAunMT9%2Bc6WgMKQpzDbM5hCmMJKPhxq9EveKhNthsn4LG339pppUERj12Jc9d2oxN5rmrTfVC%2FApUgOXdeAgBwQxRXJA%2FWt&X-Amz-Signature=101900fd91f8d345c30aea9a56fdb5df3f45aa8ee9349dde47dae3bf2a7c73a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO3PT4LC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCo1nQRBdJFF2NyLwvMTj1ePcjN6RaolJ3cO52rVVv%2FwIgffE8ue93%2F3u%2F4HdwBZ8Ktg5jLsKNaM9cIX07bf4W0WsqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqxQSULDdC7SnbMvSrcA6blg9b3Gk9GBY6%2B%2BaqzUJLtvCvw%2Bvtina27HaGRUZE3K8ej%2BPilwOUUnM48RpHS%2BkbteYfU0lGTNwepoy8A5Xt0tCDHMIU3Gj6Bi6s%2FvUjTeSHEVypD97P5Zr1Gt%2FhsRQGtSPYZUj%2B%2FUTxJYpMQRwHe0FIluodr3n14N0g8C3ZlSsx4iQjwgDmVx%2F%2B%2Fdghjz3viaA0Lw%2FtHenETYARvAAhB3JhenpcGtAfjCKmqygITCm9rEQgy6AGhA1tr5YAqscgtEpOszO61XfwdZdTt6RPFoU4uW8S3ekxYx0TArFiPfSdW4GCEQgoROiwgJU1uzR7oMW%2BgD18zzo5GVK%2FxmY%2BFLY5EbstcTQvVyZLFqjOihE5XgEjzDStw6wDksR29AYVn4dsG3Jnbu6kuQ12D%2FsaWcUG%2BngiFeYGwxnWVKNS%2F6m6WxDi8qK7jot%2FdRJzjOPQH5dXaupN8trgW9jFIGY0GiO9fss2EtjaHbqQwCzPLnruLU3JWVBKu1c%2FclCOR5MY9QxVafQkYhhFWmgZ%2B9OvBdt49nu46wqPpJ6S7px%2FN3d5WanT%2F3qCOqrhObROjQDyW6o3bSlIeedAmpQjUaqSO%2FAQ4PsvSKg71jrT9j5YkIlGKm1ZGfMQKLkXKMPDp3ckGOqUBECyRW4wWWL89N8ZfcJKMvsZ%2FCYObbuH%2BArm90dI862yqtRVPy%2FH4qwi4q3yeKQNS4MjRs4KAVP50l0coDgDbZfKFo3FDQHqNCCNX3HThRqUD%2F%2FbY5yNVSeSd84yIlKAunMT9%2Bc6WgMKQpzDbM5hCmMJKPhxq9EveKhNthsn4LG339pppUERj12Jc9d2oxN5rmrTfVC%2FApUgOXdeAgBwQxRXJA%2FWt&X-Amz-Signature=de677fd868cb67355329e4f11f984bd1830def3a363ff9be5aa19a80bfacf951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
