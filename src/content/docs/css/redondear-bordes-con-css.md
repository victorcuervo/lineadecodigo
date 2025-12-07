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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7UV2FC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQmIDA8s24uavfIBlbL%2FKwZAZKsRpZf0%2BR%2BzeDA1UqkAiAxW7H1ZjW79GtBqBt6Ft7hwoZOJ%2Bb6kRROSC10TgMhoiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvDZ8iCiU2XkSBpMeKtwD9h4jkGR0FGrfnL5eaY0X4gcI0dPDCa%2FAoPj59bm5d2f7NuKBNvKVEOh8u0nBTEU3AfKURe%2FJCcOKr7vRzq6PPY7T9iDFdODHE9z5wOkNXxpF0D1AMaqLpnRvygqHTxLjCGwt5cXsayavquzYWgBUjFnbN57VgpYcaa1Yxq0563d4rKIBSEh3Xltv%2F1MUE4UAGqFNpMjC5ABgR1ZzK5udhE6SHR9jbnNFovzEcranfHOxmqO6hfozMvqNeRLGzO3b5%2FeqAL29LqvuZNj%2FBGccqsA3Pm6b0NplMxFvB3ymawJK0hn9rpcbm1TxdbnuerO5CqeHSf47b3gTUWXP74ogkIheb0yVCBn4yqHu4m5oyONsyzjmI%2Bn%2BNGOhmGLb2%2FxJD76jUcEyKPhW6eCZuDD5zxKGQ7H4YVq60G4tM81uSpvoAhPd%2BTk9D%2FWJUvxmWIon34roVqdeFAW%2BAF%2BbCsaQ3WYErej%2FOd%2BLLgDa0kFqrBx2qTszmpvkiobRYztfMGC0Pous%2B16qpT0n08ks%2FRZW0yAUxeWdkOyr0Ip1MVYb4t0V0w%2Bj32QdVzAFLOFkCdhiTcd0%2BcdkK1IKua3xUDmdQo7ykHvczF89%2BgvXrZKe1qzXaJ3EmZO1k4xTFiow6f3SyQY6pgGg11WaW1VEiMSMnAmnD9BFXRhsQwDEjuQMa35b834IWUOQeje%2F7nYsbGltq7tiN2NnZmXyraaRtwfOHxkgN8BlKKx8%2F4PjESGrgJwJCT%2BL7A6NJ0%2F07528RCSAnD2ZJKhKLRm9eLYNtI5F2tg2LWt7HqYf5efW93hXbVmGrmTFrCr6cagfJzxcvGr3jXxMjtlgRarWaiNbAsBJ6Xyidt8yMjwAY61p&X-Amz-Signature=571e8b1a46182cb3b0b112c14bc57529c3a410d8a1a342a8b23300d0d5019562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7UV2FC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQmIDA8s24uavfIBlbL%2FKwZAZKsRpZf0%2BR%2BzeDA1UqkAiAxW7H1ZjW79GtBqBt6Ft7hwoZOJ%2Bb6kRROSC10TgMhoiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvDZ8iCiU2XkSBpMeKtwD9h4jkGR0FGrfnL5eaY0X4gcI0dPDCa%2FAoPj59bm5d2f7NuKBNvKVEOh8u0nBTEU3AfKURe%2FJCcOKr7vRzq6PPY7T9iDFdODHE9z5wOkNXxpF0D1AMaqLpnRvygqHTxLjCGwt5cXsayavquzYWgBUjFnbN57VgpYcaa1Yxq0563d4rKIBSEh3Xltv%2F1MUE4UAGqFNpMjC5ABgR1ZzK5udhE6SHR9jbnNFovzEcranfHOxmqO6hfozMvqNeRLGzO3b5%2FeqAL29LqvuZNj%2FBGccqsA3Pm6b0NplMxFvB3ymawJK0hn9rpcbm1TxdbnuerO5CqeHSf47b3gTUWXP74ogkIheb0yVCBn4yqHu4m5oyONsyzjmI%2Bn%2BNGOhmGLb2%2FxJD76jUcEyKPhW6eCZuDD5zxKGQ7H4YVq60G4tM81uSpvoAhPd%2BTk9D%2FWJUvxmWIon34roVqdeFAW%2BAF%2BbCsaQ3WYErej%2FOd%2BLLgDa0kFqrBx2qTszmpvkiobRYztfMGC0Pous%2B16qpT0n08ks%2FRZW0yAUxeWdkOyr0Ip1MVYb4t0V0w%2Bj32QdVzAFLOFkCdhiTcd0%2BcdkK1IKua3xUDmdQo7ykHvczF89%2BgvXrZKe1qzXaJ3EmZO1k4xTFiow6f3SyQY6pgGg11WaW1VEiMSMnAmnD9BFXRhsQwDEjuQMa35b834IWUOQeje%2F7nYsbGltq7tiN2NnZmXyraaRtwfOHxkgN8BlKKx8%2F4PjESGrgJwJCT%2BL7A6NJ0%2F07528RCSAnD2ZJKhKLRm9eLYNtI5F2tg2LWt7HqYf5efW93hXbVmGrmTFrCr6cagfJzxcvGr3jXxMjtlgRarWaiNbAsBJ6Xyidt8yMjwAY61p&X-Amz-Signature=681f1e166b7c46cb768cc7b0b11825edf2d46e800078126a1d460587a7842587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
