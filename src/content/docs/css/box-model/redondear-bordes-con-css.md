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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623BIGQAV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvvym%2FiIJi%2Bk%2BUphNS27Vkxf2nAhqy3x9MeXnmvZj%2FEAiEA6DnMg8uPZ%2Fep5mrjQbPLQX2jMGe9pEoLDbRyYcc7pyUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMdbVF6IU5FaG3v5PyrcA2N%2BkvOPQpbix0IBvC1iUizaiaeJpa6scfNLK0nfP%2Fa6DyX5mna8GvYiR7VcH397IuWmUjAoUcbikWcNUJVBk46BBfaz6E%2BeBAjnPpSovXsA0hlwq54cdCHVUj242VOutC7S%2BesH%2B1z3Svk2IhuZP2scNQF2cHfk612u8aIDS7AOj25RztxW%2FAOy2lZuahLeswL27HAkbxpFoTL59A3UbwXkPvMK%2BQTofN19kmaNOXUw1P%2BLAfm%2BIH%2FrLzkVdqPXgohSHinbmacUgyTqjA0qoMV9hZFKaEGVrnLEF%2F8fwqRgl3U3B57QuugqWo1g3CVCGKSznqZmdKrdFl%2BlW1G9kXLQMj6EWPJ5rqgMCC3Nv1mBekDINAUq4LSZ%2FwXwwbZz6SocZkhgFUhsk9gOC%2FlyPhl%2FJg9mIOjjxyTq4EODRqXm2nq4whEQtVMnTPVxq65h7GyW3fqR9YhJkWetBwktESeKtA4FgLBCr0xSKNn1GAp9t71yOLq9P6rCb%2B9DS5EzVQmEcWsaGfWcfF4AM%2Bt%2BYvDD%2FbOZJDb58XJA9xWenGOhujAcBdS5F6b6%2BY5STq4eakPDfMZ1aWefX0MvrdmCyTgBHS8%2FBfmSlsCWcB1oQQBqrBW7X4PMeE1kCT65MI7OiMoGOqUBdUndrgDtGd1B2WzEl0fL%2BBYkWr2t4OHEXYKI9nA9F6XlXnahyjcDCOl5%2BjJYaU03yDHFY2Cfd0jBhYnekvE5gQ%2BuZO0LoXR6Yvp6yDhI8sH5XOknUYNxIi6QCzWqf06AV2wCR7YMImvuSHJtgsb4oIx2wi8mZeMP%2BhUQCv9QtBq9Z3NL6NzK4u3PU4hB8PBWmbBoS9OzFXvjfcw3%2BCt3W0rDuSvc&X-Amz-Signature=42d307e272bef26265660697748446a85c7029f8cf19525be4ed66fd04343fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623BIGQAV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvvym%2FiIJi%2Bk%2BUphNS27Vkxf2nAhqy3x9MeXnmvZj%2FEAiEA6DnMg8uPZ%2Fep5mrjQbPLQX2jMGe9pEoLDbRyYcc7pyUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMdbVF6IU5FaG3v5PyrcA2N%2BkvOPQpbix0IBvC1iUizaiaeJpa6scfNLK0nfP%2Fa6DyX5mna8GvYiR7VcH397IuWmUjAoUcbikWcNUJVBk46BBfaz6E%2BeBAjnPpSovXsA0hlwq54cdCHVUj242VOutC7S%2BesH%2B1z3Svk2IhuZP2scNQF2cHfk612u8aIDS7AOj25RztxW%2FAOy2lZuahLeswL27HAkbxpFoTL59A3UbwXkPvMK%2BQTofN19kmaNOXUw1P%2BLAfm%2BIH%2FrLzkVdqPXgohSHinbmacUgyTqjA0qoMV9hZFKaEGVrnLEF%2F8fwqRgl3U3B57QuugqWo1g3CVCGKSznqZmdKrdFl%2BlW1G9kXLQMj6EWPJ5rqgMCC3Nv1mBekDINAUq4LSZ%2FwXwwbZz6SocZkhgFUhsk9gOC%2FlyPhl%2FJg9mIOjjxyTq4EODRqXm2nq4whEQtVMnTPVxq65h7GyW3fqR9YhJkWetBwktESeKtA4FgLBCr0xSKNn1GAp9t71yOLq9P6rCb%2B9DS5EzVQmEcWsaGfWcfF4AM%2Bt%2BYvDD%2FbOZJDb58XJA9xWenGOhujAcBdS5F6b6%2BY5STq4eakPDfMZ1aWefX0MvrdmCyTgBHS8%2FBfmSlsCWcB1oQQBqrBW7X4PMeE1kCT65MI7OiMoGOqUBdUndrgDtGd1B2WzEl0fL%2BBYkWr2t4OHEXYKI9nA9F6XlXnahyjcDCOl5%2BjJYaU03yDHFY2Cfd0jBhYnekvE5gQ%2BuZO0LoXR6Yvp6yDhI8sH5XOknUYNxIi6QCzWqf06AV2wCR7YMImvuSHJtgsb4oIx2wi8mZeMP%2BhUQCv9QtBq9Z3NL6NzK4u3PU4hB8PBWmbBoS9OzFXvjfcw3%2BCt3W0rDuSvc&X-Amz-Signature=20e0c17b4980e70faa3a6454c46e157ab67783b934346e07bee364ba27035971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
