---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WUWLLCU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC%2BEpsAzG7lkyPmGDfxDRUZg9%2FGxkX3K4ZpdY%2BHMtZ2OgIhAMY3l8oZAa6UtQAWmQujCEuY%2FGJVkjJNPya239BnLTWhKv8DCDYQABoMNjM3NDIzMTgzODA1IgyXQd7IvtdxtNFEadAq3ANAyyDNOOpyMuIL3XRSLGXUfBXzGi682GIgYhLNK3a08kJeF2RKJ4vwMnzFqzN4GwlgLK2%2FhTAIME5M3iVcOrQ30iB00jWGcp9Wm%2Bm2iqOMIGaDuGdfAukKYFCtPqWIDvRAvk1mN%2F1aaKdYt1xnSf4mVj2Xv8zyGUR6UGuWl8eRCMYzjB7mh%2B1WCGkLR0yx82FzD6apsSFuENuGMRiEzOi0Pa1VyEYWvBnpPtpyiQjfaDgOL3S%2BhToS%2BuNtq0NF590Bbwe%2BHXHwlkrOaAGkeNshUKYumxCQRiDWSQ%2B2LU2ZkKirvfUWSVvVlwQ7JvhT867z9kOfAD%2BNUZaXlxjS0eo7efYeLuyNmwl1deO3Ft%2Fb35ImsQi5O0I6L%2FtyIc5k1R0rGV%2BRU33E1tBGjhlzLdxtVLZ%2Fpoo7ogipykXlQb2VpUH7XLpEMkmisA7vAuh2eka6giOOIt377qbN7G3dI2a3PKxQDg6DHwiCVWfmDuREiBp5v%2BMu%2BN9klwRiVHhJVk%2BGCFXyCps0B03wXExwAYGhuCGaFfLE1BE%2B7SmjM0vlRz5RebSirTt34nAwZzlh1L8z0XnAagF5wGBsLmDDzQ%2BrttNq%2BAOlm6lBHEi0kCYbRCDOILsYC%2BXeLIYkCDDYvcLJBjqkAbu8vHkPvwxSdu3uOGZevp7ENd3%2BVXSBwMtWaNw5%2FibYUAjdUyqopcge7atASdRXUdXPqD6dNIid8Vig1euOIYjkvaKsJRWNOjieEp6DmaTNSp9%2F4sUSspomVaS7IkLY5kCoiOdqHtwzNPNlBVRQP87tn37DLoEMIYQB6KH1jle0v%2FnGDF0KZt7T3JptTatJ%2F9aQ2ZMM5RrfsHZvo1ZaoO1h1b1N&X-Amz-Signature=bdbdb3ec12272d8617f78b05bf8a5587a70325744fb173fe2d6d5c4f48b9f814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WUWLLCU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC%2BEpsAzG7lkyPmGDfxDRUZg9%2FGxkX3K4ZpdY%2BHMtZ2OgIhAMY3l8oZAa6UtQAWmQujCEuY%2FGJVkjJNPya239BnLTWhKv8DCDYQABoMNjM3NDIzMTgzODA1IgyXQd7IvtdxtNFEadAq3ANAyyDNOOpyMuIL3XRSLGXUfBXzGi682GIgYhLNK3a08kJeF2RKJ4vwMnzFqzN4GwlgLK2%2FhTAIME5M3iVcOrQ30iB00jWGcp9Wm%2Bm2iqOMIGaDuGdfAukKYFCtPqWIDvRAvk1mN%2F1aaKdYt1xnSf4mVj2Xv8zyGUR6UGuWl8eRCMYzjB7mh%2B1WCGkLR0yx82FzD6apsSFuENuGMRiEzOi0Pa1VyEYWvBnpPtpyiQjfaDgOL3S%2BhToS%2BuNtq0NF590Bbwe%2BHXHwlkrOaAGkeNshUKYumxCQRiDWSQ%2B2LU2ZkKirvfUWSVvVlwQ7JvhT867z9kOfAD%2BNUZaXlxjS0eo7efYeLuyNmwl1deO3Ft%2Fb35ImsQi5O0I6L%2FtyIc5k1R0rGV%2BRU33E1tBGjhlzLdxtVLZ%2Fpoo7ogipykXlQb2VpUH7XLpEMkmisA7vAuh2eka6giOOIt377qbN7G3dI2a3PKxQDg6DHwiCVWfmDuREiBp5v%2BMu%2BN9klwRiVHhJVk%2BGCFXyCps0B03wXExwAYGhuCGaFfLE1BE%2B7SmjM0vlRz5RebSirTt34nAwZzlh1L8z0XnAagF5wGBsLmDDzQ%2BrttNq%2BAOlm6lBHEi0kCYbRCDOILsYC%2BXeLIYkCDDYvcLJBjqkAbu8vHkPvwxSdu3uOGZevp7ENd3%2BVXSBwMtWaNw5%2FibYUAjdUyqopcge7atASdRXUdXPqD6dNIid8Vig1euOIYjkvaKsJRWNOjieEp6DmaTNSp9%2F4sUSspomVaS7IkLY5kCoiOdqHtwzNPNlBVRQP87tn37DLoEMIYQB6KH1jle0v%2FnGDF0KZt7T3JptTatJ%2F9aQ2ZMM5RrfsHZvo1ZaoO1h1b1N&X-Amz-Signature=c2fe2dfee60ed07e0158e3349aea58a852ce29794efb901e23868e6a287863a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
