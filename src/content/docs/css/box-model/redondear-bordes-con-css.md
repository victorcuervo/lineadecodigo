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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQUJ7PY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqEp%2F8LPk6OdOGJW1cEjBR0W1A1v7MYYQTLyyxx2G50AiEAk70ExYTw7Yj9WPhAC9Rhx4pP8E0TuEmaJV20FZaMrVkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHQaL70CvnT5FoGAtSrcA3Yps3hAA%2F0SwLivcSLrZGPOeO5fi1ZDZMW5NT2xRC4T0Xp4m8SMI1lt92iyPhA1118fWM1cjkKzxE%2BKn5FmupWQ9Zpu%2F457LFCsEmIyJxG3Dq3MwOBXxNns4DjdVOrSIsYUlr4eJAGTSmmg3m0TZkVHl5ufKx6ZGY5TfhPZuuRLLmC3g1%2FtdEDpM%2BV4rVnubsN%2BaNkTQlG%2BZnToGeNCGuyB6FiD3EEihUhdD%2B35%2BQbsYnY3x4Tjb%2BGvIEqrlXx5y923hjWWslC8z8k0WhpGSh3gud7uXhVxwfxuqQVpWm3QqU55rxxtOonpEKpJ3%2BurjucmFfgH8%2BYnF2bdRELip%2FegxkYlMjm2%2BQM6xj342r7phBNpFzpNIhiwBXdKsmDEtIKGMcElh6sw7BvIYOR38XNvB0jNuhuKR38g%2Fp8vRUcDAo2hRoZAVKq1EYySI%2BORnw3%2FXMe2Ny8BmWfdS0oTPtGRMXUZ5OuU9MkbdqPfbDpGflpGLkCEPvi1FR%2Bin6IHrFasyeggsf1g%2F2hYGIBRWdQCUuus%2F1TBQMAyASCWv3MTtKW9oO%2BFLDTXl1XTlwYFArzVhfAQ2WsB4cM3Tume5g3rh9MTwaF080%2FcO4HAYFk31Ih5nWaaFKRn4EGBMNGDicoGOqUBwQagqSNygdly4jtWh9Zx%2FHI5EJRcvL7PJ5JqQBJO9%2F245ebuBx3Suob6corc9ECGp5O164jzIZKUDYJUZORN3O%2F2tqA%2BIkGi1IuTKNSSVMPJCb6QCGkgdMrUg9EcrOl6h4OVzGjVnHHC1jeer4Rstfd54mgf9ZcWn%2BW%2Fsi3JQdi4jaWBH7oZzUbUmuBO%2BdLqP2iK%2B98Eq%2BIl%2Fl0hAYTYq%2Fa%2Fropa&X-Amz-Signature=de144267663a7710cbb9194e97ed3a6f631a4c7c7c3e91b7722838cbd76c07c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQUJ7PY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqEp%2F8LPk6OdOGJW1cEjBR0W1A1v7MYYQTLyyxx2G50AiEAk70ExYTw7Yj9WPhAC9Rhx4pP8E0TuEmaJV20FZaMrVkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHQaL70CvnT5FoGAtSrcA3Yps3hAA%2F0SwLivcSLrZGPOeO5fi1ZDZMW5NT2xRC4T0Xp4m8SMI1lt92iyPhA1118fWM1cjkKzxE%2BKn5FmupWQ9Zpu%2F457LFCsEmIyJxG3Dq3MwOBXxNns4DjdVOrSIsYUlr4eJAGTSmmg3m0TZkVHl5ufKx6ZGY5TfhPZuuRLLmC3g1%2FtdEDpM%2BV4rVnubsN%2BaNkTQlG%2BZnToGeNCGuyB6FiD3EEihUhdD%2B35%2BQbsYnY3x4Tjb%2BGvIEqrlXx5y923hjWWslC8z8k0WhpGSh3gud7uXhVxwfxuqQVpWm3QqU55rxxtOonpEKpJ3%2BurjucmFfgH8%2BYnF2bdRELip%2FegxkYlMjm2%2BQM6xj342r7phBNpFzpNIhiwBXdKsmDEtIKGMcElh6sw7BvIYOR38XNvB0jNuhuKR38g%2Fp8vRUcDAo2hRoZAVKq1EYySI%2BORnw3%2FXMe2Ny8BmWfdS0oTPtGRMXUZ5OuU9MkbdqPfbDpGflpGLkCEPvi1FR%2Bin6IHrFasyeggsf1g%2F2hYGIBRWdQCUuus%2F1TBQMAyASCWv3MTtKW9oO%2BFLDTXl1XTlwYFArzVhfAQ2WsB4cM3Tume5g3rh9MTwaF080%2FcO4HAYFk31Ih5nWaaFKRn4EGBMNGDicoGOqUBwQagqSNygdly4jtWh9Zx%2FHI5EJRcvL7PJ5JqQBJO9%2F245ebuBx3Suob6corc9ECGp5O164jzIZKUDYJUZORN3O%2F2tqA%2BIkGi1IuTKNSSVMPJCb6QCGkgdMrUg9EcrOl6h4OVzGjVnHHC1jeer4Rstfd54mgf9ZcWn%2BW%2Fsi3JQdi4jaWBH7oZzUbUmuBO%2BdLqP2iK%2B98Eq%2BIl%2Fl0hAYTYq%2Fa%2Fropa&X-Amz-Signature=97dddea04fe50de4da89e70daa6805049461333d5d9502c596e0abd17a90afc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
