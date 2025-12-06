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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U24KQX5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKMYGS6nAGgu0RcVJ4mWLvt1NDlsq8EhX3vng2BTgFuAiEA%2FDV20y6YdJc2W59ghayb9K9Ej8lO43ot947I3bj7eLUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDNFVZcwwW9Huw%2BlZdSrcA9gNCWooHK%2F9Adheo75JVFUoZWoLDIBxvCSRP9QjjQdktf%2BTygnKf8bydON%2BmuqQUTQqtE2uc0NyaGaHVK%2BbWdN11p5R7pliHgyCq1AkEWQEAYZ%2Fqjh%2BWgRcA0mmzTsIQ3XW4frGf%2BzXCFHeBWk9742cRoFyJS3Fnvzo1MvUN%2BkLPskkU632HjELesagDfDrp%2BCaKjinqGTWfbdJsqbnWKO4I3sUWm6yOFsoeFnSJadySc4sqyfTSWzNYkEISzwnOTSylb7cYDoveX78fMD6oER%2FYrIdObNjQ5wP%2BTpsjbfMWq21PBOF4tqOgZDDqMGWh%2B%2F1CkqiVCPTrYlbfQYj8FDGEbLHNH%2F6r2ivKQnHje73IhcXsv5ib85t%2B64K%2BadiKMw9otac3Ydqp0C1X985k%2BxOj9b7GMqYR0mBGYnuYwNI7rmYf4x6N6JpL7T%2FeQhHji5r9Qg7d0g5oIlMxinywVF04ZWpzgGUrpS6bbO7EEDv9PwFnzIeVQFZPqv89lHPF24EbVUCoUTL8YQWLF6PL4zxX0VQ59%2FWMnQAQmHrvkBDtxG9cQ496Q1vjwOmV%2FChYLiMiIJS8EAb2u30Fo5gDqLRfXYVYr0BoY%2BJwi7KQ%2FTcKYf33PffA3PHrTu5MMrozckGOqUBFTq6SQH4YRgkzY2ZP9HOrlM87CdRUQ3lxZaHxTI0peTsdpPRIwpdeXW1VDCncMRTAQMvZz5bA87c%2B8qBSGg6zu294lkaNzNLORyYI0rzsfF0LoWzz1zQNU%2FHQvw1VFs1rbt29oG%2Fx3IoGJgbVbqegBXYRfPxTSRsCxCKap16SzC9urILOajdawI%2F1nxl7uE%2FdTo0%2F8EB8R2%2BKJRnIwTUmN8dQBxd&X-Amz-Signature=7a962aaf619e1189fe0dd92186d68d70f0a42bd051e73ac7ca19452f052c8757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U24KQX5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKMYGS6nAGgu0RcVJ4mWLvt1NDlsq8EhX3vng2BTgFuAiEA%2FDV20y6YdJc2W59ghayb9K9Ej8lO43ot947I3bj7eLUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDNFVZcwwW9Huw%2BlZdSrcA9gNCWooHK%2F9Adheo75JVFUoZWoLDIBxvCSRP9QjjQdktf%2BTygnKf8bydON%2BmuqQUTQqtE2uc0NyaGaHVK%2BbWdN11p5R7pliHgyCq1AkEWQEAYZ%2Fqjh%2BWgRcA0mmzTsIQ3XW4frGf%2BzXCFHeBWk9742cRoFyJS3Fnvzo1MvUN%2BkLPskkU632HjELesagDfDrp%2BCaKjinqGTWfbdJsqbnWKO4I3sUWm6yOFsoeFnSJadySc4sqyfTSWzNYkEISzwnOTSylb7cYDoveX78fMD6oER%2FYrIdObNjQ5wP%2BTpsjbfMWq21PBOF4tqOgZDDqMGWh%2B%2F1CkqiVCPTrYlbfQYj8FDGEbLHNH%2F6r2ivKQnHje73IhcXsv5ib85t%2B64K%2BadiKMw9otac3Ydqp0C1X985k%2BxOj9b7GMqYR0mBGYnuYwNI7rmYf4x6N6JpL7T%2FeQhHji5r9Qg7d0g5oIlMxinywVF04ZWpzgGUrpS6bbO7EEDv9PwFnzIeVQFZPqv89lHPF24EbVUCoUTL8YQWLF6PL4zxX0VQ59%2FWMnQAQmHrvkBDtxG9cQ496Q1vjwOmV%2FChYLiMiIJS8EAb2u30Fo5gDqLRfXYVYr0BoY%2BJwi7KQ%2FTcKYf33PffA3PHrTu5MMrozckGOqUBFTq6SQH4YRgkzY2ZP9HOrlM87CdRUQ3lxZaHxTI0peTsdpPRIwpdeXW1VDCncMRTAQMvZz5bA87c%2B8qBSGg6zu294lkaNzNLORyYI0rzsfF0LoWzz1zQNU%2FHQvw1VFs1rbt29oG%2Fx3IoGJgbVbqegBXYRfPxTSRsCxCKap16SzC9urILOajdawI%2F1nxl7uE%2FdTo0%2F8EB8R2%2BKJRnIwTUmN8dQBxd&X-Amz-Signature=be783110fa876728e88f67e0dd26ae0a0480d2d6fb6791f0dcda5a908f85f77f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
