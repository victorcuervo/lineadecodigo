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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66GNKLQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BiELvrWOGj%2FJyUaKLPraymBTUdf4p2mhsKUh7Etq7yAIhAMvlXzYPXzK3rPlaDJ1kVO%2BXs3jILyVoBJvvPKQ3Xr9eKv8DCHYQABoMNjM3NDIzMTgzODA1IgxZFxN%2FYtcnBb8fXhEq3APvsThaRBrSyG%2Fpncl7gNOpT%2FV2PmRHQUnOwgPtfc22ld9gWPoyM5u6CdGT3Qabw6x8q1iOif3qzyDl4MAnhSzOCGzbruv%2FpGK%2BpvMTLLQhwrcxd0AvxH%2FN12uom9JC7msXM9GgeSz2MHNcHHpuSEVvOxfedkDBtJrY4WUIVfPH3zQQhEIl4cSAoLuEgjd6ppDhEnGua80iuGfHkOeHpawZDU41z9UsWwiVecZyjYmQaexmgHShDBP0hjbu6wYyJFKeaIbCLRN7p8fxhCvoApebACF6lhXSr8ygDAYeoIFQe%2BYGbbllDcmG6%2BCFwX7IFou3dZW08pjWlX63JLFt5lSGOOU0%2FFVkrZ88amwK72%2FWidXJie070UFz7XOkdZEmWp%2Fu2LR0aebtYzpcnWvIKvE0pIak9xB2M%2FtJTEaif%2FK47hNyUfuFdnrdqCiYwA7zGaYJXdSg%2FQCmWGBFQXSnuyeh8g2QNrcsnT7cpZiyzG63x74YEzmehDWOA7nyEHW%2FsoWwBHC%2BB4Ys1SidKQ3fehS7bWKWKg%2B1sFExGZ7yy08cTAYXtro2nmw0EGmIh%2BqXomX8hOfGrlsPpcnxwnmnudDg5r7KyW%2FBS7oPCnt1mlSxtP9ube1a79zqN5iXjTCi6ojKBjqkAZpKFGRa4G7W%2Bt04W5EI4%2FIw7sHBPnA7weuPEEYSGQe93Z3eim6mIqSPjMsGYsiuO2tarS9%2FWQzj4ucjHkbWBnUSrBzNypQiAuFku5BsILnrR4%2FLAfdqllehf99XrpZy2%2FYA8xhak%2BrTzreI4ivOM6QTUrYUoxDcZgF5a3YK7tNTxgDIGfZAeFhlkwqE%2B9laKoY9tKCDkutez65EnxdK%2FnABnH0J&X-Amz-Signature=12d308163b9f906811c35cb949fb63f6d6f705e442f53b4960e087beb2962fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66GNKLQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BiELvrWOGj%2FJyUaKLPraymBTUdf4p2mhsKUh7Etq7yAIhAMvlXzYPXzK3rPlaDJ1kVO%2BXs3jILyVoBJvvPKQ3Xr9eKv8DCHYQABoMNjM3NDIzMTgzODA1IgxZFxN%2FYtcnBb8fXhEq3APvsThaRBrSyG%2Fpncl7gNOpT%2FV2PmRHQUnOwgPtfc22ld9gWPoyM5u6CdGT3Qabw6x8q1iOif3qzyDl4MAnhSzOCGzbruv%2FpGK%2BpvMTLLQhwrcxd0AvxH%2FN12uom9JC7msXM9GgeSz2MHNcHHpuSEVvOxfedkDBtJrY4WUIVfPH3zQQhEIl4cSAoLuEgjd6ppDhEnGua80iuGfHkOeHpawZDU41z9UsWwiVecZyjYmQaexmgHShDBP0hjbu6wYyJFKeaIbCLRN7p8fxhCvoApebACF6lhXSr8ygDAYeoIFQe%2BYGbbllDcmG6%2BCFwX7IFou3dZW08pjWlX63JLFt5lSGOOU0%2FFVkrZ88amwK72%2FWidXJie070UFz7XOkdZEmWp%2Fu2LR0aebtYzpcnWvIKvE0pIak9xB2M%2FtJTEaif%2FK47hNyUfuFdnrdqCiYwA7zGaYJXdSg%2FQCmWGBFQXSnuyeh8g2QNrcsnT7cpZiyzG63x74YEzmehDWOA7nyEHW%2FsoWwBHC%2BB4Ys1SidKQ3fehS7bWKWKg%2B1sFExGZ7yy08cTAYXtro2nmw0EGmIh%2BqXomX8hOfGrlsPpcnxwnmnudDg5r7KyW%2FBS7oPCnt1mlSxtP9ube1a79zqN5iXjTCi6ojKBjqkAZpKFGRa4G7W%2Bt04W5EI4%2FIw7sHBPnA7weuPEEYSGQe93Z3eim6mIqSPjMsGYsiuO2tarS9%2FWQzj4ucjHkbWBnUSrBzNypQiAuFku5BsILnrR4%2FLAfdqllehf99XrpZy2%2FYA8xhak%2BrTzreI4ivOM6QTUrYUoxDcZgF5a3YK7tNTxgDIGfZAeFhlkwqE%2B9laKoY9tKCDkutez65EnxdK%2FnABnH0J&X-Amz-Signature=63882f8ec18a126bdb5426ab6a4f9cdc461e24215cfbf3e9e2eba769a72abba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
