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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMYHXWQS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ96Khtf9CkiHSFzTcQtv9q0DGTiswTLYZ14TYkf9mmQIhAPcfOEdx9MYP0iy8p4FlmNk04MuG74KpD4H2lWwm3irrKv8DCHkQABoMNjM3NDIzMTgzODA1Igw6LZZKLpOjwx1ArA8q3ANJj8mHChGk7cNnQPpifmLbQ6m1LNCTxT3CQaZm43rwt%2FusKOrImhF4DRVHPwSQQV3D6OK1g2dGT8Y90QCqugloVZQVfy8Lmc2O8nttSX6qNntd4dDRln%2BNtERrq2krGutgY8WflhqfBThvY35cQSq523YvPMeHHzIiQjjJDU8cmz4yKZyNqaJ%2F1LSGp%2BYiDoWQNid7ywjtl1CypkRqXUqu6rY4qbmWrLv3B7YIUpJh1rBmuj3jEUFGGIgbiXdApvIvbRJiDlI97MUhFPODXKlChaIhGlP9L4zE%2BuX6VFOuBC4DsH8EKMNn7scFyhtjmfwpzCKw8%2B0QUDI4ZEEgWwcPTcJJ5kiyIKpn941XQW6gtRr0N%2Bgm6mDUa6KB0L%2FZJtqgaMrFXenG4gOItAPGylRqsnRgsqI22LNAg6LuEfhxrkO0js6azD9Jrf9tPwSl9ud407ZoeMOngGZqv%2BTbNBz0wmShJOpH7WleYzY2tW6IpSgCHFrH8HCqda%2BUtzyaTnZpNYld9yHKRHBO3z2fJ4jGYdA2OTf4VeAP7eI%2Bwt4Z2v0ESShXi9V01jyCrkf6pt1lNhl0OxoayKvA18Xof%2BAxW0ttyNB5dljvU35bYq96KjbQN69T7NQuoLfJazD70InKBjqkAeB%2BbN2MwWMFpIEPR%2FHzMs13rk3lW%2FT5MLVpu92Gc0ElDJp%2FbeEDMDCSmM3SlbhrT%2BqZ7%2FAxw81ltn9rKAHXvo3n%2BlSXvYmMmXCut3HO9GuNNCE0PcAAC8wqhbBqg2KbAdJTfSjP2Pt7EhbGHIhDcntA%2FkLfflYfoprz0pACE%2FbHAWKMxonfRyXXFlSjCns6ptev71upNWB3EH2ItchqywGhAYeq&X-Amz-Signature=0090b99627737a376f108f05290c469b01e2adb95f733fae7739bfcb78b1c90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMYHXWQS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ96Khtf9CkiHSFzTcQtv9q0DGTiswTLYZ14TYkf9mmQIhAPcfOEdx9MYP0iy8p4FlmNk04MuG74KpD4H2lWwm3irrKv8DCHkQABoMNjM3NDIzMTgzODA1Igw6LZZKLpOjwx1ArA8q3ANJj8mHChGk7cNnQPpifmLbQ6m1LNCTxT3CQaZm43rwt%2FusKOrImhF4DRVHPwSQQV3D6OK1g2dGT8Y90QCqugloVZQVfy8Lmc2O8nttSX6qNntd4dDRln%2BNtERrq2krGutgY8WflhqfBThvY35cQSq523YvPMeHHzIiQjjJDU8cmz4yKZyNqaJ%2F1LSGp%2BYiDoWQNid7ywjtl1CypkRqXUqu6rY4qbmWrLv3B7YIUpJh1rBmuj3jEUFGGIgbiXdApvIvbRJiDlI97MUhFPODXKlChaIhGlP9L4zE%2BuX6VFOuBC4DsH8EKMNn7scFyhtjmfwpzCKw8%2B0QUDI4ZEEgWwcPTcJJ5kiyIKpn941XQW6gtRr0N%2Bgm6mDUa6KB0L%2FZJtqgaMrFXenG4gOItAPGylRqsnRgsqI22LNAg6LuEfhxrkO0js6azD9Jrf9tPwSl9ud407ZoeMOngGZqv%2BTbNBz0wmShJOpH7WleYzY2tW6IpSgCHFrH8HCqda%2BUtzyaTnZpNYld9yHKRHBO3z2fJ4jGYdA2OTf4VeAP7eI%2Bwt4Z2v0ESShXi9V01jyCrkf6pt1lNhl0OxoayKvA18Xof%2BAxW0ttyNB5dljvU35bYq96KjbQN69T7NQuoLfJazD70InKBjqkAeB%2BbN2MwWMFpIEPR%2FHzMs13rk3lW%2FT5MLVpu92Gc0ElDJp%2FbeEDMDCSmM3SlbhrT%2BqZ7%2FAxw81ltn9rKAHXvo3n%2BlSXvYmMmXCut3HO9GuNNCE0PcAAC8wqhbBqg2KbAdJTfSjP2Pt7EhbGHIhDcntA%2FkLfflYfoprz0pACE%2FbHAWKMxonfRyXXFlSjCns6ptev71upNWB3EH2ItchqywGhAYeq&X-Amz-Signature=4a64bffaa088c9e8cf3e93113058ab56aa646fc7c6a0e18e825e3241b9c21ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
