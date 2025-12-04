---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665657C7UT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIF7%2FOrxf5XB4kIazMF82q%2FATHMWx4apKVh3Zkzlsxq8yAiEA18j3VbwU4NiXSdBwm3tdVdgzKdFhQKuNPkDGba1uJMcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKHwITdIjUcIFvgt5CrcA2QvaWz8z8wMbRFw%2B1T8Q0si8snEVYR3u%2Bj0G%2FJdZYJkvwRQyJ1Fk97TwwHyFeFAmc%2Bxdkd%2BgXSzxqthUtkjaJgQ2dURpk40%2BKXIwi2rXeOYaSAaLWAdhLSQfVnSXJXe%2FglNsWGwm8bgXcR8DLV5MruzluB7QyI51Ooz7qwlTZf9vkWTDC3UN0M17F1B%2Bs9uqbVq5C9u75xt1R0LwnO9aRZ97o0Vvv2ZbHmhoNNW4x9dmgUedvzfoKPN%2FiZnsYEtngpdSfkUc%2FGHVAf%2BPZ95JvwIHfg9%2FTRbG%2BFXAIxAoR7XBsziMTgpSV9g8e9E2SacxXlV6XCKv%2B%2Fg3C6tojzpXZJ67zpyxQBskW9GYHrgFFl8hUj5nvEHUqvVX72czgL8qy40jQf0EHUGtPbcifv12gSel6uag%2FuewgsGdb%2Bz8DvA5%2BOkIS%2Fcj6IqyFGGzL6tUAg%2Bu66dGZj0bqQgEuBNU9soQ0BPcBKwUIvlvNEqqtjwXh%2F2mW0uRxzbamDANZnd%2Fl4Ef1IZqrGW5wKZMEqaXZi7A4NmDkLGYAzR1MTX3AsPEWP3RgaAcUWNBA5RZKkPIlebw3oN8euaYLsrp%2BWw2KutdAcQvz8UzJPdeKlDC827FrR37BD4nziTrjuLMKrzw8kGOqUByLEkEUn6bNA1lGxRIElATrzgbrLmylQM1J%2BA8CRLpn5Ph%2Bmz18mVxCSaXmEaE0tKHkYjQIESsZm2fai80w8762BPE%2BlB2%2BPxr%2Fz6r480eMXIrcHfiFWJOwnmWfYGJvb%2FkwJ9%2FTESWm5KDys2mc6EcePD2gu0Q0umC%2B3f8IIbfLpu7%2BnvxD9U5c0RBhr7o6apmIHC7rcZXSsl1ulCGm1sr9PoveeY&X-Amz-Signature=b2ef1f9f999bea7bbe2d482aab0b03ea908fc4e620547c3e7e8b1e187ee84947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665657C7UT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIF7%2FOrxf5XB4kIazMF82q%2FATHMWx4apKVh3Zkzlsxq8yAiEA18j3VbwU4NiXSdBwm3tdVdgzKdFhQKuNPkDGba1uJMcq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKHwITdIjUcIFvgt5CrcA2QvaWz8z8wMbRFw%2B1T8Q0si8snEVYR3u%2Bj0G%2FJdZYJkvwRQyJ1Fk97TwwHyFeFAmc%2Bxdkd%2BgXSzxqthUtkjaJgQ2dURpk40%2BKXIwi2rXeOYaSAaLWAdhLSQfVnSXJXe%2FglNsWGwm8bgXcR8DLV5MruzluB7QyI51Ooz7qwlTZf9vkWTDC3UN0M17F1B%2Bs9uqbVq5C9u75xt1R0LwnO9aRZ97o0Vvv2ZbHmhoNNW4x9dmgUedvzfoKPN%2FiZnsYEtngpdSfkUc%2FGHVAf%2BPZ95JvwIHfg9%2FTRbG%2BFXAIxAoR7XBsziMTgpSV9g8e9E2SacxXlV6XCKv%2B%2Fg3C6tojzpXZJ67zpyxQBskW9GYHrgFFl8hUj5nvEHUqvVX72czgL8qy40jQf0EHUGtPbcifv12gSel6uag%2FuewgsGdb%2Bz8DvA5%2BOkIS%2Fcj6IqyFGGzL6tUAg%2Bu66dGZj0bqQgEuBNU9soQ0BPcBKwUIvlvNEqqtjwXh%2F2mW0uRxzbamDANZnd%2Fl4Ef1IZqrGW5wKZMEqaXZi7A4NmDkLGYAzR1MTX3AsPEWP3RgaAcUWNBA5RZKkPIlebw3oN8euaYLsrp%2BWw2KutdAcQvz8UzJPdeKlDC827FrR37BD4nziTrjuLMKrzw8kGOqUByLEkEUn6bNA1lGxRIElATrzgbrLmylQM1J%2BA8CRLpn5Ph%2Bmz18mVxCSaXmEaE0tKHkYjQIESsZm2fai80w8762BPE%2BlB2%2BPxr%2Fz6r480eMXIrcHfiFWJOwnmWfYGJvb%2FkwJ9%2FTESWm5KDys2mc6EcePD2gu0Q0umC%2B3f8IIbfLpu7%2BnvxD9U5c0RBhr7o6apmIHC7rcZXSsl1ulCGm1sr9PoveeY&X-Amz-Signature=ec7811b75b4a4606cc6be7ac9bd815506894f827fb60106c3f93705078bb61e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
