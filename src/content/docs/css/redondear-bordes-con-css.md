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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWEUUDI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEfXiPChOZHC8GLzIoWMBx48mkS3JSbyg4qWjZAz%2FPwAiEAtCbriEWf0OWdYA9GeaGb2wVWnwg835cb9vpyG4aqBKIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdoVsxyngL3XLYmvSrcAzW1h3i5%2Ba1yILydlpOrpqqrQwmfs5ugLqaUGhQ8mVYfDzL60BXh8ct%2B5GrAylw5xLzDHSopfscId2jPWP9ZAUr6iw7M7axZwMp5iL2tdFVdoRf2qaPs3ZIO9wLXTcZLFeXYSGf0NqbUjM6CI3vALKCepd3JWMIsQYiLKKrWfCHTy0yTqjBKco3NHwPA8hGEaAGXXk0uK6nMF3b97AF%2Fok0dqCH3NZ2TLc5PN9QiAX8Ncyc2cuKir5dTcD%2Fcma1ogRR9sr98iRhns%2BDzU52xEIThVd3Ha8LYszps0snbIkKSuFSy2PoSqqb8XmTBY4n5hW7XZ968NIRX8vEzeIQQrBxh%2Fsk1jLW6r27il7a%2BEKuAlaO34ZWN8djFrYIYGAVDXb6JYTRLa4xNP58BXRMxf8BUFX446eP4h%2FnWCn5PUReOsuANZWIbsurUeTYq1PvabqE1RvDzVr7UbuoI8WIt6YqqBGEYw0nwlRu6jzo1LwwzOHgfv0dRYPPZJ3Vmh1KKQ47mqRpi69iLOa8VxOvNd6SsLf5Jceu0B5cgA16UsXIy0h0qSl6eyUQU%2B7UDaeUSuHD%2FodwMjNBgnGhdUP5IFl0CvSajmj%2F8lLcg0x0z6gXs6iuvonlk0OcsC1kBMIX90skGOqUBIwVdM0dkatflhDyqEKJHwHa0d6lrt7DKeV56whF6ko1u7seQpMM%2F2R6SM%2BVfX4oDkbD2ME6RfGd6I%2BtZwLVHVZCMQ37CR4YSVA4iTk5SGzNmaXFCRRd%2FDO0DqwSja6YO7A9VoNgpicXPUWKXe8vCdcESU%2B%2FiBd%2B5nRaThiHUGorQemVjjElooJy1x0hP5yjqCUqCPRjsn9PWoHJtThL7hWAFYT%2Fd&X-Amz-Signature=22b4a1a1c7d8aff00a7ff744a7011aef291bc8f470f08f8291834fb4bd707ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWEUUDI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEfXiPChOZHC8GLzIoWMBx48mkS3JSbyg4qWjZAz%2FPwAiEAtCbriEWf0OWdYA9GeaGb2wVWnwg835cb9vpyG4aqBKIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdoVsxyngL3XLYmvSrcAzW1h3i5%2Ba1yILydlpOrpqqrQwmfs5ugLqaUGhQ8mVYfDzL60BXh8ct%2B5GrAylw5xLzDHSopfscId2jPWP9ZAUr6iw7M7axZwMp5iL2tdFVdoRf2qaPs3ZIO9wLXTcZLFeXYSGf0NqbUjM6CI3vALKCepd3JWMIsQYiLKKrWfCHTy0yTqjBKco3NHwPA8hGEaAGXXk0uK6nMF3b97AF%2Fok0dqCH3NZ2TLc5PN9QiAX8Ncyc2cuKir5dTcD%2Fcma1ogRR9sr98iRhns%2BDzU52xEIThVd3Ha8LYszps0snbIkKSuFSy2PoSqqb8XmTBY4n5hW7XZ968NIRX8vEzeIQQrBxh%2Fsk1jLW6r27il7a%2BEKuAlaO34ZWN8djFrYIYGAVDXb6JYTRLa4xNP58BXRMxf8BUFX446eP4h%2FnWCn5PUReOsuANZWIbsurUeTYq1PvabqE1RvDzVr7UbuoI8WIt6YqqBGEYw0nwlRu6jzo1LwwzOHgfv0dRYPPZJ3Vmh1KKQ47mqRpi69iLOa8VxOvNd6SsLf5Jceu0B5cgA16UsXIy0h0qSl6eyUQU%2B7UDaeUSuHD%2FodwMjNBgnGhdUP5IFl0CvSajmj%2F8lLcg0x0z6gXs6iuvonlk0OcsC1kBMIX90skGOqUBIwVdM0dkatflhDyqEKJHwHa0d6lrt7DKeV56whF6ko1u7seQpMM%2F2R6SM%2BVfX4oDkbD2ME6RfGd6I%2BtZwLVHVZCMQ37CR4YSVA4iTk5SGzNmaXFCRRd%2FDO0DqwSja6YO7A9VoNgpicXPUWKXe8vCdcESU%2B%2FiBd%2B5nRaThiHUGorQemVjjElooJy1x0hP5yjqCUqCPRjsn9PWoHJtThL7hWAFYT%2Fd&X-Amz-Signature=a087c05f3b1d87a0b454d24eb7114d7270537f394e7e6c9a77954e05c54772d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
