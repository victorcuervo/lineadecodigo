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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURJWZB6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhAxY4UuQDdm3hguFfzol4MrU%2FdmeAsazg8JBME0bMBgIgUPEc1YeTnIOo%2BCc9SaiytHJRjRFL9EXVZpxcWJ2d0%2FQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPGWEMGF0mPEM0ZvQyrcA2o2%2BxSWBWJUc9cpFn6NepnFk5U4NSjRC9ofEOLBwuQ2EOmNHEmC3FmXL10Jd4BNeNUkKAbrcx2GiZgD2mhGa%2BoiZUp5jiAoWDiPycsOMza%2Ff5bgNKPJURvX0gqK4XAZ3bPVuytm4z8dYDK8y0RGgs1Fal3vZ5SfuZSchJd2RTM0Cd30VM6sKS68SmTBVaBLIfCZ5SXUmJhBTAJ8%2FEB2PhLOf53WTML5agD7HhRsiXzDOoPFqWzEY1rEhc48M%2BbBJwDKmq8dhgGxpjjatazsS32mDhP86GTnRSDQa73fNHiH0%2Bc%2Fcwxgno125kwxwYAZ6WwdVIJeSyEb%2Fi3YFdNeALXSiG5VxWNrcAOoSFeF9QJFmqpOnmvi%2BAdrSQQcdbaOL4IpFpLHaNseeTqV4WCUR9rUOsa028noQtaNwRVbGOs9fken8%2BMEX8w9jXzGszywxALkt%2BRnvLbOE44ZAQpWvs636J4iDX9%2BcGPSFyyFU486HCKUvLMMhmFEaoy4ieblNVXn9unIpYIg7bYZGJybJXt4bFtT5r%2F%2BQVSm0Oskd9RC77QrtdDmUJLR9qkeeTRnN33WFP8sHq3dGoyQIm2de%2B%2Fs7Xjx6x3Io0PkS9N1uQA2XutwYvWTrbfjSqItMK64icoGOqUBXRjPa%2Ft9CCz9tRgkYc2XUsjPliwaCxett4jsE9NSy%2BLVMOjZaOs0hI%2FDoXo9quX9fjlUFDoTqAawpexOfLYr3inly%2FpJTtr%2B2zsyrLN2UZ%2FkHYcJhTw8FTD35njvNZz3LNmz6neoObPL%2BVr60Tw4yj2R5HrbPkepM2zQmcjrNeqeK0mSuKxnqZgOaZoXbVoxVejIIy5cVQEnPyuyjp%2BonckgrKoG&X-Amz-Signature=ef8b4ea47f8b4090c774d286f17d7ba189acbbdc0a98623782ef66c1d58953d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURJWZB6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhAxY4UuQDdm3hguFfzol4MrU%2FdmeAsazg8JBME0bMBgIgUPEc1YeTnIOo%2BCc9SaiytHJRjRFL9EXVZpxcWJ2d0%2FQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPGWEMGF0mPEM0ZvQyrcA2o2%2BxSWBWJUc9cpFn6NepnFk5U4NSjRC9ofEOLBwuQ2EOmNHEmC3FmXL10Jd4BNeNUkKAbrcx2GiZgD2mhGa%2BoiZUp5jiAoWDiPycsOMza%2Ff5bgNKPJURvX0gqK4XAZ3bPVuytm4z8dYDK8y0RGgs1Fal3vZ5SfuZSchJd2RTM0Cd30VM6sKS68SmTBVaBLIfCZ5SXUmJhBTAJ8%2FEB2PhLOf53WTML5agD7HhRsiXzDOoPFqWzEY1rEhc48M%2BbBJwDKmq8dhgGxpjjatazsS32mDhP86GTnRSDQa73fNHiH0%2Bc%2Fcwxgno125kwxwYAZ6WwdVIJeSyEb%2Fi3YFdNeALXSiG5VxWNrcAOoSFeF9QJFmqpOnmvi%2BAdrSQQcdbaOL4IpFpLHaNseeTqV4WCUR9rUOsa028noQtaNwRVbGOs9fken8%2BMEX8w9jXzGszywxALkt%2BRnvLbOE44ZAQpWvs636J4iDX9%2BcGPSFyyFU486HCKUvLMMhmFEaoy4ieblNVXn9unIpYIg7bYZGJybJXt4bFtT5r%2F%2BQVSm0Oskd9RC77QrtdDmUJLR9qkeeTRnN33WFP8sHq3dGoyQIm2de%2B%2Fs7Xjx6x3Io0PkS9N1uQA2XutwYvWTrbfjSqItMK64icoGOqUBXRjPa%2Ft9CCz9tRgkYc2XUsjPliwaCxett4jsE9NSy%2BLVMOjZaOs0hI%2FDoXo9quX9fjlUFDoTqAawpexOfLYr3inly%2FpJTtr%2B2zsyrLN2UZ%2FkHYcJhTw8FTD35njvNZz3LNmz6neoObPL%2BVr60Tw4yj2R5HrbPkepM2zQmcjrNeqeK0mSuKxnqZgOaZoXbVoxVejIIy5cVQEnPyuyjp%2BonckgrKoG&X-Amz-Signature=2b69ab1bce163352cfc0f9915b194c0309cb937c1752902d5e3aacc09feabfb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
