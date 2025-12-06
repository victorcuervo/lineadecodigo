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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WUA2H7M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5oQDSaVCwd%2BnZBP%2BOVOhNUDCxkXTkNdonLp%2BBle1dfAiBxsuMqNMc3d9b%2BSwOvviAwn%2FidELby6JY%2BmJq3W6AEgir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMDoDK3dBGpggSaEDuKtwDymCTdVWoeVdhYV37iRf9ROID2Q013z4YNmak2f94wxtbKwn20ksbxuYnLMp2dnp5D5cAmX7TxCM0zNarV4lYRHqDkprZDk7QWTgkNkvQBVzENAxsFrizJ2mybyezkcUAMh5VjQ1U3kcUBs2AoXEupgsk8qz%2Fa5NBZpI8pDpLuz6HrZeGwyQMHp9NSKrQYI3941jofuHuyr4ud8x3Hm6Uu56TJ7ISAlHhzYdyWvYLvEP6AcT4IC%2FtBVLErcu%2BonKDG4VOWo3wsrCiW0YElFNdbrQmB9tjNbIUyk4%2Bm%2FuvaE98kLpg3YwWCdY4wU3CJGDw1qiRtN21%2F3PBKtWwx8Sz8F5FRA%2F66ING2Q3n5v5JabFRIOlrppiEq6JPzA1bTSxyzD0fXVnQ%2FPJODF9sPheCIWsUhAmkazAbR0lfWMHoKMb%2BWZldVkBzfK6ZBmYJprrT%2FyyB%2FHCA4NIXFxcmS7xVVJ1vH6Xifr89je6tw5HEGQS8S3gs7zxi1cBOqOoDENY7Udwa9YAmEMirlysQQLL8tCUSM79UBG65WmuBDTMxICVjKBWIhjlRzp3Ou%2FDPJtWG6Xr3A6JoPF0litNFZNXD8RrWiiYBAinQjdYCyNKl7xLdWpxVHCh5MLOr3JowlorQyQY6pgEnZEV4DFxA9wyyXMCZ48LKXwkST%2FMiK6pRyte%2FgWcFZWXhNTH%2B9PxOxOyo8Ob2Nn73WfBh0sWuZnYy08xhJDwqXDxjkrmjZipcdviBtxMxvwndZ4luZCoaaftCwK8h4YqhQdRBwswpgT622M1jyVbbu94y183fJ7KB%2FKlnijgc%2FarGD%2FqYbD%2BCHtUZjxf1Wk9puiTx%2Bohb4unOgOhe0giWYFdP9kSC&X-Amz-Signature=237b7b517dd01d70be88600b947330b9b89a558dff7c630fdc4789be51135415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WUA2H7M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5oQDSaVCwd%2BnZBP%2BOVOhNUDCxkXTkNdonLp%2BBle1dfAiBxsuMqNMc3d9b%2BSwOvviAwn%2FidELby6JY%2BmJq3W6AEgir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMDoDK3dBGpggSaEDuKtwDymCTdVWoeVdhYV37iRf9ROID2Q013z4YNmak2f94wxtbKwn20ksbxuYnLMp2dnp5D5cAmX7TxCM0zNarV4lYRHqDkprZDk7QWTgkNkvQBVzENAxsFrizJ2mybyezkcUAMh5VjQ1U3kcUBs2AoXEupgsk8qz%2Fa5NBZpI8pDpLuz6HrZeGwyQMHp9NSKrQYI3941jofuHuyr4ud8x3Hm6Uu56TJ7ISAlHhzYdyWvYLvEP6AcT4IC%2FtBVLErcu%2BonKDG4VOWo3wsrCiW0YElFNdbrQmB9tjNbIUyk4%2Bm%2FuvaE98kLpg3YwWCdY4wU3CJGDw1qiRtN21%2F3PBKtWwx8Sz8F5FRA%2F66ING2Q3n5v5JabFRIOlrppiEq6JPzA1bTSxyzD0fXVnQ%2FPJODF9sPheCIWsUhAmkazAbR0lfWMHoKMb%2BWZldVkBzfK6ZBmYJprrT%2FyyB%2FHCA4NIXFxcmS7xVVJ1vH6Xifr89je6tw5HEGQS8S3gs7zxi1cBOqOoDENY7Udwa9YAmEMirlysQQLL8tCUSM79UBG65WmuBDTMxICVjKBWIhjlRzp3Ou%2FDPJtWG6Xr3A6JoPF0litNFZNXD8RrWiiYBAinQjdYCyNKl7xLdWpxVHCh5MLOr3JowlorQyQY6pgEnZEV4DFxA9wyyXMCZ48LKXwkST%2FMiK6pRyte%2FgWcFZWXhNTH%2B9PxOxOyo8Ob2Nn73WfBh0sWuZnYy08xhJDwqXDxjkrmjZipcdviBtxMxvwndZ4luZCoaaftCwK8h4YqhQdRBwswpgT622M1jyVbbu94y183fJ7KB%2FKlnijgc%2FarGD%2FqYbD%2BCHtUZjxf1Wk9puiTx%2Bohb4unOgOhe0giWYFdP9kSC&X-Amz-Signature=08a7aa9518f1086a1d6ae08304e00f76c3e2c349b09fa1dd3e4e4db38be26a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
