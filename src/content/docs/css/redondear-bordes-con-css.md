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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324Z7WTV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKnLdUxlXFvN16Ek0WgUeHs2u3saBrGj%2F3jRiT2znrwAiEAlA83YrlCIJT2aTFLfcNNjpc8wKjS6ONnH8rH014xcegq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDA7%2BY03cKlinMnPdIyrcAyH%2BY9KAV1WfUHKWiFqtkmS0r%2BtMqX2iKkfRAxYUTv6YXrckaSSWIn0uNLd%2FoCELqAbwHIfnNcNzlSmV5fF8SzKH%2BQRZ6mXDEKuepQpa%2FNGptQCEev1hNG%2FW3RREAZsS6V1eUlhb9fjP%2B%2B%2FyDlDIC8BvEPPT%2FXPcAM8CojxIuKNv6lODc9NVf6Imx8eyPftR5CogIummyyzRHNNFafwbHrGQWsd2kMQnLuLDgGwyS0eNTOnniO3qpcDG6HPUv696xmIx6SJc48O%2FZ100%2FSe66hwQKFVph4YWcjgLBci7oosaZkauLYjsnU10WVa0sL4sFQuiAEUaKdO6yqIY7L1sjhxYMWCleifXO75yYDqEYxVGVFf%2Bljlvww4w4F1lmyfEDaGgErgoyPUqxFmVgoEsTFv1JoKkBGFyABUZyHueS7dLZbnu3kLr2QGPZckE1PJHH9DM6LeyD5rAg7zZkxFFWZhIs2pIFFqOgIFVR%2BP6ydZ%2BkC%2FaZ6RVafxcwA4EXjHADTpNeuhOz73bawXYYhJTL6O9wCzTwQgKySmNOOWLv5h7xariMYu4HwT20yhYlyNP8Sl8U8E4rNt8bn43OkX9ssvHvcaYPL0cNVuvJDKN9Q3cHD9lLZkkZmhwBJw0MPXKyskGOqUBtvjZOhHEmK2W02Ie6VbF6Vk1F%2FhyVjhjeQOyKp33SLnm3LcAuCVk%2FyMvXRmlkNSRfDTHAQyNrimhbyslyoq739uaKpDOVxabVmGCpb%2BkSeLGQNMA%2BTlT%2B6MGGBsFa6rAliTUPzf62mfO4IPYQ%2F%2BDQ7pphXWW7UvDo57bSetTvMnxwgVuL%2B4EQQkeI3MQtztQbUN4s3K%2Bk3Lk%2FYbaiZiSY0PxcI48&X-Amz-Signature=4e9387bc1eb8687b0985a24f7043efdf50b88fa091db49dfb543fbaa8c9ac119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324Z7WTV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKnLdUxlXFvN16Ek0WgUeHs2u3saBrGj%2F3jRiT2znrwAiEAlA83YrlCIJT2aTFLfcNNjpc8wKjS6ONnH8rH014xcegq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDA7%2BY03cKlinMnPdIyrcAyH%2BY9KAV1WfUHKWiFqtkmS0r%2BtMqX2iKkfRAxYUTv6YXrckaSSWIn0uNLd%2FoCELqAbwHIfnNcNzlSmV5fF8SzKH%2BQRZ6mXDEKuepQpa%2FNGptQCEev1hNG%2FW3RREAZsS6V1eUlhb9fjP%2B%2B%2FyDlDIC8BvEPPT%2FXPcAM8CojxIuKNv6lODc9NVf6Imx8eyPftR5CogIummyyzRHNNFafwbHrGQWsd2kMQnLuLDgGwyS0eNTOnniO3qpcDG6HPUv696xmIx6SJc48O%2FZ100%2FSe66hwQKFVph4YWcjgLBci7oosaZkauLYjsnU10WVa0sL4sFQuiAEUaKdO6yqIY7L1sjhxYMWCleifXO75yYDqEYxVGVFf%2Bljlvww4w4F1lmyfEDaGgErgoyPUqxFmVgoEsTFv1JoKkBGFyABUZyHueS7dLZbnu3kLr2QGPZckE1PJHH9DM6LeyD5rAg7zZkxFFWZhIs2pIFFqOgIFVR%2BP6ydZ%2BkC%2FaZ6RVafxcwA4EXjHADTpNeuhOz73bawXYYhJTL6O9wCzTwQgKySmNOOWLv5h7xariMYu4HwT20yhYlyNP8Sl8U8E4rNt8bn43OkX9ssvHvcaYPL0cNVuvJDKN9Q3cHD9lLZkkZmhwBJw0MPXKyskGOqUBtvjZOhHEmK2W02Ie6VbF6Vk1F%2FhyVjhjeQOyKp33SLnm3LcAuCVk%2FyMvXRmlkNSRfDTHAQyNrimhbyslyoq739uaKpDOVxabVmGCpb%2BkSeLGQNMA%2BTlT%2B6MGGBsFa6rAliTUPzf62mfO4IPYQ%2F%2BDQ7pphXWW7UvDo57bSetTvMnxwgVuL%2B4EQQkeI3MQtztQbUN4s3K%2Bk3Lk%2FYbaiZiSY0PxcI48&X-Amz-Signature=e0fc7a6aa66477a605c0a99290da55a75d39cb522de3c1f76ae5a1c2419b95b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
