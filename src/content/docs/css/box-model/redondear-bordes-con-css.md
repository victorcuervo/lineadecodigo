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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPSL25Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvLNjwc%2FnIT5q%2F2mi7dOJkTScPooTuCuIvWW9wRvtdGAiEA5IKWrwutEaPQAFjDBY06rPCOwuPNvo2PqPUYYBxxiqsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDP3MKwojygefaeidZircA6KBdlDfn7Kjo1KD45Jpsp2ONf3aP%2FTPVBetSS%2BUyqqdzqP%2F2EjHuNoPPaAqsCkHuJUx3xVl6CFDljdW531O0UnKjw4ymkJPQtV4G2EK8kN0wjtaO3lhPrOZ57Tu6YK%2F%2Fa2Fh2CZzvqWbv1CmXETq1v7cUEPet%2B5GH8IuJYBByKYQ9ctYbQJ5tKlQ0A%2Fp72fNAg8CPQdNphhtBg89iOYTzYBcY%2BenbvyOGiLX7oK0aFCH1LaVd5uBTKpl5nHCCQ%2BMxytUCbslso6iUlfH7pk%2BkRlOEx6TKGZNxw21EKKKn5VAXXFQsz%2FREn2x0hb9Zg1LFt7oO%2FEbDAorpYkW22nuHvEtKkPcidHQfx9t6%2FCXN%2Fvrbsui5OGdk2%2BXJyq6rLOQ2UyhbsWU7LszDBhcxEx2DHEo%2F2NOP2ukvhZiz2EibDHErhJ1%2FeXY6eiXrwOIr3B4Fp2MbiVGxra4%2BA5NcOhNsKjlEddtfTBcLOLQcs31ZGCy1z%2Fjp%2F5UhLv3fTlV81QA0fmOvIeGTkoF0ZLAfI7QjUNd1j%2Fm7a8%2FWH0%2F5OG4nZM948Rj7qMOQXwM9FVN%2FyLzIQ9eQG%2BeSWL%2B3QFtCIEMpRsnnlrQdWDfO5PvDsO41OT4l7juG5QXUNx5R2MMNPwicoGOqUBQJ%2BIxySv4miFB9o6tiiALGH8LD2DpMMsB1dVmwZYymvE4Ai2lvn7bztEcJklbDLRKJNAUru6XbRe4OhWYgSvHhepPuLS%2FZA%2BAvBq8sEcr7Yg3znwIqHoC2NYUsLCSKZJEcVXdyspkL2P6B7q9nFcOlQQJTix%2BGgpQx6sp3jL7Ft1Nr00hNcUp9LQK0fQIcXn6dfiqKsem8kgjmciO1BgkXYjACvl&X-Amz-Signature=3d63e459fca1ddda982fba700bb5e5a24825f90ea5d6752741df14820484ed5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPSL25Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvLNjwc%2FnIT5q%2F2mi7dOJkTScPooTuCuIvWW9wRvtdGAiEA5IKWrwutEaPQAFjDBY06rPCOwuPNvo2PqPUYYBxxiqsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDP3MKwojygefaeidZircA6KBdlDfn7Kjo1KD45Jpsp2ONf3aP%2FTPVBetSS%2BUyqqdzqP%2F2EjHuNoPPaAqsCkHuJUx3xVl6CFDljdW531O0UnKjw4ymkJPQtV4G2EK8kN0wjtaO3lhPrOZ57Tu6YK%2F%2Fa2Fh2CZzvqWbv1CmXETq1v7cUEPet%2B5GH8IuJYBByKYQ9ctYbQJ5tKlQ0A%2Fp72fNAg8CPQdNphhtBg89iOYTzYBcY%2BenbvyOGiLX7oK0aFCH1LaVd5uBTKpl5nHCCQ%2BMxytUCbslso6iUlfH7pk%2BkRlOEx6TKGZNxw21EKKKn5VAXXFQsz%2FREn2x0hb9Zg1LFt7oO%2FEbDAorpYkW22nuHvEtKkPcidHQfx9t6%2FCXN%2Fvrbsui5OGdk2%2BXJyq6rLOQ2UyhbsWU7LszDBhcxEx2DHEo%2F2NOP2ukvhZiz2EibDHErhJ1%2FeXY6eiXrwOIr3B4Fp2MbiVGxra4%2BA5NcOhNsKjlEddtfTBcLOLQcs31ZGCy1z%2Fjp%2F5UhLv3fTlV81QA0fmOvIeGTkoF0ZLAfI7QjUNd1j%2Fm7a8%2FWH0%2F5OG4nZM948Rj7qMOQXwM9FVN%2FyLzIQ9eQG%2BeSWL%2B3QFtCIEMpRsnnlrQdWDfO5PvDsO41OT4l7juG5QXUNx5R2MMNPwicoGOqUBQJ%2BIxySv4miFB9o6tiiALGH8LD2DpMMsB1dVmwZYymvE4Ai2lvn7bztEcJklbDLRKJNAUru6XbRe4OhWYgSvHhepPuLS%2FZA%2BAvBq8sEcr7Yg3znwIqHoC2NYUsLCSKZJEcVXdyspkL2P6B7q9nFcOlQQJTix%2BGgpQx6sp3jL7Ft1Nr00hNcUp9LQK0fQIcXn6dfiqKsem8kgjmciO1BgkXYjACvl&X-Amz-Signature=3d40d59963a253247722df0a998113ba031081b320c4580f739e23f7d3dd1e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
