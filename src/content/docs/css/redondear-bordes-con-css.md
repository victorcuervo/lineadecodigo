---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLHU64X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC5PxR5Fr6rUgAffH6ehZ6Do7aE%2BscjPlykOOa8XHgIWAIgKmwi91CmGG%2Fh6NO8e34pB7qPk8vmgUfNuhwkYil8%2BbEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDEZUC0Gv3hMf9BcrircA%2BJPakjIVEvaLWTnv%2B0Xq0S2dMme5Znxz723PRMySX9JWZfNgZCsqPEDyUIDEJ%2BwmlGVU2CmCYfRRzbSUD9cs5PC4ep6IRrgmOufDZB%2B%2BZXc1Y9O%2FP0Xi6fEG2ddBr88ANzaI4sVaUNI98j2xC0yZszDef1RK0xhhtCc3B8sb3wBkqrbozqdtjD7qoPcVWUcAwOQfU3%2FRDjAKbui%2FsosK1fVLi7pXu1tFh6jwX9ODrivaib0sLJyyPSxCP%2FoYxyA5Lifc0eeKaKrCaiohhNxNfYdryC9UM7CzwplL9NkGrR%2F0UxbmjdHs75s75a%2Bt5i4kUjy%2F2viiA9Kwfjk562dZC443ExMotzQNAT%2BBrlZ195oAGU7iup85hajvQ%2FqtroCznCMHrtv17%2FsJ8U0ORmtsIU5e%2FdtrfUidBHmFdNvH9I6kh9c67rbbLkdifUKwr%2FjB8in5ZPevS%2FS85hY4hK5T3bO8QyOdHGmLKYpTc86xytgaxWzSNZLonMJWAY5IaP%2BYHBeUg9qNpkjYin036aALNygOKqM0uxW%2FYnF0yHBT34WO4NJcoschH4w7kNFe9dM0YD9RS%2BphqXQhz2w2AxgBw04UQMsAB8yPEDiM087tkyK4kf9XZlHI0l%2BqiYtMIyQxMkGOqUBoggXrKYuZO%2B7ujRRza7ilX1GjrmNzXicCWg7zSV29CI92hkPRoPBBeb7TV4z0stX16cZeL9omdoQzadEf6b%2F4oZ8zKht8%2BfSqcoSaBdN92VXo38MaKjen7T9Xlwo%2BhbiI6kbH6uYDVcbGkIY10QeOt6m6tyszdAn1d3hgiZ0iUFtk7lDUzKvD%2BSUjW3oVoScCyevwKVU1Vwb2CGClvy9wdIXctqB&X-Amz-Signature=0942e4423f88c8c8762d5a4b8cd84d5f2a167548207a145ef3069b79493ccd3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLHU64X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC5PxR5Fr6rUgAffH6ehZ6Do7aE%2BscjPlykOOa8XHgIWAIgKmwi91CmGG%2Fh6NO8e34pB7qPk8vmgUfNuhwkYil8%2BbEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDEZUC0Gv3hMf9BcrircA%2BJPakjIVEvaLWTnv%2B0Xq0S2dMme5Znxz723PRMySX9JWZfNgZCsqPEDyUIDEJ%2BwmlGVU2CmCYfRRzbSUD9cs5PC4ep6IRrgmOufDZB%2B%2BZXc1Y9O%2FP0Xi6fEG2ddBr88ANzaI4sVaUNI98j2xC0yZszDef1RK0xhhtCc3B8sb3wBkqrbozqdtjD7qoPcVWUcAwOQfU3%2FRDjAKbui%2FsosK1fVLi7pXu1tFh6jwX9ODrivaib0sLJyyPSxCP%2FoYxyA5Lifc0eeKaKrCaiohhNxNfYdryC9UM7CzwplL9NkGrR%2F0UxbmjdHs75s75a%2Bt5i4kUjy%2F2viiA9Kwfjk562dZC443ExMotzQNAT%2BBrlZ195oAGU7iup85hajvQ%2FqtroCznCMHrtv17%2FsJ8U0ORmtsIU5e%2FdtrfUidBHmFdNvH9I6kh9c67rbbLkdifUKwr%2FjB8in5ZPevS%2FS85hY4hK5T3bO8QyOdHGmLKYpTc86xytgaxWzSNZLonMJWAY5IaP%2BYHBeUg9qNpkjYin036aALNygOKqM0uxW%2FYnF0yHBT34WO4NJcoschH4w7kNFe9dM0YD9RS%2BphqXQhz2w2AxgBw04UQMsAB8yPEDiM087tkyK4kf9XZlHI0l%2BqiYtMIyQxMkGOqUBoggXrKYuZO%2B7ujRRza7ilX1GjrmNzXicCWg7zSV29CI92hkPRoPBBeb7TV4z0stX16cZeL9omdoQzadEf6b%2F4oZ8zKht8%2BfSqcoSaBdN92VXo38MaKjen7T9Xlwo%2BhbiI6kbH6uYDVcbGkIY10QeOt6m6tyszdAn1d3hgiZ0iUFtk7lDUzKvD%2BSUjW3oVoScCyevwKVU1Vwb2CGClvy9wdIXctqB&X-Amz-Signature=d89bad1d49ede751759fb7a556a161816e0c78179c21f8f2ac0ad17e203205e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
