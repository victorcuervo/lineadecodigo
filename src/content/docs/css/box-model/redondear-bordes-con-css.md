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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636IAPBMI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgRr9qmdA0dN5g%2Bgd0ZUaJ5w59KcitaYE5VLSS1z4F1QIgYY9tDC5ZmKnGoe2yVYn2Hk7WQGBTsD3qjDMYxzOpSg4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH5lVY0I5b6faggyZCrcA1TEnW%2FJin1VdxtvrJUDF8%2BQInJ%2FyCTBdPYQ6OJz0C9BG1gPeKroD66iPrVjmtGy6IQFQGhYMDmzOeReltqL%2BijQoM7SyozNV0ecWIdIZiYeuQihJC5SO2JCKD741nw9CCUyqR23v6B9GJsMknr3RZoseRCSF0GYIgivrneZ5pnWm2otVYi7bTMQpjSQnZNWsXGYIR%2F7yWLtuuvZ%2F1VilMNIvBMcXTHDeAEdaUXPavDspRazquqRr9JB%2FfOJqG6exwbOWAoFyFk0y3WD5cyXKodT1gclIZNk8AzdRBMOrFgW88ddk7jevIwU89QbdedsKMKyy1r21wjgtmy60iZ6igwSvsTsd72ngZK5Tx3trlxxfXhT6yTNs1HPnbVZbbDq9sc%2FTTeCbKFdhDGtIc20eUK3w5PUKs0ZHNFX8IijKdZJ2o3idKlIxBK%2F%2BQA4gVM0fak7%2FLlPNewqAEYGsw5uY%2BkGOgUYV30zSg8Qe8rjjrFcaolaO2qPc7bYraJypVQXzYzEki3fu14xyzMCYVaf56wLpYFrIpmsbekIbqUM0n%2FYaZHvDm%2FrUAmMgwu%2FD%2F7fGIwJAU8ZO9aBTCfiQtpdd01TokKfvioK58FQ9RANB6%2B9dGnQhYQLGqEfXFN9MICPisoGOqUBqTJi0wXdUt%2F86YMUr%2F7UkFiQoWpULbFZFoe0RuuO%2FbvweQFE2c9lOAbp6a7INq0I6hDD%2BsaSVD4XY7L16XNGcXkXMY%2BAxZILmXJphLJL6k%2FiBsAjUpSMuDNShpyjkIN1vAjU2IAZPNs77mXtbiqbQiZEvuIZILel9vFG4Q%2FLob688ZW%2B%2FzUiL%2FRvESKRfHr1PyQU9uS%2Bg7VY0DHDa6VdSHCYnT8f&X-Amz-Signature=21fd4d0e2535a1f2d1de189272818be0e482274e779e7853ff7ab278d75f0837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636IAPBMI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgRr9qmdA0dN5g%2Bgd0ZUaJ5w59KcitaYE5VLSS1z4F1QIgYY9tDC5ZmKnGoe2yVYn2Hk7WQGBTsD3qjDMYxzOpSg4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDH5lVY0I5b6faggyZCrcA1TEnW%2FJin1VdxtvrJUDF8%2BQInJ%2FyCTBdPYQ6OJz0C9BG1gPeKroD66iPrVjmtGy6IQFQGhYMDmzOeReltqL%2BijQoM7SyozNV0ecWIdIZiYeuQihJC5SO2JCKD741nw9CCUyqR23v6B9GJsMknr3RZoseRCSF0GYIgivrneZ5pnWm2otVYi7bTMQpjSQnZNWsXGYIR%2F7yWLtuuvZ%2F1VilMNIvBMcXTHDeAEdaUXPavDspRazquqRr9JB%2FfOJqG6exwbOWAoFyFk0y3WD5cyXKodT1gclIZNk8AzdRBMOrFgW88ddk7jevIwU89QbdedsKMKyy1r21wjgtmy60iZ6igwSvsTsd72ngZK5Tx3trlxxfXhT6yTNs1HPnbVZbbDq9sc%2FTTeCbKFdhDGtIc20eUK3w5PUKs0ZHNFX8IijKdZJ2o3idKlIxBK%2F%2BQA4gVM0fak7%2FLlPNewqAEYGsw5uY%2BkGOgUYV30zSg8Qe8rjjrFcaolaO2qPc7bYraJypVQXzYzEki3fu14xyzMCYVaf56wLpYFrIpmsbekIbqUM0n%2FYaZHvDm%2FrUAmMgwu%2FD%2F7fGIwJAU8ZO9aBTCfiQtpdd01TokKfvioK58FQ9RANB6%2B9dGnQhYQLGqEfXFN9MICPisoGOqUBqTJi0wXdUt%2F86YMUr%2F7UkFiQoWpULbFZFoe0RuuO%2FbvweQFE2c9lOAbp6a7INq0I6hDD%2BsaSVD4XY7L16XNGcXkXMY%2BAxZILmXJphLJL6k%2FiBsAjUpSMuDNShpyjkIN1vAjU2IAZPNs77mXtbiqbQiZEvuIZILel9vFG4Q%2FLob688ZW%2B%2FzUiL%2FRvESKRfHr1PyQU9uS%2Bg7VY0DHDa6VdSHCYnT8f&X-Amz-Signature=4d5c64bb0f4439523f3805258128237f498c9cfda6ce718f58330081a6cb0261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
