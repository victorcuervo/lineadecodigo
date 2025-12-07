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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJ4ULNR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpgvwWitJagAt3lv351jwetHDTQJTj%2FZc2thJZbWReLQIhAJb1Sg7pwp%2FUedpNnYeL8VGboo4uMdHliE6wXl5iPjl8KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8R7A%2BF6PrdMxfERQq3APv1suUnV%2F2aY2OOaFGyLgmP5kj%2FZaIRX2UG3DNgi00WQNYeVJdooJj1EcqSFo3VbCt0e55dN99agsTjsD4jSslEYtHjtANEF2XkY7i70%2B5TyvruNPR6PqXt0aqgCWfCblZ79YvK2isFy9NNa8Iwng4qLGbqRFzm%2FvTlrSWaWkyCsUTKIToXn5Jn%2Fw3jtAnlVryD5NQSb55N0Jfqj0gTZqWoBjfHNuChQuwVcIfyA%2BmmSH87KTlqelsv8103sv6du7Z8MN%2Bu60Q3tKVQnkA4NrMfsDU4SZksznwSkmPQX7xwJbviF1LB1bP%2FYDdUK%2FyfkKw7Rb0khqaCRrMn5ofUhWLBbuM1mE4D3FxKLjJl0JxFNl%2BcCfqosSJBeUsa8ub%2FXdkfK6C1gaAlzEwaW%2F%2BZ7yLhFTOBIg4ERtU95HF6Y8YGBAUIezXymFnsIgl7%2F4wu4MlSN4aBPuogabG8uuRgadyaNziVojvthe7c2lGIq5lboc%2FHFQbMvQGi7nf5I%2FMo%2FWGlX6DAA5106RHo3Wz9gNTyvIdCb2v6EWWN6kzbb%2F%2F4lthaqyi%2FxVAnyYQL3TjDqI0sNRJCqi2%2BR4e5IADyCtKa0z1Gwwzeypf0pJYNNHwd1%2BqvfobT3%2B2p22gITCmhdjJBjqkAU41TtgAJXUUpdqM9%2FISkSoB7GMYqrujuCrCp05M5cUMVfLjYw6YTYBhPThWdP36rWi7j5bLIJjz1iMLgpsGQBp7p41nsPmBET2YvW0xhob4xFam8mq8LlGMOD%2FV9o1uMwaxhhbx2bdP47hHgFiTAlUy05iOPEt5bevVnQTbO93TQ00in1MFKG2zz4HdrSrISZP5pXC0EfqysIjKC5zzr6jDdQwd&X-Amz-Signature=5f5f29069f271dc19eec9d02c0101349fb575394a721b3aa27df6075d376b644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJ4ULNR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpgvwWitJagAt3lv351jwetHDTQJTj%2FZc2thJZbWReLQIhAJb1Sg7pwp%2FUedpNnYeL8VGboo4uMdHliE6wXl5iPjl8KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8R7A%2BF6PrdMxfERQq3APv1suUnV%2F2aY2OOaFGyLgmP5kj%2FZaIRX2UG3DNgi00WQNYeVJdooJj1EcqSFo3VbCt0e55dN99agsTjsD4jSslEYtHjtANEF2XkY7i70%2B5TyvruNPR6PqXt0aqgCWfCblZ79YvK2isFy9NNa8Iwng4qLGbqRFzm%2FvTlrSWaWkyCsUTKIToXn5Jn%2Fw3jtAnlVryD5NQSb55N0Jfqj0gTZqWoBjfHNuChQuwVcIfyA%2BmmSH87KTlqelsv8103sv6du7Z8MN%2Bu60Q3tKVQnkA4NrMfsDU4SZksznwSkmPQX7xwJbviF1LB1bP%2FYDdUK%2FyfkKw7Rb0khqaCRrMn5ofUhWLBbuM1mE4D3FxKLjJl0JxFNl%2BcCfqosSJBeUsa8ub%2FXdkfK6C1gaAlzEwaW%2F%2BZ7yLhFTOBIg4ERtU95HF6Y8YGBAUIezXymFnsIgl7%2F4wu4MlSN4aBPuogabG8uuRgadyaNziVojvthe7c2lGIq5lboc%2FHFQbMvQGi7nf5I%2FMo%2FWGlX6DAA5106RHo3Wz9gNTyvIdCb2v6EWWN6kzbb%2F%2F4lthaqyi%2FxVAnyYQL3TjDqI0sNRJCqi2%2BR4e5IADyCtKa0z1Gwwzeypf0pJYNNHwd1%2BqvfobT3%2B2p22gITCmhdjJBjqkAU41TtgAJXUUpdqM9%2FISkSoB7GMYqrujuCrCp05M5cUMVfLjYw6YTYBhPThWdP36rWi7j5bLIJjz1iMLgpsGQBp7p41nsPmBET2YvW0xhob4xFam8mq8LlGMOD%2FV9o1uMwaxhhbx2bdP47hHgFiTAlUy05iOPEt5bevVnQTbO93TQ00in1MFKG2zz4HdrSrISZP5pXC0EfqysIjKC5zzr6jDdQwd&X-Amz-Signature=49561aa8b7de4f9b6399206ed605889004793f88a8285e8e7fd520576396db26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
