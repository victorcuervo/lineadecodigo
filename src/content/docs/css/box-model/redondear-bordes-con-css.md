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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLUS4VK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcLkoayNPX63Lbew1HpW2MsJg8LIREGxtN8MbJBrNgOAIgORP%2BWZzw42chPSKdP6PMJiTgjQ24zVtAuKm5GjiD%2BJoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD9jm5wF1gv8SPiGsSrcA5YYez16O%2ByLyKjO%2B7mqq32tVw3mtjGNRX%2BRLtjv8OxaiPOVTR0gKerMXV%2F24TpsU%2BJJazSk7%2FrRWiZmPprcSJ4y6wiI%2F58HJgK%2BLc5Ae0lE8br%2FjYIkiXxRL0kVhqYamkHcsZVV6obe5ZpUIGiUmf1nFWPhi3VE%2FNDwlXyn67jAoJqCduj%2Fx56DKJN5rAVRfkRWQsZ4PJTqOj0T7NhjEsyf1hFmnkikGPFbw4uJiSdl1YyOBVkP4x%2FgreLt1UJpMCuVNy%2FVECqO6m3i8Y7HvSMQOvsDt6g0VWHlm37Ox4ma3ZTJeBNhUhvJoOJF6y4YEgeV25%2BaG1fYkZbSqeQ%2BzH8kYf7AMFCNPFN6VMiY%2Bx2KxzGjbUIomzOEE8KpXBoaScxf9n2yrOnnRcnEyD9SrtPOuQqj9xEUt1YJ%2FR9C%2FMptG%2FlWIp6KntcSZ9kGCV4YhMbAntbmCy3pWO%2FmG4LfXVaBKfZ4xfj0%2FgPU%2FZL7dpRua3%2Fg0rAZjoSDyc3tCxkbPViH6qqVQKOl4wRBQQjUypd2oiYZKuo2TqhHuJOi5zx%2BlQco8Z7HrqpH8HjAXb5U2kPCtD%2FPShNByxUm6twWk%2FfyhjV7k7mdrtRIl%2Bmm5sr86DB8jEMjJCxPkM%2F2MMqdicoGOqUBH9fhnJ4m2bOwl4Dff%2FA6KQZvg1yQ2%2BHABLsTIzyt%2BV8%2BXJpiEP2vyi9iJkeruCiT12yoYG2HHGMcaYEOiYtWqHW6fKPyig1uXXiQsXJ9c4pTGZ%2BNVPNNKIkZs1hRUkxUAR4vuY3%2FSj2B1APLl5s8dHH3whYt6zjznDM%2F8XUyoxcw%2F8d0b%2BguHGwJFl4wkedsBXyshPGcZgpzOJKirGQ%2FQziBxI7K&X-Amz-Signature=e3ba7a05b59f31d1ecef0a59085c87cd40e39eff2183063cb726541d583bf402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLUS4VK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcLkoayNPX63Lbew1HpW2MsJg8LIREGxtN8MbJBrNgOAIgORP%2BWZzw42chPSKdP6PMJiTgjQ24zVtAuKm5GjiD%2BJoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD9jm5wF1gv8SPiGsSrcA5YYez16O%2ByLyKjO%2B7mqq32tVw3mtjGNRX%2BRLtjv8OxaiPOVTR0gKerMXV%2F24TpsU%2BJJazSk7%2FrRWiZmPprcSJ4y6wiI%2F58HJgK%2BLc5Ae0lE8br%2FjYIkiXxRL0kVhqYamkHcsZVV6obe5ZpUIGiUmf1nFWPhi3VE%2FNDwlXyn67jAoJqCduj%2Fx56DKJN5rAVRfkRWQsZ4PJTqOj0T7NhjEsyf1hFmnkikGPFbw4uJiSdl1YyOBVkP4x%2FgreLt1UJpMCuVNy%2FVECqO6m3i8Y7HvSMQOvsDt6g0VWHlm37Ox4ma3ZTJeBNhUhvJoOJF6y4YEgeV25%2BaG1fYkZbSqeQ%2BzH8kYf7AMFCNPFN6VMiY%2Bx2KxzGjbUIomzOEE8KpXBoaScxf9n2yrOnnRcnEyD9SrtPOuQqj9xEUt1YJ%2FR9C%2FMptG%2FlWIp6KntcSZ9kGCV4YhMbAntbmCy3pWO%2FmG4LfXVaBKfZ4xfj0%2FgPU%2FZL7dpRua3%2Fg0rAZjoSDyc3tCxkbPViH6qqVQKOl4wRBQQjUypd2oiYZKuo2TqhHuJOi5zx%2BlQco8Z7HrqpH8HjAXb5U2kPCtD%2FPShNByxUm6twWk%2FfyhjV7k7mdrtRIl%2Bmm5sr86DB8jEMjJCxPkM%2F2MMqdicoGOqUBH9fhnJ4m2bOwl4Dff%2FA6KQZvg1yQ2%2BHABLsTIzyt%2BV8%2BXJpiEP2vyi9iJkeruCiT12yoYG2HHGMcaYEOiYtWqHW6fKPyig1uXXiQsXJ9c4pTGZ%2BNVPNNKIkZs1hRUkxUAR4vuY3%2FSj2B1APLl5s8dHH3whYt6zjznDM%2F8XUyoxcw%2F8d0b%2BguHGwJFl4wkedsBXyshPGcZgpzOJKirGQ%2FQziBxI7K&X-Amz-Signature=e18bfbefaefc1b126e330eeb13b9a04aef4e9eab4a77a9371233532a9612dbd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
