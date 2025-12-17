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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EM3QFYO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYGnhoV8%2FB%2B2I3hPCaveLgsZcIbkntJe7EKoteApilhAiEAxOW5xbwTMJBs8dB5DH4TsscIrEy45Cq0khqyQyVFJv8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDP5535HYrCk9gWecjyrcA00uTeqSbDl0GxE8kFaAWk2m0LQuN7kUZYu9f5AcW9%2BMqxObbibc0MW1wiX6es7h8l8q%2FMIHqayJ5sBv32563WQVd9SL%2B0FyR%2BnMoYOPl%2F%2FhrdL1JJ3gFyhpr7HGr6mAsWQRCdu4NiJHGSXA%2Bpju8WPl6e9xsFZhXxn6zL3roh%2FVg18iuNS6lHu4xCewFDmTncjvvLrsF%2FpuPiGI6uqHFToGZ%2FuPI4zFTNd90y4Un59JdGZEtBKkzRxB6svHomv9hrD9%2BRvrcj2DGvOcC5zAUE3x8%2F%2Bw8KqQKefiN9xlCDjGwJQvEnwCtu6HFoZY6subni%2BnaoORUasS5z8Jl19JbV7XsCmKFYWiSsnlQk%2BMXhfVEuimIpL2hMHtqppj80WPzDR706pO2Xkm%2BQjPj%2BowRQxnFXUfHgvPUlwAq7Sp26vJEaTv0VuendPWhBlH1gWyg4jcHyttaXhwiOr5QNJ5E0u%2Fhhlt5AkOvUtcWRbiH5B16WaU3Y8tSxDe0Nitqut5iamJ2qQab1fg%2FVbs6wyex8sLkosVsChrcpjtkKvKrhOcCHj%2FWLnFI7fguon7kEvbx%2F7W0PSfJisnP1ilkT7rQsqN4Wg64T8tfA4q6NttUQ%2BHRDGjr8RGmxFmutOyMNqWiMoGOqUBVqLzsYCXEnuT9v7MRzeVk9FclNjEqUIY4%2Bfy60GEGTOXQ023e44C0xNuWAAHx2QQBoTosWqI6UPryhNIm49jVhIwenc4L1azlgmq%2BJ0oUUFhEY0hb9e8zXIMO1KxKQ1ApwViQL6fJ%2BBolhEOBEfjO4HDBKHyFmPxfexxL28iVCwLOzbaR4n%2FdNQCJtukWOTOnkcmyc2cVo6%2FA%2B8UxcjP10iGodB0&X-Amz-Signature=8af0bea7d85963949dd04ffa25d0868448e8fd0a8a145b237b1281d145988f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EM3QFYO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYGnhoV8%2FB%2B2I3hPCaveLgsZcIbkntJe7EKoteApilhAiEAxOW5xbwTMJBs8dB5DH4TsscIrEy45Cq0khqyQyVFJv8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDP5535HYrCk9gWecjyrcA00uTeqSbDl0GxE8kFaAWk2m0LQuN7kUZYu9f5AcW9%2BMqxObbibc0MW1wiX6es7h8l8q%2FMIHqayJ5sBv32563WQVd9SL%2B0FyR%2BnMoYOPl%2F%2FhrdL1JJ3gFyhpr7HGr6mAsWQRCdu4NiJHGSXA%2Bpju8WPl6e9xsFZhXxn6zL3roh%2FVg18iuNS6lHu4xCewFDmTncjvvLrsF%2FpuPiGI6uqHFToGZ%2FuPI4zFTNd90y4Un59JdGZEtBKkzRxB6svHomv9hrD9%2BRvrcj2DGvOcC5zAUE3x8%2F%2Bw8KqQKefiN9xlCDjGwJQvEnwCtu6HFoZY6subni%2BnaoORUasS5z8Jl19JbV7XsCmKFYWiSsnlQk%2BMXhfVEuimIpL2hMHtqppj80WPzDR706pO2Xkm%2BQjPj%2BowRQxnFXUfHgvPUlwAq7Sp26vJEaTv0VuendPWhBlH1gWyg4jcHyttaXhwiOr5QNJ5E0u%2Fhhlt5AkOvUtcWRbiH5B16WaU3Y8tSxDe0Nitqut5iamJ2qQab1fg%2FVbs6wyex8sLkosVsChrcpjtkKvKrhOcCHj%2FWLnFI7fguon7kEvbx%2F7W0PSfJisnP1ilkT7rQsqN4Wg64T8tfA4q6NttUQ%2BHRDGjr8RGmxFmutOyMNqWiMoGOqUBVqLzsYCXEnuT9v7MRzeVk9FclNjEqUIY4%2Bfy60GEGTOXQ023e44C0xNuWAAHx2QQBoTosWqI6UPryhNIm49jVhIwenc4L1azlgmq%2BJ0oUUFhEY0hb9e8zXIMO1KxKQ1ApwViQL6fJ%2BBolhEOBEfjO4HDBKHyFmPxfexxL28iVCwLOzbaR4n%2FdNQCJtukWOTOnkcmyc2cVo6%2FA%2B8UxcjP10iGodB0&X-Amz-Signature=eacb11ea397110c627339bc0c92d76d257ff9342810d9b5972e04298d76f9c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
