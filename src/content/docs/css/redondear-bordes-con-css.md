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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSE7MPH6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEuBflCel%2BiZSeiFkSuZa0j5LoTqSEPO7qtdVHSej45AIhAIhj2lhiJydNRp9UidcnerS38yfRGT8%2F%2BMGlbDx83FtjKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw6sPWAeGXrDjM8oQq3AOYijLynpoBpZlapN159NQmi0KX7W4h%2FB5BGBVv210ICfIPyzjyugUIgtBljOolUgeJmZjt1w%2FqrR9gp0K2WKwRZL6THm8DDnH7vUrIo3oPb2uHB68coIBeeAp%2B1HGFx6XJm58uRZ25MfRPWUapeJbWy1azsbmsaFp0MRQLzxoE7TjrsK7Yh2nsU7Ms0VAl%2Bh1eJHEXQXWPEfH5DLyMDRsk5c1H7EJui8V0ZnSKtCRW27Pke3boFpywmyA5qNqVrJ2LWoZJAvMQj%2Ba%2BvxtvWqFljm%2F7t8R40bolgrsoJ7sXgDQic1%2F8%2F7obb93veqVD%2Fhaz%2FtCpdfKZWNn8Dqa5DrUaCd6ibtIpX%2Fzaiij5kD%2BDpR%2Bi1WEEB6P3s8T5wZF%2F%2BU4gIR%2Fa4jiwj7owgHTxYHjKTBy24xjs%2BrqTYskzFQMFlUO5gfurkwC06UOoZe3H62VALnhUt9NZfdZOD122egF6ZsQvZ0HeGWHUEyOz6jzYbT4abxyjs66kWVxeMHxp39w%2F4BiVtd3orse2IwKhJlBkEKHhyz0xBgoFAwWthEHK1G%2BY0qcj1a5aXrTiaz57iGGr%2FxJA%2Fg5y2Jpw6vfWafAVQDc4Qpfco1ZOywkXgOKJM9w0rJUgobhXBa2AZzCYmdXJBjqkAXbrJOPxDlsrnQBZOgSTDYgdI7W%2FPSOSaCjQuwa0lWb%2FcpgKh%2BV1QS%2Ff9HF20n4uFGJeq95XdiD%2BGpvcWiQf5cVh%2Fa7RqG4JzbTkGYgBib4h0s5DFhfQw9Wvm2yMRIC%2FSmr6Qi7Hf8rwCnnzFErrvUb84jv%2BNh7Y8mTseCR1L4DeMp%2FtnjUUVGh%2BEv6I2yoQ0hwgxH8e30X%2FtFskW%2B1rNWSl9M72&X-Amz-Signature=ea669d33debee38551ddd150d0caceec337ffe17bab8b4605d8e2e75b79ca623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSE7MPH6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEuBflCel%2BiZSeiFkSuZa0j5LoTqSEPO7qtdVHSej45AIhAIhj2lhiJydNRp9UidcnerS38yfRGT8%2F%2BMGlbDx83FtjKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw6sPWAeGXrDjM8oQq3AOYijLynpoBpZlapN159NQmi0KX7W4h%2FB5BGBVv210ICfIPyzjyugUIgtBljOolUgeJmZjt1w%2FqrR9gp0K2WKwRZL6THm8DDnH7vUrIo3oPb2uHB68coIBeeAp%2B1HGFx6XJm58uRZ25MfRPWUapeJbWy1azsbmsaFp0MRQLzxoE7TjrsK7Yh2nsU7Ms0VAl%2Bh1eJHEXQXWPEfH5DLyMDRsk5c1H7EJui8V0ZnSKtCRW27Pke3boFpywmyA5qNqVrJ2LWoZJAvMQj%2Ba%2BvxtvWqFljm%2F7t8R40bolgrsoJ7sXgDQic1%2F8%2F7obb93veqVD%2Fhaz%2FtCpdfKZWNn8Dqa5DrUaCd6ibtIpX%2Fzaiij5kD%2BDpR%2Bi1WEEB6P3s8T5wZF%2F%2BU4gIR%2Fa4jiwj7owgHTxYHjKTBy24xjs%2BrqTYskzFQMFlUO5gfurkwC06UOoZe3H62VALnhUt9NZfdZOD122egF6ZsQvZ0HeGWHUEyOz6jzYbT4abxyjs66kWVxeMHxp39w%2F4BiVtd3orse2IwKhJlBkEKHhyz0xBgoFAwWthEHK1G%2BY0qcj1a5aXrTiaz57iGGr%2FxJA%2Fg5y2Jpw6vfWafAVQDc4Qpfco1ZOywkXgOKJM9w0rJUgobhXBa2AZzCYmdXJBjqkAXbrJOPxDlsrnQBZOgSTDYgdI7W%2FPSOSaCjQuwa0lWb%2FcpgKh%2BV1QS%2Ff9HF20n4uFGJeq95XdiD%2BGpvcWiQf5cVh%2Fa7RqG4JzbTkGYgBib4h0s5DFhfQw9Wvm2yMRIC%2FSmr6Qi7Hf8rwCnnzFErrvUb84jv%2BNh7Y8mTseCR1L4DeMp%2FtnjUUVGh%2BEv6I2yoQ0hwgxH8e30X%2FtFskW%2B1rNWSl9M72&X-Amz-Signature=0b3b3526112fc945ef5d47b3af8ad524f7385011ec424a4c52cb788ba4206934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
