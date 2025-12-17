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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BH6RWUT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcjcVGc04mV4j5CV8GOWko4HPbLgS8l8uvSnBjHoEpQwIhAOSgP6QN%2F%2BDKFsPguZ0eEhNIp%2FA383U22ZEvgQI9OPx6Kv8DCH0QABoMNjM3NDIzMTgzODA1Igz%2FmOkzharopcx5Q6Mq3ANuFM4HfDNfVvy2Nhbw94oPEIbW1c4TCQuszJsk5KH4sU5m%2FjDJgQ9Ya%2F4ZFjy8xd%2B2eJJbOOTzrshvGaGYw4w5mjYpNpR9qEGG%2Fma2OwIf6MpKfMspwFpzdRzyzYmIShcVuMYWSkw4I9hWJGaHvcysH69Ja3w0C%2FFIaxhnRRW52yvdCGhdnH06nKgQJGqCRNTlVHoiERah3IWTgOJsvS5moBz2TdOpR%2FLEXiO%2F5hPccFCF7jATZoAnf69Gu9QgSwE9lk3%2FcMtlvochMTMuXwRAW3ePSTQqNlJXlsdLB%2FZuTerQeeZZnankuny6Hvc3DPZEoFVrsaCWl0FJY2EL1uqWl1mIyvHeE%2Bfs0jHbF2d%2BW0YlaXsBHbxHAzZCRI2zavuM%2FMRzPdPWNnPCjCskkH7KDYy5xYZW2Q%2FVRboQcAkyoe2%2BQHUVCvuemMYRoPWtdwBQa44rv%2FiOa1sKQLH%2BuKrwrs8ujwQrgYyTpqrSMWW3hXc0nZSHzht0wXPR6NjS8b%2F4Q7U%2FHXNjSRTMyhMbc9%2BlyMi942kGxwwCkSn9TN5ZWn%2BjRn6EPt644TinN4jmFTPZCGQoQTaHq%2BFUAN0mx6BHZnNtEZhcVfFD4FdylWI3T6WTueV9NpR%2F9oUlWTDJqorKBjqkAXLDuWeh15gUcDVnKG%2F7WCmzKrVOxwQk%2Btes2iWZR7vQeTaUGLHVGQmPedm0Ff9E5EmiYq7Y62DjS99asUedK%2Bmzez%2B%2BvSDAugpP%2FOt5hsZTy1RdglE3nkj4fEJGUdnbstrMqQGR2N8iA%2FGo7%2Bbd4Hgfr5aQaLHSziAZbM1sEWHrAQqwALiYat6HCh%2BKvudnWU80Ecoy4CK1%2BYFAAzvHn%2BwQJd5k&X-Amz-Signature=4b2e91ff9650d07101234665481f6b59254d31df2470cf13c2ff0dd6353f1d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BH6RWUT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcjcVGc04mV4j5CV8GOWko4HPbLgS8l8uvSnBjHoEpQwIhAOSgP6QN%2F%2BDKFsPguZ0eEhNIp%2FA383U22ZEvgQI9OPx6Kv8DCH0QABoMNjM3NDIzMTgzODA1Igz%2FmOkzharopcx5Q6Mq3ANuFM4HfDNfVvy2Nhbw94oPEIbW1c4TCQuszJsk5KH4sU5m%2FjDJgQ9Ya%2F4ZFjy8xd%2B2eJJbOOTzrshvGaGYw4w5mjYpNpR9qEGG%2Fma2OwIf6MpKfMspwFpzdRzyzYmIShcVuMYWSkw4I9hWJGaHvcysH69Ja3w0C%2FFIaxhnRRW52yvdCGhdnH06nKgQJGqCRNTlVHoiERah3IWTgOJsvS5moBz2TdOpR%2FLEXiO%2F5hPccFCF7jATZoAnf69Gu9QgSwE9lk3%2FcMtlvochMTMuXwRAW3ePSTQqNlJXlsdLB%2FZuTerQeeZZnankuny6Hvc3DPZEoFVrsaCWl0FJY2EL1uqWl1mIyvHeE%2Bfs0jHbF2d%2BW0YlaXsBHbxHAzZCRI2zavuM%2FMRzPdPWNnPCjCskkH7KDYy5xYZW2Q%2FVRboQcAkyoe2%2BQHUVCvuemMYRoPWtdwBQa44rv%2FiOa1sKQLH%2BuKrwrs8ujwQrgYyTpqrSMWW3hXc0nZSHzht0wXPR6NjS8b%2F4Q7U%2FHXNjSRTMyhMbc9%2BlyMi942kGxwwCkSn9TN5ZWn%2BjRn6EPt644TinN4jmFTPZCGQoQTaHq%2BFUAN0mx6BHZnNtEZhcVfFD4FdylWI3T6WTueV9NpR%2F9oUlWTDJqorKBjqkAXLDuWeh15gUcDVnKG%2F7WCmzKrVOxwQk%2Btes2iWZR7vQeTaUGLHVGQmPedm0Ff9E5EmiYq7Y62DjS99asUedK%2Bmzez%2B%2BvSDAugpP%2FOt5hsZTy1RdglE3nkj4fEJGUdnbstrMqQGR2N8iA%2FGo7%2Bbd4Hgfr5aQaLHSziAZbM1sEWHrAQqwALiYat6HCh%2BKvudnWU80Ecoy4CK1%2BYFAAzvHn%2BwQJd5k&X-Amz-Signature=f8d75e97ae094f65bef8de20874f61e0acbaee350457e5884a84105f612098a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
