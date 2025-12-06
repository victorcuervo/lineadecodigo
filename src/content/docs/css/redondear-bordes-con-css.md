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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUQRXLA4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9o75vZIVNRgUwgcwspE4CJdCGM1mnpD%2Bu%2BgpF%2FqmM%2FgIgQYOqGMANpzmJEwh1RSxzwTmS82vmpuK83h5AcrMprbkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHtQ06QxKo4xQo0f%2FircA0GQvRaX%2Fk5JIC%2Fu90F0wuVvGX4fn2r4KenlBYPkhZMpsUOKTGTonE4Wj9dp0Oxo1D32RGbRQz%2FuBtZ53M7Ht0ZP2MKrKdYRf7GcHCZNC%2F9rlWtudfU%2FE%2FAJAN20sv5iUzeR1B0BbamKmM1ekS9NENOl6pAJxZnnKcXOtICac8PDqgFiZIV85hik4UaKvwEXt%2F7Hpoim4LglVvnRGeA10HW2v4OgKWuE%2Fku7P5q2hSMJTayknQSXStQYSqOHi74F3ZMxJVwVs4pA5AEfcn%2FMPpffZbhK6dC%2F4tz6UZBhzF2gAzA2l2kQq6BlZXdBDXUm0Ys1JR%2BUruPM0rZR6jiNQ0Clneoqj2rcmp5wgZ4a1%2FPTw4pX%2FxI1qfdtor6Gf%2FgCo0jcN9z5rCbAXUhj1M6AGoOo12WBAt7uDbVh7pRk%2F0tZe0c9BrxRfz0w3NlV49pU8vZ3HSp5BE2VSQf8VBxigIZpu0geVjJ33g%2B63wDvVJL4RZqiiEpRFpO4xJSF7fydBXcVXf4ypc%2FtFsKih9F38Cna%2B2U1d43UfP82R50VmyYbKrb4RKHYtNP2LZiRwVUbiwoczg%2BmERyWjeOTQUqmYZ6rviVe9JA0GIzoHt50mX4xAMjUrHa71FhMum9aMPz8zskGOqUBR6bVvvF9BJNuoOJFUblEqkuwWEYRt9eGS%2BzAXKAF%2BLEBSumeQMZnEnErNcJNTt9%2BkYcf8NL9jiBcDPCBxjkzAEtlii3AzUqOUgGV50Eun%2FrGpvEwKDLZqPBLKr7EmSQZIFlAab6Sg%2B1%2F9X9J%2FeT7qatYjbIKsOZ7QoYvHIsoRnGwygqkM32VVVuY%2FwQmva8wz05NtIhZxjC6FURpZaPZAZ1IyLy5&X-Amz-Signature=e17e771fce49ae8d3e99394b5656e4e9062b88a59ccb035d443d53d0b5cc2ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUQRXLA4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9o75vZIVNRgUwgcwspE4CJdCGM1mnpD%2Bu%2BgpF%2FqmM%2FgIgQYOqGMANpzmJEwh1RSxzwTmS82vmpuK83h5AcrMprbkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHtQ06QxKo4xQo0f%2FircA0GQvRaX%2Fk5JIC%2Fu90F0wuVvGX4fn2r4KenlBYPkhZMpsUOKTGTonE4Wj9dp0Oxo1D32RGbRQz%2FuBtZ53M7Ht0ZP2MKrKdYRf7GcHCZNC%2F9rlWtudfU%2FE%2FAJAN20sv5iUzeR1B0BbamKmM1ekS9NENOl6pAJxZnnKcXOtICac8PDqgFiZIV85hik4UaKvwEXt%2F7Hpoim4LglVvnRGeA10HW2v4OgKWuE%2Fku7P5q2hSMJTayknQSXStQYSqOHi74F3ZMxJVwVs4pA5AEfcn%2FMPpffZbhK6dC%2F4tz6UZBhzF2gAzA2l2kQq6BlZXdBDXUm0Ys1JR%2BUruPM0rZR6jiNQ0Clneoqj2rcmp5wgZ4a1%2FPTw4pX%2FxI1qfdtor6Gf%2FgCo0jcN9z5rCbAXUhj1M6AGoOo12WBAt7uDbVh7pRk%2F0tZe0c9BrxRfz0w3NlV49pU8vZ3HSp5BE2VSQf8VBxigIZpu0geVjJ33g%2B63wDvVJL4RZqiiEpRFpO4xJSF7fydBXcVXf4ypc%2FtFsKih9F38Cna%2B2U1d43UfP82R50VmyYbKrb4RKHYtNP2LZiRwVUbiwoczg%2BmERyWjeOTQUqmYZ6rviVe9JA0GIzoHt50mX4xAMjUrHa71FhMum9aMPz8zskGOqUBR6bVvvF9BJNuoOJFUblEqkuwWEYRt9eGS%2BzAXKAF%2BLEBSumeQMZnEnErNcJNTt9%2BkYcf8NL9jiBcDPCBxjkzAEtlii3AzUqOUgGV50Eun%2FrGpvEwKDLZqPBLKr7EmSQZIFlAab6Sg%2B1%2F9X9J%2FeT7qatYjbIKsOZ7QoYvHIsoRnGwygqkM32VVVuY%2FwQmva8wz05NtIhZxjC6FURpZaPZAZ1IyLy5&X-Amz-Signature=f4b18ccd277cc8b9dc18af72ba0fb91c58eaef611256581ba15398fde3a539ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
