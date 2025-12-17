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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642COG5X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGv%2BNr4yoiy%2BQCYV3G4PvVeZOy0%2BRW3RnLwRKpthOgJAiBpNx7%2B9%2FMzTunMCOT1KCyL75FiWPp6JOorBnRCM9XSNCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMsCQ1O%2BXipkFdLsbaKtwDHzrPUMKtNgj1QZEYnQ5BmoufOxgGgR1cYwaOjeQ32NkiHkA1PTlnAPQp40gI2MuU5DFtpvmzaEmbUPwbD2eCE0yT6OA8OGtlhRLppHL14ERLx54TOZieAaoec5k7glBZxH0gfaqqiV5ec84J3JBYzuRAYDOsU%2BtZJrUkegGqTuX2YEhTTMtVH%2FBKX1jXT8xmGjw5rm%2FIhmiNlJTMXyWhoXOc8ZZG355Dl2cLrwj%2FsNA2%2BVs3BRY5Hr0DEIqKGN4pYf4itNdArOKj8CM8fS6NG6BVErfKnQgwtiZ7M8VCTL24DXzSHpXicBjoqioP8PIFZlHjVnZ0RsqtXEtIviyjwJ9QoitvFycSXrFFixVUT%2BMxRun%2B0aUJiTbCHjNvM2nxtGqIMfuZNhcV%2Bm06dvpLLdJTWSC5yMKq8xCDygEJww5nQsstRQjpTl2CyxyNusvsjlq9so5ZUO8q8qG8Z29Gc66bTP9umHlM1xqfE%2FsVT9eGO4W5dk%2FstxpqrSwwZljAf8hyZ4%2Fl8IOh7hpFtopIGlghrtv0FOL4vJ8gfzYtv5CstzlESZjKqR7Rnl%2BeYJUIFEb8GWVCTRgDT89c5yVwnxX%2BeBMDARWGgNSPdQEzw%2FYuCHHrJO1aZnxTfxIw7I6KygY6pgHlSaLcuYowIde0WlwI58Rw0VoVkjlGOyWo7TCyPXO26RuZuiUQtmJ4m8Z54863JddaX%2F%2FbkJ48Tk21Y9fJ%2BqB6DYGDcEuXt2Qf0Yzw%2FixO7k5k%2Bbhyd%2BZaSBF20kAnJR7vVeUdB8TAlyzHjmC8cRUcSyd96xQBpAbHOUdU9XbZgDlJuEKsGGfoq7h3p6OQicjq69PFN6l1XNpNrhwlG%2FdyqyxYcsWL&X-Amz-Signature=011e30f1cd3e3e443c952e05465db5cdec07a159496d8ef329e24f2cdc0c409f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642COG5X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGv%2BNr4yoiy%2BQCYV3G4PvVeZOy0%2BRW3RnLwRKpthOgJAiBpNx7%2B9%2FMzTunMCOT1KCyL75FiWPp6JOorBnRCM9XSNCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMsCQ1O%2BXipkFdLsbaKtwDHzrPUMKtNgj1QZEYnQ5BmoufOxgGgR1cYwaOjeQ32NkiHkA1PTlnAPQp40gI2MuU5DFtpvmzaEmbUPwbD2eCE0yT6OA8OGtlhRLppHL14ERLx54TOZieAaoec5k7glBZxH0gfaqqiV5ec84J3JBYzuRAYDOsU%2BtZJrUkegGqTuX2YEhTTMtVH%2FBKX1jXT8xmGjw5rm%2FIhmiNlJTMXyWhoXOc8ZZG355Dl2cLrwj%2FsNA2%2BVs3BRY5Hr0DEIqKGN4pYf4itNdArOKj8CM8fS6NG6BVErfKnQgwtiZ7M8VCTL24DXzSHpXicBjoqioP8PIFZlHjVnZ0RsqtXEtIviyjwJ9QoitvFycSXrFFixVUT%2BMxRun%2B0aUJiTbCHjNvM2nxtGqIMfuZNhcV%2Bm06dvpLLdJTWSC5yMKq8xCDygEJww5nQsstRQjpTl2CyxyNusvsjlq9so5ZUO8q8qG8Z29Gc66bTP9umHlM1xqfE%2FsVT9eGO4W5dk%2FstxpqrSwwZljAf8hyZ4%2Fl8IOh7hpFtopIGlghrtv0FOL4vJ8gfzYtv5CstzlESZjKqR7Rnl%2BeYJUIFEb8GWVCTRgDT89c5yVwnxX%2BeBMDARWGgNSPdQEzw%2FYuCHHrJO1aZnxTfxIw7I6KygY6pgHlSaLcuYowIde0WlwI58Rw0VoVkjlGOyWo7TCyPXO26RuZuiUQtmJ4m8Z54863JddaX%2F%2FbkJ48Tk21Y9fJ%2BqB6DYGDcEuXt2Qf0Yzw%2FixO7k5k%2Bbhyd%2BZaSBF20kAnJR7vVeUdB8TAlyzHjmC8cRUcSyd96xQBpAbHOUdU9XbZgDlJuEKsGGfoq7h3p6OQicjq69PFN6l1XNpNrhwlG%2FdyqyxYcsWL&X-Amz-Signature=f6b240baa4ac0fe38598903535f72dde62df171b3b8fac225bc5f7fda4cdc74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
