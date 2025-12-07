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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7WUGYL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvKUK%2BgdI9sV8J75Ekc3%2BpbZ4D5iT6bcxWSHiCyhufdAiBXko7LKu6nvBh58e%2FJetM15KA%2B6DYTsZPlFlqPFVQOryqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkP4tL8T2KbUhuyEnKtwDICVuk1EmdAPwQHTQlnI1ctsk%2F25m0ewE5rQQ1oxCY82HOM5lyVkoMeySKGZIorbiJHWA9no%2F7gG3518mr0lewrX5FFCzh9Mx7NFwUq9ByKwatgfBFjI%2BIQOMUqPrSDuCouPVibTWYHTJWk%2FkY%2BmuF5sIop64huyzRKRQfwrK%2FoWet9Ru7%2FE9oeUWWaZ02AGKxX2LGcZNYmRweQbk2rTSCw59I0iA1%2FItJoSn%2BE1g2uLIMLVbLN%2FxxyEsNTqnwD%2FPBDZzam5rzkxm29a3hkBMkTFKuYRYjgzKfJc82TzWJ9SxM9hBdRgQ0pvRxR9KKDWfB7Y3pvgALcmEC1GA6wT2J8w3EIwbkMSz0gUa8HLzl3%2FtBUVQAWIxaQKbpvpLxhaB9iUb0VAOPp8oNmtNC4MzWK5HnA1U%2FYdFmCylIgwprRqVCuU%2Bm%2Bl8t8J7VuW0%2B%2FVhx7B76nv4otdVol29tbmCMRpJtKg68gocYmp8U1Ut4qaSkxCysv2JTCfrpxSXqcpL4GsG%2B59o579Xn6BkT1Zd7zI1j%2FXnLhcjkMbknZixtNeCH%2Bx3DDtI%2FLELFXqmFh8j6RGJa2MKF4QtR%2FOjm3utvIrq8fGXNI81XBlFVP%2B%2FdDULmEOswFRThOesZFIwzr%2FWyQY6pgEVs5fC2uTvLcMliLSbxm1yqIaIiFfbs2tEdynPhh06yZaUhFUotkNyqyChEJ0QoKEfAAciF1HCE43c7ecefdxguFlm8XfAKbjeESsxfvuBDjQJB1rlLBZeqlAXrQdy2f4orH0d%2BVUsnJYXmoSiw710UraF5MulbL%2B1c59Vupdmphj9R62BYjuUQPqXVCAWJmxZ8eZkFcMI9A0AwglMLrG3ih3oMHsM&X-Amz-Signature=89526949ced90b249b496846aadcb4445fffb3fd8b557894e027a9518b3370c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7WUGYL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvKUK%2BgdI9sV8J75Ekc3%2BpbZ4D5iT6bcxWSHiCyhufdAiBXko7LKu6nvBh58e%2FJetM15KA%2B6DYTsZPlFlqPFVQOryqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkP4tL8T2KbUhuyEnKtwDICVuk1EmdAPwQHTQlnI1ctsk%2F25m0ewE5rQQ1oxCY82HOM5lyVkoMeySKGZIorbiJHWA9no%2F7gG3518mr0lewrX5FFCzh9Mx7NFwUq9ByKwatgfBFjI%2BIQOMUqPrSDuCouPVibTWYHTJWk%2FkY%2BmuF5sIop64huyzRKRQfwrK%2FoWet9Ru7%2FE9oeUWWaZ02AGKxX2LGcZNYmRweQbk2rTSCw59I0iA1%2FItJoSn%2BE1g2uLIMLVbLN%2FxxyEsNTqnwD%2FPBDZzam5rzkxm29a3hkBMkTFKuYRYjgzKfJc82TzWJ9SxM9hBdRgQ0pvRxR9KKDWfB7Y3pvgALcmEC1GA6wT2J8w3EIwbkMSz0gUa8HLzl3%2FtBUVQAWIxaQKbpvpLxhaB9iUb0VAOPp8oNmtNC4MzWK5HnA1U%2FYdFmCylIgwprRqVCuU%2Bm%2Bl8t8J7VuW0%2B%2FVhx7B76nv4otdVol29tbmCMRpJtKg68gocYmp8U1Ut4qaSkxCysv2JTCfrpxSXqcpL4GsG%2B59o579Xn6BkT1Zd7zI1j%2FXnLhcjkMbknZixtNeCH%2Bx3DDtI%2FLELFXqmFh8j6RGJa2MKF4QtR%2FOjm3utvIrq8fGXNI81XBlFVP%2B%2FdDULmEOswFRThOesZFIwzr%2FWyQY6pgEVs5fC2uTvLcMliLSbxm1yqIaIiFfbs2tEdynPhh06yZaUhFUotkNyqyChEJ0QoKEfAAciF1HCE43c7ecefdxguFlm8XfAKbjeESsxfvuBDjQJB1rlLBZeqlAXrQdy2f4orH0d%2BVUsnJYXmoSiw710UraF5MulbL%2B1c59Vupdmphj9R62BYjuUQPqXVCAWJmxZ8eZkFcMI9A0AwglMLrG3ih3oMHsM&X-Amz-Signature=854944d28b19f91cc5198aaa5d83714ef5749126046224b40293c474cfa22bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
