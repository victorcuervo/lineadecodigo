---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y47D4NTQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDH0f3ZN%2FiMiKQ55wDyd51ToP26HLxt6uHm53qlmQCSFAIhALlLU%2Ba6iFqiMP4IVA2eK6Znve5goc64ZbGKte2kKtpmKv8DCD4QABoMNjM3NDIzMTgzODA1Igx%2Fx4rKLAl%2FoyY6SKsq3AOLmMYxNxjT7xtyDR53RT0Uy%2Bv68aauW8vT123ISvWryCWKzxVO%2BzvybU6FIXcx6yaSVkYrs8H49OxF97ADAfde7FmvCMkr92EeZj33Qv7Dnf8q8Zu2s0xFLVDloVUDiC%2FnZvy6aV4aQC0a4dkY3IISGBmgPrukHWQhKmTwIz7aM1PZoN1B%2BzYaMhVbMOpFFEvxJrF7Tk5qG0J9bm4yXeBLo22Wo%2F5BcIRo371TE%2FuDyMbS%2BzusdNGgJ5QJJQlsMz7pj4bOUCw0DzEI1LQkJWJLBksHjbt5y5MOiLGUKiodnU2B6DmnQgfA%2FI8eLjO2mt2wBLk8x%2BC4SJI1zjmMWq%2BDKitXWCUOVI91bQpYYkcwVJzdhxeQDBNIfMwos41iUk5G0bHrAWVCUzF0z3fB8h4DFEhcBd8zItay0PTtiL5sq58ptMa23PNMgXP%2Fam%2BdCzZRFvLeYYX%2FoQKEbvdAvyMZBhosvLMKVIAgyL6dXTr40d9JL6i5GuLKrj3KSQwhBdqbDTV3EzE%2FPOwa8cFLcUjM41dplZcPowIDMVyzuav4J1cVJi9mrvNLWEcsUEcgAG7SSkttzGkcK7Yv88%2FNEyCZCaDGlhK1tIvZpQh55OqtoHKt3WY2W7wzhEGteTCUrsTJBjqkAU%2BzAsr1iXpew812o6MYSf5gZfyi1SaAdv%2BAnjetjhAx0s8buokLnJVAw8K4ZUUOk%2B1OFFMROFQbKVSbuRVt%2B0jVH6thN1%2Btg0lAF%2BgfYWhB2kuZ1L88a7LA8Jsi7ECHb0ZpDqe6adwGttSbL9QXObOdOXF7AtfJGe4SgGPGV1%2BrL%2FVGI8XBsDmLTw1LEA6wcdf7YFObo4sH0jR24QzIJejwwt2%2B&X-Amz-Signature=8fb1d4daf083f0aa6b43b973165a37c09039f96d47d7eedd004cfee479f81f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y47D4NTQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDH0f3ZN%2FiMiKQ55wDyd51ToP26HLxt6uHm53qlmQCSFAIhALlLU%2Ba6iFqiMP4IVA2eK6Znve5goc64ZbGKte2kKtpmKv8DCD4QABoMNjM3NDIzMTgzODA1Igx%2Fx4rKLAl%2FoyY6SKsq3AOLmMYxNxjT7xtyDR53RT0Uy%2Bv68aauW8vT123ISvWryCWKzxVO%2BzvybU6FIXcx6yaSVkYrs8H49OxF97ADAfde7FmvCMkr92EeZj33Qv7Dnf8q8Zu2s0xFLVDloVUDiC%2FnZvy6aV4aQC0a4dkY3IISGBmgPrukHWQhKmTwIz7aM1PZoN1B%2BzYaMhVbMOpFFEvxJrF7Tk5qG0J9bm4yXeBLo22Wo%2F5BcIRo371TE%2FuDyMbS%2BzusdNGgJ5QJJQlsMz7pj4bOUCw0DzEI1LQkJWJLBksHjbt5y5MOiLGUKiodnU2B6DmnQgfA%2FI8eLjO2mt2wBLk8x%2BC4SJI1zjmMWq%2BDKitXWCUOVI91bQpYYkcwVJzdhxeQDBNIfMwos41iUk5G0bHrAWVCUzF0z3fB8h4DFEhcBd8zItay0PTtiL5sq58ptMa23PNMgXP%2Fam%2BdCzZRFvLeYYX%2FoQKEbvdAvyMZBhosvLMKVIAgyL6dXTr40d9JL6i5GuLKrj3KSQwhBdqbDTV3EzE%2FPOwa8cFLcUjM41dplZcPowIDMVyzuav4J1cVJi9mrvNLWEcsUEcgAG7SSkttzGkcK7Yv88%2FNEyCZCaDGlhK1tIvZpQh55OqtoHKt3WY2W7wzhEGteTCUrsTJBjqkAU%2BzAsr1iXpew812o6MYSf5gZfyi1SaAdv%2BAnjetjhAx0s8buokLnJVAw8K4ZUUOk%2B1OFFMROFQbKVSbuRVt%2B0jVH6thN1%2Btg0lAF%2BgfYWhB2kuZ1L88a7LA8Jsi7ECHb0ZpDqe6adwGttSbL9QXObOdOXF7AtfJGe4SgGPGV1%2BrL%2FVGI8XBsDmLTw1LEA6wcdf7YFObo4sH0jR24QzIJejwwt2%2B&X-Amz-Signature=b5f90db415c7d36f08de3853ccb98bcd8bb2ac330c86a61d414f76c2181fbeec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
