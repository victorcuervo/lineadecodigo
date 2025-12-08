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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLQS7P4S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwH00tYH9Q16k6ccHKSFEZ00vfvUJGsgtow0GCkiUrOAiB0dMec3c345U6YUmV2suI5S46f4PL3I2CzcwnZ6ZkQgyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BDLOt%2FWAankFkj1KtwDsRNQCCuLXFScbPnTdf4HotDuK6JZcMBIC0iX19CByGUIOps1h%2FnK9q6e8m%2F5vIO0cKHITTNkLYVRNJoOQkzjuspVC1NraXb1KmMHjnwrcDIi2wDBXYtPke25w370BNjrIkqcaSizXejXaDWtOSe0%2F%2BIucqAAZ3d7I1tEhvaqbXdBiH%2BRaGty9U4CfLjsvdz9HRvh5E6Hcn13kbl8VVk55ogqMSsvph2zZ6jrsryNSUhyMBbvifbcyi%2BHkLwG0L%2Bf2GJM27eydgwknyvzmB1BCizUYXdXZ3HuvLl67Zjbt2MLBmcpP4tM3L7hJnG2IgBinJ5B7rdtoFRZUuKO1vWSxGTxEra2k0ES5P3eT9stMCZNJ3OqZAfQQx0Jb3lqcDfQcMAw%2B9GbenkPOwbspANWYleooHM4X5OSgcqqdayVYcqW2ci3HY8myqn9%2FZnXMHIBD5isuFCV1Y7UnHuH6znAzZxQekKG1qafy9PqYcoW3PflsBj%2FLUOvYqLVC4%2BQ04A9i3QbUIls09Pv7sxDYyzW0vSbcr4PJ2eF7%2B9xj8zOxSwoo6XWHk8XnK1OSmyXjPVMNnfrJFRPdfe5v0mZ8O3SKI%2BQGhdpgBc8PFxNX7s9YQzlI2Iz0xu1hGE8KXMw0aHdyQY6pgFStWEyfaAVAx9Dn%2Bi7OqSCPXkgL9mADln81UOPbQu6%2FUVwAqeJqmLH%2BgRpJwifRHQbphHYWJ57BNHixPTddIXvTahpgOFa77%2FFvrpd%2Fygz2B8oGeJywJLALKpL4qveOf64u0%2BM9vM31AsQI67OXKaOHmOTV3OvTh4Sq%2FuYHPo9OVJs49jr9fz5xmZ%2Bzi82iRMbKFjEbt0wmqrX8%2FGCHFn2wsoRHMSb&X-Amz-Signature=c059d74c49c0bba717f27c68cfc96f3b17b5c0483f4aadddc3b5198ff121b882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLQS7P4S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwH00tYH9Q16k6ccHKSFEZ00vfvUJGsgtow0GCkiUrOAiB0dMec3c345U6YUmV2suI5S46f4PL3I2CzcwnZ6ZkQgyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu%2BDLOt%2FWAankFkj1KtwDsRNQCCuLXFScbPnTdf4HotDuK6JZcMBIC0iX19CByGUIOps1h%2FnK9q6e8m%2F5vIO0cKHITTNkLYVRNJoOQkzjuspVC1NraXb1KmMHjnwrcDIi2wDBXYtPke25w370BNjrIkqcaSizXejXaDWtOSe0%2F%2BIucqAAZ3d7I1tEhvaqbXdBiH%2BRaGty9U4CfLjsvdz9HRvh5E6Hcn13kbl8VVk55ogqMSsvph2zZ6jrsryNSUhyMBbvifbcyi%2BHkLwG0L%2Bf2GJM27eydgwknyvzmB1BCizUYXdXZ3HuvLl67Zjbt2MLBmcpP4tM3L7hJnG2IgBinJ5B7rdtoFRZUuKO1vWSxGTxEra2k0ES5P3eT9stMCZNJ3OqZAfQQx0Jb3lqcDfQcMAw%2B9GbenkPOwbspANWYleooHM4X5OSgcqqdayVYcqW2ci3HY8myqn9%2FZnXMHIBD5isuFCV1Y7UnHuH6znAzZxQekKG1qafy9PqYcoW3PflsBj%2FLUOvYqLVC4%2BQ04A9i3QbUIls09Pv7sxDYyzW0vSbcr4PJ2eF7%2B9xj8zOxSwoo6XWHk8XnK1OSmyXjPVMNnfrJFRPdfe5v0mZ8O3SKI%2BQGhdpgBc8PFxNX7s9YQzlI2Iz0xu1hGE8KXMw0aHdyQY6pgFStWEyfaAVAx9Dn%2Bi7OqSCPXkgL9mADln81UOPbQu6%2FUVwAqeJqmLH%2BgRpJwifRHQbphHYWJ57BNHixPTddIXvTahpgOFa77%2FFvrpd%2Fygz2B8oGeJywJLALKpL4qveOf64u0%2BM9vM31AsQI67OXKaOHmOTV3OvTh4Sq%2FuYHPo9OVJs49jr9fz5xmZ%2Bzi82iRMbKFjEbt0wmqrX8%2FGCHFn2wsoRHMSb&X-Amz-Signature=f39f95bd3ccaf57d35a2ba4a46a7e0dc56deb7036c23744a5e76fe685ed112f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
