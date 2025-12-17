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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYG76MM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExgPRUILYX%2F3xTpW0sD2T8xaeGg%2F6fEg0Ci2IJ2sbi5AiEA4RrAIP5H%2FJvGpHHAYAk4i4FpfhXhu7QyteWzT4V9%2F84q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBzSu%2FP91Y05c%2BPqACrcA6fvBLNavggTLOB4TX0DuuOUGOiREMFVAUa6hJtGyw3lEcGsR4wb8JAJzAaKjX5LHsb5jaOO7CiAvt1IvqG5aCxiRqdRaEzuJYDQaQRQjw5divbVM5losDD5%2BTn%2B%2BrXslRqZeYluKBCXVH9Mj32BRC410wlg0Wvy8LbnoxuD3AFmH1af%2Futu6VJKkQgvA8dooEJV0AXtGsPCH7hNA9B5sRLGJfZx4vZKUrFFA0LqOSb147Szs%2B6o%2BibNT40DzQ3f6pPQ3Y%2FjbI%2F5Rs3AfZB5Qmw9Ktqj3iCVUXdBVGbGss4J3ee7wbi5INIVqC%2B6ngzI1LKsU4CFGzZTuu%2BeWRxbyCQjsX7%2FsGBslqprk8kHc2T2CBqJEO4AMiNZ8rOZT%2FzGUeBIKYbWq%2FlC98xXrVajKt5HVOcEx4I%2B75%2BsucC9M2ZoeOxQejXf5XYW9ccDhKRy%2FjtZqb0xrBelOBZ%2FgiuWyGpGrqw%2FFKv0fUA9fZD1ouY%2BS9VN%2FwSSbyGJCKqoNcXa2NyNgW7%2FemYVG97cmvqaM5T36hQAm55pmgXCZRLUtEVKoVDdTJLM%2Fspk0XcHcn93qziqggSv8Qzd0ljzHkK%2FnCyWek8ewdvcU1LOQJixQNJUGqGDgyOEh9LVAtCsMLfSicoGOqUBlop4%2Bi%2BXh%2FWDtxktVTXPjUpo93Qt6bh0i04weCnCLm93LwHCYaTwErSuHa43mdrVQwCGnGbGQ0loiq5%2BOwJQ%2FJq94M009F2SHe9suXPSpQwxcT%2FJpV6zedUpMaliPkrpa3lyyU8cvr86lgMdCxpprJ1eHo3LV4tBDbhHFQUrCx9eM%2FX%2B6fTTmvcaWi9cvznqLPCH3wZ7RqtPzs8%2Bs1gW%2BL8rx2oe&X-Amz-Signature=ea9c1c5928053e7134ef1b5aaa10e27a9d44a2a6f412306c6f852dc3963b404d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYYG76MM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExgPRUILYX%2F3xTpW0sD2T8xaeGg%2F6fEg0Ci2IJ2sbi5AiEA4RrAIP5H%2FJvGpHHAYAk4i4FpfhXhu7QyteWzT4V9%2F84q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBzSu%2FP91Y05c%2BPqACrcA6fvBLNavggTLOB4TX0DuuOUGOiREMFVAUa6hJtGyw3lEcGsR4wb8JAJzAaKjX5LHsb5jaOO7CiAvt1IvqG5aCxiRqdRaEzuJYDQaQRQjw5divbVM5losDD5%2BTn%2B%2BrXslRqZeYluKBCXVH9Mj32BRC410wlg0Wvy8LbnoxuD3AFmH1af%2Futu6VJKkQgvA8dooEJV0AXtGsPCH7hNA9B5sRLGJfZx4vZKUrFFA0LqOSb147Szs%2B6o%2BibNT40DzQ3f6pPQ3Y%2FjbI%2F5Rs3AfZB5Qmw9Ktqj3iCVUXdBVGbGss4J3ee7wbi5INIVqC%2B6ngzI1LKsU4CFGzZTuu%2BeWRxbyCQjsX7%2FsGBslqprk8kHc2T2CBqJEO4AMiNZ8rOZT%2FzGUeBIKYbWq%2FlC98xXrVajKt5HVOcEx4I%2B75%2BsucC9M2ZoeOxQejXf5XYW9ccDhKRy%2FjtZqb0xrBelOBZ%2FgiuWyGpGrqw%2FFKv0fUA9fZD1ouY%2BS9VN%2FwSSbyGJCKqoNcXa2NyNgW7%2FemYVG97cmvqaM5T36hQAm55pmgXCZRLUtEVKoVDdTJLM%2Fspk0XcHcn93qziqggSv8Qzd0ljzHkK%2FnCyWek8ewdvcU1LOQJixQNJUGqGDgyOEh9LVAtCsMLfSicoGOqUBlop4%2Bi%2BXh%2FWDtxktVTXPjUpo93Qt6bh0i04weCnCLm93LwHCYaTwErSuHa43mdrVQwCGnGbGQ0loiq5%2BOwJQ%2FJq94M009F2SHe9suXPSpQwxcT%2FJpV6zedUpMaliPkrpa3lyyU8cvr86lgMdCxpprJ1eHo3LV4tBDbhHFQUrCx9eM%2FX%2B6fTTmvcaWi9cvznqLPCH3wZ7RqtPzs8%2Bs1gW%2BL8rx2oe&X-Amz-Signature=fa770abce3e85528dd09938b59ca19be15a90837dd42d541a7de0d9aec0e9027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
