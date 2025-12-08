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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7Z6JHFB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJciGQbdbqFaIoKtlpoiUPpfJZHRuATMf%2FZF3nFz1IywIhAJ9qRAjnc%2BQnWnlCRLzPKa1jZhfAMDXTzKhjBDXItXHrKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdDPwevCGa7nmxI08q3AMw59FcBq5BrOWC2%2FtaMs6Bd%2FPYgU0sW9EhxRwN1xANENsFzWVsBNjsB067MiqnJnwW9WPm8Cs6IkI99x1zjfhIh7RYy5dw8%2BWCNN7jyx%2F8q8mvxzQzYGNEFXHjtq3nira0JbA8EDCrWlL2l2OV7RUq7%2BPm7loYjkWyUTZAtTnwfLHp34km0aKVL0AsRYK82i4DJNvZ8BLj8d8%2By5%2BUmPMvO6fTo%2Bz32%2B2POBYUxHR%2FmV3tlzUpuVEEtRCd91S%2F%2Fap0r2C8vhX9W9eUbr%2BuQLbLk%2BOFW%2FD95jsprQjwqanIQiyjKUMSxi2fyF9gsZBGBlKE%2BdlNZfM%2Fdk0l1PSGNEgINWCZSLsLnZ62%2Byp7IALtxh%2FJaf8p6Q9sipRIeOWoTZPjiCziJEsQI7oKTtRCjW1xTKnOlERKFQKzMTOHOzmtuN6qdNcnR%2FLY3Y92M%2FCC4DaevN7qFgA46YSW8jSSsVsq7guWqOTfm%2BZFDEwFQYzRfe3Bj%2Ffq7kskekqGD6YpHFlec2AbiV3LcZNkECBB%2FsAjF2gjgaNXEKHV6mb3KWkYiOYQLNgcTcu8rKL7Y2QuikLSZU7fKmw0nYv7ro9jvZJhnt70ADQGMAnKdDpde03Cgi7FKcKOH1H6Q4zCYDCoot3JBjqkAYNmlAopMtEYsVU9ey9tCQIBmCPgaf%2BZzxmuftFBtl9Vszv9HW%2F9gyRiHqdRGKxCe%2FQj6EiQLwQZLrp%2B4PmwGJpPCuZCrdRIo4ksk2Sfzb%2FqY8HgNUBAwAFtxVw7iXoIBGbSlnMPEfcLaKpcZ6bbobtPgKXIvYzBS69V6lWMUjHNLO9QqBEMXlXv3JgmIyBFwSE6jbRGYA7A6Lj69mJ7a%2FPudVLE&X-Amz-Signature=9f93e3d4d2de27f477399c507ed3a0b1533d48115b9cebe34524c9add43f11f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7Z6JHFB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJciGQbdbqFaIoKtlpoiUPpfJZHRuATMf%2FZF3nFz1IywIhAJ9qRAjnc%2BQnWnlCRLzPKa1jZhfAMDXTzKhjBDXItXHrKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdDPwevCGa7nmxI08q3AMw59FcBq5BrOWC2%2FtaMs6Bd%2FPYgU0sW9EhxRwN1xANENsFzWVsBNjsB067MiqnJnwW9WPm8Cs6IkI99x1zjfhIh7RYy5dw8%2BWCNN7jyx%2F8q8mvxzQzYGNEFXHjtq3nira0JbA8EDCrWlL2l2OV7RUq7%2BPm7loYjkWyUTZAtTnwfLHp34km0aKVL0AsRYK82i4DJNvZ8BLj8d8%2By5%2BUmPMvO6fTo%2Bz32%2B2POBYUxHR%2FmV3tlzUpuVEEtRCd91S%2F%2Fap0r2C8vhX9W9eUbr%2BuQLbLk%2BOFW%2FD95jsprQjwqanIQiyjKUMSxi2fyF9gsZBGBlKE%2BdlNZfM%2Fdk0l1PSGNEgINWCZSLsLnZ62%2Byp7IALtxh%2FJaf8p6Q9sipRIeOWoTZPjiCziJEsQI7oKTtRCjW1xTKnOlERKFQKzMTOHOzmtuN6qdNcnR%2FLY3Y92M%2FCC4DaevN7qFgA46YSW8jSSsVsq7guWqOTfm%2BZFDEwFQYzRfe3Bj%2Ffq7kskekqGD6YpHFlec2AbiV3LcZNkECBB%2FsAjF2gjgaNXEKHV6mb3KWkYiOYQLNgcTcu8rKL7Y2QuikLSZU7fKmw0nYv7ro9jvZJhnt70ADQGMAnKdDpde03Cgi7FKcKOH1H6Q4zCYDCoot3JBjqkAYNmlAopMtEYsVU9ey9tCQIBmCPgaf%2BZzxmuftFBtl9Vszv9HW%2F9gyRiHqdRGKxCe%2FQj6EiQLwQZLrp%2B4PmwGJpPCuZCrdRIo4ksk2Sfzb%2FqY8HgNUBAwAFtxVw7iXoIBGbSlnMPEfcLaKpcZ6bbobtPgKXIvYzBS69V6lWMUjHNLO9QqBEMXlXv3JgmIyBFwSE6jbRGYA7A6Lj69mJ7a%2FPudVLE&X-Amz-Signature=5d0235f5a48a53522b130c1199125b19dba3bfa2593e41916942734b56d00584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
