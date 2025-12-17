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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q72WXSFK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW37u%2FemGpB6em%2FiFmaJJqzfHNopa3SFxJN9rYTTUEUgIgNuRmxiMSwZAd4X5%2Fy38DL2BO5gO%2BLqp%2FsmOOMKBKM9Yq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO2ONkeeptE%2F%2BBiaAyrcA%2BrIOdk66emqiZVqQ1HEX3TcsoJUkmqpoB%2BPnVNLk8WOgVfSGVVGpZEHylchNGNj22KCxAez0NyvWrOuReL8bq%2FEuCj3862IN2UJnrentbCf8AeWzpoRGToYNnVq77fmOc74fpFL2dIchzmRPP2wjbZHqj9ws%2FMO%2FcmkzEdWJVH4tmqA9Fci6lqUSKfHs5BBKk6gzp6SH7KfReDU%2BHer9ajLV9%2BGFdgzJz711C00wjqB7hJ5ayhM4nasTU0oIZIvNqbYcxalGWBjnnY%2Bz7GdkkBnfPjKpSzyw4rFBFzAwIL%2F7dOP%2B%2FlFuutZg1JUzXTQ7qZXXMCKH2Gr5wj9VX13qZXj4pL86Ihn8LIihnvxATfhlMfiVfozZvUdYF4jb5EqZX0uGwZID3Kh8gtTeRCEnL3uaLilr0W8nnGNJCBr0wX6x9TEaitMp4ONnvdY%2Fe%2BaZJQ1pbjadgv3gwVk10jqAys3Li31v3nSn%2BVvGv4TEGfeiE60AtZYPdEnWFDWPWRudepXNUFV5aV8S1Jwxn4ak8Bh4pnHhq6O4SUFt93t2ubUPzgzSgIGCrLHIndB3GMBcOwU7d5gORHhxa5FEZp0%2BfNWzHcO51lP25ZZXO0a0X0SIq2D%2BeRD01eARV%2B%2FMMScicoGOqUBfwss4g5nWrDDIZh9hYBuaB9HAkoj8tIpOulnIMDRXN9OaE%2Fg8tyZLFc7EZLf0ZsOIYMKKbFj5gU5N9Py6sbpskdewjy4icmcz%2B0nm%2FCxN5TNOd1fAqiQxgdqB4xU8lNdDuvyxrfl5QCjNGQEdYuhbx068tY9oJ3JuqHdzbSsI5zOFqBDRPTKMYyCUgB1abxYdnpOQjW%2F5lSVpuHg2Io059bTBQAR&X-Amz-Signature=5aca07604e019def29fba1ff668aa5d10849313a3dca3ef08ccffc5de4f7f3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q72WXSFK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW37u%2FemGpB6em%2FiFmaJJqzfHNopa3SFxJN9rYTTUEUgIgNuRmxiMSwZAd4X5%2Fy38DL2BO5gO%2BLqp%2FsmOOMKBKM9Yq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDO2ONkeeptE%2F%2BBiaAyrcA%2BrIOdk66emqiZVqQ1HEX3TcsoJUkmqpoB%2BPnVNLk8WOgVfSGVVGpZEHylchNGNj22KCxAez0NyvWrOuReL8bq%2FEuCj3862IN2UJnrentbCf8AeWzpoRGToYNnVq77fmOc74fpFL2dIchzmRPP2wjbZHqj9ws%2FMO%2FcmkzEdWJVH4tmqA9Fci6lqUSKfHs5BBKk6gzp6SH7KfReDU%2BHer9ajLV9%2BGFdgzJz711C00wjqB7hJ5ayhM4nasTU0oIZIvNqbYcxalGWBjnnY%2Bz7GdkkBnfPjKpSzyw4rFBFzAwIL%2F7dOP%2B%2FlFuutZg1JUzXTQ7qZXXMCKH2Gr5wj9VX13qZXj4pL86Ihn8LIihnvxATfhlMfiVfozZvUdYF4jb5EqZX0uGwZID3Kh8gtTeRCEnL3uaLilr0W8nnGNJCBr0wX6x9TEaitMp4ONnvdY%2Fe%2BaZJQ1pbjadgv3gwVk10jqAys3Li31v3nSn%2BVvGv4TEGfeiE60AtZYPdEnWFDWPWRudepXNUFV5aV8S1Jwxn4ak8Bh4pnHhq6O4SUFt93t2ubUPzgzSgIGCrLHIndB3GMBcOwU7d5gORHhxa5FEZp0%2BfNWzHcO51lP25ZZXO0a0X0SIq2D%2BeRD01eARV%2B%2FMMScicoGOqUBfwss4g5nWrDDIZh9hYBuaB9HAkoj8tIpOulnIMDRXN9OaE%2Fg8tyZLFc7EZLf0ZsOIYMKKbFj5gU5N9Py6sbpskdewjy4icmcz%2B0nm%2FCxN5TNOd1fAqiQxgdqB4xU8lNdDuvyxrfl5QCjNGQEdYuhbx068tY9oJ3JuqHdzbSsI5zOFqBDRPTKMYyCUgB1abxYdnpOQjW%2F5lSVpuHg2Io059bTBQAR&X-Amz-Signature=315a4979cb583de291a6b844707300816bd5446dacef1a7b23816e62dbfec146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
