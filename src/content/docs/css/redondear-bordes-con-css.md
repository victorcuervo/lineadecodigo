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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HSXAFNE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxooH6rrer5qeKi%2B2c7Qibcm9sT4VFL6VaLfBuv0WKsQIgVNiiFMrgfM2ROdflAX2AsBhUnT5bOlYGkZiXramcLeEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxu25rXX8woLgKvfyrcA3mmMrY5U%2FdjVLGabLYbT0VNHCMgMh5%2Bww8XM31OzDRAc1jumvzu30%2BcVI470mAqwfNe9OnMgapyJNUmwoVeCKxBqGvqLmsWdlgBgNiVFQrC6kZvh6HMAhv7IMkzaP%2Fq7ldsR7eHVMaOxBeDOGe6k3cs8B5QQ7p3SfIJ25kQ4LCEl0Yy%2BmQW4yy%2FPLOSIK54%2F7jJ7U3hmCktiswnuwXeJu8ZMp9woPcP06rpAzVMpGSIcLD7hDClMxmgKtHtx7yGkpJYEANE5M%2FPDscLrXk7%2FvvI8WgmMC0lkhkWX%2F56zDxJh%2BFIEakWjtabOEH7g4ci8W8%2FjlRHFydNFrCdolwA%2BUMpQj9k%2Fvmg4R%2BeZndwJR0EC9Q92GLdF6OKHLtN6LRRfnOdhlyKTcOQWsz2mvIpdL8zBQLN9xVUGs3SG%2B%2FGCZhrb%2BbVH%2FXegVqn68228j3RDSehhSqDiSHA2DX9jX5VGZvLk3PaS7Xrw9GpMu9D0oWC%2BAY6gjpnVNSJuYJTaQ8JvQ%2BQhB7%2FfrYxAxuAGiC90DI042VGuKxnVz8kH6T3Sexb3VothTnxDwwfhDOD2yJtQ6b8L%2BBtpWMMUbdNM30wzr%2FzUO4NeLIFiCq%2Fq%2BCxBhXT3l8ereSC%2B2yPdEJPMLqb1MkGOqUBgd%2BE%2FQ1tmXUfTyy9l0E92Rv2KYSFWJM0unaUjghU0iigAiyAQEC%2FeurBUrvXrtQRrY6KYrI1dP6VqvOtXC%2F5rztCWJmmwyYP9%2BdIEwfNd4MXrIGSNTPVvX0kHnhJrLMOAtaKMAahVElN3UsCKXt84iVtnvgk%2FHOkYCLyEgQ8aqAfuh%2Fi1BcFZ%2BbvhOwCgl6UQzvqivvA2vYYo2R1XTKzJixUgZCz&X-Amz-Signature=376d7886496f6fee8e85f1f97548f0199f4bb9b4acd7a69e75f16b17f39cdc6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HSXAFNE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxooH6rrer5qeKi%2B2c7Qibcm9sT4VFL6VaLfBuv0WKsQIgVNiiFMrgfM2ROdflAX2AsBhUnT5bOlYGkZiXramcLeEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxu25rXX8woLgKvfyrcA3mmMrY5U%2FdjVLGabLYbT0VNHCMgMh5%2Bww8XM31OzDRAc1jumvzu30%2BcVI470mAqwfNe9OnMgapyJNUmwoVeCKxBqGvqLmsWdlgBgNiVFQrC6kZvh6HMAhv7IMkzaP%2Fq7ldsR7eHVMaOxBeDOGe6k3cs8B5QQ7p3SfIJ25kQ4LCEl0Yy%2BmQW4yy%2FPLOSIK54%2F7jJ7U3hmCktiswnuwXeJu8ZMp9woPcP06rpAzVMpGSIcLD7hDClMxmgKtHtx7yGkpJYEANE5M%2FPDscLrXk7%2FvvI8WgmMC0lkhkWX%2F56zDxJh%2BFIEakWjtabOEH7g4ci8W8%2FjlRHFydNFrCdolwA%2BUMpQj9k%2Fvmg4R%2BeZndwJR0EC9Q92GLdF6OKHLtN6LRRfnOdhlyKTcOQWsz2mvIpdL8zBQLN9xVUGs3SG%2B%2FGCZhrb%2BbVH%2FXegVqn68228j3RDSehhSqDiSHA2DX9jX5VGZvLk3PaS7Xrw9GpMu9D0oWC%2BAY6gjpnVNSJuYJTaQ8JvQ%2BQhB7%2FfrYxAxuAGiC90DI042VGuKxnVz8kH6T3Sexb3VothTnxDwwfhDOD2yJtQ6b8L%2BBtpWMMUbdNM30wzr%2FzUO4NeLIFiCq%2Fq%2BCxBhXT3l8ereSC%2B2yPdEJPMLqb1MkGOqUBgd%2BE%2FQ1tmXUfTyy9l0E92Rv2KYSFWJM0unaUjghU0iigAiyAQEC%2FeurBUrvXrtQRrY6KYrI1dP6VqvOtXC%2F5rztCWJmmwyYP9%2BdIEwfNd4MXrIGSNTPVvX0kHnhJrLMOAtaKMAahVElN3UsCKXt84iVtnvgk%2FHOkYCLyEgQ8aqAfuh%2Fi1BcFZ%2BbvhOwCgl6UQzvqivvA2vYYo2R1XTKzJixUgZCz&X-Amz-Signature=fc626cacedcff78e8d88994eb1a3a30c3fed8e330a79c472eec063da435b802c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
