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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPRJCD6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDubtuIkJ9CMV%2BjYR5r1gD%2BgpDXN0k%2BAHD8eoWqRlnpcwIgBv6FQdjYmyrAiZ%2Fjz55R6cesrt8sy%2BRZvSmUDHjMpdUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BJWirOMDVcExMmmCrcAxwvCoOnIkNq5wUVdEdIAUwOJ%2Bebaqfpge69aSEAFa3ZpvBCT9RzCVLIGsJnMQg2hr%2Bdp9QXUlvpVaAzOFqA330VUes9WulzjPmwJY4HVXcJKvXGRliGtXBrgDCeSVsN4rlVJVMjOzRGCbILb5TaddpwOXPu5YVhz5rclohL9t6wLCH4q5Yc5WEF6c0Gfo4jkMCX9gmcXkaiVibKJqQlxT1yvpUWnJtvBKxfGX3n7pecHZVvYR26iGwG6Sfc0hUsSPmJeEVB5OB0eYCXgJE0l2tmtfXzYpQYr%2FdYAarqJ%2BKgmbFB5Vzpcow95eaRjfkdaODaw0%2FvqWQCl1LOFt4UWsNgiE7Ipa%2FU51ZP4b2ec605LFXkSVpfHXAb9xypp%2FjYJ5jpxTEHo%2BQ3JiZiY3XlebqFlArD3QfoxrnzV8tZmB4sWXCssLdKe3TPwCmcXdd7PfEbFn5XM3RwEHBTOlHcBOJQyUSjfi7wu5zDWgKac2Y8Vxm5PFySv0ad6eDHP8YXcR5S7YP0nn6KK3o0pXtJ%2FZIaM%2BApsLfaGApa1MB2YCgIT5p7r6xDBA00VIz9lqaRR2QulwYe60fvQyd0BRJ0VqON2AgqlJqZBRYIxbWP0Xo9nDvoAZ1hmZFXQipZMK2fi8oGOqUB80lV26qjrKBRhh5MF%2BBfTpMj%2F1PvWyXiD6hpZLnnlXiE8yO5OEBxcagKRRSvawT9CLnvnOwvbiAvblFnQjnQuVSsxCzNpe2wu0kTx3Swwxo0ESCnlj6RfWSRKfLuW%2BktwK160Mv4J3c7eGzZPiOd%2FVyZtMeafkTKGazjtDpaXfCBLDutYEk%2BiRFAVQ%2BLtNnpg2ey%2F7NfWc0TQG4yQW0a4FoUH6T1&X-Amz-Signature=a909a04a29946640f1d972119218e37fb156a542d379f1226cc6aa2b1abd5487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVPRJCD6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDubtuIkJ9CMV%2BjYR5r1gD%2BgpDXN0k%2BAHD8eoWqRlnpcwIgBv6FQdjYmyrAiZ%2Fjz55R6cesrt8sy%2BRZvSmUDHjMpdUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BJWirOMDVcExMmmCrcAxwvCoOnIkNq5wUVdEdIAUwOJ%2Bebaqfpge69aSEAFa3ZpvBCT9RzCVLIGsJnMQg2hr%2Bdp9QXUlvpVaAzOFqA330VUes9WulzjPmwJY4HVXcJKvXGRliGtXBrgDCeSVsN4rlVJVMjOzRGCbILb5TaddpwOXPu5YVhz5rclohL9t6wLCH4q5Yc5WEF6c0Gfo4jkMCX9gmcXkaiVibKJqQlxT1yvpUWnJtvBKxfGX3n7pecHZVvYR26iGwG6Sfc0hUsSPmJeEVB5OB0eYCXgJE0l2tmtfXzYpQYr%2FdYAarqJ%2BKgmbFB5Vzpcow95eaRjfkdaODaw0%2FvqWQCl1LOFt4UWsNgiE7Ipa%2FU51ZP4b2ec605LFXkSVpfHXAb9xypp%2FjYJ5jpxTEHo%2BQ3JiZiY3XlebqFlArD3QfoxrnzV8tZmB4sWXCssLdKe3TPwCmcXdd7PfEbFn5XM3RwEHBTOlHcBOJQyUSjfi7wu5zDWgKac2Y8Vxm5PFySv0ad6eDHP8YXcR5S7YP0nn6KK3o0pXtJ%2FZIaM%2BApsLfaGApa1MB2YCgIT5p7r6xDBA00VIz9lqaRR2QulwYe60fvQyd0BRJ0VqON2AgqlJqZBRYIxbWP0Xo9nDvoAZ1hmZFXQipZMK2fi8oGOqUB80lV26qjrKBRhh5MF%2BBfTpMj%2F1PvWyXiD6hpZLnnlXiE8yO5OEBxcagKRRSvawT9CLnvnOwvbiAvblFnQjnQuVSsxCzNpe2wu0kTx3Swwxo0ESCnlj6RfWSRKfLuW%2BktwK160Mv4J3c7eGzZPiOd%2FVyZtMeafkTKGazjtDpaXfCBLDutYEk%2BiRFAVQ%2BLtNnpg2ey%2F7NfWc0TQG4yQW0a4FoUH6T1&X-Amz-Signature=ddbb8bb85dd47ce90208892a65945bbbb60cafe6c403501ba513aba0bf8499da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
