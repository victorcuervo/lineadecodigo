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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63BOBTK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB%2BkXP5HkooxzaGH0uqjW4v%2F6A4c%2FBekZWPm1Cr9%2FppeAiBvNtdR3QYW5%2FW%2BGFAYWQ0ovLMvxL7CXNTTOLq8LrM5zCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMTavrsjvXpwbzUWmfKtwDhx4cUsPwUOFt2GEMwsWcDeacF8h49GoOJCy96qmT%2FZ7LMW9nRloa7G23qCG5ZutepS%2FU1HKBZZmbIj6uP7kE%2BU%2Faj7c3kj0XdfqelAxwcGZPTkZWyYrCIx1gNfnTM1RTBZkZVtVTepy0t%2Fsshfq4enOk%2BeVW5E8D8IW8RBFoLEIxSOLyCc2Z67mZiPFmkbvZjC607m1rxxNMHJvSNWLIbNgkeCLmA3%2BKj84TdAZwVOT0WNqrFOBotlAYAdusrOAYGvB6iW%2F855nPLw9lqoXwiMyZ6JNI9vm4894D7oECmOsTA%2BmzitrYTLa9J8Y1%2BfiGGIgrmbnk%2BgzrvYKenTT8rYSAH57UM7irxZkKgLxsrLK1h7GqExGOvFpKtD5tPbG4esuxy3d%2Fe0B51QvG45UvUcahuBoKps8o0fbVHmln%2FeBqpRwGZxny%2FrLqyxPzKNhxQ9McsVGY6goofz%2F62J0y2GJ2GuvFEm8qCe%2B83eCqSiyR2Qkaz8NZPlQBvvhxE%2Bd0T%2FEUiocGmFQLC9J4Yd0bNcuuVBGDoU4eMwN85pxiyl3HGvUdtGPo%2F75dA5QJQDT%2B%2Bfp785ebdgjMaNXB9gjs026kkJASl8aXVpLyOeAGWn7J0G35MOZ2s4n6GZIw9MrEyQY6pgEALB1PAq4f0z7n5SYaZuT0W9L%2Bwt7dToYP%2BOtc9Sx7c3SxZoFWUghM4%2BorwMXHaIgcNjtWSs6nJuRj1h43fN%2FLdUrnz9Xc8k595pNYh0gaTcWKOBAJKl6in7flcd0PUzMpq7vntR7vcilfM30p6kEgh4cj37ICJPPx3gPkujb5P49Hri1vn7TRLhEiQBK%2BuSxgGlHXuHMFgY%2BqzRXAIz5p7M%2BX6Hf7&X-Amz-Signature=cecc4c3afce48708df0ce9ff83d48796ae0e0b1635dc40897c48e3cc4e612267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W63BOBTK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB%2BkXP5HkooxzaGH0uqjW4v%2F6A4c%2FBekZWPm1Cr9%2FppeAiBvNtdR3QYW5%2FW%2BGFAYWQ0ovLMvxL7CXNTTOLq8LrM5zCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMTavrsjvXpwbzUWmfKtwDhx4cUsPwUOFt2GEMwsWcDeacF8h49GoOJCy96qmT%2FZ7LMW9nRloa7G23qCG5ZutepS%2FU1HKBZZmbIj6uP7kE%2BU%2Faj7c3kj0XdfqelAxwcGZPTkZWyYrCIx1gNfnTM1RTBZkZVtVTepy0t%2Fsshfq4enOk%2BeVW5E8D8IW8RBFoLEIxSOLyCc2Z67mZiPFmkbvZjC607m1rxxNMHJvSNWLIbNgkeCLmA3%2BKj84TdAZwVOT0WNqrFOBotlAYAdusrOAYGvB6iW%2F855nPLw9lqoXwiMyZ6JNI9vm4894D7oECmOsTA%2BmzitrYTLa9J8Y1%2BfiGGIgrmbnk%2BgzrvYKenTT8rYSAH57UM7irxZkKgLxsrLK1h7GqExGOvFpKtD5tPbG4esuxy3d%2Fe0B51QvG45UvUcahuBoKps8o0fbVHmln%2FeBqpRwGZxny%2FrLqyxPzKNhxQ9McsVGY6goofz%2F62J0y2GJ2GuvFEm8qCe%2B83eCqSiyR2Qkaz8NZPlQBvvhxE%2Bd0T%2FEUiocGmFQLC9J4Yd0bNcuuVBGDoU4eMwN85pxiyl3HGvUdtGPo%2F75dA5QJQDT%2B%2Bfp785ebdgjMaNXB9gjs026kkJASl8aXVpLyOeAGWn7J0G35MOZ2s4n6GZIw9MrEyQY6pgEALB1PAq4f0z7n5SYaZuT0W9L%2Bwt7dToYP%2BOtc9Sx7c3SxZoFWUghM4%2BorwMXHaIgcNjtWSs6nJuRj1h43fN%2FLdUrnz9Xc8k595pNYh0gaTcWKOBAJKl6in7flcd0PUzMpq7vntR7vcilfM30p6kEgh4cj37ICJPPx3gPkujb5P49Hri1vn7TRLhEiQBK%2BuSxgGlHXuHMFgY%2BqzRXAIz5p7M%2BX6Hf7&X-Amz-Signature=719be5d3e43d1690441457b51ce763504cafbf7ce4a0a5b69ff76634848e3b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
