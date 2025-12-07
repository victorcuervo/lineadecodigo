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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYI4PYME%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbYGMsCk9wKRaOwH0J%2FUEVyoeRApyN3ridCBTfRwJpOAiAviizizk3s3K7gpTTzDeJxCLnX8ByfuZz6HgUM0PL7ICqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMREXM6XIrSwk1gP8gKtwD27qq7PO5zdB%2BGB0SvSpQKRkbTbEM1rW94iFnSbGK0h7iYOC1zrlw%2BWxG4CqG%2Bkq8lfWob5qWLModA5odLYt6TyVbnmGzRY%2FJmV2V%2BOoaqMyFGZeWIjyhNSzDuAM%2B21U%2FPyPz9ooV4HPSAniiZTXhHBlzmG62gHk8BBidk5FFhZ%2FwVK6n9YYBIQnn%2B7SLtn96asNTx3eqJ%2FhJEwsdr7v6cQBADRT0GuU0m2kV%2F6UoWrB55izKMmptgf6GMRP0swW2denDc3H0QdjWEVbeYXao%2BqVcNxj0soqgi9OVTvHhlH83gHZ5CGM8WBWXHT0CpMRFokMVvy4F1LsHojruIsll7K8ypRztjbRTsGHfI%2FL1D9YFea2Sw%2BUqbmRORfoOWqKetrbVjAV3BJJv7vLCX8UePyBceeP7YlJ9xQr2s8k3vqA44lZidJMLw%2F5RBlunOfwiHdi5VEGVpvITLsFStWchxAK%2BADgVwGKz1ZbSAPGFUCsCXBWHlMyN21H3qwUMQuMGuzFVBvcLmkIh5K%2F6ImnZHPL%2F7FIeHqroU6HcYD5kVlOBA9CT08RyjY76gFKroKajkb1GDcrzeXzGkf0xBqs2eNwibDsaRAz0qNRiyWueco2%2BXA6iI7PdanUKc0ow6v3SyQY6pgGki5hD2Q%2FYZf9Z%2FiU%2FFcHJmdzXK4crKONbeCyhc5p7%2BSKAghT9aiiNrf2QwGIsHo91Q%2FjXE0J590541Epp%2BI%2FI2ilyFH8crHRTwVk3%2F0RxY9LcRJKERnUzNsiIQanXJfvY%2Fy4Awq9ndTTh8KPkz4uc7BiiYgnGLSbWtZjK7ot9zT%2F0tVxJxlIHF6oXW9nFcAh8Mcw9c1v8cvEfpAEZRRw6%2BN2rSsnc&X-Amz-Signature=6b7615984f59d0c29a525c8f86614f472b53df175db1cd4e50c0c3f0e216c6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYI4PYME%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbYGMsCk9wKRaOwH0J%2FUEVyoeRApyN3ridCBTfRwJpOAiAviizizk3s3K7gpTTzDeJxCLnX8ByfuZz6HgUM0PL7ICqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMREXM6XIrSwk1gP8gKtwD27qq7PO5zdB%2BGB0SvSpQKRkbTbEM1rW94iFnSbGK0h7iYOC1zrlw%2BWxG4CqG%2Bkq8lfWob5qWLModA5odLYt6TyVbnmGzRY%2FJmV2V%2BOoaqMyFGZeWIjyhNSzDuAM%2B21U%2FPyPz9ooV4HPSAniiZTXhHBlzmG62gHk8BBidk5FFhZ%2FwVK6n9YYBIQnn%2B7SLtn96asNTx3eqJ%2FhJEwsdr7v6cQBADRT0GuU0m2kV%2F6UoWrB55izKMmptgf6GMRP0swW2denDc3H0QdjWEVbeYXao%2BqVcNxj0soqgi9OVTvHhlH83gHZ5CGM8WBWXHT0CpMRFokMVvy4F1LsHojruIsll7K8ypRztjbRTsGHfI%2FL1D9YFea2Sw%2BUqbmRORfoOWqKetrbVjAV3BJJv7vLCX8UePyBceeP7YlJ9xQr2s8k3vqA44lZidJMLw%2F5RBlunOfwiHdi5VEGVpvITLsFStWchxAK%2BADgVwGKz1ZbSAPGFUCsCXBWHlMyN21H3qwUMQuMGuzFVBvcLmkIh5K%2F6ImnZHPL%2F7FIeHqroU6HcYD5kVlOBA9CT08RyjY76gFKroKajkb1GDcrzeXzGkf0xBqs2eNwibDsaRAz0qNRiyWueco2%2BXA6iI7PdanUKc0ow6v3SyQY6pgGki5hD2Q%2FYZf9Z%2FiU%2FFcHJmdzXK4crKONbeCyhc5p7%2BSKAghT9aiiNrf2QwGIsHo91Q%2FjXE0J590541Epp%2BI%2FI2ilyFH8crHRTwVk3%2F0RxY9LcRJKERnUzNsiIQanXJfvY%2Fy4Awq9ndTTh8KPkz4uc7BiiYgnGLSbWtZjK7ot9zT%2F0tVxJxlIHF6oXW9nFcAh8Mcw9c1v8cvEfpAEZRRw6%2BN2rSsnc&X-Amz-Signature=87bf8a1e6b28708c282e0124fe06d7b640a47865508e7e76050c121405beabc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
