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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T245K4Y6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmC2tPl14v%2BruIh8JSGw324rqHQx6Q2PxySVNEnmdn2wIgI1Q60HR9zYWNzecv%2BrDJOE3j%2BLYdx9PiHWaxtjTpLrkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBamKkv2VDhhp5%2BVhyrcA1fAugJt2i8F0gwFK6BIU9Hr5qHkPdciWp2SJGVucSJoDsX5n3Owy43JwBtAbIU6cAltL%2FbXmMIhgk8lizKKFMXbxJ7uFBEs1MckfwBM02SqsUNXSwehM%2FjSvcValQ%2FCwm2YmmNKdA2kk3AJFhdA8BKIIyiNYJHgIKS5lvbwsKhsC1b%2BPQB%2FfGstppHTlKaSpFO7ATfrGE7Rpyt0NAD5MF9jbQLKuAH59ue95chfzWWMzQ79c%2F0YRNKox5ISTFp5WYuvagcvmzGdi9tcw51JH521ahrhC5BeVTy5JDMySlDuAvFNb9UO8wVhXMlYQ1wnONX%2Bx%2B8THhsVYhJqr%2Bg09fGQsub4eDsTawldBv5cGOvXgQ1kqktzRE7dUeXw6tdhHJVk92wbjn3G7rv3mnSq1c%2BZRWkSzDMVNRcEmD8TxWmSfjNfCGwVecH5njKinnm6VT4NDOLI3UMUwYMHX5mQ5BV%2BzYmqnSAo8tycHjCqCoBXPalpgB11o3jIu1lCscXXKkwmOr86qVwpuOLMAgql3ne4b6D887I7FUComofqOA%2BT%2BhZJhKxt9zyuYtcvXk8ubdHf3Y6doxRbpOtK45tRjhe0TPWojy3HYfe7yADHl5MZ%2FF4HOrxHMV6YFkXtMJLfh8oGOqUBvs5L3fJpMESJW6wA9uDBJFMBoLoPCEypM1zIsmMkRZiq8wUyDRwjv0frP%2B%2BF7IMtpCDqriYRoozmo3IXdnS4BNDJQNxj41E25XImcHG7CQjULXH%2FVgMr6R9jh%2Fd47LAjBsh8uU77%2BHv3v6q4xaOK9VdMspJVM3V82ttWFJuckbsbfAQ%2BKQqD1zJcvca25mAl6CzcBJXjNnPEsODaTyny72MUJgHC&X-Amz-Signature=c47294d1d0ae08eeb921516321f4d5da81507a76da138e99eded78a254ecd3fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T245K4Y6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmC2tPl14v%2BruIh8JSGw324rqHQx6Q2PxySVNEnmdn2wIgI1Q60HR9zYWNzecv%2BrDJOE3j%2BLYdx9PiHWaxtjTpLrkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBamKkv2VDhhp5%2BVhyrcA1fAugJt2i8F0gwFK6BIU9Hr5qHkPdciWp2SJGVucSJoDsX5n3Owy43JwBtAbIU6cAltL%2FbXmMIhgk8lizKKFMXbxJ7uFBEs1MckfwBM02SqsUNXSwehM%2FjSvcValQ%2FCwm2YmmNKdA2kk3AJFhdA8BKIIyiNYJHgIKS5lvbwsKhsC1b%2BPQB%2FfGstppHTlKaSpFO7ATfrGE7Rpyt0NAD5MF9jbQLKuAH59ue95chfzWWMzQ79c%2F0YRNKox5ISTFp5WYuvagcvmzGdi9tcw51JH521ahrhC5BeVTy5JDMySlDuAvFNb9UO8wVhXMlYQ1wnONX%2Bx%2B8THhsVYhJqr%2Bg09fGQsub4eDsTawldBv5cGOvXgQ1kqktzRE7dUeXw6tdhHJVk92wbjn3G7rv3mnSq1c%2BZRWkSzDMVNRcEmD8TxWmSfjNfCGwVecH5njKinnm6VT4NDOLI3UMUwYMHX5mQ5BV%2BzYmqnSAo8tycHjCqCoBXPalpgB11o3jIu1lCscXXKkwmOr86qVwpuOLMAgql3ne4b6D887I7FUComofqOA%2BT%2BhZJhKxt9zyuYtcvXk8ubdHf3Y6doxRbpOtK45tRjhe0TPWojy3HYfe7yADHl5MZ%2FF4HOrxHMV6YFkXtMJLfh8oGOqUBvs5L3fJpMESJW6wA9uDBJFMBoLoPCEypM1zIsmMkRZiq8wUyDRwjv0frP%2B%2BF7IMtpCDqriYRoozmo3IXdnS4BNDJQNxj41E25XImcHG7CQjULXH%2FVgMr6R9jh%2Fd47LAjBsh8uU77%2BHv3v6q4xaOK9VdMspJVM3V82ttWFJuckbsbfAQ%2BKQqD1zJcvca25mAl6CzcBJXjNnPEsODaTyny72MUJgHC&X-Amz-Signature=88f95ae51c2ce179c6ac32cc19fd6eede7bc9f208772d8279a5e30d9e8fba345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
