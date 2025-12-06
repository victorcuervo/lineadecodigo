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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFHL7HP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9wFszc6HrIh6tFXfc1xewHUqwnx4SvfhPoUEcyib52gIgLkk8byZtLXtMNM0T7U1NdoTtQgSFaOIlBbIJ8DHNcZEq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCKzHprjjmc%2Btpi4pyrcAzFTPdv4iMtQRO2NMZzrWNbGsmKSP%2F%2FyV8oqrF7mjfqaDmvp1n%2Flziz8ytBfg4sxUCakSEeZy15WtW8VaFcUaEaYYI2%2FIH3QHog1rSw0Hx5Nvf9OfqWh1lf6xALF83%2B2TXUbSTaW%2FuxjlRz0vI6nQHNosIfkSsL2gQy8A%2BvijHAMKf8F%2F22ov4XDvncjv9ZtidO2Y63lEdNUbhtTOhEiPVBy9V8fCI5eYQI1pG1%2FDutQVbCxCMAx4baclhr%2BD8bLrVzcwhnJQYNLycNtGCa%2FKCEhYF7p1Vr0GeqxLLADB3oZu9b48KrjpoQBncGBw28hZ3UL6VbuQLSbVQBfbsOp3S2lIAeE3XJm4UbOaCIf7obMmsXASFyoxyt0c%2FCHZX0vDV7JLFawUEsVtFrNun81dfHNCFbs2uW3bsoPrTx79L1UWR0PJX%2BW%2FQiJKgR4p%2FYdln0Tt8fDCO3e66k5ba%2F7TsQQ0l5bvuTJPOfvJe43HYkoU%2BqUCyLpheDI0RIj3EP%2FWe5Nc8eQ74kAxJgZjXjLWSvWsoYzWBcVp04%2FyQUlf6ICuA6oT2AdMwERj1exvD7emg0ep%2F7Tkp%2BrwuoBA%2B5Z2lJpEKKsDZYjFXJXPJuovMYQKoESWObJKzBBnoeAMLj9zskGOqUBtPPzy3iKuhYieMOAHQMyZKf3kuYp%2FMrMy36KnK2zRkFyvZDtzNo%2BlXmXzt6kNiPdjeCG7WaSkFInvxYZh%2FZ%2B%2F7QpVztfz05ZD5XmpILLDiqBz6GLDAIhVCFeNXQDjv67IVooNYUE0vQi8QoTeRF5r%2FzDi67BoiDcX6JEd%2BErd1bEYLXYltMxfm7FYfAsG9rRV8QjBCfoNqzlMa%2B9C%2BzWYiWffp5T&X-Amz-Signature=dfaf8c868c726839c006d81e37c1c31312d179c3fe36797914c7260dc0b67254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFHL7HP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9wFszc6HrIh6tFXfc1xewHUqwnx4SvfhPoUEcyib52gIgLkk8byZtLXtMNM0T7U1NdoTtQgSFaOIlBbIJ8DHNcZEq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCKzHprjjmc%2Btpi4pyrcAzFTPdv4iMtQRO2NMZzrWNbGsmKSP%2F%2FyV8oqrF7mjfqaDmvp1n%2Flziz8ytBfg4sxUCakSEeZy15WtW8VaFcUaEaYYI2%2FIH3QHog1rSw0Hx5Nvf9OfqWh1lf6xALF83%2B2TXUbSTaW%2FuxjlRz0vI6nQHNosIfkSsL2gQy8A%2BvijHAMKf8F%2F22ov4XDvncjv9ZtidO2Y63lEdNUbhtTOhEiPVBy9V8fCI5eYQI1pG1%2FDutQVbCxCMAx4baclhr%2BD8bLrVzcwhnJQYNLycNtGCa%2FKCEhYF7p1Vr0GeqxLLADB3oZu9b48KrjpoQBncGBw28hZ3UL6VbuQLSbVQBfbsOp3S2lIAeE3XJm4UbOaCIf7obMmsXASFyoxyt0c%2FCHZX0vDV7JLFawUEsVtFrNun81dfHNCFbs2uW3bsoPrTx79L1UWR0PJX%2BW%2FQiJKgR4p%2FYdln0Tt8fDCO3e66k5ba%2F7TsQQ0l5bvuTJPOfvJe43HYkoU%2BqUCyLpheDI0RIj3EP%2FWe5Nc8eQ74kAxJgZjXjLWSvWsoYzWBcVp04%2FyQUlf6ICuA6oT2AdMwERj1exvD7emg0ep%2F7Tkp%2BrwuoBA%2B5Z2lJpEKKsDZYjFXJXPJuovMYQKoESWObJKzBBnoeAMLj9zskGOqUBtPPzy3iKuhYieMOAHQMyZKf3kuYp%2FMrMy36KnK2zRkFyvZDtzNo%2BlXmXzt6kNiPdjeCG7WaSkFInvxYZh%2FZ%2B%2F7QpVztfz05ZD5XmpILLDiqBz6GLDAIhVCFeNXQDjv67IVooNYUE0vQi8QoTeRF5r%2FzDi67BoiDcX6JEd%2BErd1bEYLXYltMxfm7FYfAsG9rRV8QjBCfoNqzlMa%2B9C%2BzWYiWffp5T&X-Amz-Signature=419df4373f3726cbfd03b7bf97b1b58a3069c6764f736dc0b3b2546546c5b3b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
