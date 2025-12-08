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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TES7BJMK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW91g3Gwivja4xsJH%2FHlDDrj01L3cicdnv9VEoxB1KZQIhAJ9FPiV7Yp15h2R7%2B7p%2Bh0T53jJd4wXCzeluA%2FmoCt0NKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ%2FwyeUzTeQId%2B9HAq3APykz50DgPJSXdf9nI2aBstA4Wq9la9mN3hz%2BRwXBj9Ky1lXE4DpI%2BLZbvtw8IKv%2BpD5CzW2zlNqkxlOa98sYLrH4t7fJM47TEZfD0KIAVIO8zWn9w4qu28hAyeiS7Za4LPJs71vTH8mAuQGs0W8KQqKErvggt9D%2FzxLvnzGvhXTfH03SXoinrbtjbzRD2tO9WUXxvAseti%2ByGM25cpMweal3iuAg15k5TyaH85FEJRUMthX%2Fc2hEQexYjOgAlUWkCN6A9I09glLWaBjAxMUq5G3Zd%2B%2BBqFSWtL6gaBM9X7zP0HnphB5Psh7bfgt%2F6gp7BjUXjuipMatdrNcuHsmkt%2F3WqidgI4LiM1UXiJxPtKPPPQEeZj7qv793fC3WpJmQ26yIbkhWr9QzSHwXAG8tcCrOft5wHdwWNLvmYGN3tp3O5WuuvWISz%2BzEdN%2BI2gcAcUGOekh7C64vW0CSKNq0r21oVhetGYLFGX%2FlkqODD26uPZ7OPgCmgcrsRSVjMF9pd0ITefqROP%2Fhli986XZzKM4cFJ%2FZnPSt9OOUzTBuw1bQvkzrET6HqE%2FsV53RkXdyNyN9rFtM4k4jRdO08O%2BpX58EnLnVUQsRS1ljo28UrgcgXKu1zEOm6N7n5IvzDDs9zJBjqkATFHQCSriYFQ%2FEZWWPUCDJCe33PFTD03Wmw55PX53eHR5d6YHlQ5kcrQhpTRS%2FiJKLxZMlTexICmvzm6NgI5yo9ePBeoSbEL6pZXEcmD4wWmlG%2FnfvjEElOmhvzgvH1JKVlv2kllNerkpHkab%2BrtotO%2FCfCKMDU4ZEV35i%2BmjuynIFhFcnuJI8oQkSYwx537fSH%2BYNysWObqUtHaJeKEOJu0Uy%2Bv&X-Amz-Signature=a9d553673b6a8b19020bdb3256f9afe6994460e6cd206555d3fcca6871586d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TES7BJMK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW91g3Gwivja4xsJH%2FHlDDrj01L3cicdnv9VEoxB1KZQIhAJ9FPiV7Yp15h2R7%2B7p%2Bh0T53jJd4wXCzeluA%2FmoCt0NKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ%2FwyeUzTeQId%2B9HAq3APykz50DgPJSXdf9nI2aBstA4Wq9la9mN3hz%2BRwXBj9Ky1lXE4DpI%2BLZbvtw8IKv%2BpD5CzW2zlNqkxlOa98sYLrH4t7fJM47TEZfD0KIAVIO8zWn9w4qu28hAyeiS7Za4LPJs71vTH8mAuQGs0W8KQqKErvggt9D%2FzxLvnzGvhXTfH03SXoinrbtjbzRD2tO9WUXxvAseti%2ByGM25cpMweal3iuAg15k5TyaH85FEJRUMthX%2Fc2hEQexYjOgAlUWkCN6A9I09glLWaBjAxMUq5G3Zd%2B%2BBqFSWtL6gaBM9X7zP0HnphB5Psh7bfgt%2F6gp7BjUXjuipMatdrNcuHsmkt%2F3WqidgI4LiM1UXiJxPtKPPPQEeZj7qv793fC3WpJmQ26yIbkhWr9QzSHwXAG8tcCrOft5wHdwWNLvmYGN3tp3O5WuuvWISz%2BzEdN%2BI2gcAcUGOekh7C64vW0CSKNq0r21oVhetGYLFGX%2FlkqODD26uPZ7OPgCmgcrsRSVjMF9pd0ITefqROP%2Fhli986XZzKM4cFJ%2FZnPSt9OOUzTBuw1bQvkzrET6HqE%2FsV53RkXdyNyN9rFtM4k4jRdO08O%2BpX58EnLnVUQsRS1ljo28UrgcgXKu1zEOm6N7n5IvzDDs9zJBjqkATFHQCSriYFQ%2FEZWWPUCDJCe33PFTD03Wmw55PX53eHR5d6YHlQ5kcrQhpTRS%2FiJKLxZMlTexICmvzm6NgI5yo9ePBeoSbEL6pZXEcmD4wWmlG%2FnfvjEElOmhvzgvH1JKVlv2kllNerkpHkab%2BrtotO%2FCfCKMDU4ZEV35i%2BmjuynIFhFcnuJI8oQkSYwx537fSH%2BYNysWObqUtHaJeKEOJu0Uy%2Bv&X-Amz-Signature=85c681a236005a000fd69ad9bab1e1239fe7163a6f4c94479696f7f55ed94480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
