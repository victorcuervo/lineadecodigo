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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBNNSJT4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyy%2Bqmd%2FbuIUKX8My5fbCr0Hn2a1tZTYjrEBkLYznwRAiBk3G92OtYKiuHyOX9H3YYXBAGoxa5S%2BzbZziB31e4%2B9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYEkE9MWhYCjkjIOlKtwD%2FilSHo%2BTa%2FepJd%2BhDZccFPzLUDuIozd8lNscX1E2GCqLsosiw5642GqlB%2FBM3l2AuPUZDaC68M67g%2BGWrUK1IbNHpnKwwEue%2BlpfzoSpTk7YqXEklCZ0q%2FZpN3yJ0JHzvpZIJ4yPu3CMzLg9dJOOr2DM6nK0LDHs12EO7Me3MOsDAKjf%2FAvR7OBDxD3Qfc405h601TW1iHm3mCiNCcHvTGWYQfbBfVle0A9Q25Mbb%2BUqKu8Qm8QW7oJuFjM9tEDGCQKU1BeBZeCmyThcaam50Ma83hW2mxYwBqYd60UuIoGfe7Uva1pw%2B4XbMoLgSde5rIOgxUJi9EBazFE7SQXdP4fHVTeasI2OUep%2FM966zG7%2BrnhdKaOuMR%2Ba7Mio51rjfBHeNaFzS688TpOP4Mbd6lwf8e5b52Y6fClzozVzqMCL10SE53U8Z2BWKhXRwYn1enqKXAuhmSw8VHuiJjcvorL9FvYtQ2am%2F1JfIgPhG1%2BX4%2FzSrEaLOiOYBxYb6nrPmoCqx%2BnY56U6TuwPZsb6Pa1FTs2cveRTxhYSsaxpWx9s8Ew3JC9qO%2F9MnjzyyfpGX7NfccHGq%2Fqs4aylulm0NFkDAs%2F9lpVRBRU9q94YY6leELfMoVqyVVxhJzww8Z6LygY6pgHQRojtDC2x45Zq%2FyNHrsiQfla%2FDbmxTS4EWDI0zlLbyL9NcnvtUbyIUbltZ0tyQ%2BpSEHctC6m%2FtSxelXrKXqfAHKKuDyddekaQJTTI73eAUSQmFuu8pAm51trO1RGycD%2BbC2Lf6XNYVFNulbO%2FqkXPgZDMSD1ZWYlF1zCqRtESZ5fRHCPbskKgG1qSUrE2OpNk1NM%2B2zmjFLeLSQ9F%2FTs3iIV6dVfJ&X-Amz-Signature=eae2c3bb03b4bedd06e4bc536a86f09333f67af77855bcaccc096227ff1fe032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBNNSJT4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyy%2Bqmd%2FbuIUKX8My5fbCr0Hn2a1tZTYjrEBkLYznwRAiBk3G92OtYKiuHyOX9H3YYXBAGoxa5S%2BzbZziB31e4%2B9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYEkE9MWhYCjkjIOlKtwD%2FilSHo%2BTa%2FepJd%2BhDZccFPzLUDuIozd8lNscX1E2GCqLsosiw5642GqlB%2FBM3l2AuPUZDaC68M67g%2BGWrUK1IbNHpnKwwEue%2BlpfzoSpTk7YqXEklCZ0q%2FZpN3yJ0JHzvpZIJ4yPu3CMzLg9dJOOr2DM6nK0LDHs12EO7Me3MOsDAKjf%2FAvR7OBDxD3Qfc405h601TW1iHm3mCiNCcHvTGWYQfbBfVle0A9Q25Mbb%2BUqKu8Qm8QW7oJuFjM9tEDGCQKU1BeBZeCmyThcaam50Ma83hW2mxYwBqYd60UuIoGfe7Uva1pw%2B4XbMoLgSde5rIOgxUJi9EBazFE7SQXdP4fHVTeasI2OUep%2FM966zG7%2BrnhdKaOuMR%2Ba7Mio51rjfBHeNaFzS688TpOP4Mbd6lwf8e5b52Y6fClzozVzqMCL10SE53U8Z2BWKhXRwYn1enqKXAuhmSw8VHuiJjcvorL9FvYtQ2am%2F1JfIgPhG1%2BX4%2FzSrEaLOiOYBxYb6nrPmoCqx%2BnY56U6TuwPZsb6Pa1FTs2cveRTxhYSsaxpWx9s8Ew3JC9qO%2F9MnjzyyfpGX7NfccHGq%2Fqs4aylulm0NFkDAs%2F9lpVRBRU9q94YY6leELfMoVqyVVxhJzww8Z6LygY6pgHQRojtDC2x45Zq%2FyNHrsiQfla%2FDbmxTS4EWDI0zlLbyL9NcnvtUbyIUbltZ0tyQ%2BpSEHctC6m%2FtSxelXrKXqfAHKKuDyddekaQJTTI73eAUSQmFuu8pAm51trO1RGycD%2BbC2Lf6XNYVFNulbO%2FqkXPgZDMSD1ZWYlF1zCqRtESZ5fRHCPbskKgG1qSUrE2OpNk1NM%2B2zmjFLeLSQ9F%2FTs3iIV6dVfJ&X-Amz-Signature=50387d6d1229a1210da3c484b5a0f35a795c1c80bcbb0ad543227bc467a8b26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
