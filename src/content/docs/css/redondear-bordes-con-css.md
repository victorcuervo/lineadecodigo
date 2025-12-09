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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PTZJJF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD99yNczX1o%2FpaTVc1CB5FncGsgbbCGIUlYS12WQaY0zAIhAOu38JLpYfhEFfqixOM2WUK%2B5SF6F3Y9utv3QcTstkqyKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8JhZWz5R2PmWyUBMq3AM9iz7nwPl0KhRI%2FCmeeEEl2oXkbo4itz5nT5OXTFWzP%2BPD9EYcsm8hERXDZgVGNCAw%2FXf4%2FvSqkDo2s5U3F4gAV9hO5%2B3L2WgD6ySD8Dwjta2DKGi6BJRw8ETXEWXXu%2BH5BSp%2BPD4Cg6cwvyIA1U%2F%2FK15ttUXxA34ttiPQAGjE9ihYb7zrmT78gyP18dwMRX%2B52FumAhBjwka%2BpLJWlvzbGeHpcQVb4PuiE%2FV8S5WNjadSJxoErPxLvTZcBWKiV2Irm8yoPypaxuGQo8k8FtZW83M4Lp3F8gw7VnrryGeX8VezFPyCvDH%2B9bJF15dB95jkzBraMZNqHTJjuBFVBqdyfQuyVoHItkVBquLecYjSmYrFS11hTIeqYCOEg%2FDjhGLoNecNpDX%2FtE4RxgVh%2F9w68%2FkJ61n%2FTwL7Map%2F7ElUHAi0%2BDodCykU0nJwRWpQeclVhKrLAz%2BdWq%2BGvfWbEC%2BmBQ2%2Bwcd%2F1A34T%2F2O3GiwSbijwK2WPV2hFOXcysmIGZvVmwnSY31rUw%2FBKGWlNaZhuNDJaBH4Pb2x33vWHlmpOeAG0TPmQVTRAJE97o9YZod5Tt8WA5x9YeffvakETsQi0YbPY29VW88wIBXrKXwiOto6I%2Fg%2BWUlWvBMStTChpN%2FJBjqkAcAizAyWTH1fkCqy8fKOUj7AevC%2F%2BQOeQD%2FMIGqw59SP0rAID5w%2Bd3GslxDtkEpvmuGA8sk%2BdRGkrSKTgTu0bHKIOKtcBsbQ%2BvKiyZNriT3D5E3zC1ndQz4OkzlHnUherBuW%2Blb9jn1ko0Wb33V%2FeA9y3fzvWGEY9KNlUz3Tm8LgUCSDkA%2FpWGsAfDG7SA%2F8knqS7TtD2oEA%2FySYAlAwea4MJ7TD&X-Amz-Signature=0f0ae71a5f3477c434d475589cf7a2f37a412e760823069a5294b11abc4abe85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PTZJJF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD99yNczX1o%2FpaTVc1CB5FncGsgbbCGIUlYS12WQaY0zAIhAOu38JLpYfhEFfqixOM2WUK%2B5SF6F3Y9utv3QcTstkqyKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8JhZWz5R2PmWyUBMq3AM9iz7nwPl0KhRI%2FCmeeEEl2oXkbo4itz5nT5OXTFWzP%2BPD9EYcsm8hERXDZgVGNCAw%2FXf4%2FvSqkDo2s5U3F4gAV9hO5%2B3L2WgD6ySD8Dwjta2DKGi6BJRw8ETXEWXXu%2BH5BSp%2BPD4Cg6cwvyIA1U%2F%2FK15ttUXxA34ttiPQAGjE9ihYb7zrmT78gyP18dwMRX%2B52FumAhBjwka%2BpLJWlvzbGeHpcQVb4PuiE%2FV8S5WNjadSJxoErPxLvTZcBWKiV2Irm8yoPypaxuGQo8k8FtZW83M4Lp3F8gw7VnrryGeX8VezFPyCvDH%2B9bJF15dB95jkzBraMZNqHTJjuBFVBqdyfQuyVoHItkVBquLecYjSmYrFS11hTIeqYCOEg%2FDjhGLoNecNpDX%2FtE4RxgVh%2F9w68%2FkJ61n%2FTwL7Map%2F7ElUHAi0%2BDodCykU0nJwRWpQeclVhKrLAz%2BdWq%2BGvfWbEC%2BmBQ2%2Bwcd%2F1A34T%2F2O3GiwSbijwK2WPV2hFOXcysmIGZvVmwnSY31rUw%2FBKGWlNaZhuNDJaBH4Pb2x33vWHlmpOeAG0TPmQVTRAJE97o9YZod5Tt8WA5x9YeffvakETsQi0YbPY29VW88wIBXrKXwiOto6I%2Fg%2BWUlWvBMStTChpN%2FJBjqkAcAizAyWTH1fkCqy8fKOUj7AevC%2F%2BQOeQD%2FMIGqw59SP0rAID5w%2Bd3GslxDtkEpvmuGA8sk%2BdRGkrSKTgTu0bHKIOKtcBsbQ%2BvKiyZNriT3D5E3zC1ndQz4OkzlHnUherBuW%2Blb9jn1ko0Wb33V%2FeA9y3fzvWGEY9KNlUz3Tm8LgUCSDkA%2FpWGsAfDG7SA%2F8knqS7TtD2oEA%2FySYAlAwea4MJ7TD&X-Amz-Signature=95d839f6a85951f8b207ea0b0c18d99102a8c96349ccb0ab94df9b8cd04cc514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
