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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GHNG76%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsreXDCcQ%2Fx6g3WwHWX%2FRz9d8GxdYfxKxa%2FS5WltFWsgIhAK2QId3SQ5nOju70uB1%2B45oPds%2FKWSd1w%2FjIuF%2BVKOg1Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwPxiWIXhyMXgGj2lMq3AMhqYTXrZtS32h%2B8LIhvuZhS7beo5tf7ldIpa%2B5%2BXzmz8K0VZiHsnJLD8wxvkeDNVlV5MK1xqcQ1JCeXhnZ6tZHxy9yto2ZdOIOU%2FO7l5niOIirPT29YgZsKA9SvUzf1smTKA6Xi9eojlaqjnLEMZzhaKgiaZQjG0LqIeHJnu75LESJ7bv8jPQrxyzAcer0HldLWNTM2eAoW8ttUK61j7uLbx3LkjchpHdTiMRQko%2F9VN9nro57cq4TzcBrvXDcUaevug4H2Q0sdRPghTNzxhzxQ3T7Sdmi6Lxbc%2BMpVzC8SN6HCAa9XzbhmCozjlqwpkYbBF4eAqgPy0vIX0F1Os9G4Tk0negZACsrp3ocKiHmVVzFisRVFrbii2w0SkLGDGlevRPOg920Ebspcm7lxUD2nC5ON8t00j0sL6d%2B%2Fm2SjuPZzsKkT7yFoSz7LUonH7oa0DVot1qfu9gwft7syoAjMWsfxqfSr3VFb7QPYu5uxl658pap5sqMOJA84%2Fa3zqiOIQsvsow3UVUnKIaAQxxWi%2Fwn64WGwUR4pmopfAqBfp1wA5RoiEj8sPAOB7cKellgZSX7VvGATfrkoFHdDoQUj4HAsxdQpjLY6uyRU%2F%2FGrPxN1AjHoEaFDOotujDPxorKBjqkAWQmQDrCLIvjlKxsANIFHX9K3rQIwUQrVKChnA7Y%2BKO7MFvvjpLDoAw3tNeoGk0zs6Y40y%2FQwIBxXBF5eY87ZultiwMa%2BPD3ReILEl1M3MxZqBBDa2ZF%2BRBnfIH%2Fx%2B4Mcsmqf%2BwCLmbyaD35NOZsC%2F1UlqTC5WNBxMAwj3%2FYZPGPev3jvb0jgmHcJqXk7pLB%2F73crYMvk6hV1ZJkrRFNOz9sWug8&X-Amz-Signature=dd3ab2e2414b58fbb0854941c287d3d006e576b47257da9a458984ebc41d4f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GHNG76%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsreXDCcQ%2Fx6g3WwHWX%2FRz9d8GxdYfxKxa%2FS5WltFWsgIhAK2QId3SQ5nOju70uB1%2B45oPds%2FKWSd1w%2FjIuF%2BVKOg1Kv8DCH4QABoMNjM3NDIzMTgzODA1IgwPxiWIXhyMXgGj2lMq3AMhqYTXrZtS32h%2B8LIhvuZhS7beo5tf7ldIpa%2B5%2BXzmz8K0VZiHsnJLD8wxvkeDNVlV5MK1xqcQ1JCeXhnZ6tZHxy9yto2ZdOIOU%2FO7l5niOIirPT29YgZsKA9SvUzf1smTKA6Xi9eojlaqjnLEMZzhaKgiaZQjG0LqIeHJnu75LESJ7bv8jPQrxyzAcer0HldLWNTM2eAoW8ttUK61j7uLbx3LkjchpHdTiMRQko%2F9VN9nro57cq4TzcBrvXDcUaevug4H2Q0sdRPghTNzxhzxQ3T7Sdmi6Lxbc%2BMpVzC8SN6HCAa9XzbhmCozjlqwpkYbBF4eAqgPy0vIX0F1Os9G4Tk0negZACsrp3ocKiHmVVzFisRVFrbii2w0SkLGDGlevRPOg920Ebspcm7lxUD2nC5ON8t00j0sL6d%2B%2Fm2SjuPZzsKkT7yFoSz7LUonH7oa0DVot1qfu9gwft7syoAjMWsfxqfSr3VFb7QPYu5uxl658pap5sqMOJA84%2Fa3zqiOIQsvsow3UVUnKIaAQxxWi%2Fwn64WGwUR4pmopfAqBfp1wA5RoiEj8sPAOB7cKellgZSX7VvGATfrkoFHdDoQUj4HAsxdQpjLY6uyRU%2F%2FGrPxN1AjHoEaFDOotujDPxorKBjqkAWQmQDrCLIvjlKxsANIFHX9K3rQIwUQrVKChnA7Y%2BKO7MFvvjpLDoAw3tNeoGk0zs6Y40y%2FQwIBxXBF5eY87ZultiwMa%2BPD3ReILEl1M3MxZqBBDa2ZF%2BRBnfIH%2Fx%2B4Mcsmqf%2BwCLmbyaD35NOZsC%2F1UlqTC5WNBxMAwj3%2FYZPGPev3jvb0jgmHcJqXk7pLB%2F73crYMvk6hV1ZJkrRFNOz9sWug8&X-Amz-Signature=994fe67656a3bfffc1e90537e147dd9f9fc898babd334f140c1e779c3903612f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
