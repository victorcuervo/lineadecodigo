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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTCE5W4Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2FttPsOTYYFpOt1XWbZwwI%2Byd%2BBdztGZ6xgv18jeeQgIgIGvA1ybhE7oJLrNSggyRfnjRLXYNjEb4u5ueXYZ2KaMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMthDGGaohmAX8uQ1yrcA5TGFPNFqOHddT1KxlTSaO7IjVMcqP3Zn8GRLDx9ZKfRgPqHSPsIWHg3lX%2BAcbI%2Btm3QqLWFeci%2F6zJgOZ6h0HTeqexDuU4B8v7ZVG7Is7eZkXNYqbALdf4wd0Cg75lLrb97YiWuwSWlkXF6NTfiRu6Hxlcp6bbNQpOxpVlZRx2QfMBFyM4qwpK5pv6RU9gpGm0nfwMOsqCmp2Mp8yH2OVdVDU4FCZcWkeHmOMZhsGzaY3bZH57L%2BeWHeiNBUb7fFNRsGMd%2FwpElWfZaG7H3O0oj8ORR4meZGT1DP52FUkE3ECY6r1Qvpf%2F%2Bma0D6Yc%2B%2F31rHPKW6eVnrGepXqH%2BPraNOR76zaO9veemo1f9ByW%2BHEWo4MIUF1hUJ9HAQQpg35GKiidxBYK71Hh8Xqftb7tl7Ki%2F3XIJvvYpM8bg2Gk%2FnOUrz1iizqYI4VM4F3EIZqwPyN3%2BGmrDrYwA6fbd6zYGbYb6lf4XT2YUkBNVPJAtknh7gRLexZyku3terCSi8t0L5AXvwU3QOk8w4B%2B5fXjWQPQ%2Fg9lX%2B2CaATxKv3OLaAzrS9X%2BJDI56DxgB9pUfGJimIK3L7RL7fZZFyXlXhPS%2B63OkrWtOun0H3A%2F5KygolmDF85HkGv9WGHfMNSyyckGOqUBYK9xxXqDBhtFMKVRz6HbWdcj1pAJxeUk0KOVIswP3%2FVcaYZ8yexvYjkyUqHta7MVC143ayBXaYR95e5MqHXI1VvQJf5FR4eibxfMyStQMOa8%2BUbdkwoDUMqgs3xWKQJaC3kPycCvPmkckzTSwleoANsJRzXKxWx8qwUa8nxWlXTQrMIDnJaO07Y8yXdPQ2M0Hfa%2FkLncrTIR%2FSOOSwvJ2jTK6NRC&X-Amz-Signature=25361b719baa6ecef3ba2094083b6e60ad4cc7ac9a65f180066f85fc81ef6d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTCE5W4Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2FttPsOTYYFpOt1XWbZwwI%2Byd%2BBdztGZ6xgv18jeeQgIgIGvA1ybhE7oJLrNSggyRfnjRLXYNjEb4u5ueXYZ2KaMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMthDGGaohmAX8uQ1yrcA5TGFPNFqOHddT1KxlTSaO7IjVMcqP3Zn8GRLDx9ZKfRgPqHSPsIWHg3lX%2BAcbI%2Btm3QqLWFeci%2F6zJgOZ6h0HTeqexDuU4B8v7ZVG7Is7eZkXNYqbALdf4wd0Cg75lLrb97YiWuwSWlkXF6NTfiRu6Hxlcp6bbNQpOxpVlZRx2QfMBFyM4qwpK5pv6RU9gpGm0nfwMOsqCmp2Mp8yH2OVdVDU4FCZcWkeHmOMZhsGzaY3bZH57L%2BeWHeiNBUb7fFNRsGMd%2FwpElWfZaG7H3O0oj8ORR4meZGT1DP52FUkE3ECY6r1Qvpf%2F%2Bma0D6Yc%2B%2F31rHPKW6eVnrGepXqH%2BPraNOR76zaO9veemo1f9ByW%2BHEWo4MIUF1hUJ9HAQQpg35GKiidxBYK71Hh8Xqftb7tl7Ki%2F3XIJvvYpM8bg2Gk%2FnOUrz1iizqYI4VM4F3EIZqwPyN3%2BGmrDrYwA6fbd6zYGbYb6lf4XT2YUkBNVPJAtknh7gRLexZyku3terCSi8t0L5AXvwU3QOk8w4B%2B5fXjWQPQ%2Fg9lX%2B2CaATxKv3OLaAzrS9X%2BJDI56DxgB9pUfGJimIK3L7RL7fZZFyXlXhPS%2B63OkrWtOun0H3A%2F5KygolmDF85HkGv9WGHfMNSyyckGOqUBYK9xxXqDBhtFMKVRz6HbWdcj1pAJxeUk0KOVIswP3%2FVcaYZ8yexvYjkyUqHta7MVC143ayBXaYR95e5MqHXI1VvQJf5FR4eibxfMyStQMOa8%2BUbdkwoDUMqgs3xWKQJaC3kPycCvPmkckzTSwleoANsJRzXKxWx8qwUa8nxWlXTQrMIDnJaO07Y8yXdPQ2M0Hfa%2FkLncrTIR%2FSOOSwvJ2jTK6NRC&X-Amz-Signature=1065b98fddfe25a33b715d7167964182847bc1d02f0e6e5d600194a7561b3e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
