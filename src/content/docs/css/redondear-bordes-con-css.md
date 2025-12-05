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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMH2CPN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMjIeB%2BkpWnxAWICbaScRMJvePluj0H9eCNn9F4WFcQQIhAL0DjU0Usem7Nm5fEjMsxenjB3O9CS0u%2BTHS7KURwcN9Kv8DCFsQABoMNjM3NDIzMTgzODA1Igwq4ipuYAXu6z01J6Yq3AN6ZR3oNe64vgZJ5Eaoor2ZxvEFv46xmMq7ekCLZt3WSUUAwY1En0Q6q2nSaUGEy5nfG%2BZSpafhZ%2Bpjwvn8h1CrnuSZ3HeVokN6cGb4ptjgXCh6VZFXHWuDroUP3XNfcu2yWVpN%2FbebXnzdh5sVQsAYuoddY%2Ffk1pajXbuJLK9fmjvOWQ6tjsO7zRaJUe%2B3JYCya64QgflW%2BosSuLHCngAvWadoms9aBnUOo7tpw4RCGH50C7mt6lM4Iplx7TT%2F%2FCpRatRbDfU8Yi8nrVg1TlDi9o%2BjP2Hsgd%2BVlPj6ME6osNnmcUwn4HaOfK2NXuMAuQMqqpcNnj1uYTr3PR%2BXpxK%2Fm%2BRqTyiLo6t6grv3aLsgiZ3eHEW9frRrmK8iKcA5fHxfA%2BlA0ul7iioT0j65awfkaBAEKyuj9WAm%2BJsU0FSntkfRLBc5Oik45aRc6njWqrYOhBKZCcKvFEvVpNLzXBzjqT%2ByScXl61gCMYq%2Fq1JZ5Z0p8Ecjqndd9jc%2BxI0xv%2Bp1nyvkkcwtLSPVsMRf2xyw83MoCnfnjQsGxgMOKP6R0uUg68W3qR%2FjiuBK7F%2FWJ3HGpDEraA4FT7ufwIgYWx%2FRZ%2FLUun0JhYXDYAYAlzNlVEXJIklZ%2Fb%2BkMQlYwjDo3srJBjqkAZWMeUN9T9nAL%2F0Tssciwq6%2Fbc0o5sGe1bXj4puNyQ7IgttFLukcPgtqUEZpo48482PnZHEPuV57pq85aLdRW4egJeiuvojwNZ1b2s%2BMi%2Fmd1yGyrvJWn20LX%2FjmcG4V1p%2FjYhReJ2%2BMcI%2FIHNS%2BpVB65xruzVldWkfHT0uMTJDsJsZQnQk48pw9gelMtPQoPLVaJ6E5sYphC5VZcT%2BYOTSnh5s3&X-Amz-Signature=d487312dfcdad44ffd7b1a1873c67c2de13259eff13ca38153898a53406c4f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMH2CPN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMjIeB%2BkpWnxAWICbaScRMJvePluj0H9eCNn9F4WFcQQIhAL0DjU0Usem7Nm5fEjMsxenjB3O9CS0u%2BTHS7KURwcN9Kv8DCFsQABoMNjM3NDIzMTgzODA1Igwq4ipuYAXu6z01J6Yq3AN6ZR3oNe64vgZJ5Eaoor2ZxvEFv46xmMq7ekCLZt3WSUUAwY1En0Q6q2nSaUGEy5nfG%2BZSpafhZ%2Bpjwvn8h1CrnuSZ3HeVokN6cGb4ptjgXCh6VZFXHWuDroUP3XNfcu2yWVpN%2FbebXnzdh5sVQsAYuoddY%2Ffk1pajXbuJLK9fmjvOWQ6tjsO7zRaJUe%2B3JYCya64QgflW%2BosSuLHCngAvWadoms9aBnUOo7tpw4RCGH50C7mt6lM4Iplx7TT%2F%2FCpRatRbDfU8Yi8nrVg1TlDi9o%2BjP2Hsgd%2BVlPj6ME6osNnmcUwn4HaOfK2NXuMAuQMqqpcNnj1uYTr3PR%2BXpxK%2Fm%2BRqTyiLo6t6grv3aLsgiZ3eHEW9frRrmK8iKcA5fHxfA%2BlA0ul7iioT0j65awfkaBAEKyuj9WAm%2BJsU0FSntkfRLBc5Oik45aRc6njWqrYOhBKZCcKvFEvVpNLzXBzjqT%2ByScXl61gCMYq%2Fq1JZ5Z0p8Ecjqndd9jc%2BxI0xv%2Bp1nyvkkcwtLSPVsMRf2xyw83MoCnfnjQsGxgMOKP6R0uUg68W3qR%2FjiuBK7F%2FWJ3HGpDEraA4FT7ufwIgYWx%2FRZ%2FLUun0JhYXDYAYAlzNlVEXJIklZ%2Fb%2BkMQlYwjDo3srJBjqkAZWMeUN9T9nAL%2F0Tssciwq6%2Fbc0o5sGe1bXj4puNyQ7IgttFLukcPgtqUEZpo48482PnZHEPuV57pq85aLdRW4egJeiuvojwNZ1b2s%2BMi%2Fmd1yGyrvJWn20LX%2FjmcG4V1p%2FjYhReJ2%2BMcI%2FIHNS%2BpVB65xruzVldWkfHT0uMTJDsJsZQnQk48pw9gelMtPQoPLVaJ6E5sYphC5VZcT%2BYOTSnh5s3&X-Amz-Signature=2e5dbe92fa420e531c981dca3519c2ce96ea2fa13703f271d01bd67f1c5faa03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
