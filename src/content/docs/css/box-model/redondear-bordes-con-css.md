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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W34KMST%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxlhdEXZC5zwKh2Qo11Qh8gFEunMQcrqmmqko3VNprrwIgX6qxgZ1U7T5cwPSX2zbEAOMdFXAPPJkIsbtuZdr5g3cq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPojBR7P0opskc8jMCrcA3LTTYjnH8GSphiPJ4NUgcYT3fz8q6QJCfIbqQhyUVSANa5bM7NDlaVoeBj0ViTgVMM5nIwD%2FKbd%2FDbeDmVdAUvk8h0ukYPZPz%2Fthf8%2BknCqHlwNYDz9wrskDO18jq5NOaLm0JjawpV8dEBeiZ58AaPzBOt%2BdgKsmYKm6VxdjIEU3x%2FTDUBuLLcatz4IK0%2BEIbvB0q95VUn1%2BEUw8suXJogsSxw751ZLz6roKD1oekW6RltApw6O46Bv%2FvmnbweYgQeXGB62oYG%2Fr3vJGZcYsgE4TEApz7xJe%2FqkRMFwCHbQ6eLtF7w3TiW4vKMtZdNx7eRqY4LInVDLnCZ8EGQm1Zz%2Fbp%2B4zUbQv1%2FSQ9AaZ675slO6JA44oiwCaw87VNxy0JR6OuoQmIvDh2EHucUMBitQmonu16M%2B0rvNIe3uUGoFRt1VWLItfUKNm6xR47kdJonK%2FICzTe1hdZPoLDD8mVugdzMNv7ut34j3LFA9XwEwomHAdrt7t7%2Ft5gheCBmOPU%2FUDwBoISC9hBudVB%2BsCBk2qAy%2F%2F3XyBWCVGWmDyoWru%2BDy8Rgb%2FLQfQVc0aBmwEoSmf9yBvaeKIODxuYO%2BWTADzC5%2Fdz4ILoKFPu9Wx2tM3sm3VzSewv8rGHIrMLbeh8oGOqUBTxoumSflVVivbZ%2FxalDscMFibK16aVOl23iUM7cBKbBccib155A%2BFjKYJQ8WhdU2TGeOktzIEgdA4coU9CuHFyZkLVmDse%2BTBoYWqt2p45AcQPmO%2BkSSexC3sLrlGiT9TnIqO24q24kYA1q0GNydaBW6sUcmrpvu%2F969wB5cG%2FTFOj%2FInQElk9ei5xZOQUmIdHJ0n%2F9atAeTPcsrbMnX89WGbePJ&X-Amz-Signature=2c7116a63a892ea4802118a7ea27bea1d7e03589fc39f6e33b1bb97a4a07971f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W34KMST%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxlhdEXZC5zwKh2Qo11Qh8gFEunMQcrqmmqko3VNprrwIgX6qxgZ1U7T5cwPSX2zbEAOMdFXAPPJkIsbtuZdr5g3cq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPojBR7P0opskc8jMCrcA3LTTYjnH8GSphiPJ4NUgcYT3fz8q6QJCfIbqQhyUVSANa5bM7NDlaVoeBj0ViTgVMM5nIwD%2FKbd%2FDbeDmVdAUvk8h0ukYPZPz%2Fthf8%2BknCqHlwNYDz9wrskDO18jq5NOaLm0JjawpV8dEBeiZ58AaPzBOt%2BdgKsmYKm6VxdjIEU3x%2FTDUBuLLcatz4IK0%2BEIbvB0q95VUn1%2BEUw8suXJogsSxw751ZLz6roKD1oekW6RltApw6O46Bv%2FvmnbweYgQeXGB62oYG%2Fr3vJGZcYsgE4TEApz7xJe%2FqkRMFwCHbQ6eLtF7w3TiW4vKMtZdNx7eRqY4LInVDLnCZ8EGQm1Zz%2Fbp%2B4zUbQv1%2FSQ9AaZ675slO6JA44oiwCaw87VNxy0JR6OuoQmIvDh2EHucUMBitQmonu16M%2B0rvNIe3uUGoFRt1VWLItfUKNm6xR47kdJonK%2FICzTe1hdZPoLDD8mVugdzMNv7ut34j3LFA9XwEwomHAdrt7t7%2Ft5gheCBmOPU%2FUDwBoISC9hBudVB%2BsCBk2qAy%2F%2F3XyBWCVGWmDyoWru%2BDy8Rgb%2FLQfQVc0aBmwEoSmf9yBvaeKIODxuYO%2BWTADzC5%2Fdz4ILoKFPu9Wx2tM3sm3VzSewv8rGHIrMLbeh8oGOqUBTxoumSflVVivbZ%2FxalDscMFibK16aVOl23iUM7cBKbBccib155A%2BFjKYJQ8WhdU2TGeOktzIEgdA4coU9CuHFyZkLVmDse%2BTBoYWqt2p45AcQPmO%2BkSSexC3sLrlGiT9TnIqO24q24kYA1q0GNydaBW6sUcmrpvu%2F969wB5cG%2FTFOj%2FInQElk9ei5xZOQUmIdHJ0n%2F9atAeTPcsrbMnX89WGbePJ&X-Amz-Signature=35b1f292a38705caa534378762479e9f03bacbeb272255b2612f5ed0825f21bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
