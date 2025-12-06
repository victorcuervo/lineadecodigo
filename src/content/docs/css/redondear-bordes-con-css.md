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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEKYEGQR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFI5Z1WpNtY6Dm4rGRNP0pRQyz8X%2FJ2MYZfjPZJ3bsWAIhAK0%2FVWzjheGZ3kMHQ%2Fnu398he2DLzOfEecitwCMNvRVqKv8DCHoQABoMNjM3NDIzMTgzODA1IgztJsig%2BLRoWSWyQYkq3AOnPke4G%2Bsd2KLN%2F42hSnO9aAUTEBGHtmNuKyWczGQVtuzJiZCcMBgMlkTcGYTysTvQTRRSAOurqAsHK%2FHngVnvPAvIltXqLZ2jQdpQ%2B9rF5rMHp%2FLrnN%2Bv9bx8yuUfJgP8X0FnSVknbb3Z7TB8eb1e1eJiRCor6pRLOvqNuOBB%2FN4PPhqUOfOl%2FZuJLZph7ugtEtPfZkXqNojH9Z8lVfarrqU%2ByfKTPGn0gqG%2FzOi%2BpneckxvTIwe9s3VhA5OvRogmmiEjg9cYN7%2FAvN2vi2Y5UHCimX9oj6NqqON%2FmYNpuAbpCHtxq8xZZXhgrNuoHcpyJXmbBPiLMhg4ZD8qxqThKBGd0oX3B1CZQJx9ZE1JvXMECejCflqqeQKfR2SZ2LkNXovQFKw5xZx0wOTyzLzw4vdVYH89R2qfIAI85rAFrXKhFwOhbD9ae8yI4cvbMOR3FpH%2B2ytJKqkbM%2BHRCrFKY%2BRv3NjZGC%2BD0%2BBwOYj3sqEn%2BbFbL%2BnsYSG2K1KqJ22kGFaLV6ToDNQ3WRFVQJpJuTIlcnzmivv5Wv2HIV493kEMsMXmUPRuuNmOExldYWP217K6N7b6hMrRiL4pi5KZUu94863LUb1PJ1S7NTYLm3l%2Fi0xCO1Nh2tSTTDD%2BsNHJBjqkAZU67G2Rd1aVHYik%2BV7AwuQ0I2koQ6DToXbd82KcVR0xBdmK7vwuocbYTPqY9MLjssdr4vSqGFT%2FVLasHwOlF2vZ0BOCaZnECnPeg%2FZMY1WvSsjAA45RTIoPYtLgxxr%2FjXfq3ETKAztvPtWU%2BGpzIoCXHTdEg2Sg%2FHjYfYkYqJhyg9FH0ydsJMNlQnpV818m%2F9OYHrXzQvyesewGREf%2FOVdS9BK9&X-Amz-Signature=a7928ae066fe1c1fea04a709939a7a862808ae0140978212c75bd9c6e6436e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEKYEGQR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFI5Z1WpNtY6Dm4rGRNP0pRQyz8X%2FJ2MYZfjPZJ3bsWAIhAK0%2FVWzjheGZ3kMHQ%2Fnu398he2DLzOfEecitwCMNvRVqKv8DCHoQABoMNjM3NDIzMTgzODA1IgztJsig%2BLRoWSWyQYkq3AOnPke4G%2Bsd2KLN%2F42hSnO9aAUTEBGHtmNuKyWczGQVtuzJiZCcMBgMlkTcGYTysTvQTRRSAOurqAsHK%2FHngVnvPAvIltXqLZ2jQdpQ%2B9rF5rMHp%2FLrnN%2Bv9bx8yuUfJgP8X0FnSVknbb3Z7TB8eb1e1eJiRCor6pRLOvqNuOBB%2FN4PPhqUOfOl%2FZuJLZph7ugtEtPfZkXqNojH9Z8lVfarrqU%2ByfKTPGn0gqG%2FzOi%2BpneckxvTIwe9s3VhA5OvRogmmiEjg9cYN7%2FAvN2vi2Y5UHCimX9oj6NqqON%2FmYNpuAbpCHtxq8xZZXhgrNuoHcpyJXmbBPiLMhg4ZD8qxqThKBGd0oX3B1CZQJx9ZE1JvXMECejCflqqeQKfR2SZ2LkNXovQFKw5xZx0wOTyzLzw4vdVYH89R2qfIAI85rAFrXKhFwOhbD9ae8yI4cvbMOR3FpH%2B2ytJKqkbM%2BHRCrFKY%2BRv3NjZGC%2BD0%2BBwOYj3sqEn%2BbFbL%2BnsYSG2K1KqJ22kGFaLV6ToDNQ3WRFVQJpJuTIlcnzmivv5Wv2HIV493kEMsMXmUPRuuNmOExldYWP217K6N7b6hMrRiL4pi5KZUu94863LUb1PJ1S7NTYLm3l%2Fi0xCO1Nh2tSTTDD%2BsNHJBjqkAZU67G2Rd1aVHYik%2BV7AwuQ0I2koQ6DToXbd82KcVR0xBdmK7vwuocbYTPqY9MLjssdr4vSqGFT%2FVLasHwOlF2vZ0BOCaZnECnPeg%2FZMY1WvSsjAA45RTIoPYtLgxxr%2FjXfq3ETKAztvPtWU%2BGpzIoCXHTdEg2Sg%2FHjYfYkYqJhyg9FH0ydsJMNlQnpV818m%2F9OYHrXzQvyesewGREf%2FOVdS9BK9&X-Amz-Signature=a2eedad1390357228efb23cb92847a456ba2aca20a74d9e6ff29a02f82419768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
