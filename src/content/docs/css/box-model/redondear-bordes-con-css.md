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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZHCB245%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8n%2FZrsSo0%2BOrci9lo5767Bf5%2F095CpIe%2FqpsSjcB6BgIhAITMrSAycB4Cf9UB7UjuY%2BS2OhQNtfdZpCHMet9sIl9OKv8DCHwQABoMNjM3NDIzMTgzODA1IgxzRhxX%2FqRku16Cn98q3APzk7Bq4vJYbK61LNIY07yB8GIIJ5iqhL6RmE%2BbeUNTH78kponO7VeWochZ55q2uP37ZQ4IAP71Xs3DGnlOCOXsvM7GwwZmKKMZdeMbZH6o%2F9Qy0HvlTeewfGCyu%2FBWC6YuWY1SuxfsWmhI0pNhLzaPIom8%2BvDtP%2FHb58UNbAuHebqIsGgIT0zB6GR%2BdHSm6gCB820L41e5iqQOtYkBhx5aalMTlUJ21secnyakfmPy8%2F3YDBxbxObnqGEKLvuVbwQdGyp%2FNm%2BFHhYODtTBlXXeoZcWgj%2Boq3EaraOdXgnqsppnjkL98r7swTeXZDe4xk9nPxlKQbyQhJrIW8U5m71ia%2F6BJLshwdbvrtq0bGpj%2BSMDxSGs8d0vhYOMBK5DT5AApUoLo9IFein%2FC%2B1PgwBfqXapmRcMl2BJvc9ghoGj808yOGkytISzoD6lDohte0QAhsPoX2TR0txYEksjS%2BCLnnHusne6J8dYnb3NjP0ProfJY45xVQdgFNKqXeaMyF64ixOvuq9SqGwkTXWX7SFdr5%2Bs619umfm1K6RscueBgkUCVF7f1EIB%2B6eB8I4Uy4AIzg5MDQ7WJ6pqlYXg5INKG%2F2GvsoNys1XnKwssRXeTwy1UlhPYPtAskwISTC2j4rKBjqkAR%2BoCrySZcuLHNcO%2BwWbNcC3B5TOloBRIeHe4Xp3LIWvHLmVejCUB2ZQnVWCEBmMvvptJXOWyVDrlfmiBX9BvuNPCvBtxZVZXPOzp1vvNFamptd2lQfZCj%2BEwv8AFUVmC%2FT7L3txz0dwR0pF2APdw2cjErZfbei%2B8wxQUqll0o3c2divIs65X84snNK54GUJ0ryTnqxbptCLlVkynoEZFoLmwYpt&X-Amz-Signature=86c0ad4bcad664aced464479ede03b9e47e19d8fb88bc6f942f8d5507c1c7557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZHCB245%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8n%2FZrsSo0%2BOrci9lo5767Bf5%2F095CpIe%2FqpsSjcB6BgIhAITMrSAycB4Cf9UB7UjuY%2BS2OhQNtfdZpCHMet9sIl9OKv8DCHwQABoMNjM3NDIzMTgzODA1IgxzRhxX%2FqRku16Cn98q3APzk7Bq4vJYbK61LNIY07yB8GIIJ5iqhL6RmE%2BbeUNTH78kponO7VeWochZ55q2uP37ZQ4IAP71Xs3DGnlOCOXsvM7GwwZmKKMZdeMbZH6o%2F9Qy0HvlTeewfGCyu%2FBWC6YuWY1SuxfsWmhI0pNhLzaPIom8%2BvDtP%2FHb58UNbAuHebqIsGgIT0zB6GR%2BdHSm6gCB820L41e5iqQOtYkBhx5aalMTlUJ21secnyakfmPy8%2F3YDBxbxObnqGEKLvuVbwQdGyp%2FNm%2BFHhYODtTBlXXeoZcWgj%2Boq3EaraOdXgnqsppnjkL98r7swTeXZDe4xk9nPxlKQbyQhJrIW8U5m71ia%2F6BJLshwdbvrtq0bGpj%2BSMDxSGs8d0vhYOMBK5DT5AApUoLo9IFein%2FC%2B1PgwBfqXapmRcMl2BJvc9ghoGj808yOGkytISzoD6lDohte0QAhsPoX2TR0txYEksjS%2BCLnnHusne6J8dYnb3NjP0ProfJY45xVQdgFNKqXeaMyF64ixOvuq9SqGwkTXWX7SFdr5%2Bs619umfm1K6RscueBgkUCVF7f1EIB%2B6eB8I4Uy4AIzg5MDQ7WJ6pqlYXg5INKG%2F2GvsoNys1XnKwssRXeTwy1UlhPYPtAskwISTC2j4rKBjqkAR%2BoCrySZcuLHNcO%2BwWbNcC3B5TOloBRIeHe4Xp3LIWvHLmVejCUB2ZQnVWCEBmMvvptJXOWyVDrlfmiBX9BvuNPCvBtxZVZXPOzp1vvNFamptd2lQfZCj%2BEwv8AFUVmC%2FT7L3txz0dwR0pF2APdw2cjErZfbei%2B8wxQUqll0o3c2divIs65X84snNK54GUJ0ryTnqxbptCLlVkynoEZFoLmwYpt&X-Amz-Signature=9328808b8160137623d691cac54b23547a40ce6bad3e85d37e7d929b47045bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
