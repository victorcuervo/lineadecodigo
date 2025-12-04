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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STW3VM7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGT%2FSLh0zq0DqmumcMhZUMq9r1o8MB%2BozXRGH4Dl2nKkAiEAjVg6AwW7VesQfNuDAuZlJ4Onogka4DXKmD8fTh%2FkNFYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIKfnAveBJpcdvVzaircA6Q0oX0NOn9JwY7dLYK04Is2A1tbRNAYzol1AEsSIkeYKeikHKPu2g7v3Wsw4s3kDbXQ2oyXYUoDe5e8BnkKVopcQybGl4fFFd1dF6J4tgj0%2Fh4XqLDkaqGHRl83teuRWQjaEOhukGLTgl%2F41LcFfL5wo8OK%2BVEK9KcE9jmS3DDWi9Bhfud4YSYXhOAhBj0m5VKhOKuVH2wXZlVJOx4vtfZ4CE1fZDy0z9bwkYgmkV5pqUi9%2Fc%2FzePgACCUibLdXoUW4aHw523%2BY0kThYOUM7nKqkL1Omfyqgrx%2FKlA8P2DB%2FVIdRZcm22eh4bxzTFcZvI6He8x4X6txYQn0xEReL0mOdkDjDVGLGSzz%2BskCFkJ%2BAevXmDZ2hzweoVtnqpJJH3%2FBUOLHvGwjT3bYLc%2F6saGbUOWp%2BRwQRJDFhbtS3xylltqwY1awLGncerCFVxs8Km6o%2FnP8yYrIsxj%2BhcuPUFBt6qPvK%2FP%2BxMf9xy9%2Fa3hrelJtWN7qiDKziUg6LfKTgGIFd%2FMXunIpJ4YTCcu1LP87dpDlIYQW%2BsEEsQZgHOjdUUGCoSyThREBepO6eJ8sUtFhZNk2Ui1e7NfCm%2FjZ6J79xjNWc%2B7GecfJoVgbneun9mJOLs9hjgFWUdPrMMmtxMkGOqUB8%2FQDhZeH0LT6UE99m%2FHpmgMMmSepMXBNIVr88BmNTx%2Baoosln5JQUoBDSr0ZJMUPpdEBpxEUfFTD8POsiCFjTlBBmNJs5cDu9%2BlP2ijYMFW5Gc9xrQLnXMc%2BvGtz66q5KtIBifkR1TEqTITPahyINgNPPFxJvN8IAtMXbUuT%2F0rtbQecu5b%2F05Wx%2B5gbo8xKY5KK3j12cODcoDE%2Bv%2FxPxdIHs8zn&X-Amz-Signature=d143d587b73f616d979e6d597bc7f5d1a18819b2d8a04a4ac25183bf50c587d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666STW3VM7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGT%2FSLh0zq0DqmumcMhZUMq9r1o8MB%2BozXRGH4Dl2nKkAiEAjVg6AwW7VesQfNuDAuZlJ4Onogka4DXKmD8fTh%2FkNFYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIKfnAveBJpcdvVzaircA6Q0oX0NOn9JwY7dLYK04Is2A1tbRNAYzol1AEsSIkeYKeikHKPu2g7v3Wsw4s3kDbXQ2oyXYUoDe5e8BnkKVopcQybGl4fFFd1dF6J4tgj0%2Fh4XqLDkaqGHRl83teuRWQjaEOhukGLTgl%2F41LcFfL5wo8OK%2BVEK9KcE9jmS3DDWi9Bhfud4YSYXhOAhBj0m5VKhOKuVH2wXZlVJOx4vtfZ4CE1fZDy0z9bwkYgmkV5pqUi9%2Fc%2FzePgACCUibLdXoUW4aHw523%2BY0kThYOUM7nKqkL1Omfyqgrx%2FKlA8P2DB%2FVIdRZcm22eh4bxzTFcZvI6He8x4X6txYQn0xEReL0mOdkDjDVGLGSzz%2BskCFkJ%2BAevXmDZ2hzweoVtnqpJJH3%2FBUOLHvGwjT3bYLc%2F6saGbUOWp%2BRwQRJDFhbtS3xylltqwY1awLGncerCFVxs8Km6o%2FnP8yYrIsxj%2BhcuPUFBt6qPvK%2FP%2BxMf9xy9%2Fa3hrelJtWN7qiDKziUg6LfKTgGIFd%2FMXunIpJ4YTCcu1LP87dpDlIYQW%2BsEEsQZgHOjdUUGCoSyThREBepO6eJ8sUtFhZNk2Ui1e7NfCm%2FjZ6J79xjNWc%2B7GecfJoVgbneun9mJOLs9hjgFWUdPrMMmtxMkGOqUB8%2FQDhZeH0LT6UE99m%2FHpmgMMmSepMXBNIVr88BmNTx%2Baoosln5JQUoBDSr0ZJMUPpdEBpxEUfFTD8POsiCFjTlBBmNJs5cDu9%2BlP2ijYMFW5Gc9xrQLnXMc%2BvGtz66q5KtIBifkR1TEqTITPahyINgNPPFxJvN8IAtMXbUuT%2F0rtbQecu5b%2F05Wx%2B5gbo8xKY5KK3j12cODcoDE%2Bv%2FxPxdIHs8zn&X-Amz-Signature=7a33b1e9bd014575477e7cb03fac1f5b55a9dd639cab3f5e1989802ea5c45e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
