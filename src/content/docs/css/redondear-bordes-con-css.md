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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5UQDJR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdMsFqSRgyrVowxLbneiafJ6KccNJhdGSlp1Lh%2FtXHLAIhALBlXzDljnQFeiDTzFzN7HlfR%2BCF1ORcM3GOBNK5YNj1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT9g85HRhUGcbhBkEq3ANnsOwjnFTt9ztyx3tHKoEyj5%2BCFTX81g9TU62bIC31%2Fn14%2B5MZUuTh30lU5lOG8Ifa7EpsIs%2FsERDX8tYBXebEqs225t2GAhb4YbWDrvZRik5Xby%2FqD0q%2BvUbC38W8uyJHCkH%2FwJEb5%2BSZFH0TXJZ1nVwc55gzDQxMxSA3UsHuB6jrMGbOM7UtyYHjDlf%2BfszEEBmbB4akle4omO26d6GUIrzVlj0peyGyTgPx3wX3xGXm8EDhUfry%2B1aGmKamYqJ%2BD4yXXGsXmvYLyWc8bBKpa2RFODjQTpMSaUoLQlXsRPlYFUvoWZKyFhz3DcC%2BAloiFOf4mafFmmzo7YXRvOantt481XpVODYo54v8GNoUEhrU38F78JZK2RJx3QRgqg4H6kzyVEHt8AHwOMxjL3QRhvLpnhuQ%2BLHFrdLsoOVYioCpZNfqtzpYWTeaWPrRta6R7aOn13950Jzo%2BADI2fGjSkNSjaZuvbyvFH7vg1rc7A08CQSc63X2MXvUQs%2BvhOtsj2bHpxTYTbhmRbX%2FPLfZkMqw1Tnv7PEvHYH0NJG%2FxhX3UhdBilCTctfA5CL5HLzVRT1m2brENMvh4xY33CRPa1U0wcWKJ9mHhxapVU3teFhJCsiGm21kLTUn0DD9htzJBjqkARFFZiHvdNdO%2FHxn2zMOnxvzVwI1z3zkNpvRBQe5gZyzUFC0nk7bHRG%2Bhs2SSbpHSZUpsMhfACbOCgyqt3hZrZ5sPj4Qz3iZcaoO5m2mrJ805uiBTKLWDLyLtSJm8555Ygzi3L%2B%2BtYfxmelN2%2Fi%2FMlwY3cIcfTCbQNty9kyy1wYjk9wK7xZ8HmEHKk13nQceLFpy1gTjfDEnb6%2FU0CMK01c1ao9m&X-Amz-Signature=e2a4a8aadab346c2698d7280d9c75e87ee73b849392fc1ab6ff5670bb0697cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5UQDJR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdMsFqSRgyrVowxLbneiafJ6KccNJhdGSlp1Lh%2FtXHLAIhALBlXzDljnQFeiDTzFzN7HlfR%2BCF1ORcM3GOBNK5YNj1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT9g85HRhUGcbhBkEq3ANnsOwjnFTt9ztyx3tHKoEyj5%2BCFTX81g9TU62bIC31%2Fn14%2B5MZUuTh30lU5lOG8Ifa7EpsIs%2FsERDX8tYBXebEqs225t2GAhb4YbWDrvZRik5Xby%2FqD0q%2BvUbC38W8uyJHCkH%2FwJEb5%2BSZFH0TXJZ1nVwc55gzDQxMxSA3UsHuB6jrMGbOM7UtyYHjDlf%2BfszEEBmbB4akle4omO26d6GUIrzVlj0peyGyTgPx3wX3xGXm8EDhUfry%2B1aGmKamYqJ%2BD4yXXGsXmvYLyWc8bBKpa2RFODjQTpMSaUoLQlXsRPlYFUvoWZKyFhz3DcC%2BAloiFOf4mafFmmzo7YXRvOantt481XpVODYo54v8GNoUEhrU38F78JZK2RJx3QRgqg4H6kzyVEHt8AHwOMxjL3QRhvLpnhuQ%2BLHFrdLsoOVYioCpZNfqtzpYWTeaWPrRta6R7aOn13950Jzo%2BADI2fGjSkNSjaZuvbyvFH7vg1rc7A08CQSc63X2MXvUQs%2BvhOtsj2bHpxTYTbhmRbX%2FPLfZkMqw1Tnv7PEvHYH0NJG%2FxhX3UhdBilCTctfA5CL5HLzVRT1m2brENMvh4xY33CRPa1U0wcWKJ9mHhxapVU3teFhJCsiGm21kLTUn0DD9htzJBjqkARFFZiHvdNdO%2FHxn2zMOnxvzVwI1z3zkNpvRBQe5gZyzUFC0nk7bHRG%2Bhs2SSbpHSZUpsMhfACbOCgyqt3hZrZ5sPj4Qz3iZcaoO5m2mrJ805uiBTKLWDLyLtSJm8555Ygzi3L%2B%2BtYfxmelN2%2Fi%2FMlwY3cIcfTCbQNty9kyy1wYjk9wK7xZ8HmEHKk13nQceLFpy1gTjfDEnb6%2FU0CMK01c1ao9m&X-Amz-Signature=5e5cf74eb06b423b5b55897e2468c9010bb655daca9f4138924d6a991f11a3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
