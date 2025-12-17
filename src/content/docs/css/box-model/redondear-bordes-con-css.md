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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4FIC25C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDENawrL1djzcyyrTL1wIy2al0LoyGFXisc1V8SsgGNlQIhAJKP8q1tev4R%2FpJgYeyE%2FF3%2B0MMHo%2BwDJiy%2BuTa8ljcaKv8DCHcQABoMNjM3NDIzMTgzODA1IgxQCrRYEtnUV7WNAN0q3APYhjr%2F6w1JW6pusmXCRYn6IORLB28yiSz4mpd7QkYi%2BaWToIkgCWF1ljdvhdnO%2Ba%2BxNr1758YV88bRCV%2FPUN9ew2oTr8GJfnIcqQL%2BkOVv4GX3nORG1vHuZVvMMyRiqSQQolR%2BgGrWkY4AGCKhcG1HVjXsIeJY%2BEo2dqTBZR3%2FS2Q5XA7u2b6Z3yP8QUTtcIF1%2BSO29o7wCXy20KgP8%2BAsMwnp0ommdhEC3wxpI5L%2FoUvYJq%2BUa%2F%2FAvP4jjtWh4kx9fZP95pFVLG2IrlZZlM5%2BG3K%2B7%2F4YLEBBhCk3SpsPt6SDHkng2s%2FDxLktuxuCtckFFJTPWYn0WznG1TwLKWtUJoXCr66aZl23c7T6C0wK9ItE5f%2BgnU9rLnVSf7nbCqNEFxSEmuNy3HfTflAru2iUGnya%2BCoR9tS6ZpGpkY4k2dr4%2F8gqD8zkSqY2BiAHVMZYz0T8DCDqIztbilRV2Jq%2FPQJjjdnUf6O0GiUb71WymoxK1nndmNOvWxBsfYMjILwiiR5rX8MSiCNIlRQ6B0WxANZSVSspLoRDSQqP6yKgVO3RnxCYO1ECipxkYCRYz1bTNkkAIC0VCnwd5JMTrvj%2BHc1YIySMoQKmCKgzqKwUHwQA8%2FD%2BuvOYPm7pFDDIgonKBjqkAUYu0mZNz2fKADwf3SvdQIbkknQJk6FsPWZb3koEz4XqWLmef2Ui%2FbWHZCNgKQlaBcyPEAJ4RxK1D8CfirEXFy5EvKGJAN87e%2F84tm5QJA2lZ8ZIQkkeldzp5R72uulZB%2Fe0GiIz%2FkLk4DxWRJNwvXeGZm9v1C%2Fb3xVDQLrCdFp62VMKMFRbE4oCkfwQ3Rnv6Xlmo1j2dPC%2BshIoZ1OvceQWxZDy&X-Amz-Signature=5fe1512aad81cb544314b4448f65523755c69e6ef0a363e91d47729cd62c04ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4FIC25C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDENawrL1djzcyyrTL1wIy2al0LoyGFXisc1V8SsgGNlQIhAJKP8q1tev4R%2FpJgYeyE%2FF3%2B0MMHo%2BwDJiy%2BuTa8ljcaKv8DCHcQABoMNjM3NDIzMTgzODA1IgxQCrRYEtnUV7WNAN0q3APYhjr%2F6w1JW6pusmXCRYn6IORLB28yiSz4mpd7QkYi%2BaWToIkgCWF1ljdvhdnO%2Ba%2BxNr1758YV88bRCV%2FPUN9ew2oTr8GJfnIcqQL%2BkOVv4GX3nORG1vHuZVvMMyRiqSQQolR%2BgGrWkY4AGCKhcG1HVjXsIeJY%2BEo2dqTBZR3%2FS2Q5XA7u2b6Z3yP8QUTtcIF1%2BSO29o7wCXy20KgP8%2BAsMwnp0ommdhEC3wxpI5L%2FoUvYJq%2BUa%2F%2FAvP4jjtWh4kx9fZP95pFVLG2IrlZZlM5%2BG3K%2B7%2F4YLEBBhCk3SpsPt6SDHkng2s%2FDxLktuxuCtckFFJTPWYn0WznG1TwLKWtUJoXCr66aZl23c7T6C0wK9ItE5f%2BgnU9rLnVSf7nbCqNEFxSEmuNy3HfTflAru2iUGnya%2BCoR9tS6ZpGpkY4k2dr4%2F8gqD8zkSqY2BiAHVMZYz0T8DCDqIztbilRV2Jq%2FPQJjjdnUf6O0GiUb71WymoxK1nndmNOvWxBsfYMjILwiiR5rX8MSiCNIlRQ6B0WxANZSVSspLoRDSQqP6yKgVO3RnxCYO1ECipxkYCRYz1bTNkkAIC0VCnwd5JMTrvj%2BHc1YIySMoQKmCKgzqKwUHwQA8%2FD%2BuvOYPm7pFDDIgonKBjqkAUYu0mZNz2fKADwf3SvdQIbkknQJk6FsPWZb3koEz4XqWLmef2Ui%2FbWHZCNgKQlaBcyPEAJ4RxK1D8CfirEXFy5EvKGJAN87e%2F84tm5QJA2lZ8ZIQkkeldzp5R72uulZB%2Fe0GiIz%2FkLk4DxWRJNwvXeGZm9v1C%2Fb3xVDQLrCdFp62VMKMFRbE4oCkfwQ3Rnv6Xlmo1j2dPC%2BshIoZ1OvceQWxZDy&X-Amz-Signature=b20f75cc7ab77591e9f00b5b1e016e0d721ebbad63183eeb560b629e81bd2565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
