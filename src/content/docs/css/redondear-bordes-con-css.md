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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPNOSII%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFtLiE2E1KZVlkORONkY7HamMCiBgpf%2FK7BVa5pFSWymAiEAv5URN70l%2F8cadVgsclvmy3sabk0wEWxZyHbThc9StNoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBDHS8RUmW1vb3F0HyrcA6Submc7aEuIHdAsqmk6SBYAHaVe7jW3%2BSTFIWtHIgjnaSDdqvLCGryPTJ0TCc3B2n7T9DtGSfv8IuqXV7%2FL6B%2BTzhK0cnjOs3RKo1l1F7et84YLscXzN15PHmbVU4TCelaeCPDqNL3diS4aEx4OT9rtBqg3dNB1pbzrLhXAzSLsgnxM6sbQrO8l8Ls7yBZCy8oiuGrcddg%2BL6h1CDQiGcddqlMlTl2IzPQZltLo1cIq5YqQXHYQyZJAny9ylIlrj0%2B0cMq41V2l%2FWMMXRx%2FWmYE3WCNI5wvTisqe5e5lXvxBdGszJm7MKpj%2B31%2BjgZMNVo8GBLLXEJ7Ftt8mfZmyitm%2Byz5aXrn3h0gT9RkdzMrjkAF13OFDjRQyXGwO7dH%2B%2BFuiUVG%2B7%2Bxaxt6CkXzlOf%2FWovCsPzut08tJ%2Fr10nup%2F%2BiYQ0op0MCtD2O4%2F4rWZr%2FK9Hnb38UNWTw7IM%2BAtaNAc%2FnnE8z2290D%2F4s7nEE2UdTZQoHul1MudRuGifjnG3DAtUllKha6aSMMcnxY6x8vtOygwzGaNUtF2I%2FU51OYP0uElD0t4y8GkU75ETSNazXjSWr4V%2F9MRFlNxRm%2BSearARLkjsPPmVaItB4gXJwlpCxyBbXOTQzG%2BTYZMN3MxMkGOqUBWSqWR8%2FL17AO7qezmUC11sF8u2ne9cYpdbBdYxrtrCC6X6UdDV%2FL%2B%2BGgTRQTwRL8kO%2BDqoMOre9Oz0Kp1my4cphI%2FSH4vvjnuMQ4ddj1OJ9c2b6TrGp7SjwtcDT0FNlNxKdgONBlX6sHTyXosUCb8Wwc28zbli3quh6kKahCH8V36un6xNSYfpf6X8yuleFcZP0TZeFt0CCjnjxF%2Fu9C%2Bbm63l4d&X-Amz-Signature=52ee304f6c0f61e1c4147064205a66bef7e16b8a3936cd6c83908ed682023b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPNOSII%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFtLiE2E1KZVlkORONkY7HamMCiBgpf%2FK7BVa5pFSWymAiEAv5URN70l%2F8cadVgsclvmy3sabk0wEWxZyHbThc9StNoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBDHS8RUmW1vb3F0HyrcA6Submc7aEuIHdAsqmk6SBYAHaVe7jW3%2BSTFIWtHIgjnaSDdqvLCGryPTJ0TCc3B2n7T9DtGSfv8IuqXV7%2FL6B%2BTzhK0cnjOs3RKo1l1F7et84YLscXzN15PHmbVU4TCelaeCPDqNL3diS4aEx4OT9rtBqg3dNB1pbzrLhXAzSLsgnxM6sbQrO8l8Ls7yBZCy8oiuGrcddg%2BL6h1CDQiGcddqlMlTl2IzPQZltLo1cIq5YqQXHYQyZJAny9ylIlrj0%2B0cMq41V2l%2FWMMXRx%2FWmYE3WCNI5wvTisqe5e5lXvxBdGszJm7MKpj%2B31%2BjgZMNVo8GBLLXEJ7Ftt8mfZmyitm%2Byz5aXrn3h0gT9RkdzMrjkAF13OFDjRQyXGwO7dH%2B%2BFuiUVG%2B7%2Bxaxt6CkXzlOf%2FWovCsPzut08tJ%2Fr10nup%2F%2BiYQ0op0MCtD2O4%2F4rWZr%2FK9Hnb38UNWTw7IM%2BAtaNAc%2FnnE8z2290D%2F4s7nEE2UdTZQoHul1MudRuGifjnG3DAtUllKha6aSMMcnxY6x8vtOygwzGaNUtF2I%2FU51OYP0uElD0t4y8GkU75ETSNazXjSWr4V%2F9MRFlNxRm%2BSearARLkjsPPmVaItB4gXJwlpCxyBbXOTQzG%2BTYZMN3MxMkGOqUBWSqWR8%2FL17AO7qezmUC11sF8u2ne9cYpdbBdYxrtrCC6X6UdDV%2FL%2B%2BGgTRQTwRL8kO%2BDqoMOre9Oz0Kp1my4cphI%2FSH4vvjnuMQ4ddj1OJ9c2b6TrGp7SjwtcDT0FNlNxKdgONBlX6sHTyXosUCb8Wwc28zbli3quh6kKahCH8V36un6xNSYfpf6X8yuleFcZP0TZeFt0CCjnjxF%2Fu9C%2Bbm63l4d&X-Amz-Signature=9741b5d971b44e5888e7544f0d1e8b06e0e051677ae3aa5750f8ccfdca5f1921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
