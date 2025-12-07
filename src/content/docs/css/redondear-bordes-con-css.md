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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMRF3LW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC59RQBWizyw9ZExFJRTuI41G3vfwumj%2BRHYJn2ehnlPwIgUOqqLRzzYQTdLqOOBCKZ%2F8tNR4oKSj1HaC5vUYXUyrgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgvlty4nI8nfJoRyrcAxJ1gYQlwAx%2BtBdIuu9i73hsvgmytBgGFY6TzdjFb8mMIL%2Fcw%2FwQHtRLmF6OIp7mGYS61dWyz3SqveMbM5w%2FroeqrcF4VS3wr6HplnXbyMSrfWL5BY846t6j1txRXgtvLpQg%2F5dquUX5OQREiFIBc1N4tcGFd0JeIqe0sLmrBb76V3deZitZ%2Bf%2FcsXkrCrYnoqF9%2BhPk1bhEpf48Kh34Jvlh6EPEzLj9eS%2BHyRQuaeAbA3A0f2gJVUre79yhC8upbB2Bfte1fsOmg477d1%2Bu9NCzvQCmmb0SAShlTob9ezg1YVkIyQf2%2FmcW7QADuiKRD0fU2p%2FqwHkqGLDtpQN8NpUPvk4CK%2FoxO%2F9STu4MgdQicd7DWmn0ZjE6nJxYZJEYR61grnPqr11axj3x9Itak1%2F%2FxPJKYRiKao6fH6cx6kJ5C5XnTrMIhEMobXlw2OemtIt8kOU9yP3ZYgo29kz%2FStq3d8LWNT2EWLjfo331WYjcz25gdLHn1lTHBeEXPDu2r85%2BP7inpdOZcQMkmmkLV6NR7xLrtvLk8JcjCUv4ja3XQVke7kriEBkv9KyrpArscqbPLVt%2FNg%2BhICz03gQNLZm9D8Em4RKdI0lgDlyJGnBesEUXYoe%2Fy04nzm5aMICa1ckGOqUBCAWmF2KLgJXtJyR0n%2BjNAL5ztCvkwHe2ylfMwfDc9Ow%2FI0nWBooUmvvx2iB%2FzcIQJRzAJcgPsDkEkOMZEPJ3F0obkpZpeibJcRMwM5pcZ7OV%2B6YQ4G1%2F7S3Yx5%2F3Brj5dBYG00FwowxrGplga73fpd5a0aC3OCzSmB0Hke1DVMheFr9y087BAoIM3eV1bAYQvXDHcMxqlyADfO5HlCGNj%2FfFFTFE&X-Amz-Signature=493496349ee31ed5501df5283409503a7f4d45ecc940fc5318aa88deaadee69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMRF3LW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC59RQBWizyw9ZExFJRTuI41G3vfwumj%2BRHYJn2ehnlPwIgUOqqLRzzYQTdLqOOBCKZ%2F8tNR4oKSj1HaC5vUYXUyrgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgvlty4nI8nfJoRyrcAxJ1gYQlwAx%2BtBdIuu9i73hsvgmytBgGFY6TzdjFb8mMIL%2Fcw%2FwQHtRLmF6OIp7mGYS61dWyz3SqveMbM5w%2FroeqrcF4VS3wr6HplnXbyMSrfWL5BY846t6j1txRXgtvLpQg%2F5dquUX5OQREiFIBc1N4tcGFd0JeIqe0sLmrBb76V3deZitZ%2Bf%2FcsXkrCrYnoqF9%2BhPk1bhEpf48Kh34Jvlh6EPEzLj9eS%2BHyRQuaeAbA3A0f2gJVUre79yhC8upbB2Bfte1fsOmg477d1%2Bu9NCzvQCmmb0SAShlTob9ezg1YVkIyQf2%2FmcW7QADuiKRD0fU2p%2FqwHkqGLDtpQN8NpUPvk4CK%2FoxO%2F9STu4MgdQicd7DWmn0ZjE6nJxYZJEYR61grnPqr11axj3x9Itak1%2F%2FxPJKYRiKao6fH6cx6kJ5C5XnTrMIhEMobXlw2OemtIt8kOU9yP3ZYgo29kz%2FStq3d8LWNT2EWLjfo331WYjcz25gdLHn1lTHBeEXPDu2r85%2BP7inpdOZcQMkmmkLV6NR7xLrtvLk8JcjCUv4ja3XQVke7kriEBkv9KyrpArscqbPLVt%2FNg%2BhICz03gQNLZm9D8Em4RKdI0lgDlyJGnBesEUXYoe%2Fy04nzm5aMICa1ckGOqUBCAWmF2KLgJXtJyR0n%2BjNAL5ztCvkwHe2ylfMwfDc9Ow%2FI0nWBooUmvvx2iB%2FzcIQJRzAJcgPsDkEkOMZEPJ3F0obkpZpeibJcRMwM5pcZ7OV%2B6YQ4G1%2F7S3Yx5%2F3Brj5dBYG00FwowxrGplga73fpd5a0aC3OCzSmB0Hke1DVMheFr9y087BAoIM3eV1bAYQvXDHcMxqlyADfO5HlCGNj%2FfFFTFE&X-Amz-Signature=5772832843404ff75509f0046419d5110939638266187106596a319ef297b3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
