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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2JWKGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCalWte17wjPm1d02hrFjDjQN4eXc7vt8rpwr5Qw%2FVqQQIhAMKX6%2Fi%2FAw3JiomFGJylb3CEejXuL7iftmlW5%2FskQdh5KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPumi628ufg07PcpEq3APsa5pUu5zfxJO9brM4pY5KWaOfVHsM1tnP8d%2FHqviZCm01b11dKlfTWuHkgiUeuhIBo2EeORPtxybmFVJMngwdPoZ8yPqWti5UJd4f6PV%2FW0y80idBWXqFIN77Ycf4r4TOzk1HmzhwHGm%2BzSE609iqRwdgWG6n6c4sDCP74dM5D6AO7QED6fDHP3uGl9nJdygkfx%2BGnPLkCqYiiGxD1y44SVWUqMQF4D8Ac5nr68Qn9Q4hQrH8yjEOHwkbxLzsF6IbuGLDTmp9xDO%2F1iZleQou5K3OtjhqnRpS5JN6VbuOAv%2F3EFBEVfKkPEBjyaPCoVBAKT%2Fw2yTfcS1I%2F4YFE2H4L2chPmDc%2BE0zK3nNUoaDwhOak2bsEbSzSujZfni5SEvLdEFQqJ5nEJpVuCDtrmGKBedn5Lbz24%2F16R7QFEFqh5bGox80n7G6TXliCInNOrLrmNAkbDCTXel57Whh%2Fcbj45emoSRqpUi%2BoG1I4kXVnHrV9ZGdwzeYVNCjOE6ZW27rWWYgmklX%2Bf0HfOTa6dKbWsLxPMdWKVRFH4GrvjGdsdI9hoMgzMwwZx8pSxw6Vztyy7UighZcKOLSctr03gxdSSxorhPystM%2BMeLAQgHHmEj1RfmdQvUSpyByezCcn4vKBjqkATJRvNCj%2FnG5VTwb17ZET%2BO%2Bp2xfyS3lQ3jz8uAVzn5p8R4Sm8eFO34R5AYUdDWSCArFTLQxB1qauIVMCzbV52cRP94ilfEwFocXPirRuS%2FpSaHN9WNQWQVkWlMZ628uAiIQpT5CnshWthsjOsBSHDUSkDZ5hkMCfsNuXS0Q4Oldq2HTqDMnzD%2B9nDMUGjwwmN%2BBNRXPto7neWhvhkanzLkV1dcY&X-Amz-Signature=049f82b2627098d1952bd3e68ddc41f63d0401f7c8bf67ddeb3769cd48c38be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2JWKGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCalWte17wjPm1d02hrFjDjQN4eXc7vt8rpwr5Qw%2FVqQQIhAMKX6%2Fi%2FAw3JiomFGJylb3CEejXuL7iftmlW5%2FskQdh5KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPumi628ufg07PcpEq3APsa5pUu5zfxJO9brM4pY5KWaOfVHsM1tnP8d%2FHqviZCm01b11dKlfTWuHkgiUeuhIBo2EeORPtxybmFVJMngwdPoZ8yPqWti5UJd4f6PV%2FW0y80idBWXqFIN77Ycf4r4TOzk1HmzhwHGm%2BzSE609iqRwdgWG6n6c4sDCP74dM5D6AO7QED6fDHP3uGl9nJdygkfx%2BGnPLkCqYiiGxD1y44SVWUqMQF4D8Ac5nr68Qn9Q4hQrH8yjEOHwkbxLzsF6IbuGLDTmp9xDO%2F1iZleQou5K3OtjhqnRpS5JN6VbuOAv%2F3EFBEVfKkPEBjyaPCoVBAKT%2Fw2yTfcS1I%2F4YFE2H4L2chPmDc%2BE0zK3nNUoaDwhOak2bsEbSzSujZfni5SEvLdEFQqJ5nEJpVuCDtrmGKBedn5Lbz24%2F16R7QFEFqh5bGox80n7G6TXliCInNOrLrmNAkbDCTXel57Whh%2Fcbj45emoSRqpUi%2BoG1I4kXVnHrV9ZGdwzeYVNCjOE6ZW27rWWYgmklX%2Bf0HfOTa6dKbWsLxPMdWKVRFH4GrvjGdsdI9hoMgzMwwZx8pSxw6Vztyy7UighZcKOLSctr03gxdSSxorhPystM%2BMeLAQgHHmEj1RfmdQvUSpyByezCcn4vKBjqkATJRvNCj%2FnG5VTwb17ZET%2BO%2Bp2xfyS3lQ3jz8uAVzn5p8R4Sm8eFO34R5AYUdDWSCArFTLQxB1qauIVMCzbV52cRP94ilfEwFocXPirRuS%2FpSaHN9WNQWQVkWlMZ628uAiIQpT5CnshWthsjOsBSHDUSkDZ5hkMCfsNuXS0Q4Oldq2HTqDMnzD%2B9nDMUGjwwmN%2BBNRXPto7neWhvhkanzLkV1dcY&X-Amz-Signature=d87f7018a02d00b60debbf06216d71ad4bc0dce9c18178b76174dd4e8631bbbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
