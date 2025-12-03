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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFUPOTI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGlxRYT2x27XndrUr83mSS%2BJLdG4rPT2OwmFu9NplsWnAiBLUT1%2BkgcHXmyiCx936VnP31XQKBg5jQfDZYm6VuqNoir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM2LyqHem7kjnhNUAXKtwDmmaRcwVwl8WPky9rTbAps7uAvFHi95NjOpi0ii%2F3aX2pwdZ6yh4lm64O07VfP5j%2FrKIGTJdHbJ0V0kplkv1aLffZdEf8JSEpQR6%2Bu2oil3KSJg0QvEPRsvhbvtwhBXy8YGGRkErbkNFWJhcJohMrkd%2FB%2Bf7FSnnmv1LMM9%2BdY%2FX4O9Aog6V00SGopV3bFAObbCjFLOeJh%2BdcgyrhbmIqyY76E%2BlmZ9P%2BcxPvL9jSkp%2F1JCXibadrdJp%2BsUewAVfcwEMRBAM5fsajS2Paw9IjEvO1XOENH7ATOg6s0FjlnVw%2Fnb9W47j72xzViDkY9G33FqZ9F9QbTcUldmjOxL60AUdftTLSgSEZTFvE749wkZPpRmLmh%2Bg7fbmOSzKmAEbsVRXghai8OKzEux51XB%2FrQ%2BN4mjtmYq%2BySg5cs5Tt8luQck0iNRvevFR5FJzdOAXWbV5p%2F%2BGJHMP8uhDA9TV1r3WJ1nht2%2F9x4b4C5xhyKTgmDJy0%2FS33VdWVlqxBmII80tH5mHNLIXtYhmEcWV7M2PP5vXYxgv%2BGSCFOJ5LKkMUbgOcDqZ%2BKgS9qzpTIgR67jm0hB5%2BToYYq6vCGWHmNutV0p0Qup7tQdzCwka08pvZAWuMi7FIw1RXG3Z8w1%2FfCyQY6pgFOeCMfLr08STaRUAsKAloajipJoRIa57Lb6qgw1qiLUwjnW3IR%2FvNaVqtIRoWxQTPwYVLXqUAX%2FPd1wqF3AgoOUdmaaBh3ifdm%2BVMOlOToLuPCMzz4sDy1u6pPs0fuEcaOck6dYt8vDkUCQKLyk9KJLTvv9YGuoaWECRwAQ2urUWEUHy6TjxnMCh01YmesZmNnPRCZ8kSuVSnM%2F08%2FfHFvvOV0QZvS&X-Amz-Signature=52d2261501a6045c967e78f93a055aed99179397b5c68f326450b52d98a5f961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFUPOTI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGlxRYT2x27XndrUr83mSS%2BJLdG4rPT2OwmFu9NplsWnAiBLUT1%2BkgcHXmyiCx936VnP31XQKBg5jQfDZYm6VuqNoir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM2LyqHem7kjnhNUAXKtwDmmaRcwVwl8WPky9rTbAps7uAvFHi95NjOpi0ii%2F3aX2pwdZ6yh4lm64O07VfP5j%2FrKIGTJdHbJ0V0kplkv1aLffZdEf8JSEpQR6%2Bu2oil3KSJg0QvEPRsvhbvtwhBXy8YGGRkErbkNFWJhcJohMrkd%2FB%2Bf7FSnnmv1LMM9%2BdY%2FX4O9Aog6V00SGopV3bFAObbCjFLOeJh%2BdcgyrhbmIqyY76E%2BlmZ9P%2BcxPvL9jSkp%2F1JCXibadrdJp%2BsUewAVfcwEMRBAM5fsajS2Paw9IjEvO1XOENH7ATOg6s0FjlnVw%2Fnb9W47j72xzViDkY9G33FqZ9F9QbTcUldmjOxL60AUdftTLSgSEZTFvE749wkZPpRmLmh%2Bg7fbmOSzKmAEbsVRXghai8OKzEux51XB%2FrQ%2BN4mjtmYq%2BySg5cs5Tt8luQck0iNRvevFR5FJzdOAXWbV5p%2F%2BGJHMP8uhDA9TV1r3WJ1nht2%2F9x4b4C5xhyKTgmDJy0%2FS33VdWVlqxBmII80tH5mHNLIXtYhmEcWV7M2PP5vXYxgv%2BGSCFOJ5LKkMUbgOcDqZ%2BKgS9qzpTIgR67jm0hB5%2BToYYq6vCGWHmNutV0p0Qup7tQdzCwka08pvZAWuMi7FIw1RXG3Z8w1%2FfCyQY6pgFOeCMfLr08STaRUAsKAloajipJoRIa57Lb6qgw1qiLUwjnW3IR%2FvNaVqtIRoWxQTPwYVLXqUAX%2FPd1wqF3AgoOUdmaaBh3ifdm%2BVMOlOToLuPCMzz4sDy1u6pPs0fuEcaOck6dYt8vDkUCQKLyk9KJLTvv9YGuoaWECRwAQ2urUWEUHy6TjxnMCh01YmesZmNnPRCZ8kSuVSnM%2F08%2FfHFvvOV0QZvS&X-Amz-Signature=8b02594221a004d28bdaff987c8f3b2c8b9032f320bcb69a87c3a9b5cfd7280d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
