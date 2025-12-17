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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UORNQ4CM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnquczWu2uEBySLA1Ti5VfyRjwluz5BJEOaE8kxYjD3AiEAwivpVzTJQNyKzeBQXRjZ52EOThVFFwwnNcCChTnOOMYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNPxWyN2x8HuOTivUircA0eQ0AROptkVwDbT%2B8qt7coFSLSSHsRkriGmHnXrBdjBAPYCIR5lmaiT1ZtpkTGm939i3UVpV78UvpxjGJvfHNHSgXN%2Fpka270T84CUOHuGycMtE22VwnO6TIA%2BsEW9BBeeXG7%2Fr4aBsPrc69YjFc2sJG2nmxOrrsoVaA1r3H2jou0vi%2F6CsMlajtgM%2Bgx4MdvWlMZQPqNUXBpaz1BAnz6%2BMUd1q3fdZ7%2BYLVkLvOusmwLSkhPvL8QIBVf%2F9knS44Vaj68wxJQo3wQ24caBt0CZVI890tYvp%2BYxavZqCb%2FOe4B%2BM8DJuZkdnWUnIR5nmuaN7p1foR4sSArTKrm1uMUt1ojK4V5e%2FIl4vIdnI7ggvfb2TiNhCtf9BrLT%2BZzBgt4AOKcRfZHhdGDlHg6bskb4o2B%2FGSdHkuU6QKC3w%2FYuFm%2BJzTqjWKPbMfdFL3M2fG2XapE0dHQ%2FoEeiJNc08OC5qhxBHpKAWYjQY4W5Qr%2BYw3E0%2BWWLNthCEvnJu6VOQB8qE1CD1M4eX5l85tce6W0jM56%2FnMq3Lck5EtO1zfFiZ%2Fj77AAJmezPSomfwVNd71eghyXDs5C1X4M0KpgghwIdYAxr824T0QXUO61XFNyhWzLR7GCALeLovCc9XMJK4icoGOqUBuvX4IIMROJh6zy1wXk47%2BkglWJTyn6sOpPDfJX%2BI3h0Keh7dW6yC0XKic1Wio%2BOJwa1U9Cu2kDMQuOM%2FQelwa%2FfbihisAQQim%2B58MoaBG5dczj1zB3XnXhfkzr34RNjI9kqimW9ueyjZiaCgV%2Bf%2FW%2B1hDiHyKzUYhdy8SwNZgB2zoNJzIYyzZqayAct4BXwVUu34HzGy6UjuyI9Fq%2FKoVdAj3TUA&X-Amz-Signature=adf80d720357e08fbe9f29dbb6245fc9ad317b89766c4c43f253bcd4d8200617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UORNQ4CM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnquczWu2uEBySLA1Ti5VfyRjwluz5BJEOaE8kxYjD3AiEAwivpVzTJQNyKzeBQXRjZ52EOThVFFwwnNcCChTnOOMYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNPxWyN2x8HuOTivUircA0eQ0AROptkVwDbT%2B8qt7coFSLSSHsRkriGmHnXrBdjBAPYCIR5lmaiT1ZtpkTGm939i3UVpV78UvpxjGJvfHNHSgXN%2Fpka270T84CUOHuGycMtE22VwnO6TIA%2BsEW9BBeeXG7%2Fr4aBsPrc69YjFc2sJG2nmxOrrsoVaA1r3H2jou0vi%2F6CsMlajtgM%2Bgx4MdvWlMZQPqNUXBpaz1BAnz6%2BMUd1q3fdZ7%2BYLVkLvOusmwLSkhPvL8QIBVf%2F9knS44Vaj68wxJQo3wQ24caBt0CZVI890tYvp%2BYxavZqCb%2FOe4B%2BM8DJuZkdnWUnIR5nmuaN7p1foR4sSArTKrm1uMUt1ojK4V5e%2FIl4vIdnI7ggvfb2TiNhCtf9BrLT%2BZzBgt4AOKcRfZHhdGDlHg6bskb4o2B%2FGSdHkuU6QKC3w%2FYuFm%2BJzTqjWKPbMfdFL3M2fG2XapE0dHQ%2FoEeiJNc08OC5qhxBHpKAWYjQY4W5Qr%2BYw3E0%2BWWLNthCEvnJu6VOQB8qE1CD1M4eX5l85tce6W0jM56%2FnMq3Lck5EtO1zfFiZ%2Fj77AAJmezPSomfwVNd71eghyXDs5C1X4M0KpgghwIdYAxr824T0QXUO61XFNyhWzLR7GCALeLovCc9XMJK4icoGOqUBuvX4IIMROJh6zy1wXk47%2BkglWJTyn6sOpPDfJX%2BI3h0Keh7dW6yC0XKic1Wio%2BOJwa1U9Cu2kDMQuOM%2FQelwa%2FfbihisAQQim%2B58MoaBG5dczj1zB3XnXhfkzr34RNjI9kqimW9ueyjZiaCgV%2Bf%2FW%2B1hDiHyKzUYhdy8SwNZgB2zoNJzIYyzZqayAct4BXwVUu34HzGy6UjuyI9Fq%2FKoVdAj3TUA&X-Amz-Signature=db5c22d0dff0eab9c76c174bb97a4647753702885e43b914076bf2081e34d696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
