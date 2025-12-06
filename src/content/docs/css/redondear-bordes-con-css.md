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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIIHKKG5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZiDmkPNmjk9ieBMWaE4Pr9%2BhnR6Y0nWWJZgVTn8VjNAiBd0hrVQJCUfbMgvimP%2BI55MX9W6tHeFmrVenF%2BkwXK%2Fyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM9SArxZ4tHb%2FvOSL1KtwD2Z49l5v6d10%2FihfiRe4YC%2Fb%2B%2BAfPGjltzbM5wqxlkoO9qwwhBqVlI0whLq7H9eSJZheP0jNNW39%2BnscKvW3NvG%2FVsaSurjEvCj4vS9JDc8A5xsOd4H5SxWJ5hCyie%2FiN6%2B2lUp64rNEwLcOU049IL1rT2vHMnnCNuPtZqiQoSQpZus%2BYZfZ%2BTcHBEA4iryHfbI2zmtCIweMXo9AZJ2QwM%2B1IMuvF3rzAv8V0oCnKiS7BVybi%2B8V7xA%2FX0agZYhme5dKLL2UfeeVqbMKNiZv2%2FMZcRm4meUKmJTR2fPteF6rrxSlMNPtva8vF4TrwJd4Ir30iTC5l6YRsl0mCmzdTHz3rxDAghgFHAGJM6vjLwmXiWHIWy9liBkau7D6KbHxjQ4QT%2BY00cf7eNg3P5j5RFG%2Fo4jMu2bCoM3CfHiK%2FwVqxleEZZ78sskJQ0i89%2BJQFImjDaeC2qxVhISeYjmEE36Lnq%2FlaCdgo6EqbRhMbd8X9ShCcHFrlTi7iV3wLhyvLsvo%2B%2F%2BaknSbty10AlL9jsjnZ8hSrrtALCrbV0s0va9TJw9gJaiRehHc9h9EIzzVdxfRRvcZjaKToD%2FVQu4j7B6H3rLKDtbfvM%2FC%2BabISqVDhT%2B34AnqBdaYhL9owrOjNyQY6pgHghyqX%2BE1nI%2FMmjzlqWmWNFr344Zil8gRw8G2YO3eKAVrwcPbmT3CLVk%2BmNjmKXqsRFzVpZew%2ByRh14HlLC4PY5FTcWguiFUJtsEWzCaAwG%2B6%2Bc013JAWvvB0iLTVstxzdXCyl%2BZpfRyR2aBGQfs2EbwXV9eLs6OGdqSZJcMrAYPyWFVktTwMGvpeahcW60M0xdpJuvSiOPb3qvKTw12OiNgIZT%2FOm&X-Amz-Signature=2c619d42282c6cf783b77488d318cd32cf03c1528baf4a0f22de7252aa5ce2fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIIHKKG5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZiDmkPNmjk9ieBMWaE4Pr9%2BhnR6Y0nWWJZgVTn8VjNAiBd0hrVQJCUfbMgvimP%2BI55MX9W6tHeFmrVenF%2BkwXK%2Fyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM9SArxZ4tHb%2FvOSL1KtwD2Z49l5v6d10%2FihfiRe4YC%2Fb%2B%2BAfPGjltzbM5wqxlkoO9qwwhBqVlI0whLq7H9eSJZheP0jNNW39%2BnscKvW3NvG%2FVsaSurjEvCj4vS9JDc8A5xsOd4H5SxWJ5hCyie%2FiN6%2B2lUp64rNEwLcOU049IL1rT2vHMnnCNuPtZqiQoSQpZus%2BYZfZ%2BTcHBEA4iryHfbI2zmtCIweMXo9AZJ2QwM%2B1IMuvF3rzAv8V0oCnKiS7BVybi%2B8V7xA%2FX0agZYhme5dKLL2UfeeVqbMKNiZv2%2FMZcRm4meUKmJTR2fPteF6rrxSlMNPtva8vF4TrwJd4Ir30iTC5l6YRsl0mCmzdTHz3rxDAghgFHAGJM6vjLwmXiWHIWy9liBkau7D6KbHxjQ4QT%2BY00cf7eNg3P5j5RFG%2Fo4jMu2bCoM3CfHiK%2FwVqxleEZZ78sskJQ0i89%2BJQFImjDaeC2qxVhISeYjmEE36Lnq%2FlaCdgo6EqbRhMbd8X9ShCcHFrlTi7iV3wLhyvLsvo%2B%2F%2BaknSbty10AlL9jsjnZ8hSrrtALCrbV0s0va9TJw9gJaiRehHc9h9EIzzVdxfRRvcZjaKToD%2FVQu4j7B6H3rLKDtbfvM%2FC%2BabISqVDhT%2B34AnqBdaYhL9owrOjNyQY6pgHghyqX%2BE1nI%2FMmjzlqWmWNFr344Zil8gRw8G2YO3eKAVrwcPbmT3CLVk%2BmNjmKXqsRFzVpZew%2ByRh14HlLC4PY5FTcWguiFUJtsEWzCaAwG%2B6%2Bc013JAWvvB0iLTVstxzdXCyl%2BZpfRyR2aBGQfs2EbwXV9eLs6OGdqSZJcMrAYPyWFVktTwMGvpeahcW60M0xdpJuvSiOPb3qvKTw12OiNgIZT%2FOm&X-Amz-Signature=2e4ff1a6719beb5e48b41aea462105b30acf34843a1b30615fc988df8c36566d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
