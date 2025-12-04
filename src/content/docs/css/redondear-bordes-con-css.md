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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDUX3CWH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICJl1VRHILf0VihBYXWx%2B69ANcROu6t75swLCdxftfPAAiAo4gV9mQ6FPFvbxQtpI89IX2rfqHB02hPGE5uTUXJMmCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM9C5iXTnz%2F3B%2BoZTtKtwDd6fxCg37zDXv%2FAAQm8e7%2Fs08JTVptUZl4gR%2F5nfPcqKVUvWrIEGJa93fDcvCx5cg%2FFCnd3MQL7V6adB3E10TeLIX1l07TGNC5fvLvOQGfC23a4nVr7dFDUCuk3JIoaAvszbGl6qPNcPA3m0wJnm%2BKiYuoAavEhzrcceEoBsrFRThEyf1eLM8WLwDKKlLqK5jDdhgy6SvSTbUxadLZLJb%2BKcckSalmwQ48%2BZPgDCxI9fnTfW6NRvagIBlzB6Rf9IYpy6aAwuM%2FhKTY3gLxf%2Bbz%2FrWDx30fqpnehLshy5PhKWwFjM3rkMT9ZZbimspFecxTiy5i3M2udMx%2BO4u2vi3LimXA1rc9DrjgX3ykOCYZGgKe%2FS08MuTuIrgGpT9YqYWZtiDz7VemK5%2F0KPiDiequi4mjpzpUoRmVg%2BZ972xrkw5Ly0Rz15mORa%2B6urlpU1Y8wevq4JUyJBr2Xg7Ymx7v5wLKYh8MSVlr%2FPbX5ZDP6skibBJj6krd%2FB6yNZGCZc1FSIhjAKY6S%2BxVx123FfptmUcKCF01AA3gRiNQMUHH1DYYqC4b5m%2FKq6uvbluhZY%2F3FrmBmobA5pmIL6MFQtzGSMv5b5zmPgJfDrTLbCLOW%2FnYN4hXOUiH%2BvH8wIwyZDEyQY6pgH3KCsBMKeo1UBp665PZezJHHuf6sIF7jPXC8BkwOvJWHehpvnFBCULNpbVEplFkFYcN2LomaZclIOMkrBoEfHzOVa%2BAM2%2F2cBiK37NwVFUU4tYaIiHJc6UaKC%2BW6xVByyV1z%2F84PUoFpUsTKLTPUvHQT6mHxQizFhdM%2BeoKg1IYDMhrhWPDxOnpio0O7wue8JUOjvDvNOukEJBt3F5lyw619wnE2hX&X-Amz-Signature=4840c44ee271fe88fcc59fa595fe3fc26a9526bc8577b33a4f67ca396b5bfa3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDUX3CWH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICJl1VRHILf0VihBYXWx%2B69ANcROu6t75swLCdxftfPAAiAo4gV9mQ6FPFvbxQtpI89IX2rfqHB02hPGE5uTUXJMmCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM9C5iXTnz%2F3B%2BoZTtKtwDd6fxCg37zDXv%2FAAQm8e7%2Fs08JTVptUZl4gR%2F5nfPcqKVUvWrIEGJa93fDcvCx5cg%2FFCnd3MQL7V6adB3E10TeLIX1l07TGNC5fvLvOQGfC23a4nVr7dFDUCuk3JIoaAvszbGl6qPNcPA3m0wJnm%2BKiYuoAavEhzrcceEoBsrFRThEyf1eLM8WLwDKKlLqK5jDdhgy6SvSTbUxadLZLJb%2BKcckSalmwQ48%2BZPgDCxI9fnTfW6NRvagIBlzB6Rf9IYpy6aAwuM%2FhKTY3gLxf%2Bbz%2FrWDx30fqpnehLshy5PhKWwFjM3rkMT9ZZbimspFecxTiy5i3M2udMx%2BO4u2vi3LimXA1rc9DrjgX3ykOCYZGgKe%2FS08MuTuIrgGpT9YqYWZtiDz7VemK5%2F0KPiDiequi4mjpzpUoRmVg%2BZ972xrkw5Ly0Rz15mORa%2B6urlpU1Y8wevq4JUyJBr2Xg7Ymx7v5wLKYh8MSVlr%2FPbX5ZDP6skibBJj6krd%2FB6yNZGCZc1FSIhjAKY6S%2BxVx123FfptmUcKCF01AA3gRiNQMUHH1DYYqC4b5m%2FKq6uvbluhZY%2F3FrmBmobA5pmIL6MFQtzGSMv5b5zmPgJfDrTLbCLOW%2FnYN4hXOUiH%2BvH8wIwyZDEyQY6pgH3KCsBMKeo1UBp665PZezJHHuf6sIF7jPXC8BkwOvJWHehpvnFBCULNpbVEplFkFYcN2LomaZclIOMkrBoEfHzOVa%2BAM2%2F2cBiK37NwVFUU4tYaIiHJc6UaKC%2BW6xVByyV1z%2F84PUoFpUsTKLTPUvHQT6mHxQizFhdM%2BeoKg1IYDMhrhWPDxOnpio0O7wue8JUOjvDvNOukEJBt3F5lyw619wnE2hX&X-Amz-Signature=7b8990c2180f5aa88a25549c69f7fdf6d9edf9fe6d951a33b67d0d2372a698ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
