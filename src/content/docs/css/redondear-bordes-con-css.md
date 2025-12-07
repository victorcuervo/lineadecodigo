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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDBRYQX6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFdSVRwIx1q%2FVoUwjfBEuupqgbi%2BJ%2FSzTJPjQ8sOelHAiEA8Sss92LefrcffZQUuouWZCR%2FAZyNrpuoGB2tSgpDEAAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSmPl1QJThaCk89kircA2M%2FeUnlfIjNdcov6LbYCm9UQoNNHeGj41gDzC9urhzEW%2FmvPH5tYRqOE5tvM8bX4jSkF7hllbci%2FEOWCHG7MhWMBUHY6RqPz9h6AeMam%2BrbzoZuTbNrGBB1jNkVPulrhWne96oFaQKDxV74RKZk3MlLkcOmZZc3Djj8Sr%2BTS41XFxxKwL%2BqsHUnT9btWAUkdD%2FIYs3nWyb8j%2FXWnyoVSoWH3CBKTkM1Qi%2FoHgx2FnC%2Byk6v8C0efcHPpjhEEpw4PHo%2B0PUQDJugGAJWQY1Fmf9ej3kzzDfX6hDAo7gF7bhMcIm3DiIMwT%2FtzY%2BDuQkbc1Pr2n14B%2BDWo2O3F5ruRGxlnF7TDPHzgI3fMQNy3y76tdaf5LOlIRhzOb92IQSSEEqibnvwL16olxZSwyahH2xd%2BVuBKeJoWMtZj0YJJt7w9wLTJ%2F6C6GH6TFuxd11KgFmkvY3QoX7HywCJhzMvpjQyW1FdRj3toPHOzxI1AW%2FTeQzXZcFDcVgDGzjd6lsK363SCWdcAv5dCF6bxc38U5LBVJtGHkMVHE4PzRRQSR%2BilvLQWV%2FQn%2BqXGiNm%2FPi1faPEBPe3FIVsR1MCWPHTuJOs6TSLb0AylSV%2BzLEHiR1Bkx2REu6my7%2BMNXv1MKP90skGOqUBjLvBNh%2F%2F%2BsVR0eCRZ7u1lYjCP9nstk0O2HJrUCniDxmvWDi4yexXHnErZKMGx%2FA00DomiAVew2fn5HoMQqeob0ILNEn19TdWcLswaJrpZFe0DVYig6F%2FWI05Nr4hIpZ%2FX1CPa0w8mPvp%2B3pQQQ%2Fyx6W47ZpfFJSkmDt%2B0lNOlgkjLR7f3jpr8pLg6d72Og34RH1D%2FKWa9Fz17gcGWcyypZc%2Bqzif&X-Amz-Signature=adf0f3d215e99ec894678fad20ff582c1ca5fa1f40d7f078dde251e386d0ebc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDBRYQX6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFdSVRwIx1q%2FVoUwjfBEuupqgbi%2BJ%2FSzTJPjQ8sOelHAiEA8Sss92LefrcffZQUuouWZCR%2FAZyNrpuoGB2tSgpDEAAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSmPl1QJThaCk89kircA2M%2FeUnlfIjNdcov6LbYCm9UQoNNHeGj41gDzC9urhzEW%2FmvPH5tYRqOE5tvM8bX4jSkF7hllbci%2FEOWCHG7MhWMBUHY6RqPz9h6AeMam%2BrbzoZuTbNrGBB1jNkVPulrhWne96oFaQKDxV74RKZk3MlLkcOmZZc3Djj8Sr%2BTS41XFxxKwL%2BqsHUnT9btWAUkdD%2FIYs3nWyb8j%2FXWnyoVSoWH3CBKTkM1Qi%2FoHgx2FnC%2Byk6v8C0efcHPpjhEEpw4PHo%2B0PUQDJugGAJWQY1Fmf9ej3kzzDfX6hDAo7gF7bhMcIm3DiIMwT%2FtzY%2BDuQkbc1Pr2n14B%2BDWo2O3F5ruRGxlnF7TDPHzgI3fMQNy3y76tdaf5LOlIRhzOb92IQSSEEqibnvwL16olxZSwyahH2xd%2BVuBKeJoWMtZj0YJJt7w9wLTJ%2F6C6GH6TFuxd11KgFmkvY3QoX7HywCJhzMvpjQyW1FdRj3toPHOzxI1AW%2FTeQzXZcFDcVgDGzjd6lsK363SCWdcAv5dCF6bxc38U5LBVJtGHkMVHE4PzRRQSR%2BilvLQWV%2FQn%2BqXGiNm%2FPi1faPEBPe3FIVsR1MCWPHTuJOs6TSLb0AylSV%2BzLEHiR1Bkx2REu6my7%2BMNXv1MKP90skGOqUBjLvBNh%2F%2F%2BsVR0eCRZ7u1lYjCP9nstk0O2HJrUCniDxmvWDi4yexXHnErZKMGx%2FA00DomiAVew2fn5HoMQqeob0ILNEn19TdWcLswaJrpZFe0DVYig6F%2FWI05Nr4hIpZ%2FX1CPa0w8mPvp%2B3pQQQ%2Fyx6W47ZpfFJSkmDt%2B0lNOlgkjLR7f3jpr8pLg6d72Og34RH1D%2FKWa9Fz17gcGWcyypZc%2Bqzif&X-Amz-Signature=5026c14ae285dac5f1f5e3efb3963133e5290af0377833414cb50efbbf7ec24d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
