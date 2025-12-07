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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF766AW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq%2FkFY4%2BQjEUN3U7BL4BAbgsOFw2uyB2YMNDZZbfI%2F8AiB%2FUdl6Za%2BdAug2Zx%2BE2DcEKh6Kpc%2FSFTddLSXE1FVDeyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpP%2BNvn3Si%2B8oH3LKtwDNHKNb7n4FUvpD%2FI1C4OWjwKTPOBVZKVJIxETdeyziJG6rzhCWY2UtC%2Bu%2Bl2EuyFNKHRJJW9Qr6Zuoov2Uv7wGKjF3rJ2Qi2%2BQtF%2B5hlUaWWYAkpn94%2Brhg0pR1StK7WDzpTxOiWpfHZXyCleZ5iJiCDjLFbyI3DmxW1WDYfRIKBtLrbwK8y55Z5kUwl8hNQZ57eC7gR3BWbBTkp5PHd%2BCKdRylH0vK5QD0UAGehJlet1XIFWszDSKITq0D5YWL88ZTv2wI1TywJ%2BjjLLsTh9MpfGiuGarmXavpsOPp5vN4oZAD0gojRo4AUigokTkTZSIzzndEaAAuB7Oc81Fc%2B2h36L%2BfbgFFdf7EpCmWWAWci%2FhnOKQ8lpjJzdddEOC1lOwPlgfTN4NMf0i1vxn%2BzBpRNNfr2ZPlqcLSQN4KMnmdsGTxWra9XP%2FiXK12mQFxD2YmNB1sF2uDRnAyAlWBka5ieZeMuDJGSHQhJKKrttVjXT6HefJFNDEeA1mq0pxkHHCr3oAS%2Bqvu8nwfPGMwcJFzVowtqmHh2XBOaTAPWUPJImtGBvUqn67B73GU0ElgsnhFGCKwrDWi%2BShoBRZ5IF313p%2BUy9Gp3iyeENKbvQxrP%2FrR6wg1sFC%2BXlDrgw6rXWyQY6pgEepaAzXJNtJiLEVqQEK3%2BQ8RSN0jvdu2braRQ6zbJPVF4Opv4k0Ka37Y40tmcTkJvyRH1fCd9akDOAb4I%2BYeP%2FS1WhQ%2Fz3eFNBxv7hE9umc7eI%2FlykECWRMPeZlqAIhbniVRguU%2Bka70WmrZnS6CpYF3FaHRQeMJ%2BhKTFdb88oO9jkdwSk1DDpyhjtvrlHL9Q1L8HJ4nSXzBbZdaTg0vjSUc64Cuo%2B&X-Amz-Signature=a812bfd79a06d9f793f2c65750c44fa152cc5597584360d1febca9aabb0b54f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF766AW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq%2FkFY4%2BQjEUN3U7BL4BAbgsOFw2uyB2YMNDZZbfI%2F8AiB%2FUdl6Za%2BdAug2Zx%2BE2DcEKh6Kpc%2FSFTddLSXE1FVDeyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpP%2BNvn3Si%2B8oH3LKtwDNHKNb7n4FUvpD%2FI1C4OWjwKTPOBVZKVJIxETdeyziJG6rzhCWY2UtC%2Bu%2Bl2EuyFNKHRJJW9Qr6Zuoov2Uv7wGKjF3rJ2Qi2%2BQtF%2B5hlUaWWYAkpn94%2Brhg0pR1StK7WDzpTxOiWpfHZXyCleZ5iJiCDjLFbyI3DmxW1WDYfRIKBtLrbwK8y55Z5kUwl8hNQZ57eC7gR3BWbBTkp5PHd%2BCKdRylH0vK5QD0UAGehJlet1XIFWszDSKITq0D5YWL88ZTv2wI1TywJ%2BjjLLsTh9MpfGiuGarmXavpsOPp5vN4oZAD0gojRo4AUigokTkTZSIzzndEaAAuB7Oc81Fc%2B2h36L%2BfbgFFdf7EpCmWWAWci%2FhnOKQ8lpjJzdddEOC1lOwPlgfTN4NMf0i1vxn%2BzBpRNNfr2ZPlqcLSQN4KMnmdsGTxWra9XP%2FiXK12mQFxD2YmNB1sF2uDRnAyAlWBka5ieZeMuDJGSHQhJKKrttVjXT6HefJFNDEeA1mq0pxkHHCr3oAS%2Bqvu8nwfPGMwcJFzVowtqmHh2XBOaTAPWUPJImtGBvUqn67B73GU0ElgsnhFGCKwrDWi%2BShoBRZ5IF313p%2BUy9Gp3iyeENKbvQxrP%2FrR6wg1sFC%2BXlDrgw6rXWyQY6pgEepaAzXJNtJiLEVqQEK3%2BQ8RSN0jvdu2braRQ6zbJPVF4Opv4k0Ka37Y40tmcTkJvyRH1fCd9akDOAb4I%2BYeP%2FS1WhQ%2Fz3eFNBxv7hE9umc7eI%2FlykECWRMPeZlqAIhbniVRguU%2Bka70WmrZnS6CpYF3FaHRQeMJ%2BhKTFdb88oO9jkdwSk1DDpyhjtvrlHL9Q1L8HJ4nSXzBbZdaTg0vjSUc64Cuo%2B&X-Amz-Signature=b0757a0d334f042be9d8b65f30f95cf6f6bb8c47e398849dd40fcf6834b5e095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
