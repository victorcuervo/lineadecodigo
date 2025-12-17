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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NW47THU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChYrmAjN2dv28vmSVLCM2Knj%2FO0gXnnWN9KX2eyHY%2FGgIhAMpZ2Gfb5iTFJyBZRErumpIOdMILpm5pXNmzXechXmbEKv8DCHwQABoMNjM3NDIzMTgzODA1IgxbEhIl14HAYX4tOhgq3AOfd%2FqclJ6VI3ATqlckhCX5svCt1AmHj3w%2FTyLYd1cOdQllBhOYq50nC5vWdT9y2FYpqtyhKlEiCTEhD6ACVxYCIQ1ORcEBnAl7ScU68KD9C0hyhX7k5NCa%2BtadWlhWqtTgAixCM2jRbtqLfw8nRsbv4lEVZP3tA9uFoSl2mgezU3P7xRbFjfm1xiYd%2FTFCTx0Y1qaeWA86vo660VpfawUq8howx8uRDof6yS8wGVbId0FANmVQWMDjEzsHvoqHL5U6SqLZWGkWFGeNzO1FDlcZpSdUrhQKoLsvOwZBi%2FujE8Wn23Xzrk%2B7mMOQtuh19C5s0lZ0KKaFyLPEt7e9ik3Ou8oVwdr94BoMLPkBGCVT0H5inHRMS4d4C%2Bm75FaBubJYEVc0oV2gw00qFZ3V%2FmQBBesvM7NAU%2FCK4NT0eAzUHVfI7CXLtF6wE3Aic8TQvTd5oTNCLrwPXOZQRmugau0no7Yj9sLfmmlFvh1yHug8BmckacvN%2BgZHMIEf91JbUKf6JYUKqnmmgaaB7ug1mOJBJzEZahfTxRwSffTXnZl8ynhaXIKMCXkr75mw1l8nZQ3qE%2Fq3MKBGG4meUCRYjclbm7gnXQH7uAviPoD%2FTvrxUWrKKou89L72uF2ODTCIj4rKBjqkAWLEM8zIBdmDM4k%2BXvCFv7HuEHtZbZmiAiKQmajB3NR9ZyKUcnSNyEOCAhHu7J6JozGwa1igRa4bGHWQJFBvuJ0XCGfeIy7HXt7xamIKauZkCedJ9JqJ%2F%2F9t%2BQngKIsWORmlq2XkRjzFLfbKX1VE1dbxP%2F3O1xBW5yjWA1Iy9Gx6fAdsaFcA08ZzgqoK1upeolsJX1BEA1ypdo02SBnGpJxDRDgL&X-Amz-Signature=fa56e93c8f6baaed66c75581ef0668a8bae7b277d3505a234b646bde1f32505f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NW47THU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChYrmAjN2dv28vmSVLCM2Knj%2FO0gXnnWN9KX2eyHY%2FGgIhAMpZ2Gfb5iTFJyBZRErumpIOdMILpm5pXNmzXechXmbEKv8DCHwQABoMNjM3NDIzMTgzODA1IgxbEhIl14HAYX4tOhgq3AOfd%2FqclJ6VI3ATqlckhCX5svCt1AmHj3w%2FTyLYd1cOdQllBhOYq50nC5vWdT9y2FYpqtyhKlEiCTEhD6ACVxYCIQ1ORcEBnAl7ScU68KD9C0hyhX7k5NCa%2BtadWlhWqtTgAixCM2jRbtqLfw8nRsbv4lEVZP3tA9uFoSl2mgezU3P7xRbFjfm1xiYd%2FTFCTx0Y1qaeWA86vo660VpfawUq8howx8uRDof6yS8wGVbId0FANmVQWMDjEzsHvoqHL5U6SqLZWGkWFGeNzO1FDlcZpSdUrhQKoLsvOwZBi%2FujE8Wn23Xzrk%2B7mMOQtuh19C5s0lZ0KKaFyLPEt7e9ik3Ou8oVwdr94BoMLPkBGCVT0H5inHRMS4d4C%2Bm75FaBubJYEVc0oV2gw00qFZ3V%2FmQBBesvM7NAU%2FCK4NT0eAzUHVfI7CXLtF6wE3Aic8TQvTd5oTNCLrwPXOZQRmugau0no7Yj9sLfmmlFvh1yHug8BmckacvN%2BgZHMIEf91JbUKf6JYUKqnmmgaaB7ug1mOJBJzEZahfTxRwSffTXnZl8ynhaXIKMCXkr75mw1l8nZQ3qE%2Fq3MKBGG4meUCRYjclbm7gnXQH7uAviPoD%2FTvrxUWrKKou89L72uF2ODTCIj4rKBjqkAWLEM8zIBdmDM4k%2BXvCFv7HuEHtZbZmiAiKQmajB3NR9ZyKUcnSNyEOCAhHu7J6JozGwa1igRa4bGHWQJFBvuJ0XCGfeIy7HXt7xamIKauZkCedJ9JqJ%2F%2F9t%2BQngKIsWORmlq2XkRjzFLfbKX1VE1dbxP%2F3O1xBW5yjWA1Iy9Gx6fAdsaFcA08ZzgqoK1upeolsJX1BEA1ypdo02SBnGpJxDRDgL&X-Amz-Signature=56b8a061762430b22e2a2f1b7fcdc7d3ce9ff15181f9a14f0945f2f8d73e0d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
