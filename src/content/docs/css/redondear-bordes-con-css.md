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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YATZXPQP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG97Wo8rPUcDR4bRt5RL04PTEnNQ8WPWFVjZYrQLbRQxAiB%2FTLancofJMSjn7VMBsqryKpGwsOK%2BkoBJqQtABw7adir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMjA7RhnG%2BLGsewzO8KtwD9krLNh0uttihFWlcOspfRCFSxd8TsAYS1Seisb9btCwidHMBXpSQpdjmjJZShJUgRWoWaI%2F1IgFbdC83xGCFS3pSuWq1dONpFixpceJoP%2FKo9D7CrWnjtVHZQoGxCvIRD%2FVt%2B6wbT1Sdpq4sjPUoqYn1P4YBHx0PXXWXEOka7K4pg82G73a0KLsvxfwKZseSi%2B6m785b2aKJScq4ermDytpSokTr47irQdDiTwAgurYmp683i9vuK2hAlFwBIiI0AXngx%2F3a9oxrEhbsGPM1rSFGLHG0TpPNbPYz9o7bp8JiPwN7FCAJYWrgKvHYaKcDbSNVbSQeMGYOTl7NltHh7KCOvRYT7JSFsFFFxiTd7kG9XRGmJVOWQwvqBYHxIk15kQS82atq3DrjA3ry8VYiiqIsLbEi2963snBVbKl449fKoy4ptMDwDBAS8bOrKnL%2FFzqrDvyIe4TEGU9v5uWvys4uO8hel57b6M6WQTagoU7Y1ijXlXv5x7JIG1CNc0W1%2F84UROWqD3zfCKkcj3CE8yNPuIP0O8exfQtteA8OxEpgV4gxrZWJcGcV88DIoGYvQfz3wkFNSXvtcKLrGurzYhB89%2Flz5RRABMX4U9iXJpQ7CBbZm9Ok4FlLWYIwpsPOyQY6pgHOfwY71%2BFWcvK4Q%2FJBh6dLCN%2BgYV5%2BF0pN2WnB%2BKBG1hrCAQluPXR59H70irJAqXOxWLYXF3xk%2BrCC5GIn9ddsC%2BL1fpTryM9luhqM8c5GzEPlcijrMcow6y7rQ2cdlGAsqPcTJmAUuNH%2FUf0f93X3fmXlLwIVh7kQOdKztkm%2BH8doR6ein8saOiL98pJhovO%2BPoRo8uf5i%2BRgLBKzIce9Ts9ETG69&X-Amz-Signature=0af97a1fbbca2689d201d20022ad57aa7fe54f0f1a2e5e2daaadae458c937f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YATZXPQP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG97Wo8rPUcDR4bRt5RL04PTEnNQ8WPWFVjZYrQLbRQxAiB%2FTLancofJMSjn7VMBsqryKpGwsOK%2BkoBJqQtABw7adir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMjA7RhnG%2BLGsewzO8KtwD9krLNh0uttihFWlcOspfRCFSxd8TsAYS1Seisb9btCwidHMBXpSQpdjmjJZShJUgRWoWaI%2F1IgFbdC83xGCFS3pSuWq1dONpFixpceJoP%2FKo9D7CrWnjtVHZQoGxCvIRD%2FVt%2B6wbT1Sdpq4sjPUoqYn1P4YBHx0PXXWXEOka7K4pg82G73a0KLsvxfwKZseSi%2B6m785b2aKJScq4ermDytpSokTr47irQdDiTwAgurYmp683i9vuK2hAlFwBIiI0AXngx%2F3a9oxrEhbsGPM1rSFGLHG0TpPNbPYz9o7bp8JiPwN7FCAJYWrgKvHYaKcDbSNVbSQeMGYOTl7NltHh7KCOvRYT7JSFsFFFxiTd7kG9XRGmJVOWQwvqBYHxIk15kQS82atq3DrjA3ry8VYiiqIsLbEi2963snBVbKl449fKoy4ptMDwDBAS8bOrKnL%2FFzqrDvyIe4TEGU9v5uWvys4uO8hel57b6M6WQTagoU7Y1ijXlXv5x7JIG1CNc0W1%2F84UROWqD3zfCKkcj3CE8yNPuIP0O8exfQtteA8OxEpgV4gxrZWJcGcV88DIoGYvQfz3wkFNSXvtcKLrGurzYhB89%2Flz5RRABMX4U9iXJpQ7CBbZm9Ok4FlLWYIwpsPOyQY6pgHOfwY71%2BFWcvK4Q%2FJBh6dLCN%2BgYV5%2BF0pN2WnB%2BKBG1hrCAQluPXR59H70irJAqXOxWLYXF3xk%2BrCC5GIn9ddsC%2BL1fpTryM9luhqM8c5GzEPlcijrMcow6y7rQ2cdlGAsqPcTJmAUuNH%2FUf0f93X3fmXlLwIVh7kQOdKztkm%2BH8doR6ein8saOiL98pJhovO%2BPoRo8uf5i%2BRgLBKzIce9Ts9ETG69&X-Amz-Signature=db0d51ac547edc101fab3fd89ee4f2e337bf99d8c2faf8392e75f187cd96a2da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
