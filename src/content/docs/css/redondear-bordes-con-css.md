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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W7BF7QF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BVKs4rJG0OwlCjH72LheNrddDhTMN03WtKTSoAj8z8AiBaxOhKYutEsBKMGGI0nlvsX0fVRPZG%2BdCQ9jQsLjhzsyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMeXSyPP2yFd1XJURKKtwDjvfK0Fx2NGO0Uj9vGR90SpeK9OS3YPEqDUzsrLcqd7CbJLBZwGg7ahe5KXjL%2F1QIf%2BjVu4DoTanGXPPcKDVAsM2bM2XCXH07n27xxXBTMdy5ZumatSfkzM04GM%2B%2BPKCEGCCfTCFiuXp3LAKicrtTc3BJx0B9hmXhDibdZn6dbZGlt9N7ec8hK9eCXIkjjW8V40W71%2FwKu5Z5EtC9gNmYUf3YvED5EPwuD8InJjRRSpUz%2BsLteFaf7IQQEW28dpHXO3Qe74%2F4veCQu6MYpvlLaV4TXZ%2FQ60%2FRs6lZ%2FL%2BSNBLh%2FaVHkrMDK2yJGjAmBkFaS8h53ad%2Ff6bMBDAcCB5V36gnt0aeMAYHX9tA1U%2FV%2BwU%2FYfQeAc5Llq8BoDi31qRGKvEy56iBunJCJ8dRTQTZH5dlwwFoI%2FQFCClK5RBbSCsEPbxCZplmy1r8WddAib32vWigbux1r5OLxZ2DPYpwSA5w7OUbnXme%2F6VM%2Fw5pHWKWwFkVY1IR9gUEaDMgNct1rukPGxGlJSwaRSX84EpIOw%2B%2F%2FkA%2FygyZHt7n2w182tc04Dm0w5T9EE%2BPmWsW%2Bq0fTeU%2FzTCv6C2yv8O67SJVmMzyDF1P2pWoM8OM1fkWh3a3oKh6bgwaGe0fnkMw4KfOyQY6pgEUWFCw48sRCfgh02lGWAbzTj5TSiChdO0yd39lEPdVP2FCPi1iLIGpQlAYzZ1pHSPf91uk%2BNZ5ZXhRnxOkA5AN24RjkiU8ZMacyH5t%2Bk8TXKwKcGU7J7imt6ni%2FSjVxPC0uW4%2FbfKJfpm3cl9W42ZKlqtoqbt25bZViKI2lb%2B41lZLCxUtJBjD7rtVM450VjHksMMmPHqfUiQDHmZYHzJU0TZCSAVU&X-Amz-Signature=0ba1eaf50af5f135412e256e6372d8df20e01378eb82a906638d8cd455db9f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W7BF7QF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BVKs4rJG0OwlCjH72LheNrddDhTMN03WtKTSoAj8z8AiBaxOhKYutEsBKMGGI0nlvsX0fVRPZG%2BdCQ9jQsLjhzsyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMeXSyPP2yFd1XJURKKtwDjvfK0Fx2NGO0Uj9vGR90SpeK9OS3YPEqDUzsrLcqd7CbJLBZwGg7ahe5KXjL%2F1QIf%2BjVu4DoTanGXPPcKDVAsM2bM2XCXH07n27xxXBTMdy5ZumatSfkzM04GM%2B%2BPKCEGCCfTCFiuXp3LAKicrtTc3BJx0B9hmXhDibdZn6dbZGlt9N7ec8hK9eCXIkjjW8V40W71%2FwKu5Z5EtC9gNmYUf3YvED5EPwuD8InJjRRSpUz%2BsLteFaf7IQQEW28dpHXO3Qe74%2F4veCQu6MYpvlLaV4TXZ%2FQ60%2FRs6lZ%2FL%2BSNBLh%2FaVHkrMDK2yJGjAmBkFaS8h53ad%2Ff6bMBDAcCB5V36gnt0aeMAYHX9tA1U%2FV%2BwU%2FYfQeAc5Llq8BoDi31qRGKvEy56iBunJCJ8dRTQTZH5dlwwFoI%2FQFCClK5RBbSCsEPbxCZplmy1r8WddAib32vWigbux1r5OLxZ2DPYpwSA5w7OUbnXme%2F6VM%2Fw5pHWKWwFkVY1IR9gUEaDMgNct1rukPGxGlJSwaRSX84EpIOw%2B%2F%2FkA%2FygyZHt7n2w182tc04Dm0w5T9EE%2BPmWsW%2Bq0fTeU%2FzTCv6C2yv8O67SJVmMzyDF1P2pWoM8OM1fkWh3a3oKh6bgwaGe0fnkMw4KfOyQY6pgEUWFCw48sRCfgh02lGWAbzTj5TSiChdO0yd39lEPdVP2FCPi1iLIGpQlAYzZ1pHSPf91uk%2BNZ5ZXhRnxOkA5AN24RjkiU8ZMacyH5t%2Bk8TXKwKcGU7J7imt6ni%2FSjVxPC0uW4%2FbfKJfpm3cl9W42ZKlqtoqbt25bZViKI2lb%2B41lZLCxUtJBjD7rtVM450VjHksMMmPHqfUiQDHmZYHzJU0TZCSAVU&X-Amz-Signature=9b64cce19625a5190d444825916e875935a54583dbbea610d42442a583c26cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
