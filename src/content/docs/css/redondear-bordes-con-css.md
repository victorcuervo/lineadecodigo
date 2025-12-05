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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLFFRRP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FNTLFYHaNY01zohGjFyWI2n6QjxiXgtlkfcHeKVvupAIgWMp7VlxtH3Q7cmcvZOkarm6%2BYZ11l2M2lNhaVxhWNkcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDpr6mmk6U9bp3WhFSrcAwjV8p%2FNkRNby6v8TkeJuJUi4%2B1%2BLOdpJp5uHv%2BPP0ebp5fz6aFlX3WTQKaqlK29Z8dbTtBRZnof%2BaQTtaVc%2BKbtB%2FJtq2ASwe9D5YsWpIM4%2FyjwFbQzo80i0p8o7OuiPKaADk04OVtC1S7y9ibt9y82%2FJJyJsMiGvtg%2FSXz%2Fbs577OvzMqHALS1Yn%2BmlxvPmETJrr1j%2Fqb9WSQ0wi9qAmv%2FiZEn1%2FHtMRleBAdSGDigzP7iREo7ThTdFYAde1EShX41cXu7DkopsikwD5xJeRzvTRhsGgxWl76WbuBYzwNT8nMeo2U8SF%2BjKWeNjZeRmBpEIRwv7w4HTi0M4WpF31EDMPxw%2FqbkY955D0CYni0SEYwx5SX4ZwV7lurSOyzFKnHrj3IIs8G2LAdMTRRgPYBh0VjBL34PJu9yYupkS1V4qnREBdKUDFMDrtGNS4UXxaVRlJcksL1tNxz0BwbR%2FYxu5uIr6Ruts5Tne4yWDQ5cbhwT9J5EaD1UOXkMynkzyRreSVG7XPBU1WzBNU6B%2BQ%2BQCXWiHzstaIfGhpxJYWgO9VuDjYA0BvFgGCASBmPk%2BEKGb%2Be9E3BGDbXj0x3lpMHpAR51xaucM00O31A1259f%2FZV%2Byx7Lzl6jWCirMLPOyskGOqUBnAQIkipR5WUTuR3IsA%2BFcWESdzY%2FlSsBgHJoB2gdu3MKdEFybw9%2BTRdwUqs3bMpBQpcipX4fpVrWdEWLFCJV0gMogiI6kLv4DuPlpyY78FC%2FksJi0R2ttm4W8yz5acLBYV9dbR4kKRU%2FlEqjaiLk2SCtvixmP9YQtrq9gQ1S226uJ5HIOlYdzN5TKNfVz5q2N6YLt6eIG9EEBv243LjnZU0bQdDf&X-Amz-Signature=9e8927afc2feb44a332aae80a319e3a3d5bc50c4deea41b7253b3879f34fee0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLFFRRP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FNTLFYHaNY01zohGjFyWI2n6QjxiXgtlkfcHeKVvupAIgWMp7VlxtH3Q7cmcvZOkarm6%2BYZ11l2M2lNhaVxhWNkcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDpr6mmk6U9bp3WhFSrcAwjV8p%2FNkRNby6v8TkeJuJUi4%2B1%2BLOdpJp5uHv%2BPP0ebp5fz6aFlX3WTQKaqlK29Z8dbTtBRZnof%2BaQTtaVc%2BKbtB%2FJtq2ASwe9D5YsWpIM4%2FyjwFbQzo80i0p8o7OuiPKaADk04OVtC1S7y9ibt9y82%2FJJyJsMiGvtg%2FSXz%2Fbs577OvzMqHALS1Yn%2BmlxvPmETJrr1j%2Fqb9WSQ0wi9qAmv%2FiZEn1%2FHtMRleBAdSGDigzP7iREo7ThTdFYAde1EShX41cXu7DkopsikwD5xJeRzvTRhsGgxWl76WbuBYzwNT8nMeo2U8SF%2BjKWeNjZeRmBpEIRwv7w4HTi0M4WpF31EDMPxw%2FqbkY955D0CYni0SEYwx5SX4ZwV7lurSOyzFKnHrj3IIs8G2LAdMTRRgPYBh0VjBL34PJu9yYupkS1V4qnREBdKUDFMDrtGNS4UXxaVRlJcksL1tNxz0BwbR%2FYxu5uIr6Ruts5Tne4yWDQ5cbhwT9J5EaD1UOXkMynkzyRreSVG7XPBU1WzBNU6B%2BQ%2BQCXWiHzstaIfGhpxJYWgO9VuDjYA0BvFgGCASBmPk%2BEKGb%2Be9E3BGDbXj0x3lpMHpAR51xaucM00O31A1259f%2FZV%2Byx7Lzl6jWCirMLPOyskGOqUBnAQIkipR5WUTuR3IsA%2BFcWESdzY%2FlSsBgHJoB2gdu3MKdEFybw9%2BTRdwUqs3bMpBQpcipX4fpVrWdEWLFCJV0gMogiI6kLv4DuPlpyY78FC%2FksJi0R2ttm4W8yz5acLBYV9dbR4kKRU%2FlEqjaiLk2SCtvixmP9YQtrq9gQ1S226uJ5HIOlYdzN5TKNfVz5q2N6YLt6eIG9EEBv243LjnZU0bQdDf&X-Amz-Signature=f0d38dafebce921ac9a9e992d0e4e149996936ac04f9e7460cbcee98608c3403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
