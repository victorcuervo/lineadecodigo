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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKM3TFQH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDfYTQyM8sLzDtIi2PgDse23fmstrmWxmqQUFCVhrkkgIgJKmvyEUMTE7QEtdbDOCMLmiPH097kHuygK%2BHgga9PyMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHzCoQq3WKYBjUK7uyrcA3eDjtmaRjgvWY3t%2FC9%2B5nDvLPHfGExIcj9tqPkPBlmeqhq9G72gGvl11tP9WlaGu%2B0mmjoUB4QpFhzaKiQxW2BWb9SrxTgGN%2FvBRE9S%2F7DZVHb9zySA9O7Qcpzvw0e%2FKJcTM46fmcptAmKogawQ1uXyOtOSDfpLxmaS0Az%2F%2FfGWr9VOlvks%2FUsBJZCv8tNoHw48w7HwnHdRWW9Q20fvLTse5RoUEpxN5DhjJcKbsMnqguhFsEpK%2BG9yUzqQZiFTuFUP7FqmNeNDk6eYX5Mb98rcaBq9Tfc3VK5pdZkbuQHVCcqyTgWVNnZwoT98W1SCga%2BT58XkaPyh%2Bix239DupGmRUPOA%2BeNkdC5JhP%2F3AbhpE6oylX61gKzjBSbYzAranIXhOuV7vHTVx4ATKfSUzQGadmV8nS871XvY3OO1azh%2BrLC%2FJOarRDrE0hfDQ2Iz1ymiKLynTK1Tk8mQc8nq8ap3249a3WMmuN5MnNjdbWVkKfZ6zBbYk1Ciynlei4uDOrrWxKnyi%2Bpenf2cBChcPPP2uiI8tepThlgte%2BBHy86Uhhzo6LADh3f7GfBLP1DlGVZ655EaqQxBskox8q1pC97VIitq7fVfOSp6JkqUa0FUbffAhSXCtVu1RPMFMNy8z8kGOqUBabU5bV1ft41HaKtm7POaXiPhvw9H8moovtpS884fCpnuHwTZJb9gk%2BcCstDuy%2Bh%2Bh0cQay1vlZEyBGuUM6yoke%2FiDH50TuftdTKu3mhkw2Xus%2FkaEGiicCsqqMqUeBNFH7F6ObiO0qd1uSDFg71hmzWDGzV5vJRFWjXM1S3jThRoEIMNTNHrgpTkGBPBdANJWWsu6vuZJgCMxIR0ULVuNQOdVZxB&X-Amz-Signature=fbcea5fae7011cd0c50defb69b22e73662b28c84c277b06cafe2464d3f57925e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKM3TFQH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDfYTQyM8sLzDtIi2PgDse23fmstrmWxmqQUFCVhrkkgIgJKmvyEUMTE7QEtdbDOCMLmiPH097kHuygK%2BHgga9PyMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHzCoQq3WKYBjUK7uyrcA3eDjtmaRjgvWY3t%2FC9%2B5nDvLPHfGExIcj9tqPkPBlmeqhq9G72gGvl11tP9WlaGu%2B0mmjoUB4QpFhzaKiQxW2BWb9SrxTgGN%2FvBRE9S%2F7DZVHb9zySA9O7Qcpzvw0e%2FKJcTM46fmcptAmKogawQ1uXyOtOSDfpLxmaS0Az%2F%2FfGWr9VOlvks%2FUsBJZCv8tNoHw48w7HwnHdRWW9Q20fvLTse5RoUEpxN5DhjJcKbsMnqguhFsEpK%2BG9yUzqQZiFTuFUP7FqmNeNDk6eYX5Mb98rcaBq9Tfc3VK5pdZkbuQHVCcqyTgWVNnZwoT98W1SCga%2BT58XkaPyh%2Bix239DupGmRUPOA%2BeNkdC5JhP%2F3AbhpE6oylX61gKzjBSbYzAranIXhOuV7vHTVx4ATKfSUzQGadmV8nS871XvY3OO1azh%2BrLC%2FJOarRDrE0hfDQ2Iz1ymiKLynTK1Tk8mQc8nq8ap3249a3WMmuN5MnNjdbWVkKfZ6zBbYk1Ciynlei4uDOrrWxKnyi%2Bpenf2cBChcPPP2uiI8tepThlgte%2BBHy86Uhhzo6LADh3f7GfBLP1DlGVZ655EaqQxBskox8q1pC97VIitq7fVfOSp6JkqUa0FUbffAhSXCtVu1RPMFMNy8z8kGOqUBabU5bV1ft41HaKtm7POaXiPhvw9H8moovtpS884fCpnuHwTZJb9gk%2BcCstDuy%2Bh%2Bh0cQay1vlZEyBGuUM6yoke%2FiDH50TuftdTKu3mhkw2Xus%2FkaEGiicCsqqMqUeBNFH7F6ObiO0qd1uSDFg71hmzWDGzV5vJRFWjXM1S3jThRoEIMNTNHrgpTkGBPBdANJWWsu6vuZJgCMxIR0ULVuNQOdVZxB&X-Amz-Signature=0979301a852b04cf9431734ef56e2a7036f8e75f33cae6c925dd853f08a19be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
