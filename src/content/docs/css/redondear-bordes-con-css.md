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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLZ73LZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOV8X4nBwdl6TArVu4TFy3PJOH9wtC4JCczDAYafaCIQIhAP9Slf1dfV3JExYxUfkOxf3tg2mMxayLqNTRbYfdebzSKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGqdkeJK%2FrT5j1IQgq3AMCJ8%2FBP%2BYc9DRkDX4ZtjsUGnRxybvYTplNaZPHG2PkbFaWmpj7jPeoCpdPG5EhOS1wmRlrldKUMnzEC640lrZNYuUhsn50DA16S18ScQ0ZcRSRAy%2BSnAxoOLaQ40Rk3oT5VGWt9HECVi3s5GP%2By1ln7gZrzTMwmY7rN4TpNPuU0c0E2eiI33ZSfh1xN4BaDg%2F98ggMOkf4jX8WXLE5Fhy6duv0x8FXAWxq%2BoSirTIZmUsUTdgU%2BHwG7x61aYKMDpKK%2BPUtZaE%2B8bWbv9ooAeptBc4%2Fg7viBFkhRk%2FEDcmhC3h4QscEom35vHMa0SnzHaUTODL1Sik9DFvK%2FOAOVUlMPuu1vydlyO92PIAWTeGMjpOxcf0ZWbG4dYj3HQZNHoQO%2F0AgdcKq9IGEG4vsCvXKiS9tHfIfQkSWUclwMNL02UqzivexeawB2Zjp1Flq9cU7q5mPpWxugqeJVxlrsu4XS%2FRVqQDkW1Ku%2BdOO1jC%2FHkHntWnGV0AP3PVUo6vkZvdyuNxozfexxLwR4XaOycY0Fvd%2BGOWt70zhHtFPGTLVin6egP6o6X8H13etX9%2BUd6MSabzjTpMOHxag4%2BaWtevgBDZs4nI6dh98bbCxGUXONlILFXnC4iPWUczSzzD%2Fo9TJBjqkARgl5mogkSwQ2CWXzEecH57x21%2FBgDcb3%2Bb1oWRX4%2FzqqThghh3ESPB76o2h9jbfBQXcNdWTNyBzytvfU4X38wE%2FzTXNIDYq2EWlGMwChJvfgRp30a%2FOPSghGQurDjfIDPa3vDuKOMj9WrCGjl6v%2B6RL98T4IUUK%2B1JmdT8oc5Zf3QxYEPfG7Dia49fIgtcowUH1ogZaGQ0OZSpcFLGMzmd8455Q&X-Amz-Signature=5a803cf9c95f114bcb3af63ef2defea0d5982b1055e2dadd1b4737a98b0d7186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLZ73LZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOV8X4nBwdl6TArVu4TFy3PJOH9wtC4JCczDAYafaCIQIhAP9Slf1dfV3JExYxUfkOxf3tg2mMxayLqNTRbYfdebzSKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGqdkeJK%2FrT5j1IQgq3AMCJ8%2FBP%2BYc9DRkDX4ZtjsUGnRxybvYTplNaZPHG2PkbFaWmpj7jPeoCpdPG5EhOS1wmRlrldKUMnzEC640lrZNYuUhsn50DA16S18ScQ0ZcRSRAy%2BSnAxoOLaQ40Rk3oT5VGWt9HECVi3s5GP%2By1ln7gZrzTMwmY7rN4TpNPuU0c0E2eiI33ZSfh1xN4BaDg%2F98ggMOkf4jX8WXLE5Fhy6duv0x8FXAWxq%2BoSirTIZmUsUTdgU%2BHwG7x61aYKMDpKK%2BPUtZaE%2B8bWbv9ooAeptBc4%2Fg7viBFkhRk%2FEDcmhC3h4QscEom35vHMa0SnzHaUTODL1Sik9DFvK%2FOAOVUlMPuu1vydlyO92PIAWTeGMjpOxcf0ZWbG4dYj3HQZNHoQO%2F0AgdcKq9IGEG4vsCvXKiS9tHfIfQkSWUclwMNL02UqzivexeawB2Zjp1Flq9cU7q5mPpWxugqeJVxlrsu4XS%2FRVqQDkW1Ku%2BdOO1jC%2FHkHntWnGV0AP3PVUo6vkZvdyuNxozfexxLwR4XaOycY0Fvd%2BGOWt70zhHtFPGTLVin6egP6o6X8H13etX9%2BUd6MSabzjTpMOHxag4%2BaWtevgBDZs4nI6dh98bbCxGUXONlILFXnC4iPWUczSzzD%2Fo9TJBjqkARgl5mogkSwQ2CWXzEecH57x21%2FBgDcb3%2Bb1oWRX4%2FzqqThghh3ESPB76o2h9jbfBQXcNdWTNyBzytvfU4X38wE%2FzTXNIDYq2EWlGMwChJvfgRp30a%2FOPSghGQurDjfIDPa3vDuKOMj9WrCGjl6v%2B6RL98T4IUUK%2B1JmdT8oc5Zf3QxYEPfG7Dia49fIgtcowUH1ogZaGQ0OZSpcFLGMzmd8455Q&X-Amz-Signature=d3eeb9bd050396097a9747b33eb53d5ed762160cc217fbc95eddd8f59b7f5ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
