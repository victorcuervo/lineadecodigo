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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZOPJMM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvS3mchdH9ljKRKq3hLCtRILhKXpcjdqf6lh8oIkJSJAiEAoSWpm9ArmT2NKkxX2u7mafaj5jgvRVuJx2aAN5bFtKwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfLgciX3W%2F3IPv%2FdSrcA5ocs7XWszAVpm5mgM17stDntAWalD%2B7wEeH4n1a2Zb5mTBWs10vxCljjVcxbSp9uhVf5XT9Y3FOwEZObRs2NZ2Dc9KRuTqaM%2FtC2EVIm2YUBSuR3R0nPt%2FnbNBPhNb4zeodtxM%2B6br0Tp8u7W3WGt%2FumY53QV2myp%2BAx6FIrNoExPNNmLkdMPCMWsjT%2BlobI5sPH%2Fybb34ZJKmVufxI44gTcwnRJ%2FYdqk%2Fc%2BlKAwgVaidfOPPcUOgZJNfKhD91evZ51O0Bzt3ExNJH0%2Fl28kIISqFjd%2Bqu9vqoGEJcPB7md4JdrK1C4FJ2mLTcRlgMvJ9aHFPzD3eQ6hJS%2FLvCEPQp%2FcPUeMAMIGkdC2Yoo9dPkMxbnOmRMivaRL4txWEWK9x2AZO%2BbHQCa6Y0y9GQRDLutdSNBJSojH%2FR2XUHv4gMl4q3M6LM74V1tqYM1ooLqNLB5iq3x67TLA8AqMG%2FZjtwPyeQOTTG4KsmYCgRZHx8bug47di8dBkqkLg8g1jKFFUSmbgoRrJFQkySe%2Fd3UKFVXkzY9nI2ZW7BZReR3rEfv4gTCDzWXCE7HkPkvgxmDXqtC5aPC7VHJHZbLuzR6XfMTG8QevgZoaiDiOS5aMNeNa0OicjFsz9Eaqz1XMOuZ1ckGOqUBtX%2Bv9wXC3jKKkMPIC7p4OOyjg3gNWq4MvADm9OdYpYy8TWXeQ4L9mW7x4azIoOJ9nrZgnXNMyo6Cx9WXpFmSPPfxeZ1S62IZNtjQuY8g7c1WaTtqJKTh5gZZGwhag3oNMG0F6TcScC4naQjWV6enOffkucxDWKjYEmZk04mDaumGlZgH3pXiL0Y%2BWp8ZuOKh9mXkRLXt0n%2FDsmySU5zYyMs3Kuj3&X-Amz-Signature=308cfa3408d32e9dd0dcee5be1c325a2a6b70817a6a326b0b817e7f6f47341b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZOPJMM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvS3mchdH9ljKRKq3hLCtRILhKXpcjdqf6lh8oIkJSJAiEAoSWpm9ArmT2NKkxX2u7mafaj5jgvRVuJx2aAN5bFtKwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfLgciX3W%2F3IPv%2FdSrcA5ocs7XWszAVpm5mgM17stDntAWalD%2B7wEeH4n1a2Zb5mTBWs10vxCljjVcxbSp9uhVf5XT9Y3FOwEZObRs2NZ2Dc9KRuTqaM%2FtC2EVIm2YUBSuR3R0nPt%2FnbNBPhNb4zeodtxM%2B6br0Tp8u7W3WGt%2FumY53QV2myp%2BAx6FIrNoExPNNmLkdMPCMWsjT%2BlobI5sPH%2Fybb34ZJKmVufxI44gTcwnRJ%2FYdqk%2Fc%2BlKAwgVaidfOPPcUOgZJNfKhD91evZ51O0Bzt3ExNJH0%2Fl28kIISqFjd%2Bqu9vqoGEJcPB7md4JdrK1C4FJ2mLTcRlgMvJ9aHFPzD3eQ6hJS%2FLvCEPQp%2FcPUeMAMIGkdC2Yoo9dPkMxbnOmRMivaRL4txWEWK9x2AZO%2BbHQCa6Y0y9GQRDLutdSNBJSojH%2FR2XUHv4gMl4q3M6LM74V1tqYM1ooLqNLB5iq3x67TLA8AqMG%2FZjtwPyeQOTTG4KsmYCgRZHx8bug47di8dBkqkLg8g1jKFFUSmbgoRrJFQkySe%2Fd3UKFVXkzY9nI2ZW7BZReR3rEfv4gTCDzWXCE7HkPkvgxmDXqtC5aPC7VHJHZbLuzR6XfMTG8QevgZoaiDiOS5aMNeNa0OicjFsz9Eaqz1XMOuZ1ckGOqUBtX%2Bv9wXC3jKKkMPIC7p4OOyjg3gNWq4MvADm9OdYpYy8TWXeQ4L9mW7x4azIoOJ9nrZgnXNMyo6Cx9WXpFmSPPfxeZ1S62IZNtjQuY8g7c1WaTtqJKTh5gZZGwhag3oNMG0F6TcScC4naQjWV6enOffkucxDWKjYEmZk04mDaumGlZgH3pXiL0Y%2BWp8ZuOKh9mXkRLXt0n%2FDsmySU5zYyMs3Kuj3&X-Amz-Signature=b61de1816398c334269547f1a7114bc60d45d4980c154c47ea7f8861e1c6c5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
