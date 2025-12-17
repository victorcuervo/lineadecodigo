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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466622FUVHT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnIN4gZ%2BwmGAbuPQ9es901sNPixxJZWpNE%2BP76HsT%2BvAiEA7FKPmYRfwNce5TeG4rv9iJ7SYjoolyxZXcRvXK7%2Fga4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL9K4H3xWN72y8EmWSrcA71nAkalyqQudQQiI1m73tjjnDVzP2pznZd07bQ2C93mqXd5Q3F8GrozMlZNyh7hDd44xK7mvhWr9MFv2N4kxJsm9mN1UkmLwdpG%2FggWEpvY2OTOG0Q5NVulxYmkfbRU7PMxWv4lmJg5nCTZyUmImgaPk0cEJbAdO6e7kDm9TALcGooRXsIHLpypSfA8%2B0AXj4U6rzdKCYeRRvYwHyQDYRHlaqReW6pJEFGnujDRFtKn39dh1GPjf1CB2RDalaVLKUs%2BEGaUlJBtCx1b6Q40cJaEDTnBbq7FX79J5YI%2BKQdHi%2F2wwCP3KPmRz5rNHoVxQLt8TaZQhJ9VHdKfGVkGW%2BWvJwkq55cKFHSmLB04hsOjtHWuaPQfqRvykqGAmYKJHrtqptHY8t9eEea57xiwFEIsN90qjj0f9xLAEAoecCfi21yMxAxraGueeCCs42ic3av4RUC1IqJ7YXvbOvqRAu0sEJpw%2BQPED9qKeIRAP1%2FuAQ%2BVp3Vupkr0F3PacTDe7xo6AwZwyxs7aeQrb6qVdCPJhA8NgOwc7yYIKQpE3MMVWENoSojKT4pBHSa6H7M9cx9p9bvpsrfNkd6FxwUKxHuoXacy1JlDK13uZyIZR7fRsEt%2FZrr%2BHoUqYp61MOOOisoGOqUB1TTsgqwY4COc4HYggs0jbCU%2Bfuxk%2F9u8%2Fo69vj%2BsmbknGi4wTiRKPNRIQ4cBNURALePJolM5uL%2FurSt1%2B0ELCIWwmMcQXRuuj8A72j5j7nLcwCsqc7Kpor%2FsRc%2BWL1znHq8O%2FsQZEXgdiNVC%2FZo%2BKCRYnR9PiMFYlGYpcMgSt2%2BH0NlMS4S7gp3kVmABXfwrmmNY12n%2BF7bozVFWh3r3%2B8ynE3TR&X-Amz-Signature=099d90dc7e1a1624f0ff3b69b0fad165648fd40b464c7fc08328d97b6dda8208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466622FUVHT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnIN4gZ%2BwmGAbuPQ9es901sNPixxJZWpNE%2BP76HsT%2BvAiEA7FKPmYRfwNce5TeG4rv9iJ7SYjoolyxZXcRvXK7%2Fga4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL9K4H3xWN72y8EmWSrcA71nAkalyqQudQQiI1m73tjjnDVzP2pznZd07bQ2C93mqXd5Q3F8GrozMlZNyh7hDd44xK7mvhWr9MFv2N4kxJsm9mN1UkmLwdpG%2FggWEpvY2OTOG0Q5NVulxYmkfbRU7PMxWv4lmJg5nCTZyUmImgaPk0cEJbAdO6e7kDm9TALcGooRXsIHLpypSfA8%2B0AXj4U6rzdKCYeRRvYwHyQDYRHlaqReW6pJEFGnujDRFtKn39dh1GPjf1CB2RDalaVLKUs%2BEGaUlJBtCx1b6Q40cJaEDTnBbq7FX79J5YI%2BKQdHi%2F2wwCP3KPmRz5rNHoVxQLt8TaZQhJ9VHdKfGVkGW%2BWvJwkq55cKFHSmLB04hsOjtHWuaPQfqRvykqGAmYKJHrtqptHY8t9eEea57xiwFEIsN90qjj0f9xLAEAoecCfi21yMxAxraGueeCCs42ic3av4RUC1IqJ7YXvbOvqRAu0sEJpw%2BQPED9qKeIRAP1%2FuAQ%2BVp3Vupkr0F3PacTDe7xo6AwZwyxs7aeQrb6qVdCPJhA8NgOwc7yYIKQpE3MMVWENoSojKT4pBHSa6H7M9cx9p9bvpsrfNkd6FxwUKxHuoXacy1JlDK13uZyIZR7fRsEt%2FZrr%2BHoUqYp61MOOOisoGOqUB1TTsgqwY4COc4HYggs0jbCU%2Bfuxk%2F9u8%2Fo69vj%2BsmbknGi4wTiRKPNRIQ4cBNURALePJolM5uL%2FurSt1%2B0ELCIWwmMcQXRuuj8A72j5j7nLcwCsqc7Kpor%2FsRc%2BWL1znHq8O%2FsQZEXgdiNVC%2FZo%2BKCRYnR9PiMFYlGYpcMgSt2%2BH0NlMS4S7gp3kVmABXfwrmmNY12n%2BF7bozVFWh3r3%2B8ynE3TR&X-Amz-Signature=ff50827a05d5edb1f276a5227d3e647e31a5bb4339fea67171ff8bef7abb4e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
