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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6KUFVID%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1KPnCn1MKA7arP5RZNIkxarWe6sW5sI1zl2e6CBh%2BQIhAOlzqeSx8d6MLq%2FnaxgyRtemgdpw9pX5b4I8b6H3lwdjKv8DCGsQABoMNjM3NDIzMTgzODA1IgxAKURR41Sx0ouRqD4q3AOvjIyTEUaen1dvpHG8ys0aR5qfPB4YjGwngj8zG2xORXF83%2BU2vkTt5PbJbuVsoq9xSUVlXV4ginDtcHk7tXPkWn3oylvLqo6QlFnu0RielNtrccskk0t36zkgS6o5YvXBC5UdN4J4tzZdAHqNeisxPPKGuFZgmoOaKnaFqIOcTLsYilCUXnEN3YarVm7Z6sPqOMVJwxpbBvg3kZAjvTWSrryIj6BjDsoJRqIxYJolgWwNbj%2BsQjss8Zv94R65BoMuT90lZNIjHxVgSaZAt%2BAsGpL4AErkMKU%2FSsicSgPT7xpcKceRzA9nFXrpsjOZddKNddmPoERAH1xi%2F3FwlVelTw22y1ye9o2H4Ll2rY9Zs28OL1cAdzLfTA7wQV2vzzTH4dKub8Jhtgn4Wm8gu3QcF4vLOjKSNk63qk6vuRI7CAWmqVnbRXZy%2FE%2FzORhrH5xkDKYSVIGlL7WhWqMG9g96VQN3gCqzIpMU%2FuABq3dEl7Aa41jPA1ynzRTTmhweUiqKCK0%2FeExJkU0OhKs6hRmQodKHTgSwZ6pQ34D0JjXueOcM8pnf0tfirFt82ooi4i1pnwojtlYXAS7YQjPOFfImNNs5hPBVVvgjR0GsoI8tgi1fOhCVTvbqYcZPDDDAp87JBjqkAYCcyTYz9fUUc0ASNC0wxmqwlE3g22ZKaHWMQ4PSVwS5ax55rYdu6qH3NcJj7W4vyFVWtuwSHFOFTVC9RIYaFEeXvmuFg1kiG32VssW7zdICvdRFlieNYOfS6IarBy3zt5Xiy0AQbgSBhb7GorlEdUD9dPjKxAsm2TD9a3S8y8s0AcMnMoPUuOoRFvoAqCgbO4L6meIvyROjHNs1Zni%2BKrGJbCyt&X-Amz-Signature=4200569ac84ad3e392469413b74fe9536286ebf71126d35fe4e576d453166708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6KUFVID%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL1KPnCn1MKA7arP5RZNIkxarWe6sW5sI1zl2e6CBh%2BQIhAOlzqeSx8d6MLq%2FnaxgyRtemgdpw9pX5b4I8b6H3lwdjKv8DCGsQABoMNjM3NDIzMTgzODA1IgxAKURR41Sx0ouRqD4q3AOvjIyTEUaen1dvpHG8ys0aR5qfPB4YjGwngj8zG2xORXF83%2BU2vkTt5PbJbuVsoq9xSUVlXV4ginDtcHk7tXPkWn3oylvLqo6QlFnu0RielNtrccskk0t36zkgS6o5YvXBC5UdN4J4tzZdAHqNeisxPPKGuFZgmoOaKnaFqIOcTLsYilCUXnEN3YarVm7Z6sPqOMVJwxpbBvg3kZAjvTWSrryIj6BjDsoJRqIxYJolgWwNbj%2BsQjss8Zv94R65BoMuT90lZNIjHxVgSaZAt%2BAsGpL4AErkMKU%2FSsicSgPT7xpcKceRzA9nFXrpsjOZddKNddmPoERAH1xi%2F3FwlVelTw22y1ye9o2H4Ll2rY9Zs28OL1cAdzLfTA7wQV2vzzTH4dKub8Jhtgn4Wm8gu3QcF4vLOjKSNk63qk6vuRI7CAWmqVnbRXZy%2FE%2FzORhrH5xkDKYSVIGlL7WhWqMG9g96VQN3gCqzIpMU%2FuABq3dEl7Aa41jPA1ynzRTTmhweUiqKCK0%2FeExJkU0OhKs6hRmQodKHTgSwZ6pQ34D0JjXueOcM8pnf0tfirFt82ooi4i1pnwojtlYXAS7YQjPOFfImNNs5hPBVVvgjR0GsoI8tgi1fOhCVTvbqYcZPDDDAp87JBjqkAYCcyTYz9fUUc0ASNC0wxmqwlE3g22ZKaHWMQ4PSVwS5ax55rYdu6qH3NcJj7W4vyFVWtuwSHFOFTVC9RIYaFEeXvmuFg1kiG32VssW7zdICvdRFlieNYOfS6IarBy3zt5Xiy0AQbgSBhb7GorlEdUD9dPjKxAsm2TD9a3S8y8s0AcMnMoPUuOoRFvoAqCgbO4L6meIvyROjHNs1Zni%2BKrGJbCyt&X-Amz-Signature=4f3c3f02c9f6786e3754bd97deeab0f6147541f70f1c20720cadcdbc742ea480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
