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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUHFDQJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8kKwOYz3D9Wa60dEWniDcmR0ZLLbm1wSXU7Wk3U%2Br%2BAiBzW25MXhaFEKVtofX%2Fu5OdaUAxtzjJxYfuBQxVdl2khCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHfZwdYc7Q3YKYKqDKtwDIIXoem%2BOPs%2FZJMAK34R%2FTSq%2FCNk8AfjSlw1wmHEsOWhHKtxwIBmiuz10pttG9m4XqP63Gyq2x6IlmKYkJVb4sleZaWeFOluRkEBOOU6wFuM7FyN7A5jZIU4Xc9KeMlxTqYkoKy52bY%2BifP4aUH1YuHGljUPTkgtle8AJp9QYZWb%2F7RdELSixTQ2uNp6h9iHUWkwJiShfIuvf%2B8sCs4ImJG%2F5olsscr1VXoXXzTOogwjd1pPExHpWLBBrilZ4NBZuuhSMdcHJ%2Fh7Ourh%2BLxsDiQCzAMC6mHmSd1jmVAA1TZQkpgA3o%2BDSDgPJSGDjlYX1wsdOmckwE5jGAVN1Z5jAwZPJNyc%2BKZMcOKFtLlubWM4JZYmKZF%2FXt5W7NTTBt%2BnybU%2BbrFLSBt9ecMnVmdcJ8LqAIaRFyeyAZ6C5gVsCqtW5PZmUJZckgy8X2x37kre2%2BWfSdqBzIck9N8uf%2FP6nFjgaTN6t1U1sEZ8g2oV4zw4Yon8Y1OaJua2q7DVBFyuS7%2BMy1LNxdwd%2FEQo3fVA9fZ2Oq%2FLewBjcqO46PAMHAwbQGMIZ4013F5gnqPDH%2FZ0AnXU%2BuaNSruB97FPVGi%2BJz9d%2FETL6v9SvNP3Lj%2FGQ4eWPI%2FkFz5DZv%2FI3m7MwxMHbyQY6pgFIsjoxQNspDAYdBxLiG%2FEVj6AxyfD5T8q5cNZuV2HdwzTIOU3drjeggheAPI5SMZuW2V10%2Bu9mlplknb%2FFFTOn47CIaTNag0JJnntW9pfqUGNXcrT7OkO5JDhvTBpd%2FBCm0FWDNb8i4q7E%2FJukU3ToZgRFpx6Jx99oK%2B4cguFCcxwKXxkBbNS1HtDN8dtR80qKtBdlQARyCxwlrf%2BxDrF3Ae28nBJy&X-Amz-Signature=6b2b720a094a7d8886fb872258146bbf45088682803f8b9418ab16311e63abca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUHFDQJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8kKwOYz3D9Wa60dEWniDcmR0ZLLbm1wSXU7Wk3U%2Br%2BAiBzW25MXhaFEKVtofX%2Fu5OdaUAxtzjJxYfuBQxVdl2khCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHfZwdYc7Q3YKYKqDKtwDIIXoem%2BOPs%2FZJMAK34R%2FTSq%2FCNk8AfjSlw1wmHEsOWhHKtxwIBmiuz10pttG9m4XqP63Gyq2x6IlmKYkJVb4sleZaWeFOluRkEBOOU6wFuM7FyN7A5jZIU4Xc9KeMlxTqYkoKy52bY%2BifP4aUH1YuHGljUPTkgtle8AJp9QYZWb%2F7RdELSixTQ2uNp6h9iHUWkwJiShfIuvf%2B8sCs4ImJG%2F5olsscr1VXoXXzTOogwjd1pPExHpWLBBrilZ4NBZuuhSMdcHJ%2Fh7Ourh%2BLxsDiQCzAMC6mHmSd1jmVAA1TZQkpgA3o%2BDSDgPJSGDjlYX1wsdOmckwE5jGAVN1Z5jAwZPJNyc%2BKZMcOKFtLlubWM4JZYmKZF%2FXt5W7NTTBt%2BnybU%2BbrFLSBt9ecMnVmdcJ8LqAIaRFyeyAZ6C5gVsCqtW5PZmUJZckgy8X2x37kre2%2BWfSdqBzIck9N8uf%2FP6nFjgaTN6t1U1sEZ8g2oV4zw4Yon8Y1OaJua2q7DVBFyuS7%2BMy1LNxdwd%2FEQo3fVA9fZ2Oq%2FLewBjcqO46PAMHAwbQGMIZ4013F5gnqPDH%2FZ0AnXU%2BuaNSruB97FPVGi%2BJz9d%2FETL6v9SvNP3Lj%2FGQ4eWPI%2FkFz5DZv%2FI3m7MwxMHbyQY6pgFIsjoxQNspDAYdBxLiG%2FEVj6AxyfD5T8q5cNZuV2HdwzTIOU3drjeggheAPI5SMZuW2V10%2Bu9mlplknb%2FFFTOn47CIaTNag0JJnntW9pfqUGNXcrT7OkO5JDhvTBpd%2FBCm0FWDNb8i4q7E%2FJukU3ToZgRFpx6Jx99oK%2B4cguFCcxwKXxkBbNS1HtDN8dtR80qKtBdlQARyCxwlrf%2BxDrF3Ae28nBJy&X-Amz-Signature=e172cd7e84bff007970698a1045713c9b36df7c9ec11d84a02d7baa5e888826c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
