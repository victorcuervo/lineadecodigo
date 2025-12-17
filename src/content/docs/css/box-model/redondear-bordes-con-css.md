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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPVWISVG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcPA6qNhUyJODrJ3cog6HYnGKkoBuVFAdzZwptt6GntQIgQmLUoMedzrGjGn8Dn7yL17gx43UNozmGiuc3d2A5caAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDxDqt17fwSkuOVbhyrcA%2FgK2okzZd%2Fdyen7AGdbzk75UCYm4aYllek8MhwO1hid2LEp2JdKgl%2Fq2Sh%2Fi7G9lLw0SMVtu%2BP4iIoLe5fm9fppn%2BcyTvYIRaYprnVtzC3kvWnJ2p3sQ4G63p3GGMjDCBRt8ti0lQfjiuvG2baOT2iTKa21fR88qnSYhHy6bhGJXdrEx86CxvgeVrMGYrTKfvxnnCuT%2FmPOzf2x1Cb2eMRjYoACQdHUHvtNIYqpoQA6hGbKRA8X1%2F%2FWsKCC7o0JG3gtBswStZ%2BjesAtmjKNqggXw1%2BHzXfxHSDdj3dD5EnkQCyg5wQypeJKBLdqnoWGgZXark7hceZGKnVsP%2Fzy%2FtnVXS%2B3Ka03azzM3WKMtqRhtGPKDdlTWVM%2BlHMKYW5%2BC8HKcJIJuExZPPrx7aR2xsNyrTW7yIMqt97jFQGlEsKiN4jHuWHQ5%2FbQoRniuSf5idVVb%2BAFWR3Z514ug80DYHIPNEX8qLZLl4qL9OT8c%2BqgsagT40ax2g5F4q9GsJUBgxHRRFXy4v%2B%2Fce4JpTx4r5Ui30DP0ga9FrKZExogxA7%2Fgz6caGn5IQXpkdhi%2BIKapdJS4FhYbohHOA749Qg3oNhvle4NStEW%2F4CskhaEePaYx0dFVzf6Md2tMXptMKj6h8oGOqUBAHODtQwPv9FfrmTRIiR58pzfhWyOx8pc7AoRZ%2BmnW6vt5JxFHZEyMe3UbrCqpPELm1RuS0OKFgAbvsuZ0dhnwXqG13Ej03GYW7opD0bkx8phy2ijyESBB5lpb2WQ5FQh4yQDufgxCrKUjxGeI7xYeLISpU3dtZ8kxR7bzoPPr4oiusJPAixup8Cjb%2FqP%2BjfmQtOYsVDvsluPE2H%2Bl0FDaF1sN2Cw&X-Amz-Signature=438229780530b1c81e3a2248745da8080cba20c227f9165663ad21b640618e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPVWISVG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcPA6qNhUyJODrJ3cog6HYnGKkoBuVFAdzZwptt6GntQIgQmLUoMedzrGjGn8Dn7yL17gx43UNozmGiuc3d2A5caAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDxDqt17fwSkuOVbhyrcA%2FgK2okzZd%2Fdyen7AGdbzk75UCYm4aYllek8MhwO1hid2LEp2JdKgl%2Fq2Sh%2Fi7G9lLw0SMVtu%2BP4iIoLe5fm9fppn%2BcyTvYIRaYprnVtzC3kvWnJ2p3sQ4G63p3GGMjDCBRt8ti0lQfjiuvG2baOT2iTKa21fR88qnSYhHy6bhGJXdrEx86CxvgeVrMGYrTKfvxnnCuT%2FmPOzf2x1Cb2eMRjYoACQdHUHvtNIYqpoQA6hGbKRA8X1%2F%2FWsKCC7o0JG3gtBswStZ%2BjesAtmjKNqggXw1%2BHzXfxHSDdj3dD5EnkQCyg5wQypeJKBLdqnoWGgZXark7hceZGKnVsP%2Fzy%2FtnVXS%2B3Ka03azzM3WKMtqRhtGPKDdlTWVM%2BlHMKYW5%2BC8HKcJIJuExZPPrx7aR2xsNyrTW7yIMqt97jFQGlEsKiN4jHuWHQ5%2FbQoRniuSf5idVVb%2BAFWR3Z514ug80DYHIPNEX8qLZLl4qL9OT8c%2BqgsagT40ax2g5F4q9GsJUBgxHRRFXy4v%2B%2Fce4JpTx4r5Ui30DP0ga9FrKZExogxA7%2Fgz6caGn5IQXpkdhi%2BIKapdJS4FhYbohHOA749Qg3oNhvle4NStEW%2F4CskhaEePaYx0dFVzf6Md2tMXptMKj6h8oGOqUBAHODtQwPv9FfrmTRIiR58pzfhWyOx8pc7AoRZ%2BmnW6vt5JxFHZEyMe3UbrCqpPELm1RuS0OKFgAbvsuZ0dhnwXqG13Ej03GYW7opD0bkx8phy2ijyESBB5lpb2WQ5FQh4yQDufgxCrKUjxGeI7xYeLISpU3dtZ8kxR7bzoPPr4oiusJPAixup8Cjb%2FqP%2BjfmQtOYsVDvsluPE2H%2Bl0FDaF1sN2Cw&X-Amz-Signature=179f51224ede2885120f4cf82382b61f9cbd7a97e253e832d75d82297349de90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
