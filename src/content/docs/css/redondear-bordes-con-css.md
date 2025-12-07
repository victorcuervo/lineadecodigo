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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYHQC3I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChCpd5V2685sjQpNG9%2BWZINL%2BijWUj8hMin7OMCsNiNAIhAM9M8DhkHZgmwWUAzPUSw3yhFta7MHLJaCS7QcL%2BgN2QKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqFWw0jrCGQn0%2Fnewq3ANqNswCMesIVlccG6vx4k1Tu%2FN4lPwBfWuByl8TOU8kWXr%2BbxZAr%2BWJdmEUFrCowuXZVaxaa%2B0YEdkALC6Xdg8jwgrhr30LP3DH30Nkz6IdXQt4BB48coMNvfNWykHnVyXXf3D898%2BAQdhErRR2cjg4KRSiGluyw1PJwJrelB5wEUEvOJupZCZkPsX3RioaY0I3QulVqmr8w22xfyY6ZrTVADXxFOxPGLFM%2FB%2Fm%2BRI4j7zqQDwa%2FQ9wkYkdZ6Fe5WTXxuxjUc7%2BJDTgxdGS0fkso6PJmnyM4eKlxwdwXPOZ1qRk30FSYmc1PLSUet%2FSRo6Vi%2BIOJ1N9erHa7%2BGidD3nBn%2BFPfDKq5z%2BT1j%2Bz5qk0GDEqQJiIBTVMr0MHgfDiHZwRIF46Pijrxn%2FlJrL7avVO57GO1py9zMbIWwJM5bkeDvVvr3k1vBN4rW6VelB2M1W2NmGVrHfeDhS%2BMB%2B%2FUbE25GzrBh2WsAb3NJOk2fvDJcPC4cZAAaN2%2BNW4UXITfalqf95oa92NqHkLJzLhsKegPY3cofv0EGm7gqCgd3KcEuUuFK3lS8vo93fAIpO2WxpylHuUzrkNQXMEhJENFkwrCj5xMePOyBpaQan3Z5ORmg4V7mjqA7Am31gjjCsoNTJBjqkAdAfrewWzOf5cgkL7KfNSlxfLYg68qSqI5FgOlLaNSE4YLYZT9ZezuvhysAcRSRq%2FjvY6svNNy7QYMLTW6xqDf%2FsTWsbRaNmuKJa8QTTn1p7SfUnztx%2BxA4aHsjNCp75Q9lOHjmhY%2BGEYbJOFbKLTL7YaG8u4UNsQkqHBiOlZMxTEf0ZpAIeADxe0UmNYGOG%2B1QRniHhEY2vw4YdZajXgr9Gx9a4&X-Amz-Signature=27a3a4f2eefbeb649231643de8fab8051c69d43bde9bcdd5c60fa6793169825b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYHQC3I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChCpd5V2685sjQpNG9%2BWZINL%2BijWUj8hMin7OMCsNiNAIhAM9M8DhkHZgmwWUAzPUSw3yhFta7MHLJaCS7QcL%2BgN2QKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqFWw0jrCGQn0%2Fnewq3ANqNswCMesIVlccG6vx4k1Tu%2FN4lPwBfWuByl8TOU8kWXr%2BbxZAr%2BWJdmEUFrCowuXZVaxaa%2B0YEdkALC6Xdg8jwgrhr30LP3DH30Nkz6IdXQt4BB48coMNvfNWykHnVyXXf3D898%2BAQdhErRR2cjg4KRSiGluyw1PJwJrelB5wEUEvOJupZCZkPsX3RioaY0I3QulVqmr8w22xfyY6ZrTVADXxFOxPGLFM%2FB%2Fm%2BRI4j7zqQDwa%2FQ9wkYkdZ6Fe5WTXxuxjUc7%2BJDTgxdGS0fkso6PJmnyM4eKlxwdwXPOZ1qRk30FSYmc1PLSUet%2FSRo6Vi%2BIOJ1N9erHa7%2BGidD3nBn%2BFPfDKq5z%2BT1j%2Bz5qk0GDEqQJiIBTVMr0MHgfDiHZwRIF46Pijrxn%2FlJrL7avVO57GO1py9zMbIWwJM5bkeDvVvr3k1vBN4rW6VelB2M1W2NmGVrHfeDhS%2BMB%2B%2FUbE25GzrBh2WsAb3NJOk2fvDJcPC4cZAAaN2%2BNW4UXITfalqf95oa92NqHkLJzLhsKegPY3cofv0EGm7gqCgd3KcEuUuFK3lS8vo93fAIpO2WxpylHuUzrkNQXMEhJENFkwrCj5xMePOyBpaQan3Z5ORmg4V7mjqA7Am31gjjCsoNTJBjqkAdAfrewWzOf5cgkL7KfNSlxfLYg68qSqI5FgOlLaNSE4YLYZT9ZezuvhysAcRSRq%2FjvY6svNNy7QYMLTW6xqDf%2FsTWsbRaNmuKJa8QTTn1p7SfUnztx%2BxA4aHsjNCp75Q9lOHjmhY%2BGEYbJOFbKLTL7YaG8u4UNsQkqHBiOlZMxTEf0ZpAIeADxe0UmNYGOG%2B1QRniHhEY2vw4YdZajXgr9Gx9a4&X-Amz-Signature=430ad907f3d423de117908443e4c0af0cf54c2c79039916067b1267e9b7a93d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
