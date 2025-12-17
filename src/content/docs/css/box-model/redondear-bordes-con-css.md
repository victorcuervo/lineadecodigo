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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH3ESRNP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrYmprof2LVyk%2BAvPRGpnU7Yls6ggORC9LvpkQiE0SVgIhAM914vbZH4mr30jDeiAUHiRCV48Z2Ny9%2Ft9Tf9O79igqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziiFOzgukhx5n43Voq3APCsSC1R%2FatC8hUD0U%2F3%2FOx%2BXg5qi0F4UCAa3h1NErG6OvZ58r8khTaSXULzCBGXd31dAe13GBFUBkTjF3Qa0A9oEViLg6JkZ4XxE8ZNb%2BMfbXrx4exnFEJlgSfxJ1obK45dsxHAiUGqhvRFhOnojX%2B9iMUaWuAU2POico6TzfwqsKy7zRScc2q2BT68tLeRCsUUiuu5B59EO4sDFsO074MP0PricJ%2FxA2xvfRrQz6YiU4RfckyIgD3o7CZM7K8b4mjZc0KE7yzS%2BCjC%2BgNMGY6faWLEyPvLgnVLVUv1V1ERe4kFsIl%2B9xyqjKu0A0nEy78HiXAQ8HjFCOn1OQYbrFCnHNdh7YXEkdBtQKoro%2F0gMJqbBvEIhEqNDR46vbHd7Hm59QmX0TziqPjnw%2BrYFzkoTaNuZPQv6iRveIEnRZmF80Tc9%2BcxfTKjS1wyFkHdkEe69qiw470nAANV%2Fe0fbyRxV5M7BxQQe20%2B3UNI92N88fym4YnWnHG%2Ba55xDZMb9C5PEjtJFUPwvqaTzLEpDuN4741qK67W8Byd7UPA%2Bh50GDGLWkenG8YRvSKeQGoLo%2BYwgMi0TnIGNQe486G%2F9IYb8KPSkYTcfIxC9xZwjKS7Vk%2B7xTSvflqr9fzVDCXn4vKBjqkAW0I12AD5W2YVFg2tRVfWyh%2Bw%2BtRDzXUcEFzJE8R7O3EEqD9MIKU0hb3j6sy2ccicr6q7As%2FRRBm%2F%2BnPL%2FfhUlU0OFf0BQMiGfIaI46nMZ6jN3I6WmIFVPm2lqm9eUWA0FsmVmBymGSlvb17qDb6oQXiWQs2phZzeocvEuZ9BCBE3spePSqzI626%2ByTTHku7gEqFh4O1%2BvDrHiMBugAcEAD6gOtM&X-Amz-Signature=a0845f13a147b987442903b413d9ec461dc9f2382484093da453aa15850c37b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH3ESRNP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrYmprof2LVyk%2BAvPRGpnU7Yls6ggORC9LvpkQiE0SVgIhAM914vbZH4mr30jDeiAUHiRCV48Z2Ny9%2Ft9Tf9O79igqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziiFOzgukhx5n43Voq3APCsSC1R%2FatC8hUD0U%2F3%2FOx%2BXg5qi0F4UCAa3h1NErG6OvZ58r8khTaSXULzCBGXd31dAe13GBFUBkTjF3Qa0A9oEViLg6JkZ4XxE8ZNb%2BMfbXrx4exnFEJlgSfxJ1obK45dsxHAiUGqhvRFhOnojX%2B9iMUaWuAU2POico6TzfwqsKy7zRScc2q2BT68tLeRCsUUiuu5B59EO4sDFsO074MP0PricJ%2FxA2xvfRrQz6YiU4RfckyIgD3o7CZM7K8b4mjZc0KE7yzS%2BCjC%2BgNMGY6faWLEyPvLgnVLVUv1V1ERe4kFsIl%2B9xyqjKu0A0nEy78HiXAQ8HjFCOn1OQYbrFCnHNdh7YXEkdBtQKoro%2F0gMJqbBvEIhEqNDR46vbHd7Hm59QmX0TziqPjnw%2BrYFzkoTaNuZPQv6iRveIEnRZmF80Tc9%2BcxfTKjS1wyFkHdkEe69qiw470nAANV%2Fe0fbyRxV5M7BxQQe20%2B3UNI92N88fym4YnWnHG%2Ba55xDZMb9C5PEjtJFUPwvqaTzLEpDuN4741qK67W8Byd7UPA%2Bh50GDGLWkenG8YRvSKeQGoLo%2BYwgMi0TnIGNQe486G%2F9IYb8KPSkYTcfIxC9xZwjKS7Vk%2B7xTSvflqr9fzVDCXn4vKBjqkAW0I12AD5W2YVFg2tRVfWyh%2Bw%2BtRDzXUcEFzJE8R7O3EEqD9MIKU0hb3j6sy2ccicr6q7As%2FRRBm%2F%2BnPL%2FfhUlU0OFf0BQMiGfIaI46nMZ6jN3I6WmIFVPm2lqm9eUWA0FsmVmBymGSlvb17qDb6oQXiWQs2phZzeocvEuZ9BCBE3spePSqzI626%2ByTTHku7gEqFh4O1%2BvDrHiMBugAcEAD6gOtM&X-Amz-Signature=b0e804d6bed75ae04bc1f7cf36e4cfd87dc01df3629b01a28b0422c244924522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
