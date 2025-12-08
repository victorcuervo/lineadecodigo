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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L6C2J3E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcY85Ya%2B8dQTBOM7s0I3iGu9RylALEKgFYxy6VlDrwaQIgTQ4SiEjnOde0BwNN4m2nMDsqzuhZxlXttvCK0tTUdyAqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BsUPUArhfqNiqvvyrcAy5hLJRo4IH4mJNbHdeX0H9GHX0RTGl8fOlm9Q2OLdagQ4JfxVdWG%2BQH%2BiR%2BjuI0scmeC3Y9xzZq9kUoZEarqvFQp4wdR0QSVDN8S27bxRZ43Wp5vk7tDkc20aW0zv9kea2bkCD8tz%2BHQWdxwvZLZV2rB%2BAjcBg7zdoQnynRV5emU1swJgG2re9LmfPnegzbn8EcFj9lGewhUHcr9wnZg%2F0AaozPEPSBeqkJMq6TghNl4dy6597RN67%2FAY2gX5mx1IbWGyWq7WxOe7N5a%2FZbppcb%2BBXwwEvs5BEaUhSNKmiXiZaGN52c2Gkq7ZR3ktCW6fC6Oq6DdxTluiMjodPvODZD7Vx08Wp2giuhseCanSnLaRQN3uZD8XKLH8yXM6sKztpzoUL%2FYeGrlzgcoeUlG35Ki%2FPXjjmCdod3fd8GsH%2B2mXwez0UNe0hB5sqQK7hu1cXvLTlFIAq8QuKnb4mhWmwsIhIBkanCntx0Lf2Sa068XSvfHPmhR%2BijfASM9WNts%2B%2F41mfshzTP7OGuYqieJ%2B8fzVJaKzxkECErAX7fTZuF4nP%2FgsXMyptGDRpxSaiHH1S0XTxnIJJzs7g8ZeNFXnK7MkvRsXLaK39gPUQf6T1Lixrjim%2FdKc4sUOihMPKh2MkGOqUBAQ%2FxWNOmPBE9QuezmIVYZ0lFVjcgESCHqxXInZde6SRxUuaRjzwOfR1HJktKqSqLcAhHR8UpQroVdxwMrVZ8uG%2FdTW%2B6UBhiRk8lYcoNCoZxboK0W91SkwMQaW43X3s3a5W9KEmUCUtc3INmUUZhllqgXc4mD%2Bmrw2C8iJErdDUp%2B1n3umoBjhUnrdM84k1L5Y0RsyqPjjiLQO%2ByquVMJiQFMT63&X-Amz-Signature=d5a51f13369520c04a31daa129a20a865d92691ea3869aa18dabfa3ba6da59b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L6C2J3E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcY85Ya%2B8dQTBOM7s0I3iGu9RylALEKgFYxy6VlDrwaQIgTQ4SiEjnOde0BwNN4m2nMDsqzuhZxlXttvCK0tTUdyAqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BsUPUArhfqNiqvvyrcAy5hLJRo4IH4mJNbHdeX0H9GHX0RTGl8fOlm9Q2OLdagQ4JfxVdWG%2BQH%2BiR%2BjuI0scmeC3Y9xzZq9kUoZEarqvFQp4wdR0QSVDN8S27bxRZ43Wp5vk7tDkc20aW0zv9kea2bkCD8tz%2BHQWdxwvZLZV2rB%2BAjcBg7zdoQnynRV5emU1swJgG2re9LmfPnegzbn8EcFj9lGewhUHcr9wnZg%2F0AaozPEPSBeqkJMq6TghNl4dy6597RN67%2FAY2gX5mx1IbWGyWq7WxOe7N5a%2FZbppcb%2BBXwwEvs5BEaUhSNKmiXiZaGN52c2Gkq7ZR3ktCW6fC6Oq6DdxTluiMjodPvODZD7Vx08Wp2giuhseCanSnLaRQN3uZD8XKLH8yXM6sKztpzoUL%2FYeGrlzgcoeUlG35Ki%2FPXjjmCdod3fd8GsH%2B2mXwez0UNe0hB5sqQK7hu1cXvLTlFIAq8QuKnb4mhWmwsIhIBkanCntx0Lf2Sa068XSvfHPmhR%2BijfASM9WNts%2B%2F41mfshzTP7OGuYqieJ%2B8fzVJaKzxkECErAX7fTZuF4nP%2FgsXMyptGDRpxSaiHH1S0XTxnIJJzs7g8ZeNFXnK7MkvRsXLaK39gPUQf6T1Lixrjim%2FdKc4sUOihMPKh2MkGOqUBAQ%2FxWNOmPBE9QuezmIVYZ0lFVjcgESCHqxXInZde6SRxUuaRjzwOfR1HJktKqSqLcAhHR8UpQroVdxwMrVZ8uG%2FdTW%2B6UBhiRk8lYcoNCoZxboK0W91SkwMQaW43X3s3a5W9KEmUCUtc3INmUUZhllqgXc4mD%2Bmrw2C8iJErdDUp%2B1n3umoBjhUnrdM84k1L5Y0RsyqPjjiLQO%2ByquVMJiQFMT63&X-Amz-Signature=1fdad09bfaecc6cb2101dff9d2d69c7da1f15569c0036dc1c4732d9f7574a37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
