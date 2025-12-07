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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL4KYEB2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYc1AV%2F2Bxu3mPHq%2FGfXXsh54CyJw%2B3Z11ssORaUqUYQIhAIEhotxU3dbN4ECT24Mg1DxdHPwqxT4qtv7YlAMs%2BVVXKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR4ZwNmAQQjgSukSIq3AMPU9180UiLeJGN2bZVOCwfIsaAWHPsgz6lQR2kzoI4xR3xA9sEvOgp7GeimESQSYve2FtbCPUpNuNFSkbD9bUdQviMXRlD3fbrg%2BoZMUaHH0mL5YgjPMlhtEbW3Ijyd7uwD%2B2tiXy4Ho7NoE35f9eXOP23GAHZTf6Xi6Isl7eJHnIPh16JAeeiAwlVCpoMX4muznYzUjbcrPOx2LI%2BL5dzloSfbpUmdAbWo8Wa6B%2BnnBt7P6LGXYN2r3LLSi6FAuwFCQpBe2s1mYjV5Hf%2BJKtlp0ke3ZGPSyC%2Bt8N7VbOFSRnxbZyWjyPOEwy8vdjEEUlFlgUq%2B4%2B%2F1IKCimXgrm1wbEFeIYufiSVWasmXdE2c0BTmf1GSmjHF6vc9pagZeG4FgdAjgToGQRl7X4%2BQkE8I1WJ4kWtVi%2F5k%2Fz%2FrLg%2FJU3yAjoqabzGUagdiekp67ehbLf%2B23ZxPuOnnXfHk4wUVrBbNgaUciBXjIb3O3m1TmhIzNI0NfyDrzPLZr7ZJyajS1Q0GB9UHOODeKaxTtvh63pc7%2BNoxGYrku6uPg%2F3P9sIBz%2Bmj5eFQT0S53YuU3hnSpXIrLKwWHMp8%2BUqGJvxmtUB7XWoGXoCcq2hUARO0eZAvZh2qOUEtevZvdjDCodTJBjqkARxQ3Z7eqzreHDsSqarCDL2FkzXxXCJC0%2BB60O95gWeQ8UQ%2BSUpfUm3DK81M%2F6YNrqFN1iyW3hgUHkIxSH3XPDFbJ%2FIjV6SP5lPgcMnPb%2FLQumvSFCfP8UskexFDN5jP5ohAVQ6Ku8G3cxTVn7FIB9VyW82RRXFyHyUZwwMEPEfRcWY0VKbiKJPXCq%2BR2cvfMjrtHW%2FKOMbx%2F8NyDAdC34pn0yl%2F&X-Amz-Signature=b313624525c5b8bd4f60a0247dbd166a5555d6a625733985872855ff58614da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL4KYEB2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYc1AV%2F2Bxu3mPHq%2FGfXXsh54CyJw%2B3Z11ssORaUqUYQIhAIEhotxU3dbN4ECT24Mg1DxdHPwqxT4qtv7YlAMs%2BVVXKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR4ZwNmAQQjgSukSIq3AMPU9180UiLeJGN2bZVOCwfIsaAWHPsgz6lQR2kzoI4xR3xA9sEvOgp7GeimESQSYve2FtbCPUpNuNFSkbD9bUdQviMXRlD3fbrg%2BoZMUaHH0mL5YgjPMlhtEbW3Ijyd7uwD%2B2tiXy4Ho7NoE35f9eXOP23GAHZTf6Xi6Isl7eJHnIPh16JAeeiAwlVCpoMX4muznYzUjbcrPOx2LI%2BL5dzloSfbpUmdAbWo8Wa6B%2BnnBt7P6LGXYN2r3LLSi6FAuwFCQpBe2s1mYjV5Hf%2BJKtlp0ke3ZGPSyC%2Bt8N7VbOFSRnxbZyWjyPOEwy8vdjEEUlFlgUq%2B4%2B%2F1IKCimXgrm1wbEFeIYufiSVWasmXdE2c0BTmf1GSmjHF6vc9pagZeG4FgdAjgToGQRl7X4%2BQkE8I1WJ4kWtVi%2F5k%2Fz%2FrLg%2FJU3yAjoqabzGUagdiekp67ehbLf%2B23ZxPuOnnXfHk4wUVrBbNgaUciBXjIb3O3m1TmhIzNI0NfyDrzPLZr7ZJyajS1Q0GB9UHOODeKaxTtvh63pc7%2BNoxGYrku6uPg%2F3P9sIBz%2Bmj5eFQT0S53YuU3hnSpXIrLKwWHMp8%2BUqGJvxmtUB7XWoGXoCcq2hUARO0eZAvZh2qOUEtevZvdjDCodTJBjqkARxQ3Z7eqzreHDsSqarCDL2FkzXxXCJC0%2BB60O95gWeQ8UQ%2BSUpfUm3DK81M%2F6YNrqFN1iyW3hgUHkIxSH3XPDFbJ%2FIjV6SP5lPgcMnPb%2FLQumvSFCfP8UskexFDN5jP5ohAVQ6Ku8G3cxTVn7FIB9VyW82RRXFyHyUZwwMEPEfRcWY0VKbiKJPXCq%2BR2cvfMjrtHW%2FKOMbx%2F8NyDAdC34pn0yl%2F&X-Amz-Signature=7cc5e43731c3fb03325dae38770a11a5a5d1dabd9f1e6c6b7af106dbf7c957a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
