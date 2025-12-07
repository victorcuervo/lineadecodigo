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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN454UTF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9ceXQh60jCjpydPnWuTHQD8QuC3BHJuy2ikeGjpyoXAiEA1O2ltJGA2H%2BQHsSYB%2FIw8xbx1yuZBFbU2P618kauOIIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaxUU6g2D63%2FvWEiyrcA1wL32v5KyKQGepSGWW%2BAWTRdRe2kMaO0SoKdu%2Fgtz8pNGQupb21GhRkgimpMPG5cQzICIT22jZsdiA2yweHtw0M6p%2FJBLgKZ5DJLyd5IB43vxZvXjZFoaVUflYNSYvjK%2BmRsrX3TI1sE1zy6A2fvcuQcFMezLSvz2migL6RZfgcrJLbibJirjvfuVGl3QZRz3XAx65lXjOXb%2BSM1f4%2B3EOz5sptbcIVoMdZuimW%2F88H9UTztn87MJQoVjiBivep%2FKzuprAJHWgC3Q8QmaY1vtflGvX3Jl56gcY2ctyNiF%2BnaToHNqDjFTsUuu8wMBHyCSwO0KtXn6Nc9OgPwV5oKa%2BX78e1ywav5EwCv%2FsaF6AvigPP3HsY6QUDbWM2Y3I137gwUk3vZtMbhWQuWlENdyXx0P1LuhzIypVmJzC4q8hPaSs4nw6v7RDTkObTufQVHXDzACd0QneScKh3KUyyBDzrjr0lPwRRh8DMREU6caaN%2Bxl9oyj03URUdypI9pe6wMDZ4N5GEhtj08Okx%2BfLmtHgSRYJJH65k8qxJRaabEfVqDYxMHO2AqZr28QFpC0GNxNLAM4Nmd66CqGh5%2FkZeS%2B9r7E%2F%2FsBElCLsFuLKh4yx%2BBjqwawDUsJdG4UQMMqo18kGOqUBj5NRNjHIa0437tbOH7Ybj%2FrFRI4%2FrY6%2FepVitqiYDpzgZXwSEP78t2GbYLksKh3GBuIJh8tcD12vHhhm4DIKIhoGt7ChphH%2BAksLXwcqPDSTk0WjyBLjdUhXyUzcPBTRVhf8LZT79%2BhjKnESa5vTuIiXHjACKpTLy85KuGJ3Mn0n1Iv%2BaXfA8c2XSt%2FCzTgk%2FyQafTVj%2B78pMz8X5AQCXGZrx9Ef&X-Amz-Signature=c82027fe0894affbe972e07929c2f3a54dc27b1d7dafc47c759cb882d61f5c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN454UTF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9ceXQh60jCjpydPnWuTHQD8QuC3BHJuy2ikeGjpyoXAiEA1O2ltJGA2H%2BQHsSYB%2FIw8xbx1yuZBFbU2P618kauOIIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaxUU6g2D63%2FvWEiyrcA1wL32v5KyKQGepSGWW%2BAWTRdRe2kMaO0SoKdu%2Fgtz8pNGQupb21GhRkgimpMPG5cQzICIT22jZsdiA2yweHtw0M6p%2FJBLgKZ5DJLyd5IB43vxZvXjZFoaVUflYNSYvjK%2BmRsrX3TI1sE1zy6A2fvcuQcFMezLSvz2migL6RZfgcrJLbibJirjvfuVGl3QZRz3XAx65lXjOXb%2BSM1f4%2B3EOz5sptbcIVoMdZuimW%2F88H9UTztn87MJQoVjiBivep%2FKzuprAJHWgC3Q8QmaY1vtflGvX3Jl56gcY2ctyNiF%2BnaToHNqDjFTsUuu8wMBHyCSwO0KtXn6Nc9OgPwV5oKa%2BX78e1ywav5EwCv%2FsaF6AvigPP3HsY6QUDbWM2Y3I137gwUk3vZtMbhWQuWlENdyXx0P1LuhzIypVmJzC4q8hPaSs4nw6v7RDTkObTufQVHXDzACd0QneScKh3KUyyBDzrjr0lPwRRh8DMREU6caaN%2Bxl9oyj03URUdypI9pe6wMDZ4N5GEhtj08Okx%2BfLmtHgSRYJJH65k8qxJRaabEfVqDYxMHO2AqZr28QFpC0GNxNLAM4Nmd66CqGh5%2FkZeS%2B9r7E%2F%2FsBElCLsFuLKh4yx%2BBjqwawDUsJdG4UQMMqo18kGOqUBj5NRNjHIa0437tbOH7Ybj%2FrFRI4%2FrY6%2FepVitqiYDpzgZXwSEP78t2GbYLksKh3GBuIJh8tcD12vHhhm4DIKIhoGt7ChphH%2BAksLXwcqPDSTk0WjyBLjdUhXyUzcPBTRVhf8LZT79%2BhjKnESa5vTuIiXHjACKpTLy85KuGJ3Mn0n1Iv%2BaXfA8c2XSt%2FCzTgk%2FyQafTVj%2B78pMz8X5AQCXGZrx9Ef&X-Amz-Signature=47689231fb37004ade701456752d984817e00f29dea1e58d1a5f14a1fd13d207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
