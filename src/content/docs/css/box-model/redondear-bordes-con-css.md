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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646TSUQTM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIMLIMpl5eEKRNuO3lSYn7nzy%2BwkOxuxTyHSWrw7H8QIhAMB7X6iybNiy3Y5WzPszBpPQjfBzKMIM3u7zbQw3lbpVKv8DCHYQABoMNjM3NDIzMTgzODA1IgxnyzvZW4m8FqfRl%2Bkq3ANe%2B%2FvRVrPSyfP6w9r8olrkAkTsi1%2F7ALgC4OJMwMX0UKpqdWMIdRE9Zm%2Fz%2FjHYncuyfHG7CHiRa6uoMjmzSj1EDSE5mJ2RvAwyCsvNFhEw2rMUyccRe%2Br1FA7YczG3GDI8wG4zmi7s%2F476XfgI8VPMgKQdX75J37YxlpY7HVvPJLpS2cCJXzt2Xo6Wv6RlYxvLDgUtj%2FbvcQ0Q0qdVjEdEuH%2FP9HEA3nmmJCWid5N8OdikVPrbbYbHlgFi1m8c0sop31luGaB2FGZLu%2B2nNe%2FBiyziHB3fBgnR0DWQlOpWvo3yq3YIRr9GJMTKk9hwcxhZUovmBCIgQy3Wr8%2Ba7eJd%2Bst%2FDwSXanSL0bbCuBBTV5JLzmHP9QsYNv6vW1nkdXTqjtXqJg1JdiqR86Kl%2Bwu%2BIXfrNHllsyvvM2XYThzh822s%2BW9tKfFk8UWrBaCwt%2FEG9GY1C2IZdh3a%2BP0YtLYg2DnUEzV%2BZxC5%2BCOVntCBXavIgm8UNqXGfPgtXjOzZfA6HOICZrpV%2FMN2b6LaLKLmvIyCrlwCjshv9DCb2P80BV7oWCtRRoEzdTZSJzagvjMzaFOZlAEiIXSqf7CPu459bwQCugLyoBXBq%2BD9FqXROb%2F6J%2FSz%2Bo%2Bv8%2FWOvDCP6YjKBjqkAY7S7Vp8YerazuM4679ja5mdPnLxhu6rmhWgD%2BdEi9%2BaVO5jND7Z4Ndu2q83UkZFQKFgHTwJU5BBGsrf%2FUeLs3G6JeRJ%2BnJ9ikzozAea%2FnOqjs3rCAj2Mv%2BlM1le8OznbB7pGl1w6ovOeXoY0vWa3vKXlStCyiW%2Bzn9Trstg2CqZayD02nBQBJa6CVjSC2wG%2FXuRV1lTISh6ajSLaQikwxjt%2FYHE&X-Amz-Signature=260643db92e82088fca78730f66234bc348e73a1bb45e2d7c04e0808ecd8b00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646TSUQTM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIMLIMpl5eEKRNuO3lSYn7nzy%2BwkOxuxTyHSWrw7H8QIhAMB7X6iybNiy3Y5WzPszBpPQjfBzKMIM3u7zbQw3lbpVKv8DCHYQABoMNjM3NDIzMTgzODA1IgxnyzvZW4m8FqfRl%2Bkq3ANe%2B%2FvRVrPSyfP6w9r8olrkAkTsi1%2F7ALgC4OJMwMX0UKpqdWMIdRE9Zm%2Fz%2FjHYncuyfHG7CHiRa6uoMjmzSj1EDSE5mJ2RvAwyCsvNFhEw2rMUyccRe%2Br1FA7YczG3GDI8wG4zmi7s%2F476XfgI8VPMgKQdX75J37YxlpY7HVvPJLpS2cCJXzt2Xo6Wv6RlYxvLDgUtj%2FbvcQ0Q0qdVjEdEuH%2FP9HEA3nmmJCWid5N8OdikVPrbbYbHlgFi1m8c0sop31luGaB2FGZLu%2B2nNe%2FBiyziHB3fBgnR0DWQlOpWvo3yq3YIRr9GJMTKk9hwcxhZUovmBCIgQy3Wr8%2Ba7eJd%2Bst%2FDwSXanSL0bbCuBBTV5JLzmHP9QsYNv6vW1nkdXTqjtXqJg1JdiqR86Kl%2Bwu%2BIXfrNHllsyvvM2XYThzh822s%2BW9tKfFk8UWrBaCwt%2FEG9GY1C2IZdh3a%2BP0YtLYg2DnUEzV%2BZxC5%2BCOVntCBXavIgm8UNqXGfPgtXjOzZfA6HOICZrpV%2FMN2b6LaLKLmvIyCrlwCjshv9DCb2P80BV7oWCtRRoEzdTZSJzagvjMzaFOZlAEiIXSqf7CPu459bwQCugLyoBXBq%2BD9FqXROb%2F6J%2FSz%2Bo%2Bv8%2FWOvDCP6YjKBjqkAY7S7Vp8YerazuM4679ja5mdPnLxhu6rmhWgD%2BdEi9%2BaVO5jND7Z4Ndu2q83UkZFQKFgHTwJU5BBGsrf%2FUeLs3G6JeRJ%2BnJ9ikzozAea%2FnOqjs3rCAj2Mv%2BlM1le8OznbB7pGl1w6ovOeXoY0vWa3vKXlStCyiW%2Bzn9Trstg2CqZayD02nBQBJa6CVjSC2wG%2FXuRV1lTISh6ajSLaQikwxjt%2FYHE&X-Amz-Signature=bb22542b24f30625fcdd4cb295096a44dd7be72d103cd72a00ff81b3b1cb3f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
