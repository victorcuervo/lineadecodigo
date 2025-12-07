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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZVY5VY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B7%2B3qwb4I%2FhWLLj%2Fuw2L49tknGg5U5bpVUFbOhzvdAAiAulLjgv0F6MYvWrfLlF42f8E7K1fytb8Z1mNCms65gZiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0nS9r9kAYKpDZ%2FRbKtwD33hFnNa9nMjh9ranZJooY39nPfVrKtJxWvzMOZCWM2tJpnJpTW2JVGPt6rbGhvEqVcGsSXW13qiZyNZz2xcHyzuBBte5opffCuehpFLp2yCtgVw6t40SBAN7rv7xmWCg4mq99cTkoYYqomsQbgYInGzfF2pNv9RuawxWJoEaRYLbMCjUhvW5uC847%2BsjDpH6cZtexc8y%2BZsTKVl%2BAGBcxCegY9J5Zfup1%2FpJlYGv7Ay8Dwygni4%2FYFnaa5Tris5QXX1Ccmwh%2F4zIdt4fuo9YU7EAy87PB2%2FLDE65FnSJEiqAKVfWrUDENp7HR0zsVSRFLGeB4BPzE8EQlWsH6xqaXl%2BWp6hjlf2qdnnzyQKv%2BTiLmmvMNcnLLf5UmpicnBDxCNN%2FYmj8wEfONiSn%2F4IPp8WXOTv356pKPptjuWQseOHTy%2B27xTGtQ78kV%2FJKiskWxKFqK6ml4smbTH0fgxma28%2F53BYxL9azv24gHVgCawmD%2FC%2BhgYMd7gwGLqWZWPVMKhBUihpEp5WHb%2FX7GaZqs3r106D5rHBiPcWxYjFCaV7GAt6PwPp3uMTj6R3Jk8pJgc%2B7r7USP%2FhpoSQWj63Wi%2BkCQk%2BJGt5fY6NULKauoIGB5%2BBpNGgmMWhjmnAwrZnVyQY6pgFJEZ7nJnztR2csyI3JIPPTtrOsJVYBSI2cZxd1NLKzQvlnZbPWZbuFvJ3pbBZ4QUU3dldDWhrZX5vvJ9%2BoQfqurHVnl%2BFZXvDwSoi%2FftpD%2F1TSa7AYSjAUEQbyu4oYAC4JrqVAkw5cPwgxX5eBkyrTmXPeloMlmchubFVmJ743XSFo3xoWvDWUTQOkWZxf6szEGO7Ol%2FxoHzIP21HXS9XRPrgvFIQq&X-Amz-Signature=29be6b3eebe422ac588b3f059f7e50ae4179499b21b5c980d6bace4b086d34ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZVY5VY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B7%2B3qwb4I%2FhWLLj%2Fuw2L49tknGg5U5bpVUFbOhzvdAAiAulLjgv0F6MYvWrfLlF42f8E7K1fytb8Z1mNCms65gZiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0nS9r9kAYKpDZ%2FRbKtwD33hFnNa9nMjh9ranZJooY39nPfVrKtJxWvzMOZCWM2tJpnJpTW2JVGPt6rbGhvEqVcGsSXW13qiZyNZz2xcHyzuBBte5opffCuehpFLp2yCtgVw6t40SBAN7rv7xmWCg4mq99cTkoYYqomsQbgYInGzfF2pNv9RuawxWJoEaRYLbMCjUhvW5uC847%2BsjDpH6cZtexc8y%2BZsTKVl%2BAGBcxCegY9J5Zfup1%2FpJlYGv7Ay8Dwygni4%2FYFnaa5Tris5QXX1Ccmwh%2F4zIdt4fuo9YU7EAy87PB2%2FLDE65FnSJEiqAKVfWrUDENp7HR0zsVSRFLGeB4BPzE8EQlWsH6xqaXl%2BWp6hjlf2qdnnzyQKv%2BTiLmmvMNcnLLf5UmpicnBDxCNN%2FYmj8wEfONiSn%2F4IPp8WXOTv356pKPptjuWQseOHTy%2B27xTGtQ78kV%2FJKiskWxKFqK6ml4smbTH0fgxma28%2F53BYxL9azv24gHVgCawmD%2FC%2BhgYMd7gwGLqWZWPVMKhBUihpEp5WHb%2FX7GaZqs3r106D5rHBiPcWxYjFCaV7GAt6PwPp3uMTj6R3Jk8pJgc%2B7r7USP%2FhpoSQWj63Wi%2BkCQk%2BJGt5fY6NULKauoIGB5%2BBpNGgmMWhjmnAwrZnVyQY6pgFJEZ7nJnztR2csyI3JIPPTtrOsJVYBSI2cZxd1NLKzQvlnZbPWZbuFvJ3pbBZ4QUU3dldDWhrZX5vvJ9%2BoQfqurHVnl%2BFZXvDwSoi%2FftpD%2F1TSa7AYSjAUEQbyu4oYAC4JrqVAkw5cPwgxX5eBkyrTmXPeloMlmchubFVmJ743XSFo3xoWvDWUTQOkWZxf6szEGO7Ol%2FxoHzIP21HXS9XRPrgvFIQq&X-Amz-Signature=17f6ccdcc08aa942b74986e7ae57ff00fbd659b5319fe50cdea5730021e9ce68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
