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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IQOQFV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGH4QEByqbGIVEytShpZi71wyqMltDdBZFY7%2BoN%2B9ZlcAiEApfBii1oihlCN82iahrAVWfnqiCyar2deUj2NRbrG%2B3wqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgHIlDc4rA4UoQVKSrcA4cvpJHtW0xJaZ%2B3iWHl3kl6WbcyUzulQjjaBaaYtaBOvh53I%2F5%2B17lcKsfzUdgddG%2FuTus8xM%2B%2Fye60UT2Z1dbsJUJCkwxHLsRrUpybWb%2B1xviTaNR%2BqoJ3SIABq%2BcfB%2F9xEtqxfEpheArsMbuOaYpPx%2Bj3sP48EV6yjNt%2F7v89PS7CmPulwG%2FKuwxclV3zBCSfdbSGFnApEYvmPaPjn6FXUv4EzvfW5qGsJ1%2FvPHSU3DcjfP8IYr9IIwqebj2Q%2BYljCOCekqWYZ0vfuLKT%2FOkuunzJIgQdcjPouXu4wYDO7be1zan%2BcGO7arpSDFyPDjbn8M1bN1VMRMTKL%2BMm6e%2BV8y3wRBh%2FBh0pdDIC3tFuTvuXO0zYGDtCnQxHYPhxQG%2BN%2Bw4UNSdkMFZM1Mg7VqL%2BpirCu6lKTiogvRfBWLRGmPOUcMlWjDXs%2FW%2FyNkflLp0wcgH7JZ%2F86zm8PS2FjM9CmjkLzTKu2zzhPU8aNOkhPBR%2Bg7DCWzYp%2FzcIiaZNMv1wvx0RXZboIP6Y5BLsOt%2BZRka5zVq4smaAJqPbv%2FjZQ%2F%2B3%2BPHjMD1vmMFXW6E4WtMImTEff6TlfyxBUOb4a6Hwsu%2Byry1FhcZ%2FQZLd1KuU8f%2B%2FxuHB3VqrDohDMOTC3ckGOqUB0Rkl%2BBi2AT7bGAAxllst3fb1BgwltsVNQOSfL4jW%2F6xGLazE9SlYjeZCjaMLWpcq7udK3l1Xy5FJZz%2BfhBTov%2FNrPT4frRgZqSUadh0Zk9IpglCV46Z0IeqLNcaWfzQEvnGGNB9i88Vt14lnLwMYLtK1BNv7UdfeSCAYliK0tL4HWjsxk3olM6bNUR8T28eyHvA0fdTrKK2kdLcoZYst4i36Niia&X-Amz-Signature=5c359c5c4e4cc58f6607768b6abaa7b6e4ba8c47a17d2efb1d2f6679dcdb4fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IQOQFV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGH4QEByqbGIVEytShpZi71wyqMltDdBZFY7%2BoN%2B9ZlcAiEApfBii1oihlCN82iahrAVWfnqiCyar2deUj2NRbrG%2B3wqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgHIlDc4rA4UoQVKSrcA4cvpJHtW0xJaZ%2B3iWHl3kl6WbcyUzulQjjaBaaYtaBOvh53I%2F5%2B17lcKsfzUdgddG%2FuTus8xM%2B%2Fye60UT2Z1dbsJUJCkwxHLsRrUpybWb%2B1xviTaNR%2BqoJ3SIABq%2BcfB%2F9xEtqxfEpheArsMbuOaYpPx%2Bj3sP48EV6yjNt%2F7v89PS7CmPulwG%2FKuwxclV3zBCSfdbSGFnApEYvmPaPjn6FXUv4EzvfW5qGsJ1%2FvPHSU3DcjfP8IYr9IIwqebj2Q%2BYljCOCekqWYZ0vfuLKT%2FOkuunzJIgQdcjPouXu4wYDO7be1zan%2BcGO7arpSDFyPDjbn8M1bN1VMRMTKL%2BMm6e%2BV8y3wRBh%2FBh0pdDIC3tFuTvuXO0zYGDtCnQxHYPhxQG%2BN%2Bw4UNSdkMFZM1Mg7VqL%2BpirCu6lKTiogvRfBWLRGmPOUcMlWjDXs%2FW%2FyNkflLp0wcgH7JZ%2F86zm8PS2FjM9CmjkLzTKu2zzhPU8aNOkhPBR%2Bg7DCWzYp%2FzcIiaZNMv1wvx0RXZboIP6Y5BLsOt%2BZRka5zVq4smaAJqPbv%2FjZQ%2F%2B3%2BPHjMD1vmMFXW6E4WtMImTEff6TlfyxBUOb4a6Hwsu%2Byry1FhcZ%2FQZLd1KuU8f%2B%2FxuHB3VqrDohDMOTC3ckGOqUB0Rkl%2BBi2AT7bGAAxllst3fb1BgwltsVNQOSfL4jW%2F6xGLazE9SlYjeZCjaMLWpcq7udK3l1Xy5FJZz%2BfhBTov%2FNrPT4frRgZqSUadh0Zk9IpglCV46Z0IeqLNcaWfzQEvnGGNB9i88Vt14lnLwMYLtK1BNv7UdfeSCAYliK0tL4HWjsxk3olM6bNUR8T28eyHvA0fdTrKK2kdLcoZYst4i36Niia&X-Amz-Signature=db1cd3d28c0dc0eda855f63363416e335b908a85468db03320adcedc4ae655f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
