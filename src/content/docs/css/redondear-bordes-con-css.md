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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NG6TNWX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEefFMidqwYCC3Z%2BknlwIKipWCERHygAyf3xE4YW7bR9AiBot0CDwWbkta%2Fe9%2F%2FfqzB9nn%2FlkKVdqxfNuL9O8E8KUSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMw8V5SHpEh5RVV%2BeiKtwD0yMSdnht%2FrNCdbEqdqiBgAE%2FImT9Of%2FksbpVmrcLQM4zteR9JzhxKqyyTPKG8A%2FT08ERmE3S%2BaYbkGrcA%2BwVUEbfkDvPFqQunKZu3LsDrqIMKR7micuRuPdfzIj04zDZTxhwQEIGsKqK4zBs%2FV6ZwnXNDJCFCyKg3TwfeTmXKAb6EwKXNSjmsLSonLFi%2B4r25SC%2Bd6FWplEZM48FAy73rfUnLN9ZzvRmluWXs1hyvvb%2FQb69%2FT0x64OLoKpdbBWboXf2y14jMdvegpLeTdXUm3dBBxbAaI%2BwzMbboy8i3AOLVrvn93j24rWrwj9ollhrxGzEkL9gZDx4bkr2tNHgVwpa6dWDHwZ3WzG7vBV6sx8XCWSY%2FWIdKt4oB7djHsTbhawXr%2BeJY0BZFgPRIZ53A5fuP1cRXqGfwl%2Bg6TTsBszGg8vy%2BWyUmXTPy%2F4R53273JBbYCa5Msf9EA8CkPpjd6pT13vv3tcyIl7R4lMb9cB8JQk%2BwCu51gK8BzZ01gkPH%2BiZjCWnYvRNmuUW3VlEUOPhBuzTfV4iUzqXWlMTi93GA2NLefWXFracvlClIB8PmWpoeCrPis8cE6WftqFGDFIVA%2BDWpDqK1d%2BTiAtaSlAdhQ5WlvZWU7B5OyEwwKfOyQY6pgH8hlI%2BZLOMM1aMJvY3%2F5Vg3SP4uS9y2tpkGhPc5xDK6bj002Erw7LHlvFCQl4a5JPEl2p2tfAHBZZVZ3SqbQXT9rYPeAOKizgT92mEpLMDCiG3%2Fq%2BB%2FcNc3CKPMqOwITt9xfaAx2v%2F0Iemez4jyVivCZkOF7tUxxPoXaVUEnx%2FjS%2F8XmwxSX4I6fUuEp5sNN5SrrR54DIP516XVznxa2ZkOErtb5t4&X-Amz-Signature=c6fc55ff697e54fd28de53843c2f20b03631381975c33fb4880e885897f5a53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NG6TNWX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEefFMidqwYCC3Z%2BknlwIKipWCERHygAyf3xE4YW7bR9AiBot0CDwWbkta%2Fe9%2F%2FfqzB9nn%2FlkKVdqxfNuL9O8E8KUSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMw8V5SHpEh5RVV%2BeiKtwD0yMSdnht%2FrNCdbEqdqiBgAE%2FImT9Of%2FksbpVmrcLQM4zteR9JzhxKqyyTPKG8A%2FT08ERmE3S%2BaYbkGrcA%2BwVUEbfkDvPFqQunKZu3LsDrqIMKR7micuRuPdfzIj04zDZTxhwQEIGsKqK4zBs%2FV6ZwnXNDJCFCyKg3TwfeTmXKAb6EwKXNSjmsLSonLFi%2B4r25SC%2Bd6FWplEZM48FAy73rfUnLN9ZzvRmluWXs1hyvvb%2FQb69%2FT0x64OLoKpdbBWboXf2y14jMdvegpLeTdXUm3dBBxbAaI%2BwzMbboy8i3AOLVrvn93j24rWrwj9ollhrxGzEkL9gZDx4bkr2tNHgVwpa6dWDHwZ3WzG7vBV6sx8XCWSY%2FWIdKt4oB7djHsTbhawXr%2BeJY0BZFgPRIZ53A5fuP1cRXqGfwl%2Bg6TTsBszGg8vy%2BWyUmXTPy%2F4R53273JBbYCa5Msf9EA8CkPpjd6pT13vv3tcyIl7R4lMb9cB8JQk%2BwCu51gK8BzZ01gkPH%2BiZjCWnYvRNmuUW3VlEUOPhBuzTfV4iUzqXWlMTi93GA2NLefWXFracvlClIB8PmWpoeCrPis8cE6WftqFGDFIVA%2BDWpDqK1d%2BTiAtaSlAdhQ5WlvZWU7B5OyEwwKfOyQY6pgH8hlI%2BZLOMM1aMJvY3%2F5Vg3SP4uS9y2tpkGhPc5xDK6bj002Erw7LHlvFCQl4a5JPEl2p2tfAHBZZVZ3SqbQXT9rYPeAOKizgT92mEpLMDCiG3%2Fq%2BB%2FcNc3CKPMqOwITt9xfaAx2v%2F0Iemez4jyVivCZkOF7tUxxPoXaVUEnx%2FjS%2F8XmwxSX4I6fUuEp5sNN5SrrR54DIP516XVznxa2ZkOErtb5t4&X-Amz-Signature=21cfdac6502e8aae29fbaf5492ffa62e50629039f99b7d7a7c7a0eea722daba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
