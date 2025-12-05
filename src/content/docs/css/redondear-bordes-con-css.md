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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3K72DH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm0nuaDmnsxv33xGNH9Ow0vJfhM2IcHNOj%2BluisyN9nAiEAklnqZRA99eE2c7Flm%2BCeIIy8%2BGVZbb7I42104OHH3ekq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHuBzGjRPsSExhWlECrcA7C%2BipIb9uW%2FZeOAqlU8tiLUxviWRdV8OBgbSgXsVFNADHFk3xAq8wase8FRZsjlXDKlMMBZBgUEcqqyC7eV81mduzOCuKTORJr%2FcoIrV9ac%2FOuh5u7Nk3TFHEYCfYWlmJ679H38fK1kXICIKFCjGDZFZtKSqXELHZwmKy45d%2Fy%2BcwXS2Sur0ZPgA9eSF16GDXk31kOlz%2BXa%2BAFfEyxVJO6AMDpp%2BAw8awaAmXUY47Ox7UrQwM9Onh2dst1g90ohRdPVrGIRvTD7whuHPKgvYP3LiuvzTkmxNX4qxeZv31QRedmdKvL6tX2CDqJfJAIQZ1xQ%2FHB4wjWhulK48qtDW0x%2Fpo%2F6UvVrIIsfDoT%2Bwh59QK2vUt6cIqWEmMIz1lY%2FspJ%2FrRBbak9d5V4gf%2FDsVBgDiEIFxsitbDal0K5paY9d7q7bXmc4YtA0Hw5T82%2BTkx4ysQvJ9Sfqg%2FtWT28uyr11VelHttl%2BJbHsw8VH6ZhrZQZ9GgQN7BKmBhKxqSo51RCk9goNqDm9HIR3%2B%2FqdpBDBLTCHXm7%2BHXCV%2F4pnr01N%2FqPOLsIZVu%2BljgcdGGHt29R64sODip0k7uDQVO0GktpbIqGaE62aJix1bvpn2IDkcEfKEZadnbfrZgE4MLP2y8kGOqUBitNg7uTrLyB1gXJ%2Bi%2Bcwn45Nbp15%2B40PdCoUQB3gY7BuwZTKO8iohVgxXKah1fIF0f2RMWgXRTEjOc%2Fu6zrxkNcEPLPkt%2Fr1os9QEkSNZjlURtsDmJ2b42aWucYTDW9sZUwxsF3oESJa%2FucCZQsrK47JGoNJWFfPjZ9mhMlP9GtGN%2FZBRxLgU6GjRjSLpe4ZRIeWfg%2BkU48GxuwYPe7LsMSB6t7s&X-Amz-Signature=bd204f3cd7aefb8917ece98ee94d947aa426e472bb72c2e3773edaf1afdcdee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3K72DH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm0nuaDmnsxv33xGNH9Ow0vJfhM2IcHNOj%2BluisyN9nAiEAklnqZRA99eE2c7Flm%2BCeIIy8%2BGVZbb7I42104OHH3ekq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHuBzGjRPsSExhWlECrcA7C%2BipIb9uW%2FZeOAqlU8tiLUxviWRdV8OBgbSgXsVFNADHFk3xAq8wase8FRZsjlXDKlMMBZBgUEcqqyC7eV81mduzOCuKTORJr%2FcoIrV9ac%2FOuh5u7Nk3TFHEYCfYWlmJ679H38fK1kXICIKFCjGDZFZtKSqXELHZwmKy45d%2Fy%2BcwXS2Sur0ZPgA9eSF16GDXk31kOlz%2BXa%2BAFfEyxVJO6AMDpp%2BAw8awaAmXUY47Ox7UrQwM9Onh2dst1g90ohRdPVrGIRvTD7whuHPKgvYP3LiuvzTkmxNX4qxeZv31QRedmdKvL6tX2CDqJfJAIQZ1xQ%2FHB4wjWhulK48qtDW0x%2Fpo%2F6UvVrIIsfDoT%2Bwh59QK2vUt6cIqWEmMIz1lY%2FspJ%2FrRBbak9d5V4gf%2FDsVBgDiEIFxsitbDal0K5paY9d7q7bXmc4YtA0Hw5T82%2BTkx4ysQvJ9Sfqg%2FtWT28uyr11VelHttl%2BJbHsw8VH6ZhrZQZ9GgQN7BKmBhKxqSo51RCk9goNqDm9HIR3%2B%2FqdpBDBLTCHXm7%2BHXCV%2F4pnr01N%2FqPOLsIZVu%2BljgcdGGHt29R64sODip0k7uDQVO0GktpbIqGaE62aJix1bvpn2IDkcEfKEZadnbfrZgE4MLP2y8kGOqUBitNg7uTrLyB1gXJ%2Bi%2Bcwn45Nbp15%2B40PdCoUQB3gY7BuwZTKO8iohVgxXKah1fIF0f2RMWgXRTEjOc%2Fu6zrxkNcEPLPkt%2Fr1os9QEkSNZjlURtsDmJ2b42aWucYTDW9sZUwxsF3oESJa%2FucCZQsrK47JGoNJWFfPjZ9mhMlP9GtGN%2FZBRxLgU6GjRjSLpe4ZRIeWfg%2BkU48GxuwYPe7LsMSB6t7s&X-Amz-Signature=a139f9889b7523c5717422aae5c4692048b3d2c59f8c137e1fb6e28d19a575b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
