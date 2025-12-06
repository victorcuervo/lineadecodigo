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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKKLLCA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtQTehF%2FJtye%2FB6SUdKuPdjGei%2FKly%2FlXqlnsCfdZudgIhANfEjjFxFZSSnZYw1VcC8iSOPxvplCne7rAy9VU8r9V8Kv8DCGoQABoMNjM3NDIzMTgzODA1IgwcrWtcOC7AVpm4PLQq3AN3wWqL7f53RBHJWThnwWvQMiKYrjt8qeYG3bHxlcrBwdT8HKiewu8eD8iZQxNf7q8XG%2FwJCy1YgV5LNUaFOCRk4OtGAeJiLl%2FbznExurl6tri2hRT9j27O8EaOYqwjYaGZ8aeLSTq2BnCLmT5kW8IR0UjU78U2JGDSx5sJHrnJBxdiFM51PnOxb4FIXEt69A%2F3%2B7IoSzaXsqbh9oul1HmQQg9k%2FTwqtf3UduF6r3BvaU5iicMNxQ36ZoO81KHUXSyBV91ku01CVt15WL3a9tysDs%2BfWUFAIQru9uxF0GtjeuCkA9MyEnpfpM61xxx94SI1RGVdSHbsOnrK22TKuk36ghQNpuL0qZc2iQS514OjGJEpw%2FcayETitQln4rGgPyNzFhLBfup%2BjCnjIcGKxuW%2F43FsyWlvJI8JHPHkURnMv1NG0hPGkef1OxSjivaovuqvCqE8EWhLbJ%2BnTl9L8MNBwePspHBSMxRx3dfV2tx85Pq8v4%2F3JaXjN75tFdor%2BOhW2j%2Fsb%2Fa%2B9BiqKvGsw21gOa8yZnxWHtjDGtiPxI4jP8y%2FSw9Yiz3xZKoLIhy3xB4a038q03EErJ5UkPLPXfSTWFwJ1hPlUY0ezp%2Brk2gMnFEgimkvfwgcWUYCjDDUis7JBjqkAXi%2B6e1LpIS04aAXfCWNLIVb1QV7O0rllwcvbGh9DD3LkTbjNkaIDUNd8sOswotkKfLbIbYt%2Flubb4awvUSQxy5kXpvdxDvmkzsQlJ7DKhIlS58LrrubLiZMtNCKNJby5sMBXmm9D%2BRP6gRK6VDjz6wWcCZCzGsW%2FHtR62W3VcIeHA7jjo2yXdIJjRh3J3YS%2BL5%2F9UzUM2B5%2BdE7gy65IuynGiP7&X-Amz-Signature=d396b675156acd864254db6e97c87ebca27931c489d51969e9e2d758adf05b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKKLLCA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtQTehF%2FJtye%2FB6SUdKuPdjGei%2FKly%2FlXqlnsCfdZudgIhANfEjjFxFZSSnZYw1VcC8iSOPxvplCne7rAy9VU8r9V8Kv8DCGoQABoMNjM3NDIzMTgzODA1IgwcrWtcOC7AVpm4PLQq3AN3wWqL7f53RBHJWThnwWvQMiKYrjt8qeYG3bHxlcrBwdT8HKiewu8eD8iZQxNf7q8XG%2FwJCy1YgV5LNUaFOCRk4OtGAeJiLl%2FbznExurl6tri2hRT9j27O8EaOYqwjYaGZ8aeLSTq2BnCLmT5kW8IR0UjU78U2JGDSx5sJHrnJBxdiFM51PnOxb4FIXEt69A%2F3%2B7IoSzaXsqbh9oul1HmQQg9k%2FTwqtf3UduF6r3BvaU5iicMNxQ36ZoO81KHUXSyBV91ku01CVt15WL3a9tysDs%2BfWUFAIQru9uxF0GtjeuCkA9MyEnpfpM61xxx94SI1RGVdSHbsOnrK22TKuk36ghQNpuL0qZc2iQS514OjGJEpw%2FcayETitQln4rGgPyNzFhLBfup%2BjCnjIcGKxuW%2F43FsyWlvJI8JHPHkURnMv1NG0hPGkef1OxSjivaovuqvCqE8EWhLbJ%2BnTl9L8MNBwePspHBSMxRx3dfV2tx85Pq8v4%2F3JaXjN75tFdor%2BOhW2j%2Fsb%2Fa%2B9BiqKvGsw21gOa8yZnxWHtjDGtiPxI4jP8y%2FSw9Yiz3xZKoLIhy3xB4a038q03EErJ5UkPLPXfSTWFwJ1hPlUY0ezp%2Brk2gMnFEgimkvfwgcWUYCjDDUis7JBjqkAXi%2B6e1LpIS04aAXfCWNLIVb1QV7O0rllwcvbGh9DD3LkTbjNkaIDUNd8sOswotkKfLbIbYt%2Flubb4awvUSQxy5kXpvdxDvmkzsQlJ7DKhIlS58LrrubLiZMtNCKNJby5sMBXmm9D%2BRP6gRK6VDjz6wWcCZCzGsW%2FHtR62W3VcIeHA7jjo2yXdIJjRh3J3YS%2BL5%2F9UzUM2B5%2BdE7gy65IuynGiP7&X-Amz-Signature=0d8e9dc8d0de8df148cd595e6c81fdc5649d80b343234d25934f9e36882d9299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
