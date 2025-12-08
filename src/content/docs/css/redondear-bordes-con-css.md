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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FC5BPL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDx2osRiELhlf09SkJxVxx4MFH%2BF0tf3eRulC7IjyMUYAiEA53raw%2BR59QhLiZn0EMEoAHgPtjTtbpJT0FriMaZ2BqsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLP40jGDB4yWCw%2Ff3yrcA3ekAfmIr6Jq2VDOEw%2BZsSyBHe2cx0qvvDKmcwkxTnH164oANCqJMFxX8BlALK0Z36c3XKzSAnZtPiLpqTHnBflYHOd3lB%2F6NJLxxKCjjqmsebntER5DoGFITx7opAcS6ZoGmqnwTgFXrG%2FMOsIzHV6%2BqFru%2Fb6gk6iiYS4LQrhZGsJ0YaGiFGJjxb5a59hpqub%2FUGrzmSPcGwg9LmvZV84cD5RJkS6vSt8lS9jQwmS4tIQ6DtuFmtkns6xWMLZ8Es%2BxZ%2BeJVLQxWR3o7Jf3z51Z6kD65XsW9kHGnCa3SFF1WnCNYtBAxmZIHP2%2FkDJU9eOgFy1Ye3Js8KUk32huDWurKf1zdoO%2FzfDczAWtNF0i5q8o4uN4laKhPISP7rMhRmOO21%2Bs45qAHrAWHy7Am2ByQNUoMi0KAQDipiaWA4VbVAqqWnONqbtWSv6W%2FEMUHyQ%2F0RaTgfh0wO6E50UcQ0BCV5y9FE6yLT%2BCmlOKrIr2bhmyx15NaQTA45R2OBdUfjLNfviZHWlJXH%2ByR6iflzPTo2T0exxcCpNA09t0XCcfWPrcqcwum02u3KMspBaGSPQtQ%2FlheVFbCNpH2TpRc%2FSRN8fZg4BEyVpy75VOHpz9Zmr%2BNBAWqs0SP6kTMMyz3MkGOqUB8clZD3st9lqjLUwImM8xpLeo61AAlMtc%2FROpf5OvPSs%2FHG64rafwJWP0ugWaEim0j9mG6aLAydkMZXCkDjCPtIz%2FnzgFtQjnkMPjfxLyyEDnK%2B%2BwJEsb229U9dzuX%2Fv%2Bns%2FdB6vsfyUvwR1bBKmsKWb9hFy4%2F4pvx8SIRjcT3WifdoWfV67o23b4%2FuGcXDY%2BKqynZ2x6%2FK3%2FzRBa3GB8GuS4cdhH&X-Amz-Signature=074baad644dd6aefb820cf864e9f0acee9ebc432cf2773f012dc44a17892cdea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5FC5BPL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDx2osRiELhlf09SkJxVxx4MFH%2BF0tf3eRulC7IjyMUYAiEA53raw%2BR59QhLiZn0EMEoAHgPtjTtbpJT0FriMaZ2BqsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLP40jGDB4yWCw%2Ff3yrcA3ekAfmIr6Jq2VDOEw%2BZsSyBHe2cx0qvvDKmcwkxTnH164oANCqJMFxX8BlALK0Z36c3XKzSAnZtPiLpqTHnBflYHOd3lB%2F6NJLxxKCjjqmsebntER5DoGFITx7opAcS6ZoGmqnwTgFXrG%2FMOsIzHV6%2BqFru%2Fb6gk6iiYS4LQrhZGsJ0YaGiFGJjxb5a59hpqub%2FUGrzmSPcGwg9LmvZV84cD5RJkS6vSt8lS9jQwmS4tIQ6DtuFmtkns6xWMLZ8Es%2BxZ%2BeJVLQxWR3o7Jf3z51Z6kD65XsW9kHGnCa3SFF1WnCNYtBAxmZIHP2%2FkDJU9eOgFy1Ye3Js8KUk32huDWurKf1zdoO%2FzfDczAWtNF0i5q8o4uN4laKhPISP7rMhRmOO21%2Bs45qAHrAWHy7Am2ByQNUoMi0KAQDipiaWA4VbVAqqWnONqbtWSv6W%2FEMUHyQ%2F0RaTgfh0wO6E50UcQ0BCV5y9FE6yLT%2BCmlOKrIr2bhmyx15NaQTA45R2OBdUfjLNfviZHWlJXH%2ByR6iflzPTo2T0exxcCpNA09t0XCcfWPrcqcwum02u3KMspBaGSPQtQ%2FlheVFbCNpH2TpRc%2FSRN8fZg4BEyVpy75VOHpz9Zmr%2BNBAWqs0SP6kTMMyz3MkGOqUB8clZD3st9lqjLUwImM8xpLeo61AAlMtc%2FROpf5OvPSs%2FHG64rafwJWP0ugWaEim0j9mG6aLAydkMZXCkDjCPtIz%2FnzgFtQjnkMPjfxLyyEDnK%2B%2BwJEsb229U9dzuX%2Fv%2Bns%2FdB6vsfyUvwR1bBKmsKWb9hFy4%2F4pvx8SIRjcT3WifdoWfV67o23b4%2FuGcXDY%2BKqynZ2x6%2FK3%2FzRBa3GB8GuS4cdhH&X-Amz-Signature=e9e614ac7691b9969f7de7f2a340832c57a51e2892e79a247c6b93c34b8fb999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
