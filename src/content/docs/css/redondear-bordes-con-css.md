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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWLKCVVA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKIQBf4fudaHeheHyEF%2FJgtk%2FHlxUZjmgy%2Frchs98G8gIhANXOTmtQSEC7p8byMl6d9ttXXQoE2xkfAys5eIqm8SFFKv8DCE8QABoMNjM3NDIzMTgzODA1IgyKI9UUMDPZFl0NZp4q3ANZwFch2LOYBT71lRkx47iP5Wi%2FeKZcWL%2Fdf%2FJMUoKT%2FR7PP6LWsMJPrP83%2F2bx4k99%2Fj03%2FTYFWv40oLUO4bTRhYCBa%2B82OzPxvJDFnd2VZZ1akIY8nKnocQu3sZJQpVXWpjGR5ujBCenRQzIuGeYUKfTXshrgIxxF8jRWlP1PnRbGfV7wVrcAHyAbeee2zRtB9qhY7oE6VYKwQUmvdEZrAJ1JM3IEGHzJfloAaRGUYgsKVACKQ4UGMs3DhZY1fhmh1togAm9pIzRJBegAyL%2BTIGIpHtlmxVmcrtsghEc1YQUG3gPd4kXXtL4%2FdTuCoIGNo02Y3rVgeVBwkqDp8vkgzUyTqb2XviBtHWv3Ues5gL2QWB5NgSsFOicAfIi%2BBhj0%2FWekh8yg79IpCitkddseKakzXO4Aviorh2L2xSyq5Qe7%2FyPD%2BuIn52jQSeuLqMX1Q2FYcK22ohyoezaW9d6DqT24h21u%2B%2FOF0R6wh%2BkNyn1DNt%2F2IXwZBlfFatYJcwT2zsHDofcoftJxhnKhZBV0hwrSZ%2BzVWT%2FyWq9UjQvrYJWk6Q3RlkN%2BVSrSquSFQnMVln%2BsuXLqQ1Zv7%2BqnWqNbv0X7bagabEpGnIRy%2BaTEoH45eoBWecPf5aL0DTD%2Fi8jJBjqkAZIeEVYMLs6M5LJcWKSED00MBNCPB9%2BwhiPLFo09sJXUxQBoBmqbNHI3XluGge1e4Cv24DwZuwQtLAi08oUwgYdNf0xXOGQ8wg19Bs25HnrA17YYdrNNBW6fc8HyVJUCrn659FhAt8x0bDl3Lkzyp6yfpLK8psPoJSbVTcaZpisuOFsMzXGmLD1EdMPuj52RhNxWdCgJOtdRtiBfR1ZskW%2ByVURN&X-Amz-Signature=e614820d90c64e1028693a72c3f2493806e9ee07bfd8eaaf3781ea5ccb6acca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWLKCVVA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKIQBf4fudaHeheHyEF%2FJgtk%2FHlxUZjmgy%2Frchs98G8gIhANXOTmtQSEC7p8byMl6d9ttXXQoE2xkfAys5eIqm8SFFKv8DCE8QABoMNjM3NDIzMTgzODA1IgyKI9UUMDPZFl0NZp4q3ANZwFch2LOYBT71lRkx47iP5Wi%2FeKZcWL%2Fdf%2FJMUoKT%2FR7PP6LWsMJPrP83%2F2bx4k99%2Fj03%2FTYFWv40oLUO4bTRhYCBa%2B82OzPxvJDFnd2VZZ1akIY8nKnocQu3sZJQpVXWpjGR5ujBCenRQzIuGeYUKfTXshrgIxxF8jRWlP1PnRbGfV7wVrcAHyAbeee2zRtB9qhY7oE6VYKwQUmvdEZrAJ1JM3IEGHzJfloAaRGUYgsKVACKQ4UGMs3DhZY1fhmh1togAm9pIzRJBegAyL%2BTIGIpHtlmxVmcrtsghEc1YQUG3gPd4kXXtL4%2FdTuCoIGNo02Y3rVgeVBwkqDp8vkgzUyTqb2XviBtHWv3Ues5gL2QWB5NgSsFOicAfIi%2BBhj0%2FWekh8yg79IpCitkddseKakzXO4Aviorh2L2xSyq5Qe7%2FyPD%2BuIn52jQSeuLqMX1Q2FYcK22ohyoezaW9d6DqT24h21u%2B%2FOF0R6wh%2BkNyn1DNt%2F2IXwZBlfFatYJcwT2zsHDofcoftJxhnKhZBV0hwrSZ%2BzVWT%2FyWq9UjQvrYJWk6Q3RlkN%2BVSrSquSFQnMVln%2BsuXLqQ1Zv7%2BqnWqNbv0X7bagabEpGnIRy%2BaTEoH45eoBWecPf5aL0DTD%2Fi8jJBjqkAZIeEVYMLs6M5LJcWKSED00MBNCPB9%2BwhiPLFo09sJXUxQBoBmqbNHI3XluGge1e4Cv24DwZuwQtLAi08oUwgYdNf0xXOGQ8wg19Bs25HnrA17YYdrNNBW6fc8HyVJUCrn659FhAt8x0bDl3Lkzyp6yfpLK8psPoJSbVTcaZpisuOFsMzXGmLD1EdMPuj52RhNxWdCgJOtdRtiBfR1ZskW%2ByVURN&X-Amz-Signature=902fba9796f2ec87ee77862563f351e0bcedb5c12c172ea14761f753386cb786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
