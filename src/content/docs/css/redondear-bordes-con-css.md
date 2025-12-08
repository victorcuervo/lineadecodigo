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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO6A2ZH6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP99%2F6%2FlTRC90TAY0fjhTmgTCav2QIuIQ2vz0hVL%2Fa6QIgeUEVgEQ6VcRuL%2F5PeOoMMZr9Kd%2BpfXG3jVJt9hON8OgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FJOv0mpzY%2BPLrr%2FyrcAxbdqMdv8kIEZTLacygB0fXRV6Lld97GGraNuz6hIFf%2Bxzwq%2B9e4KhhsjryDymPlcuM3KmNljGckWuBABuIKo2r4KyneeJmp0wR5ZfB9gW8vvO%2BT9Z%2BgyqxG4gkc2anl%2FXMHnuZljsLSrVfgxnZYzbILJjh5eIm%2BqfFG5pcyQVQi6LlsWJXeWdl01%2BA89PXwTerUgdAG5KiBcvaF3N353Iw3Wj2qsoYsqHNk4i2%2B4GAzSGTBMiTxwAftaAqbHU7zjK8amVRduaNgOkeoscMngcs9eoQjZ%2FBFsEJr%2B4KUaN21%2BsErrWJyQRtgRT5iw53AmF6Jebq%2FS7iy9ePkkCkFaB0cFCh1%2BtCwoJNwIbmyEvyOEFVB4BBHjud0HfwRHnmpSwN9Ha6BVT%2FqYK40xJPtsvt6ytYohBsjf8gcU8ePpzJc4kyD5fvkQjR88D7DyhdNmVYxKF%2BS2d9NOc9%2FKMWuSPlmIgdOxil7U0RsKiFgRBjz0EYfuegy3HHHSWMB%2BammHYjDolha%2F5IgykqLNp9HlUwPkoE2AX8W7O8lj%2BfSCUFhFnURw8vA8ojXl7DsfWLR4bRHbq%2FcCZXd7j787uQ%2Fd4ntuXQW2G8laYvMDLDyqKH%2B%2BPNreCwrna8nSYodMJ%2Fk28kGOqUBRAmHUy%2F2X7gxy7JAB0dcxeUWpP%2FwAGLl7gfDVzvtllvqT1%2BvVZx95%2BF6pUDIdlcbqoY3KCF2h99Fea5E%2F31zYU8qHkjg0X5raSd4JbmNyuyHpE%2FXWKYwY%2FaV3Inp6lvJv8CdnvUq7agsHWxoq4igYSPRbdDDLdz1tm8iFyqY34LqeSi6Osb3%2BOcIfWEkiaXNwW4Yk9Ur42zU%2FnSpMO3Z7DEqlzmS&X-Amz-Signature=7dab97194c4ede66bece8c0421bf4ef1a7392cd011b8b3e7eb0055db685da9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO6A2ZH6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP99%2F6%2FlTRC90TAY0fjhTmgTCav2QIuIQ2vz0hVL%2Fa6QIgeUEVgEQ6VcRuL%2F5PeOoMMZr9Kd%2BpfXG3jVJt9hON8OgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FJOv0mpzY%2BPLrr%2FyrcAxbdqMdv8kIEZTLacygB0fXRV6Lld97GGraNuz6hIFf%2Bxzwq%2B9e4KhhsjryDymPlcuM3KmNljGckWuBABuIKo2r4KyneeJmp0wR5ZfB9gW8vvO%2BT9Z%2BgyqxG4gkc2anl%2FXMHnuZljsLSrVfgxnZYzbILJjh5eIm%2BqfFG5pcyQVQi6LlsWJXeWdl01%2BA89PXwTerUgdAG5KiBcvaF3N353Iw3Wj2qsoYsqHNk4i2%2B4GAzSGTBMiTxwAftaAqbHU7zjK8amVRduaNgOkeoscMngcs9eoQjZ%2FBFsEJr%2B4KUaN21%2BsErrWJyQRtgRT5iw53AmF6Jebq%2FS7iy9ePkkCkFaB0cFCh1%2BtCwoJNwIbmyEvyOEFVB4BBHjud0HfwRHnmpSwN9Ha6BVT%2FqYK40xJPtsvt6ytYohBsjf8gcU8ePpzJc4kyD5fvkQjR88D7DyhdNmVYxKF%2BS2d9NOc9%2FKMWuSPlmIgdOxil7U0RsKiFgRBjz0EYfuegy3HHHSWMB%2BammHYjDolha%2F5IgykqLNp9HlUwPkoE2AX8W7O8lj%2BfSCUFhFnURw8vA8ojXl7DsfWLR4bRHbq%2FcCZXd7j787uQ%2Fd4ntuXQW2G8laYvMDLDyqKH%2B%2BPNreCwrna8nSYodMJ%2Fk28kGOqUBRAmHUy%2F2X7gxy7JAB0dcxeUWpP%2FwAGLl7gfDVzvtllvqT1%2BvVZx95%2BF6pUDIdlcbqoY3KCF2h99Fea5E%2F31zYU8qHkjg0X5raSd4JbmNyuyHpE%2FXWKYwY%2FaV3Inp6lvJv8CdnvUq7agsHWxoq4igYSPRbdDDLdz1tm8iFyqY34LqeSi6Osb3%2BOcIfWEkiaXNwW4Yk9Ur42zU%2FnSpMO3Z7DEqlzmS&X-Amz-Signature=5eea9466c0e846dae2d3cbc6f773560bf56c8859014403b017be8831ad9bef23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
