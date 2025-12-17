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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOXTIUI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPfYaTDENA6%2FfkElNtqXcLqBlkBhEyNgIu1LX7IxVvjgIhAKR10rjejq0uzfz4q0%2FUgWV76sieUU9oXMnjVUs6ctr1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5or5JsCuBP8yHGBcq3AP%2BCjQwnptx8ThvK5vFOXrUm9O88HDPYBq5KbhcwnAYDFv2X4Z71QCeCup6al1QLuUSDUlsn9HoZvRYrz3dn%2BE6O%2BGYzpY%2B9SDrXVr2HXIVk5GUDMxID94otkjQ%2BnlwNzTCYhIX6BwVUGB5sjHK6QA%2Bt4KBfzrUTSIYe47HV88tmbtu4VmFSGjH41Y2GF2gCqCpgnyS%2FA39wuF1of7rc26nqe0%2FkPSbeEzNt%2Fsy9ooUjJKFVb9sMHBrwHBKZ0pn%2BfFx4KIvoCv%2BJu%2FT5BxP%2BbCE1Ye371Pn8iM9Zp8T15EA2cd6oeNEKvbWUNGGGp%2BaTf6m5znEDnZeXqHmQm5zM7WklAslnpTM%2F1v2Nc7gCgtIlVUDfU1FDLm2Zomv9QazVPTZpZ6dqpzdWGijCjZjdHXZMKaUt1%2FFiyDcdRyNv1DZUlm23R62Z0F5kaGopXtdplE%2Bi5MVhrfnM%2FLps9cPDdgfCnsf2ZfPD2OYCNGOxXwz5YKFQShT0oTjN4jA0Efx5s1zrDPRQ5bGptRLybbUlfFBSMZvqmab1ckCR40EgZ2PEnYNxVFcyzOvG%2BroYz0Ii45kRXDvtyE3HFBZJtvABA2cbam8HtdMR1Sxb2DJC35v81Z9b%2FBFJ9N%2F%2FBqxKTD4rozKBjqkAUn2UkN0%2Fili6JnQ7OpPUz5sG6HtX3hay3xMmYNaoX7fZmgNw0dNA70nr%2BtoZ0oaNZBf8xifCWfhfqBu0DKCVqFv78RbqL4ux2L9n0HWCfdQIicEdJHOLLqd6%2Bv44SzAm1Wkye2x8NIeQMVVEGutUgdh0Byv1UdUgrUlnNDmTIGy9KTdK0lgtBkMc%2Fyj2BgRot4EGPXHrVug1xq5C7lX%2B8sNhBh%2F&X-Amz-Signature=1135cd5a8bb2f44dfe2d49c3323a2e89683719871c85c489a6f88454311f71a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOXTIUI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPfYaTDENA6%2FfkElNtqXcLqBlkBhEyNgIu1LX7IxVvjgIhAKR10rjejq0uzfz4q0%2FUgWV76sieUU9oXMnjVUs6ctr1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5or5JsCuBP8yHGBcq3AP%2BCjQwnptx8ThvK5vFOXrUm9O88HDPYBq5KbhcwnAYDFv2X4Z71QCeCup6al1QLuUSDUlsn9HoZvRYrz3dn%2BE6O%2BGYzpY%2B9SDrXVr2HXIVk5GUDMxID94otkjQ%2BnlwNzTCYhIX6BwVUGB5sjHK6QA%2Bt4KBfzrUTSIYe47HV88tmbtu4VmFSGjH41Y2GF2gCqCpgnyS%2FA39wuF1of7rc26nqe0%2FkPSbeEzNt%2Fsy9ooUjJKFVb9sMHBrwHBKZ0pn%2BfFx4KIvoCv%2BJu%2FT5BxP%2BbCE1Ye371Pn8iM9Zp8T15EA2cd6oeNEKvbWUNGGGp%2BaTf6m5znEDnZeXqHmQm5zM7WklAslnpTM%2F1v2Nc7gCgtIlVUDfU1FDLm2Zomv9QazVPTZpZ6dqpzdWGijCjZjdHXZMKaUt1%2FFiyDcdRyNv1DZUlm23R62Z0F5kaGopXtdplE%2Bi5MVhrfnM%2FLps9cPDdgfCnsf2ZfPD2OYCNGOxXwz5YKFQShT0oTjN4jA0Efx5s1zrDPRQ5bGptRLybbUlfFBSMZvqmab1ckCR40EgZ2PEnYNxVFcyzOvG%2BroYz0Ii45kRXDvtyE3HFBZJtvABA2cbam8HtdMR1Sxb2DJC35v81Z9b%2FBFJ9N%2F%2FBqxKTD4rozKBjqkAUn2UkN0%2Fili6JnQ7OpPUz5sG6HtX3hay3xMmYNaoX7fZmgNw0dNA70nr%2BtoZ0oaNZBf8xifCWfhfqBu0DKCVqFv78RbqL4ux2L9n0HWCfdQIicEdJHOLLqd6%2Bv44SzAm1Wkye2x8NIeQMVVEGutUgdh0Byv1UdUgrUlnNDmTIGy9KTdK0lgtBkMc%2Fyj2BgRot4EGPXHrVug1xq5C7lX%2B8sNhBh%2F&X-Amz-Signature=13466ae03c877e9016377f9efdf7ef35370f5639d2b741ebf2b3be515bf7781c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
