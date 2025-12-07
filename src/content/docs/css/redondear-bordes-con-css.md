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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X746SJR7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEGu0CFa%2B0gFFMbnx7zcxbMdcaV7ZBDDo14qh5%2FCD%2BYAiEAkEUVcOE5Ya%2ByR2GOMTN5xLd1lLWVC3wYN%2FJwcvUZKykqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwnpx80Zdbrwk2RoircA8f3DJSNy6OiEhxblpLLsLdZ5qmyaY9pPsdwFhoG8MUeuvs0swJFwP3Sf6EmeBXs9veoVvbFSovFISXAxlNHXkCwSqJsPH3VXhuN1KtPXdSBjSZtvTRq%2F%2FZhswbkZ2aMm0Q8qAnDvHpIyF815nxS6Eq%2F36Fxxh0p4c0n3hCt8sTGGfz%2BNHsu1%2FTcNVV0m2mLFWo4wabAiD5N%2BqSK4vzOi9BFRGqJ5rMizDA93LyY7u7OftzAVQh2n%2F53H0Wyk5tsx1V53IGc%2FK31D5z5qPvM11hmHPMAnbR4yvd%2BSBHCo%2FHpZm%2F1eNdyY5VresXgz7THUP4UBYAAP8bfv1rR6nMu2BTuizEh%2FjcZMHALSQy%2FPoCmx6kUaMXDmy8EwfIMNR9dbRu9Y4dBYqitIdrQ4PFMdZ4ucOWuumWjTEFIGMh4QkudGx06mPINxKN31jaKpwc4sFG2vquxM3IBL%2Fqe3UPc6M2SmNYnd3Jm6Onkihfm8K6eWgpegK8mvpiUOMXzPfCEHTbh6j1ka4LJrQifGkovixblddBukPEpoXTU2Ma1%2F04p8xK2PNIaXGO%2B43lWn2k1coGuf08f%2FUsVeKLMHqJWL8u7Z4U0JoZ1yr%2Bn0J3h1yLl%2F0XHkjlk9dInKUDoMMqa1ckGOqUBujf38FvVHPvIdWet0SPs6UuD6liesgFQ%2BIIm1%2FShl5x9oRDsbhWvwk9hKqu258Gn8GpAKslZJD5HGjovD7mgIKtMFwVvT5t8e5ZeCRLcgX%2Bj7%2F%2BYn0ENIaarztj%2FSxJSGqcee3z7tr2OnPWzZI0sYomNiFiQrfJtcNNVg6uTunPXqfgIHecN%2FIDOZjqMwH1lejFYbm2LGrg7tW7Siq%2FlkBKqaies&X-Amz-Signature=1fef429685b7e0dc1e45a7543ef5b589ad974dc7929ebf0a816c177c129b9998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X746SJR7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEGu0CFa%2B0gFFMbnx7zcxbMdcaV7ZBDDo14qh5%2FCD%2BYAiEAkEUVcOE5Ya%2ByR2GOMTN5xLd1lLWVC3wYN%2FJwcvUZKykqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwnpx80Zdbrwk2RoircA8f3DJSNy6OiEhxblpLLsLdZ5qmyaY9pPsdwFhoG8MUeuvs0swJFwP3Sf6EmeBXs9veoVvbFSovFISXAxlNHXkCwSqJsPH3VXhuN1KtPXdSBjSZtvTRq%2F%2FZhswbkZ2aMm0Q8qAnDvHpIyF815nxS6Eq%2F36Fxxh0p4c0n3hCt8sTGGfz%2BNHsu1%2FTcNVV0m2mLFWo4wabAiD5N%2BqSK4vzOi9BFRGqJ5rMizDA93LyY7u7OftzAVQh2n%2F53H0Wyk5tsx1V53IGc%2FK31D5z5qPvM11hmHPMAnbR4yvd%2BSBHCo%2FHpZm%2F1eNdyY5VresXgz7THUP4UBYAAP8bfv1rR6nMu2BTuizEh%2FjcZMHALSQy%2FPoCmx6kUaMXDmy8EwfIMNR9dbRu9Y4dBYqitIdrQ4PFMdZ4ucOWuumWjTEFIGMh4QkudGx06mPINxKN31jaKpwc4sFG2vquxM3IBL%2Fqe3UPc6M2SmNYnd3Jm6Onkihfm8K6eWgpegK8mvpiUOMXzPfCEHTbh6j1ka4LJrQifGkovixblddBukPEpoXTU2Ma1%2F04p8xK2PNIaXGO%2B43lWn2k1coGuf08f%2FUsVeKLMHqJWL8u7Z4U0JoZ1yr%2Bn0J3h1yLl%2F0XHkjlk9dInKUDoMMqa1ckGOqUBujf38FvVHPvIdWet0SPs6UuD6liesgFQ%2BIIm1%2FShl5x9oRDsbhWvwk9hKqu258Gn8GpAKslZJD5HGjovD7mgIKtMFwVvT5t8e5ZeCRLcgX%2Bj7%2F%2BYn0ENIaarztj%2FSxJSGqcee3z7tr2OnPWzZI0sYomNiFiQrfJtcNNVg6uTunPXqfgIHecN%2FIDOZjqMwH1lejFYbm2LGrg7tW7Siq%2FlkBKqaies&X-Amz-Signature=db381bde4788337c4d2e463c0c38bca20fd538c463e717e2d180f50904d32aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
