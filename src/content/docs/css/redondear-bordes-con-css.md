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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2LE5SEM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgiCRx8NLNgNG6zdgc%2FmhKqzwtYWztzj6E7SDDmYHwIAIgW0Qb4SK8BIDGl9xeXaAa46KiMD3sKxAdCWDXnpKSjtQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDEm5fHS0QVHWowIlTircA9UzMsh8jx2hY1P%2BRgCI4xfVS6D7HTW6ghPyUdXrpGuSyCjnHqttPWxovySb4AN2vD7C8zfFniD%2Boa4Bw47vdnLfZOWuRR5Q1z54ceYu3d5BH%2BsdZnNMoScD6n8nOs3D3QRP8bCO5ZN40JMSQmedYwRGDZ3vigaJ2Pb3ThdaEMwMn7e4ghLkmAc%2BRAnkNrgv5F25F1fgebeb0t9BB5joJ%2Ffw9q6iAs6cmEo1bL8XF9jbEnDDZaG8wjjW2xCXPaoCMcyML9M8RW8HyqTtnN5h70rttGRAlsHhvLy28cTo3hp6gopdJ2CYJJvLmPPKpnHksqorW0I1Emm5xBaeh0vnBFLQuS8eYGlyfe7MsGnKRjTBhGuxPsBNaWA9FTkcSjtiEXxVyZwybxJzXFerJVnjZ7LOgSXj5LyoawtDvXsHhSvtvVpK59mfmJH5nKcMBdxwKv8iA4pd%2FJTWBiuZM%2BwxOh3K2CDMweziRoyPx6khL4XplWCV%2FPX7ntGAqTqwMiesWnS9PNqUXTqY7ICDOgf4zKf4162pFzBLcsqJRGH5Oz000F0sWuwiXhNKZjWM1aD4WAIgckjNw1lumX4JhAzrK7b7Qy5TMtLDO6A7o%2F2e8X1vFl4mXZ21hSe1xAY7MLfN0ckGOqUBCgJRPJbTYM7NJnl91u0aDkkxpcIsd03yMPPhigxQ3xXLCD5CSdrqYRcATQ%2Fu21MU2XBEfJI4eqsk1r0A8RNC1fElkk3EIg9G8VKunqs8l6qeWHHX8KxDPWFtdyyRFy4WcBsRnhZX0wlrZ7WRvb7tx5ZVN9sm32WPG3M31uPX5q%2Fwbie5gwRuZ1kpQ0OWUBihOWNApoXiAT0YDnYVq5Boz2p0rTcl&X-Amz-Signature=5f0ad76f81366ed8b18328c56a0d567f32bf9dc08ed30e5270bf16c2307c5c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2LE5SEM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgiCRx8NLNgNG6zdgc%2FmhKqzwtYWztzj6E7SDDmYHwIAIgW0Qb4SK8BIDGl9xeXaAa46KiMD3sKxAdCWDXnpKSjtQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDEm5fHS0QVHWowIlTircA9UzMsh8jx2hY1P%2BRgCI4xfVS6D7HTW6ghPyUdXrpGuSyCjnHqttPWxovySb4AN2vD7C8zfFniD%2Boa4Bw47vdnLfZOWuRR5Q1z54ceYu3d5BH%2BsdZnNMoScD6n8nOs3D3QRP8bCO5ZN40JMSQmedYwRGDZ3vigaJ2Pb3ThdaEMwMn7e4ghLkmAc%2BRAnkNrgv5F25F1fgebeb0t9BB5joJ%2Ffw9q6iAs6cmEo1bL8XF9jbEnDDZaG8wjjW2xCXPaoCMcyML9M8RW8HyqTtnN5h70rttGRAlsHhvLy28cTo3hp6gopdJ2CYJJvLmPPKpnHksqorW0I1Emm5xBaeh0vnBFLQuS8eYGlyfe7MsGnKRjTBhGuxPsBNaWA9FTkcSjtiEXxVyZwybxJzXFerJVnjZ7LOgSXj5LyoawtDvXsHhSvtvVpK59mfmJH5nKcMBdxwKv8iA4pd%2FJTWBiuZM%2BwxOh3K2CDMweziRoyPx6khL4XplWCV%2FPX7ntGAqTqwMiesWnS9PNqUXTqY7ICDOgf4zKf4162pFzBLcsqJRGH5Oz000F0sWuwiXhNKZjWM1aD4WAIgckjNw1lumX4JhAzrK7b7Qy5TMtLDO6A7o%2F2e8X1vFl4mXZ21hSe1xAY7MLfN0ckGOqUBCgJRPJbTYM7NJnl91u0aDkkxpcIsd03yMPPhigxQ3xXLCD5CSdrqYRcATQ%2Fu21MU2XBEfJI4eqsk1r0A8RNC1fElkk3EIg9G8VKunqs8l6qeWHHX8KxDPWFtdyyRFy4WcBsRnhZX0wlrZ7WRvb7tx5ZVN9sm32WPG3M31uPX5q%2Fwbie5gwRuZ1kpQ0OWUBihOWNApoXiAT0YDnYVq5Boz2p0rTcl&X-Amz-Signature=ef1794079ab90670922ed37706231d0e54cbba66699a01d9612c50911072f2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
