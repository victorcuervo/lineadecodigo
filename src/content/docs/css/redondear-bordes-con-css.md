---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT34FWPM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAz%2FdQn4j96LOKuk1bl8tfjS652HnhosWU7bI9sOkpLeAiBFwE4KSaW55XpI2aBjAPEl8XGV%2FzZiJRFet7Gg80Zjryr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMWJlCAgGqWIuKOLPnKtwDLMGCkrWmLZCjqk1ILKAGNSwz8uJLc%2F3BH92uHdZF7mRTuT6hB3QACsOwsRSqHaCcFkH6SuSCNnu7Q5c%2F8ohGVVRsOnJsRCmM7rvXS4wCSE%2BIwwXntppWyzAfq82sDOiydBAGgd0C8vr5bP8jK9RaHGq7VIBMgeUtow15Xo9tN67S3l04K%2FKqxVGCUkxGYs1Cu7xzIphaL58o1Gxwf6fZRWcajDe3O3a9YkAGgsDO0v2isjvP6PapTAXXFGWXQ%2Fq1tkTvDhi%2FSTX%2FxdwGgFo3ZKJ6YcM1osf9yxfjl5IanFR1arg5haDApVrhlvO3K8ALekQo2RgDAkwhaxSzwTpbKU2FAcSpeccF3xaKEC%2F5XnUqifIRZCC%2BDI4E2eKkF3T%2Bq1NhAHVF2QHBmhV7an5%2FcLzw8ZVr%2BK5hhzDZKA1ILW0759oCIB5t2wjE45B29ruo0yhtKbLS1tz56Xhy6rmQKNimeiaYYl7B4bPXciRNxjV%2F7FehKn8hHI1lPoGZ4d%2F82ZlJZx6OfB2w2xwW5SOSCTcA5IWJAMuT%2BitoHCiZan43mWgzRF9%2BchrNBeI2u1QtiNRBd7%2FH4iFbVg3fxEbbmFkQhnrWRqkCiuVkU7KhbxbDZYx06wgRZcBJ2wgw6L3CyQY6pgG3gllqzw0wXUsrAdzvRUpcIHPwFIwHLGnQhN7i2nHCu0BkOmDD8RtFHXlu893%2BwN96MMwDDoIm7lEnNBHNz2GQj9sGepfWDyvTHbTS0Vfklt16x5NP6qlnqrBYwrEdLxcBQUSfzPH8BqJG%2Bz6X%2BMa1bL4DGCSSMHKgjdBvX1E3IprZKaBGxu9VJcMxxB4vahFN8xYJ1MVgTLpaYzPOXc1xcoZqU9Xi&X-Amz-Signature=bfc6a0bcbab21ba717e6da39420f9e66a7d01d9e1707ef8b62470aa43916e28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT34FWPM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAz%2FdQn4j96LOKuk1bl8tfjS652HnhosWU7bI9sOkpLeAiBFwE4KSaW55XpI2aBjAPEl8XGV%2FzZiJRFet7Gg80Zjryr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMWJlCAgGqWIuKOLPnKtwDLMGCkrWmLZCjqk1ILKAGNSwz8uJLc%2F3BH92uHdZF7mRTuT6hB3QACsOwsRSqHaCcFkH6SuSCNnu7Q5c%2F8ohGVVRsOnJsRCmM7rvXS4wCSE%2BIwwXntppWyzAfq82sDOiydBAGgd0C8vr5bP8jK9RaHGq7VIBMgeUtow15Xo9tN67S3l04K%2FKqxVGCUkxGYs1Cu7xzIphaL58o1Gxwf6fZRWcajDe3O3a9YkAGgsDO0v2isjvP6PapTAXXFGWXQ%2Fq1tkTvDhi%2FSTX%2FxdwGgFo3ZKJ6YcM1osf9yxfjl5IanFR1arg5haDApVrhlvO3K8ALekQo2RgDAkwhaxSzwTpbKU2FAcSpeccF3xaKEC%2F5XnUqifIRZCC%2BDI4E2eKkF3T%2Bq1NhAHVF2QHBmhV7an5%2FcLzw8ZVr%2BK5hhzDZKA1ILW0759oCIB5t2wjE45B29ruo0yhtKbLS1tz56Xhy6rmQKNimeiaYYl7B4bPXciRNxjV%2F7FehKn8hHI1lPoGZ4d%2F82ZlJZx6OfB2w2xwW5SOSCTcA5IWJAMuT%2BitoHCiZan43mWgzRF9%2BchrNBeI2u1QtiNRBd7%2FH4iFbVg3fxEbbmFkQhnrWRqkCiuVkU7KhbxbDZYx06wgRZcBJ2wgw6L3CyQY6pgG3gllqzw0wXUsrAdzvRUpcIHPwFIwHLGnQhN7i2nHCu0BkOmDD8RtFHXlu893%2BwN96MMwDDoIm7lEnNBHNz2GQj9sGepfWDyvTHbTS0Vfklt16x5NP6qlnqrBYwrEdLxcBQUSfzPH8BqJG%2Bz6X%2BMa1bL4DGCSSMHKgjdBvX1E3IprZKaBGxu9VJcMxxB4vahFN8xYJ1MVgTLpaYzPOXc1xcoZqU9Xi&X-Amz-Signature=fd4eec37be98d96fa9c730d53c6100ea9783868ec5c72dd59f93f01d43f433d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
