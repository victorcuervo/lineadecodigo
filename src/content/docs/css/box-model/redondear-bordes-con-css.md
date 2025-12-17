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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIN3HEX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2Bu6nOhrC2oS%2F5ozhApQuyhHPFusAP9J3PUSC2pwsTnAiEAkl0O7IA8%2F3mOZV%2BOChhW1LxA8pXSvcLak4HyjpsrXecqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9uEuuR3cShISHteCrcA8%2FRJ1OpCHwlmq4fftEYHAb6jSV5Ud9dpFci1f68D5AjUnwJlsymC4H6OxAaSZ%2FQoDGSV1E%2F25BZZsoM6zMk9QjXpK1h7PzSxplzOVZaI66H9yLyHfhbvf316OZk2ORnOvty0HM%2FGw0lXUHmSLVUmb8kOhZFnQSo58hBO8DRlCfiUyuPRWeD9kdqhpxo3G%2BRVFcIcIlqLIhR%2F3tsO08JtUcskWyiGvANeYOkGED3K1wxLlCIWuZNE%2FsbWFsFkrL2LsZbw8lHbYG13c9DSuYOKugZTAtYgjM2DQ1u8WX9PsP98F83rT0aU6wTpjktpDIG%2FlJp98NPR8iGAv7Wpj3t%2FcaqB77vRkK8eAAT5Rk3OwfBnWIHG3JeFAGDCQVI06UYu%2F39iVyayoU1JR5qaWOi7xYw4Xn2TvgI6Yvyty6lRWnIOc2hlwDVQ3%2F%2Bo7Hn4HShRCXBVEI47tA9FGn71%2FlwpYGb62KaXSTmS%2FObRR4faGKuwLwMUqkOYrsDfItAhsr6B56KfE4sldwEJrFgKzk0D64YdyluQbJAM73kvV%2BGqVyQlZveltB8O3jixsokFk%2BQqo7RdoR6d%2BoYsi9RpKvWetkrDZ8g48H3e2HIyO7uhiaa9P%2BdlVIiRbMNfwPXMKmfi8oGOqUBfDpgvi0jvr0QkJG%2FURuVgV7ty2qyNp%2BlmMQuwA3wD1AzuLtc6npp6%2BqxcQXZ9bZj7NvPk%2Fbm%2BzQu64LJ01uvvaAZiBu31bTciqBglv%2BOZg1GCK5TNjXfNWSySUfIQeoFT7%2F7C7DWXFrnwL6%2BJjxlz0bCWMXkMAXXcWa47T4o32jT8nCnDTLMUPawPynJVRO6yAuKuCufA6RcGCldaiplhwGYIyDZ&X-Amz-Signature=d44addf666f28ddf6635d0032fd3060f727678047570d37a43ed1bc71991853c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIN3HEX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2Bu6nOhrC2oS%2F5ozhApQuyhHPFusAP9J3PUSC2pwsTnAiEAkl0O7IA8%2F3mOZV%2BOChhW1LxA8pXSvcLak4HyjpsrXecqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9uEuuR3cShISHteCrcA8%2FRJ1OpCHwlmq4fftEYHAb6jSV5Ud9dpFci1f68D5AjUnwJlsymC4H6OxAaSZ%2FQoDGSV1E%2F25BZZsoM6zMk9QjXpK1h7PzSxplzOVZaI66H9yLyHfhbvf316OZk2ORnOvty0HM%2FGw0lXUHmSLVUmb8kOhZFnQSo58hBO8DRlCfiUyuPRWeD9kdqhpxo3G%2BRVFcIcIlqLIhR%2F3tsO08JtUcskWyiGvANeYOkGED3K1wxLlCIWuZNE%2FsbWFsFkrL2LsZbw8lHbYG13c9DSuYOKugZTAtYgjM2DQ1u8WX9PsP98F83rT0aU6wTpjktpDIG%2FlJp98NPR8iGAv7Wpj3t%2FcaqB77vRkK8eAAT5Rk3OwfBnWIHG3JeFAGDCQVI06UYu%2F39iVyayoU1JR5qaWOi7xYw4Xn2TvgI6Yvyty6lRWnIOc2hlwDVQ3%2F%2Bo7Hn4HShRCXBVEI47tA9FGn71%2FlwpYGb62KaXSTmS%2FObRR4faGKuwLwMUqkOYrsDfItAhsr6B56KfE4sldwEJrFgKzk0D64YdyluQbJAM73kvV%2BGqVyQlZveltB8O3jixsokFk%2BQqo7RdoR6d%2BoYsi9RpKvWetkrDZ8g48H3e2HIyO7uhiaa9P%2BdlVIiRbMNfwPXMKmfi8oGOqUBfDpgvi0jvr0QkJG%2FURuVgV7ty2qyNp%2BlmMQuwA3wD1AzuLtc6npp6%2BqxcQXZ9bZj7NvPk%2Fbm%2BzQu64LJ01uvvaAZiBu31bTciqBglv%2BOZg1GCK5TNjXfNWSySUfIQeoFT7%2F7C7DWXFrnwL6%2BJjxlz0bCWMXkMAXXcWa47T4o32jT8nCnDTLMUPawPynJVRO6yAuKuCufA6RcGCldaiplhwGYIyDZ&X-Amz-Signature=04ba8b5fa8db81186d2c0697ab7015540e8b6b75c77a4946f028e6c09fe7718a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
