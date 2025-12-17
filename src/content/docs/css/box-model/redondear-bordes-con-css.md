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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBVCE4P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZ7s1z8hr7cQ%2FziPp%2BcYpUoxgXSBTCJZAhnfD9sQrV8AiEA2PTF%2FqhJuRsySwyTLabulKAhRweJfl9nP8ZNbkAgW0Iq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDC2l4aN3nTzRNLnEUircA402zi1mPpM46XdfTV7aQ9duBz5%2FQqMWWZXFx0RMC%2FuQnFFmW0I%2BVOrggEQutmN2h7g6525zgZHpYEkdTtcGMAr0yjJGnHg9Sv9VTqICwhOkKC1cxXx8VgTL3HnRFtAlLxmYZa3Njz60m7RvJ5HXCh5bw8bDOdxoQ9UpQJYAtWPZBleGaXIazhllkaZlnCGUl%2FrGWOXj9WEPXgl9xhi%2BtczpYAxWOCxvPEdwNCtbr23agV%2F0souIpSWE8yPnperaV6CMd206r7RN0y%2BlPfE3YEb5d%2Bf87F2Sd0sysIjG8lSrsoZxPhI8fElBU5ebc0C%2B%2FRP%2BB05G%2F4ut3nGAh5d4AKDMmeLkicGigIZEBNlj67brIKnyFer5gEaAIx9cLN4%2BSIYoWiCZ5OsaCPV8oSqWn6T0vh7IGT5ULlrIaNPcFFbFY%2B10vH2YYdj4pFY6hQG2NBxtk222ZN5MoI%2Fp%2FGpaFiT5KG6pV8u4wAi1fwzbd4oevnr0MmmSCNrNnUqTcJFhWztKVYndj1P9j6ggAf6qXAlXz3NZxfPgH8zAU5I2Gd1yelpH23MDFsB6A4PircsNCH95YSAE18S2A8b9ZCS%2FG8y31Nb%2BN3wRiECWu7%2BpCph5%2FtS1Cg543FcfDQ3XMO2XiMoGOqUB%2FJmBzk9PnR1WgAJK6CGr7LrUTS9YRHHv%2FosVUWkkv6Lj7rfhp2kd0kTR3TdYTc%2FwuS9KdxLWTwMaHqbfk6GOLOv7gFmOuPLcvIaxtPTOLcH3wPsHNiQOhaBiGN5lMhwkZ1szx6sYfH9X3gE2OdWmA9YCQiJY%2BiMn6vKNC0KfOHgvbZ7fQZWT80Oc5QYtUSdKdQEtn9wx0YBARSCWtdNMssbLGQrT&X-Amz-Signature=8b644e1d001d028d585d9c076b8262a9b1ffa2e0754e5df411536b47873763d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBVCE4P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZ7s1z8hr7cQ%2FziPp%2BcYpUoxgXSBTCJZAhnfD9sQrV8AiEA2PTF%2FqhJuRsySwyTLabulKAhRweJfl9nP8ZNbkAgW0Iq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDC2l4aN3nTzRNLnEUircA402zi1mPpM46XdfTV7aQ9duBz5%2FQqMWWZXFx0RMC%2FuQnFFmW0I%2BVOrggEQutmN2h7g6525zgZHpYEkdTtcGMAr0yjJGnHg9Sv9VTqICwhOkKC1cxXx8VgTL3HnRFtAlLxmYZa3Njz60m7RvJ5HXCh5bw8bDOdxoQ9UpQJYAtWPZBleGaXIazhllkaZlnCGUl%2FrGWOXj9WEPXgl9xhi%2BtczpYAxWOCxvPEdwNCtbr23agV%2F0souIpSWE8yPnperaV6CMd206r7RN0y%2BlPfE3YEb5d%2Bf87F2Sd0sysIjG8lSrsoZxPhI8fElBU5ebc0C%2B%2FRP%2BB05G%2F4ut3nGAh5d4AKDMmeLkicGigIZEBNlj67brIKnyFer5gEaAIx9cLN4%2BSIYoWiCZ5OsaCPV8oSqWn6T0vh7IGT5ULlrIaNPcFFbFY%2B10vH2YYdj4pFY6hQG2NBxtk222ZN5MoI%2Fp%2FGpaFiT5KG6pV8u4wAi1fwzbd4oevnr0MmmSCNrNnUqTcJFhWztKVYndj1P9j6ggAf6qXAlXz3NZxfPgH8zAU5I2Gd1yelpH23MDFsB6A4PircsNCH95YSAE18S2A8b9ZCS%2FG8y31Nb%2BN3wRiECWu7%2BpCph5%2FtS1Cg543FcfDQ3XMO2XiMoGOqUB%2FJmBzk9PnR1WgAJK6CGr7LrUTS9YRHHv%2FosVUWkkv6Lj7rfhp2kd0kTR3TdYTc%2FwuS9KdxLWTwMaHqbfk6GOLOv7gFmOuPLcvIaxtPTOLcH3wPsHNiQOhaBiGN5lMhwkZ1szx6sYfH9X3gE2OdWmA9YCQiJY%2BiMn6vKNC0KfOHgvbZ7fQZWT80Oc5QYtUSdKdQEtn9wx0YBARSCWtdNMssbLGQrT&X-Amz-Signature=d65a40c7ade999758beda911b9684b3795a60730731370654568bca322faa145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
