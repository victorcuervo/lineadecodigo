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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652NLSBUU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOOq45kFco1lO%2BbPJ2ef5YqFQbAQCG7SKkrkwIzENsAAiEA4v1qHDfBRus1Qjqa1%2FpJEMiE3WX0TJSJ3hNNdpaczxEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDHsmtZa3vWqazl%2FoircA41SpX5p1fUfk9ER9dAM06ZlFSkhUcNQPHurNRvvKHbG90pgtGp6FR66dk6vuqpUOGawXUt2W%2BU6axOmjLlFLpeC%2FM5Y2d303youX%2BPjA%2Bgt%2B41%2BVVzTSoG%2BMSaFidhHHoyfifQq%2B9mR1cZzLnYBYcQ0ATScy7Cf1%2FHPZU2CREmvlx9d%2FPxBLEN%2B6raWVSCgwkQdg6QVmx40PWp5T%2BDJ9d0dI%2FJJuly1iJoBfjYHl8sdAOJoZ3LOo%2BLKC7cBgKJCSzrEbFsIPGA6b7PP15jw4jni91rsiSaTdtHQfI1cmlKFRyg4qiCv2Q8DL9h7IHkkZ2e8OSd6oBNRORfjm9U%2BSIGxhBCp5de%2FXRloqBdfdddUGyiPGTYrC1X0vV8889GaEF4Qhgv%2BPdqIQTJrD5ld9Qeu77Uci4VgneW0paSluayoCt0zlVpVytc4jU2xRvTDV7YStnQSMYpUe0WUHIUdj3rw3wnMyGenPnwE0r%2FEHZG2pinaisNASQwdTSTF2Mwgh11hfGmqq4JTJKLc9hH%2FhmNL0pi5koV9yiiHgsVCkVy8BJmBDtz8DgDvQsWzuvvqCOC4CEX4Nj8T3NhdTb%2FvFtazxvdnKGZDAJpNWVrVUC3%2FGpEeIp886Tjlvi6aMIfSicoGOqUBkkl9MuqVCobgUZlY%2FKj11WgF7bTbTfJMzHeQl8MR4Ki1kKfC9hY82SfUhkOtWnwhhqlV2Ag2uNXHf5g4vNTILUDVi%2Bhw%2FLmXsCqBUzZ2%2BJZ8wdmC0pgJIUAdMyh0yJ5W8y0bNYCpFpeisuXKln%2BYevClP2bT8grFFmqanRNyKbUKEUtuIW828fYd2ZR21A1kIP%2Bm0E%2FctXLeqxxEJEzXBBJvB3oS&X-Amz-Signature=17aca89081af451a52dbb825ced5f7161b01b1a56400aaca2c2793bfed9282f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652NLSBUU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOOq45kFco1lO%2BbPJ2ef5YqFQbAQCG7SKkrkwIzENsAAiEA4v1qHDfBRus1Qjqa1%2FpJEMiE3WX0TJSJ3hNNdpaczxEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDHsmtZa3vWqazl%2FoircA41SpX5p1fUfk9ER9dAM06ZlFSkhUcNQPHurNRvvKHbG90pgtGp6FR66dk6vuqpUOGawXUt2W%2BU6axOmjLlFLpeC%2FM5Y2d303youX%2BPjA%2Bgt%2B41%2BVVzTSoG%2BMSaFidhHHoyfifQq%2B9mR1cZzLnYBYcQ0ATScy7Cf1%2FHPZU2CREmvlx9d%2FPxBLEN%2B6raWVSCgwkQdg6QVmx40PWp5T%2BDJ9d0dI%2FJJuly1iJoBfjYHl8sdAOJoZ3LOo%2BLKC7cBgKJCSzrEbFsIPGA6b7PP15jw4jni91rsiSaTdtHQfI1cmlKFRyg4qiCv2Q8DL9h7IHkkZ2e8OSd6oBNRORfjm9U%2BSIGxhBCp5de%2FXRloqBdfdddUGyiPGTYrC1X0vV8889GaEF4Qhgv%2BPdqIQTJrD5ld9Qeu77Uci4VgneW0paSluayoCt0zlVpVytc4jU2xRvTDV7YStnQSMYpUe0WUHIUdj3rw3wnMyGenPnwE0r%2FEHZG2pinaisNASQwdTSTF2Mwgh11hfGmqq4JTJKLc9hH%2FhmNL0pi5koV9yiiHgsVCkVy8BJmBDtz8DgDvQsWzuvvqCOC4CEX4Nj8T3NhdTb%2FvFtazxvdnKGZDAJpNWVrVUC3%2FGpEeIp886Tjlvi6aMIfSicoGOqUBkkl9MuqVCobgUZlY%2FKj11WgF7bTbTfJMzHeQl8MR4Ki1kKfC9hY82SfUhkOtWnwhhqlV2Ag2uNXHf5g4vNTILUDVi%2Bhw%2FLmXsCqBUzZ2%2BJZ8wdmC0pgJIUAdMyh0yJ5W8y0bNYCpFpeisuXKln%2BYevClP2bT8grFFmqanRNyKbUKEUtuIW828fYd2ZR21A1kIP%2Bm0E%2FctXLeqxxEJEzXBBJvB3oS&X-Amz-Signature=ad5b865bcdefe2ecf05eda8939f4e26b9ab9db396176cbdabbd21c17d5e9c161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
