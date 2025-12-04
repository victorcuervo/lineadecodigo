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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUPXNEP4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIACgGtkpIvRhORj9Fw4lZacZJ6ydnzRGaPnOq3nkYz7PAiBOa5D8AQY%2BGwz06273QsVxkFnDOC%2BaGgzI4p0alI0ytyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMwBbzgbNyXeUhvjfwKtwDVH7nDB6apF3yATZJHI1qyI42hzpxEbWuH%2F14c8ImAB2B%2BqGJvNyj2eMO8lPkmVQ0U0cNg9rBURwgCEXbR3rDjGIxd27lCCBqUGrgMct7yAstsWPifCsfLahzZ4VlYv3AkbEV%2BS1hzn9iINvQlw3o%2FPB%2F05yIvDM7d7%2FhiOr%2Bpw8EUCxYBtr09HdgIldlx9BCP2yBSU6yCj1bBB5iu1%2Bsmfuy7d8fv40ASm8XE8kEkYPrLnwiYqt6WePmQnkAgv0EAF0K3s4ciSbIPkNNmnddFHnT%2Fdv%2B77d320iS4PqcXbZPFF5vVBXwWvQnAZNSgkS%2BC0XbD9hgVyL%2BlVNquwuQs9hZuWXJEMi%2BmpF1gmR6WkkyOXdcwexupWcR6kkJb%2Bb1r0i538azDeNsbixJJkEhmYWFkJmxRFlXiLMFKvGDKiKM29EJLMfAmgHnoqyVlnfNkyMBWS3JjevHdznRULRkj0ZtbgFsBkoFh%2BcOwxcB37TNITL27WBZn6MHr9aAX%2Bi869hoW1y63WBWReMTtUuf6yTSEypREHx7kwH9Ny7EZ7z5r%2BtM5C5dkDP%2FtkhD4v5V%2FJVZZXxXuv1YzUFLRPcJCJuokhGYB%2BwcNfu3eMYx%2FiM89lkuQKYfAulDYGow9ejEyQY6pgFyquyMKPy%2FwXT4gVO7JWxpm%2BJkkrPyV2PZbnO4avrRp%2BwXH%2BrNBjgfdoRwLu43TcGfIbW1K4DOTz3oJwikaM90RWHl5nfAu0TPVrfWCPhuPZdVFw4lRCRMmV4%2B8jwu%2FJyvLCmo5lJfUIgeF%2BqMcKyNCeLTdliaY0BbQimcSnYLjLmcVosVHavkiE5%2BImue9hM4oKzmapOL1sDz5jXTVnx0PU8cYbF4&X-Amz-Signature=fc2db94b7789557e4f24b712aec26a7f471bc850f54f24e04dde31810c6873d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUPXNEP4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIACgGtkpIvRhORj9Fw4lZacZJ6ydnzRGaPnOq3nkYz7PAiBOa5D8AQY%2BGwz06273QsVxkFnDOC%2BaGgzI4p0alI0ytyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMwBbzgbNyXeUhvjfwKtwDVH7nDB6apF3yATZJHI1qyI42hzpxEbWuH%2F14c8ImAB2B%2BqGJvNyj2eMO8lPkmVQ0U0cNg9rBURwgCEXbR3rDjGIxd27lCCBqUGrgMct7yAstsWPifCsfLahzZ4VlYv3AkbEV%2BS1hzn9iINvQlw3o%2FPB%2F05yIvDM7d7%2FhiOr%2Bpw8EUCxYBtr09HdgIldlx9BCP2yBSU6yCj1bBB5iu1%2Bsmfuy7d8fv40ASm8XE8kEkYPrLnwiYqt6WePmQnkAgv0EAF0K3s4ciSbIPkNNmnddFHnT%2Fdv%2B77d320iS4PqcXbZPFF5vVBXwWvQnAZNSgkS%2BC0XbD9hgVyL%2BlVNquwuQs9hZuWXJEMi%2BmpF1gmR6WkkyOXdcwexupWcR6kkJb%2Bb1r0i538azDeNsbixJJkEhmYWFkJmxRFlXiLMFKvGDKiKM29EJLMfAmgHnoqyVlnfNkyMBWS3JjevHdznRULRkj0ZtbgFsBkoFh%2BcOwxcB37TNITL27WBZn6MHr9aAX%2Bi869hoW1y63WBWReMTtUuf6yTSEypREHx7kwH9Ny7EZ7z5r%2BtM5C5dkDP%2FtkhD4v5V%2FJVZZXxXuv1YzUFLRPcJCJuokhGYB%2BwcNfu3eMYx%2FiM89lkuQKYfAulDYGow9ejEyQY6pgFyquyMKPy%2FwXT4gVO7JWxpm%2BJkkrPyV2PZbnO4avrRp%2BwXH%2BrNBjgfdoRwLu43TcGfIbW1K4DOTz3oJwikaM90RWHl5nfAu0TPVrfWCPhuPZdVFw4lRCRMmV4%2B8jwu%2FJyvLCmo5lJfUIgeF%2BqMcKyNCeLTdliaY0BbQimcSnYLjLmcVosVHavkiE5%2BImue9hM4oKzmapOL1sDz5jXTVnx0PU8cYbF4&X-Amz-Signature=d08d74d0c94daa7162044d58d0a5ef59e9ef5158943c4ba44429b78272cde520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
