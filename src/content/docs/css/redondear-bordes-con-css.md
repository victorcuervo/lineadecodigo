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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WKLOXB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd3Nef24Eo65cdPw0UktEeqITv%2BQRDF1FyyuhsOuL0oAIhAKiwMYfTFdRu3WPctebs9pvNmsc0HbOFb1R2HhmMpto0Kv8DCE8QABoMNjM3NDIzMTgzODA1IgyKzs%2BhvC3fp8FfR9Eq3APlOV%2FeN6HuPz2qDiHQNP%2Fbg8PLp85mnbviAjogmPOxY88ejUipw7Ev%2Fl1nKWg%2FfMEpxzZiQgyasyTyzisl1PsP7yDn1rwF6fWAxFAXxl0QwbB8UVoAxYXEZ8iiM39HKFy2PvBfctPcNcaUm1Gx0upQpjdmIuNKR0b1qhFBPBUZeDJ4KJUtiHfAaL5zMLRgsX7tO4xk1x%2FffRE2GCJPDBma5qIUP6CeBrI%2BDIQMWhemol0eoCl6yUdQ4vG72rGkoXdMA5UhY6cV2ASPUkmJDy9kG3kkY1Nad9WIIwCXM7vSBo1kH4oOQT7twgiyq9tWw2P3YxDWwuhNQKytLYK4JKwmGuszTaOE%2BK6CZfAzi9%2B%2Bi6NFab9HQONfAGY9ylhYKRYvvYPctj3hZ2%2FjSkuTWnCFGiy0QoHIME0vtiDM3C721cwqBE2pm4T76rDLr7%2BxAJmF%2B04ekeNaMRT%2B%2BKnst1r9kB2q%2FLmyIAiQtm5bg%2BffGwjxZi8o6Qd6IYbxqXoUh1NhmRxquOnBJmLa2UPUeYo6a092vchzWxlAJCVdXC80iT2GCy8Y96Nq4WPAvKSvYyWm9FlgeYPEKuaeZDmEEEpGtnkx5b593c1BUohW4FvqtETeajHA211R%2BAtHMTCAjMjJBjqkAU%2BrSISWpEzAL1EuXcg1NdwndGch9bakIqfwJZX6LQgaFn3zyyyjSF3EBnEUCGZ9BJsWlLrhhIJuKiKH%2BJm0Cp%2Bkbi8x6Uao4IviOeJ8kN07Fduc%2FrUuHtZ764j7mkpedvgpE%2Fw5AvXV16T3lylurYzNzF00QiK9X7RnGxnldttfMA3uK7iAtVptDFRZ6uYq4nRfJWkogdUQrEt%2BZhEFFg%2BG5ZfF&X-Amz-Signature=ca0b87f5190d1f6fc78856c40f82a46c3693439652dceae8191c52b8f353f2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WKLOXB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd3Nef24Eo65cdPw0UktEeqITv%2BQRDF1FyyuhsOuL0oAIhAKiwMYfTFdRu3WPctebs9pvNmsc0HbOFb1R2HhmMpto0Kv8DCE8QABoMNjM3NDIzMTgzODA1IgyKzs%2BhvC3fp8FfR9Eq3APlOV%2FeN6HuPz2qDiHQNP%2Fbg8PLp85mnbviAjogmPOxY88ejUipw7Ev%2Fl1nKWg%2FfMEpxzZiQgyasyTyzisl1PsP7yDn1rwF6fWAxFAXxl0QwbB8UVoAxYXEZ8iiM39HKFy2PvBfctPcNcaUm1Gx0upQpjdmIuNKR0b1qhFBPBUZeDJ4KJUtiHfAaL5zMLRgsX7tO4xk1x%2FffRE2GCJPDBma5qIUP6CeBrI%2BDIQMWhemol0eoCl6yUdQ4vG72rGkoXdMA5UhY6cV2ASPUkmJDy9kG3kkY1Nad9WIIwCXM7vSBo1kH4oOQT7twgiyq9tWw2P3YxDWwuhNQKytLYK4JKwmGuszTaOE%2BK6CZfAzi9%2B%2Bi6NFab9HQONfAGY9ylhYKRYvvYPctj3hZ2%2FjSkuTWnCFGiy0QoHIME0vtiDM3C721cwqBE2pm4T76rDLr7%2BxAJmF%2B04ekeNaMRT%2B%2BKnst1r9kB2q%2FLmyIAiQtm5bg%2BffGwjxZi8o6Qd6IYbxqXoUh1NhmRxquOnBJmLa2UPUeYo6a092vchzWxlAJCVdXC80iT2GCy8Y96Nq4WPAvKSvYyWm9FlgeYPEKuaeZDmEEEpGtnkx5b593c1BUohW4FvqtETeajHA211R%2BAtHMTCAjMjJBjqkAU%2BrSISWpEzAL1EuXcg1NdwndGch9bakIqfwJZX6LQgaFn3zyyyjSF3EBnEUCGZ9BJsWlLrhhIJuKiKH%2BJm0Cp%2Bkbi8x6Uao4IviOeJ8kN07Fduc%2FrUuHtZ764j7mkpedvgpE%2Fw5AvXV16T3lylurYzNzF00QiK9X7RnGxnldttfMA3uK7iAtVptDFRZ6uYq4nRfJWkogdUQrEt%2BZhEFFg%2BG5ZfF&X-Amz-Signature=2cc83b693ebc2529a83cb4623fa59009593dbf310c518a92ed2d445d3e8ca8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
