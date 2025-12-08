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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVBTDDKJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGySkntajZNdBJfcCANgEvuBRZLwWe0zvr3YXexYWbLLAiEA8lDNJlqsvIDw9Kt4EnfxK0IOriIuc5G9BODMkn%2Fn%2FasqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrzot8eueObaoYOlircAz7ZMH79yM02NC%2BpmiUS8bqID5ZFss48wBbxQewSvYRVI2zMczh5VgFg6OjdERwsHt80ko6wVj8lL1279RgnxJf6f2w2a2X5Bh6zD4A%2Fde9dJADUDonCEkX7raRgcmUpzQOhomcu%2FhgSvWqBTcwBOgIThepTmRH1mcpcFk88ygoxTgjYDOKjUA%2B9MKbCn3vuWqBZLFc7h1%2FLBmobP4e%2F%2B7S82wEFTGhjpvckbsaRrejnyFDdoQMaYiLKN%2BtkgAXc0pmqII0w8oCPeaGLqKmvpbXGhyRJK97IXmDt9227wgdP6Uwn%2BdkP75pJNqKLcmQ%2FnsslBUuG1giM5VuI7nIAHzkqB2Lwg9gFPKMmbDtYVyFGPL2WmB%2FIFitDmS%2BbUTRqeBm6Rv3Xcul3%2BjOiaghZV5a7xMEOXLJxEhe0uLuUvKBNJGoChL4pFz7Vf3xKr3xnuZBrNtq215nzFABBv1%2FlsGh%2FCqguSztcVmeR56VjMckbfeZz2Ih70xsAhqb0DVQhWvVUsFsWHq9ai5cM7CMEFd1zW4ORkfsxaaFJiK6xNAnXHxhHqER3m4qaYq7WmXYOjoSNexJQWZeHY10Zl9%2FsSsMMmc3AySTa350PMsdiwN2Al7PPqvL8xkp0xFemMIGi3ckGOqUBe%2Fe84i%2FJ8%2Bn7GeC%2FyPPZ%2Be5S7bNlyDViCo5LP2wAKKwIlQZxAXYRUawkqAuSyRHZfyk41mrzEXiVJeQoQfojkQYXiTUr3MXMh7n2WY5Qmex8gGhYI3e1lBeLBEzI6s3LO8nn5tn0QyFaQvBB%2BIoC5x8KfFAnNcrZ8ciQ%2BNv7N18XlsubPQ6aX2kKMYJD8dZy%2F2oZ18Wr1XpCI6sMhTh7Pk2tj5sW&X-Amz-Signature=b543c3d14e9fef4b65351478d2f7b3495582eaf28d62ce16e85e17dc9f5ed4a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVBTDDKJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGySkntajZNdBJfcCANgEvuBRZLwWe0zvr3YXexYWbLLAiEA8lDNJlqsvIDw9Kt4EnfxK0IOriIuc5G9BODMkn%2Fn%2FasqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrzot8eueObaoYOlircAz7ZMH79yM02NC%2BpmiUS8bqID5ZFss48wBbxQewSvYRVI2zMczh5VgFg6OjdERwsHt80ko6wVj8lL1279RgnxJf6f2w2a2X5Bh6zD4A%2Fde9dJADUDonCEkX7raRgcmUpzQOhomcu%2FhgSvWqBTcwBOgIThepTmRH1mcpcFk88ygoxTgjYDOKjUA%2B9MKbCn3vuWqBZLFc7h1%2FLBmobP4e%2F%2B7S82wEFTGhjpvckbsaRrejnyFDdoQMaYiLKN%2BtkgAXc0pmqII0w8oCPeaGLqKmvpbXGhyRJK97IXmDt9227wgdP6Uwn%2BdkP75pJNqKLcmQ%2FnsslBUuG1giM5VuI7nIAHzkqB2Lwg9gFPKMmbDtYVyFGPL2WmB%2FIFitDmS%2BbUTRqeBm6Rv3Xcul3%2BjOiaghZV5a7xMEOXLJxEhe0uLuUvKBNJGoChL4pFz7Vf3xKr3xnuZBrNtq215nzFABBv1%2FlsGh%2FCqguSztcVmeR56VjMckbfeZz2Ih70xsAhqb0DVQhWvVUsFsWHq9ai5cM7CMEFd1zW4ORkfsxaaFJiK6xNAnXHxhHqER3m4qaYq7WmXYOjoSNexJQWZeHY10Zl9%2FsSsMMmc3AySTa350PMsdiwN2Al7PPqvL8xkp0xFemMIGi3ckGOqUBe%2Fe84i%2FJ8%2Bn7GeC%2FyPPZ%2Be5S7bNlyDViCo5LP2wAKKwIlQZxAXYRUawkqAuSyRHZfyk41mrzEXiVJeQoQfojkQYXiTUr3MXMh7n2WY5Qmex8gGhYI3e1lBeLBEzI6s3LO8nn5tn0QyFaQvBB%2BIoC5x8KfFAnNcrZ8ciQ%2BNv7N18XlsubPQ6aX2kKMYJD8dZy%2F2oZ18Wr1XpCI6sMhTh7Pk2tj5sW&X-Amz-Signature=4a1e2fbcbce8efef6d9ffe786804fe1d667e693a61de6f6adc7e526378604fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
