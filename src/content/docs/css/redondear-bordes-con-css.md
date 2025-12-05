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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUOJOZG3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2XAQ%2BEdk2c%2BuAQkvWih0FbBzmhy8zZpxQ9r8tqF5zoAIhAKvnKk2b5PwPcQBc6N7jrtfeBAf2X4ofaaKWky8t6smjKv8DCGAQABoMNjM3NDIzMTgzODA1IgxvNLXXhlD0iQkiQMgq3AOiwwWS8%2BP07sNZ%2FuJUlTOdoce4Cbb6QRml%2FtD32%2F%2FsXPcKHKX28wYmc%2Fx1N23q8R9Gh3TN1gvpfHeTs4XDr2JGlw8qo1bmokuCTvWpPx03aVatMvxtZ%2FCFiXM2nJhG5ssTOfkQvDTvRUxKQjaz6%2BQt%2Fk%2B6ynMmIFfFLKABddZfju01GNRLyVqWOFLImHfw0s7RNMHAt33xlH94TsaJCx5XRATkA9JAVIFuPM13SpUJzJvDmAIOxhsVjbQPUDa62BP8GTaMH%2FGhTl7D5xhTHoeAqLDQUP8T2J1tKQyYgHnDWa7PENXoXdsZ5xLqnWIK0rf%2BtlPdCK2QrjOQ8c%2B4hMGCJ70gGrokfnTLvo8K6g7SahZnHyjG8KB%2B3OgCIQ36lkcsVrDxyos%2FHZI9gNXZUXtaBlkTfKvtbIRD%2BTs2RcCnsKtuZIJBbiTJx09lhGHI0MPr7nxM8XnMmmF55Rh6CKhLL3NZdW9N%2B9bUKg1sd4YcESsKtf%2FcR8p%2Fh1y7ksIjT9VAe79OP5kbEJeSfna%2Bq%2BHHidToMJLOzl6mUfJMBdkhDemUFtECMpSjda4XgNx6oZzRrO8uB7ElDCNHzTtxDEO1bRaqsTEe58RlY5H5m3e%2FyNtWVFR181PIxpItBzC78MvJBjqkAXN0l0wa8bkS7DOWfuqn9LNypKS5XRTlS1N0lDuxFJ8ZhkBXCwc1IzjyH%2FQNH9AOdTCFMpnKpIW%2FYCgF%2BUnVPUhSxlLiRem4lX670jXe8xLyM97dZ6uET9vz%2FQILdixK6nfnq3jh5yEuZ4Is22tnrkDXlQOGTvLDVH3qhBtUK8XAGwJumhZiI%2Fz1kd8I2fJ4E6aTD1ACTKo%2FbG1nLqhuip3uYlza&X-Amz-Signature=d1b9b05c3457e11d1e3195e737de92c547ebdcb589227521b356f20dbe87406e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUOJOZG3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2XAQ%2BEdk2c%2BuAQkvWih0FbBzmhy8zZpxQ9r8tqF5zoAIhAKvnKk2b5PwPcQBc6N7jrtfeBAf2X4ofaaKWky8t6smjKv8DCGAQABoMNjM3NDIzMTgzODA1IgxvNLXXhlD0iQkiQMgq3AOiwwWS8%2BP07sNZ%2FuJUlTOdoce4Cbb6QRml%2FtD32%2F%2FsXPcKHKX28wYmc%2Fx1N23q8R9Gh3TN1gvpfHeTs4XDr2JGlw8qo1bmokuCTvWpPx03aVatMvxtZ%2FCFiXM2nJhG5ssTOfkQvDTvRUxKQjaz6%2BQt%2Fk%2B6ynMmIFfFLKABddZfju01GNRLyVqWOFLImHfw0s7RNMHAt33xlH94TsaJCx5XRATkA9JAVIFuPM13SpUJzJvDmAIOxhsVjbQPUDa62BP8GTaMH%2FGhTl7D5xhTHoeAqLDQUP8T2J1tKQyYgHnDWa7PENXoXdsZ5xLqnWIK0rf%2BtlPdCK2QrjOQ8c%2B4hMGCJ70gGrokfnTLvo8K6g7SahZnHyjG8KB%2B3OgCIQ36lkcsVrDxyos%2FHZI9gNXZUXtaBlkTfKvtbIRD%2BTs2RcCnsKtuZIJBbiTJx09lhGHI0MPr7nxM8XnMmmF55Rh6CKhLL3NZdW9N%2B9bUKg1sd4YcESsKtf%2FcR8p%2Fh1y7ksIjT9VAe79OP5kbEJeSfna%2Bq%2BHHidToMJLOzl6mUfJMBdkhDemUFtECMpSjda4XgNx6oZzRrO8uB7ElDCNHzTtxDEO1bRaqsTEe58RlY5H5m3e%2FyNtWVFR181PIxpItBzC78MvJBjqkAXN0l0wa8bkS7DOWfuqn9LNypKS5XRTlS1N0lDuxFJ8ZhkBXCwc1IzjyH%2FQNH9AOdTCFMpnKpIW%2FYCgF%2BUnVPUhSxlLiRem4lX670jXe8xLyM97dZ6uET9vz%2FQILdixK6nfnq3jh5yEuZ4Is22tnrkDXlQOGTvLDVH3qhBtUK8XAGwJumhZiI%2Fz1kd8I2fJ4E6aTD1ACTKo%2FbG1nLqhuip3uYlza&X-Amz-Signature=ecd349ba84fdfc5ab631ab61c2741dfefebc111c0e0700c04efeaa4793a7afa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
