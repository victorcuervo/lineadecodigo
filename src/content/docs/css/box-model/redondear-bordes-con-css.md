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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5HDRRY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTXmnCj8OTJWNCkxSUObH6xaBnSkMxkwsBFwarc%2FGqhAiAL3r23nHmGGvUaamR7Lz6AvHpHxGqEMn%2FBfHKRFZG5qCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8pZHSTRwHBcH95HlKtwDioCUChrMXvkQyOxCBSiwBp1JI6uo9PaIrCWAlIhAgQK9VyG60yCuVqx8QJPLpkIQ2xvH4xp5ThPa%2BuvYCOCaECAoV4d3v%2BZnvvYigKiU1h3GL%2BW2xy3LUZngW5y63FGR4dePBkDPg8HAxzwY29kCjBvtk%2FkPrPVUnzL45aXhDnrvjVi1WnUNVemMxPFzyWf%2FA5PCvcopgoBEUD2hZzB9lPwAO1qd75NwqvI0J8rczAKnZwWabA3CNAr2Brcd5hdbnd4GltLySQ7L%2Fre52KgAnzy4yyClHPARPEgnVoUAmdVaFqLNejcz3uncsdBOH8AkQT49%2F6TGs8zZ9ngShWdHVxU3LkLL%2BSigJayOz1IX087DjpjTPoSkfuO%2FL9PQjebBubEyTlDoEyOAiCA1u%2FY7fJ%2BHdilWBCd0A%2BIh%2B1JZ8fg2G%2F6br5cHN2fh3%2BYTfO86UvOlNd1UPA2uE9Dnq4w8JB3SFVFJ8g4UeHoLgCPaU6FHG1xG0atJ%2FeqPZtbZGib%2BPTP5rE9xiYqAjEfwi3rdWX%2FuBu1JF13D2Q9puUex9a40T8QWesP4IwJJr4%2B3EBrcjA%2B7E8wa%2FfU88Zek%2FfO9jio9YgKibMXTVAIGF5R9xCgYJ7CnufoIRAL2Ogcw5c6IygY6pgE24EvQV0Se25efweOeHg2UJ7y4jA6zNFH0euLVUneTTiH1yos45smv5oVBRQXq7JZFFtFekmHTSZkOCVI5q6INheXkIKTMP%2Bclryq0xjFw1VvWA3ldiINnlrRJH%2BRe8hqgmuFth6bR8etKqGXPpPvSHbAv5Uhb%2FhL6BgG7xw28OrHfce1ABBCy8jOLslJk5iSuaH0ok4llppn5AG8gRDnzZqPKJ0W5&X-Amz-Signature=c2c81666b208c16f31c551f9c01bb9e984fb32650f1aeec201a6e973b09c9c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5HDRRY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTXmnCj8OTJWNCkxSUObH6xaBnSkMxkwsBFwarc%2FGqhAiAL3r23nHmGGvUaamR7Lz6AvHpHxGqEMn%2FBfHKRFZG5qCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM8pZHSTRwHBcH95HlKtwDioCUChrMXvkQyOxCBSiwBp1JI6uo9PaIrCWAlIhAgQK9VyG60yCuVqx8QJPLpkIQ2xvH4xp5ThPa%2BuvYCOCaECAoV4d3v%2BZnvvYigKiU1h3GL%2BW2xy3LUZngW5y63FGR4dePBkDPg8HAxzwY29kCjBvtk%2FkPrPVUnzL45aXhDnrvjVi1WnUNVemMxPFzyWf%2FA5PCvcopgoBEUD2hZzB9lPwAO1qd75NwqvI0J8rczAKnZwWabA3CNAr2Brcd5hdbnd4GltLySQ7L%2Fre52KgAnzy4yyClHPARPEgnVoUAmdVaFqLNejcz3uncsdBOH8AkQT49%2F6TGs8zZ9ngShWdHVxU3LkLL%2BSigJayOz1IX087DjpjTPoSkfuO%2FL9PQjebBubEyTlDoEyOAiCA1u%2FY7fJ%2BHdilWBCd0A%2BIh%2B1JZ8fg2G%2F6br5cHN2fh3%2BYTfO86UvOlNd1UPA2uE9Dnq4w8JB3SFVFJ8g4UeHoLgCPaU6FHG1xG0atJ%2FeqPZtbZGib%2BPTP5rE9xiYqAjEfwi3rdWX%2FuBu1JF13D2Q9puUex9a40T8QWesP4IwJJr4%2B3EBrcjA%2B7E8wa%2FfU88Zek%2FfO9jio9YgKibMXTVAIGF5R9xCgYJ7CnufoIRAL2Ogcw5c6IygY6pgE24EvQV0Se25efweOeHg2UJ7y4jA6zNFH0euLVUneTTiH1yos45smv5oVBRQXq7JZFFtFekmHTSZkOCVI5q6INheXkIKTMP%2Bclryq0xjFw1VvWA3ldiINnlrRJH%2BRe8hqgmuFth6bR8etKqGXPpPvSHbAv5Uhb%2FhL6BgG7xw28OrHfce1ABBCy8jOLslJk5iSuaH0ok4llppn5AG8gRDnzZqPKJ0W5&X-Amz-Signature=df60b25e05446dd544b615f7982d0128cd15092ace3c5d81e4721583765b5288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
