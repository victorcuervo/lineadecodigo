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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJPKSDJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB12aPM6y5eOjo9Cx%2F3Td3tpUKoLd6Ho%2BahLKTjBwVTKAiEA2SO2r0smbKqZMdsJC8DFwJFEP80O9LoEez1BGnNu%2FGkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM0yNS%2B%2BiImSrkO4CrcA5k%2Bce%2FFLZdciQWWcjVlIAcH07H9NHC6A2ebF25qmYcM2SGD9ocgzux7yfjYel1x8OwCYLFL%2BXeSfu9ABSKRqP7A152K7IY2ynNwxnZon03Fu9z3jT%2Bnh%2F6F3DXxcSqdbe06c9NCcs%2B%2FUhY4Jcrm%2BlSezBttGASHH5OWwqutA%2FJ9cHEsDUO6ZlFZOMGVPi0ZeIvqk8sMEn8LF57K%2FdvTVlbrn3UJwB4ujn%2BFnZagnxQ0TLdfEvlDw1iOZWfrRCkGN34DE2FZ7P5De3%2Frx1CtrnvB5V8XlfQAmAKZIQhtpOh0u6mNWOG9drJpBVKGRnCVqdJTKe5IVCQidoCIpIhiYdj9wDNql6HCGTIkXAhPHEE6tjjdihS5GAeCSiUADLPXK7UfrPr0gTtXFMlIqVNofQDAJiqgDyq%2Brm6JdETeb7I9bKqC2DpcCqyk4sw8iYayT32A0b1gNQdD4r3OJcesWqEtQkVR1PpOhKFWBgjPChwg8ytvqpVg%2BvFuOpmwvQi0HpOa8EO2rOLgLf%2BzQNwy497MReB%2BZv7Zq%2BW3HpV3h6Q6Pk0asMvcDQxnxDYYJ5tAcxh9vLC5KaUC%2BegSrR3EUMqr2h%2BrXj9o6kmyCnX1WMuD4Z2fm5y4BG0K0WQrMMua1ckGOqUBVMrpY5i3m3DDiake0LTtiq2D5ckcdaoenTRFLJNqDWkEhMVOKydf%2BCtzQkXy41%2FIuBxbITgQA%2FFz2mr37vMHLjdurGnROcuk3ArZvjRDIu8nBdzeoJSmokZ1caCZ2bAHoV1NNCOTfX4bHIoybaqZKp2jsdmBCR9ZvKcLYJvDzuvhFl13Pt51iLxieaGdQ3lrUpwt7USPkPFayAkOuyzn7eMXf3%2F%2F&X-Amz-Signature=9b4b80c34f4cc287f91eae03deb4d3dc5cc779614ae3e0dfa7ce5c226f37c7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJPKSDJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB12aPM6y5eOjo9Cx%2F3Td3tpUKoLd6Ho%2BahLKTjBwVTKAiEA2SO2r0smbKqZMdsJC8DFwJFEP80O9LoEez1BGnNu%2FGkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM0yNS%2B%2BiImSrkO4CrcA5k%2Bce%2FFLZdciQWWcjVlIAcH07H9NHC6A2ebF25qmYcM2SGD9ocgzux7yfjYel1x8OwCYLFL%2BXeSfu9ABSKRqP7A152K7IY2ynNwxnZon03Fu9z3jT%2Bnh%2F6F3DXxcSqdbe06c9NCcs%2B%2FUhY4Jcrm%2BlSezBttGASHH5OWwqutA%2FJ9cHEsDUO6ZlFZOMGVPi0ZeIvqk8sMEn8LF57K%2FdvTVlbrn3UJwB4ujn%2BFnZagnxQ0TLdfEvlDw1iOZWfrRCkGN34DE2FZ7P5De3%2Frx1CtrnvB5V8XlfQAmAKZIQhtpOh0u6mNWOG9drJpBVKGRnCVqdJTKe5IVCQidoCIpIhiYdj9wDNql6HCGTIkXAhPHEE6tjjdihS5GAeCSiUADLPXK7UfrPr0gTtXFMlIqVNofQDAJiqgDyq%2Brm6JdETeb7I9bKqC2DpcCqyk4sw8iYayT32A0b1gNQdD4r3OJcesWqEtQkVR1PpOhKFWBgjPChwg8ytvqpVg%2BvFuOpmwvQi0HpOa8EO2rOLgLf%2BzQNwy497MReB%2BZv7Zq%2BW3HpV3h6Q6Pk0asMvcDQxnxDYYJ5tAcxh9vLC5KaUC%2BegSrR3EUMqr2h%2BrXj9o6kmyCnX1WMuD4Z2fm5y4BG0K0WQrMMua1ckGOqUBVMrpY5i3m3DDiake0LTtiq2D5ckcdaoenTRFLJNqDWkEhMVOKydf%2BCtzQkXy41%2FIuBxbITgQA%2FFz2mr37vMHLjdurGnROcuk3ArZvjRDIu8nBdzeoJSmokZ1caCZ2bAHoV1NNCOTfX4bHIoybaqZKp2jsdmBCR9ZvKcLYJvDzuvhFl13Pt51iLxieaGdQ3lrUpwt7USPkPFayAkOuyzn7eMXf3%2F%2F&X-Amz-Signature=366e2cf4f5d65f1b7e1542931590175be089ee30fdb8943a3ddff3efb1e5d2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
