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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OR3BRH4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFstIhK7KtEdJsV34MZVMKl%2FeitKGrsYCTwhJh%2FDUgoVAiANekkSo50ZbLIgbuQeCfjQPkDTd5z2ScXf3SVnGLh1Qir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMPF6me8mBqHGj7KYbKtwDzbJ3eWYguHIbZvWQAhoMkjI9KG30Tol9kLpozxrOiDkewgPTAKxUwWBhOYMndTQ7bdZbdzPRTXUmjClyqqj%2BM7t%2BXDk7U27c5VeS456FSohOfoDjrrtYjr9N0a9hSwTxM%2Bs1ojaRIjACfBJpK7m7LZrZZeSO%2F7m13N1%2Fg4n1fd7ALpV0zoTkQhFkTOPbFyaW7KS8XLIdfPSQNzQi%2FK3edo3WixqgjuJAeOuzIo1cW74w9Aii%2BCghZv6suG2HjvDo84%2BHmnzL6lyw31gsy2o0qhhDLj%2BUgdeW9LZlkrzj8nURjBXCEhdnzqvDHYll57Xuo7GocIWnahuUEdA%2BDD9SOMt8fBbWFxeKWCOukUMQdKQ4dqo90XQFXAEi0PxJAMFyNr3lDbScbww2fB3nR9nXz0Gk%2Fcr54qfQndu%2Bgw6D6IBEeff%2BASYGH70Hx9G9WY5e6Cn8vGiKS%2BlyYAiYwE9cCXvv%2BMDJfXuYmEgJH5KXlHIwp3WETKDI6yhcd1Kkyn%2BJ4yIpsZqhy2x2pm3cJ5G2dPbc9aKn3yelGvCSFh9TqKLTCZat6Rn2PC%2FCOKi%2BMezgSomP1bctBMk0hvZ4tx81iVxeDdRMr0Zl6yJBGBThiAaR%2Bv5FYVjmzVm%2Bf24w9fPLyQY6pgGtm5o5xfTh76L45k%2FyLdOf22vDMDQSCrHdXwVHkAOT%2BitoBZ0cAkPgqQiOcTnxVqiVmdHIBr4Ev%2FCxy%2Fa0c4yKT8risYRSvOnXGnLwds3QM7RECXPchwv0BPYPnGfmlKy92kb1L0Vr%2BbtdD8vB9rL6GPza90iGtbkFuRSMQxBnP2szATvfxAmPosdqOQECZpkZ6LXLSNTqNuTX33tb%2FrNK4lIxbe1b&X-Amz-Signature=ae0f9879d8cf154adcb6162b1f908c0859110318f71c2bedb19495b1c5ed30a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OR3BRH4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFstIhK7KtEdJsV34MZVMKl%2FeitKGrsYCTwhJh%2FDUgoVAiANekkSo50ZbLIgbuQeCfjQPkDTd5z2ScXf3SVnGLh1Qir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMPF6me8mBqHGj7KYbKtwDzbJ3eWYguHIbZvWQAhoMkjI9KG30Tol9kLpozxrOiDkewgPTAKxUwWBhOYMndTQ7bdZbdzPRTXUmjClyqqj%2BM7t%2BXDk7U27c5VeS456FSohOfoDjrrtYjr9N0a9hSwTxM%2Bs1ojaRIjACfBJpK7m7LZrZZeSO%2F7m13N1%2Fg4n1fd7ALpV0zoTkQhFkTOPbFyaW7KS8XLIdfPSQNzQi%2FK3edo3WixqgjuJAeOuzIo1cW74w9Aii%2BCghZv6suG2HjvDo84%2BHmnzL6lyw31gsy2o0qhhDLj%2BUgdeW9LZlkrzj8nURjBXCEhdnzqvDHYll57Xuo7GocIWnahuUEdA%2BDD9SOMt8fBbWFxeKWCOukUMQdKQ4dqo90XQFXAEi0PxJAMFyNr3lDbScbww2fB3nR9nXz0Gk%2Fcr54qfQndu%2Bgw6D6IBEeff%2BASYGH70Hx9G9WY5e6Cn8vGiKS%2BlyYAiYwE9cCXvv%2BMDJfXuYmEgJH5KXlHIwp3WETKDI6yhcd1Kkyn%2BJ4yIpsZqhy2x2pm3cJ5G2dPbc9aKn3yelGvCSFh9TqKLTCZat6Rn2PC%2FCOKi%2BMezgSomP1bctBMk0hvZ4tx81iVxeDdRMr0Zl6yJBGBThiAaR%2Bv5FYVjmzVm%2Bf24w9fPLyQY6pgGtm5o5xfTh76L45k%2FyLdOf22vDMDQSCrHdXwVHkAOT%2BitoBZ0cAkPgqQiOcTnxVqiVmdHIBr4Ev%2FCxy%2Fa0c4yKT8risYRSvOnXGnLwds3QM7RECXPchwv0BPYPnGfmlKy92kb1L0Vr%2BbtdD8vB9rL6GPza90iGtbkFuRSMQxBnP2szATvfxAmPosdqOQECZpkZ6LXLSNTqNuTX33tb%2FrNK4lIxbe1b&X-Amz-Signature=20422f14693c5f822f29fedaa62dff4c42d706b205387c0aac3ef67825ff0db2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
