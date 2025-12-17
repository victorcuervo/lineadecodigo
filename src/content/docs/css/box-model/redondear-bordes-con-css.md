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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPSQRHQ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRdA5sXKGVvDoAMbIBZ7B3cCgO74Fue9ohoHy4zoDWCAIhALE0Z8L3zt5Y3AZoSggjKxX%2BegQPH5c1k6TkhPKWOCQaKv8DCHsQABoMNjM3NDIzMTgzODA1Igzb3VR4%2Fc7JiJRD7r4q3ANMOWTozidMgpwISFJCJJ5GoYvsIbqI%2BgNXVMwI72rjuWGf2mwJAxULz0C4bwjxivMCozBFBttE8sgJquFhR4F%2FuYLA8UnfMCutA7B8cD5041F3ra33JAAqhaHOkBWYJN7Lw7M%2FlCHvlL1R0tLpj4D7nYI9I7A8DoIWGq2YOobqdGS9bZ7vWbVsAg%2F6r6EC9zxRC8KQqAo%2F9mayBZkvEfc66c1W9CFAqxHZpUo287QPk3nUJvjg%2FaAPzyDP8XIMN5SREcyn2ztwY9bpGw7Kyj%2BFajSq2XVT%2FCoCQkAXl3UFg%2FJuzDZjMmM2VpL6tm%2FnaJaX%2FCZ%2BgDChvVwYB6rcQiUao1A7siVwUZXgKSdnKCihd4jcYIAnHuofz54FRYiG6NYJprFifgnQ9J7dtD%2BxronmfxIw8duW2bXthQ1O2I2thC1jcTkbAdg1tByyfIUtnzv1wCmHxKhkot6Ah6HQ7hycPrXO73Jvv7x9RIztUAfS3EyvphTZRNV7fcXEJZT1u0Op8RI%2FHNtC%2BCqFZwRFhBSTB6m9n%2Fi02USADpFCB%2FuQftHVxdK8jt6oaIVC6fQ3q6EYcWViK%2Fh%2B2Ao53fkoLFuSlhcsPEhMGFwtqLMA%2BDG5APbPycHDn7Xbks5mOzD68InKBjqkAdsT2l%2Bl3XFAnkUb0lisd9hk1vDqtzotLuepK6ruKzzcMqI%2BNAA56pnek43l4lzXXfNDujyU7klC6zR8XbEgbE8Anl9kjpe3Jx5raj%2FGc6y9uNCpqRYjm0KZXnt6v4tVIwn3%2Fj%2BJLlIYIAqlWi%2Bdh%2BATFJVwrX4n7TcgZgzv5WvXB3RJxnqErHKXgjF9Axix3fIpZ3nuLnmA5%2Bhc5o4o2wPLvxJZ&X-Amz-Signature=44c4c0acc2cb88e64e71095f7b05e8bc8324d5228a651aed95548d7909682865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPSQRHQ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRdA5sXKGVvDoAMbIBZ7B3cCgO74Fue9ohoHy4zoDWCAIhALE0Z8L3zt5Y3AZoSggjKxX%2BegQPH5c1k6TkhPKWOCQaKv8DCHsQABoMNjM3NDIzMTgzODA1Igzb3VR4%2Fc7JiJRD7r4q3ANMOWTozidMgpwISFJCJJ5GoYvsIbqI%2BgNXVMwI72rjuWGf2mwJAxULz0C4bwjxivMCozBFBttE8sgJquFhR4F%2FuYLA8UnfMCutA7B8cD5041F3ra33JAAqhaHOkBWYJN7Lw7M%2FlCHvlL1R0tLpj4D7nYI9I7A8DoIWGq2YOobqdGS9bZ7vWbVsAg%2F6r6EC9zxRC8KQqAo%2F9mayBZkvEfc66c1W9CFAqxHZpUo287QPk3nUJvjg%2FaAPzyDP8XIMN5SREcyn2ztwY9bpGw7Kyj%2BFajSq2XVT%2FCoCQkAXl3UFg%2FJuzDZjMmM2VpL6tm%2FnaJaX%2FCZ%2BgDChvVwYB6rcQiUao1A7siVwUZXgKSdnKCihd4jcYIAnHuofz54FRYiG6NYJprFifgnQ9J7dtD%2BxronmfxIw8duW2bXthQ1O2I2thC1jcTkbAdg1tByyfIUtnzv1wCmHxKhkot6Ah6HQ7hycPrXO73Jvv7x9RIztUAfS3EyvphTZRNV7fcXEJZT1u0Op8RI%2FHNtC%2BCqFZwRFhBSTB6m9n%2Fi02USADpFCB%2FuQftHVxdK8jt6oaIVC6fQ3q6EYcWViK%2Fh%2B2Ao53fkoLFuSlhcsPEhMGFwtqLMA%2BDG5APbPycHDn7Xbks5mOzD68InKBjqkAdsT2l%2Bl3XFAnkUb0lisd9hk1vDqtzotLuepK6ruKzzcMqI%2BNAA56pnek43l4lzXXfNDujyU7klC6zR8XbEgbE8Anl9kjpe3Jx5raj%2FGc6y9uNCpqRYjm0KZXnt6v4tVIwn3%2Fj%2BJLlIYIAqlWi%2Bdh%2BATFJVwrX4n7TcgZgzv5WvXB3RJxnqErHKXgjF9Axix3fIpZ3nuLnmA5%2Bhc5o4o2wPLvxJZ&X-Amz-Signature=75893a8aa3bf5c2444c5223b3574e95069c1f42742cd5768fd783477c000dd4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
