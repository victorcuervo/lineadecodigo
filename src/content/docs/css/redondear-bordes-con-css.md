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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZEMJV5C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVapnQjpfxaUVeDE3yy8Y7prpr95i%2BWFLGKCflHfWA%2FAiEAizYVnq8csn2nhpXRAT4IG%2Br%2F1EOZPjTvc27rZUFwH1UqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhnM2SUJY%2B5Q5jT2CrcA3%2FiZQL8g4vIf1eugYzsWf%2BFVfQip%2BqRQmFrwnoUAp3yU6UYe%2FncIic2%2FPCWDiL%2FhicnXvcmLqxmK34h4APyGkIDfa9RsUU2A7TUW6HHYTxDQZ%2BM7AizrhYG4J%2FCdyL2oWudqx0FzjL4iKkn8LGVzqcctJdTLUULlDfrGvfsKxSsAO7UleWYgz0kPs6BT3e5ukln2llMZZ7%2BAgKhiyRE8J2RMK8RvKCXxXX0sa5bxztmAft%2F6D6WfISXhPAv58IMHl0%2B4GMS85nf14gMVsXb13u46oYrXRrwxTOECMnwDMarJMTfpHRLKLfUorcfQYAxhuCMN1XR7%2BMheBCrZU9yZzAgyFS4pYAvDFtgyuhNIjuq8xkXqTEc54hENAlJWyGNXEBfRDHuojIK9jALVkN4l8c6glCPR%2F8fqUAe0jqu0C9BWF9fsX6VKrXTB5seWza53T3D4C5ITg8p7JkWA6YE7NSLHwZwCK%2Bg4keKOA6tRQEr6z3yOrJxpOJit0gyWtRXk86%2F%2B2zDqkKi1oDYKMc2AzjeiVU0dRvtWktunpvH15tM%2F%2BfTR73FBjY8xT0tg2uhwD6VQD%2BG0yqqKGgrt36xxatSwfGE%2Fbc8jbMnr9EsF2Tw5ZwV5J2kr%2FBa2dXlMLCH38kGOqUBxhxdwA8bEH2YBPbDmxFk7ZrRqrHowneZ4bVyvxu1WLgyAolSPxtbkdd175B0gTch54ce2hr31v10bYZt9600dDt71pDgYqIspKNYYWvmvjWRCR%2FT1CaN2ztQPOW8PSEE2xv5NRxqbKOKDlC5ZvrtdzPRtKMN5tuk1dUYWuPhTickuhSbLojbSouAk1OlSNhm%2FKmFupzZwm6Mo25akWa%2FL9P2Lgv3&X-Amz-Signature=fb9a28dbaf19304c47d00fb1a31cbbaf385a5daa6c2a132577ce416d977ebf46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZEMJV5C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVapnQjpfxaUVeDE3yy8Y7prpr95i%2BWFLGKCflHfWA%2FAiEAizYVnq8csn2nhpXRAT4IG%2Br%2F1EOZPjTvc27rZUFwH1UqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhnM2SUJY%2B5Q5jT2CrcA3%2FiZQL8g4vIf1eugYzsWf%2BFVfQip%2BqRQmFrwnoUAp3yU6UYe%2FncIic2%2FPCWDiL%2FhicnXvcmLqxmK34h4APyGkIDfa9RsUU2A7TUW6HHYTxDQZ%2BM7AizrhYG4J%2FCdyL2oWudqx0FzjL4iKkn8LGVzqcctJdTLUULlDfrGvfsKxSsAO7UleWYgz0kPs6BT3e5ukln2llMZZ7%2BAgKhiyRE8J2RMK8RvKCXxXX0sa5bxztmAft%2F6D6WfISXhPAv58IMHl0%2B4GMS85nf14gMVsXb13u46oYrXRrwxTOECMnwDMarJMTfpHRLKLfUorcfQYAxhuCMN1XR7%2BMheBCrZU9yZzAgyFS4pYAvDFtgyuhNIjuq8xkXqTEc54hENAlJWyGNXEBfRDHuojIK9jALVkN4l8c6glCPR%2F8fqUAe0jqu0C9BWF9fsX6VKrXTB5seWza53T3D4C5ITg8p7JkWA6YE7NSLHwZwCK%2Bg4keKOA6tRQEr6z3yOrJxpOJit0gyWtRXk86%2F%2B2zDqkKi1oDYKMc2AzjeiVU0dRvtWktunpvH15tM%2F%2BfTR73FBjY8xT0tg2uhwD6VQD%2BG0yqqKGgrt36xxatSwfGE%2Fbc8jbMnr9EsF2Tw5ZwV5J2kr%2FBa2dXlMLCH38kGOqUBxhxdwA8bEH2YBPbDmxFk7ZrRqrHowneZ4bVyvxu1WLgyAolSPxtbkdd175B0gTch54ce2hr31v10bYZt9600dDt71pDgYqIspKNYYWvmvjWRCR%2FT1CaN2ztQPOW8PSEE2xv5NRxqbKOKDlC5ZvrtdzPRtKMN5tuk1dUYWuPhTickuhSbLojbSouAk1OlSNhm%2FKmFupzZwm6Mo25akWa%2FL9P2Lgv3&X-Amz-Signature=6fe95ed2fa94d9bdcb8768d08a7a384c6a907ef96e1a4aa40c6afe7759c6f0d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
