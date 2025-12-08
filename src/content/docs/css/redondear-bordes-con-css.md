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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBHQRPL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL3bwATDDjaWtWZkFFlyjO%2B3e%2BiFIZEdsOvISsWFZQ2AiEA4Cv6fLzCzWq3eGNenakes8wsovzeOEnBQ%2BzINJPwqeIqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7h%2Bpvau2fzl72vOircA63zSqbBXAUrj7yLHgNpZ3dq7KLV4DFLwoNauHi3fGw4Y3B9%2F3U%2B7S6YdLMB8y%2B4tisMDpl8GMKhb%2FGnV4624LXOikXXKIaD7Yw%2FZZ2DDD%2Fv%2BEi8kZSTLQCVaeC%2B3%2BAHTPQEfHlHXlD34AWSTCOXB8lw87dwvb0Bodu%2FbMYEljKEUvmrSKb3fVUciXqjk84Z2BKISf%2BUyNaI1syNGuDIikAFH6YgeKp8OyY2LTdZ1olDz7i4uFEPcVJRku7fDUuHc9tb7s31ZS%2Fg06cnnrGo1Zhpb7W2nrx8qd0%2BclJx%2Fei6L21mtNgPm%2FqzI1BX0EfTVNMlUjGbWJKpZpaOcyFgixX2omHRNQR0nyUjySps8jth9ynK4F%2F12CAbS5TEKr0lMKxCkmvYqxsyo5PqePoni2CBHeVfOsPRtL8PXh9AlqjsRexpYk0y82VvQXDOUkeR5TLd3%2BNmCUmUFV5ZKWbI36WiS%2B%2FlNRAjro3mAcS%2FDki3b66ydNJodOGq4oobipB699jwn%2BaaDhKCNVbeElLR%2FqrgzluvO8p7Kbf%2FZPQqf4BRp5p4A4nCU9YKADz4qqfKFhLcZrGCOPHjxJp72nmDxEOXGfR3n2UhFer3gd38SSFq%2FIquLqVQ3OEvJB3SMLTk28kGOqUB2vcF%2FC0TV32cT4A0QsB%2F22OKRLPMATT%2BJmgeI%2FYTbAr1Kzdgtrdnm1t7TMUAHJKk8IvUvyeM6Gh6jmpEEnVCg%2FXBOD84W5AVinYjsSOT86Jxz2v0Fa9eUbqh19juaMYOYqauC8UbFMlnKNXm44UHfcm%2B0QzGGAWtXwRvWJ%2FDQyQhxD9STqVdEDI5HwAB%2F3JnYJdaQW1ykBy%2BWe7KinBaA82%2FRNIX&X-Amz-Signature=95b8e197673178363e356f4cfff38629e01d668160d7bd69b544ee7f81e219ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBHQRPL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL3bwATDDjaWtWZkFFlyjO%2B3e%2BiFIZEdsOvISsWFZQ2AiEA4Cv6fLzCzWq3eGNenakes8wsovzeOEnBQ%2BzINJPwqeIqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7h%2Bpvau2fzl72vOircA63zSqbBXAUrj7yLHgNpZ3dq7KLV4DFLwoNauHi3fGw4Y3B9%2F3U%2B7S6YdLMB8y%2B4tisMDpl8GMKhb%2FGnV4624LXOikXXKIaD7Yw%2FZZ2DDD%2Fv%2BEi8kZSTLQCVaeC%2B3%2BAHTPQEfHlHXlD34AWSTCOXB8lw87dwvb0Bodu%2FbMYEljKEUvmrSKb3fVUciXqjk84Z2BKISf%2BUyNaI1syNGuDIikAFH6YgeKp8OyY2LTdZ1olDz7i4uFEPcVJRku7fDUuHc9tb7s31ZS%2Fg06cnnrGo1Zhpb7W2nrx8qd0%2BclJx%2Fei6L21mtNgPm%2FqzI1BX0EfTVNMlUjGbWJKpZpaOcyFgixX2omHRNQR0nyUjySps8jth9ynK4F%2F12CAbS5TEKr0lMKxCkmvYqxsyo5PqePoni2CBHeVfOsPRtL8PXh9AlqjsRexpYk0y82VvQXDOUkeR5TLd3%2BNmCUmUFV5ZKWbI36WiS%2B%2FlNRAjro3mAcS%2FDki3b66ydNJodOGq4oobipB699jwn%2BaaDhKCNVbeElLR%2FqrgzluvO8p7Kbf%2FZPQqf4BRp5p4A4nCU9YKADz4qqfKFhLcZrGCOPHjxJp72nmDxEOXGfR3n2UhFer3gd38SSFq%2FIquLqVQ3OEvJB3SMLTk28kGOqUB2vcF%2FC0TV32cT4A0QsB%2F22OKRLPMATT%2BJmgeI%2FYTbAr1Kzdgtrdnm1t7TMUAHJKk8IvUvyeM6Gh6jmpEEnVCg%2FXBOD84W5AVinYjsSOT86Jxz2v0Fa9eUbqh19juaMYOYqauC8UbFMlnKNXm44UHfcm%2B0QzGGAWtXwRvWJ%2FDQyQhxD9STqVdEDI5HwAB%2F3JnYJdaQW1ykBy%2BWe7KinBaA82%2FRNIX&X-Amz-Signature=2a6242eaf0520ef90c6d4eae31fe5bf21de553d371f579637ec3a80581b6a1ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
