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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGSYBLVN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlVCuJ6mOjbAbWttpwiuGFbSTnmFQ6nI1FU%2BIz4jJApAiEAj6XRP8fcynUvZpJ2f2jMw8Oxs%2BxRWcrxtef1BGxCxs8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBX961sSu5ng645LircA9JH0t8%2FrSku0hguCUF6zG81HJzGZysdB3Qqrtq6ljX6C5ZkbIGNQ6DrVt3nZhHjFd0HJdcGARmbrPuFmbCvFubYq%2BW75DrbepB2op6poOqCAC97xmi%2BuT8E%2FFd%2F%2BlrhWI4z%2Bh2njm5O5jqNV7xmLVq7vmX6BzVpRNfScZX6wmQaQaVii0Jrsd3mSfm5S9UxQXzgKjYJjv5OBaCfZCs5bIicWS%2F1Bj%2B%2FqAKp8Ck1jLUrNN2jkM4WD%2FVjmH5VsjXk6tYPwOLErOMEajueYbBbSIrxhyGlmyDtcivxRfVi2iQW3owVfJEwJ5dj1hk%2FUvoUL1tCYwDNFxD6Y1DFYv3bq%2BU0jdCauFls%2BIOp3MDWiH96GhW%2BQp6ttyyYTrZi7K8GSS5iEhdZelfOEvKTBqXjbYKjomf3dCxSOAVyEajpnjixPZHbFU%2FjxfhS%2BPU4HVh1VAj%2BjEMQyXUCkJk5SUQwiqMMebpMYsXoF4iB2CQFO2ieDhJ3tQ2T5ZfdPz9mhl1OxmaXB8MlX4ev16I6bzKA65oql6UbHQeH3H4furXcx4WJAocSdgDrCoylfoDkMG2jxNc%2BfF%2FF4ihkrw%2BqHA9OsHype6TW7wmCzp5vcGRNECOJle9EEcRYJxmy7t3EMJvv2MkGOqUBrMwIfqlWTKpNoXfJyZBdHClnLnaLMzbOwhhiPUaE%2FYJKZ5JFEkXJYNyYQYUGWORZLxkQC7IrDm5A5RWgFTflJFSFvFWNjhh7ZQFU4DXGGDj2tQsBVbGg0oBLbNj%2BlON9YrZZUTxyseCaMB%2FZ57gvKi2JNL%2FJ9awgsdwUMjjRd6V8EIBEpS1yRnXb4K6Qfimqtrb%2BcqOt9emw4EOO5cq6lGB7%2BNPa&X-Amz-Signature=a895387d748fa03d9f93d2b71425defc2f32421433725cc1c098445e012e74e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGSYBLVN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlVCuJ6mOjbAbWttpwiuGFbSTnmFQ6nI1FU%2BIz4jJApAiEAj6XRP8fcynUvZpJ2f2jMw8Oxs%2BxRWcrxtef1BGxCxs8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBX961sSu5ng645LircA9JH0t8%2FrSku0hguCUF6zG81HJzGZysdB3Qqrtq6ljX6C5ZkbIGNQ6DrVt3nZhHjFd0HJdcGARmbrPuFmbCvFubYq%2BW75DrbepB2op6poOqCAC97xmi%2BuT8E%2FFd%2F%2BlrhWI4z%2Bh2njm5O5jqNV7xmLVq7vmX6BzVpRNfScZX6wmQaQaVii0Jrsd3mSfm5S9UxQXzgKjYJjv5OBaCfZCs5bIicWS%2F1Bj%2B%2FqAKp8Ck1jLUrNN2jkM4WD%2FVjmH5VsjXk6tYPwOLErOMEajueYbBbSIrxhyGlmyDtcivxRfVi2iQW3owVfJEwJ5dj1hk%2FUvoUL1tCYwDNFxD6Y1DFYv3bq%2BU0jdCauFls%2BIOp3MDWiH96GhW%2BQp6ttyyYTrZi7K8GSS5iEhdZelfOEvKTBqXjbYKjomf3dCxSOAVyEajpnjixPZHbFU%2FjxfhS%2BPU4HVh1VAj%2BjEMQyXUCkJk5SUQwiqMMebpMYsXoF4iB2CQFO2ieDhJ3tQ2T5ZfdPz9mhl1OxmaXB8MlX4ev16I6bzKA65oql6UbHQeH3H4furXcx4WJAocSdgDrCoylfoDkMG2jxNc%2BfF%2FF4ihkrw%2BqHA9OsHype6TW7wmCzp5vcGRNECOJle9EEcRYJxmy7t3EMJvv2MkGOqUBrMwIfqlWTKpNoXfJyZBdHClnLnaLMzbOwhhiPUaE%2FYJKZ5JFEkXJYNyYQYUGWORZLxkQC7IrDm5A5RWgFTflJFSFvFWNjhh7ZQFU4DXGGDj2tQsBVbGg0oBLbNj%2BlON9YrZZUTxyseCaMB%2FZ57gvKi2JNL%2FJ9awgsdwUMjjRd6V8EIBEpS1yRnXb4K6Qfimqtrb%2BcqOt9emw4EOO5cq6lGB7%2BNPa&X-Amz-Signature=18441de450b1ff4f43af1ae790d81fd190a97f4733228d4bf6a25802f2a1c355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
