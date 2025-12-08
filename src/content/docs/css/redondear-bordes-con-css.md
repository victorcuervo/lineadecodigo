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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REKMSAAD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRvv6EWWimjqWB%2Blu7MQDT%2BxxdybDvYH8oM%2Bhcgf8yLAiAhdHbtMufTGBBjN7p6IGTEor84prCDtfA2nTNN4bdAsCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM38JpBCseuxggypbkKtwDtWS6fz8VSZ8XJw7o2bBw%2FIUO6XUBNEZ2WwKndx2fDTXVr3ku1lM2I5atPFHnQ%2F6%2B1zGlnr6MKp63QyQB0FhbPKyv3n%2FesS%2BNhs5jGC91YCzOum3jAsiIR6JwNpu6VhdwUltYoKOFLqEnkNjBA7BfoilkOUwc38FcKHupPXNNZLYlQP1vM1zj4gWInDwk6gE6pA%2Bfr0jqPTkMVgQakSbF9PjwbiFnNwgKYBJ2yH2hU36sd5vCogBJQHRiAhcBu7AivQPm5VE%2F5g3sqGAB3NRLhPEexWYQfRcXnB4xzdcnAyVGYB3PT3s251cpAc8Db0EsLrRYbOIBtIRWVP5nTMT9TrDI%2BYa15wbdQhiMC2QjDd8MYNKr5z8pcfEBydcSlxzlDifztZUIbPuPV0eW1Knzt42O6qKj8CmfkHHijzjkWKzwJMiCuIMChq5Ymg%2FJpPS6Jccobv3embshRjLhOKqgcHCY2bJGUyl1QXlLC%2Bm%2FQuBQnsCeKnGWKpvqu4MOszbUF1Fm2jA1CueeJ643NtrKAnsbaQhTFPblLhoqRDZS%2FFsNDuLJeyFpqHVqTXfGaIV5HdkHh9ybnSTqPlS04oz9vHeP21stomHrG%2BTdmum2qUrenD3eBH0Cd3h1F4IwwO%2FYyQY6pgGK14HuY4GHlcenuWM1Zzx%2Be%2BbV6POGs72IebrQBL83brBN8hFdjgCkbGJfZfjI9NSxl1k3DPvGTyDOT0hRpXpnXJ6Ny%2BJvQQL891SBry7S6Qux7Eh2kVC00pxxD0ftK702hVLZ1oFprR9aGZ3gjMFqPAS8QpDSznZcq24uQZu%2F0Q88IZBzKtr1565EbCW3f%2B63KCuwXDodVHKwDHF4ZsvW1ATIW5Xq&X-Amz-Signature=81e7174b93523ee24374c32f46c247723a75b635e5db25b8bda537e122b66f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REKMSAAD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRvv6EWWimjqWB%2Blu7MQDT%2BxxdybDvYH8oM%2Bhcgf8yLAiAhdHbtMufTGBBjN7p6IGTEor84prCDtfA2nTNN4bdAsCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM38JpBCseuxggypbkKtwDtWS6fz8VSZ8XJw7o2bBw%2FIUO6XUBNEZ2WwKndx2fDTXVr3ku1lM2I5atPFHnQ%2F6%2B1zGlnr6MKp63QyQB0FhbPKyv3n%2FesS%2BNhs5jGC91YCzOum3jAsiIR6JwNpu6VhdwUltYoKOFLqEnkNjBA7BfoilkOUwc38FcKHupPXNNZLYlQP1vM1zj4gWInDwk6gE6pA%2Bfr0jqPTkMVgQakSbF9PjwbiFnNwgKYBJ2yH2hU36sd5vCogBJQHRiAhcBu7AivQPm5VE%2F5g3sqGAB3NRLhPEexWYQfRcXnB4xzdcnAyVGYB3PT3s251cpAc8Db0EsLrRYbOIBtIRWVP5nTMT9TrDI%2BYa15wbdQhiMC2QjDd8MYNKr5z8pcfEBydcSlxzlDifztZUIbPuPV0eW1Knzt42O6qKj8CmfkHHijzjkWKzwJMiCuIMChq5Ymg%2FJpPS6Jccobv3embshRjLhOKqgcHCY2bJGUyl1QXlLC%2Bm%2FQuBQnsCeKnGWKpvqu4MOszbUF1Fm2jA1CueeJ643NtrKAnsbaQhTFPblLhoqRDZS%2FFsNDuLJeyFpqHVqTXfGaIV5HdkHh9ybnSTqPlS04oz9vHeP21stomHrG%2BTdmum2qUrenD3eBH0Cd3h1F4IwwO%2FYyQY6pgGK14HuY4GHlcenuWM1Zzx%2Be%2BbV6POGs72IebrQBL83brBN8hFdjgCkbGJfZfjI9NSxl1k3DPvGTyDOT0hRpXpnXJ6Ny%2BJvQQL891SBry7S6Qux7Eh2kVC00pxxD0ftK702hVLZ1oFprR9aGZ3gjMFqPAS8QpDSznZcq24uQZu%2F0Q88IZBzKtr1565EbCW3f%2B63KCuwXDodVHKwDHF4ZsvW1ATIW5Xq&X-Amz-Signature=94228cc086577964f101d6c7a8c6a8347e2ad2f8530327f7e0f9e64031b4b243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
