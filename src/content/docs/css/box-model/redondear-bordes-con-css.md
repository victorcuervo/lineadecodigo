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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOGRAAKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWV0mjdd%2FTF5uS77xlZUZovF7NNvT9v8%2B%2BKWkCtuPV9wIgAxRQvJ9HqqfVLsg8kdtCRyGD9NO1M6NnXopGXLdKfkIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCo3lkeTG0LUJYGFYCrcA8627ake1fqWSiuMbiQUN9roYmIfjfbDTTEhEWYBYUzQ7CCbqtH3GAJB4J4NlvcZAJJ2UZonJ9hh%2Fpd1SXjfIO7%2FZmK4YOOXfK9ODF8jLXm1eWDKiobj5M2D9G%2BhqbHaSKODflmqYXDxRmz%2BuRpZ6Sq2cmFS0rGjtc9jqBtXDcZ9qUc5I0hWv0zuZdnm8tIO6vD8Nfp%2BfUAAoERqr0NGNkxiW9IVrnQxkewN%2FjKQhEvtk2XKJ4RfU2GTOdh61%2F36PHmC0qcTTldHYCjER4BXUYpC5tnwlI0o6Lstz2KN5owq3pDLAxt72WfqLStPi5uAvcT0L4Y19aETjWjeWTv6zBLsnk9Cs3%2BFhK1c%2BkdL2eY055AQKFc7gROnuEjMYgBIiYMsUZ1CSzl0G7vkcv8LrM1E0ImVwzdYb9a2IJPtgYyRHJHOQqSicdvLD8TNUt8aBziXvHhAdH84SNO4AnbXRjG7fR3BOYt8F8zeRFhpufCO9RibVuYMopbH4fAQZk0sCZ4wjFZ90lLuG0Gz0QlXyttrzvk%2F9%2BPikOQ%2F7zNVyGEN%2FnIai0FLy355owxMN2mp3s7de0xsUj7Z%2FBLdRTbpYU38QOOnR6JVY%2F19ZJ1HFbjh5Nuay9rElK5OW0qGMLugi8oGOqUBcScXlxy8Utm0UrFH0YxwtzqWD%2B109DsP67G1h8PBRW%2FXz61V9XXzPAMUIztnXaK5L%2F0wdtLb4q9P6gcZH06CslieFfftD%2FmP8paTZKuUKS7LZ8w9tANVJVKNrbM2wpMy42GuCvQw8Tf5EtBrvg5d9lxuYdi%2B84j3GO9jIbmCwsXkWjs9nDu3NAwoJrgkKTcMOyMVdboO0IN4BqCx8TVioc8zSejD&X-Amz-Signature=5ac3a0069a3857746001ee37532fc0d8b4a7ae59dccc0179bb497a9546d5b718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOGRAAKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWV0mjdd%2FTF5uS77xlZUZovF7NNvT9v8%2B%2BKWkCtuPV9wIgAxRQvJ9HqqfVLsg8kdtCRyGD9NO1M6NnXopGXLdKfkIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCo3lkeTG0LUJYGFYCrcA8627ake1fqWSiuMbiQUN9roYmIfjfbDTTEhEWYBYUzQ7CCbqtH3GAJB4J4NlvcZAJJ2UZonJ9hh%2Fpd1SXjfIO7%2FZmK4YOOXfK9ODF8jLXm1eWDKiobj5M2D9G%2BhqbHaSKODflmqYXDxRmz%2BuRpZ6Sq2cmFS0rGjtc9jqBtXDcZ9qUc5I0hWv0zuZdnm8tIO6vD8Nfp%2BfUAAoERqr0NGNkxiW9IVrnQxkewN%2FjKQhEvtk2XKJ4RfU2GTOdh61%2F36PHmC0qcTTldHYCjER4BXUYpC5tnwlI0o6Lstz2KN5owq3pDLAxt72WfqLStPi5uAvcT0L4Y19aETjWjeWTv6zBLsnk9Cs3%2BFhK1c%2BkdL2eY055AQKFc7gROnuEjMYgBIiYMsUZ1CSzl0G7vkcv8LrM1E0ImVwzdYb9a2IJPtgYyRHJHOQqSicdvLD8TNUt8aBziXvHhAdH84SNO4AnbXRjG7fR3BOYt8F8zeRFhpufCO9RibVuYMopbH4fAQZk0sCZ4wjFZ90lLuG0Gz0QlXyttrzvk%2F9%2BPikOQ%2F7zNVyGEN%2FnIai0FLy355owxMN2mp3s7de0xsUj7Z%2FBLdRTbpYU38QOOnR6JVY%2F19ZJ1HFbjh5Nuay9rElK5OW0qGMLugi8oGOqUBcScXlxy8Utm0UrFH0YxwtzqWD%2B109DsP67G1h8PBRW%2FXz61V9XXzPAMUIztnXaK5L%2F0wdtLb4q9P6gcZH06CslieFfftD%2FmP8paTZKuUKS7LZ8w9tANVJVKNrbM2wpMy42GuCvQw8Tf5EtBrvg5d9lxuYdi%2B84j3GO9jIbmCwsXkWjs9nDu3NAwoJrgkKTcMOyMVdboO0IN4BqCx8TVioc8zSejD&X-Amz-Signature=11e58d4acb12d64884693ff21cfe181067f08995fea39fdf77e41b5fbba07582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
