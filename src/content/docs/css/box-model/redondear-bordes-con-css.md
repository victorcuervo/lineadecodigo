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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4T5M5NQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYOsvsnFuaRu0jZCMZKP1zetkXcn80AdP9pEu2MVnLzwIgbHfZMMeBnCcc53H562zxHdIM4yUydgQ9T%2FTtpUBq95oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLRfWw0egKuQBSUqsircA2%2FCMCopAWf%2FJnpvFyyhNVx%2Bq3yRckb4v3HFpin6F7OZPF8sepGPdZ1CwhP43Y6JrqcLZpqo4FqHp5LVHPcsdi6BrVvo2REyn1lHcy%2FeedttnlRyNmE%2BFt9atr7abHqD8Vs%2FFy1kDY5cJJL7NQspYKM4CIYO0QC4PjHRY7ZFs781XFMPINCBghjSnuenV3UdajX1Zv1cW3aK3Jw963sXTjO%2B9X9tJVx%2BwgOKsWdbMfFhBnHlFxHWL%2FD%2FKbjHHF0UIsk8EhH4A0zxjiiT3ydfPFYhuNNbE6xqFsaN%2BBPEP2Rd1gV5u%2BgVSCw2jq2whrSTPDzx8BOdCuoZYIogkVDy2QH2ZpjwnJfv1nzqoYZQ7iUOasYtJ7%2B0Bz7akqss2%2BgHMGfMZuMiqps8WalL45b5nErCeFK%2B15xrBh%2FXu6shh9m1AP1QiF%2BzgzDKFrtrT7Camv%2Bt3uoK4z01IsDra6eVrg8iLx0npfd3OeT%2Ft7nN27b8I64GhH7d2bo%2BroVj238KooMMvRr6a%2Bl5CSSTNF7EDgN5JCfbkDl62tO8PRYhhtj25lo5L0xWQN9QRgLyz%2B%2BHBHTW%2BuJW%2FBMWI5eiAn8QQr3VoFT9vLvLI2z5t7dZMjaZs6szBNU8r0zgWrTtML%2FhisoGOqUBMZTYHvA6wFiF0wpSU8HyNRrNq%2FRTnWxA8QZC%2FGVQ1ZOjPP%2BqMOE35FXlwvYbUzxz4%2BzL42Z0LxEebQesHbLibWHGg79w3fYmNo6CZNdEnu50SjYTLzxTWkyKTNrV6hW8QZS%2Fc68Z1v43%2BPZHacjmDQnHTSh6l0bnzNz%2By4djM8W4yX3B3yDECaUj8sNKN4laJx3AptrfIow746TtAsDcuJ1eV5HF&X-Amz-Signature=a1aa4c2f111477958ce9ad98a40156e5afa1cef88a314a0f70d7a6949317681b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4T5M5NQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYOsvsnFuaRu0jZCMZKP1zetkXcn80AdP9pEu2MVnLzwIgbHfZMMeBnCcc53H562zxHdIM4yUydgQ9T%2FTtpUBq95oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLRfWw0egKuQBSUqsircA2%2FCMCopAWf%2FJnpvFyyhNVx%2Bq3yRckb4v3HFpin6F7OZPF8sepGPdZ1CwhP43Y6JrqcLZpqo4FqHp5LVHPcsdi6BrVvo2REyn1lHcy%2FeedttnlRyNmE%2BFt9atr7abHqD8Vs%2FFy1kDY5cJJL7NQspYKM4CIYO0QC4PjHRY7ZFs781XFMPINCBghjSnuenV3UdajX1Zv1cW3aK3Jw963sXTjO%2B9X9tJVx%2BwgOKsWdbMfFhBnHlFxHWL%2FD%2FKbjHHF0UIsk8EhH4A0zxjiiT3ydfPFYhuNNbE6xqFsaN%2BBPEP2Rd1gV5u%2BgVSCw2jq2whrSTPDzx8BOdCuoZYIogkVDy2QH2ZpjwnJfv1nzqoYZQ7iUOasYtJ7%2B0Bz7akqss2%2BgHMGfMZuMiqps8WalL45b5nErCeFK%2B15xrBh%2FXu6shh9m1AP1QiF%2BzgzDKFrtrT7Camv%2Bt3uoK4z01IsDra6eVrg8iLx0npfd3OeT%2Ft7nN27b8I64GhH7d2bo%2BroVj238KooMMvRr6a%2Bl5CSSTNF7EDgN5JCfbkDl62tO8PRYhhtj25lo5L0xWQN9QRgLyz%2B%2BHBHTW%2BuJW%2FBMWI5eiAn8QQr3VoFT9vLvLI2z5t7dZMjaZs6szBNU8r0zgWrTtML%2FhisoGOqUBMZTYHvA6wFiF0wpSU8HyNRrNq%2FRTnWxA8QZC%2FGVQ1ZOjPP%2BqMOE35FXlwvYbUzxz4%2BzL42Z0LxEebQesHbLibWHGg79w3fYmNo6CZNdEnu50SjYTLzxTWkyKTNrV6hW8QZS%2Fc68Z1v43%2BPZHacjmDQnHTSh6l0bnzNz%2By4djM8W4yX3B3yDECaUj8sNKN4laJx3AptrfIow746TtAsDcuJ1eV5HF&X-Amz-Signature=b77f34f631d6d51569cb88dd64832c25b5db090a75d0ae64b98873a5bd2c7140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
