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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSY5KKCN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEqwL4u1vZ38tWUaWkKu3QFYG6YwVXOdZykSV8beaWyAiEAhAs0ji5%2BYHU7e%2BF1wOMn54fSVZTgO28QWo7QWafZlhMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2KEFla3N%2BrJJJ1hyrcA8ZSrvy0SMD0pjwnzwY4i3iIwVUFxcTSWvilGBVV5%2FJtZUN8uMbhIjEnBcumyjhAf5%2FQhh1Te3lANH0eLDTm22yjFQ%2Bjv0Ar1%2FpjK9l2Qr9TAUJLLZ9VgKbz3X3gky3803TMx1Q7i9aGRzVHrPnuEgyp6x5KzBQ3Usw5j%2FmChg91iBTn8HI0bQqhs8j9oiNiLKV05YVThyKlN5iT%2F6AAqDYV107CDgwHj%2BCnHnkfd%2F4Jczf35XblZt2udoWNy7O1klO5C7hHyy2fHWDa9yPCaaMppqWzKvPUrKdmTr8JP3Gk6tS8tdMARCEjPCvWjBGwcwkQjIjYuse6ro45TR5slsixtR09mn%2Bfg6rNBY6fuEQ1W1qweOjZRK0Rs8Nvyvz%2FoHFF5sCj8FcqAsHTBhr%2FHv7C5kE3Itoqbkn6W1FV4vlnXMEcTbG42fXkw0%2FAZbI26yC2a8CsMJVenCGsPiv0WyxGO5uWszefCGyJDqliOHHOlR4stfhsSqPSOO5Sl5oVoAoZ8R8IOSfzbq0jOiJEfeIsnQx2Y5I9iDhYF4uwUsyDO6Oq8Y5CM0i50tPzk%2Bsxlef2y9JDcd7LJMp%2F8B8Qb4J%2FvHn5xbrDoJUsP1THB5yBSaz68wWbgpwsf8M%2BMOyk38kGOqUBMILb%2FbXJ0tBZiM5BF62kvdwz5%2BtsmYL3URvKbA%2BEZBSrrL7ABDXouIa4cdYhh32kq4cEuBATNQg9u7pi8%2Beb3A6ujFFxbP858cI8H038tOYPZX6eSVM8DbZFDN4ARqSy7vv6dPG%2FmEMK%2BA9MGgESFOX%2BaYptCN6X9Y4mbSOFRV%2BWY14nMtuIX0sUZqQQTN%2Fcf9W54XoYEktTI7w2MI8RhaT34DiI&X-Amz-Signature=a00d969ff06fcfe6d711b53cf644d099369c2ab23dd53771d4e48cc35cdd6b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSY5KKCN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEqwL4u1vZ38tWUaWkKu3QFYG6YwVXOdZykSV8beaWyAiEAhAs0ji5%2BYHU7e%2BF1wOMn54fSVZTgO28QWo7QWafZlhMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2KEFla3N%2BrJJJ1hyrcA8ZSrvy0SMD0pjwnzwY4i3iIwVUFxcTSWvilGBVV5%2FJtZUN8uMbhIjEnBcumyjhAf5%2FQhh1Te3lANH0eLDTm22yjFQ%2Bjv0Ar1%2FpjK9l2Qr9TAUJLLZ9VgKbz3X3gky3803TMx1Q7i9aGRzVHrPnuEgyp6x5KzBQ3Usw5j%2FmChg91iBTn8HI0bQqhs8j9oiNiLKV05YVThyKlN5iT%2F6AAqDYV107CDgwHj%2BCnHnkfd%2F4Jczf35XblZt2udoWNy7O1klO5C7hHyy2fHWDa9yPCaaMppqWzKvPUrKdmTr8JP3Gk6tS8tdMARCEjPCvWjBGwcwkQjIjYuse6ro45TR5slsixtR09mn%2Bfg6rNBY6fuEQ1W1qweOjZRK0Rs8Nvyvz%2FoHFF5sCj8FcqAsHTBhr%2FHv7C5kE3Itoqbkn6W1FV4vlnXMEcTbG42fXkw0%2FAZbI26yC2a8CsMJVenCGsPiv0WyxGO5uWszefCGyJDqliOHHOlR4stfhsSqPSOO5Sl5oVoAoZ8R8IOSfzbq0jOiJEfeIsnQx2Y5I9iDhYF4uwUsyDO6Oq8Y5CM0i50tPzk%2Bsxlef2y9JDcd7LJMp%2F8B8Qb4J%2FvHn5xbrDoJUsP1THB5yBSaz68wWbgpwsf8M%2BMOyk38kGOqUBMILb%2FbXJ0tBZiM5BF62kvdwz5%2BtsmYL3URvKbA%2BEZBSrrL7ABDXouIa4cdYhh32kq4cEuBATNQg9u7pi8%2Beb3A6ujFFxbP858cI8H038tOYPZX6eSVM8DbZFDN4ARqSy7vv6dPG%2FmEMK%2BA9MGgESFOX%2BaYptCN6X9Y4mbSOFRV%2BWY14nMtuIX0sUZqQQTN%2Fcf9W54XoYEktTI7w2MI8RhaT34DiI&X-Amz-Signature=ec9a2ca9f39aea45819bef3d7c911e4bf125dac7b7f040c8b11a52c387d0c9d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
