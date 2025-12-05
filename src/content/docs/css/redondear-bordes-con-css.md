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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWR3BHIQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNRdE8QINHsIhfTwIpy5WmJGBum4EUcNakqD914vA%2BgAIhAPyLQdJsh6PTWTJ5rLRy%2F8Meb4HosHTmZP3aNVfWj%2FqVKv8DCFsQABoMNjM3NDIzMTgzODA1IgzuPHEi%2FSSItWjhabUq3AN4AI3cGd8grALtAwwImlfyM6DSPbXkoSbcxrIFDAX6I6Zxw2MCnEag9ZtGnEDOc8Ex2fpUXvj9FKRkEz2R307UgnPaBxvovktbXv3FxFoqYogklfhLhcgWKlxOqGbclpH60XnT3MeUuOYLR%2BFhPfrcr5wn%2FzC0PwjWnos7Ou4PpRQOlD7gcVxlSrnnUrJR4nbWc%2FHDqz9hCf%2FyxC7z3eEi%2F2aiL%2BJsYLlhoNAFUYafvmL2P%2Fimgpo39l8gfDBw44I1ml0%2BULlLbAeZDt4qz8cP25K0cAkOksfJhh8LrntvLEMllu0pi4EP5QowUk3mOWZ8rn5iMbntIJpadZKEvVgQ9Vah0yqJ2qVW5Olp%2Ba7lvdyKCKbxC7UdEmZ01pjvGQjYLJvlJQ2ph8Bng6wqLMPgT0BmvKU%2FyIjyOmtCpu8sZTluRWDeD5hNA1Z7%2FN%2Bk4sA973OPbpmTjhitbEczz9dGAHfjdDVZCBhXUwsTYQcwednzmP%2FzlaTwkj4y2yOt9M78aRVcNRO%2Bld4jzHvGhxREZqOyDafgWGY%2F%2FPpCVSis64OuQ5x9R7aPDjen2Yc920SnyNu1CEuxLjTdvkODDqxQBAclsu1tzONw%2FUIotcHPhYeaMc9h1yKL1SiSpDDc1MrJBjqkASLt2s7KMuFbCb%2Bv80aXlF6OCqU%2FONAegP6pkRvJ%2FK%2Bwp1%2B13op9%2FMPxjzFf5WaTCIX6X3xwx0mYXWzF15ZYn%2FaiS2PzhUXOyv5JryXjWFLaDvJXXeTuz%2BVlD0T%2BWc6JWe0eICBfpkCkyZJGu3nReXhV8z765DSxZVac71deIPcbmGYvAXV8r1%2FI%2BB7VMwWR%2BBnb4fs8Uplqmzj0Pa4zcKAPQAUU&X-Amz-Signature=623e0cc43d40e01f726243ecc903325db9a2bf7ec95d957064d5aef0b083a046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWR3BHIQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNRdE8QINHsIhfTwIpy5WmJGBum4EUcNakqD914vA%2BgAIhAPyLQdJsh6PTWTJ5rLRy%2F8Meb4HosHTmZP3aNVfWj%2FqVKv8DCFsQABoMNjM3NDIzMTgzODA1IgzuPHEi%2FSSItWjhabUq3AN4AI3cGd8grALtAwwImlfyM6DSPbXkoSbcxrIFDAX6I6Zxw2MCnEag9ZtGnEDOc8Ex2fpUXvj9FKRkEz2R307UgnPaBxvovktbXv3FxFoqYogklfhLhcgWKlxOqGbclpH60XnT3MeUuOYLR%2BFhPfrcr5wn%2FzC0PwjWnos7Ou4PpRQOlD7gcVxlSrnnUrJR4nbWc%2FHDqz9hCf%2FyxC7z3eEi%2F2aiL%2BJsYLlhoNAFUYafvmL2P%2Fimgpo39l8gfDBw44I1ml0%2BULlLbAeZDt4qz8cP25K0cAkOksfJhh8LrntvLEMllu0pi4EP5QowUk3mOWZ8rn5iMbntIJpadZKEvVgQ9Vah0yqJ2qVW5Olp%2Ba7lvdyKCKbxC7UdEmZ01pjvGQjYLJvlJQ2ph8Bng6wqLMPgT0BmvKU%2FyIjyOmtCpu8sZTluRWDeD5hNA1Z7%2FN%2Bk4sA973OPbpmTjhitbEczz9dGAHfjdDVZCBhXUwsTYQcwednzmP%2FzlaTwkj4y2yOt9M78aRVcNRO%2Bld4jzHvGhxREZqOyDafgWGY%2F%2FPpCVSis64OuQ5x9R7aPDjen2Yc920SnyNu1CEuxLjTdvkODDqxQBAclsu1tzONw%2FUIotcHPhYeaMc9h1yKL1SiSpDDc1MrJBjqkASLt2s7KMuFbCb%2Bv80aXlF6OCqU%2FONAegP6pkRvJ%2FK%2Bwp1%2B13op9%2FMPxjzFf5WaTCIX6X3xwx0mYXWzF15ZYn%2FaiS2PzhUXOyv5JryXjWFLaDvJXXeTuz%2BVlD0T%2BWc6JWe0eICBfpkCkyZJGu3nReXhV8z765DSxZVac71deIPcbmGYvAXV8r1%2FI%2BB7VMwWR%2BBnb4fs8Uplqmzj0Pa4zcKAPQAUU&X-Amz-Signature=f11ec357b0e149cd91d1e166da6655f3b2f7cae296bbf8504599e31e0a96b774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
