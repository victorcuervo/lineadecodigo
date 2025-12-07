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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PNJNJD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAq48rXuVZp05R7CyH5uHUJKRkusmOOGv%2FJuSnQlG%2FQLAiEArIGpgBNZzJYkDj9xaF0QlqP4dseyBy%2FETPgbc2pZqCIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbI1OaadqGzQ%2FDhQCrcAxrPL1vN4Ihs0w7oxTqTCLa6NDiIMm%2Fra6mkiWPas4vGSpqz0CmGfID%2BhmT9P%2FCv%2BUKkeEgflyfeYEUAA7SCreYc0juOvRo1pxv%2FeyNUEmYCNPTClk7vEdckaspB%2BnXXv6ugg2IIyPwQmpfRhcfhGb7ChpNrvT1o226Q9SU2xozO%2FqkR5s5kBtyBn9eRdu5RIvdhZRANCiRvTEHnEodorWWPWyTQ6Zpyl0K8CSsAw4aRoCF6yGMsBsxxWq%2F9TvP0qEvvMl8Utn41%2Fx3IDcBpZrhu0NYAh6FCik59HLB%2F99WhTLzR8ADUwfIw8%2BUuZQvymw3%2F0mCe1%2FWSxBo8LlfTuJ5xq5k2s9B0kFiQODYXLfMG%2BS2LzL9ZG54KT1ML1pIogcBxmTsAsiEUdVoSovPl3upIU0da86NDY%2BlRcMBDfIFMkQwJdw9l8Czy5kmenCzz25AjOJk76SRjBZOmVT0dSoabl7EQVDTFUEyNjfQiw9rC7%2Bc2eur9UwgwGN8XGksiaUZtUyCwXtOvgunjSeQlM74u4U81BwFuRd1nExOlNt6tjmRA9yXE1K%2Fu2cxUvmrgXDeCxSSMDGEAStAYxV5O7TY55zUqNiQ9wIC2bi90%2BB4lDTUIjErC6PPZP1CjMKP90skGOqUBKFPZSOIpithR2GzYOYRQn1XTObqvNw67F6bEvZplYE9PVW5aC%2FuL%2F6XsGsaw6CSIXUgQYti7vl5cMWsiDaT4PDhUHicQboMYmwO2vQyB3UHZLN7o7ysCqY0s58SapBSAXiPvc2Bdp1COICNJmg6St%2Fp9jFqLEeYgHIcS99e7DUG5fDox%2Blkr5cYdrfVbuW7HsqPaoEaD6O2g6Bxg3gbZbbSyLvox&X-Amz-Signature=b084ccffc4afcd1c23299562d126775af48fc5fc0174bd2a2f8c8f119cca8eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PNJNJD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAq48rXuVZp05R7CyH5uHUJKRkusmOOGv%2FJuSnQlG%2FQLAiEArIGpgBNZzJYkDj9xaF0QlqP4dseyBy%2FETPgbc2pZqCIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbI1OaadqGzQ%2FDhQCrcAxrPL1vN4Ihs0w7oxTqTCLa6NDiIMm%2Fra6mkiWPas4vGSpqz0CmGfID%2BhmT9P%2FCv%2BUKkeEgflyfeYEUAA7SCreYc0juOvRo1pxv%2FeyNUEmYCNPTClk7vEdckaspB%2BnXXv6ugg2IIyPwQmpfRhcfhGb7ChpNrvT1o226Q9SU2xozO%2FqkR5s5kBtyBn9eRdu5RIvdhZRANCiRvTEHnEodorWWPWyTQ6Zpyl0K8CSsAw4aRoCF6yGMsBsxxWq%2F9TvP0qEvvMl8Utn41%2Fx3IDcBpZrhu0NYAh6FCik59HLB%2F99WhTLzR8ADUwfIw8%2BUuZQvymw3%2F0mCe1%2FWSxBo8LlfTuJ5xq5k2s9B0kFiQODYXLfMG%2BS2LzL9ZG54KT1ML1pIogcBxmTsAsiEUdVoSovPl3upIU0da86NDY%2BlRcMBDfIFMkQwJdw9l8Czy5kmenCzz25AjOJk76SRjBZOmVT0dSoabl7EQVDTFUEyNjfQiw9rC7%2Bc2eur9UwgwGN8XGksiaUZtUyCwXtOvgunjSeQlM74u4U81BwFuRd1nExOlNt6tjmRA9yXE1K%2Fu2cxUvmrgXDeCxSSMDGEAStAYxV5O7TY55zUqNiQ9wIC2bi90%2BB4lDTUIjErC6PPZP1CjMKP90skGOqUBKFPZSOIpithR2GzYOYRQn1XTObqvNw67F6bEvZplYE9PVW5aC%2FuL%2F6XsGsaw6CSIXUgQYti7vl5cMWsiDaT4PDhUHicQboMYmwO2vQyB3UHZLN7o7ysCqY0s58SapBSAXiPvc2Bdp1COICNJmg6St%2Fp9jFqLEeYgHIcS99e7DUG5fDox%2Blkr5cYdrfVbuW7HsqPaoEaD6O2g6Bxg3gbZbbSyLvox&X-Amz-Signature=5d19d0c5df3bbb8f244a159a6f0f9b47ffcf3e414f1fe2e07e497c7fc9c20d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
