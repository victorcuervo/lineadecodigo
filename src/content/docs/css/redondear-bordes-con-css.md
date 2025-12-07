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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMYHU3U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAImr1Z9l7wJEclYuK6V%2Bo0LXRL%2FhH6zANYHrQGLN3g6AiEA6VLwQqwluhYPt63FjXEXJQJIiMU%2B5g7EzNLjOMqLn9IqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgPuZ1CPDpWv8XavircA0KGZTzrFySXU2G57mllLWB3LB0DSEUCULa%2F%2BBCv7imjpXrBihPMiCQV2QGWs8ZMHA1n%2F4D8NnxNvvuSrfZOoq979Hj1GlfiefgwlATGegvpApnj4ByTO502s%2BfJ%2Bk%2BD4aL%2FeeaUpohFt2bGPC3AUTqcc3sn7afQjNlaDpDoHFKBQKjCFASKt8%2FiM1T6sj4FJNjTV7vff3AGjY%2BhzfFmNOcDVBh%2BlxqnaKnCkn8vin6rNeDOXKGQCbt1QGmdv42IwoZHMcB1rWwuOY8yRRKaKhbX1s9Mm9ayBldYdsodPOV8pVC57VNnDUkWX2CLbTj%2BM1RH1NYygprYWAFDVa%2BQ04AGnUHV6g08UR9v4FVV%2Bbw0CBVGY6QD8yqXstYPnnEy4cDFDwg4WeJWHC4TRseMoM5STVRFfBw6ewVnxDzq9%2BJPdbHPpax8xiRbF3IuCX6CaDHqKdYVh4aSe4L4hDthry6Vc3MuoaZ%2B701jBOD%2FB6a%2BZKxaRM65L4NkdUy2syWKmU1pjZYafKUoKvXLPn4nhxSNyKaGITGjXfptfXvk2FxQQsgEQXUJ9D6lb5Cc7rO%2FW0q2kdqzb3MKyCi7Y%2FD3xILu13s4K%2FVtamsjQECoyNKEKkWJa0Lgl0GtmAzqMNuo18kGOqUBNUDea9B6pvWz9ByhHEPL00Kc3oJcOrqomMryneys%2FCpyCNnpkk%2BnYqj9Y6Ok4hYBomqPkh%2Fs1HE86MQx%2BxfPQbdrREhihJH4zJBvaCPP2eyfN%2BOwPnpmIGX8bL7eCduYZ671DOXdOW5%2BITX8Llr2sGR2dEt4AA5teQ%2BGXPWPi%2Bc1b%2BaKHpEE0qdVHS6KmG0IqQHpyeGkEd2bss779s%2BwrLZ%2BCIKv&X-Amz-Signature=45178b1a2bb604d13a602ac53b039d1f8dc2743afb35e6f501d6c555772c465b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JMYHU3U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAImr1Z9l7wJEclYuK6V%2Bo0LXRL%2FhH6zANYHrQGLN3g6AiEA6VLwQqwluhYPt63FjXEXJQJIiMU%2B5g7EzNLjOMqLn9IqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgPuZ1CPDpWv8XavircA0KGZTzrFySXU2G57mllLWB3LB0DSEUCULa%2F%2BBCv7imjpXrBihPMiCQV2QGWs8ZMHA1n%2F4D8NnxNvvuSrfZOoq979Hj1GlfiefgwlATGegvpApnj4ByTO502s%2BfJ%2Bk%2BD4aL%2FeeaUpohFt2bGPC3AUTqcc3sn7afQjNlaDpDoHFKBQKjCFASKt8%2FiM1T6sj4FJNjTV7vff3AGjY%2BhzfFmNOcDVBh%2BlxqnaKnCkn8vin6rNeDOXKGQCbt1QGmdv42IwoZHMcB1rWwuOY8yRRKaKhbX1s9Mm9ayBldYdsodPOV8pVC57VNnDUkWX2CLbTj%2BM1RH1NYygprYWAFDVa%2BQ04AGnUHV6g08UR9v4FVV%2Bbw0CBVGY6QD8yqXstYPnnEy4cDFDwg4WeJWHC4TRseMoM5STVRFfBw6ewVnxDzq9%2BJPdbHPpax8xiRbF3IuCX6CaDHqKdYVh4aSe4L4hDthry6Vc3MuoaZ%2B701jBOD%2FB6a%2BZKxaRM65L4NkdUy2syWKmU1pjZYafKUoKvXLPn4nhxSNyKaGITGjXfptfXvk2FxQQsgEQXUJ9D6lb5Cc7rO%2FW0q2kdqzb3MKyCi7Y%2FD3xILu13s4K%2FVtamsjQECoyNKEKkWJa0Lgl0GtmAzqMNuo18kGOqUBNUDea9B6pvWz9ByhHEPL00Kc3oJcOrqomMryneys%2FCpyCNnpkk%2BnYqj9Y6Ok4hYBomqPkh%2Fs1HE86MQx%2BxfPQbdrREhihJH4zJBvaCPP2eyfN%2BOwPnpmIGX8bL7eCduYZ671DOXdOW5%2BITX8Llr2sGR2dEt4AA5teQ%2BGXPWPi%2Bc1b%2BaKHpEE0qdVHS6KmG0IqQHpyeGkEd2bss779s%2BwrLZ%2BCIKv&X-Amz-Signature=8749415629d32a8cbbc9154db16ee9c4f6c27e96291f6e81f1f38709516c36a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
