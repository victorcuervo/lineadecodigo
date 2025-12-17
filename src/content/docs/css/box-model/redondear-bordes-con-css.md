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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF377WH5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZPJS827A3n1g4HqM72xBi3A49zdtF78480M2CFwLx9AiEA7oQnLL8yynO8NI7idxNdmq3N42HJ%2BZX8pByUtcUEoNcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPU5k6wssSB6pvrtgSrcA7M%2BoWgnrortpp3s42EcGQpi%2BoxoU2pqYl5XjcbyPXdBz0ydW49wndxS%2B%2BdUdjKwzK9tC3%2FbpJJXo3SG1YKyFil8hs0pCdSwKaFeMWEcZv4CadoiQo%2BJY56TnO%2FPSVO6E1REQePbauJhqszSpBXSBgK0YgVznkPP27GrBuffpaBl3e6oDgiG%2Fr67yND4BXSX1jF3U9E7NlMEaeYibJWTw46AhDwJOLArvU1M6rSnMesR9Liq7FBhjBQ%2F3g7wJeWQKb16gO%2BK4sR3M5Nl%2BpCVBBluhHTcvT1QK5yMqcpa8IM4NmsxSofK8IAtM0ni4skk6vDh3nY1mLtzONGj41DlUDmbfBW5tXWvKmgn%2B2jtx9OfE3GImTYnJ%2FJzeboSgoPHawOpX5%2BUTZWSawxfci2e6yh40liPH0%2F8qG6kad7014hOCDoj7cNcTAX4bn4H0ZsP6G8v%2FmXKcprhpHO%2F1zXc55udUnEloCAp1kPnJsyPfel90NFUaYvhIqzi9vCqksWSp2ZZQfC1oFJ%2BW%2BoYmO%2FMOlkVwJH8kLqJvDu2jGJoorDjCaFvpZCwct2Jmi3aXxqmL7gW9OP1G5bPZbGpTtajgM0tEKefk4al12KwNe7AXpmCjq6KwHmPPjGXPUANMPCViMoGOqUBjjKHATZWncOemWWnWVXsxdJ2QVSTjuasWmOCDiRNhay7qoi3kCTlY4zUcDUIpkmCUNUix6IdOzqfGPJLeC5600G2OfteZRTY6A37PsJTe5pSH1oHrJR1MhwF7A3h4Rw4RlbZfo0b1tqeRgn%2FT3zYDHOGfLgF8BaAubGDGSMnllNDJhUEnfruhjtuXJxgt3oWt7XUoLZsUUU1v93Fbp9VNmhmpwVY&X-Amz-Signature=4539f55090ba6c634c3289bfd462d9b1943ab1d9770189346e488cc5e7870677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF377WH5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZPJS827A3n1g4HqM72xBi3A49zdtF78480M2CFwLx9AiEA7oQnLL8yynO8NI7idxNdmq3N42HJ%2BZX8pByUtcUEoNcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPU5k6wssSB6pvrtgSrcA7M%2BoWgnrortpp3s42EcGQpi%2BoxoU2pqYl5XjcbyPXdBz0ydW49wndxS%2B%2BdUdjKwzK9tC3%2FbpJJXo3SG1YKyFil8hs0pCdSwKaFeMWEcZv4CadoiQo%2BJY56TnO%2FPSVO6E1REQePbauJhqszSpBXSBgK0YgVznkPP27GrBuffpaBl3e6oDgiG%2Fr67yND4BXSX1jF3U9E7NlMEaeYibJWTw46AhDwJOLArvU1M6rSnMesR9Liq7FBhjBQ%2F3g7wJeWQKb16gO%2BK4sR3M5Nl%2BpCVBBluhHTcvT1QK5yMqcpa8IM4NmsxSofK8IAtM0ni4skk6vDh3nY1mLtzONGj41DlUDmbfBW5tXWvKmgn%2B2jtx9OfE3GImTYnJ%2FJzeboSgoPHawOpX5%2BUTZWSawxfci2e6yh40liPH0%2F8qG6kad7014hOCDoj7cNcTAX4bn4H0ZsP6G8v%2FmXKcprhpHO%2F1zXc55udUnEloCAp1kPnJsyPfel90NFUaYvhIqzi9vCqksWSp2ZZQfC1oFJ%2BW%2BoYmO%2FMOlkVwJH8kLqJvDu2jGJoorDjCaFvpZCwct2Jmi3aXxqmL7gW9OP1G5bPZbGpTtajgM0tEKefk4al12KwNe7AXpmCjq6KwHmPPjGXPUANMPCViMoGOqUBjjKHATZWncOemWWnWVXsxdJ2QVSTjuasWmOCDiRNhay7qoi3kCTlY4zUcDUIpkmCUNUix6IdOzqfGPJLeC5600G2OfteZRTY6A37PsJTe5pSH1oHrJR1MhwF7A3h4Rw4RlbZfo0b1tqeRgn%2FT3zYDHOGfLgF8BaAubGDGSMnllNDJhUEnfruhjtuXJxgt3oWt7XUoLZsUUU1v93Fbp9VNmhmpwVY&X-Amz-Signature=0a659c2fd4890665901c90e8584ac441a45efc3ee0ad6a3c98fa42faa57ae2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
