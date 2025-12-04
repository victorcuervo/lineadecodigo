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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S224RLGM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCWigVaIOSpMev8aU4ExyYVeDeoCP7SXd1EqlEw7o6A7AIhAJpKcJKErGg71e5IhXr6nE3VxfIN8bbaRHqIWLm1h9mlKv8DCD0QABoMNjM3NDIzMTgzODA1IgzQV06Cpwg8K%2BZIAB4q3ANe5yhJkdZSJ1tG5aDdBKUMIUlHctS7YJiDw50lLeGRrjY7CF2F5g8UTcJ%2BEKJmMfGe65c7rWFiXejI0G3IP3ETiqg6E9eAx9jwyC5xwO8AcoZ32F%2BdZBX8SYlvkF%2FtnClF2ZHUPiGD82c3M6IkV31a19r6pTy54cS3SIyPYlU2QZnXrMQCPjaYrnIsOTKg0RJydE1ic4IKG%2BTUcxdl%2FXxXsmq2mPElWCIc4ihd6KItp9bw%2FmuXzg9%2Bug0dtxpThH3hjdizdgYDbtkOf2KjI0pdW9OrVIXH5YPyrHoRzQq%2BHZxxl3MO7RSzmeOx6Ye8J95h%2F3Ffh4pJj8sGlzYESSPtPnRS%2B%2BYVIj6ro9OdOl8aIGu1XoVMhByvrUjIDrTOGbHkTtQJ5wMx8kEOJF8IcuNpOXe%2B6UufwvAkC3oGtWyBBahT16ShPnovEkTpB3Aas8AjcgALgVbqvsmaHay7r61LhFc0IJdRkZa1X%2B4CqG8a4MnWPREHEi9LA%2BQRL7cXGb0%2BMtUscPPS7RABgy3npAZsZK9%2FcqE1vf%2Bcn9uGlyiK582yZOotklW%2FI3ghE6RWNijYsXC66svynshSBZGLCuF1SkiMVzzNtTJx594uwO8RfLnS71t81r9wFU1kSTDjkMTJBjqkAXwXSGi3vDcS%2Fx%2F%2Bk3pmnpQIGoIKcZGXcG4avhVyQ89UyOGQx1aMtEWmmzXR0Zl4H%2FqQdRdbwhVGG7%2FAs0DS9ZMvRWkhRtKL3nf8L9YAXxxF4d24oo0WYSL2xsqHpqBjsC%2F0S5ry3o4AU25iKygjuW5p05iQkbH8GhSH8UD72DDGrYwywAnAc45jP5gIQI6zASvHNSo1u1fcwc54szgjfvGKsx75&X-Amz-Signature=ec42597a349fea1cb10b3fa0c3be0eec98c3ceb6778631848fc5030d57552872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S224RLGM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCWigVaIOSpMev8aU4ExyYVeDeoCP7SXd1EqlEw7o6A7AIhAJpKcJKErGg71e5IhXr6nE3VxfIN8bbaRHqIWLm1h9mlKv8DCD0QABoMNjM3NDIzMTgzODA1IgzQV06Cpwg8K%2BZIAB4q3ANe5yhJkdZSJ1tG5aDdBKUMIUlHctS7YJiDw50lLeGRrjY7CF2F5g8UTcJ%2BEKJmMfGe65c7rWFiXejI0G3IP3ETiqg6E9eAx9jwyC5xwO8AcoZ32F%2BdZBX8SYlvkF%2FtnClF2ZHUPiGD82c3M6IkV31a19r6pTy54cS3SIyPYlU2QZnXrMQCPjaYrnIsOTKg0RJydE1ic4IKG%2BTUcxdl%2FXxXsmq2mPElWCIc4ihd6KItp9bw%2FmuXzg9%2Bug0dtxpThH3hjdizdgYDbtkOf2KjI0pdW9OrVIXH5YPyrHoRzQq%2BHZxxl3MO7RSzmeOx6Ye8J95h%2F3Ffh4pJj8sGlzYESSPtPnRS%2B%2BYVIj6ro9OdOl8aIGu1XoVMhByvrUjIDrTOGbHkTtQJ5wMx8kEOJF8IcuNpOXe%2B6UufwvAkC3oGtWyBBahT16ShPnovEkTpB3Aas8AjcgALgVbqvsmaHay7r61LhFc0IJdRkZa1X%2B4CqG8a4MnWPREHEi9LA%2BQRL7cXGb0%2BMtUscPPS7RABgy3npAZsZK9%2FcqE1vf%2Bcn9uGlyiK582yZOotklW%2FI3ghE6RWNijYsXC66svynshSBZGLCuF1SkiMVzzNtTJx594uwO8RfLnS71t81r9wFU1kSTDjkMTJBjqkAXwXSGi3vDcS%2Fx%2F%2Bk3pmnpQIGoIKcZGXcG4avhVyQ89UyOGQx1aMtEWmmzXR0Zl4H%2FqQdRdbwhVGG7%2FAs0DS9ZMvRWkhRtKL3nf8L9YAXxxF4d24oo0WYSL2xsqHpqBjsC%2F0S5ry3o4AU25iKygjuW5p05iQkbH8GhSH8UD72DDGrYwywAnAc45jP5gIQI6zASvHNSo1u1fcwc54szgjfvGKsx75&X-Amz-Signature=1e939985bc895c891aa46e4dd90b4f3aef623b7d1542c4e456e8e5635afa5680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
