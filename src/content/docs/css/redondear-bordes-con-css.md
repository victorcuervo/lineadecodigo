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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HQ7YMYN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBay1B%2F6yK5dGnTm3v6N4fnmGRdPAoWuCrVWq8soR1AxAiAmGhHqa43G0h56yVcXYf8%2BgIyntlyASBjXGTLECYLeVSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMw%2BVK33ZEIe7QxvFAKtwDkBgVjy697vP49jOebuhpZ%2FKQ9mWtt8rtA%2Bo6zltXP64WzucPHIr8WqHUtdsBqCDcsI12qvw0cvM6xcBN2H9xerKnpr8a7mzc4%2B3V4V4nlIvhRzssrbWzzo8yYEBBKjO9YpIb09Z4xXm%2BAcWpDKiZA1ibBbPYb%2B57zmgNkqRvi84K3X%2BZ7x8f5YN5lSKDF7bAxMZtX6uriynqDXJPc0uOrp%2FYG3WM4cRw5wf1pKNnVKPlH8haxeust4h%2BUZG2yCMYaE%2FIM037hDfVC%2FyJ7oeSJRIJFqXOldI8%2Fb1kqx5wJFfvhGA1J1S7Fz5fSbEQwHg0Ya17zUFEcbtG1M4%2BxPsMui9slRnXVYy67qm63AzoD3ZW0xAAjJ2HdXbGDAm9Z4bZDMZHimtoWTtPpP6Oi7YPHQ95gvc16Dnd5v31r4aH6iuIBxFOa6YsMV5oISLCqrtuuGqBDeu29MCii6NSs92bte5Dab15xON7bpo3Ah0h848bIHWMx29nEasapykPstJjdj2PV1UxtCmgIXgqaJX6lcqEp7KcL2RmU77BS8sORynJ%2FlTrnFa%2BGP5TcnzKAwVe%2F5iEuUwjU1XDF1RoXYf9%2FrlaFwtrJdIEUi3uUWapfWx6F33tdCakekYKaigw4ofFyQY6pgF23AovBm8D0J0upOddlrpOlYZiR3FHBSs1f%2Fkl5yN%2BZSrQ3QPF%2FEk27Dru%2FML2wlhwojVeEocashxntJZZ%2FHVgcp45jtsPiXjoPyRTsGgXgCGnRqDfrycNENGJhED0tJD0owz9qRSN%2FDTH4ovHXDLi%2B7jS%2FLKZoeQwAdZ1FHPWChtqJ53v2Au3ZZq8egGJUJjMMIRQ7gcLyD3NnUzfiCzW63NXA5IP&X-Amz-Signature=fc7813b5774ce3092c53bddac9fd04f99077062e40a64d28c43f01c8bd8158b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HQ7YMYN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBay1B%2F6yK5dGnTm3v6N4fnmGRdPAoWuCrVWq8soR1AxAiAmGhHqa43G0h56yVcXYf8%2BgIyntlyASBjXGTLECYLeVSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMw%2BVK33ZEIe7QxvFAKtwDkBgVjy697vP49jOebuhpZ%2FKQ9mWtt8rtA%2Bo6zltXP64WzucPHIr8WqHUtdsBqCDcsI12qvw0cvM6xcBN2H9xerKnpr8a7mzc4%2B3V4V4nlIvhRzssrbWzzo8yYEBBKjO9YpIb09Z4xXm%2BAcWpDKiZA1ibBbPYb%2B57zmgNkqRvi84K3X%2BZ7x8f5YN5lSKDF7bAxMZtX6uriynqDXJPc0uOrp%2FYG3WM4cRw5wf1pKNnVKPlH8haxeust4h%2BUZG2yCMYaE%2FIM037hDfVC%2FyJ7oeSJRIJFqXOldI8%2Fb1kqx5wJFfvhGA1J1S7Fz5fSbEQwHg0Ya17zUFEcbtG1M4%2BxPsMui9slRnXVYy67qm63AzoD3ZW0xAAjJ2HdXbGDAm9Z4bZDMZHimtoWTtPpP6Oi7YPHQ95gvc16Dnd5v31r4aH6iuIBxFOa6YsMV5oISLCqrtuuGqBDeu29MCii6NSs92bte5Dab15xON7bpo3Ah0h848bIHWMx29nEasapykPstJjdj2PV1UxtCmgIXgqaJX6lcqEp7KcL2RmU77BS8sORynJ%2FlTrnFa%2BGP5TcnzKAwVe%2F5iEuUwjU1XDF1RoXYf9%2FrlaFwtrJdIEUi3uUWapfWx6F33tdCakekYKaigw4ofFyQY6pgF23AovBm8D0J0upOddlrpOlYZiR3FHBSs1f%2Fkl5yN%2BZSrQ3QPF%2FEk27Dru%2FML2wlhwojVeEocashxntJZZ%2FHVgcp45jtsPiXjoPyRTsGgXgCGnRqDfrycNENGJhED0tJD0owz9qRSN%2FDTH4ovHXDLi%2B7jS%2FLKZoeQwAdZ1FHPWChtqJ53v2Au3ZZq8egGJUJjMMIRQ7gcLyD3NnUzfiCzW63NXA5IP&X-Amz-Signature=0970d9024cb083150336665c81288516f49fc93ed6da20a5479e448c3215d40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
