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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRJZAHXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGP5fqR7uQduV01O4KNtErXaOnoH7HMGv2j7HkDEjxF8AiA4o6EYvLweKBivDmHh5XtfJhHS3uzuJQWBGyfPfqRfKyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMbaOsc3UdunywcdHtKtwD%2Fk8Tjyr1tZr9wZcCgGXPfaTeJ9Ifc1aCl8e1qCqR6Dp0KGL%2FeBP%2BY7gqkmAEkD5SDewtcumTAxq4TQ2ZM3gQCHvFAeoMdQTyLN%2B%2BTo%2FJ%2FjaFOz20QWndBHAW74KV4naE7MsRhFZkGOsr2SrnDty6g79WlfQ0jbv55%2B81JXHp0szMPRc9KodKlgCRbkQB4tPuhZvD5sGlV0xwuO9lHn24RNmsZOCMzX8OaMQZYarKEWxzhf8RzQBn5KR%2FsvHLeTUsmssX6mmm7MIcnxlYOcSncSxcfZCmUMQZJWzPlvQIwNnmSTpuH3ZGm8vx872jRkYMRDQhherhEorwJyfUGPPq%2FcmC9bLwdWoYi2KJy25TeanFaQ65XhE%2B4Z3807krSewKeE6Z18t1tCiY4neDOtXrrtkq%2Bk6qhRxv2RGHvKwACTfZeWEhByyMbllIsMfBt0IEDrsMJoHW07TyGawbkiCndwnfrTNCI3anPM1a7j%2FT%2F10RpO00TKnZry9Mvz5gFF796YgBBXloyr6kGIMA6Hk9UwSsgJjM93rq8na0pgWMhb40xC31Yhm2hg9FlhUI5zbZR4RiLAaxDlvFNFxMFXuDJ6aWVlw9SvAMagb6jKOqzPeVber8lCE69V3ZHFow%2FbKIygY6pgEnTZNhIikjWonmHCQALQX3PKAnkgRtvdRdJBUXzb%2FVTf2LzBfEfvaUy65WabqEEBfdBMR3tYnNp5FMoS3iNHUEnyyC9qouZkf6GM0AmWHZQOcMxCYFp9fMb7d0FdACvvjewt93JunByfZQlmeJdDkrmme912qhxlepG4aok%2FKNXXxJMJJBL%2BdC2Njkj3U119%2F6kb6yxlaiVucHiHzY3zilENj4j05e&X-Amz-Signature=cabca8ef2974f2f4175cf79191b8b647f1af084a77e2a0f5962c6dd12c99f5a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRJZAHXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGP5fqR7uQduV01O4KNtErXaOnoH7HMGv2j7HkDEjxF8AiA4o6EYvLweKBivDmHh5XtfJhHS3uzuJQWBGyfPfqRfKyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMbaOsc3UdunywcdHtKtwD%2Fk8Tjyr1tZr9wZcCgGXPfaTeJ9Ifc1aCl8e1qCqR6Dp0KGL%2FeBP%2BY7gqkmAEkD5SDewtcumTAxq4TQ2ZM3gQCHvFAeoMdQTyLN%2B%2BTo%2FJ%2FjaFOz20QWndBHAW74KV4naE7MsRhFZkGOsr2SrnDty6g79WlfQ0jbv55%2B81JXHp0szMPRc9KodKlgCRbkQB4tPuhZvD5sGlV0xwuO9lHn24RNmsZOCMzX8OaMQZYarKEWxzhf8RzQBn5KR%2FsvHLeTUsmssX6mmm7MIcnxlYOcSncSxcfZCmUMQZJWzPlvQIwNnmSTpuH3ZGm8vx872jRkYMRDQhherhEorwJyfUGPPq%2FcmC9bLwdWoYi2KJy25TeanFaQ65XhE%2B4Z3807krSewKeE6Z18t1tCiY4neDOtXrrtkq%2Bk6qhRxv2RGHvKwACTfZeWEhByyMbllIsMfBt0IEDrsMJoHW07TyGawbkiCndwnfrTNCI3anPM1a7j%2FT%2F10RpO00TKnZry9Mvz5gFF796YgBBXloyr6kGIMA6Hk9UwSsgJjM93rq8na0pgWMhb40xC31Yhm2hg9FlhUI5zbZR4RiLAaxDlvFNFxMFXuDJ6aWVlw9SvAMagb6jKOqzPeVber8lCE69V3ZHFow%2FbKIygY6pgEnTZNhIikjWonmHCQALQX3PKAnkgRtvdRdJBUXzb%2FVTf2LzBfEfvaUy65WabqEEBfdBMR3tYnNp5FMoS3iNHUEnyyC9qouZkf6GM0AmWHZQOcMxCYFp9fMb7d0FdACvvjewt93JunByfZQlmeJdDkrmme912qhxlepG4aok%2FKNXXxJMJJBL%2BdC2Njkj3U119%2F6kb6yxlaiVucHiHzY3zilENj4j05e&X-Amz-Signature=1bf7335fb5a888bb1db9363a928d11973bcd9ca65dc68afdd01f347035ce6948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
