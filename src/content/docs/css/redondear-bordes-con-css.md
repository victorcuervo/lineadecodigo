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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AF2BSOW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFQTnquGmGsNitaYpVo4LIoasXqkFOji7qKv6yazqyNkAiBOOCC9WjX%2BnPrNUyTTmQKxuBkj4wTiJ6nqISLn0AEYwyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMhDS6Joi1ppfYQM0YKtwD2DHY4%2FZb1NwHbbRjJ9zxoLazYAo0FFGcOhosEyddVvGRo2b8%2FtrVXKv3LyJiHgDL3UlXFLN9KBvR7VqWnCGOy0UxQXF5fCv7Q67GToZNFKv6MF9ey8dfMCRurEPSSrKJjakEH%2FEwxjhpFtjHUl6hRcRIoYWHIhOQT2vocXw%2B%2BcjzBL2mQQzk1xFNQglTwxV2ZkP2w3hLCCGfEKmcWbfHvEEk3%2B4DX4kFRbH1Wwxo5K1wf7WXPnNto95rE%2BHOV64T4l5h28887UMhr2IqU0aonAdo2bhNz1v18J7sMS%2BP3wrYfrDS3uJzJs3iZwKnJt08r%2Fo4QYQzHi1ayIVwLD3fakhbmhwhwq0%2FmaoLq352aWEnG%2FrNYc5pWwGJI%2FgB3QF7vcehKnud03jEodPeXVeHcn0iz7QGYdunalk2rMr132AGNIEIKJxgjbaI0F8GB4Vb25clfD20ZMCXDH3geGr4u99A9mADVWZvO%2B%2BZ39JsKGj%2BJkJ5cxLhnHtTa4SWvSC0W7PMzcqtzMGC1XwRrkH4I7iLznrOGL%2Bpica7jbv3W11AZO%2FQhQx4qyJYOoFAAoR53g4wKiV7Di733L27%2FCD4ErOEqujzyXcqaUXltDdo8VKcHXnk3oWXLP%2FPoI4wqMvEyQY6pgEri6DNU4whiIRO8PCsI3SpP3v%2BK48PaQZiW35eJJuMuWNEWKPckLNcH1Kz%2FmUjUA%2BwZSWutPADwtcgFBxaKXepnB3tyrLnaH2Kkztx1nwdZc8d%2FGlDnbIbiNhj44h8KM46T2Cej%2BaAICgAttgtf5mgTFirWEOevnTfrZLFPSkg2bDeVePf5OuuPfn8xUCHnftwldl1FlQA9%2Fdy2iI8N2qtuvzVeMvH&X-Amz-Signature=558a7482090c2a01d325bfac90613bcfcd1d56ae9f90a8aa8df19b87919db2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AF2BSOW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFQTnquGmGsNitaYpVo4LIoasXqkFOji7qKv6yazqyNkAiBOOCC9WjX%2BnPrNUyTTmQKxuBkj4wTiJ6nqISLn0AEYwyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMhDS6Joi1ppfYQM0YKtwD2DHY4%2FZb1NwHbbRjJ9zxoLazYAo0FFGcOhosEyddVvGRo2b8%2FtrVXKv3LyJiHgDL3UlXFLN9KBvR7VqWnCGOy0UxQXF5fCv7Q67GToZNFKv6MF9ey8dfMCRurEPSSrKJjakEH%2FEwxjhpFtjHUl6hRcRIoYWHIhOQT2vocXw%2B%2BcjzBL2mQQzk1xFNQglTwxV2ZkP2w3hLCCGfEKmcWbfHvEEk3%2B4DX4kFRbH1Wwxo5K1wf7WXPnNto95rE%2BHOV64T4l5h28887UMhr2IqU0aonAdo2bhNz1v18J7sMS%2BP3wrYfrDS3uJzJs3iZwKnJt08r%2Fo4QYQzHi1ayIVwLD3fakhbmhwhwq0%2FmaoLq352aWEnG%2FrNYc5pWwGJI%2FgB3QF7vcehKnud03jEodPeXVeHcn0iz7QGYdunalk2rMr132AGNIEIKJxgjbaI0F8GB4Vb25clfD20ZMCXDH3geGr4u99A9mADVWZvO%2B%2BZ39JsKGj%2BJkJ5cxLhnHtTa4SWvSC0W7PMzcqtzMGC1XwRrkH4I7iLznrOGL%2Bpica7jbv3W11AZO%2FQhQx4qyJYOoFAAoR53g4wKiV7Di733L27%2FCD4ErOEqujzyXcqaUXltDdo8VKcHXnk3oWXLP%2FPoI4wqMvEyQY6pgEri6DNU4whiIRO8PCsI3SpP3v%2BK48PaQZiW35eJJuMuWNEWKPckLNcH1Kz%2FmUjUA%2BwZSWutPADwtcgFBxaKXepnB3tyrLnaH2Kkztx1nwdZc8d%2FGlDnbIbiNhj44h8KM46T2Cej%2BaAICgAttgtf5mgTFirWEOevnTfrZLFPSkg2bDeVePf5OuuPfn8xUCHnftwldl1FlQA9%2Fdy2iI8N2qtuvzVeMvH&X-Amz-Signature=c00d0bb0bc4ca49ac3e416f2958d6e729b6d5fb55bc763a74f53d8445a69a133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
