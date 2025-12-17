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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCWPPK5Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYcse%2Fa9NtsXMRIsrIri1Vd7NDy%2B%2F7P9vODDpeZKe%2BdwIgVsjRi8mvBBkXLpKnqKyYKDuBNS51EKPPgTJNa7F%2FEgkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMnRNJaAQNTP5Mj2SCrcA7SHwk%2FwY%2BtqMhgcIbRyIc%2BNuE2D7Wt79IrecBJ0EFD7AvWQM%2BgdiXq%2FSKqo2ghl8Z%2BHpGjWg%2BlW8u7A6cawKhFHwgwp5ys54ECkjQyL2p0i7Nh3O4KGKy%2FrH6wya7hPv7lP92cAAztSUAjken%2BjjVuqYbp47KUHkmPePL1UzmSBvY0JIH6CL%2B9Rss8AL6vL36dhHSpf5tdVXC2ZER0vtaIjQ9uT24BAoxCJvQ%2FMlK1dIlGeYvOkArdTIKNs4Hxt8nbUfgOxYoqARMMoUs%2Fq%2F4%2BaPyp3Rv%2Bw0382j7FtJ6ixGP%2FkwGt9GkxJYWfTRDGrD3p%2F9UaWIaJQlskyWXPGZswyiktVWXGIiRXfkbvM4twD9SgeUEsWAhydhhOcYacTC8fNSf7YNHa3DDPq4YMeKZPrEa%2BzpNXIdcgH8%2FTtzSz7nV6zx2zUj%2FzPRMiHzic5LAOOgS9XhTVDGxzzfSD%2BlGkfamm4srC4F9SGd3bjQcu%2B3QblN9ujVDiDbbvdPtAJ20806nTKFmTBHh64%2FVn8LFuZPR1bYp5wavWDOitAmRsCEYYK9qtsLFDBFNJRLjLAastFGDZLW5O5eKpscuQMUFEqthJE2Q%2Fh9ZVu7stdvSSIt67X4jdZS3Zz%2BJqoMJ2DicoGOqUBTLBbypyXs9dqEX7npplh9fiduw%2BGLaCmuM08FtHauENidxcIoBNHqqPFJiUNSFHt%2BqKQD4qwtAoW4aH33A5CAwwPTfXVEPkiJ8lS7s%2FN%2FvXrh1dNzYXr4Fw%2FewcSJ%2BE85otdVg8te2gFjK8XQwfmvHNMzA9ZKOtQxWBrluvT5C1dKl6Dx%2FMqFLgnEsKQhRDx69PYg54wNfueDqESj1HDyi2M%2FSw3&X-Amz-Signature=5610e9d6d418d307dcb89fd1cf62ff5ecab33cf3561d40d6737db9d188c143a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCWPPK5Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYcse%2Fa9NtsXMRIsrIri1Vd7NDy%2B%2F7P9vODDpeZKe%2BdwIgVsjRi8mvBBkXLpKnqKyYKDuBNS51EKPPgTJNa7F%2FEgkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMnRNJaAQNTP5Mj2SCrcA7SHwk%2FwY%2BtqMhgcIbRyIc%2BNuE2D7Wt79IrecBJ0EFD7AvWQM%2BgdiXq%2FSKqo2ghl8Z%2BHpGjWg%2BlW8u7A6cawKhFHwgwp5ys54ECkjQyL2p0i7Nh3O4KGKy%2FrH6wya7hPv7lP92cAAztSUAjken%2BjjVuqYbp47KUHkmPePL1UzmSBvY0JIH6CL%2B9Rss8AL6vL36dhHSpf5tdVXC2ZER0vtaIjQ9uT24BAoxCJvQ%2FMlK1dIlGeYvOkArdTIKNs4Hxt8nbUfgOxYoqARMMoUs%2Fq%2F4%2BaPyp3Rv%2Bw0382j7FtJ6ixGP%2FkwGt9GkxJYWfTRDGrD3p%2F9UaWIaJQlskyWXPGZswyiktVWXGIiRXfkbvM4twD9SgeUEsWAhydhhOcYacTC8fNSf7YNHa3DDPq4YMeKZPrEa%2BzpNXIdcgH8%2FTtzSz7nV6zx2zUj%2FzPRMiHzic5LAOOgS9XhTVDGxzzfSD%2BlGkfamm4srC4F9SGd3bjQcu%2B3QblN9ujVDiDbbvdPtAJ20806nTKFmTBHh64%2FVn8LFuZPR1bYp5wavWDOitAmRsCEYYK9qtsLFDBFNJRLjLAastFGDZLW5O5eKpscuQMUFEqthJE2Q%2Fh9ZVu7stdvSSIt67X4jdZS3Zz%2BJqoMJ2DicoGOqUBTLBbypyXs9dqEX7npplh9fiduw%2BGLaCmuM08FtHauENidxcIoBNHqqPFJiUNSFHt%2BqKQD4qwtAoW4aH33A5CAwwPTfXVEPkiJ8lS7s%2FN%2FvXrh1dNzYXr4Fw%2FewcSJ%2BE85otdVg8te2gFjK8XQwfmvHNMzA9ZKOtQxWBrluvT5C1dKl6Dx%2FMqFLgnEsKQhRDx69PYg54wNfueDqESj1HDyi2M%2FSw3&X-Amz-Signature=2b635ca2a01cb6bb7375df4714339c591a5ae84850da47518d34ff440719cae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
