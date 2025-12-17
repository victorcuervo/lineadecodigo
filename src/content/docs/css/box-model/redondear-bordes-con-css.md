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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MOEPA6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm6n5MLVIuHKreCW3c8YhMEgcIZ4ECQyCe%2FbZ2Kf3EMgIhAKBmWcp9dkYWlOZeTog6e0b61wvEhy%2F4Y0wpXabWDr2yKv8DCHQQABoMNjM3NDIzMTgzODA1IgykQy8lSnLDIiA7eHUq3ANWM7CpcBieM%2BJuq3tDSnwUddFw6N4SbhrwC%2FKO44tcUM0OOacmr66A%2Bjt4K3bagIx7uRx1erY7ynUP7%2BRG20PB3ZieeXv16Q01h%2FIUEoD3sEukXMEadwgHB%2FXnP7ZxCYKcuj%2BT8bGeanBDKI41i%2Bco0ROpYW75oG3UYR1QUw2j2AIhP3MPtzIBGcJoURne35YGiZ77%2B%2BJ0hAmFSihjyoTceuw2WCqDXLj2sz05B31hkAlScm6L7ypZFdnp8GvsJaioVlN5S36paE1Si%2BuudXLRTvmzaoelWd2UAYlU8gZaDR%2FqWH%2BRiRQvRitTQQ7POeKaWVzBOg4gddjYh0vpUACN61LsFZjS26y3K142uTPfwvd7i540RkbVPNUik8zg8vvrCmbS78ss8nafHZE3pKzizm8U%2FIupMqGvWnqHuqnMifhriXirTPsdxAEWGRrZhGNyXt0YBoLfHveiRow3s1t5aIavVxT7I8gasy0%2FtPjY%2Fzq%2BWeot57d9XCsZFSJzFrMqFNRy6djyOoiPtPtnGVyeIWcGTVhW3T9eH0bOJTTB6a4GgXeqMQc8hsAwB9sj3cuyKv%2BsqgWaesHVxjfemVqR1lsM4GiJ7BhRqMVx2g2Pa1xBcXvgkp2zkrzOLDCKsojKBjqkATlfw6IOhKxt97mSS1nnvHyj%2BKiIVAdQzOe9YZ5yfOPhD2AkuwTxoi9FxCdC4fhSM5IzO8bOLpK9oc2HwMBzDd60s5Wpo96iFPm%2FsJcD1DsjTNB0N7PhCfwiZFHJ04hTCFVngnkoGjazEr9ZvSMAYRlSrjXyola%2FLwpPQ%2F40gcQhIdrIr9y5lubsz%2FDEj8n%2BnVTAK5hDZp7iCMW5iPx%2BqUBtY6TV&X-Amz-Signature=a37422f2d023c418e81827341e1ae361e6ec567f4bbf9f21e5ad340162ba7326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MOEPA6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm6n5MLVIuHKreCW3c8YhMEgcIZ4ECQyCe%2FbZ2Kf3EMgIhAKBmWcp9dkYWlOZeTog6e0b61wvEhy%2F4Y0wpXabWDr2yKv8DCHQQABoMNjM3NDIzMTgzODA1IgykQy8lSnLDIiA7eHUq3ANWM7CpcBieM%2BJuq3tDSnwUddFw6N4SbhrwC%2FKO44tcUM0OOacmr66A%2Bjt4K3bagIx7uRx1erY7ynUP7%2BRG20PB3ZieeXv16Q01h%2FIUEoD3sEukXMEadwgHB%2FXnP7ZxCYKcuj%2BT8bGeanBDKI41i%2Bco0ROpYW75oG3UYR1QUw2j2AIhP3MPtzIBGcJoURne35YGiZ77%2B%2BJ0hAmFSihjyoTceuw2WCqDXLj2sz05B31hkAlScm6L7ypZFdnp8GvsJaioVlN5S36paE1Si%2BuudXLRTvmzaoelWd2UAYlU8gZaDR%2FqWH%2BRiRQvRitTQQ7POeKaWVzBOg4gddjYh0vpUACN61LsFZjS26y3K142uTPfwvd7i540RkbVPNUik8zg8vvrCmbS78ss8nafHZE3pKzizm8U%2FIupMqGvWnqHuqnMifhriXirTPsdxAEWGRrZhGNyXt0YBoLfHveiRow3s1t5aIavVxT7I8gasy0%2FtPjY%2Fzq%2BWeot57d9XCsZFSJzFrMqFNRy6djyOoiPtPtnGVyeIWcGTVhW3T9eH0bOJTTB6a4GgXeqMQc8hsAwB9sj3cuyKv%2BsqgWaesHVxjfemVqR1lsM4GiJ7BhRqMVx2g2Pa1xBcXvgkp2zkrzOLDCKsojKBjqkATlfw6IOhKxt97mSS1nnvHyj%2BKiIVAdQzOe9YZ5yfOPhD2AkuwTxoi9FxCdC4fhSM5IzO8bOLpK9oc2HwMBzDd60s5Wpo96iFPm%2FsJcD1DsjTNB0N7PhCfwiZFHJ04hTCFVngnkoGjazEr9ZvSMAYRlSrjXyola%2FLwpPQ%2F40gcQhIdrIr9y5lubsz%2FDEj8n%2BnVTAK5hDZp7iCMW5iPx%2BqUBtY6TV&X-Amz-Signature=5cf3e015cf831a0792c78b392a2b503225d44d8c4fd4985cf05bb61765fd11ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
