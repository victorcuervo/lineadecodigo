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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DR6UOX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD8QWK9lEU%2FWgHBy%2Fpw372ktO9OBAr%2FsZ7u5k26x%2BvwlwIhAOtNMCXZWlW7SE6VGXiOJgq6GnW3%2BeGJi1WPqoMlRfJNKv8DCEEQABoMNjM3NDIzMTgzODA1IgxYfGSAChoRYByXGoYq3AOebj%2FK7TKSy%2FpGNLjJs2A2R%2FHW4ZFi5q%2BGLFlUiKHx1ZvZhnXvTPfxzxCpGt9zeqxIZAn0aEe9qj9Bt%2BuejeWznAQj%2BioYP9m2dF%2BybSsXzAunrOuw9Mmj0DgF7N7F9xc7L%2FqfAE7ZbVFD1wD9JZP13M2A%2BwdOaFbOJj8tW97JRhlSaRNTxn5nVgEj75WRSPGkbeEQW%2B4Z1fJ6d4g0aP43AsApCpWHa3eH%2FWc84FadNQQnIkaHI6UBgYdp95N7nRNulfXqew2AG7EEL6PI94UiaXvqW7QGpQoordM3KfYmWZIXEGYIP3dWEz1N8gFuluRtEqmnF5t%2FAWOW36NgmuBzvaSnL%2Bri2rACQXO82UrPEI9uD05pym1Toa9whAIaf00o6Zsa8%2FsYjrbMiorz3pyw5QQRsPHifgQ2lpZHf9JPwKQkTQ9bWxBntpVgFPqd%2BFdQPgL8W9gO4vhQFFvI5yeLRTe59%2FQOYeBqBlR8VB1HGJ6cLlxUhyEqodcgdzEccm3%2BbN1%2FG1gqGrO4YOwPQUIqM6eQggCABObBK%2B%2BbJ%2Bxmc9qKRok0muQataiCEdU4NBzG1dR319CvPWH8YdV4ILeUPkt7s70P9EDAXnP8Pedci67FocHVmL%2BS1KMO8TDhh8XJBjqkAR%2BoZIWpE11Pr1d%2Fa%2BZbYoPjj3EKxCuY1DhGEoqCpmmAQhbuxvg7BWIqRJPZG%2BylrhlB4DDplj67OzvKmcD5MVmPcjUPoSVB5qjfstof69wzq4dXBXmzwzyOSB%2FldxM%2FLG56ShxNZBS7SpwIgtWqLzK6173SYaQEachZxT5NolC2LMX%2Flsqok8672uiG2URyauJ25x6QV8JpdxXzTSfnHYtCh8Qg&X-Amz-Signature=118f4997a0e9c3ea37df61553dcb29342bee557b01c5bb89e6fe1224ea775db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DR6UOX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD8QWK9lEU%2FWgHBy%2Fpw372ktO9OBAr%2FsZ7u5k26x%2BvwlwIhAOtNMCXZWlW7SE6VGXiOJgq6GnW3%2BeGJi1WPqoMlRfJNKv8DCEEQABoMNjM3NDIzMTgzODA1IgxYfGSAChoRYByXGoYq3AOebj%2FK7TKSy%2FpGNLjJs2A2R%2FHW4ZFi5q%2BGLFlUiKHx1ZvZhnXvTPfxzxCpGt9zeqxIZAn0aEe9qj9Bt%2BuejeWznAQj%2BioYP9m2dF%2BybSsXzAunrOuw9Mmj0DgF7N7F9xc7L%2FqfAE7ZbVFD1wD9JZP13M2A%2BwdOaFbOJj8tW97JRhlSaRNTxn5nVgEj75WRSPGkbeEQW%2B4Z1fJ6d4g0aP43AsApCpWHa3eH%2FWc84FadNQQnIkaHI6UBgYdp95N7nRNulfXqew2AG7EEL6PI94UiaXvqW7QGpQoordM3KfYmWZIXEGYIP3dWEz1N8gFuluRtEqmnF5t%2FAWOW36NgmuBzvaSnL%2Bri2rACQXO82UrPEI9uD05pym1Toa9whAIaf00o6Zsa8%2FsYjrbMiorz3pyw5QQRsPHifgQ2lpZHf9JPwKQkTQ9bWxBntpVgFPqd%2BFdQPgL8W9gO4vhQFFvI5yeLRTe59%2FQOYeBqBlR8VB1HGJ6cLlxUhyEqodcgdzEccm3%2BbN1%2FG1gqGrO4YOwPQUIqM6eQggCABObBK%2B%2BbJ%2Bxmc9qKRok0muQataiCEdU4NBzG1dR319CvPWH8YdV4ILeUPkt7s70P9EDAXnP8Pedci67FocHVmL%2BS1KMO8TDhh8XJBjqkAR%2BoZIWpE11Pr1d%2Fa%2BZbYoPjj3EKxCuY1DhGEoqCpmmAQhbuxvg7BWIqRJPZG%2BylrhlB4DDplj67OzvKmcD5MVmPcjUPoSVB5qjfstof69wzq4dXBXmzwzyOSB%2FldxM%2FLG56ShxNZBS7SpwIgtWqLzK6173SYaQEachZxT5NolC2LMX%2Flsqok8672uiG2URyauJ25x6QV8JpdxXzTSfnHYtCh8Qg&X-Amz-Signature=84ca85599d2b8babf23bc274a6ca583366486428dc05dc3a4d97576852e697cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
