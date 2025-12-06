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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFR2URT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClAk1EgWsXtxDcv5EgdfO0Z%2BPYrrY03ZyaxSLBI3FppQIgUSmGRwG7taUPL8xriztRX2HTZJPFa%2B7d7DgCjaHvR%2Fsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNpTEfsVKkYmZ5p%2BoircAxM0I86vpcB3Lw49tajTq49UEO%2ByaCHsXfWPptvtK7WOye7LuCmhGtIcMMSsWKdzh83D0OXNIgCRxM0jjVWFtRoSb%2F3W%2Bses7zQ2pE6AP142SNWXWnva1Cy%2B9CtS4kq4YCRiUTjtanqCi5w%2BNhEoUkM0Tdj1pE6VIHfCknxzI6wQdDHVlV%2BYG583KW9LAGak3xEBXmhBv9kpyyMaoIZ4GIoS8%2BTCGzWHzdkgVvzrWYwICv4yXDbXOi1SR%2Bfzu3eJbH%2Fi6oAvma%2FWMpYW6kA%2FL3u2EdW2ZSpO15hivvIbsqLKIVsI%2BozXs2KRxpFm1hpOtpzQ3SrbwnqHR8D%2Fu3Y1pNEovH9h6U8cFz3QCPNBLDtjCk3vd%2FX3K0hPBvNr%2FeZSqaUYul1DYEoDhfuCXlv%2FoPKJUMF8cnz4Y0g8%2F2VExfWAM2Q%2BNKRvMlNTIgkYpSraw1%2BlBCyr1UcfZEt5gP0DD%2BhgW4WBJzN%2FkrpVJQz9%2BZqXNPOp%2BAWtveugjDDYaxevS5uPWqoNm47PLbSeQFr%2F5X2GOlaxzHuG%2BbHaLzWlJ8GOlkE%2FYdVgiMuPeia%2BaojPd%2FLDfnBham2zf7uE9mW%2FQXRBH3M8P3bi4L%2B5rht%2F0hVzcUudCFL08MiKRDYBMJCJ0MkGOqUBcWKD5fhJUwurzkN928E7Ocq0P9ni2HuZq2fF7smPi2vI4FNZkpk43c%2BEuL3dRS0%2F5LW9ZUjRfT6LSlHpOAIo3teJ9Vb2MYjfSQf%2FGeYrDV2oAyvvdo3oK6cbAjU4BY%2Bbq7h10tIPWdIzepsY86WMaLm6QKYO5V1hfuzJgUwcNc2W3vjOgZofELpQHPe4DNkJvgTaf5XB8P9qLjksOeD9p96vvMhZ&X-Amz-Signature=4e32da40efb476da8dc0a3eef8982e9128a5db5602cb27f91c895ce55e849d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFR2URT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClAk1EgWsXtxDcv5EgdfO0Z%2BPYrrY03ZyaxSLBI3FppQIgUSmGRwG7taUPL8xriztRX2HTZJPFa%2B7d7DgCjaHvR%2Fsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNpTEfsVKkYmZ5p%2BoircAxM0I86vpcB3Lw49tajTq49UEO%2ByaCHsXfWPptvtK7WOye7LuCmhGtIcMMSsWKdzh83D0OXNIgCRxM0jjVWFtRoSb%2F3W%2Bses7zQ2pE6AP142SNWXWnva1Cy%2B9CtS4kq4YCRiUTjtanqCi5w%2BNhEoUkM0Tdj1pE6VIHfCknxzI6wQdDHVlV%2BYG583KW9LAGak3xEBXmhBv9kpyyMaoIZ4GIoS8%2BTCGzWHzdkgVvzrWYwICv4yXDbXOi1SR%2Bfzu3eJbH%2Fi6oAvma%2FWMpYW6kA%2FL3u2EdW2ZSpO15hivvIbsqLKIVsI%2BozXs2KRxpFm1hpOtpzQ3SrbwnqHR8D%2Fu3Y1pNEovH9h6U8cFz3QCPNBLDtjCk3vd%2FX3K0hPBvNr%2FeZSqaUYul1DYEoDhfuCXlv%2FoPKJUMF8cnz4Y0g8%2F2VExfWAM2Q%2BNKRvMlNTIgkYpSraw1%2BlBCyr1UcfZEt5gP0DD%2BhgW4WBJzN%2FkrpVJQz9%2BZqXNPOp%2BAWtveugjDDYaxevS5uPWqoNm47PLbSeQFr%2F5X2GOlaxzHuG%2BbHaLzWlJ8GOlkE%2FYdVgiMuPeia%2BaojPd%2FLDfnBham2zf7uE9mW%2FQXRBH3M8P3bi4L%2B5rht%2F0hVzcUudCFL08MiKRDYBMJCJ0MkGOqUBcWKD5fhJUwurzkN928E7Ocq0P9ni2HuZq2fF7smPi2vI4FNZkpk43c%2BEuL3dRS0%2F5LW9ZUjRfT6LSlHpOAIo3teJ9Vb2MYjfSQf%2FGeYrDV2oAyvvdo3oK6cbAjU4BY%2Bbq7h10tIPWdIzepsY86WMaLm6QKYO5V1hfuzJgUwcNc2W3vjOgZofELpQHPe4DNkJvgTaf5XB8P9qLjksOeD9p96vvMhZ&X-Amz-Signature=b08b65c2369f5a3de0f7895e3319f0ff035ecbb366aae327cce2ad4d7c2975ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
