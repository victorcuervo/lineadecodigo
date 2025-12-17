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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EG6PITG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ578Y%2B57B0x9bMDVXmku%2BldA4ZTkMUeTsY0LetofmmAIhAKgIOq%2FF33OwSg%2BLT2aDMCBcqG4JLBzo3Jay2Af2wTlBKv8DCHkQABoMNjM3NDIzMTgzODA1IgzCB6JCzUSc7MYue3Qq3AOIGRc%2B%2FQZ7w4ZCBMAVRtnYb56qdO8rZddsxPBZdinAtuRtbkpYHq3ozkJjtk1olzANS4WbbHQqJAzLmxXxFD0w3g%2FzaW9hDvQyVocpCLYcCDZsfX19pARgeqSykVxIag6t7g2HxKiz67BUuoB3p5gWZgci%2FVGHQknDkGwJaYbu1woy1S%2Bni%2BLbP85MPaQ8WIQjtDj86KXukwyj%2BcTuDmjHn1yUcoidEEjD6ftZLCMRZfife01joz2tnrdvVvOfYmWcXyz2nnubCLLgFrq%2Bn4a5ouZLj9codcYRNruzjTTMh0CHGBw6ZOgtCJ5wBWMDXX9js4F%2FIZNIfTYEiv2e7zrVWmCwPsZDJE5pfczRaGCXXyuX%2BOne%2ByVayvXe7C435ym8JSrpI4pts4nfiuIs1DCxKYAR8gM82aCqfW9Jm2jsXQUkcwg%2F%2F9DISs%2F47Ea9LwZOHY4oXKa0c8DqXh5E1ZOSHVEONRwBTC0BkUN0G%2BwMGNAjii0p2LSARSAr7WT7AbU1O9hVJk652G34PMAU2JlewqB0Jft4GdvP1iU4iu%2BeBhVh%2BYiFWqgCTbRo3EHvASooHNcJlhg7%2F8GqNbijhBwMwkXJ%2BWfL%2FqBQ0uNBpR%2BCa9WbEhkfLgztftjDjzCgt4nKBjqkAWN3DMLnNcxSwkgXPme0P1nudfdlISlfhY9BTCLxmVwXuij92L1rSxx7yPAnh0hl5C11v1N5klmDMHEl2ybZbi9i7XJfR7BLmeSfu9Bxf8N1jjcXkj3fgPYMQ5okG%2B0DnRbGp3hdccRHpX5r5qaW8urDjcvAPthnMLaiOrggESGzck6oa%2BkljWfnLyEtQJF%2BncsK%2Fwl5cuTaca9DJWdF8vsX0zu%2F&X-Amz-Signature=eaf4b5b6f6ae0348c450b2b0fde956292f64663a44b2cda45b5c0707ce2980f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EG6PITG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ578Y%2B57B0x9bMDVXmku%2BldA4ZTkMUeTsY0LetofmmAIhAKgIOq%2FF33OwSg%2BLT2aDMCBcqG4JLBzo3Jay2Af2wTlBKv8DCHkQABoMNjM3NDIzMTgzODA1IgzCB6JCzUSc7MYue3Qq3AOIGRc%2B%2FQZ7w4ZCBMAVRtnYb56qdO8rZddsxPBZdinAtuRtbkpYHq3ozkJjtk1olzANS4WbbHQqJAzLmxXxFD0w3g%2FzaW9hDvQyVocpCLYcCDZsfX19pARgeqSykVxIag6t7g2HxKiz67BUuoB3p5gWZgci%2FVGHQknDkGwJaYbu1woy1S%2Bni%2BLbP85MPaQ8WIQjtDj86KXukwyj%2BcTuDmjHn1yUcoidEEjD6ftZLCMRZfife01joz2tnrdvVvOfYmWcXyz2nnubCLLgFrq%2Bn4a5ouZLj9codcYRNruzjTTMh0CHGBw6ZOgtCJ5wBWMDXX9js4F%2FIZNIfTYEiv2e7zrVWmCwPsZDJE5pfczRaGCXXyuX%2BOne%2ByVayvXe7C435ym8JSrpI4pts4nfiuIs1DCxKYAR8gM82aCqfW9Jm2jsXQUkcwg%2F%2F9DISs%2F47Ea9LwZOHY4oXKa0c8DqXh5E1ZOSHVEONRwBTC0BkUN0G%2BwMGNAjii0p2LSARSAr7WT7AbU1O9hVJk652G34PMAU2JlewqB0Jft4GdvP1iU4iu%2BeBhVh%2BYiFWqgCTbRo3EHvASooHNcJlhg7%2F8GqNbijhBwMwkXJ%2BWfL%2FqBQ0uNBpR%2BCa9WbEhkfLgztftjDjzCgt4nKBjqkAWN3DMLnNcxSwkgXPme0P1nudfdlISlfhY9BTCLxmVwXuij92L1rSxx7yPAnh0hl5C11v1N5klmDMHEl2ybZbi9i7XJfR7BLmeSfu9Bxf8N1jjcXkj3fgPYMQ5okG%2B0DnRbGp3hdccRHpX5r5qaW8urDjcvAPthnMLaiOrggESGzck6oa%2BkljWfnLyEtQJF%2BncsK%2Fwl5cuTaca9DJWdF8vsX0zu%2F&X-Amz-Signature=6486da9c5ea17f1dc233f013404a4f9a63183b5d8390e3d7c293256e472323d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
