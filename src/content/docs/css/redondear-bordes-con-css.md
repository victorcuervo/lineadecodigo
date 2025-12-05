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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTGCDI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk3hkEDClnHALBP5Xfe86RX4LF4U%2B098VODZnGzB7AzAIgPdSow%2FVQeohLFEEunwiHqsqAovsmbubofv%2Feq6sH%2BXgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFcRD2P4cA7CISBxCircAxpDKgyi6Ls8c5x4Jfa%2FIwbx183NZUSEAhzogdrWEPCoYy4v7QH8mAGdT072XX2ChThqaGZ%2BYaZbUxQV5fFEO30BJVvWJnTJ%2FN7c5%2Fl10XKFcGahzffiGsQr9DWtbrxjJ7eTxKgy1XKJMhIxLkNCtUdWAd3B6%2B9qTUN0fHpjvIvPd3c9spvbsHLcBx2w4CQwaPPdv1KWXpiDORnKo%2Be%2FRYSE%2FQb8fnLkSDXJht0hBVwpm%2Bksaz8q7FRTs7hmivV7%2BWBs%2Fa7uJ7HZe858Ti%2BecIyrZ0Dm%2B656%2BGEDcay533xekXjq9AeZVSksbD8CCyoH2KNtDIDrUmwuMp0OrEbwY9hGXhPiooZFYg1kBcJxAndsZDxYT%2BZOzFUTqQd64hrOSFOqEEOFKNxIrjR%2BU1AwqbKetxKsix1kzdALgQe9r4LmQytXz8cfAgn6fQv2RiVPa95yOch434TktrAdtFBBRk7w2dQfuGDj4%2BNl0R0TDyUJha8ZMsVu6NaXoAFlJPXLibrEPzbNnPnEgx9YlkuZSGWv03%2Bh50yl8dzOYBV2boObVJslGdeaWPGCQoG%2BY5mIWiE3FTPBZ1h%2FBFrrYrzfDMvUvvf3KYDuOoc%2BIifq1Gu4bS1wNJx8hxgDxuAEMLHuzMkGOqUBPczT6dapOgdZdrD%2FgHJj7IBE9XsYM6mgEi9Igh4QbiYgKmUvW6o6uElGd3lM0msM9t0IrFv3DFRH3E6H64prCOvwKxUy9fjXOY7WkyW3C7FmYBzB2Y4sQmP5bMnbkmO8JIahTJCILe0XUoLfIltpUmPMhGkhcIIch7re5zqagVOKCGgFw7tG3rWnaggz1zqVp3k12ZIYlaAwb%2B3Y3A17o0CfTJbk&X-Amz-Signature=a61f0ae666d9743fe4777ad8d21b913b8cee6ccad38b30ae3764e8e60a0d42e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTGCDI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk3hkEDClnHALBP5Xfe86RX4LF4U%2B098VODZnGzB7AzAIgPdSow%2FVQeohLFEEunwiHqsqAovsmbubofv%2Feq6sH%2BXgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFcRD2P4cA7CISBxCircAxpDKgyi6Ls8c5x4Jfa%2FIwbx183NZUSEAhzogdrWEPCoYy4v7QH8mAGdT072XX2ChThqaGZ%2BYaZbUxQV5fFEO30BJVvWJnTJ%2FN7c5%2Fl10XKFcGahzffiGsQr9DWtbrxjJ7eTxKgy1XKJMhIxLkNCtUdWAd3B6%2B9qTUN0fHpjvIvPd3c9spvbsHLcBx2w4CQwaPPdv1KWXpiDORnKo%2Be%2FRYSE%2FQb8fnLkSDXJht0hBVwpm%2Bksaz8q7FRTs7hmivV7%2BWBs%2Fa7uJ7HZe858Ti%2BecIyrZ0Dm%2B656%2BGEDcay533xekXjq9AeZVSksbD8CCyoH2KNtDIDrUmwuMp0OrEbwY9hGXhPiooZFYg1kBcJxAndsZDxYT%2BZOzFUTqQd64hrOSFOqEEOFKNxIrjR%2BU1AwqbKetxKsix1kzdALgQe9r4LmQytXz8cfAgn6fQv2RiVPa95yOch434TktrAdtFBBRk7w2dQfuGDj4%2BNl0R0TDyUJha8ZMsVu6NaXoAFlJPXLibrEPzbNnPnEgx9YlkuZSGWv03%2Bh50yl8dzOYBV2boObVJslGdeaWPGCQoG%2BY5mIWiE3FTPBZ1h%2FBFrrYrzfDMvUvvf3KYDuOoc%2BIifq1Gu4bS1wNJx8hxgDxuAEMLHuzMkGOqUBPczT6dapOgdZdrD%2FgHJj7IBE9XsYM6mgEi9Igh4QbiYgKmUvW6o6uElGd3lM0msM9t0IrFv3DFRH3E6H64prCOvwKxUy9fjXOY7WkyW3C7FmYBzB2Y4sQmP5bMnbkmO8JIahTJCILe0XUoLfIltpUmPMhGkhcIIch7re5zqagVOKCGgFw7tG3rWnaggz1zqVp3k12ZIYlaAwb%2B3Y3A17o0CfTJbk&X-Amz-Signature=0ac5229d2348e6fb3013db532e48619419f502108aae6e79018eac59845905e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
