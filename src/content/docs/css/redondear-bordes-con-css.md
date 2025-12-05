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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W6IS7FO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwLHqAN91lwh0Gq7w0id1uoaAP7fcaxWTWm6oqd3iNPAiAuDuQDskc3A9NdKuTeAQ3nk9tH%2BZqLe%2BwoqGC4CzlnTSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM9rGpKuT2XE5%2BpCFvKtwD4jcg3%2F0f9gjZ0pk5DDh6ba7gF3kBhGD3gdzIWzoKd0Oi5sTy8sl2xyQW0AplO9UMYmei2tsw95aPQLvzTjgj%2BF5%2FBiBRqFTBnbJtm9rGuDMTI9CfXdFPe41sjfF5WiaXk7mWAEay%2FUClBdwtFdQ91edZbiOIq6Q8MbGPqPO%2FuO29aHf0BvZB5Ctxr2BaLS9FeaRIo7LVpNyAqTBpaYhT%2ByhWDoImT%2BYOJflBbTd9Hp%2FsJJk9ySPjGU0tkbreR1C%2F5R1Ev3xPxOGLaMSoSJ2T5SJGgdbtlczS716wQEl6GPtDfanWuIlPNN15avAzpM1rzkZ6fohjShU2xdDXdXJxv5I2R4elFAHlQ4uyTt9s6tS1FfLXSKGzjTKonyFiGp6pDSJt5G7S%2FUeZ6tAU8AxQymbGCxVX0zYFYXToSPUUKTqfcMKnt7F1QYXgel%2B1H2pMgTAPvAznM%2BGBOCUI4EzA2n%2FoCGLg4FqDCXNETGBWn6zD4szTQCX6vRRZo0lJum1vpEblktwtJR2qLuiJZGuD%2BZXugzqVGM39LyQ2K7R0rqTbHvmotdUGArQuMYxOqXcw6z0%2F1BdEt9HhTaoqndudtrSME8Sv7P6mJ4o97QE4UAJRFqycKpXrfMyUA1Qw86vJyQY6pgFc2IUTqHIlmz3IJA9R1NyCbc0bXkEsytAcwlP4u41EitofQlwrKI%2B2HEIa8Nzbb%2F21UqeH69ml5cpyMnIWXwnay1zgw8FY8akpj%2BoVWKjevznaaIcpwwyASd5cqZWvPc%2F7kfLBnSpdplhifJHFn3YNHIogVmFgrxLfoDNypcEbB1xqFPkjkctRN7%2Bm8hwsdhVC9iyZqxsxxkuzmecXaK6NegDh7EmJ&X-Amz-Signature=50a0619ae88c028fbcffb84c6aa1d1b17f95a5406a656f06d657a6d5621e78b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W6IS7FO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwLHqAN91lwh0Gq7w0id1uoaAP7fcaxWTWm6oqd3iNPAiAuDuQDskc3A9NdKuTeAQ3nk9tH%2BZqLe%2BwoqGC4CzlnTSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM9rGpKuT2XE5%2BpCFvKtwD4jcg3%2F0f9gjZ0pk5DDh6ba7gF3kBhGD3gdzIWzoKd0Oi5sTy8sl2xyQW0AplO9UMYmei2tsw95aPQLvzTjgj%2BF5%2FBiBRqFTBnbJtm9rGuDMTI9CfXdFPe41sjfF5WiaXk7mWAEay%2FUClBdwtFdQ91edZbiOIq6Q8MbGPqPO%2FuO29aHf0BvZB5Ctxr2BaLS9FeaRIo7LVpNyAqTBpaYhT%2ByhWDoImT%2BYOJflBbTd9Hp%2FsJJk9ySPjGU0tkbreR1C%2F5R1Ev3xPxOGLaMSoSJ2T5SJGgdbtlczS716wQEl6GPtDfanWuIlPNN15avAzpM1rzkZ6fohjShU2xdDXdXJxv5I2R4elFAHlQ4uyTt9s6tS1FfLXSKGzjTKonyFiGp6pDSJt5G7S%2FUeZ6tAU8AxQymbGCxVX0zYFYXToSPUUKTqfcMKnt7F1QYXgel%2B1H2pMgTAPvAznM%2BGBOCUI4EzA2n%2FoCGLg4FqDCXNETGBWn6zD4szTQCX6vRRZo0lJum1vpEblktwtJR2qLuiJZGuD%2BZXugzqVGM39LyQ2K7R0rqTbHvmotdUGArQuMYxOqXcw6z0%2F1BdEt9HhTaoqndudtrSME8Sv7P6mJ4o97QE4UAJRFqycKpXrfMyUA1Qw86vJyQY6pgFc2IUTqHIlmz3IJA9R1NyCbc0bXkEsytAcwlP4u41EitofQlwrKI%2B2HEIa8Nzbb%2F21UqeH69ml5cpyMnIWXwnay1zgw8FY8akpj%2BoVWKjevznaaIcpwwyASd5cqZWvPc%2F7kfLBnSpdplhifJHFn3YNHIogVmFgrxLfoDNypcEbB1xqFPkjkctRN7%2Bm8hwsdhVC9iyZqxsxxkuzmecXaK6NegDh7EmJ&X-Amz-Signature=76228932a6f5c118e3257283949d39f27879e454677f879c4c7c657ff3ad664d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
