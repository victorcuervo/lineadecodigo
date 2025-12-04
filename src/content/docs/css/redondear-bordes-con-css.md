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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAHYZLS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFRZ00RSo%2B6Eipv8NUJOEa86sfte3GgqFva3wMpbPm4VAiBpmywfskUpXC8a5ZXQd1F3pRAjp7d9NtSs34PW6TKeiir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQld0%2B51cd7K%2FadQTKtwDpsnfEe7UNacFLL7vadj7qk3Ztejzn823qyqaNnBo713yYTDQuUQtCFGsAElWI%2F68Ve8s41c3RXoDzVykvdEnoX8cT%2BK%2BR03BtUtyaxKrDEMB0kaGOJwf%2BRNw2zE%2BTrTWiGtpAuh%2Fscqwuas3TVt0sDc9e99SlOatDhqXbOI32ONz2EuVslSIYSsmLVHQVbQfWGT9NRRRntiwP%2BMZ3Jhuhc0LXyohM6lOkPfqYAX8aM%2BRYq012atfaJloRQ9fk6dee6DZR0o21NS%2F%2BV%2BYEtOBCy%2FoS7yguzEjhR9r6cgauz7ubCzEZgwZJYGOxPKA2ysgE9qqJCZczcb2kd2maNumklenk1HGbYmxVYX5JB4pjDG9XZqNZdH4zDD6n9eSnD6CCRgEy9tGIywxekTrnwrYWqcvgKpd%2B2QhHkHXIdYAnjVcD3n9R3vJoVx4HhM7IqDHhoVHeVvFdGpaja2hUShId81DrblPZWNQv8tVpacHQqVnzYoV4ncIjzX%2FKTBiZvykSmKID0tLGO%2B38Qf3PuCzrOy43%2BPoWDeVlg%2BhLzpZQRkbvY%2FO1u6JIta1d6Lwyn4PWoWt2y7gQVDNkcwvTnV9jZd0gyWYVOQRdpJikJXCt4oTjVtvHeiUZ1HfW%2Fcwta7EyQY6pgFKDgvWIu7NrTFWeot9KmrWSty7bkjwfNI%2B7fM%2BXmoODW24IlE6KBn76KI3qewSE4OddSug9gCmGvN1qD%2F%2B6MFzDJZDlHXAdEq96iLb7NnD6ja%2BxfDwbXM29nlqaFsBkjEGp4t5UiO3jfXusR9PIPR8p3%2BTYnLBX4zN2ETTb5%2FAQZoCyrDLtoZIBkVrsv0CygEHChr63EIVZhtlpj2wx9nIR3%2Bs4nIb&X-Amz-Signature=1bc2e8fb877d7702ef73c41d1f205c2d37db1dee7b3096d4ce90b0400ff3f7b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAHYZLS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFRZ00RSo%2B6Eipv8NUJOEa86sfte3GgqFva3wMpbPm4VAiBpmywfskUpXC8a5ZXQd1F3pRAjp7d9NtSs34PW6TKeiir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQld0%2B51cd7K%2FadQTKtwDpsnfEe7UNacFLL7vadj7qk3Ztejzn823qyqaNnBo713yYTDQuUQtCFGsAElWI%2F68Ve8s41c3RXoDzVykvdEnoX8cT%2BK%2BR03BtUtyaxKrDEMB0kaGOJwf%2BRNw2zE%2BTrTWiGtpAuh%2Fscqwuas3TVt0sDc9e99SlOatDhqXbOI32ONz2EuVslSIYSsmLVHQVbQfWGT9NRRRntiwP%2BMZ3Jhuhc0LXyohM6lOkPfqYAX8aM%2BRYq012atfaJloRQ9fk6dee6DZR0o21NS%2F%2BV%2BYEtOBCy%2FoS7yguzEjhR9r6cgauz7ubCzEZgwZJYGOxPKA2ysgE9qqJCZczcb2kd2maNumklenk1HGbYmxVYX5JB4pjDG9XZqNZdH4zDD6n9eSnD6CCRgEy9tGIywxekTrnwrYWqcvgKpd%2B2QhHkHXIdYAnjVcD3n9R3vJoVx4HhM7IqDHhoVHeVvFdGpaja2hUShId81DrblPZWNQv8tVpacHQqVnzYoV4ncIjzX%2FKTBiZvykSmKID0tLGO%2B38Qf3PuCzrOy43%2BPoWDeVlg%2BhLzpZQRkbvY%2FO1u6JIta1d6Lwyn4PWoWt2y7gQVDNkcwvTnV9jZd0gyWYVOQRdpJikJXCt4oTjVtvHeiUZ1HfW%2Fcwta7EyQY6pgFKDgvWIu7NrTFWeot9KmrWSty7bkjwfNI%2B7fM%2BXmoODW24IlE6KBn76KI3qewSE4OddSug9gCmGvN1qD%2F%2B6MFzDJZDlHXAdEq96iLb7NnD6ja%2BxfDwbXM29nlqaFsBkjEGp4t5UiO3jfXusR9PIPR8p3%2BTYnLBX4zN2ETTb5%2FAQZoCyrDLtoZIBkVrsv0CygEHChr63EIVZhtlpj2wx9nIR3%2Bs4nIb&X-Amz-Signature=25dff4102c4bd4deccd51ad3328750859ab97c9388bbab77a2235638b4603e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
