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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6K6YMP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCShX%2FEi1hoB8DXAVXZc4CYE%2BxiCTvavcUsNU7oNryMEQIhAKaA0kdAG8Ijw44JTMA5qlAvVUWhvKEocpcwlA9FV%2BVNKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8%2FfA5MTaz9Pz5uYq3AMhIRSAlgWRNhLD82hvL%2B0asB6l5lfTeewBwixKVTpDdVy%2BKrjGmCOcusRw88uz2YAO31o%2B%2Fhz5Z9jbuSamAR6lFIcBmU7GTxDfU6dYkuwJJ2GN%2FJt0biSV9NDO5EngTqGm1Cx%2FdFlXLR93AbzHKeqstHUDw7%2F%2BEmcEy3W7Gs1z7qYYkZVeRrf5IfSwmOBLECQraEFF5ngihJ3AQaKN4U5E9P%2Br8BJUgDVe%2Fu0%2BBhRd%2Bjn0H%2BkKPhmdnLvjWlPBGjSrem9eqkepT2Tqh%2FvtfBsDnAvM4YCFXxbnxnwqxYLCWu58TfbS1amGdwDfqb8%2F1syYUVoDQSm2BhufCqLeD3kC54%2FU8Jwva5ulHN7X3WQogLa9%2FBj9bXNajf72khnt14QondtDT%2F5x0iB%2BCp0o7oaoxdq9ejR7%2F0CNFinOvYyIZrVl9tqKPK3tFZECB7KZbH2P%2FbmOSQip8ORQwtTDa3DfHVAMjch0Qrp5LM51Y9zFJXAVQG%2FRzgqc73sfiKw3Wj5DtPe%2BEMosIcUc08%2FnqEjbj71vlE0HN8yaqhhAAEVyrmoBi1z4OOa4X4Wdd%2FbvuddGE%2B01FXZZ2J3z2YokLbo7ITJOl9cOA2UPZdZLFWaNElXNFGcQ2gTtarR%2FPTDg09jJBjqkAZzfmmQ3x%2BZAiuTGfXaGNidTZUFT3ts78ahDcpbhrDjRW%2BD644P%2BuZK6t1K6K2TG4%2FGGYbERInv5%2BqWIishxU9JQDToJuBa73uaCse%2BYkUOm3sEnMPYshKRWwUvnj6%2FFnnofaLBPxKitxyZ2nX9ShPYg%2Byu4u4V0gAYsKZQRDXcxssauT6NOcBbbmhdHm5I06iHGbgQxhbNcXxtoqqOieAfal1PQ&X-Amz-Signature=5989daeaf413e7d73dc1a29aafd3954735ce3c362ca8fe5b96eba76fd23e5693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6K6YMP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCShX%2FEi1hoB8DXAVXZc4CYE%2BxiCTvavcUsNU7oNryMEQIhAKaA0kdAG8Ijw44JTMA5qlAvVUWhvKEocpcwlA9FV%2BVNKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8%2FfA5MTaz9Pz5uYq3AMhIRSAlgWRNhLD82hvL%2B0asB6l5lfTeewBwixKVTpDdVy%2BKrjGmCOcusRw88uz2YAO31o%2B%2Fhz5Z9jbuSamAR6lFIcBmU7GTxDfU6dYkuwJJ2GN%2FJt0biSV9NDO5EngTqGm1Cx%2FdFlXLR93AbzHKeqstHUDw7%2F%2BEmcEy3W7Gs1z7qYYkZVeRrf5IfSwmOBLECQraEFF5ngihJ3AQaKN4U5E9P%2Br8BJUgDVe%2Fu0%2BBhRd%2Bjn0H%2BkKPhmdnLvjWlPBGjSrem9eqkepT2Tqh%2FvtfBsDnAvM4YCFXxbnxnwqxYLCWu58TfbS1amGdwDfqb8%2F1syYUVoDQSm2BhufCqLeD3kC54%2FU8Jwva5ulHN7X3WQogLa9%2FBj9bXNajf72khnt14QondtDT%2F5x0iB%2BCp0o7oaoxdq9ejR7%2F0CNFinOvYyIZrVl9tqKPK3tFZECB7KZbH2P%2FbmOSQip8ORQwtTDa3DfHVAMjch0Qrp5LM51Y9zFJXAVQG%2FRzgqc73sfiKw3Wj5DtPe%2BEMosIcUc08%2FnqEjbj71vlE0HN8yaqhhAAEVyrmoBi1z4OOa4X4Wdd%2FbvuddGE%2B01FXZZ2J3z2YokLbo7ITJOl9cOA2UPZdZLFWaNElXNFGcQ2gTtarR%2FPTDg09jJBjqkAZzfmmQ3x%2BZAiuTGfXaGNidTZUFT3ts78ahDcpbhrDjRW%2BD644P%2BuZK6t1K6K2TG4%2FGGYbERInv5%2BqWIishxU9JQDToJuBa73uaCse%2BYkUOm3sEnMPYshKRWwUvnj6%2FFnnofaLBPxKitxyZ2nX9ShPYg%2Byu4u4V0gAYsKZQRDXcxssauT6NOcBbbmhdHm5I06iHGbgQxhbNcXxtoqqOieAfal1PQ&X-Amz-Signature=ecf98f8118a2e3dc183c203fc99364894753ffc587592f02df13059110a358b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
