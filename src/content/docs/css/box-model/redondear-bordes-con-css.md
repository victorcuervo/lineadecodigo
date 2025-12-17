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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SYR6PQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClNQom0Y565qwZZTLGPg0Ce3V7khzfv0EwlsR5xdn0SAIhANy5lPF7BVd%2Ba6EueXs1Ca5F2aZ5l6NEHam90AY9N9t3Kv8DCHcQABoMNjM3NDIzMTgzODA1IgxGixpScZgdNeITGrcq3AOvMKaBAT8z%2Fl%2FPJ7kEANh2%2BXPeujGsl5y1YXgwhleRFiy9A9Jx1m%2B%2BfCp%2FIOPPHzYfyUl3EJVCWmNg6T0ZtCKRLr7E90jb3k0GxFP5ocbgpwTwrk%2F%2FouVnX2tSXfT%2BFuepeYkaMn3IjRgF5TRSqHVcOGdxGqE%2BzZUHY233cs2EBpAyuILIb4dGCMf2QbFD73xuc559YnvXEYHqDGO8iXRplR6S2wcQ%2BizEYu2G4xWHS6%2BnblCWoLNOjTiN31FYYcm69%2BahReBHx8A1gA6TwFEGkMhp7qCJvYLYV4I%2B6I3los9k5uTX2JpOisa%2BZbgvTE8r3vk%2FTCjp7gun3zh7kvf4rGuoElWQf0KYEbmhPOH31R5CbMaGG9K%2B5DSy%2FL1%2FQwpq%2Bsy%2FunUkDM%2FYW%2BzCkhj%2Bta0jPjgUiH4UMLZWIcYPtaTWAoqT1dCzJyGVf3AXNDrnM7k0TnWEBtb61NjDsg8WUwExLuUqOv1LAVp2lGdDwSq5fKGjqmZqe0LT1ew9z%2BZ64H9oQCqk%2FQtnpyKRCs4oq%2BTYwK8gQmM%2Fp8O2aYIIXYLYA7gElcZnLqND4uiJdAVvFKgRazQ4RGdd4mIGREZ30fF5kvRMM5DHJkMETf9bABZdmNFSKwhP6xliqzDzgYnKBjqkAaLoniSMWN4kAlB6Pwwc7FfD%2BTmgA5c1KBQGoypaLzpVyTCs%2FidR%2F2R%2F9yxgRKZKhVxFOlYOv0eEEXAfgxglLxtHK51%2Fetynwusa22UDLqQHpnSdNQZCO9wdjteKoLxSiKqmJBExFv9VfU%2BdgsHHZ%2FpYsdhUnEP8I4QKHmFV6AU96NIxU1FUqF%2FAhhyYaHu%2FMFXRqNVrz1mADlTqOCOR%2FPoMFsZ%2F&X-Amz-Signature=5b315ec163573e4cd5c5757563a361ce4f891fb8d30dfe1f602fca8bb0645aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SYR6PQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClNQom0Y565qwZZTLGPg0Ce3V7khzfv0EwlsR5xdn0SAIhANy5lPF7BVd%2Ba6EueXs1Ca5F2aZ5l6NEHam90AY9N9t3Kv8DCHcQABoMNjM3NDIzMTgzODA1IgxGixpScZgdNeITGrcq3AOvMKaBAT8z%2Fl%2FPJ7kEANh2%2BXPeujGsl5y1YXgwhleRFiy9A9Jx1m%2B%2BfCp%2FIOPPHzYfyUl3EJVCWmNg6T0ZtCKRLr7E90jb3k0GxFP5ocbgpwTwrk%2F%2FouVnX2tSXfT%2BFuepeYkaMn3IjRgF5TRSqHVcOGdxGqE%2BzZUHY233cs2EBpAyuILIb4dGCMf2QbFD73xuc559YnvXEYHqDGO8iXRplR6S2wcQ%2BizEYu2G4xWHS6%2BnblCWoLNOjTiN31FYYcm69%2BahReBHx8A1gA6TwFEGkMhp7qCJvYLYV4I%2B6I3los9k5uTX2JpOisa%2BZbgvTE8r3vk%2FTCjp7gun3zh7kvf4rGuoElWQf0KYEbmhPOH31R5CbMaGG9K%2B5DSy%2FL1%2FQwpq%2Bsy%2FunUkDM%2FYW%2BzCkhj%2Bta0jPjgUiH4UMLZWIcYPtaTWAoqT1dCzJyGVf3AXNDrnM7k0TnWEBtb61NjDsg8WUwExLuUqOv1LAVp2lGdDwSq5fKGjqmZqe0LT1ew9z%2BZ64H9oQCqk%2FQtnpyKRCs4oq%2BTYwK8gQmM%2Fp8O2aYIIXYLYA7gElcZnLqND4uiJdAVvFKgRazQ4RGdd4mIGREZ30fF5kvRMM5DHJkMETf9bABZdmNFSKwhP6xliqzDzgYnKBjqkAaLoniSMWN4kAlB6Pwwc7FfD%2BTmgA5c1KBQGoypaLzpVyTCs%2FidR%2F2R%2F9yxgRKZKhVxFOlYOv0eEEXAfgxglLxtHK51%2Fetynwusa22UDLqQHpnSdNQZCO9wdjteKoLxSiKqmJBExFv9VfU%2BdgsHHZ%2FpYsdhUnEP8I4QKHmFV6AU96NIxU1FUqF%2FAhhyYaHu%2FMFXRqNVrz1mADlTqOCOR%2FPoMFsZ%2F&X-Amz-Signature=add6507893b9aaa1086bac35f9c86a7ea710bb0f2c2488b13c6ad5950e65c393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
