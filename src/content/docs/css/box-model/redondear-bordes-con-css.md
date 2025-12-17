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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2D7CYL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLMa2oiKm%2FG0cLt%2Bpa8E0ApEyw8pswTqiA380hPKWeAAiBZkqerLl1cKIpdOex528gE%2BtP87eHVXTV62btDBuSJ9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCX%2B9BKLBxg51LrbKtwDguedWUXyprZFI%2BldXb1aLMmhHepj1eOdudnsO5nGEF0k0iaQK5d3hx8nkpUJrcSmuRLBItiJF0Sc7gKKLSUqJxmjZFSqQCYTPRORY3Vr9kqO1uaRIZJ0iMJ6Ij5gYL%2FqbjyybmCL%2FeUWOuqrHGeoq37rUBJtULldwBsgBXskmxdqEA5MWA8NaV03I8C8112l3ovvmZneoFsAT2Im65AyxPE6dJPpTSTV1QwlD4j9rt1kIqixLDyFyS02KCAge2DY67njmKaFJvTQ9X6PoEBKcJlcDbhu9RbqE8ZROZNSk4vNLS6aNHwjvC5SEcm3IAguS4JMJ7glaPWUq3AXL7Dn9L0bgkCFMxIth3fXxfQvcYu9QLbGx7eXQ54nhzklBQH%2Fgraqyy85DhEZEeuCegQCLVAbGL4gi0LyRPF7VCNh5aH%2BdYObLgkjOhhMCHUov0q3LfBgFUwr%2FM%2FfT4S3ZrSYO9ICVOV4Su9gm9U2l0iTBaD6kcnXdp4v%2FUsdtUb%2Fg6b5SGcsKTgHHg1vMEYT4Rn6SlTW6d8PJ3Yw%2FMzoifPr2jTMFWJg4niZFWaP1Vzw1fZW9YLmNT44%2BAVWkAzx4cLePhIlEj1k7LgcC9ybEhAdeg5Y6p2Kt5CiApAkXcMw4p%2BLygY6pgGPLG5rMbbQYILPoqJYmUou97FKFW0F4WKax0Hu2sh4NakAE28%2F1IiV2H7ixRZYU2PcKGZhHOQ1RpAsmgpsUqDFVhagtUqcW8HskUEXJ1MHeX7z18XT2z8OzBuPLYoGPZvU%2Bp%2FA%2FclP5JTORsJCiql4yDbNXayM68YqZX%2FQQ6Fk3OXjoCY1CDHn58hGhEtOMGYk5YlKrh34Ghtg%2F0frd4kbiIlQbbjd&X-Amz-Signature=f16f35480583427bbd46173096739e212cbf4bec96a828d575bde687a49c944d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2D7CYL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLMa2oiKm%2FG0cLt%2Bpa8E0ApEyw8pswTqiA380hPKWeAAiBZkqerLl1cKIpdOex528gE%2BtP87eHVXTV62btDBuSJ9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNCX%2B9BKLBxg51LrbKtwDguedWUXyprZFI%2BldXb1aLMmhHepj1eOdudnsO5nGEF0k0iaQK5d3hx8nkpUJrcSmuRLBItiJF0Sc7gKKLSUqJxmjZFSqQCYTPRORY3Vr9kqO1uaRIZJ0iMJ6Ij5gYL%2FqbjyybmCL%2FeUWOuqrHGeoq37rUBJtULldwBsgBXskmxdqEA5MWA8NaV03I8C8112l3ovvmZneoFsAT2Im65AyxPE6dJPpTSTV1QwlD4j9rt1kIqixLDyFyS02KCAge2DY67njmKaFJvTQ9X6PoEBKcJlcDbhu9RbqE8ZROZNSk4vNLS6aNHwjvC5SEcm3IAguS4JMJ7glaPWUq3AXL7Dn9L0bgkCFMxIth3fXxfQvcYu9QLbGx7eXQ54nhzklBQH%2Fgraqyy85DhEZEeuCegQCLVAbGL4gi0LyRPF7VCNh5aH%2BdYObLgkjOhhMCHUov0q3LfBgFUwr%2FM%2FfT4S3ZrSYO9ICVOV4Su9gm9U2l0iTBaD6kcnXdp4v%2FUsdtUb%2Fg6b5SGcsKTgHHg1vMEYT4Rn6SlTW6d8PJ3Yw%2FMzoifPr2jTMFWJg4niZFWaP1Vzw1fZW9YLmNT44%2BAVWkAzx4cLePhIlEj1k7LgcC9ybEhAdeg5Y6p2Kt5CiApAkXcMw4p%2BLygY6pgGPLG5rMbbQYILPoqJYmUou97FKFW0F4WKax0Hu2sh4NakAE28%2F1IiV2H7ixRZYU2PcKGZhHOQ1RpAsmgpsUqDFVhagtUqcW8HskUEXJ1MHeX7z18XT2z8OzBuPLYoGPZvU%2Bp%2FA%2FclP5JTORsJCiql4yDbNXayM68YqZX%2FQQ6Fk3OXjoCY1CDHn58hGhEtOMGYk5YlKrh34Ghtg%2F0frd4kbiIlQbbjd&X-Amz-Signature=3f8987ce282c4a0f9f4ab490c055fd729d63038c169a35ee72d384e9647fe6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
