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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKT2YUGZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAsxaMlTVyRqkvgtCCm%2FeBw%2FzxTP%2FaYpPhgC0W%2BEzhtCAiEAtzjLP%2FhRMLFuXkYPHdXE8jI65PI%2BzK9fNOpu82IAAd0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJYKz5uELvMzwkESYSrcA3AMrkHsZMh8mIb3YKsIkrBPmiN3DPe6bUSFcZZf5z8OIdwnaIgaW8H2l9QzXKz1cFgAXjqfWnIDiyuER%2FTr64%2FrokCUY2um%2F5PjnxAgnScEDa31k1LLtHeaKnT3kMqQ7svaod%2FWfoOc%2Feg5thTtGVybEpiB7RwOA53DanqMKUOwC5Es9BwFz%2FD6TynWxkgcqXjxzPc3zgUn7wIc8fIxVhc9shud%2FQ9QMDb9Za1Wz5FDMiQX07FtEXM%2BXiRWWX2dCjk84p0bo5H9xNgSxwtKs4p1W5oCA82qo9zMIZaSScYst8V0mwKLM%2BR0i32vOnxJ8mbTIJ2O%2B6Nbnp2VMN1cO8RQKE1C07JphN0Vu7nhYmZVep9Us647S%2Fs4SxEHzOQ3ALB109ljcsCje5Q5U5ecCuvSm7ff0ahzKCWRWXkjEH1EqMSWabkBVixudctNTQPzRUIiGSttdAnrqi1bGYpeKs06J3chCYQGvxCKT%2F%2ByLqyWbudLrD5wIp2s4GNLFEOk7ETYEC0NJGjCQTpJ9nyJPjuqF9KHId5JteuSW8aIwCN1gsOCOaGtOJOno95h5OZh%2Fpm8rbXCXJeguwgD4XQWD7CG8dZ%2BJgjtwMOgakRQs2RICmjbfutHhYP71GeoMNb4wskGOqUBGNlvscG%2FSQS2ubZL2G2iT6r97yT4TicoPufpVYML5Hcw%2FfAoz5lYlfkK46KCuAx9%2BtvgHG0IQAhSJgTSYUFfQgdR2oHV2GJmpo05S24fD96FOw2hla8Z9i02GVcX0pXPZ3dVLWe3M7taqDKnamHl4O3VLpaaS9OzCoSkoeJhy7oPOBbguVtDWz5hqWXDAZ132cFsBLtOLiu7EpLWp7aGlNtS9EQa&X-Amz-Signature=6acd233d68ee068e41e0f82e836a9ab3f260b6b7d19b1c475380746896fc52ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKT2YUGZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAsxaMlTVyRqkvgtCCm%2FeBw%2FzxTP%2FaYpPhgC0W%2BEzhtCAiEAtzjLP%2FhRMLFuXkYPHdXE8jI65PI%2BzK9fNOpu82IAAd0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJYKz5uELvMzwkESYSrcA3AMrkHsZMh8mIb3YKsIkrBPmiN3DPe6bUSFcZZf5z8OIdwnaIgaW8H2l9QzXKz1cFgAXjqfWnIDiyuER%2FTr64%2FrokCUY2um%2F5PjnxAgnScEDa31k1LLtHeaKnT3kMqQ7svaod%2FWfoOc%2Feg5thTtGVybEpiB7RwOA53DanqMKUOwC5Es9BwFz%2FD6TynWxkgcqXjxzPc3zgUn7wIc8fIxVhc9shud%2FQ9QMDb9Za1Wz5FDMiQX07FtEXM%2BXiRWWX2dCjk84p0bo5H9xNgSxwtKs4p1W5oCA82qo9zMIZaSScYst8V0mwKLM%2BR0i32vOnxJ8mbTIJ2O%2B6Nbnp2VMN1cO8RQKE1C07JphN0Vu7nhYmZVep9Us647S%2Fs4SxEHzOQ3ALB109ljcsCje5Q5U5ecCuvSm7ff0ahzKCWRWXkjEH1EqMSWabkBVixudctNTQPzRUIiGSttdAnrqi1bGYpeKs06J3chCYQGvxCKT%2F%2ByLqyWbudLrD5wIp2s4GNLFEOk7ETYEC0NJGjCQTpJ9nyJPjuqF9KHId5JteuSW8aIwCN1gsOCOaGtOJOno95h5OZh%2Fpm8rbXCXJeguwgD4XQWD7CG8dZ%2BJgjtwMOgakRQs2RICmjbfutHhYP71GeoMNb4wskGOqUBGNlvscG%2FSQS2ubZL2G2iT6r97yT4TicoPufpVYML5Hcw%2FfAoz5lYlfkK46KCuAx9%2BtvgHG0IQAhSJgTSYUFfQgdR2oHV2GJmpo05S24fD96FOw2hla8Z9i02GVcX0pXPZ3dVLWe3M7taqDKnamHl4O3VLpaaS9OzCoSkoeJhy7oPOBbguVtDWz5hqWXDAZ132cFsBLtOLiu7EpLWp7aGlNtS9EQa&X-Amz-Signature=78fd18b651b5f97dead67a6dd7b51d6d0b3a981f9c5512c6ad98034d396506bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
