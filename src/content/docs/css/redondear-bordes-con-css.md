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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672D5HW6C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqZ3UKEmoZhxRJj4ewbuclF9MvNE2njRfQ6WdaVBBPhAIgAg%2B%2B4dRP7XD2Csu3RaDE1%2BxcfSy9HBPYJ9SZbqLxQ54q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBfx3xMpWnJEI0%2B1pircA7I80XSHn0rxiBSWV3ypB69qWKS11o75I2ppm0Njvb%2FslOsgdNmqhu8nRNkTsKDjoFdgN%2Bjk8BvMucDYXAg%2Bjs%2FZPeecKeRuxhIu9Rk%2B1v%2F9TF3GNjxg2MCyBoy%2FeeVWRPSyANbdo6mp%2BAxOXQA37DRtFYJoz%2BFAAb%2Bbm6cl6Q6SFd0Edt5GaVIkfkVU1OPzpPIBMu58zTfD92HAedqHt%2BBybBrGQHaGuZq731WEmY%2FH4i6IOYQfVidGqRb4weQNCJlWtObPOrX6hlqbyW7aWxN0NQf1%2BaSu%2FfPJKDv4Byj0%2BIpF5GbhvXt%2BicAAuYFa2%2FfWc8I2OzTUFSgi%2ByU05vmULWd7AAvNk4lZdSlvwp5czSiwPqEFpDQb6PQ8Kpg%2BnQidBSshDb%2BObl9VG%2BhlKlxXtx12EjqyfyctXlCwjOdw4iE0ME9Jwy2j3QAL3mAEhfMSNizZo8EQsUKf0lquHI%2FvS8XsD5N1sIEYvFNzG6CWVCny7lOKlW9FTV6yI9P8NHV2XUnkATsuBpZBBm3KeOo776vaMTtT4%2BLyfJ%2Bg5j2%2FEjPXoDErG%2BDMpOApVMQ1lMvHYSMdZkTwldjoTHhjwhOJB3i6TpOsJ5NI1m%2BVpwnrqoBVGZMjWEEQQOZyMNbhy8kGOqUBktUxhy7KNyWOfMzE88jdLmZfPyUkkb%2BRAcyIwE0f5j2OkmBmSHho3CsfiPXK1lQIDeEvz6MrF3dTs%2F3DsSJfzBpPNiDDO6Y9RQP%2FYRF%2FimZcpzk7fi%2Bcs%2B55JEn2%2BflWa9Jzqpz%2FGUHrzGqXCJ7cda6tSzZozX5%2Fl%2Br3Vv2%2BTaqN5v1lzLC5TQXQChV0BFLnVywWrwvQnaztuBQ482xMBgegO8eN&X-Amz-Signature=6c2455333604534e67ccf670f99a232cbf96551c884b963b151cae3b7f894395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672D5HW6C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqZ3UKEmoZhxRJj4ewbuclF9MvNE2njRfQ6WdaVBBPhAIgAg%2B%2B4dRP7XD2Csu3RaDE1%2BxcfSy9HBPYJ9SZbqLxQ54q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBfx3xMpWnJEI0%2B1pircA7I80XSHn0rxiBSWV3ypB69qWKS11o75I2ppm0Njvb%2FslOsgdNmqhu8nRNkTsKDjoFdgN%2Bjk8BvMucDYXAg%2Bjs%2FZPeecKeRuxhIu9Rk%2B1v%2F9TF3GNjxg2MCyBoy%2FeeVWRPSyANbdo6mp%2BAxOXQA37DRtFYJoz%2BFAAb%2Bbm6cl6Q6SFd0Edt5GaVIkfkVU1OPzpPIBMu58zTfD92HAedqHt%2BBybBrGQHaGuZq731WEmY%2FH4i6IOYQfVidGqRb4weQNCJlWtObPOrX6hlqbyW7aWxN0NQf1%2BaSu%2FfPJKDv4Byj0%2BIpF5GbhvXt%2BicAAuYFa2%2FfWc8I2OzTUFSgi%2ByU05vmULWd7AAvNk4lZdSlvwp5czSiwPqEFpDQb6PQ8Kpg%2BnQidBSshDb%2BObl9VG%2BhlKlxXtx12EjqyfyctXlCwjOdw4iE0ME9Jwy2j3QAL3mAEhfMSNizZo8EQsUKf0lquHI%2FvS8XsD5N1sIEYvFNzG6CWVCny7lOKlW9FTV6yI9P8NHV2XUnkATsuBpZBBm3KeOo776vaMTtT4%2BLyfJ%2Bg5j2%2FEjPXoDErG%2BDMpOApVMQ1lMvHYSMdZkTwldjoTHhjwhOJB3i6TpOsJ5NI1m%2BVpwnrqoBVGZMjWEEQQOZyMNbhy8kGOqUBktUxhy7KNyWOfMzE88jdLmZfPyUkkb%2BRAcyIwE0f5j2OkmBmSHho3CsfiPXK1lQIDeEvz6MrF3dTs%2F3DsSJfzBpPNiDDO6Y9RQP%2FYRF%2FimZcpzk7fi%2Bcs%2B55JEn2%2BflWa9Jzqpz%2FGUHrzGqXCJ7cda6tSzZozX5%2Fl%2Br3Vv2%2BTaqN5v1lzLC5TQXQChV0BFLnVywWrwvQnaztuBQ482xMBgegO8eN&X-Amz-Signature=6d53ba34ca892e46b934c4f07d1c914ed20bb96375bc263287d78155d29b0815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
