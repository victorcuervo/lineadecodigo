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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CAJLE7Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOBqO6hTFChyVkrumV%2BO3MIBrYM%2FVcA49sJDPAPXcmIgIhAJ8%2BM8j%2B3EqMVh0KOOeoErVcjAJSV2zfak25I%2FpIlOjPKv8DCHMQABoMNjM3NDIzMTgzODA1Igz1Hxn1nkz53CSJi6gq3APMBD66QsLGGKQD6Py2s5eOuBxW5XohJ4F7DiWk1wz%2FK4m8haGRyFln%2BtONBoW9YpvfayDZh1w7KKAlAycOiu4nKE8hcwXTaqef5ZQzd3d%2FZzZ87S1cYxBOsfYzGEzMV2AFRl6cZdAL96r6ALs75g4wHHI%2FrlU8v%2F%2FgCnX%2BWJEuYdw5OUCIaKPBd%2B7H1wpKcZzBdo1qrB1EAMwrwIlfyJlMlMg7TV9rR92UeLk3qBgRZOhUWisxyd%2FIL9qdQWeuMCTUhjii%2FcshdOnrh9d%2Bw23NWBZNkgZcN%2FzaJFByUFiQPkxEKGt%2FSqBlE1NIKLpcMpibGH4dymL5QZMVGQOWvHheSoOZkVVTIJ95GSTcQbmyjWrA7qIzjfhxsEa3P4V6y1W1wZUXwBWP%2Be2h2tMdibr0gnxqrNBdkuSP9LCa7L8q7NRNSut3YjGYMY2pgeM9q5ig7okeH8L%2FvuAmgosxXtdXiz5SWKRaBtNXGLhIhNCDW%2Beu3VvPtG3%2F1ODRk60mBVx127FNjd55A%2FfS2bmdIvyTe1H37HHc7VMSmfKvr7vOm3SsUjwstuN%2FJLpd2L2vM65w2FdFTC6O%2Bs%2FbvFW3lrXaXsMBLbRVFEE6Rvd33KSJFH9BIaTic%2BSTNUXTMjCcl4jKBjqkAYzjjtUIA4e5XbwmvTzpSm3gSH7EMBwOFndeYAXXRHb85MZdxhuQCL%2F5%2BptS68Ym3NfVc%2FV2elLeunCn5RpT3RgbVdPctQh8qcufSC8KmwQASwmxnGaQa58cBG9j2GU79YtOyD4eUuu19tjgYAIEqvGnSfPNf%2F4sCQ4rT0%2FuGckMPDhtvXECIAKavAvRREgVDgqQCiZDQazO8cVQegFWoVT3lNWL&X-Amz-Signature=47333bbb344769b23ba6441941c7d0dd85a1586a2c68ea090a955fd3a3acbcbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CAJLE7Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOBqO6hTFChyVkrumV%2BO3MIBrYM%2FVcA49sJDPAPXcmIgIhAJ8%2BM8j%2B3EqMVh0KOOeoErVcjAJSV2zfak25I%2FpIlOjPKv8DCHMQABoMNjM3NDIzMTgzODA1Igz1Hxn1nkz53CSJi6gq3APMBD66QsLGGKQD6Py2s5eOuBxW5XohJ4F7DiWk1wz%2FK4m8haGRyFln%2BtONBoW9YpvfayDZh1w7KKAlAycOiu4nKE8hcwXTaqef5ZQzd3d%2FZzZ87S1cYxBOsfYzGEzMV2AFRl6cZdAL96r6ALs75g4wHHI%2FrlU8v%2F%2FgCnX%2BWJEuYdw5OUCIaKPBd%2B7H1wpKcZzBdo1qrB1EAMwrwIlfyJlMlMg7TV9rR92UeLk3qBgRZOhUWisxyd%2FIL9qdQWeuMCTUhjii%2FcshdOnrh9d%2Bw23NWBZNkgZcN%2FzaJFByUFiQPkxEKGt%2FSqBlE1NIKLpcMpibGH4dymL5QZMVGQOWvHheSoOZkVVTIJ95GSTcQbmyjWrA7qIzjfhxsEa3P4V6y1W1wZUXwBWP%2Be2h2tMdibr0gnxqrNBdkuSP9LCa7L8q7NRNSut3YjGYMY2pgeM9q5ig7okeH8L%2FvuAmgosxXtdXiz5SWKRaBtNXGLhIhNCDW%2Beu3VvPtG3%2F1ODRk60mBVx127FNjd55A%2FfS2bmdIvyTe1H37HHc7VMSmfKvr7vOm3SsUjwstuN%2FJLpd2L2vM65w2FdFTC6O%2Bs%2FbvFW3lrXaXsMBLbRVFEE6Rvd33KSJFH9BIaTic%2BSTNUXTMjCcl4jKBjqkAYzjjtUIA4e5XbwmvTzpSm3gSH7EMBwOFndeYAXXRHb85MZdxhuQCL%2F5%2BptS68Ym3NfVc%2FV2elLeunCn5RpT3RgbVdPctQh8qcufSC8KmwQASwmxnGaQa58cBG9j2GU79YtOyD4eUuu19tjgYAIEqvGnSfPNf%2F4sCQ4rT0%2FuGckMPDhtvXECIAKavAvRREgVDgqQCiZDQazO8cVQegFWoVT3lNWL&X-Amz-Signature=7cb09c95a2591a82453bec5c324997c2eea15d944c95ac6dc369e845e15c2862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
