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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653S5CXMX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHY971eoyVQ1e1b%2B573bRFEVEOUIfXJU99jIOT1gt98TAiEA%2FrnGpFvMYvgovzofjqHaSJzOu6Drc%2BTgeifx7STgfkEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFNqBKj0pDPGANxpLircA%2F9DBWym8hlvtOrLCxVCtYuOdvAthFcr4xMU%2Fz12EMbA2IHpE1LxK1aWobnrn3%2FCVKcOtXMX44hfDN77MtBlEM2BRBoxZAAeKv%2FCkU%2FeubWXZcrt%2B4LFYZa9kTePAzgorHnBySPd9NHn7bcgcgYOaoV6EhR4RJQReZNNlkYGpz9anuoI%2FiJGSy8Dgw5Psfn7qtcFmuj3iBYQkob%2BzixuSUGROIg5BHq%2FYSKtbE2sLoq81B3NehjwQ8phWJAxi3tyQpYYi02ByZd9L2HwFqlCWWn0tUenN%2B138pk2hTVN5OdMx46x5AgDh5xLvC9DPXqf5QoRPIPoyB2RNXn1Fh%2BjT%2Bb8i7wpVGF8wj2Up5VeukEqSDJmzoVg6jXlitgbwzmZctwQR2LHFe6R33IkQUN%2BitmH0GpK%2F9fXFCHH3mEQF58WywcnJ%2Bu085FP%2BIr9JjJyfft744v4JcLwBtdvMubuS029K%2FSnen07qe3zkz0KA5lsOFxkMehQpcFDHxCwulzfo2TGNOU66Lqljly0ruVx1hKDI4IL7Jb8kpXgNqqvNo5Qsrv1ebUpMOzCtwb5eiQxw%2BkXlyWAFwasdv4qbE8oIWNc4UJWCCuQtQRsEwO2iqMghxc51XbV%2FZcZ9E7oMLmvyckGOqUBKWZ%2Bx4QXSZSH3Ol44hSsHF%2FSIMswZQ8ToRHUH4a6qSEGvMYybrnYgUC9JQ1usiLKWo8wpYvcyw0h0u%2F5nYvTeaXXZUlJAehfC0f73paBdgBZ1Ml6BQnxeu3%2BTOqU%2BTNxWU9gUurYFAwfCb5V6AAKS2bmj2%2Bj%2BSvhII9KxaszFje0qm7Z5BS%2FvhlkHS2997dVr7jMt64nxsp0v%2FUd44lrGAUc8LL7&X-Amz-Signature=8d01c2fa875fb718581ec524b8b8a3611d9ea33d224688f158d45c65e89ba9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653S5CXMX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHY971eoyVQ1e1b%2B573bRFEVEOUIfXJU99jIOT1gt98TAiEA%2FrnGpFvMYvgovzofjqHaSJzOu6Drc%2BTgeifx7STgfkEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFNqBKj0pDPGANxpLircA%2F9DBWym8hlvtOrLCxVCtYuOdvAthFcr4xMU%2Fz12EMbA2IHpE1LxK1aWobnrn3%2FCVKcOtXMX44hfDN77MtBlEM2BRBoxZAAeKv%2FCkU%2FeubWXZcrt%2B4LFYZa9kTePAzgorHnBySPd9NHn7bcgcgYOaoV6EhR4RJQReZNNlkYGpz9anuoI%2FiJGSy8Dgw5Psfn7qtcFmuj3iBYQkob%2BzixuSUGROIg5BHq%2FYSKtbE2sLoq81B3NehjwQ8phWJAxi3tyQpYYi02ByZd9L2HwFqlCWWn0tUenN%2B138pk2hTVN5OdMx46x5AgDh5xLvC9DPXqf5QoRPIPoyB2RNXn1Fh%2BjT%2Bb8i7wpVGF8wj2Up5VeukEqSDJmzoVg6jXlitgbwzmZctwQR2LHFe6R33IkQUN%2BitmH0GpK%2F9fXFCHH3mEQF58WywcnJ%2Bu085FP%2BIr9JjJyfft744v4JcLwBtdvMubuS029K%2FSnen07qe3zkz0KA5lsOFxkMehQpcFDHxCwulzfo2TGNOU66Lqljly0ruVx1hKDI4IL7Jb8kpXgNqqvNo5Qsrv1ebUpMOzCtwb5eiQxw%2BkXlyWAFwasdv4qbE8oIWNc4UJWCCuQtQRsEwO2iqMghxc51XbV%2FZcZ9E7oMLmvyckGOqUBKWZ%2Bx4QXSZSH3Ol44hSsHF%2FSIMswZQ8ToRHUH4a6qSEGvMYybrnYgUC9JQ1usiLKWo8wpYvcyw0h0u%2F5nYvTeaXXZUlJAehfC0f73paBdgBZ1Ml6BQnxeu3%2BTOqU%2BTNxWU9gUurYFAwfCb5V6AAKS2bmj2%2Bj%2BSvhII9KxaszFje0qm7Z5BS%2FvhlkHS2997dVr7jMt64nxsp0v%2FUd44lrGAUc8LL7&X-Amz-Signature=eb5e577a3183b0b178a4a749251785b0e5c9d95bd7dfa51d97fccf7e517fd6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
