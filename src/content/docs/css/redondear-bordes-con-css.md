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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657VAC2ZO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZR7kpfqZgMuSwjGFa1XA0pk0rA1cFQKQW5HhOSbPk3AIgAxby%2BDc%2FofvvTtghMXiwn6jTtdxbOgzlEGLCl1xipLsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKCDSEOYR9XDlZ9EKCrcA0sf5sZhWfRS0bfaBXHTVKwPtIG4YLpAympZ%2BoJ72eyvKxPNOojHeb50WeI7gspMvFw1xOxv8QGO2sagpQssUnO1%2FGJ%2BnZAJou1mc72O%2ButR%2Bsw14dH3DhMgw31U8tBMlZ1vFg%2BOdxa87f%2BQRpdgWSMeW2bomKCj3oXkTOFg4NKt8WSYC8iACml6gLs91LQa3SklWFAePIAj6afhxQEYd4kf9Nlnpg813PdqgqaMLJGD7hCy9nT4MxYWCaMWFlW5UTH8eZikjwqQlvaL2PhyXxvAJtoM1mqpyhDqjnF%2BvZ7eC7pS2HmFbrxaJAS%2FpWYZAyTnzimC5MHOb2RlW8lUI0Q8XLRP%2FMsFCi8kRcrcs3WtLc9UADV6ueTRSQ8QL7hGY0teVMY1z2CnEg8ZPUeRESrSrAXvHiSWg62hzop7wzlyv8MBanmcVPuxk6mQ7k%2FqEAMCQKaSxpHwLbg27Ra%2Fnu18B%2FyZzjJyMIVmk1fx3tAzGehm5a7aBwobIX7Wi8z63aCsOZLvi6BEXokWRb%2BYG0xZ8U6JkO54UHBv4yRPUg0YMNqaNvNwPoMT%2Brgef1dcs%2BvGa1EWkao8sXikimCtRBuvqbfyh6mYD6Eb6o43AKPZBAQ0t3wtcXfM8mz3MI6yyckGOqUBKnHmJdYTQTl9mQxI4csaZzSKCh8ngIxo%2BrBakpPUJBLIAAAEZIK7tc%2FvKGg1PsrE52orhDTEgX9A5Q2Y%2BoXBmspzQiXIslgd7CgffSorGFptcrkwJyXpZ2TqWwzxvTYwKg5l9gtPaabuGIEPR3omK8GJZw7HkIToEYNL%2Bho2wlmB9Vkq1l76dkD%2BsJ2r1gVhUoAs8GE0UUQeKXqubp%2Bpr9G6R5uc&X-Amz-Signature=2a11a50ad702f307862543aba7da0226151c94e709f7b03ac1bbbc095717299d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657VAC2ZO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZR7kpfqZgMuSwjGFa1XA0pk0rA1cFQKQW5HhOSbPk3AIgAxby%2BDc%2FofvvTtghMXiwn6jTtdxbOgzlEGLCl1xipLsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKCDSEOYR9XDlZ9EKCrcA0sf5sZhWfRS0bfaBXHTVKwPtIG4YLpAympZ%2BoJ72eyvKxPNOojHeb50WeI7gspMvFw1xOxv8QGO2sagpQssUnO1%2FGJ%2BnZAJou1mc72O%2ButR%2Bsw14dH3DhMgw31U8tBMlZ1vFg%2BOdxa87f%2BQRpdgWSMeW2bomKCj3oXkTOFg4NKt8WSYC8iACml6gLs91LQa3SklWFAePIAj6afhxQEYd4kf9Nlnpg813PdqgqaMLJGD7hCy9nT4MxYWCaMWFlW5UTH8eZikjwqQlvaL2PhyXxvAJtoM1mqpyhDqjnF%2BvZ7eC7pS2HmFbrxaJAS%2FpWYZAyTnzimC5MHOb2RlW8lUI0Q8XLRP%2FMsFCi8kRcrcs3WtLc9UADV6ueTRSQ8QL7hGY0teVMY1z2CnEg8ZPUeRESrSrAXvHiSWg62hzop7wzlyv8MBanmcVPuxk6mQ7k%2FqEAMCQKaSxpHwLbg27Ra%2Fnu18B%2FyZzjJyMIVmk1fx3tAzGehm5a7aBwobIX7Wi8z63aCsOZLvi6BEXokWRb%2BYG0xZ8U6JkO54UHBv4yRPUg0YMNqaNvNwPoMT%2Brgef1dcs%2BvGa1EWkao8sXikimCtRBuvqbfyh6mYD6Eb6o43AKPZBAQ0t3wtcXfM8mz3MI6yyckGOqUBKnHmJdYTQTl9mQxI4csaZzSKCh8ngIxo%2BrBakpPUJBLIAAAEZIK7tc%2FvKGg1PsrE52orhDTEgX9A5Q2Y%2BoXBmspzQiXIslgd7CgffSorGFptcrkwJyXpZ2TqWwzxvTYwKg5l9gtPaabuGIEPR3omK8GJZw7HkIToEYNL%2Bho2wlmB9Vkq1l76dkD%2BsJ2r1gVhUoAs8GE0UUQeKXqubp%2Bpr9G6R5uc&X-Amz-Signature=f36eb687b089fc89037b862e0d3cbaa6ed35b87707a4bbe9b9fd8b01843d1826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
