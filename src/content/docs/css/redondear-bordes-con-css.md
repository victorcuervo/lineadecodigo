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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KNELGL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvmm8%2F1fjD6bRQgaaDABjcCawylmSpiutPMNChw1XTeQIhANmJRN%2Fqbh6dF36W5vXo7DHijtrhFxCLZjrd1I8Fe0XVKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZwJS7RTrP%2BhC8fPcq3AOcddEgcsfy3tCf4nv7keCLg72oOKKL7MYBa2PjbJH1j4MWye8VGigtrQhS9Yy1NIaanu5fOEIU5U1VwuOFG%2FcBpgBilyN%2FvUV7pM%2F6baN9olpNE%2BSk8kj6HStRnDPPqru1xpdZ2yIifveWLszyJU%2B%2Fgqg6ot5lPbgxKgilxeLvnGY%2FZH2cEBPg%2BrQ4ngfmm0Iz0Lkz7i12uMH1wGWQ80OD3s7isJ8iicP9qB2yb77xfXfdHx3yphAeRIXYmLVv%2Fmfh%2FZ8MKhRLY9QgFC9rpgZd%2B7R%2BqoDobHhmBUod7Xuk2WFf8%2BzY3MDFCDbgsx7fFLhhS08%2BFOhWojNRp24wxFxL7q3SYbtz8PW81LlBvIxfohTh%2BckaZCYq44f%2FgpsqNU%2BG17iqxqdYuETqWQE0V74AXd0i7o%2B727e5ejJNXMt1jNer5PiPpeLettKGDnkitWKL1Zp8endeORxRVXook%2F0B8S3V9ZpHD56jfsuBEzB4PmNPhscuFQN6mnDJw3%2F24vUHj6%2BpVG4%2BxBTpT%2BzOlW%2Ba2j019zl7ndMRER%2BTwzvZQx4QsSjEJusyjrIlW2ZznQgfXtNWqwtmPvOsa%2Bf5IckuPZtK9dCZIcmL3SCLTFDMDTVjWkeqaovRPTyAJzCcodjJBjqkAQdyIwfJWof3rsCsP3dFC04mHMCqI%2BJ%2BoKCbcfLkl%2Bwk6yHMmdAcvvA%2FDK2cbzN4McGYuZBrr4Rxw6l9i3Ujb33Q%2FAYSOWHujDWZDZVR5IaDAoxhJjWNGT3BjFPoy78xOfZ3liNqUiFkQ1kq0CmDvH86081cT1NbqVcv66BSaQpASHY7XN5P6fDELqHKlfBwY%2BTA5VqR3XuA8gOpgm%2BTcToLahyt&X-Amz-Signature=d6057f62ce76d65d35d246383df24525d9553d817e0762114e45bf71d7c09ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KNELGL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvmm8%2F1fjD6bRQgaaDABjcCawylmSpiutPMNChw1XTeQIhANmJRN%2Fqbh6dF36W5vXo7DHijtrhFxCLZjrd1I8Fe0XVKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZwJS7RTrP%2BhC8fPcq3AOcddEgcsfy3tCf4nv7keCLg72oOKKL7MYBa2PjbJH1j4MWye8VGigtrQhS9Yy1NIaanu5fOEIU5U1VwuOFG%2FcBpgBilyN%2FvUV7pM%2F6baN9olpNE%2BSk8kj6HStRnDPPqru1xpdZ2yIifveWLszyJU%2B%2Fgqg6ot5lPbgxKgilxeLvnGY%2FZH2cEBPg%2BrQ4ngfmm0Iz0Lkz7i12uMH1wGWQ80OD3s7isJ8iicP9qB2yb77xfXfdHx3yphAeRIXYmLVv%2Fmfh%2FZ8MKhRLY9QgFC9rpgZd%2B7R%2BqoDobHhmBUod7Xuk2WFf8%2BzY3MDFCDbgsx7fFLhhS08%2BFOhWojNRp24wxFxL7q3SYbtz8PW81LlBvIxfohTh%2BckaZCYq44f%2FgpsqNU%2BG17iqxqdYuETqWQE0V74AXd0i7o%2B727e5ejJNXMt1jNer5PiPpeLettKGDnkitWKL1Zp8endeORxRVXook%2F0B8S3V9ZpHD56jfsuBEzB4PmNPhscuFQN6mnDJw3%2F24vUHj6%2BpVG4%2BxBTpT%2BzOlW%2Ba2j019zl7ndMRER%2BTwzvZQx4QsSjEJusyjrIlW2ZznQgfXtNWqwtmPvOsa%2Bf5IckuPZtK9dCZIcmL3SCLTFDMDTVjWkeqaovRPTyAJzCcodjJBjqkAQdyIwfJWof3rsCsP3dFC04mHMCqI%2BJ%2BoKCbcfLkl%2Bwk6yHMmdAcvvA%2FDK2cbzN4McGYuZBrr4Rxw6l9i3Ujb33Q%2FAYSOWHujDWZDZVR5IaDAoxhJjWNGT3BjFPoy78xOfZ3liNqUiFkQ1kq0CmDvH86081cT1NbqVcv66BSaQpASHY7XN5P6fDELqHKlfBwY%2BTA5VqR3XuA8gOpgm%2BTcToLahyt&X-Amz-Signature=879733c8c862389a0dfa8383ca0713a63d63578ce9980c8b2532a80feb8f2a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
