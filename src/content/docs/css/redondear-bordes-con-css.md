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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZAJYO2S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmrOdLFKYsRbEytq3NnvX3S%2BIMu5KW2BnCUzxyVfRD5QIhAPlBDbDrWUv6%2BxODMlVI9ClIgW71BVwP8L%2FaAvip4qwmKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu3XoIGHFmxjJEV%2FQq3AMwF9ufTtG4uMdzBQPVekeI298OffJEau3QNKUvefU4Ldj7DtvYioC8fx9SPGwx0URLJB9S8oQk35Y8%2BgpFSVwLNfgZb6pm5ypEiz%2FIL2DIG1Jv5JynFGcDqp%2FG34cu0e5RjiSWI7UoS5jn7UdF%2BPlck1rDOgQv8uQRUw8W1X%2BajMqdvatanvUSaEl0YjeapH%2Buz%2BmwMbnjsP0EPuVk20YJdeRbstouiFLe2w0ZTZVlirJXr7XP5hSSlCQwmwvkwwcswV3TqcQXatLXznqXYuTX4rzqd2%2BR7HDm8Er6kmAzhvKGD7lmJG1jPgF12vl%2Fi1VCKSp26HXdVtK0M0Jqh0atUTCp0UGRFE0wO225s1UrifxRIXHsuw3zh135VqEoSTl56fPLf3%2Fpz%2F5LthAilhdYXRM0GAC1jSMX3IIPIDuSFDn8QKhQfxOzLW0TV28a95ZmK9J5c3DqDAhwHpN3Z1roR7oNROosajXzrXW5JVpg%2BxbIPDX12snVPGM%2B4g4kEmHWqUH4OIFotADJGPavaii%2FEaKer6Tr3DXP3sORshP%2FzxVHDgSqyh%2FIdYLyloJJxWDNHpWjYTJiQBcuv17wROK%2Fn384AsT3Rs8U%2Be%2FJxuBPrasq3ujcGl%2FAm5P99TD57NnJBjqkAZlF2oQv%2BOtrG%2BkHoHNkNxnlvtu1obkzxM4DSA%2FiOeHiohBk%2BzmFHx5WmEG8WcqEH2ZRKp5M%2F7a3Ixmwqtk7g%2B9ART2nZU20N7xYVsrWYBAnIW%2BO28kRW8VmU1Hs4Sy2hiv%2BaCM16uI9GGzrZkgKaXZHsiwDFoWrALPNr7wlxC82wz88Ac3tUHf934yyLfR16x57rg6OxfSqKCb%2Bw0crtcXcvqLb&X-Amz-Signature=e590b51a744fcb4cdcd97159d53535333668e157ecb1a88d46339d35bb20e69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZAJYO2S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmrOdLFKYsRbEytq3NnvX3S%2BIMu5KW2BnCUzxyVfRD5QIhAPlBDbDrWUv6%2BxODMlVI9ClIgW71BVwP8L%2FaAvip4qwmKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu3XoIGHFmxjJEV%2FQq3AMwF9ufTtG4uMdzBQPVekeI298OffJEau3QNKUvefU4Ldj7DtvYioC8fx9SPGwx0URLJB9S8oQk35Y8%2BgpFSVwLNfgZb6pm5ypEiz%2FIL2DIG1Jv5JynFGcDqp%2FG34cu0e5RjiSWI7UoS5jn7UdF%2BPlck1rDOgQv8uQRUw8W1X%2BajMqdvatanvUSaEl0YjeapH%2Buz%2BmwMbnjsP0EPuVk20YJdeRbstouiFLe2w0ZTZVlirJXr7XP5hSSlCQwmwvkwwcswV3TqcQXatLXznqXYuTX4rzqd2%2BR7HDm8Er6kmAzhvKGD7lmJG1jPgF12vl%2Fi1VCKSp26HXdVtK0M0Jqh0atUTCp0UGRFE0wO225s1UrifxRIXHsuw3zh135VqEoSTl56fPLf3%2Fpz%2F5LthAilhdYXRM0GAC1jSMX3IIPIDuSFDn8QKhQfxOzLW0TV28a95ZmK9J5c3DqDAhwHpN3Z1roR7oNROosajXzrXW5JVpg%2BxbIPDX12snVPGM%2B4g4kEmHWqUH4OIFotADJGPavaii%2FEaKer6Tr3DXP3sORshP%2FzxVHDgSqyh%2FIdYLyloJJxWDNHpWjYTJiQBcuv17wROK%2Fn384AsT3Rs8U%2Be%2FJxuBPrasq3ujcGl%2FAm5P99TD57NnJBjqkAZlF2oQv%2BOtrG%2BkHoHNkNxnlvtu1obkzxM4DSA%2FiOeHiohBk%2BzmFHx5WmEG8WcqEH2ZRKp5M%2F7a3Ixmwqtk7g%2B9ART2nZU20N7xYVsrWYBAnIW%2BO28kRW8VmU1Hs4Sy2hiv%2BaCM16uI9GGzrZkgKaXZHsiwDFoWrALPNr7wlxC82wz88Ac3tUHf934yyLfR16x57rg6OxfSqKCb%2Bw0crtcXcvqLb&X-Amz-Signature=e758a2884a0242187d290b0555c2996c5464dc8bfbaef61a9ee8d815f0c86945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
