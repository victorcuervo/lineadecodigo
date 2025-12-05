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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IX4LQVQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVfnlSQAQyUsVvbqRLXhbCRL8GWeJ4ain1hA3vBS5tUAiEA5N64ktStfm4%2BGrLlPeb4XciycDosj3jklS2BsqU%2Fnvcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKmi6K0FKBFMz7hrHyrcAwcwMvRrqf0pzTkvoTR%2BTeBL91C0AxrLXhiadoKmi5F3%2BufsOPU0WyeLjhZQe8p%2FIXaCQoP%2Bl7OOcgCUXkjCS8xmtJTVcamD7w6Cw%2BREmxGkjFd31GOMhwQeBVooI1Rpyj6Te2auKwv6zEC5tWpD%2BvayPPypKp8G4%2FyY%2BdBQWlZC2QM9hk2%2FxG2d8iy2HWl1cshBdavjrKmGqJtVfAgcped7aN08AFtuupWhOxv1Qlwgc2GE9BbNTUF6HpQc%2FMsf5YXvof%2B4U2J62xSw14m26B7ajxGYpLX8njCglMRHHlGihdUx%2FRO7uEETwfjN%2Fw41QRBd%2FtI0AecwGQ5xFSAh3FrCW9dowWkGvbhvqDg8uh50Od8U%2FDnvOlgVGzgbM6aAZpxknygOuUriAKAoq2dK6jvv8N2yZxAVlznfo050uVvVzyT95wOTSuB2xiWWPLND%2FzPnaVMiMFYA4JDe%2B2OH0o9kwFAMxpjaTG8RGMqh%2BeuRymE3N7lv7jmTfHtfGps%2F3WnadMPZePQw8yDZnsRJggbsz9r3vUGlFxIZ2%2B4cqvxEkfoBVYazPWJzBVcnoI0DIQDD9wsTdwxGGUxz5tNrmDbsFN1ThXAqpYNuKuABvLU3oG68mrbEb3GpsO4bMKmvyckGOqUB%2F%2BKQcW81XwkVH9nRA9Yw4FwtaPC4iq1FarPTxoGBbCSUJDrjThn9%2BRKdQyPGYXddE4RyaoYHl1beoyRkPo97lVjy1kXET%2BFWbmkGVkjZN%2BFpGTScXLHBKO%2Bps8CfNQserM7nhaAz2a3EmZlVmftqXu%2BOegZ1y7UugmnxolPrWW535eBdfp5pT2poGHz6SU3%2BS8GDtRtj3QFC9Uhe1Ztq%2F3WbKnox&X-Amz-Signature=39503e71c5af1f3b26a0cf2cc35520f187a3e7d4ca74d12c995bb7df910e94d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IX4LQVQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVfnlSQAQyUsVvbqRLXhbCRL8GWeJ4ain1hA3vBS5tUAiEA5N64ktStfm4%2BGrLlPeb4XciycDosj3jklS2BsqU%2Fnvcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKmi6K0FKBFMz7hrHyrcAwcwMvRrqf0pzTkvoTR%2BTeBL91C0AxrLXhiadoKmi5F3%2BufsOPU0WyeLjhZQe8p%2FIXaCQoP%2Bl7OOcgCUXkjCS8xmtJTVcamD7w6Cw%2BREmxGkjFd31GOMhwQeBVooI1Rpyj6Te2auKwv6zEC5tWpD%2BvayPPypKp8G4%2FyY%2BdBQWlZC2QM9hk2%2FxG2d8iy2HWl1cshBdavjrKmGqJtVfAgcped7aN08AFtuupWhOxv1Qlwgc2GE9BbNTUF6HpQc%2FMsf5YXvof%2B4U2J62xSw14m26B7ajxGYpLX8njCglMRHHlGihdUx%2FRO7uEETwfjN%2Fw41QRBd%2FtI0AecwGQ5xFSAh3FrCW9dowWkGvbhvqDg8uh50Od8U%2FDnvOlgVGzgbM6aAZpxknygOuUriAKAoq2dK6jvv8N2yZxAVlznfo050uVvVzyT95wOTSuB2xiWWPLND%2FzPnaVMiMFYA4JDe%2B2OH0o9kwFAMxpjaTG8RGMqh%2BeuRymE3N7lv7jmTfHtfGps%2F3WnadMPZePQw8yDZnsRJggbsz9r3vUGlFxIZ2%2B4cqvxEkfoBVYazPWJzBVcnoI0DIQDD9wsTdwxGGUxz5tNrmDbsFN1ThXAqpYNuKuABvLU3oG68mrbEb3GpsO4bMKmvyckGOqUB%2F%2BKQcW81XwkVH9nRA9Yw4FwtaPC4iq1FarPTxoGBbCSUJDrjThn9%2BRKdQyPGYXddE4RyaoYHl1beoyRkPo97lVjy1kXET%2BFWbmkGVkjZN%2BFpGTScXLHBKO%2Bps8CfNQserM7nhaAz2a3EmZlVmftqXu%2BOegZ1y7UugmnxolPrWW535eBdfp5pT2poGHz6SU3%2BS8GDtRtj3QFC9Uhe1Ztq%2F3WbKnox&X-Amz-Signature=51d184dcde7633394ce283137ceda934508ceaa95653b7990e118686e8caaf22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
