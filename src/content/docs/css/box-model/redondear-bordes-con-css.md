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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJF6RPRP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGubKjo9wnjQB092gzwnn2nIxuIaOW2PbKPKupELkDsAiA%2BirlEXVl8qXwq3Ip5KqeLqGj%2FYR7oK1xyi8wFcWDIsCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMfoDBzloA12p3UjV1KtwDPgUvpKbSWYOVv3T96%2BY6z%2BPJKOJnSMUTM%2B06qvBl9VtiR9jzHrFNePbzQ2SO40LonsUGIDdPHSBzHFEFgSE3Yd%2FxlNb0zysNapuAQT6iTI%2FRHLZZJH6n1Qv22qAUtSFsdlk%2Fn0BjtuNlKa48ROLBEnxmB5AK%2Fd1oqO3kEFIXIaw7Ok1kPnC1DXZpjet69mQhnR9lMQkHoN8hHN93qZlX8a8To%2BqhpBWGEh4aZk%2FER5pKpZLaocITHZhSlxxYh5ZkJlG2SBSAs1mxczmuZkjMzpEKX8MzV921UpHathp4JO0wkqS6wWM6Ml3lNR9s20%2FP7GcIHsj7ZR4z79qSa5SSSxv%2Fa41OfFJemPyuh2505dwMT581yW3u%2B1X2gBFnBYI%2FLXTNIOLj96UQtgnNmYZLqgRBBt3lzhRsbVfIAsn1Ux6QEJJjyl7xL%2F3CcuXoO313g22JHr1hXuuVZSElYCsLvYNRAEuIqI1eebBq56vcZindRZXAEf22om6oXKaHoETk7Fs4gI7RYEMEiuDsXB%2B7eZWaORXaKPeDvYQLb1yQF%2FJwakUvSyCCxJtsRPGm%2FJNWv62ltModUwzjBh%2F7WvSsFAWXnMsAN1O6t7Fl3QtN72GIc%2F0Wt79EeECPhWgwpbiJygY6pgGdQ8BQUMNZCaWQIlw9OS0oehEDgB9RpAhRVIuxKoJYd5J1HP8A2A0pQAL7%2Be5BU7P8GWqe%2BXbt%2BK65eAbyurV%2BmVrXIKAwJSAqj8UYu3vx3KIWGZrgC%2B4mnvWwleNKALCYUPvO5mEtchTL3XPlJSZqnpYEqVwEmZ2%2FpR%2BVn2eS4nv66EDZgDE%2FRtlUiXM71OtJHqOa6VT8upQwRyi2ZCU7YxYB1IFi&X-Amz-Signature=b0ad6fc8466556c6ed43222193dac980a077d3fe8c3babdab30b555458d47aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJF6RPRP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGubKjo9wnjQB092gzwnn2nIxuIaOW2PbKPKupELkDsAiA%2BirlEXVl8qXwq3Ip5KqeLqGj%2FYR7oK1xyi8wFcWDIsCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMfoDBzloA12p3UjV1KtwDPgUvpKbSWYOVv3T96%2BY6z%2BPJKOJnSMUTM%2B06qvBl9VtiR9jzHrFNePbzQ2SO40LonsUGIDdPHSBzHFEFgSE3Yd%2FxlNb0zysNapuAQT6iTI%2FRHLZZJH6n1Qv22qAUtSFsdlk%2Fn0BjtuNlKa48ROLBEnxmB5AK%2Fd1oqO3kEFIXIaw7Ok1kPnC1DXZpjet69mQhnR9lMQkHoN8hHN93qZlX8a8To%2BqhpBWGEh4aZk%2FER5pKpZLaocITHZhSlxxYh5ZkJlG2SBSAs1mxczmuZkjMzpEKX8MzV921UpHathp4JO0wkqS6wWM6Ml3lNR9s20%2FP7GcIHsj7ZR4z79qSa5SSSxv%2Fa41OfFJemPyuh2505dwMT581yW3u%2B1X2gBFnBYI%2FLXTNIOLj96UQtgnNmYZLqgRBBt3lzhRsbVfIAsn1Ux6QEJJjyl7xL%2F3CcuXoO313g22JHr1hXuuVZSElYCsLvYNRAEuIqI1eebBq56vcZindRZXAEf22om6oXKaHoETk7Fs4gI7RYEMEiuDsXB%2B7eZWaORXaKPeDvYQLb1yQF%2FJwakUvSyCCxJtsRPGm%2FJNWv62ltModUwzjBh%2F7WvSsFAWXnMsAN1O6t7Fl3QtN72GIc%2F0Wt79EeECPhWgwpbiJygY6pgGdQ8BQUMNZCaWQIlw9OS0oehEDgB9RpAhRVIuxKoJYd5J1HP8A2A0pQAL7%2Be5BU7P8GWqe%2BXbt%2BK65eAbyurV%2BmVrXIKAwJSAqj8UYu3vx3KIWGZrgC%2B4mnvWwleNKALCYUPvO5mEtchTL3XPlJSZqnpYEqVwEmZ2%2FpR%2BVn2eS4nv66EDZgDE%2FRtlUiXM71OtJHqOa6VT8upQwRyi2ZCU7YxYB1IFi&X-Amz-Signature=a910e2f87abbf9222de647b690a6a922052a7b853654e1861652ed35f52bb441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
