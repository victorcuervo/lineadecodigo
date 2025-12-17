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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXSFBAF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIvYbbgkrf0E9nSdnaQXKmiqifLupGdZ9fRppYlJ0czQIgMqbtEpq6vaN9SLbwT2u6hf9bv7bNqMVGsdO3mVRuXx8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJ0s%2BT5GfDUvm54yQircA7k2JQRCAnlxdGEwqZasFZjzdk%2Be%2BZKEEchUrmRsyKJX7z7KYAYJHbhorJJfRyalddaoUTUxpO2Z8PJte8g%2FvQqRnlV4u%2Fg1f2YpXgLP7PzUxxmKwakn%2B%2FoUqH1FHPLNGUEtXtHhsBxGCEL1MCajo9iivBErC%2BotaX0g0kt04%2BIqo4AxM6YXmPsNaNBTkjait0Kzql%2FhUt704q%2F%2BCv%2B%2BES83X%2Bd1%2Bl%2FxkFx5du%2FX4YAbdbzkwOhCZp1%2Fbddnmyh6MK3M7wRqe6knt8sNyGjfs04bGuRRM6HZhYpsvBaW0eCsCJHJBFOhc%2FRULVquLaUgZhjlarj1RctKl0cwBfS0nI8sC%2FABuhDaXy0XZ080O78NWAKzMcMvcRxIJ8SvrBDTxNCeTBsbqy1ZWpQXJXBo2iO3r1xzZ4cv73R8pieKtEqYCknsgxYXnaSD3KqvV3FFwGd9ucJQ3%2FLbEiU%2FFaPrdnqHTzoH3DfHnrYrr%2BtmHAIrOb9B13JrPR6QyqzNwtQBp69TQu7MM5%2Fmo0AcehZnMApcerMCJwjEbfAbBqjT4%2B%2F6GUG9T9CZRiF8ydei1zvsITPNXfijT4EYoPn0NmtFJWkR%2FUM1jzBmXAzig2bHBevDFqRKI3boXn1mz%2F6cMK2XiMoGOqUBM2hVHe1TaM%2FQ36NEpvSF8Z4Q81ZN05CTe0Ju%2Bzf0%2BSUfFWgNn3LIliLr3MWW72Xb73IkghV8OXCYvp75rT7RUeCxaGcvh6gD0ZFMGrLtFW%2BYEkIfkPugxZR%2F6PZYNTtL8hxt9Gj9bBo0ov4PljbbmVKSNnnZ7rqq%2BynyRZYxw4lankp8KGeXk0OuevCRxI3LoB%2ByRHUDBwqv0ijHmIEz0bO2YbZt&X-Amz-Signature=de839c72076886943b391cf556cd282fd48dab98711a08efa315bc0dfc1e5535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KXSFBAF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIvYbbgkrf0E9nSdnaQXKmiqifLupGdZ9fRppYlJ0czQIgMqbtEpq6vaN9SLbwT2u6hf9bv7bNqMVGsdO3mVRuXx8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJ0s%2BT5GfDUvm54yQircA7k2JQRCAnlxdGEwqZasFZjzdk%2Be%2BZKEEchUrmRsyKJX7z7KYAYJHbhorJJfRyalddaoUTUxpO2Z8PJte8g%2FvQqRnlV4u%2Fg1f2YpXgLP7PzUxxmKwakn%2B%2FoUqH1FHPLNGUEtXtHhsBxGCEL1MCajo9iivBErC%2BotaX0g0kt04%2BIqo4AxM6YXmPsNaNBTkjait0Kzql%2FhUt704q%2F%2BCv%2B%2BES83X%2Bd1%2Bl%2FxkFx5du%2FX4YAbdbzkwOhCZp1%2Fbddnmyh6MK3M7wRqe6knt8sNyGjfs04bGuRRM6HZhYpsvBaW0eCsCJHJBFOhc%2FRULVquLaUgZhjlarj1RctKl0cwBfS0nI8sC%2FABuhDaXy0XZ080O78NWAKzMcMvcRxIJ8SvrBDTxNCeTBsbqy1ZWpQXJXBo2iO3r1xzZ4cv73R8pieKtEqYCknsgxYXnaSD3KqvV3FFwGd9ucJQ3%2FLbEiU%2FFaPrdnqHTzoH3DfHnrYrr%2BtmHAIrOb9B13JrPR6QyqzNwtQBp69TQu7MM5%2Fmo0AcehZnMApcerMCJwjEbfAbBqjT4%2B%2F6GUG9T9CZRiF8ydei1zvsITPNXfijT4EYoPn0NmtFJWkR%2FUM1jzBmXAzig2bHBevDFqRKI3boXn1mz%2F6cMK2XiMoGOqUBM2hVHe1TaM%2FQ36NEpvSF8Z4Q81ZN05CTe0Ju%2Bzf0%2BSUfFWgNn3LIliLr3MWW72Xb73IkghV8OXCYvp75rT7RUeCxaGcvh6gD0ZFMGrLtFW%2BYEkIfkPugxZR%2F6PZYNTtL8hxt9Gj9bBo0ov4PljbbmVKSNnnZ7rqq%2BynyRZYxw4lankp8KGeXk0OuevCRxI3LoB%2ByRHUDBwqv0ijHmIEz0bO2YbZt&X-Amz-Signature=57533dd05f332c8abb8da71e14c91dbfa1fdc431008e66f82b0e56bd4a49ea98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
