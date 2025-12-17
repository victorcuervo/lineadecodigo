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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623IOZYX2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHF3%2F0orO%2B1FRzeC2EvyQt5I%2FN2jQSfCP1ZugAb0r2OAiAUkb8MPkMkNk6jluXhwEB6Dnp6urpbWBucgJr%2FeRj8vSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmJiwMbBH3rGlIlMoKtwDKMZRbOFyvTUsSEBljgpULWeHoqZAVlhcp03InWE9%2Bo8M6uiApTDfn2jkg0Z2TRjneHTobtjuXjpyGszG4tkr9YFicJwBZeLu0g2aoNaRPBzHfZxfNDbp%2FfPyrClrf0Du4CKAzxq7BJgmmqIgGGCRNAtiyHdAEwdpKfcrMixGy8wv%2BSYpgXJrfOAE5fgZ0Mprd25omamJV8iF6CZ74hQYQopkOzrZKtss55upB3WaDf2vjTivofFslPLwEPZK1pMc%2F%2BAk2mqAUntIs9GYhKHiTG7w0Vdv9XgNqlx3vZvcmKpVFqqKuoFwOqL89F0JthZ0G1EjwbL0TTqya0Jds8uCIdi62vUof2WcmfSWT9dj9cYdEoWvS2c4Vy7pgjHq9AcQ30N9TRGCVKwbV4dRFQDoEXC1Dxif%2BuuJzD2epvaYOHJfojASCZ2mqgV7zqfW2yObRTpyQO8epMsogQAz9moWGJJ9oSKlABaXlrrUEROe94q%2F5Dt2AOTDUz705RhKG0xNapMLZiCqa%2BCxsslqYaAMM5NMhU%2BrEFjtftv1SpJ%2FGF2L0D6qtOEDIAk3EZt3FiHbnw%2Bs0qCOI2Umyp0GHUttBnQNqvS51p86IZDuSCR%2BJck%2F26ovz%2F3TVY8frDIwmYGLygY6pgHpxllniArvG9%2BYQW0ZxHJ3Am3NE4hiXDIgrt1anj%2BDJAI3GNmeYUkOlj0GR2oIxWoqdzURvlATNFoQoryNXWkpYIVLYt0b1MNdWhZLfESbh59dXOpxDRo5tLVkEIRxdqFDCERFcxnp1EdGE%2BEUgu5CxMV6DcSwJo3aILqtY44tNc0tZVt0rN7SuipWIjXzGc8I2lD3oyou6HWW3hTBkfeNQKkLYnDB&X-Amz-Signature=fdd210a820d4976a5cea398ecb0080bf40fc6de3e2cfb926a72d3f1e84552869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623IOZYX2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHF3%2F0orO%2B1FRzeC2EvyQt5I%2FN2jQSfCP1ZugAb0r2OAiAUkb8MPkMkNk6jluXhwEB6Dnp6urpbWBucgJr%2FeRj8vSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmJiwMbBH3rGlIlMoKtwDKMZRbOFyvTUsSEBljgpULWeHoqZAVlhcp03InWE9%2Bo8M6uiApTDfn2jkg0Z2TRjneHTobtjuXjpyGszG4tkr9YFicJwBZeLu0g2aoNaRPBzHfZxfNDbp%2FfPyrClrf0Du4CKAzxq7BJgmmqIgGGCRNAtiyHdAEwdpKfcrMixGy8wv%2BSYpgXJrfOAE5fgZ0Mprd25omamJV8iF6CZ74hQYQopkOzrZKtss55upB3WaDf2vjTivofFslPLwEPZK1pMc%2F%2BAk2mqAUntIs9GYhKHiTG7w0Vdv9XgNqlx3vZvcmKpVFqqKuoFwOqL89F0JthZ0G1EjwbL0TTqya0Jds8uCIdi62vUof2WcmfSWT9dj9cYdEoWvS2c4Vy7pgjHq9AcQ30N9TRGCVKwbV4dRFQDoEXC1Dxif%2BuuJzD2epvaYOHJfojASCZ2mqgV7zqfW2yObRTpyQO8epMsogQAz9moWGJJ9oSKlABaXlrrUEROe94q%2F5Dt2AOTDUz705RhKG0xNapMLZiCqa%2BCxsslqYaAMM5NMhU%2BrEFjtftv1SpJ%2FGF2L0D6qtOEDIAk3EZt3FiHbnw%2Bs0qCOI2Umyp0GHUttBnQNqvS51p86IZDuSCR%2BJck%2F26ovz%2F3TVY8frDIwmYGLygY6pgHpxllniArvG9%2BYQW0ZxHJ3Am3NE4hiXDIgrt1anj%2BDJAI3GNmeYUkOlj0GR2oIxWoqdzURvlATNFoQoryNXWkpYIVLYt0b1MNdWhZLfESbh59dXOpxDRo5tLVkEIRxdqFDCERFcxnp1EdGE%2BEUgu5CxMV6DcSwJo3aILqtY44tNc0tZVt0rN7SuipWIjXzGc8I2lD3oyou6HWW3hTBkfeNQKkLYnDB&X-Amz-Signature=9bf01d45bf6210660a3b2d0aad521a11b68eaec6f5a9994529014c501991803f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
