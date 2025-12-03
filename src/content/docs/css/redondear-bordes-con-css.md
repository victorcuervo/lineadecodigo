---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMJDUK4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC0YphBul0ESSffum%2BQubEb3d5KSethLwCw5U1%2BDDMl%2BAIgDjqFIn3mkk8NDqm09oHDSn6c%2FANOEemhCU1bfkS4ATYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJlnrNkDXF8UHOKzrircA7YKlOx8aBIUBIAvS225qGfRlRhdTSzFhpcejoqSRucO2sN8z%2FWgCoZe020U%2FaMB3%2FMM9I1OXxZD%2FVyq6EjoaPJYxLXDF8ByJT4%2FSF7eZ%2FyXgOpiuDFmOOHDUw9G96YIO2lgRVdqVtQzl7asmJ1RUYXXZq5FfRT36Pk2FHmi49Paw2eWexIGxfSjiU0%2FEZtv9nSRJwakALPoV93MR53zBFnfST0NLSAq7wfYoRszXAyH1ghrlVH9HECTUR%2FiuMq1dnCmBOlKZkiE2DyS5hlhjcqRH93ZzYOO1Vpg0HPgmoQ3JXnhcPgIw9RpULFp99atNEVWG2jrUiCO%2BjKEG7ZZxqV9ZBKMSOqfmHkYUGWUY1OEwnfoSHqQH1aOLL6SfC4c5D7rx4JL4COUAI5B3Z2HhBMbuz4fo1i%2FHVvh1w%2BXK%2BxlaIM12%2Fz5%2BWFM6g5IwoaDxr%2FrfrWEbfX3rwwF53cZb%2FRRRIfuJGVghrknAhM%2FzKLRkzsVPgUwT3NKE8O7HdgaTgMEvpMBEhvsCIlo2be7E1VmUDXIHOZyAV0iZluggoXwuhMceL%2FXFHYYpCrYPFoAgWSmEcDGpmtSySSdEvByCj%2BPIqhkVO5E7MDcMswJ%2Bi9QCcU7wJ%2FXIv2tmGBNMMLcwskGOqUBQb1c0xt2fY1sl38T5ry%2B7cSCR%2FzE2m1jUy8z6VsJlo5CMRQw5PMwN10T0i6gggbyF4WuhD%2B5XMsV3noIdJSvOTEiAeRbUP0nf3Z76P5Q3PHKTe5zs1m1oU7BeR1j7vb41997ShYw97V60nUCptrmPT8%2FZxwFsFfUtdsjw0WUUez4N1iYV6bWrAZbhnzK%2Bs0vNjMhezQ6G%2BlLkzZMx1%2BArARHri1T&X-Amz-Signature=76f6ea0a20a2181b1aef5ae804ff1ba3f55aa41b7f077909982bfccfb8559a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMJDUK4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC0YphBul0ESSffum%2BQubEb3d5KSethLwCw5U1%2BDDMl%2BAIgDjqFIn3mkk8NDqm09oHDSn6c%2FANOEemhCU1bfkS4ATYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJlnrNkDXF8UHOKzrircA7YKlOx8aBIUBIAvS225qGfRlRhdTSzFhpcejoqSRucO2sN8z%2FWgCoZe020U%2FaMB3%2FMM9I1OXxZD%2FVyq6EjoaPJYxLXDF8ByJT4%2FSF7eZ%2FyXgOpiuDFmOOHDUw9G96YIO2lgRVdqVtQzl7asmJ1RUYXXZq5FfRT36Pk2FHmi49Paw2eWexIGxfSjiU0%2FEZtv9nSRJwakALPoV93MR53zBFnfST0NLSAq7wfYoRszXAyH1ghrlVH9HECTUR%2FiuMq1dnCmBOlKZkiE2DyS5hlhjcqRH93ZzYOO1Vpg0HPgmoQ3JXnhcPgIw9RpULFp99atNEVWG2jrUiCO%2BjKEG7ZZxqV9ZBKMSOqfmHkYUGWUY1OEwnfoSHqQH1aOLL6SfC4c5D7rx4JL4COUAI5B3Z2HhBMbuz4fo1i%2FHVvh1w%2BXK%2BxlaIM12%2Fz5%2BWFM6g5IwoaDxr%2FrfrWEbfX3rwwF53cZb%2FRRRIfuJGVghrknAhM%2FzKLRkzsVPgUwT3NKE8O7HdgaTgMEvpMBEhvsCIlo2be7E1VmUDXIHOZyAV0iZluggoXwuhMceL%2FXFHYYpCrYPFoAgWSmEcDGpmtSySSdEvByCj%2BPIqhkVO5E7MDcMswJ%2Bi9QCcU7wJ%2FXIv2tmGBNMMLcwskGOqUBQb1c0xt2fY1sl38T5ry%2B7cSCR%2FzE2m1jUy8z6VsJlo5CMRQw5PMwN10T0i6gggbyF4WuhD%2B5XMsV3noIdJSvOTEiAeRbUP0nf3Z76P5Q3PHKTe5zs1m1oU7BeR1j7vb41997ShYw97V60nUCptrmPT8%2FZxwFsFfUtdsjw0WUUez4N1iYV6bWrAZbhnzK%2Bs0vNjMhezQ6G%2BlLkzZMx1%2BArARHri1T&X-Amz-Signature=d927a65fe9caec83682c1c88de060aa5dc519f22a80ce97700d32b1a87586dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
