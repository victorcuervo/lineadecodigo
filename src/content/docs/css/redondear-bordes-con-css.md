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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXZNVSM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqceYiawxmDhkW3%2Bu%2F5Yd7SF09Cb3KXV5gyuhdd813hAiEAl2WV6GkwSTplwcrf%2Bhg%2BkJ2H0nkpPIOZt6vx%2FMvH8IcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHFlkaTU6EBpQBRWyrcA2PdzIa2XGkQr6Anl9rUKuA%2BA%2F7jhma9FSq0akO5L9SpWK3GP6rn3f1M0rkab9%2F2OYKEP%2BGM50P3awt0hGOGnDHDbOAO6QVIJ62HEb4GUNHoVByIxgiE%2BrPes2co%2F8kZ1fhCpg64K2NCIa06bRDYL5zpGmhMy%2BRItGs%2FbcL4zSdZ1x%2B2DRaIUUUC%2BKg6GLUpNg%2BE1WF0rv%2BAO0jlJ9Ve3dsnwdV%2FmWH8lOI52KL1U1SCzaLtGzLgqNFJGzby9nojRmTK2yFGNSlnQ83yqIBLT5qAbE2JHr3TVlYZp03DfHq%2FrpCoeNdnuFIPBbQmxi2hYrs5rztk%2Frq0CblLPvAREVr5H%2BIAYu0muWmJ8Bp7J%2Flk3niSLinswCD5wFK%2Bf%2Bg4f4o6I7QQCGTW9OYYv4NTW%2F5HF0Lt2koe2g8HHH0PuylaCjPp2vkiPax9QvuraIlIM9rKAj998TbUrh%2B6ORvooPMtsY97lt6qxW3p2ifNyyPepIfwPNlW6nco3AXwa4I94BemDWKmZ%2BH%2BQGUWByWZa2Ejtj2I4ENJFFoRXRFAwJevod8tkQw43nyP9vLYuij%2F4i6Rt0lw6c19c3hYRIpuHVg6%2Ftjk1gplewen4wNvcZkvdxmbRMi5jGOi4Y2OMI7v2MkGOqUBDPYn9S4ogodHDjDVF3T8E6driHiayyOulHs7nnSWdHSqXsHMAclH7uguwqVyWZZArnyNPabVUxxfhghkSccecn30lelC8s6vA4%2FBF77mWqy3shtLZ%2Bo3Dm0w8JAbzXNn5a86nqfp5F4PY0mFu1el4VWlPFKIyNlGNqIDEyz79%2FSypx4YjNERYvtHse4ZR2Mvjde7GpDVi8TXZeYyW%2Bn2DKLfKTcB&X-Amz-Signature=2322b140357e00ab286044ad854b28b33725fce6ebb4dfeb8e060b09361df5ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JXZNVSM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqceYiawxmDhkW3%2Bu%2F5Yd7SF09Cb3KXV5gyuhdd813hAiEAl2WV6GkwSTplwcrf%2Bhg%2BkJ2H0nkpPIOZt6vx%2FMvH8IcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHFlkaTU6EBpQBRWyrcA2PdzIa2XGkQr6Anl9rUKuA%2BA%2F7jhma9FSq0akO5L9SpWK3GP6rn3f1M0rkab9%2F2OYKEP%2BGM50P3awt0hGOGnDHDbOAO6QVIJ62HEb4GUNHoVByIxgiE%2BrPes2co%2F8kZ1fhCpg64K2NCIa06bRDYL5zpGmhMy%2BRItGs%2FbcL4zSdZ1x%2B2DRaIUUUC%2BKg6GLUpNg%2BE1WF0rv%2BAO0jlJ9Ve3dsnwdV%2FmWH8lOI52KL1U1SCzaLtGzLgqNFJGzby9nojRmTK2yFGNSlnQ83yqIBLT5qAbE2JHr3TVlYZp03DfHq%2FrpCoeNdnuFIPBbQmxi2hYrs5rztk%2Frq0CblLPvAREVr5H%2BIAYu0muWmJ8Bp7J%2Flk3niSLinswCD5wFK%2Bf%2Bg4f4o6I7QQCGTW9OYYv4NTW%2F5HF0Lt2koe2g8HHH0PuylaCjPp2vkiPax9QvuraIlIM9rKAj998TbUrh%2B6ORvooPMtsY97lt6qxW3p2ifNyyPepIfwPNlW6nco3AXwa4I94BemDWKmZ%2BH%2BQGUWByWZa2Ejtj2I4ENJFFoRXRFAwJevod8tkQw43nyP9vLYuij%2F4i6Rt0lw6c19c3hYRIpuHVg6%2Ftjk1gplewen4wNvcZkvdxmbRMi5jGOi4Y2OMI7v2MkGOqUBDPYn9S4ogodHDjDVF3T8E6driHiayyOulHs7nnSWdHSqXsHMAclH7uguwqVyWZZArnyNPabVUxxfhghkSccecn30lelC8s6vA4%2FBF77mWqy3shtLZ%2Bo3Dm0w8JAbzXNn5a86nqfp5F4PY0mFu1el4VWlPFKIyNlGNqIDEyz79%2FSypx4YjNERYvtHse4ZR2Mvjde7GpDVi8TXZeYyW%2Bn2DKLfKTcB&X-Amz-Signature=5f3b245c781d27f4e4661805eca62790580f49ec7c07b0692ec0153d7b722539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
