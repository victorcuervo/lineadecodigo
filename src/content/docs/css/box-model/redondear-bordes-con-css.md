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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK57GJH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESH1BjzuKpFLh752Kn5ar83KUHuIdJ%2BuIIbC1y8pj8vAiEAsp2AI9ftFIlNXg82W7K0mgn5fgMXhYk43yDxe7blehQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAg8qdBm%2FIsN8zt5nSrcA95c280JBnsVilGU9cwwmdI2Mi6d5O%2BtRzQrEJ6RpSvopbS9iTf%2Fwr1z7zjshVb71ZFmzWc%2BlycTT2dI9U9Gr9aEo%2FwhwKq1PTCBCU1CEBcFqMvTQhXqBvCOh7stL7Ov07t2OGWn%2FgepvT1knDTafw3MYDm%2BEmafui9CO7mHaGS%2FPA%2F6tWOmBOTEJ3Wsq9kM4d2rHRYICsvQRMeOEBg1g89FgXzKFt3O%2F%2BvVWA5JG97g2%2F%2B7yzkx11byctqGK%2BLl41%2BoTzYxgbt6blHZ62ChzXrAGcEhHM6wdOYOSSe3K1ztJFdaAYDw7AXVBMUPgv3BPGJhI1aKSHb3rGpayhd3%2FR65%2BCo1DuyXRfiiPu5yQqKxq70%2BpR17qTAYfOdchDeomP1zAytVhAsq5uIaG4NmzE%2FxHYHNmb3bp7B9XkErvsOoZ2TnaCUDgRcqvwDn%2FrrwgdKwp2G96NTIxGddeTtltoWD5qUd0XM%2BuoQIa8yps20qr4WGn3Mlr1jwiwN7oMY4WTSawp08cO%2Bi4JwfY8E2T2ScaUl0g752bXI1opeGVIVQdFpqcTjcUtnPihrxBALGMxeyCKVcAYMPzJ5Amrfb7Fuw%2F4blMzaFgw65Xtr8QM7WxwtxYfiuLB%2Fj6MCAMPWdicoGOqUB%2F0IYy2YotMe4n8k%2BU3gjPZ0zGwQJ0QXDT5rqD8YY9CNdF%2BWQ6qd65w9MOL71KeyR8MtqPo5GZO9NNanKo21kv05irVjivVPmCsj4nWunYzT5LKOAZT33E3FXwuQ1xFipC%2FSWU6jM%2BVmnrsfhmwSLEG1jG1eToAJEOAFS%2B17iqP3mp9Qd9g%2Ft6e0gT4ZeKpNjRHxJPCvzKMko8aLQqU9D6oke9eTM&X-Amz-Signature=6f5dcfbdcd5e3f48470f4a78d29e48f4d07f06dba8bca35f2a241b980e89e983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK57GJH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESH1BjzuKpFLh752Kn5ar83KUHuIdJ%2BuIIbC1y8pj8vAiEAsp2AI9ftFIlNXg82W7K0mgn5fgMXhYk43yDxe7blehQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAg8qdBm%2FIsN8zt5nSrcA95c280JBnsVilGU9cwwmdI2Mi6d5O%2BtRzQrEJ6RpSvopbS9iTf%2Fwr1z7zjshVb71ZFmzWc%2BlycTT2dI9U9Gr9aEo%2FwhwKq1PTCBCU1CEBcFqMvTQhXqBvCOh7stL7Ov07t2OGWn%2FgepvT1knDTafw3MYDm%2BEmafui9CO7mHaGS%2FPA%2F6tWOmBOTEJ3Wsq9kM4d2rHRYICsvQRMeOEBg1g89FgXzKFt3O%2F%2BvVWA5JG97g2%2F%2B7yzkx11byctqGK%2BLl41%2BoTzYxgbt6blHZ62ChzXrAGcEhHM6wdOYOSSe3K1ztJFdaAYDw7AXVBMUPgv3BPGJhI1aKSHb3rGpayhd3%2FR65%2BCo1DuyXRfiiPu5yQqKxq70%2BpR17qTAYfOdchDeomP1zAytVhAsq5uIaG4NmzE%2FxHYHNmb3bp7B9XkErvsOoZ2TnaCUDgRcqvwDn%2FrrwgdKwp2G96NTIxGddeTtltoWD5qUd0XM%2BuoQIa8yps20qr4WGn3Mlr1jwiwN7oMY4WTSawp08cO%2Bi4JwfY8E2T2ScaUl0g752bXI1opeGVIVQdFpqcTjcUtnPihrxBALGMxeyCKVcAYMPzJ5Amrfb7Fuw%2F4blMzaFgw65Xtr8QM7WxwtxYfiuLB%2Fj6MCAMPWdicoGOqUB%2F0IYy2YotMe4n8k%2BU3gjPZ0zGwQJ0QXDT5rqD8YY9CNdF%2BWQ6qd65w9MOL71KeyR8MtqPo5GZO9NNanKo21kv05irVjivVPmCsj4nWunYzT5LKOAZT33E3FXwuQ1xFipC%2FSWU6jM%2BVmnrsfhmwSLEG1jG1eToAJEOAFS%2B17iqP3mp9Qd9g%2Ft6e0gT4ZeKpNjRHxJPCvzKMko8aLQqU9D6oke9eTM&X-Amz-Signature=754ff45600715696e2535054b7e0757b30ef17c704b00ada69be067edf71511d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
