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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XRCL75C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0OSUd37dK5iOacWPXOPz%2FwcTcKJAebEUH%2FYibuR6G5wIgFkK6SLm6zPD9zx%2FsOj4V55YZzvcGe5h7tBOMb4SNygEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIs4ahAoSkqXtHfCCrcA6qFLPQtnmMux0yna9SZUscXI3Zws2t8n8BPZfSMYNLNLQkHXGnDWe7vexvC8cY9b894X2%2F3pMDnU83gm4GLUbYDReOB6dypiq7FM6%2BI9O01waZnNqVmYx8Mg1g9Y1VsVzoYmNNjfQQqbgJdS82wPMvqPOhI2wh2SIt7poVCJvYzP6LmWqsfZUOuyLMuFygLei%2Fs16Q2jFRd6jfEO%2BxDEoYjIpRIRI2s7WSawoozXTNyfM%2FsIr79jn0H9lgmxjvBHKcxozCTt2cOtabZKJD6xNDTe8h2HXxSJ8pB3z6Ixaj3KBMi4ou5OJTJqsOcwthbkIbVZx4zEuT2VlN%2FAU6kradNi5OKgkmB%2B%2BtHd1yS%2F074Ejq0X5D2yaAW6Qcsn7NLgxOUpdalu%2FqUpFG72zBMaOkWAuk8ZBV9PjBnH1wOUvUr8x1zk6TWfcwtnHc9IxSXxtTtapLuXFbMtJNhfyooh9Yt%2FtK0Fm7lk7Hk8U5ddkzRVtVpUG2CxJmbBYLCTVRkCC5PD6bUQxr7YiwIK8MXD95d3z%2B2OO9kfd%2FjDkieEE7QhXQ2x2%2BR9qR1BNbZ%2BSitdbG%2FYMfCEJULvO3YHOEsXm6Monp1TYALh0Tnk%2Bx%2BF9fVRwutRDxAVToGP3ZzMNCfi8oGOqUB49s4WV5mHGeF8dR1vK37iQzSo7Wb5wanffm4zcGRlKZskwzVa7lPS9So9u7Z3HWvtBPweWvNSOgcKNDM9XM3SzyPncNun1bEIZ4rArpsviTt3c3u5DnpezcgIHY%2FsmS2vY7xAiYTM1A6qlbDDGyT1bfeG8gSOnuryCAg8%2FEBGxkJ9k8hEX5tYQ6Ureoakl77wIvM3JkqEuhaAam%2B%2BLDPDGrkOvbN&X-Amz-Signature=3641e0db51eaa24ff8e2f866e3d64a3bcbcb7fb80e7cf21ef2acbb7c7b8388ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XRCL75C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0OSUd37dK5iOacWPXOPz%2FwcTcKJAebEUH%2FYibuR6G5wIgFkK6SLm6zPD9zx%2FsOj4V55YZzvcGe5h7tBOMb4SNygEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIs4ahAoSkqXtHfCCrcA6qFLPQtnmMux0yna9SZUscXI3Zws2t8n8BPZfSMYNLNLQkHXGnDWe7vexvC8cY9b894X2%2F3pMDnU83gm4GLUbYDReOB6dypiq7FM6%2BI9O01waZnNqVmYx8Mg1g9Y1VsVzoYmNNjfQQqbgJdS82wPMvqPOhI2wh2SIt7poVCJvYzP6LmWqsfZUOuyLMuFygLei%2Fs16Q2jFRd6jfEO%2BxDEoYjIpRIRI2s7WSawoozXTNyfM%2FsIr79jn0H9lgmxjvBHKcxozCTt2cOtabZKJD6xNDTe8h2HXxSJ8pB3z6Ixaj3KBMi4ou5OJTJqsOcwthbkIbVZx4zEuT2VlN%2FAU6kradNi5OKgkmB%2B%2BtHd1yS%2F074Ejq0X5D2yaAW6Qcsn7NLgxOUpdalu%2FqUpFG72zBMaOkWAuk8ZBV9PjBnH1wOUvUr8x1zk6TWfcwtnHc9IxSXxtTtapLuXFbMtJNhfyooh9Yt%2FtK0Fm7lk7Hk8U5ddkzRVtVpUG2CxJmbBYLCTVRkCC5PD6bUQxr7YiwIK8MXD95d3z%2B2OO9kfd%2FjDkieEE7QhXQ2x2%2BR9qR1BNbZ%2BSitdbG%2FYMfCEJULvO3YHOEsXm6Monp1TYALh0Tnk%2Bx%2BF9fVRwutRDxAVToGP3ZzMNCfi8oGOqUB49s4WV5mHGeF8dR1vK37iQzSo7Wb5wanffm4zcGRlKZskwzVa7lPS9So9u7Z3HWvtBPweWvNSOgcKNDM9XM3SzyPncNun1bEIZ4rArpsviTt3c3u5DnpezcgIHY%2FsmS2vY7xAiYTM1A6qlbDDGyT1bfeG8gSOnuryCAg8%2FEBGxkJ9k8hEX5tYQ6Ureoakl77wIvM3JkqEuhaAam%2B%2BLDPDGrkOvbN&X-Amz-Signature=564747555bd17c8d6a2af08180d17983fdbad11450eb96eeed04f0b1442b3030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
