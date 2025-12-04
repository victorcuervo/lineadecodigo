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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YT5I3B4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFycKq2AvtkEm4iZKbjLCLY1T3ZM0Y6Bl34HdzMV731bAiEA3ZsyJJ%2FYIXx4q4c4v2LXBW7AzZJin4PihlzBbwRiat0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHJdVRfcI9DfQpw0YSrcA%2FVaemt%2FXj17%2Bmm6sqR6A4Vo2%2Fm%2BIofBgVaP5SzK%2Fl3Psn0gDR5QlpcIATHQWflL2sv0KSUrSg9mBrahM9aOjqatI81Yvsk8zS03pjeiDZVZMEs%2BYNWUYT4Pa6yN2J%2FZm9jr5KH%2BTDuPUxH2WwbPjAaeC5i8v7KPFj7G8Nk0qdjB43ylmbch0fRHVOgWebibNS7KRLDOftZszbf%2B8r6n7NnSLaiSJJtJFcB3kivhstuT79Cti6Rx3H1HTAIIy7xQnIWyoDjQZvhvEqpux3H4E8Dn317aGDgeZ5A9oRoyhAw2YOtsZoA1JpV9tOnGuzrDRMwzgxjf3l7PF3JLUlSO9BnVvacQoq%2FnHEuNgbvvrwAKs91XJtwyHJBBz69PCcTV1XuGvj%2B2jvBrE0u25loRZR2NuYltf6%2BbtmQdqLN4VkM4W52BiyyKLN23LVg4lHcio4FGeG0r8ZtaGl25jnu4gfNIERo4xA2Cn2EsJleVM5hCpx2VGX8B8mbC0gPY5fNnjQmq979vnWj4jzyY2jEmtpzInIvd2nG3kx5Idh7toKd4tJWP63kHDhcJLFfiqeiuWHbBiRntBw%2F6%2FC9iBHquk7gCr2mrQELbxrzJV0WSektpNQeuf3U1OoaaGFcLMLSGxckGOqUBAc8Jx0xkPEUXgbqISx%2BqLRouFMQuu6UJCGCcqmylwcr9bs%2F9gLDA7mB%2BX6gqn%2FcE2IGMmNoyennmqfUCyATv3HKTjR%2Fbcly%2BVGndw%2BgnXOIAt3%2BcU0XZzoxqKOFjuDHOW5gP8JwFEC%2BBBFWXRmaK9b7ZmfwIOgoBoz8mE1sYNOH1swN3l%2BASJkFei83PlZxoiHsv%2BD37%2Bn63YiVo8WelgYI%2BX%2BO1&X-Amz-Signature=a1b5bd97197054d999cf4fbf4bd9d99624e48af737eadc0113c6f0e29bbd684a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YT5I3B4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFycKq2AvtkEm4iZKbjLCLY1T3ZM0Y6Bl34HdzMV731bAiEA3ZsyJJ%2FYIXx4q4c4v2LXBW7AzZJin4PihlzBbwRiat0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHJdVRfcI9DfQpw0YSrcA%2FVaemt%2FXj17%2Bmm6sqR6A4Vo2%2Fm%2BIofBgVaP5SzK%2Fl3Psn0gDR5QlpcIATHQWflL2sv0KSUrSg9mBrahM9aOjqatI81Yvsk8zS03pjeiDZVZMEs%2BYNWUYT4Pa6yN2J%2FZm9jr5KH%2BTDuPUxH2WwbPjAaeC5i8v7KPFj7G8Nk0qdjB43ylmbch0fRHVOgWebibNS7KRLDOftZszbf%2B8r6n7NnSLaiSJJtJFcB3kivhstuT79Cti6Rx3H1HTAIIy7xQnIWyoDjQZvhvEqpux3H4E8Dn317aGDgeZ5A9oRoyhAw2YOtsZoA1JpV9tOnGuzrDRMwzgxjf3l7PF3JLUlSO9BnVvacQoq%2FnHEuNgbvvrwAKs91XJtwyHJBBz69PCcTV1XuGvj%2B2jvBrE0u25loRZR2NuYltf6%2BbtmQdqLN4VkM4W52BiyyKLN23LVg4lHcio4FGeG0r8ZtaGl25jnu4gfNIERo4xA2Cn2EsJleVM5hCpx2VGX8B8mbC0gPY5fNnjQmq979vnWj4jzyY2jEmtpzInIvd2nG3kx5Idh7toKd4tJWP63kHDhcJLFfiqeiuWHbBiRntBw%2F6%2FC9iBHquk7gCr2mrQELbxrzJV0WSektpNQeuf3U1OoaaGFcLMLSGxckGOqUBAc8Jx0xkPEUXgbqISx%2BqLRouFMQuu6UJCGCcqmylwcr9bs%2F9gLDA7mB%2BX6gqn%2FcE2IGMmNoyennmqfUCyATv3HKTjR%2Fbcly%2BVGndw%2BgnXOIAt3%2BcU0XZzoxqKOFjuDHOW5gP8JwFEC%2BBBFWXRmaK9b7ZmfwIOgoBoz8mE1sYNOH1swN3l%2BASJkFei83PlZxoiHsv%2BD37%2Bn63YiVo8WelgYI%2BX%2BO1&X-Amz-Signature=681e9486cf25a93534c74d0ccd7dee707d746133e45e900aac43e1d2943edf05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
