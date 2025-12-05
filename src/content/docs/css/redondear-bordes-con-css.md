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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLRHPKNG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY2jNFiV3tVxI0Gy%2BTFbj6StUIE0LKWAvVUqvdE%2F2FpAIhAIMJPPvryYdsG4dNcmdtrzuO0ugzBEDC%2B5dWAvVyso6qKv8DCGAQABoMNjM3NDIzMTgzODA1IgxC7K7KYiZmeO5%2BA1Iq3AMBU3%2FLZ4QC1McDAI4XW7y7hxEDHc4joIha01IeLw%2B7uhXJXSetk5lrFAN3RmfheEQmQI2mX516DMxYkxTMt7vFwtx8XgyBPapmaH9ra7lGl5C0f5lBqrIV92KpCHHmGY%2F4E8SQZ7XtqtoWvTORxnbcuYGixsc%2BWnApxkmSFZZUpbpv3CWWHIrrQwIN29RaKFIp8BEIX68%2BDxmH4YD3pqC7SXhVnl9DVkSJTmCn%2BZ8KJ9jS8sBlLxXqr2T%2BH69nE4x3kFdKMnlcNcqTviLotk%2BlYagnpTokKx1Qhw2V3B4WXQrRBiRdUEbUYnUyjD25wyD6pMeD83DKqAl187SBzsQFO5VNvCPMyMGDVE8QrEDD7vdAl%2F4vlJnex9jIwIP6KHHy8jSn1Gz7uThTNwCmwFbJnm2ej4We6x0bUuCdza2%2Fj4b2VwaW7FrbpYXpEKdigGpAc8jNKBiOQPDKsEZBLcRk15JmR2r7C6k45Xb95EVKQlkKDooNnFADx%2FMsUBOLOZYhYfh2vtJb50qSsHQHDQjxSXQXfUqW%2BLVGWbFfTuvYc8rVilB8e9VmwBtq4KiXJQ4Npu31Ei8JIXmk%2F134%2Fx46Ps6ER3tp6893Gpnik0aGOE545d0%2FMcu4XZlOBDDX5cvJBjqkAbMf2hd6Id2%2BSPHvDpuznE7B76rGzt0OwFFawDAux5jKEvk%2FbpLSRZVdZ5tEx3qpdL4OGE4cvCIOQ4KW9UiwBHE3DeMJQqbY7X33yTo43RP4QDwy8aPtto0J6T5qEUwWpXP%2Fe%2FyDLU6FewWXO7WOxV%2FV6irLkxIp3NSvVYL1ENH8eSzmLmenI4urTNVoaDhcteZd4sRYvGS9Cl8MfAgi9suPHCeM&X-Amz-Signature=6e1c29716df04064be4b612cc250bdae0211cc15de4992055f34b3b4d8a9add5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLRHPKNG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY2jNFiV3tVxI0Gy%2BTFbj6StUIE0LKWAvVUqvdE%2F2FpAIhAIMJPPvryYdsG4dNcmdtrzuO0ugzBEDC%2B5dWAvVyso6qKv8DCGAQABoMNjM3NDIzMTgzODA1IgxC7K7KYiZmeO5%2BA1Iq3AMBU3%2FLZ4QC1McDAI4XW7y7hxEDHc4joIha01IeLw%2B7uhXJXSetk5lrFAN3RmfheEQmQI2mX516DMxYkxTMt7vFwtx8XgyBPapmaH9ra7lGl5C0f5lBqrIV92KpCHHmGY%2F4E8SQZ7XtqtoWvTORxnbcuYGixsc%2BWnApxkmSFZZUpbpv3CWWHIrrQwIN29RaKFIp8BEIX68%2BDxmH4YD3pqC7SXhVnl9DVkSJTmCn%2BZ8KJ9jS8sBlLxXqr2T%2BH69nE4x3kFdKMnlcNcqTviLotk%2BlYagnpTokKx1Qhw2V3B4WXQrRBiRdUEbUYnUyjD25wyD6pMeD83DKqAl187SBzsQFO5VNvCPMyMGDVE8QrEDD7vdAl%2F4vlJnex9jIwIP6KHHy8jSn1Gz7uThTNwCmwFbJnm2ej4We6x0bUuCdza2%2Fj4b2VwaW7FrbpYXpEKdigGpAc8jNKBiOQPDKsEZBLcRk15JmR2r7C6k45Xb95EVKQlkKDooNnFADx%2FMsUBOLOZYhYfh2vtJb50qSsHQHDQjxSXQXfUqW%2BLVGWbFfTuvYc8rVilB8e9VmwBtq4KiXJQ4Npu31Ei8JIXmk%2F134%2Fx46Ps6ER3tp6893Gpnik0aGOE545d0%2FMcu4XZlOBDDX5cvJBjqkAbMf2hd6Id2%2BSPHvDpuznE7B76rGzt0OwFFawDAux5jKEvk%2FbpLSRZVdZ5tEx3qpdL4OGE4cvCIOQ4KW9UiwBHE3DeMJQqbY7X33yTo43RP4QDwy8aPtto0J6T5qEUwWpXP%2Fe%2FyDLU6FewWXO7WOxV%2FV6irLkxIp3NSvVYL1ENH8eSzmLmenI4urTNVoaDhcteZd4sRYvGS9Cl8MfAgi9suPHCeM&X-Amz-Signature=b60d5f051f65960bafd8bc388e16c02ff5967ac876cb68f221f17db2c359e72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
