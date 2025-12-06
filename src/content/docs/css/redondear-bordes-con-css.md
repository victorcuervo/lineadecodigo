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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOT7WLK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSqJxFcFXr0ntQtKztrzQA8pKjY%2F7n5%2ByRza%2FlchK1pAiBDluqEV2Zqr9Kox8XDa9ZWzSGaeOmRgv8rEc7YsOgy7ir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0LowJKKjK%2FfzhkqxKtwDWHxIjXMao3CAL2usrFzJhVtsYNnlAnY%2BlsSM4tHTUMhQw6zQwfda%2B2XDzbb%2Ff6W17ijVXnaVIWKgQLlYuT2qoDxEkBxkCvZdAvel9IUO0BnSkh2qH%2Bwm4vXIJwSlF45T94Q9bg%2B0D2%2FRWkeRkBbB3AQIjijj9ewksNsP%2BtjJS4%2BaQ%2FlKkdXEFq5eHz6VXOvyxqCHlLoGDtnpE3gpr5GivJZUprkUS8TYqoW7EfgRkr4ZWS79BM5edxXRO8V%2FRGl8B8InmNcs94cQZXc%2FQQxQMKC1UxqpEucfbaW1egPR8GMi6zgMIpg8LHxig9MpQ6%2FrCZt%2FN%2FtiB8r96uhbNewaJ3wJPH9ZhEdeBdGEQqRv2m%2BLNoqgfu5iNVnICNJjSOVJJiw%2BcAFmRkQUroy4gP5271pdMawMVVzlh0nLYloKtkMxuPELLEuke%2FKwl9JVpdb%2FxtUMcmCLWlscnTAoJAG%2BWUz59yMC7fziLfxTQJsrchiNoQ9rIKiLVV%2B6MRP4DrOWlfA6r661C5FNQJMSqHw8ruCoFZxX47QHOXtitcy2eVNykVXCKBUlLTbVWB8F05GRp5suKKbbsNH3bZeH1tGY%2Fw%2BWMym%2F3Xdw%2BQSxHzv1M33toM1p41cqEpxns4ww8NPSyQY6pgFVsaYyei8v4abQroNzyithHfSHSII4X4%2B9W%2BBXjvAqoI5TWwKeS1HxW1QBuXQcPt07XE3Zbwka7WIznvS74Xr60QX8TcPHGv6Z0sGFjgTEB184m77XJd63gzyIUtZLVrdO7qmK0QNm1Z5hpXZi9ezdZJ5N3wlti%2Fi3uuTx3FgbALa5WMQ9QUreCfyTPyN37%2B93ei6IgSpfhkPV76eME2OWBmhdmXT%2F&X-Amz-Signature=a1a42eca3f46d90f87b917bc99a5cede60f4a607e495ff39c22f3b07ab127d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOT7WLK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSqJxFcFXr0ntQtKztrzQA8pKjY%2F7n5%2ByRza%2FlchK1pAiBDluqEV2Zqr9Kox8XDa9ZWzSGaeOmRgv8rEc7YsOgy7ir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0LowJKKjK%2FfzhkqxKtwDWHxIjXMao3CAL2usrFzJhVtsYNnlAnY%2BlsSM4tHTUMhQw6zQwfda%2B2XDzbb%2Ff6W17ijVXnaVIWKgQLlYuT2qoDxEkBxkCvZdAvel9IUO0BnSkh2qH%2Bwm4vXIJwSlF45T94Q9bg%2B0D2%2FRWkeRkBbB3AQIjijj9ewksNsP%2BtjJS4%2BaQ%2FlKkdXEFq5eHz6VXOvyxqCHlLoGDtnpE3gpr5GivJZUprkUS8TYqoW7EfgRkr4ZWS79BM5edxXRO8V%2FRGl8B8InmNcs94cQZXc%2FQQxQMKC1UxqpEucfbaW1egPR8GMi6zgMIpg8LHxig9MpQ6%2FrCZt%2FN%2FtiB8r96uhbNewaJ3wJPH9ZhEdeBdGEQqRv2m%2BLNoqgfu5iNVnICNJjSOVJJiw%2BcAFmRkQUroy4gP5271pdMawMVVzlh0nLYloKtkMxuPELLEuke%2FKwl9JVpdb%2FxtUMcmCLWlscnTAoJAG%2BWUz59yMC7fziLfxTQJsrchiNoQ9rIKiLVV%2B6MRP4DrOWlfA6r661C5FNQJMSqHw8ruCoFZxX47QHOXtitcy2eVNykVXCKBUlLTbVWB8F05GRp5suKKbbsNH3bZeH1tGY%2Fw%2BWMym%2F3Xdw%2BQSxHzv1M33toM1p41cqEpxns4ww8NPSyQY6pgFVsaYyei8v4abQroNzyithHfSHSII4X4%2B9W%2BBXjvAqoI5TWwKeS1HxW1QBuXQcPt07XE3Zbwka7WIznvS74Xr60QX8TcPHGv6Z0sGFjgTEB184m77XJd63gzyIUtZLVrdO7qmK0QNm1Z5hpXZi9ezdZJ5N3wlti%2Fi3uuTx3FgbALa5WMQ9QUreCfyTPyN37%2B93ei6IgSpfhkPV76eME2OWBmhdmXT%2F&X-Amz-Signature=0bcd6c8e436f4b932d23a4f4b6095372d3ee7bf271fc106430d833a77138d3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
