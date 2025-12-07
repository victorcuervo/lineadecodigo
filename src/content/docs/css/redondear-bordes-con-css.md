---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6UW7RPN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSYHRJjbTqiowG9cAFaetDfTkrxSmF3Dl3Wx7sqk8bhQIhAITRxswBSVrugGxiOObVyGdw0zVVP%2Fbe2UX%2FOdXCQdH2KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA1ThYkc6%2BnxYd4Ooq3ANVjU36vITuVm67O%2FlUf0UzfNWaYrmF4g99oZ3AYn62wchrhjOjNpTN%2FII4ymoDC1vheTBbiEkKBw3XC%2BRDZq%2F98oy7v9IktxlFLuaVWIueRM9%2B2%2BGTWisTXxMzxV5w%2BT3qnrrRtWkrVhQnGxHaAOMZduRbwJMX%2FVllpypIYBW2HVpEsh5y9pm4lAtPMattaCQfAq2eZgz9Wl4NvBq8OXSvT4lo3QUycxM%2BIZBDcb9lAJ4ltOvUhfLMeBzF7AQIlP4frLgj92c1lKnGRDAufigsyVfK%2FteusANOill4Qv6ZIdRTrh7Xn9jb8k0hhClKWHWhET3f1ecC8f%2FrSG0ij7m%2FFheo2NAjQX72NYkCTCmsz8aBj5VwQ5jlWTD2gqCqayEsNKHcK2Wz37WNihzzWov40H9CNaSLjozWe6EdaQunMfRDrgIyuGp5I7vOF40HUEMYGMYjHkoNpnlnCo9r9rYPIAiUciqjBuEzLi3%2BVsdXtfM63kjUCdamn50GUGoN9L%2Bn%2FS%2BjOGRaHEaAdkqlNyJb5XMCDf5HGqYv57fSOoTmtX%2BBT50ScjBR3E81vrM7JBkuUjSt2aLevRgfQPO%2Bu2O%2B9es3UgOSE2WQoD1Fgfku3LGgnp2hZAxSb9Bq2zCCmdXJBjqkAdskp1DMt32Bo%2FVJCyD9mfMe5uSZ1waDxrqOPHswcWoBynDdkRwFxuCBeZgILn8ThHdJkA5zK1g2z8cgHf%2BFIHsyIhWR4WRX5LUzoqV1Pn2jIv2yZrMLieIVY1l5DdxVenw5iB0NXQaprOeRrm74VPdILl7TrV%2BCdUugqsLFoVPr44xfQrNizxcYxnhAwNAPnAY9XhUeHCAC5m20JLb1y36qyJS%2B&X-Amz-Signature=f68fbf273164007dcdcb980f8baea43b416f36ff2e6eb083c957882bce394178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6UW7RPN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSYHRJjbTqiowG9cAFaetDfTkrxSmF3Dl3Wx7sqk8bhQIhAITRxswBSVrugGxiOObVyGdw0zVVP%2Fbe2UX%2FOdXCQdH2KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA1ThYkc6%2BnxYd4Ooq3ANVjU36vITuVm67O%2FlUf0UzfNWaYrmF4g99oZ3AYn62wchrhjOjNpTN%2FII4ymoDC1vheTBbiEkKBw3XC%2BRDZq%2F98oy7v9IktxlFLuaVWIueRM9%2B2%2BGTWisTXxMzxV5w%2BT3qnrrRtWkrVhQnGxHaAOMZduRbwJMX%2FVllpypIYBW2HVpEsh5y9pm4lAtPMattaCQfAq2eZgz9Wl4NvBq8OXSvT4lo3QUycxM%2BIZBDcb9lAJ4ltOvUhfLMeBzF7AQIlP4frLgj92c1lKnGRDAufigsyVfK%2FteusANOill4Qv6ZIdRTrh7Xn9jb8k0hhClKWHWhET3f1ecC8f%2FrSG0ij7m%2FFheo2NAjQX72NYkCTCmsz8aBj5VwQ5jlWTD2gqCqayEsNKHcK2Wz37WNihzzWov40H9CNaSLjozWe6EdaQunMfRDrgIyuGp5I7vOF40HUEMYGMYjHkoNpnlnCo9r9rYPIAiUciqjBuEzLi3%2BVsdXtfM63kjUCdamn50GUGoN9L%2Bn%2FS%2BjOGRaHEaAdkqlNyJb5XMCDf5HGqYv57fSOoTmtX%2BBT50ScjBR3E81vrM7JBkuUjSt2aLevRgfQPO%2Bu2O%2B9es3UgOSE2WQoD1Fgfku3LGgnp2hZAxSb9Bq2zCCmdXJBjqkAdskp1DMt32Bo%2FVJCyD9mfMe5uSZ1waDxrqOPHswcWoBynDdkRwFxuCBeZgILn8ThHdJkA5zK1g2z8cgHf%2BFIHsyIhWR4WRX5LUzoqV1Pn2jIv2yZrMLieIVY1l5DdxVenw5iB0NXQaprOeRrm74VPdILl7TrV%2BCdUugqsLFoVPr44xfQrNizxcYxnhAwNAPnAY9XhUeHCAC5m20JLb1y36qyJS%2B&X-Amz-Signature=36495025328d15c334ab7e674ce4cc8a2e96815f9b4380a4018e0828ced822f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
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


```text
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
