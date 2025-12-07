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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTHBMO77%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpKeRsqvc%2FIrDMhs2kM4yk8mWkVEkNtTfWIjGRPcuvbgIgQfuUQhIBmTUl%2Bf5O7%2FHvfVJMv0Uky%2B8tEeR8%2BoCeobYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5iZtkzgiN7U0WUySrcA%2BlkC542EaPx0iyG5PzdUf1bL31J3lRh3t1MxVFb%2Bsw3Wees4n92UZa0Uirk2U70XUQVWAIqppVA%2BsYg9XXvvQ%2BXxAsK7clUnVR434cCAX0cMUbI%2FfaEZmRd98tVhyPnRrj83fT5%2BLwyEmIr3OLhX1i8wAqqcWYXN7Y6aAdRG%2FIMV1FcQXy8FpHmbMaeqO%2FgRTUmBtvT%2Bmrm4OD%2BSMqBOq2tfGzY%2FxXFXUxo0a5fhTLSfk6aMm8Y1Ul1clN1oryXZeWFqhlHsS0PZ7VP4WaCeGcoaiLoea%2FbHPP9E3B8T0yA0%2BiqfytYQ2JT6StxekYwq2w787qTmPdY1bTUkycFl5ZYh9hnxOPm7mqOeZB5CzGwpzMadVV4L6X0miaEHWvTt0i5f7G2NP8%2FbE9wadVtKPVPQpNscxUIqbtHX%2FjkDOlQPm4btV9v581GnRuzODPZ6oDciSo1KcDKUX1X0P%2FySxOm0Fz3hLXZN%2FGY3eRPeoUeoL1NXnPXvI1MdBduuK1h0gZPhQ1Qfob%2BVaCkcxUWqjWrGDaH1%2B1ugrFUMogVVhrvHx%2BnAv2A%2Fgo4JWnzRQ%2BefHbpCz7OZfmYAZC6z%2BFMeDZb92xJg0mXC6woCauX7kAQ84Z2etWAm3MSoHLAMNia1MkGOqUBuYLtxJnrKy%2F8pnTp9f4afx%2BBW9ykfBhNUgaRb%2B2EF4DipJv95L8N3qtsHq6c8y4hKvcBQcpRdpiieMnD13KUjgSmImfGGS6RwnAYcFtrF0mBUPt0QVDH5bYoz1iE3B%2B05sPnulOE%2F%2B1t74ym1sOnL6Nb19ktwQp4w1sKSubM1RRITxjnRYxzmHhLrOlyw68%2BfHBJNIzCQwjy5TwxNRj3LOGAotxC&X-Amz-Signature=4498f18b006467a87d1ea4169e07737f661955229371e3b389d90921d96ba229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTHBMO77%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpKeRsqvc%2FIrDMhs2kM4yk8mWkVEkNtTfWIjGRPcuvbgIgQfuUQhIBmTUl%2Bf5O7%2FHvfVJMv0Uky%2B8tEeR8%2BoCeobYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5iZtkzgiN7U0WUySrcA%2BlkC542EaPx0iyG5PzdUf1bL31J3lRh3t1MxVFb%2Bsw3Wees4n92UZa0Uirk2U70XUQVWAIqppVA%2BsYg9XXvvQ%2BXxAsK7clUnVR434cCAX0cMUbI%2FfaEZmRd98tVhyPnRrj83fT5%2BLwyEmIr3OLhX1i8wAqqcWYXN7Y6aAdRG%2FIMV1FcQXy8FpHmbMaeqO%2FgRTUmBtvT%2Bmrm4OD%2BSMqBOq2tfGzY%2FxXFXUxo0a5fhTLSfk6aMm8Y1Ul1clN1oryXZeWFqhlHsS0PZ7VP4WaCeGcoaiLoea%2FbHPP9E3B8T0yA0%2BiqfytYQ2JT6StxekYwq2w787qTmPdY1bTUkycFl5ZYh9hnxOPm7mqOeZB5CzGwpzMadVV4L6X0miaEHWvTt0i5f7G2NP8%2FbE9wadVtKPVPQpNscxUIqbtHX%2FjkDOlQPm4btV9v581GnRuzODPZ6oDciSo1KcDKUX1X0P%2FySxOm0Fz3hLXZN%2FGY3eRPeoUeoL1NXnPXvI1MdBduuK1h0gZPhQ1Qfob%2BVaCkcxUWqjWrGDaH1%2B1ugrFUMogVVhrvHx%2BnAv2A%2Fgo4JWnzRQ%2BefHbpCz7OZfmYAZC6z%2BFMeDZb92xJg0mXC6woCauX7kAQ84Z2etWAm3MSoHLAMNia1MkGOqUBuYLtxJnrKy%2F8pnTp9f4afx%2BBW9ykfBhNUgaRb%2B2EF4DipJv95L8N3qtsHq6c8y4hKvcBQcpRdpiieMnD13KUjgSmImfGGS6RwnAYcFtrF0mBUPt0QVDH5bYoz1iE3B%2B05sPnulOE%2F%2B1t74ym1sOnL6Nb19ktwQp4w1sKSubM1RRITxjnRYxzmHhLrOlyw68%2BfHBJNIzCQwjy5TwxNRj3LOGAotxC&X-Amz-Signature=6b50f794a3648452364a0bdd378bce14a0a47a5c56376b743502e069e2b7727e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
