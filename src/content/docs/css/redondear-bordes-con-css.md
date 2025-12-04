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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3Z7EMRF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDFXh6g%2B9nWezxayNaSTk1F%2B6eKN0BU9E0PS7Fc3zQftQIgfsDTTxUlUG8JVSn5JS0lz83UEr2%2Be7I9PnFQIoF6Drsq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLPCKo9r3ls4lmeIeyrcA4irI9EdQDU7%2BPOfamItRWZ1XCk%2BEh0zEU6Ur1NY6UE5K1NUhqlx3Uu5hHZJOmyXXH6FuxYHXhpG9d2IP78yuQ%2FP3XpequA10jm2CHxwL3h5mvb3IHHulDAumXPr6NSR548AMPy%2BENa%2BLWBhK9W6lqnQs%2BmXyTgzSI72YlghOOFLLbWOR4wrAV4n4dIg3ESREpoSQdWUibdkWM6agESayUj9PNfjDla%2BupTlQ%2FchmZLLM6Xc7S1O5hVc7yA6%2BX0rnT1DI9DLlAq%2FV%2BSoPsjdVdKDOPMslUJdakkC1X0Kr2IFlVjeoFlKXAeOeazmw7uEUoxtjZo78dvMc%2FcGgfzIcMZd0m4KSsXQsnmXOlPVFvkem%2BFDs0uJ5jYiwJrxDFp8y5YItKoGEz2cVv2U5PmVUIA2oOqwMCdlheVaxunwMJy3N%2BO87sNt8kkUUeAT1Wz%2BuCR1zQFBB7sbkzT874QeTARCRSOtF7NUqEQk5uMPohHXXQ2WdnmJGnjRzgz9Yo2o%2FVWvdYnMfJ%2Fr5s921T4261Gfi6Qihy06MeeamKmmBmaBSPzSS1vp8U%2BLncXBRsjKf3jEhEyz3bhrUz0LTJMjvF5RuV5a35WePbVsbwsQ3dkggCVBnY0eK%2BbiPHcxMMW1w8kGOqUBq3g9Rw%2BzRR6gP6POhtUHpaj%2BaJni38kLDPINKkcmB6XnneWlh7Tg7oMA1NwyYFdklUJ1xK%2B%2F8AnKaF0ZQchWozzfPzn11yNeft%2FGroTNsthrxOlbNQwOebreT7Ru7L2qw9WtBGwiK7qbeWhIiVmmHR0b6H0a4skFeh%2BpnMJWS1lTDE8iTRv%2FLduxvr53b%2FmHwcvn%2BzNUlIs3e1P6%2BtoN61tW4dVm&X-Amz-Signature=497601510ef24f608184f2b1e108849683e5bb3b195d5f1d65b48eeffc06f355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3Z7EMRF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDFXh6g%2B9nWezxayNaSTk1F%2B6eKN0BU9E0PS7Fc3zQftQIgfsDTTxUlUG8JVSn5JS0lz83UEr2%2Be7I9PnFQIoF6Drsq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLPCKo9r3ls4lmeIeyrcA4irI9EdQDU7%2BPOfamItRWZ1XCk%2BEh0zEU6Ur1NY6UE5K1NUhqlx3Uu5hHZJOmyXXH6FuxYHXhpG9d2IP78yuQ%2FP3XpequA10jm2CHxwL3h5mvb3IHHulDAumXPr6NSR548AMPy%2BENa%2BLWBhK9W6lqnQs%2BmXyTgzSI72YlghOOFLLbWOR4wrAV4n4dIg3ESREpoSQdWUibdkWM6agESayUj9PNfjDla%2BupTlQ%2FchmZLLM6Xc7S1O5hVc7yA6%2BX0rnT1DI9DLlAq%2FV%2BSoPsjdVdKDOPMslUJdakkC1X0Kr2IFlVjeoFlKXAeOeazmw7uEUoxtjZo78dvMc%2FcGgfzIcMZd0m4KSsXQsnmXOlPVFvkem%2BFDs0uJ5jYiwJrxDFp8y5YItKoGEz2cVv2U5PmVUIA2oOqwMCdlheVaxunwMJy3N%2BO87sNt8kkUUeAT1Wz%2BuCR1zQFBB7sbkzT874QeTARCRSOtF7NUqEQk5uMPohHXXQ2WdnmJGnjRzgz9Yo2o%2FVWvdYnMfJ%2Fr5s921T4261Gfi6Qihy06MeeamKmmBmaBSPzSS1vp8U%2BLncXBRsjKf3jEhEyz3bhrUz0LTJMjvF5RuV5a35WePbVsbwsQ3dkggCVBnY0eK%2BbiPHcxMMW1w8kGOqUBq3g9Rw%2BzRR6gP6POhtUHpaj%2BaJni38kLDPINKkcmB6XnneWlh7Tg7oMA1NwyYFdklUJ1xK%2B%2F8AnKaF0ZQchWozzfPzn11yNeft%2FGroTNsthrxOlbNQwOebreT7Ru7L2qw9WtBGwiK7qbeWhIiVmmHR0b6H0a4skFeh%2BpnMJWS1lTDE8iTRv%2FLduxvr53b%2FmHwcvn%2BzNUlIs3e1P6%2BtoN61tW4dVm&X-Amz-Signature=99a597bea16e259a8e30892af11068710ab839328e045735dafbd62e6a38b381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
