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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD6MZEYU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUj1R7jkGlZptBXRQSdfGPkwFYEK5Cc9NnUaq4YtJ1sAiEA%2FlU5m4OYowZf%2BV1hL3OnyblyYtqgwQve%2Ff5cgu8qND4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI0mNtK1FCxLAfF5qSrcAxQFZKEz4v4F0%2FgJhVAlP4aI7Q8f34OM9syj4aVe4OjkqpydYjFj8oG2VbLv0foxLDbPZm7ikKe94EaYvvWBQXOSY1cMISYnChK1dNP8FbqgxJHCf%2FqjQueLrYibepoJ3plEA8xNciKWuW2oll4igjWPUjO1F8yLE2ZSzNOAtLZsAeEFCtsflYjJocttx2mKgdYN4YqiSTLlcZpA9J3u3k2NiXcqmrQZbP0um7xYgqIfJZa7CXlWQ%2BC6vUMvDDy60Kkq32Xpp8yZ%2Bj28b0%2FGhnPqLjNs0PVja4U47TA1k%2F2XK68Z5IkK2O1UkZ9ORooTc4ji1hNu90FGSpfrlhTIpCpXxhO6XdyiPV2o81P9jquDIj7rDA2lCGwJts8DPl0H0LvQzx1UWxU0TAAbNnBuWHxSiHjtsp2bOFyRo%2B%2BIkqqH2r5mWviaEwai9g3odP4QsY1gM8hjgGnKAOzU3pqaP7w8SHe8yo5VKG6eRdpiFbI6Lk%2F9PdIcbPPX82zqVAcCSDLhaGNYrlkSh5%2FGg0xEm8rniMqUd1%2B170BUjkN5fJHbV6YNlwMQlpYUFklymb6tpOR7yCFmhtacNvh7u9MesoZmolkozOWxSNDpJFNvR1NLqu%2F3WW48ThhSmDWaMICn0MkGOqUBEatp1cOJVQD2Uf5BXrAQDRMYxVhkDL%2BBxUQBQe78%2BcOr8tSsVPCnA0J7B%2BlvGKMItO6uZuMupFEQyt5Ph2KfjA8ZR66T8e%2FAk6JRO9C478pmFMyEs%2BQ3QqenUYj8Vz6oHFU3OsMIrYl7WU3Ns%2BE8BI6ug9WX5VLGQiQwCygQIYbt8XKkd3dUaYtk83hePDEkrooTyFWovOsq9lMDwFIECXRwuedu&X-Amz-Signature=b7b8e8e0e3f733c79fe72582e493a742184bb9f95023fec1b78a5fdb5eb15602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD6MZEYU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUj1R7jkGlZptBXRQSdfGPkwFYEK5Cc9NnUaq4YtJ1sAiEA%2FlU5m4OYowZf%2BV1hL3OnyblyYtqgwQve%2Ff5cgu8qND4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI0mNtK1FCxLAfF5qSrcAxQFZKEz4v4F0%2FgJhVAlP4aI7Q8f34OM9syj4aVe4OjkqpydYjFj8oG2VbLv0foxLDbPZm7ikKe94EaYvvWBQXOSY1cMISYnChK1dNP8FbqgxJHCf%2FqjQueLrYibepoJ3plEA8xNciKWuW2oll4igjWPUjO1F8yLE2ZSzNOAtLZsAeEFCtsflYjJocttx2mKgdYN4YqiSTLlcZpA9J3u3k2NiXcqmrQZbP0um7xYgqIfJZa7CXlWQ%2BC6vUMvDDy60Kkq32Xpp8yZ%2Bj28b0%2FGhnPqLjNs0PVja4U47TA1k%2F2XK68Z5IkK2O1UkZ9ORooTc4ji1hNu90FGSpfrlhTIpCpXxhO6XdyiPV2o81P9jquDIj7rDA2lCGwJts8DPl0H0LvQzx1UWxU0TAAbNnBuWHxSiHjtsp2bOFyRo%2B%2BIkqqH2r5mWviaEwai9g3odP4QsY1gM8hjgGnKAOzU3pqaP7w8SHe8yo5VKG6eRdpiFbI6Lk%2F9PdIcbPPX82zqVAcCSDLhaGNYrlkSh5%2FGg0xEm8rniMqUd1%2B170BUjkN5fJHbV6YNlwMQlpYUFklymb6tpOR7yCFmhtacNvh7u9MesoZmolkozOWxSNDpJFNvR1NLqu%2F3WW48ThhSmDWaMICn0MkGOqUBEatp1cOJVQD2Uf5BXrAQDRMYxVhkDL%2BBxUQBQe78%2BcOr8tSsVPCnA0J7B%2BlvGKMItO6uZuMupFEQyt5Ph2KfjA8ZR66T8e%2FAk6JRO9C478pmFMyEs%2BQ3QqenUYj8Vz6oHFU3OsMIrYl7WU3Ns%2BE8BI6ug9WX5VLGQiQwCygQIYbt8XKkd3dUaYtk83hePDEkrooTyFWovOsq9lMDwFIECXRwuedu&X-Amz-Signature=8a3d2761a7a1ee9b88795f19b2e8658e44bf529fff3ea5b98dd088f6400fb4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
