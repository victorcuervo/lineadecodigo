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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZEK2NP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNOfAQz%2BDSBx2xhwVozzixUUVCMudBNN4IOgJlqwdQzAiEA7LmMNVR5KaNNUQ9b4DsJY4NJKHal8i8327sffB%2F0ek8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmBoZH75f6ZAdydGSrcA1hHKUtHxh5u%2FI49evXSCm2n00nQJsPBP655mVpp2xhdJ5XFb1Div5RKiQQZQTLSaH3%2FUX2h2URFrvcY%2BJaMCB5P4oVv9p7FBOk5f%2FWggfnAGg948QtwqHm15kvadgV3wJX7J1pSGcMg7cUOLlJI53NJNiopWlhvDQBp9CKHzp1pE5uWZP%2Fhaw2c1WuxFdgblGsVnBO91n4R1MIDRl1T0evNxY3QiiYUk2RzCDpqR%2BJTTJHgA4c%2BKcuz%2BwCGSo%2FFFWVoM2dtu5CeYmY56VAvqjHPFDEUN0jL%2Fo7kNg94uaXgNwIrp%2FeVl2ZaWmTnOZ57fYCutuq5ZEm32l2TNpgaFYf6HmBEvIheecAzVxJ%2Fr8yFOzEJrzNyVfLSF2IggUNY3Go7O8Ri%2BPsYDJoimt2V6KNRfmWisvvq8%2B4eTkcB5l29xnUJTW%2BR5AvBUxNCK0f0qn6XswqZyTztMmal7tPkSKAFfculmjYslfXM3svRTVq3L9NLeqY83zwDOzCpRsao8ypRIMVtv2HmBoPKfhVugaxFbYxApzLW4jvSxLVCAycaWaFhTzwUMYBXMhoBSDSVT2pUAjZfcrk2zUSB%2B6ufrLO3y%2Bi%2FqIHdUamzX816TpBdNEe7RvRqG2eOhxRgMLOa1ckGOqUB90KefKgVypdqup%2F8GsUKvt5EEpqlIgMq%2FHaGzORJqBa3wsMFuAlQRVsk34XSy2k4a8h74DJ5tvpV3BaO4ig%2Fl035oO%2BjZ0ZnMmuRKqj2JnXYdtHRbG3XD2Ncb%2FQ1MXenpUdibjAHPoXDOk6xkOhbjg7Nu2rmoAFQ3CvqKK6OPX%2BIZdOTkvqrMNT6HXuBmeLcDLPfpMuE2pg0%2FCnsqtKW9t1MyxbE&X-Amz-Signature=05b9ebb375e71b73fa7908363789383ac65640c5e5ebbb368763825b271a30c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EZEK2NP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNOfAQz%2BDSBx2xhwVozzixUUVCMudBNN4IOgJlqwdQzAiEA7LmMNVR5KaNNUQ9b4DsJY4NJKHal8i8327sffB%2F0ek8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmBoZH75f6ZAdydGSrcA1hHKUtHxh5u%2FI49evXSCm2n00nQJsPBP655mVpp2xhdJ5XFb1Div5RKiQQZQTLSaH3%2FUX2h2URFrvcY%2BJaMCB5P4oVv9p7FBOk5f%2FWggfnAGg948QtwqHm15kvadgV3wJX7J1pSGcMg7cUOLlJI53NJNiopWlhvDQBp9CKHzp1pE5uWZP%2Fhaw2c1WuxFdgblGsVnBO91n4R1MIDRl1T0evNxY3QiiYUk2RzCDpqR%2BJTTJHgA4c%2BKcuz%2BwCGSo%2FFFWVoM2dtu5CeYmY56VAvqjHPFDEUN0jL%2Fo7kNg94uaXgNwIrp%2FeVl2ZaWmTnOZ57fYCutuq5ZEm32l2TNpgaFYf6HmBEvIheecAzVxJ%2Fr8yFOzEJrzNyVfLSF2IggUNY3Go7O8Ri%2BPsYDJoimt2V6KNRfmWisvvq8%2B4eTkcB5l29xnUJTW%2BR5AvBUxNCK0f0qn6XswqZyTztMmal7tPkSKAFfculmjYslfXM3svRTVq3L9NLeqY83zwDOzCpRsao8ypRIMVtv2HmBoPKfhVugaxFbYxApzLW4jvSxLVCAycaWaFhTzwUMYBXMhoBSDSVT2pUAjZfcrk2zUSB%2B6ufrLO3y%2Bi%2FqIHdUamzX816TpBdNEe7RvRqG2eOhxRgMLOa1ckGOqUB90KefKgVypdqup%2F8GsUKvt5EEpqlIgMq%2FHaGzORJqBa3wsMFuAlQRVsk34XSy2k4a8h74DJ5tvpV3BaO4ig%2Fl035oO%2BjZ0ZnMmuRKqj2JnXYdtHRbG3XD2Ncb%2FQ1MXenpUdibjAHPoXDOk6xkOhbjg7Nu2rmoAFQ3CvqKK6OPX%2BIZdOTkvqrMNT6HXuBmeLcDLPfpMuE2pg0%2FCnsqtKW9t1MyxbE&X-Amz-Signature=f517b42cc7577fa4d69d52a479da4a1293324a7e801e7c91113927733c7fdedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
