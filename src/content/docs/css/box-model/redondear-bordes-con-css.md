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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7A44JPB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwKITElkWtvKtiSe6BBacx%2FDaAziKbGOdGTvTUAvJF0AiAx15ITCb3Qf8MC02kGps2piwoXBCZYH1dwxAlWglgAhir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM30xEsiRDtQsvquEwKtwD0b6Eva3nwQwvqZWAlY%2F98DBEtQipp%2Bws1aAdeXhxg2LHm0YqlPA02yt6mGP%2BsVwemBtcuq9cWZO0%2FJNtFNV0A23twz7Ee8soKm%2FC%2Bie6VuiHS5MT2yI92yY2KmdNoo9hqTc6JAH2ipGndbuTJSgDZupROH%2FcVPYNe%2BkCOW9j24v7h02hu9JAPnJ5qwBFkEYh6GtgW7xWMr6%2BARw3d9bcsdgauIEU49Ueh2E76BJLTgWQi%2BpHN1saA7pW2WA4gh4o9X3CT1h5erXui4m1AGCJIrQf3KfLvnTyJ4QJd4BMC5hXeKaJEJ8CngwTnFYvZnyRvH%2BEdD9qMIV7aHJgETBRw7E8ZtKz5O87LBn%2BCvAhvP96aeUsGKwmOmvv1srZw7CAJPCRPHQcI1a4AaQH7o2UZ%2F4sdMXediiyTJUHvuBmA9PfcwsujwpkoJcf4w00lVsEnMEVqlltGJM1naUGpcuAhyVYoB6HD2oVvzPR5G1ARfwsS%2F6LeKy0dTBlOFXag5wP%2BI2MtrWViP6YecWnCvhf6M7GsT%2BvEiVtC0wOPNQmx6a7tdNzym9%2BMeRCvGNepxTuZ12xY%2FwOb19PMjc5kFqSjBWw%2FeIDlxo5S8f%2FETBSt2Uem7Hb8OL8GAYDz6gwzreJygY6pgGrHL%2F0eIKV4jf5OSJLGJtwUvoREkj5Uy5yVoYIbjk%2BeUY8kJRj0QbVlE9Sa6VRaDScPXKHudqelAEZxNWLWO%2Bp5ZjEW9SayFUa5QUs97LM0UVW7H9hAFjgWS6YGBfvccHjYXfTcaNNVg2Q8g1PFoX9XHqPcbwLz3o5%2FTpIm%2BpkVTfSUBvcRLhpb%2B8uLJn375lMIjmjLKshlZ7mfmhQwVxC3qCNuOhZ&X-Amz-Signature=8caf82f18a45a0c81555f935c05e79e7e2f2d5de5dcbea11e4c273497d69f08a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7A44JPB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwKITElkWtvKtiSe6BBacx%2FDaAziKbGOdGTvTUAvJF0AiAx15ITCb3Qf8MC02kGps2piwoXBCZYH1dwxAlWglgAhir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM30xEsiRDtQsvquEwKtwD0b6Eva3nwQwvqZWAlY%2F98DBEtQipp%2Bws1aAdeXhxg2LHm0YqlPA02yt6mGP%2BsVwemBtcuq9cWZO0%2FJNtFNV0A23twz7Ee8soKm%2FC%2Bie6VuiHS5MT2yI92yY2KmdNoo9hqTc6JAH2ipGndbuTJSgDZupROH%2FcVPYNe%2BkCOW9j24v7h02hu9JAPnJ5qwBFkEYh6GtgW7xWMr6%2BARw3d9bcsdgauIEU49Ueh2E76BJLTgWQi%2BpHN1saA7pW2WA4gh4o9X3CT1h5erXui4m1AGCJIrQf3KfLvnTyJ4QJd4BMC5hXeKaJEJ8CngwTnFYvZnyRvH%2BEdD9qMIV7aHJgETBRw7E8ZtKz5O87LBn%2BCvAhvP96aeUsGKwmOmvv1srZw7CAJPCRPHQcI1a4AaQH7o2UZ%2F4sdMXediiyTJUHvuBmA9PfcwsujwpkoJcf4w00lVsEnMEVqlltGJM1naUGpcuAhyVYoB6HD2oVvzPR5G1ARfwsS%2F6LeKy0dTBlOFXag5wP%2BI2MtrWViP6YecWnCvhf6M7GsT%2BvEiVtC0wOPNQmx6a7tdNzym9%2BMeRCvGNepxTuZ12xY%2FwOb19PMjc5kFqSjBWw%2FeIDlxo5S8f%2FETBSt2Uem7Hb8OL8GAYDz6gwzreJygY6pgGrHL%2F0eIKV4jf5OSJLGJtwUvoREkj5Uy5yVoYIbjk%2BeUY8kJRj0QbVlE9Sa6VRaDScPXKHudqelAEZxNWLWO%2Bp5ZjEW9SayFUa5QUs97LM0UVW7H9hAFjgWS6YGBfvccHjYXfTcaNNVg2Q8g1PFoX9XHqPcbwLz3o5%2FTpIm%2BpkVTfSUBvcRLhpb%2B8uLJn375lMIjmjLKshlZ7mfmhQwVxC3qCNuOhZ&X-Amz-Signature=083fbfb39863498ea82e2f85b5d2b2183a485bf2967ec69469a3c9ce28484368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
