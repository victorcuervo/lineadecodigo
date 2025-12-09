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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJLSTEND%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmO%2B3H69H36fADpu5Gl7bt%2B9uW2qoaZuJif7vZUvJyKAIhAISIOZgneXuhQIiiCgaAirToYoYUW%2BrMXqm1EEW1kdKBKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWRLWI%2FdRZJUiuLrgq3APxOKXUesxE%2FpZ%2FjJOLAf44kL4zxXCyddgaXzN6sOm9Bs0e7lxBAgGXPjggY4Z6NnK8Xcsn1fPTvuF3ETtuPUt0uMTVXIo2BpkLMm9DlTKStEU9UKr9quMLPx83Y6RxIDv%2FNu8OLugFU7dBcT8atlMmRWJV5xIww04tpnwsDb4PNNET7B7%2B0prNjBJXW8P9Hsu8hvsNwd%2FOGKrU324BMg1NgShqwS97oOq1fbw%2FFAn%2FP8hEh29q3uZa1se7VkgYJ0R2yW3q%2BbL0SbwMM0%2BSmpZwXq58ea%2B6%2BT8eEzwNCRQJ3kuZVREStGZEbD06rAP1t4DRS%2BvFbOc7SQzsWlZnxm6SrnAcJ76kP9HwCBYGZvaSdiWudkAYoYeH0nMkMYLx3p%2B1nYeaizSQeiFODS20bUf8guIYXVFlZU%2BbHU5Qya%2BDtFYp8zpw2kMSsTOr3DshscoPBzRAuPPPuYjtG7AL3l3KCAp0YOYGtSMp6YupJpU0U8hkIWAoYe3YPtw9bk3Hk5ijLUIxfkciHMpawRxpSnjbqF4k%2FJjCJpYyrsGfkoOxxehY6Ysby3Vc8cWZbgAHFsGzMKrw1s2Zvum9ihQClGWy3hF1FdEMfBAQs%2FrhW%2FzhMVJIURn06Z%2BY1U3U1DC%2B8t3JBjqkAS%2FNNpyux9mwd%2Bg8TONhHQebm08uGWoAYrbfXISOHk%2BxDJpKcYanP2vKwDedvJNEN1njKcLN3HNTarUGK7ALkZkmB%2FoG7Kpcqretn4CzipBXMLfCwAfoVGe5BGQQ5XK10cNw7mpyiKLAffYdz2wPM5AMHMnSRWDUWVosJN2Sz9JW6tTyYa2oQ6g%2FNTyhrtY3Gw3wyMZPe8hidZe51WunRmSpAEux&X-Amz-Signature=fa8b6df0a876c805bd5ceea2831c3c5ec636d4d02dd191c070ee789d0c3e72ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJLSTEND%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmO%2B3H69H36fADpu5Gl7bt%2B9uW2qoaZuJif7vZUvJyKAIhAISIOZgneXuhQIiiCgaAirToYoYUW%2BrMXqm1EEW1kdKBKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWRLWI%2FdRZJUiuLrgq3APxOKXUesxE%2FpZ%2FjJOLAf44kL4zxXCyddgaXzN6sOm9Bs0e7lxBAgGXPjggY4Z6NnK8Xcsn1fPTvuF3ETtuPUt0uMTVXIo2BpkLMm9DlTKStEU9UKr9quMLPx83Y6RxIDv%2FNu8OLugFU7dBcT8atlMmRWJV5xIww04tpnwsDb4PNNET7B7%2B0prNjBJXW8P9Hsu8hvsNwd%2FOGKrU324BMg1NgShqwS97oOq1fbw%2FFAn%2FP8hEh29q3uZa1se7VkgYJ0R2yW3q%2BbL0SbwMM0%2BSmpZwXq58ea%2B6%2BT8eEzwNCRQJ3kuZVREStGZEbD06rAP1t4DRS%2BvFbOc7SQzsWlZnxm6SrnAcJ76kP9HwCBYGZvaSdiWudkAYoYeH0nMkMYLx3p%2B1nYeaizSQeiFODS20bUf8guIYXVFlZU%2BbHU5Qya%2BDtFYp8zpw2kMSsTOr3DshscoPBzRAuPPPuYjtG7AL3l3KCAp0YOYGtSMp6YupJpU0U8hkIWAoYe3YPtw9bk3Hk5ijLUIxfkciHMpawRxpSnjbqF4k%2FJjCJpYyrsGfkoOxxehY6Ysby3Vc8cWZbgAHFsGzMKrw1s2Zvum9ihQClGWy3hF1FdEMfBAQs%2FrhW%2FzhMVJIURn06Z%2BY1U3U1DC%2B8t3JBjqkAS%2FNNpyux9mwd%2Bg8TONhHQebm08uGWoAYrbfXISOHk%2BxDJpKcYanP2vKwDedvJNEN1njKcLN3HNTarUGK7ALkZkmB%2FoG7Kpcqretn4CzipBXMLfCwAfoVGe5BGQQ5XK10cNw7mpyiKLAffYdz2wPM5AMHMnSRWDUWVosJN2Sz9JW6tTyYa2oQ6g%2FNTyhrtY3Gw3wyMZPe8hidZe51WunRmSpAEux&X-Amz-Signature=75eb0a4b7e50c63ca8300e5858a5b8c13c28e809781131200291f8235d035a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
