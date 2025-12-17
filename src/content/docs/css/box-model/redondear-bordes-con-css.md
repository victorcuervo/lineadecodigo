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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQARPWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIChjjOvVo04O%2BgozPLfH1zeXEsWtWplMYGLcFgjy9rwIhAJw37Nd6m5Zc6tAXKpc6Csr9lcPCwMhYwq1PDMMKzujSKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx160R8Xg9sFCj5XXgq3ANR%2BctvbNDvQ2e01oeuEJPsiT00%2FI0qTOElO9n7sxTFSW9rruWhS%2BFXvGrEbasiDmZtOKxrrp5Ubv7TF6TdI%2F2ET6Gd69tFgWyHdhy7WAQBSKU6So6BtwzOpvOFuR%2BGLjhEXS5CngUkSnW9LdfKAt0FlbyOvfV1FXZWbJI5VxMyaOdMUpuYKozZtM5gOzBClh06%2Br5e%2BA2snBu3pKbIrCJJ%2Fo3UPe08ik4xhskl4I3lGxTIWhLyAeTzoUrsvq5at1PC6Bkp1eg%2B4B8sUz7jMCERKvpDike0NT1ehwTyCXpt753Fcs0H9oNGajyk5Vj4Oqvm1YPfhqIGc%2FoPtgzIZAX3c%2BnpO9DMhS1gtKNaotTxKQpaneAOpUJTUaLeOHTU9KcBUqyLZU96MEcsvE0IO51A%2Fsw0xXFW%2FtDegcfPDbTFN2mb%2B2ZsuWGdM7nYAoTIB%2FCV3coFPtpHubyrcvdTC0%2Fb4GsoPc2UMbKLsuWZAsB9A5C6lcBL0v6YO9OcUPbNez%2B2TsUj5dGlp4qOQCIxBpDUsWgLvldq7CTotMuUWaCLSoTlAzudoT9jRJtHhJtyz%2BWTAsq5Egw2YUWfRTzujQP5PZoQQIqQ3DFC4vzhdR4DqVAm0yNUx0P2n%2B6C0TCcgYvKBjqkATSqkmJVmc7baihcEk95dYg1VD6QDDN8ralPGsNrwStqjN1UTTr3TfjUYnZ9ga1sd6g3snSFWgWWs8aZBZzg9jzUnCf5OFbk22N%2B6q9RjOaUXr%2FY7Fk7ciTtR1hSAhfSIM3a0QN4xEy8L4nE2%2BGaA293aT%2Fh4ymkr2%2BqXPhD3YzHmDXDIvnB5KIBBi%2BwzsSutn%2BMW0qz1LL7sklMoOAL77YdwGk2&X-Amz-Signature=adb99bc12f79a752e551ab354c7d4548cfcce8b76042b909e1d3682c8c4cf1a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQARPWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIChjjOvVo04O%2BgozPLfH1zeXEsWtWplMYGLcFgjy9rwIhAJw37Nd6m5Zc6tAXKpc6Csr9lcPCwMhYwq1PDMMKzujSKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx160R8Xg9sFCj5XXgq3ANR%2BctvbNDvQ2e01oeuEJPsiT00%2FI0qTOElO9n7sxTFSW9rruWhS%2BFXvGrEbasiDmZtOKxrrp5Ubv7TF6TdI%2F2ET6Gd69tFgWyHdhy7WAQBSKU6So6BtwzOpvOFuR%2BGLjhEXS5CngUkSnW9LdfKAt0FlbyOvfV1FXZWbJI5VxMyaOdMUpuYKozZtM5gOzBClh06%2Br5e%2BA2snBu3pKbIrCJJ%2Fo3UPe08ik4xhskl4I3lGxTIWhLyAeTzoUrsvq5at1PC6Bkp1eg%2B4B8sUz7jMCERKvpDike0NT1ehwTyCXpt753Fcs0H9oNGajyk5Vj4Oqvm1YPfhqIGc%2FoPtgzIZAX3c%2BnpO9DMhS1gtKNaotTxKQpaneAOpUJTUaLeOHTU9KcBUqyLZU96MEcsvE0IO51A%2Fsw0xXFW%2FtDegcfPDbTFN2mb%2B2ZsuWGdM7nYAoTIB%2FCV3coFPtpHubyrcvdTC0%2Fb4GsoPc2UMbKLsuWZAsB9A5C6lcBL0v6YO9OcUPbNez%2B2TsUj5dGlp4qOQCIxBpDUsWgLvldq7CTotMuUWaCLSoTlAzudoT9jRJtHhJtyz%2BWTAsq5Egw2YUWfRTzujQP5PZoQQIqQ3DFC4vzhdR4DqVAm0yNUx0P2n%2B6C0TCcgYvKBjqkATSqkmJVmc7baihcEk95dYg1VD6QDDN8ralPGsNrwStqjN1UTTr3TfjUYnZ9ga1sd6g3snSFWgWWs8aZBZzg9jzUnCf5OFbk22N%2B6q9RjOaUXr%2FY7Fk7ciTtR1hSAhfSIM3a0QN4xEy8L4nE2%2BGaA293aT%2Fh4ymkr2%2BqXPhD3YzHmDXDIvnB5KIBBi%2BwzsSutn%2BMW0qz1LL7sklMoOAL77YdwGk2&X-Amz-Signature=a31d17e6fb556ffe899023cf88eb465c3b1c14b8b7f6ad9076ab07e02a4ad00d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
