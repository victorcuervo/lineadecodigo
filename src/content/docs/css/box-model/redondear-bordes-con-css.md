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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4VNP5J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjGAqrNVeNaNEg14cDCmNLqaa7aEnDJ%2Bxxzb0DTpImkAiBxtsZJ%2FyGX%2BzZ%2BmN1XwZKbphDJ3PG8nhnqTs%2F9etHFLyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMR%2FEGYJQpV25FqlpXKtwDMB1Tlz3%2FDYrkQezBZ%2F4tAuIGzQR%2FHF1EkDmi6Lw5ZucWIYeRu%2BrR6O%2Fg2WgMxmP7Wkvnrx3xENZROFMClDoRCIfXp3atQJqPEmzmNaaroHOqAS1fnVanRtaKFVXpzdqmYCL7xTcIw2gO%2FUqPSl4iP%2BSt950Nen5wSz0JHud87%2FUe%2Fdx%2B1JkFbtwisf4bQohNL1E2CA8mTb4X8LKKpZt2SAPIIAmgWPiKiMKnkTrbVoZI1lpk6mqkrz7DJmLSAI61LtuerBlsQOy9FweFtrFxIH1uuHHRHbTu6NxhBIDxk2MF%2F%2FTbw8Fp8qB7kTOJZ%2FqwflBGpp0vBWgm3ghnxYi0SYcxWlk%2FmKd3giKVOgUJ3HZex28Li4djqEt6%2B%2BJEfdgd4%2BvVRfvh0giyPKIBqyfyCIuRNI%2B3%2F%2BU9Cd0EEG8u3qCAWLfFB74a%2Fk8TEPauDKlDoquTk%2FxskS9LEqCQ97nUkE18Tes3%2F4TMH2lqg%2BVOo64Oz%2BuvScd3cSPeQk0iQt4Fv5kuoinakhskRhFAfluOz8buEP6%2Bh8n52DyJH6P6U3TIqdv%2BvmwghKQfiLOzXm5fIQhYGzXIZn2bPXL2caFWb8y8eCPCrylNrG2Lts7BgQkIqmJ1FxnN32rPzaowoIOJygY6pgEJd3vXGVcK2Iao8B%2BQyYTJmGUs8%2BiYHz0wFITW7BCmyprPppkBUqO3ed6C2qsJCNmLhIohlBsX4AHFs0qD85vGPlbJq9zkUO9xxSV3HE7Rbqn8QQGkzl9b%2BnLXTW8KqR0wZPtJuEpIEsBRT%2Bt3xdRX05hbP1%2F5V%2FNOMDZHvd0xgCkTt7SRFGvU2Ozb7qgLBidcLGUOZjSI%2BEAJbvCKrhizEZ1xBTdx&X-Amz-Signature=56fe13a9924d53ab339ac23f47f9f244d86435a720fea2784329004ebaf61046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K4VNP5J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjGAqrNVeNaNEg14cDCmNLqaa7aEnDJ%2Bxxzb0DTpImkAiBxtsZJ%2FyGX%2BzZ%2BmN1XwZKbphDJ3PG8nhnqTs%2F9etHFLyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMR%2FEGYJQpV25FqlpXKtwDMB1Tlz3%2FDYrkQezBZ%2F4tAuIGzQR%2FHF1EkDmi6Lw5ZucWIYeRu%2BrR6O%2Fg2WgMxmP7Wkvnrx3xENZROFMClDoRCIfXp3atQJqPEmzmNaaroHOqAS1fnVanRtaKFVXpzdqmYCL7xTcIw2gO%2FUqPSl4iP%2BSt950Nen5wSz0JHud87%2FUe%2Fdx%2B1JkFbtwisf4bQohNL1E2CA8mTb4X8LKKpZt2SAPIIAmgWPiKiMKnkTrbVoZI1lpk6mqkrz7DJmLSAI61LtuerBlsQOy9FweFtrFxIH1uuHHRHbTu6NxhBIDxk2MF%2F%2FTbw8Fp8qB7kTOJZ%2FqwflBGpp0vBWgm3ghnxYi0SYcxWlk%2FmKd3giKVOgUJ3HZex28Li4djqEt6%2B%2BJEfdgd4%2BvVRfvh0giyPKIBqyfyCIuRNI%2B3%2F%2BU9Cd0EEG8u3qCAWLfFB74a%2Fk8TEPauDKlDoquTk%2FxskS9LEqCQ97nUkE18Tes3%2F4TMH2lqg%2BVOo64Oz%2BuvScd3cSPeQk0iQt4Fv5kuoinakhskRhFAfluOz8buEP6%2Bh8n52DyJH6P6U3TIqdv%2BvmwghKQfiLOzXm5fIQhYGzXIZn2bPXL2caFWb8y8eCPCrylNrG2Lts7BgQkIqmJ1FxnN32rPzaowoIOJygY6pgEJd3vXGVcK2Iao8B%2BQyYTJmGUs8%2BiYHz0wFITW7BCmyprPppkBUqO3ed6C2qsJCNmLhIohlBsX4AHFs0qD85vGPlbJq9zkUO9xxSV3HE7Rbqn8QQGkzl9b%2BnLXTW8KqR0wZPtJuEpIEsBRT%2Bt3xdRX05hbP1%2F5V%2FNOMDZHvd0xgCkTt7SRFGvU2Ozb7qgLBidcLGUOZjSI%2BEAJbvCKrhizEZ1xBTdx&X-Amz-Signature=af64acb821f4a9b72524d2ec074c1dad17913fafd472559e7c752087eaba14be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
