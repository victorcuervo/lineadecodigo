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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCVJSJ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZKreJBp1kxZSQRYlynPmgOoPCYkmR3DRXdwCzZ2JYPAiBZv%2FkUjsFuS2IG47Re6PH2mAR1j9MkVHrp62L5pjXkEiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeK0g5KuejQIzlPeKtwDF8AIeJlvbWmAyxKSGsqCcjaZrt98jj8aby9GNRGct%2BRjvj4V1cjzMzJu6FPDVuToa0BLsv%2FiD%2BHC6q5yAxc3SibmeHi8xKUdWXEknEkG8Qw1miQ0OfZMcHL%2BGW%2FsoEfVZQyGMUfcSa%2FFY13I3SkwZrDqQily6aaE7A8tMX4tSPRH88X%2F5oSIotn5TauN2TkYe7w4Jq5HDH1kUvdabzPG9ucJUBhMlJ5MWDwsPCpAX7w5l1ak0vJ4YsHpc8oNgs9C5%2BQ3tJEg3YrlQnKhw8UmRWtauC%2BKW7phE%2FKmbu7N%2Fn9s0i5%2FKC9yR7lSZyGZtIhFDSSh5058Lhkhix5JJP%2Fo3maoNDU22FAtuxJvfRIy1dYa4whw%2FtWuRK866b7kcg7PLQfTw3jsaM%2BORBSSLpCEnguDdlgUOpRKzn%2BqL1AZTkeOESs86JCiQYdNvzqCJ6vMjwttswRG2wkfWDFeYqLM6QcoTbKH53buSFghv%2FN3UCOoPNRqpVb1ybzfivsI98CtWQNaYPQWxylxWeihtdRPBIukmIpKMLxlL%2FYzMEqTyCEiGR%2F%2F3n3W4bl%2F77AiBtNqt4DVpHkjJ9ds3YKYEiYqDPtihh21vL81eKODYdOgpTXgjDIPcRjT19avTRYwvp%2BLygY6pgEiaEAq4Xh1uNF3BFO1EN7hwUZT5M%2B88VufCB3eM32lVKu5oz%2FPlde5UQl4UOEtWVKA2keD0DIrVdoJzr05k4KsF%2FksW0CYr5yP%2FiWJpGEsOIn8bxezSzxFJc9EpfbfHmcD1I54uYg%2BhLPVE0emfKtDuzgzQOSYyBjNR%2F1csrfS6Ee5PkHgPhkLWvzzmSgCFpIjf4ePhDTjYdjpuIlj%2B%2FV3c8eJnvCT&X-Amz-Signature=c20bddf28a572f062e59630f21c3a6bd201e88efa513236881260ea8bf692705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCVJSJ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZKreJBp1kxZSQRYlynPmgOoPCYkmR3DRXdwCzZ2JYPAiBZv%2FkUjsFuS2IG47Re6PH2mAR1j9MkVHrp62L5pjXkEiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeK0g5KuejQIzlPeKtwDF8AIeJlvbWmAyxKSGsqCcjaZrt98jj8aby9GNRGct%2BRjvj4V1cjzMzJu6FPDVuToa0BLsv%2FiD%2BHC6q5yAxc3SibmeHi8xKUdWXEknEkG8Qw1miQ0OfZMcHL%2BGW%2FsoEfVZQyGMUfcSa%2FFY13I3SkwZrDqQily6aaE7A8tMX4tSPRH88X%2F5oSIotn5TauN2TkYe7w4Jq5HDH1kUvdabzPG9ucJUBhMlJ5MWDwsPCpAX7w5l1ak0vJ4YsHpc8oNgs9C5%2BQ3tJEg3YrlQnKhw8UmRWtauC%2BKW7phE%2FKmbu7N%2Fn9s0i5%2FKC9yR7lSZyGZtIhFDSSh5058Lhkhix5JJP%2Fo3maoNDU22FAtuxJvfRIy1dYa4whw%2FtWuRK866b7kcg7PLQfTw3jsaM%2BORBSSLpCEnguDdlgUOpRKzn%2BqL1AZTkeOESs86JCiQYdNvzqCJ6vMjwttswRG2wkfWDFeYqLM6QcoTbKH53buSFghv%2FN3UCOoPNRqpVb1ybzfivsI98CtWQNaYPQWxylxWeihtdRPBIukmIpKMLxlL%2FYzMEqTyCEiGR%2F%2F3n3W4bl%2F77AiBtNqt4DVpHkjJ9ds3YKYEiYqDPtihh21vL81eKODYdOgpTXgjDIPcRjT19avTRYwvp%2BLygY6pgEiaEAq4Xh1uNF3BFO1EN7hwUZT5M%2B88VufCB3eM32lVKu5oz%2FPlde5UQl4UOEtWVKA2keD0DIrVdoJzr05k4KsF%2FksW0CYr5yP%2FiWJpGEsOIn8bxezSzxFJc9EpfbfHmcD1I54uYg%2BhLPVE0emfKtDuzgzQOSYyBjNR%2F1csrfS6Ee5PkHgPhkLWvzzmSgCFpIjf4ePhDTjYdjpuIlj%2B%2FV3c8eJnvCT&X-Amz-Signature=b82e084f1e9e6fe83f0867475a51b19bccfa3ff8cfe45cab1f3a5f9cacb563ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
