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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HHWLXC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5TYzoTwMUpmGLTZlySDR%2B4kd1Vx3czileWSrcIX%2BMwAiEA6qp9GmXyIkeYuBnlzr%2BbVJVI8imK%2B1AaPvzikTYVc%2FIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDM0lFOTHf0uaRKBSYSrcA4kaUQxGTA%2Fy4QcNKgHDAti7dW2na3XFq7XeSqApIfSIWOnxh23r%2B6Y0XJhtamMx0jzyFGRxpg90S2XYv4iZbd%2BLRtD04zBkvLzudnpcvqAaVBfCCVcpPk9T3VNkYZbsh2%2FEXBkpawcmCgqFaUJYlPqxeU7CxJiwUVx2XoqGYAg7SppyZizq9dwZK4w%2F4oFA28kKWeIUE%2FJWxgya%2BVK1XQ4PZ7sLmt%2Fr1iPLIWGIEc7vGi1ZOAL5ekB03rnOf7br7ohOZtKUf0RHXT4zyBsQ8VspTt5jkqz1RU3HcJogxsj5%2Fua%2Bj0fGCO01BiYlWATtKvZuslqKWsdvS7FHkTItqOYW4hNZhCeZm9JTT83wDDlsrCcX2SwGL%2BF3nWl9uQnyHj6UOOIHTFzqfbnISuvyQsp0CVc346yukWGmL2BcCi5yjYzZH3WFKvtx0tZhh%2Bwk%2F1gv2OpUfI88nnWr%2B9zlR%2FVeSjJsR7vzrklCFoY3I0NWItw74cjwWStttwMQfY6429b6SsGJQoQPQgZSSUNPO3yPF42LrVFpg33eIdiINSj8yIced%2BzrxF175o87UXrMjnFuWS%2F%2FjaOc5jLuqZTmEl8BRTi%2Bmt7ZyRo2%2Bso7K1AXbuA8KHqFvBL6%2BTrHMI%2FqiMoGOqUBCWEEnzp2990rqTP37A5mzsH3kPdNFSXtOeJR%2BNoP7xqqzCgIAGI6L7Y%2Fj7L7XFJeaDhMbdR2flZXxH5%2FOcXGecIcUcnSexC4IlyFZofA5C4NGFz8p7UEQYdzmzIOoVMHgfNsGLqPUAu33abQBldJeL7isCQxhV3gic5K9EVedTWHXqq2xyOk5AKIp07S3TNuUkTdsGerzUjpVRQAad9YOiyGuDSz&X-Amz-Signature=2b3a9185d9284ebf99b0c80e2372b9c2453f90a52563ec1f6e7b7ae9e95a9e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HHWLXC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5TYzoTwMUpmGLTZlySDR%2B4kd1Vx3czileWSrcIX%2BMwAiEA6qp9GmXyIkeYuBnlzr%2BbVJVI8imK%2B1AaPvzikTYVc%2FIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDM0lFOTHf0uaRKBSYSrcA4kaUQxGTA%2Fy4QcNKgHDAti7dW2na3XFq7XeSqApIfSIWOnxh23r%2B6Y0XJhtamMx0jzyFGRxpg90S2XYv4iZbd%2BLRtD04zBkvLzudnpcvqAaVBfCCVcpPk9T3VNkYZbsh2%2FEXBkpawcmCgqFaUJYlPqxeU7CxJiwUVx2XoqGYAg7SppyZizq9dwZK4w%2F4oFA28kKWeIUE%2FJWxgya%2BVK1XQ4PZ7sLmt%2Fr1iPLIWGIEc7vGi1ZOAL5ekB03rnOf7br7ohOZtKUf0RHXT4zyBsQ8VspTt5jkqz1RU3HcJogxsj5%2Fua%2Bj0fGCO01BiYlWATtKvZuslqKWsdvS7FHkTItqOYW4hNZhCeZm9JTT83wDDlsrCcX2SwGL%2BF3nWl9uQnyHj6UOOIHTFzqfbnISuvyQsp0CVc346yukWGmL2BcCi5yjYzZH3WFKvtx0tZhh%2Bwk%2F1gv2OpUfI88nnWr%2B9zlR%2FVeSjJsR7vzrklCFoY3I0NWItw74cjwWStttwMQfY6429b6SsGJQoQPQgZSSUNPO3yPF42LrVFpg33eIdiINSj8yIced%2BzrxF175o87UXrMjnFuWS%2F%2FjaOc5jLuqZTmEl8BRTi%2Bmt7ZyRo2%2Bso7K1AXbuA8KHqFvBL6%2BTrHMI%2FqiMoGOqUBCWEEnzp2990rqTP37A5mzsH3kPdNFSXtOeJR%2BNoP7xqqzCgIAGI6L7Y%2Fj7L7XFJeaDhMbdR2flZXxH5%2FOcXGecIcUcnSexC4IlyFZofA5C4NGFz8p7UEQYdzmzIOoVMHgfNsGLqPUAu33abQBldJeL7isCQxhV3gic5K9EVedTWHXqq2xyOk5AKIp07S3TNuUkTdsGerzUjpVRQAad9YOiyGuDSz&X-Amz-Signature=b3e2d7d048153757e5e1e0242b34afdaebdf98e3ca8b8e43bbfe9f2137c4f86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
