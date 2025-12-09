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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3HJ7B5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoELAH1ZwuOWkKMjRdA0VHlGrLtGeYZYS1ifT274h28AiEAtJhnbaJfxAQUzvzVH%2Bee7Vd3KkAMZf1C83XPqAJKC0wqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5bWBzG6PB1JULQeyrcA9SDbQgnsDIFQDlGFv1Ri8BM4wkmvhe6EINUvLY1ucRrZo6Sjf5kIqIKlS7GJF9V7%2BPPxR%2BeJ87prIxvaQzng7cGhCKw9hPuiYAzLqUIdV%2FlpNtlQ3dLUX7OZrLHnSRPNHzeKlNl%2B4hb%2BQMvr4H74hIIgtvM5TCBQcp3DA4asjOgjvqb1zT%2Bnr5R%2FPlrCz4hth50WGCxN4%2FO8LNn7ZhifENe%2B%2FcJjQ%2BaTE9uEdhP1%2FCsPa9QlP1FWwhtE9HUxpT9onj8jeyKKV37%2FsBNHJsHNtzuQ%2BUB98yspu9pmbWGH2lZMpGAahi2PlrFE3DcFP0p9sOeRFOMfHPI%2FresXGBND8yzknfYAu8P3MoqK6ok5IRWvuHZuLvfh4xL4BSMkblWbH9vVRz3cBOuncFy6mSQBQR8UZRcS6fnUAYhmZo26FSwZD8IXSf2gdUcANwf2t2lNhe38PNyhnHXaCNNugp8%2Fxzr9c5q%2FNef5YifUfzYdth3Vv%2FX6RyKsBEdeSyeyNMjr8NlmzGpfz1tpV%2BnVF7QryeeK82uTzDaxlGc0NFHcs59s2KIDGu5%2Fuft%2BibjqPJuzHiTuroPU84zAp3kT3AShizWYgtMBBg2mLCnqQeEfI3XNaGPstaL3Zx8pTEsMJyk38kGOqUBmn5suln1EgznFKMDKL6VomTRCc4CyaLdNGYrL5uybhtMSE0HcM0X%2BWlQtYy4naUOcuXOjuB8mk9E6TCwsMf5TmZr3za5jY%2BMnMy7xjXhhZbZgjrsambJg6rdV5avQRm49tIKUwF1Xfh5sfXoR2zWKBkCACCau2ag3TieXlZ6%2FBjYVZcMsNh6yiAGg%2B3e5HJQpmlc2mtmcCQAgDQXPf6ZVdh2ZmMS&X-Amz-Signature=146f845f8b6885468c6b5ee478dd07909124db6a2c2b562024ce854af5339a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3HJ7B5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoELAH1ZwuOWkKMjRdA0VHlGrLtGeYZYS1ifT274h28AiEAtJhnbaJfxAQUzvzVH%2Bee7Vd3KkAMZf1C83XPqAJKC0wqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5bWBzG6PB1JULQeyrcA9SDbQgnsDIFQDlGFv1Ri8BM4wkmvhe6EINUvLY1ucRrZo6Sjf5kIqIKlS7GJF9V7%2BPPxR%2BeJ87prIxvaQzng7cGhCKw9hPuiYAzLqUIdV%2FlpNtlQ3dLUX7OZrLHnSRPNHzeKlNl%2B4hb%2BQMvr4H74hIIgtvM5TCBQcp3DA4asjOgjvqb1zT%2Bnr5R%2FPlrCz4hth50WGCxN4%2FO8LNn7ZhifENe%2B%2FcJjQ%2BaTE9uEdhP1%2FCsPa9QlP1FWwhtE9HUxpT9onj8jeyKKV37%2FsBNHJsHNtzuQ%2BUB98yspu9pmbWGH2lZMpGAahi2PlrFE3DcFP0p9sOeRFOMfHPI%2FresXGBND8yzknfYAu8P3MoqK6ok5IRWvuHZuLvfh4xL4BSMkblWbH9vVRz3cBOuncFy6mSQBQR8UZRcS6fnUAYhmZo26FSwZD8IXSf2gdUcANwf2t2lNhe38PNyhnHXaCNNugp8%2Fxzr9c5q%2FNef5YifUfzYdth3Vv%2FX6RyKsBEdeSyeyNMjr8NlmzGpfz1tpV%2BnVF7QryeeK82uTzDaxlGc0NFHcs59s2KIDGu5%2Fuft%2BibjqPJuzHiTuroPU84zAp3kT3AShizWYgtMBBg2mLCnqQeEfI3XNaGPstaL3Zx8pTEsMJyk38kGOqUBmn5suln1EgznFKMDKL6VomTRCc4CyaLdNGYrL5uybhtMSE0HcM0X%2BWlQtYy4naUOcuXOjuB8mk9E6TCwsMf5TmZr3za5jY%2BMnMy7xjXhhZbZgjrsambJg6rdV5avQRm49tIKUwF1Xfh5sfXoR2zWKBkCACCau2ag3TieXlZ6%2FBjYVZcMsNh6yiAGg%2B3e5HJQpmlc2mtmcCQAgDQXPf6ZVdh2ZmMS&X-Amz-Signature=c432fd47a78ae7f76228c89a2cfb9abb22ea603085984b216f91e35ecbe970b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
