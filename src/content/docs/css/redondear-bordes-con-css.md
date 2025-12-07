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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIVCTNMY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfp9eRqjs9TLqCWLguHpUgA0WZaqo%2F2MPJw6nZKpmttwIgO2KHfYKweecujE9pzL3drILFy3QkVzwrUMMBzleTy4oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BBjD9s1tuXEA9BAyrcA8Z8ouRSBgXPc%2FRbkaV0ZXvUyvITnRDKuZMtwZn5PuUlfLCz4O9qa%2FZZbaCBgGT1cwHPpO%2BcSPWq9P7nfMXBI24LaQel4LJdt7rD%2BqUKmC3zc5CraYMrzPo%2BtHFPVSJrOHmInY%2BIE%2Fwu5zR9F%2B17XsipQL1hs3kWsp7RWKXoFwThHOJ8KMDafaMqK3mKHeeEf6vDqL%2FgsjbwR8yPOmtbq2bndJjFpm9Sd6F1C842f9gAk8IZ76X1dvjUKJC6L9sYbUQgM2aJNNHhl5QZtFnmrJA9KiJSPQ7LBBWdKav6fAE5EC5XKOQinYBxdhF0fJQcKq4%2Flihz47cYxPJrShZZIMruUDwQ4Y7WyHs9Zadz%2BqodCfGiaGzVtj7npveCyATpqx5dpMcVGDAdW03ePSqH7Q1E0K%2F%2F3mX62ACAdUqR0YlP7IWtwyzZU0tWauVtOdM94XGl0baBh3zsFGkFA%2FLqnFORDuxjnvVo16cmSttd%2FVWgx2VSkD5HL%2FCl0Aro%2FFB%2Fax6Igy%2F9SeIL4gGS58bsfIZXcMP3Xwdbm3e7p%2BHCyvcyzwklZMTWnOFGhglmGIaY5M6ND9ZjGmodwmiQzpsN%2Bd9vtmvjSPiS7nBdP5x2oJq%2FUaP2WZZgNK8Jy7Z%2BMI%2Bd1MkGOqUBf8wQX1XoYiuCd%2BJr%2BjG9A5DqGy8ecBhP5jyljn8UvS77b2O6G8NiN%2BJ0P1SwN3aJCoSl3kmuzRkui97R69NUnk%2BymlSCPiGxz%2FmugD1jvyAtUa4wkkaopzdv3CGZh7YeJye9eQEZZs%2BeROWff7ZooT6Me7Hg2TYk%2BKUyEjOrHElQMQuDuN64UxIrNJjno63kDKemOd2Mvp37ht3DSLtH89WQhY%2Fv&X-Amz-Signature=b07f27b17acfc8bb982bb6d0df15435d5c7fb2e7b58d03d3844bdda619177948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIVCTNMY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfp9eRqjs9TLqCWLguHpUgA0WZaqo%2F2MPJw6nZKpmttwIgO2KHfYKweecujE9pzL3drILFy3QkVzwrUMMBzleTy4oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BBjD9s1tuXEA9BAyrcA8Z8ouRSBgXPc%2FRbkaV0ZXvUyvITnRDKuZMtwZn5PuUlfLCz4O9qa%2FZZbaCBgGT1cwHPpO%2BcSPWq9P7nfMXBI24LaQel4LJdt7rD%2BqUKmC3zc5CraYMrzPo%2BtHFPVSJrOHmInY%2BIE%2Fwu5zR9F%2B17XsipQL1hs3kWsp7RWKXoFwThHOJ8KMDafaMqK3mKHeeEf6vDqL%2FgsjbwR8yPOmtbq2bndJjFpm9Sd6F1C842f9gAk8IZ76X1dvjUKJC6L9sYbUQgM2aJNNHhl5QZtFnmrJA9KiJSPQ7LBBWdKav6fAE5EC5XKOQinYBxdhF0fJQcKq4%2Flihz47cYxPJrShZZIMruUDwQ4Y7WyHs9Zadz%2BqodCfGiaGzVtj7npveCyATpqx5dpMcVGDAdW03ePSqH7Q1E0K%2F%2F3mX62ACAdUqR0YlP7IWtwyzZU0tWauVtOdM94XGl0baBh3zsFGkFA%2FLqnFORDuxjnvVo16cmSttd%2FVWgx2VSkD5HL%2FCl0Aro%2FFB%2Fax6Igy%2F9SeIL4gGS58bsfIZXcMP3Xwdbm3e7p%2BHCyvcyzwklZMTWnOFGhglmGIaY5M6ND9ZjGmodwmiQzpsN%2Bd9vtmvjSPiS7nBdP5x2oJq%2FUaP2WZZgNK8Jy7Z%2BMI%2Bd1MkGOqUBf8wQX1XoYiuCd%2BJr%2BjG9A5DqGy8ecBhP5jyljn8UvS77b2O6G8NiN%2BJ0P1SwN3aJCoSl3kmuzRkui97R69NUnk%2BymlSCPiGxz%2FmugD1jvyAtUa4wkkaopzdv3CGZh7YeJye9eQEZZs%2BeROWff7ZooT6Me7Hg2TYk%2BKUyEjOrHElQMQuDuN64UxIrNJjno63kDKemOd2Mvp37ht3DSLtH89WQhY%2Fv&X-Amz-Signature=428ad6f8a6a8a7165319f84e1890712f44e9bf95a02ad38b8caa18f80075d611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
