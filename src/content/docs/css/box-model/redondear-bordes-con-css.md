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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJNED65%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv7vR3VBjDZuOmiDteS02bdssIrqnSM4vamITzVYx7gAiEAkgjW4oPVFwLHvYLTGo9GZ2cr0REbNJ5TjZa2MgRKE3Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHXX9OL78I9yQvwheircA8lpr2tghwFzXBiJ42TaRL7145k3hYzHybEsD9P%2Fu72pzkWw1j2gGQoO7ce9G2s1aUeFQT%2Ftma9ndoUm%2B4We6wC9K0TkZsctBz2Fpf8Jkw4Gb8mKU8TNxSM3bz6EJHJ3DCcDBPxVnfFwV2KqLS91nHMaSJh3zEcq8mm5cC6erPZeevzcm4U4ptqwSvSIMB15zpM1HnJJBrfeP6bzuXy9WiS8WsuI%2BL5sGYZc%2BCXu9kAGmm20cZcPOHRHdWGISRegFfzKOXR4HIaprxvN96rdBdk%2FPbTvW%2B36i1EF%2FY%2F53kBoq4h8t4l4%2BP9ZDyc10HV4f1WYzkYBJv6OJVqLG4luAR%2BXjXvj8i407xo4y2BLNpWvP%2BEoa3nmPayLiLKF%2BqJ%2Fed3%2Fr5sThC4maNWi0M284O93F%2FvhiIUkJZ3C3hlU%2BDxHX14LSpLbIxUX22EALQqwjv8x2Ke4or0yj%2FPDABqoIgJ90NoBt15UOScF3QdLJ9UkqmCVdv5J48K3kpp%2FfLzkLUPFiuetQKYCKhncTGJy3q9hMZ15oObIQ4grxhy2N76hnxV%2F4Rkken8lrhXEk1Tsgc5rvu6OA4nr2rxXu%2BtZCWpl%2FzEKr3DWeSlT2KET2Glj5qe71XpF3xe3PAlRMLGDicoGOqUBUKWogP9HjpPzuWexvG41pOxybMQoWJfNmpk0WvjsFyhIshLV9Boj4QmCLXGDYTmPKBY8P7aFkBLMpcSZ6nxOccvFoKanf%2FQRxpNtIIP40b3xWnmtHsDfs8EokDZWYc86QiS50snV77mVHJ99G3i4gyaYMereAKWGLFMeGgrNwPipIPYspgZGQZB0jTInBcyfums3xJz4a%2FwrX30i2x5j39rJ4C%2BR&X-Amz-Signature=22c39cf009243469971c7811f53f68381ef823b58ee15a34391ffc315e431996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJNED65%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv7vR3VBjDZuOmiDteS02bdssIrqnSM4vamITzVYx7gAiEAkgjW4oPVFwLHvYLTGo9GZ2cr0REbNJ5TjZa2MgRKE3Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHXX9OL78I9yQvwheircA8lpr2tghwFzXBiJ42TaRL7145k3hYzHybEsD9P%2Fu72pzkWw1j2gGQoO7ce9G2s1aUeFQT%2Ftma9ndoUm%2B4We6wC9K0TkZsctBz2Fpf8Jkw4Gb8mKU8TNxSM3bz6EJHJ3DCcDBPxVnfFwV2KqLS91nHMaSJh3zEcq8mm5cC6erPZeevzcm4U4ptqwSvSIMB15zpM1HnJJBrfeP6bzuXy9WiS8WsuI%2BL5sGYZc%2BCXu9kAGmm20cZcPOHRHdWGISRegFfzKOXR4HIaprxvN96rdBdk%2FPbTvW%2B36i1EF%2FY%2F53kBoq4h8t4l4%2BP9ZDyc10HV4f1WYzkYBJv6OJVqLG4luAR%2BXjXvj8i407xo4y2BLNpWvP%2BEoa3nmPayLiLKF%2BqJ%2Fed3%2Fr5sThC4maNWi0M284O93F%2FvhiIUkJZ3C3hlU%2BDxHX14LSpLbIxUX22EALQqwjv8x2Ke4or0yj%2FPDABqoIgJ90NoBt15UOScF3QdLJ9UkqmCVdv5J48K3kpp%2FfLzkLUPFiuetQKYCKhncTGJy3q9hMZ15oObIQ4grxhy2N76hnxV%2F4Rkken8lrhXEk1Tsgc5rvu6OA4nr2rxXu%2BtZCWpl%2FzEKr3DWeSlT2KET2Glj5qe71XpF3xe3PAlRMLGDicoGOqUBUKWogP9HjpPzuWexvG41pOxybMQoWJfNmpk0WvjsFyhIshLV9Boj4QmCLXGDYTmPKBY8P7aFkBLMpcSZ6nxOccvFoKanf%2FQRxpNtIIP40b3xWnmtHsDfs8EokDZWYc86QiS50snV77mVHJ99G3i4gyaYMereAKWGLFMeGgrNwPipIPYspgZGQZB0jTInBcyfums3xJz4a%2FwrX30i2x5j39rJ4C%2BR&X-Amz-Signature=15b354c966b759283a382d4273f5f1f7ff42bd20215251d7fbb7110997874bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
