---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI4CKSNX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDOsavGLzjORfXv0FAV7quhm1tfqEIpTvARqMoB8dm90AIgAxntRVnw0DwHm3BEKa59B4h4V4iWkP7Zk8m1caq65Hkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJg%2FCCtyn%2BX70cxD2ircAyQzi%2FxDHFGrIrhfsn0jKp%2FviK8ZBQ53BnNh1LR%2Bag0tKoh6ZJ6lu%2FAzYKCA0xU8QhA5oNhCbzCBMKsu%2F%2B5irncuvXfAww%2F%2BIAy386eUG9BYWHC3mCT5fPUAzuOfMcRQiPmm2qqwOtCrrhRywKHuemtTqMKz96iauaTFIR%2BBnFyyFJW%2BG5%2BqECW2trwcmk0U8D3AlgicmPyVupaWVEbGF1Qq5JnJugtfrF4iyUFE30ALOkly8NkYJUGefCJe0pr2diEaj5cM6k%2FbMX%2FS5e%2BLgmMntLoxZAGORXuGZXUPDiRbj0lpCW%2FggrWbE2DrsxcHzXhu%2BTYsBz6TSggXLwkbjzAzm1I8hrsFDJYuh1EcUqwyYBxVBpBeZyAIhmTJdFqZcY6tRhnh6VsoD5hqfkmfQ4cNx2Vi5ZCxt3IwDruwgVsBiAs6Mm3QPM7%2FB5%2BUHfAlfUCmQ2B%2Br6MC18ur6mNcsAUf55IZeSBOoQZ%2FBDj%2Fn%2F4IpILvGRrW2GGdbK7uUHMcCXAF4zPDx2AxUNPPbkv0%2F%2F0uLWZyGFXKoRVa%2B87T3%2FOaayxtO5%2BU0a5a0Vt%2BmsGFBFqFS1rbzCj4O7kHDTnzSE%2F2EuTtc0UUPGrAZut1txgeBbsI%2Bj5nk0LMp853MPKFxckGOqUBLoeqRvCG28I2CyARd5jUFIbV%2FgoE5UAxgWl2lw%2Fq8UsfTjlwgAj4NeSAI%2FKsrQcO3hE942cmTxdM5U2LsDjeqAaX2z6SexsSEdgx%2FfIHTRZ66LvgK9KB1EnANs5Lpcr3gPjA0nHyqzUr%2FSD20FwSvmqhUSBm8QxW1WLW40U8O%2BhtQhPYe1%2BofhL%2FV2685VSaGMVCZKlHuk1UEHQKrflF%2Bxtw3yKI&X-Amz-Signature=113f1f54c1ebbcff6734310e1d6742c15e6157b4477f7851e12e4dd74d0743f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI4CKSNX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDOsavGLzjORfXv0FAV7quhm1tfqEIpTvARqMoB8dm90AIgAxntRVnw0DwHm3BEKa59B4h4V4iWkP7Zk8m1caq65Hkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJg%2FCCtyn%2BX70cxD2ircAyQzi%2FxDHFGrIrhfsn0jKp%2FviK8ZBQ53BnNh1LR%2Bag0tKoh6ZJ6lu%2FAzYKCA0xU8QhA5oNhCbzCBMKsu%2F%2B5irncuvXfAww%2F%2BIAy386eUG9BYWHC3mCT5fPUAzuOfMcRQiPmm2qqwOtCrrhRywKHuemtTqMKz96iauaTFIR%2BBnFyyFJW%2BG5%2BqECW2trwcmk0U8D3AlgicmPyVupaWVEbGF1Qq5JnJugtfrF4iyUFE30ALOkly8NkYJUGefCJe0pr2diEaj5cM6k%2FbMX%2FS5e%2BLgmMntLoxZAGORXuGZXUPDiRbj0lpCW%2FggrWbE2DrsxcHzXhu%2BTYsBz6TSggXLwkbjzAzm1I8hrsFDJYuh1EcUqwyYBxVBpBeZyAIhmTJdFqZcY6tRhnh6VsoD5hqfkmfQ4cNx2Vi5ZCxt3IwDruwgVsBiAs6Mm3QPM7%2FB5%2BUHfAlfUCmQ2B%2Br6MC18ur6mNcsAUf55IZeSBOoQZ%2FBDj%2Fn%2F4IpILvGRrW2GGdbK7uUHMcCXAF4zPDx2AxUNPPbkv0%2F%2F0uLWZyGFXKoRVa%2B87T3%2FOaayxtO5%2BU0a5a0Vt%2BmsGFBFqFS1rbzCj4O7kHDTnzSE%2F2EuTtc0UUPGrAZut1txgeBbsI%2Bj5nk0LMp853MPKFxckGOqUBLoeqRvCG28I2CyARd5jUFIbV%2FgoE5UAxgWl2lw%2Fq8UsfTjlwgAj4NeSAI%2FKsrQcO3hE942cmTxdM5U2LsDjeqAaX2z6SexsSEdgx%2FfIHTRZ66LvgK9KB1EnANs5Lpcr3gPjA0nHyqzUr%2FSD20FwSvmqhUSBm8QxW1WLW40U8O%2BhtQhPYe1%2BofhL%2FV2685VSaGMVCZKlHuk1UEHQKrflF%2Bxtw3yKI&X-Amz-Signature=9e5b93fe0516d88fc9ed743ba9690837430228d63dfcc2047700996ccd685949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
