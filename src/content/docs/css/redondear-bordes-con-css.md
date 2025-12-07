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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC4DUJRD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCePZnwe07UKvJPNz3h%2FyDmWkDrZ5WziJlvKPFuIJN5fAIhAMF86YvtuIu8MQfw5Wk98OW6YSnBX%2F8qPtA8ZGq%2BbhcnKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2zvZA2vJLWvvrLmYq3APbNkbrXz0WyJci3BSxFMOmifXbSotUve1LYe9q4ghMTXF5b1AB1hTfiQFQjNyX6bjZsp7yVsdd1FHMwVk%2FkPp8bPoMifBsbg19Bhhp9E%2B7V5qFNv19YHZrHzYRVDjSvYtHtwnTrvFMeJl1IshVt7z4Wik4zokxJhjDPTwm0AjbPdux%2FyfG65Hlq%2FNnE1isHodwI6IP6PDA1nyrHpGHq1TbdYKm2ZGW9sAyXgCZm5rKHHhy4opLiO0%2B%2Fyc7%2BidUi36SgnIZuToQeS12XOzAlnXMlN1%2Fcp3MHjzN9I%2FFcfOwQEmKsP%2Fmhdf8PQ86DMczkULcUXysl7DZN6Uhvj6ajQO7yr18F1o%2F%2B%2BLEsmBPZ%2BNNe7BvkvLY5DSI6h7m3iHPYURa6aW7vJ%2FAz75kfOXtwMhjY9j97HLDKVOdoqW46P9%2BjdC9oR08%2F7MdhvuZkQN7o1H2NukRkK8K3IZA2I%2B3wdVSUtIDtwvwvczvO7mvw8E9Cb1AfN8BGyQVskJrL8%2BipdfHsEipiURz0n4VccZO0irSZNOESmspUSVdcxo%2F1erIFErwYr%2B88rlIARI4ljhG7XbgbpvKrnpgkoVt0u1I0EtfWaKnFLZ7FIgdUo7Kbj1QAo%2BMGEUBQ1%2FKlwVXLjD8mdXJBjqkAWMvS8bLz%2FxNjW9PxYWdU2nPVnLOH2yXHeuke9N4w4luCauOByEMUxSq48BPdI2rNDGTh99rUp%2BtTgD19nWJX1CrFjYGR54X2OvD%2BxlobbJSoB2GdNhX4CjpOxqryp018uNbkMhuk2gIVB3pb2I6nPCO8JAz%2Fwn0ejxYKWLAkUr1NG%2BzdRE6QMKXHHR6ylb9UcNvgk3o3iLo61WLu6VUqkhBQYCN&X-Amz-Signature=f3df35f0b02f4b48cd92ffbbe7575b3f25c60e5ce27e24822f2883b8969ad713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC4DUJRD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCePZnwe07UKvJPNz3h%2FyDmWkDrZ5WziJlvKPFuIJN5fAIhAMF86YvtuIu8MQfw5Wk98OW6YSnBX%2F8qPtA8ZGq%2BbhcnKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2zvZA2vJLWvvrLmYq3APbNkbrXz0WyJci3BSxFMOmifXbSotUve1LYe9q4ghMTXF5b1AB1hTfiQFQjNyX6bjZsp7yVsdd1FHMwVk%2FkPp8bPoMifBsbg19Bhhp9E%2B7V5qFNv19YHZrHzYRVDjSvYtHtwnTrvFMeJl1IshVt7z4Wik4zokxJhjDPTwm0AjbPdux%2FyfG65Hlq%2FNnE1isHodwI6IP6PDA1nyrHpGHq1TbdYKm2ZGW9sAyXgCZm5rKHHhy4opLiO0%2B%2Fyc7%2BidUi36SgnIZuToQeS12XOzAlnXMlN1%2Fcp3MHjzN9I%2FFcfOwQEmKsP%2Fmhdf8PQ86DMczkULcUXysl7DZN6Uhvj6ajQO7yr18F1o%2F%2B%2BLEsmBPZ%2BNNe7BvkvLY5DSI6h7m3iHPYURa6aW7vJ%2FAz75kfOXtwMhjY9j97HLDKVOdoqW46P9%2BjdC9oR08%2F7MdhvuZkQN7o1H2NukRkK8K3IZA2I%2B3wdVSUtIDtwvwvczvO7mvw8E9Cb1AfN8BGyQVskJrL8%2BipdfHsEipiURz0n4VccZO0irSZNOESmspUSVdcxo%2F1erIFErwYr%2B88rlIARI4ljhG7XbgbpvKrnpgkoVt0u1I0EtfWaKnFLZ7FIgdUo7Kbj1QAo%2BMGEUBQ1%2FKlwVXLjD8mdXJBjqkAWMvS8bLz%2FxNjW9PxYWdU2nPVnLOH2yXHeuke9N4w4luCauOByEMUxSq48BPdI2rNDGTh99rUp%2BtTgD19nWJX1CrFjYGR54X2OvD%2BxlobbJSoB2GdNhX4CjpOxqryp018uNbkMhuk2gIVB3pb2I6nPCO8JAz%2Fwn0ejxYKWLAkUr1NG%2BzdRE6QMKXHHR6ylb9UcNvgk3o3iLo61WLu6VUqkhBQYCN&X-Amz-Signature=f6f4269a564484d85307dab3fc3c8a7622fa307114fce5c1199dfc96020b6ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
