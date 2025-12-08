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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V7CTG4X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Ve1A60TManDOwqrjlMUpvI9WfbVYmNYHAkzwsf2jiwIhAKERPVo18iIpkI45RNFP4wgTl8mxyttGCqQE3J5RkhSGKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqoP856Y499IdChWgq3AOCxmv%2Bz%2FDbcsqHN05cjxqkWRS0Jk5x%2BgZRzBNwBrpamV5PIeOewWB%2BZ5i%2FTIXwE0cQsef5JyCo9SEbrllYOHVnxCe4sDXwfz3393rVYm2cNpDumLuDvfQ8uZBxh7ZQrjBYy1ydFbm8x98qH%2BaPpLr%2F2xrvdKR2H%2F%2FNyCjoeEJillMVUeBc9gWFy1LwMJLii%2FxICzQikOW6yX4%2FNhAYOX2ERabdUmCbktMgcv1vza%2B1%2BriI%2BiPdKiNv8L5oYpxJ1ep3Ky6PdYgPqClF2DBEg6%2BmNu2J1aqgL6uEnQJS4WS%2BtI5vkt2ECcygp2zIp0mXL1cyDXnK3%2FVmgthyttF%2BpixRJtSEsseFUV7gJwcLuIJarAjkAEjerHJb2S%2BjWZqet4TI6tYOIVR8ZxbcLwUFm9U6iytlQUyiLscRl6hkV0rpDz%2BONc933sYoJhSwCTKO0Oc%2FoAApe2zGvpLD7VLU3AygBRmSlYSg1DhQG9XGDWwNiNOca3O20tGX5A3yIbId12J7A02jr01o9tF1BYtkPJy5qvi7xq1%2FpaTKX9m5a8z0DtmDKEf5ecInAal1l3uo7uzJbdHXJkisUMlfNjwIaXj1sDxH1Iojes976VvKrmxs5wOq%2BxgzD1%2Be9gKVNjDRod3JBjqkAeqQmaSSCJqjcZZfLccRsrG5O14BYO%2FFaSYIQUj8VQTZJ1CwFQznwYigzX3BexrAJcKEyL8pjQBSuIO1Q48lhnTbeSqZy26AjpGha5hK8NJbVD4pEs7haKS959ngVNDdIl%2B4W%2Fnnjyib%2FQ3EMYGqFS5ZTVXBN%2Bn3olL3sza260jYlA7lKv9U0PjaP3DyArwTNQmFDxq6beyhk4UxhNxkPSQx7upt&X-Amz-Signature=721b06d96073dc8a5df5b6af8ae894021a6dd88f74b6f5956180590f8d00a669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V7CTG4X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Ve1A60TManDOwqrjlMUpvI9WfbVYmNYHAkzwsf2jiwIhAKERPVo18iIpkI45RNFP4wgTl8mxyttGCqQE3J5RkhSGKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqoP856Y499IdChWgq3AOCxmv%2Bz%2FDbcsqHN05cjxqkWRS0Jk5x%2BgZRzBNwBrpamV5PIeOewWB%2BZ5i%2FTIXwE0cQsef5JyCo9SEbrllYOHVnxCe4sDXwfz3393rVYm2cNpDumLuDvfQ8uZBxh7ZQrjBYy1ydFbm8x98qH%2BaPpLr%2F2xrvdKR2H%2F%2FNyCjoeEJillMVUeBc9gWFy1LwMJLii%2FxICzQikOW6yX4%2FNhAYOX2ERabdUmCbktMgcv1vza%2B1%2BriI%2BiPdKiNv8L5oYpxJ1ep3Ky6PdYgPqClF2DBEg6%2BmNu2J1aqgL6uEnQJS4WS%2BtI5vkt2ECcygp2zIp0mXL1cyDXnK3%2FVmgthyttF%2BpixRJtSEsseFUV7gJwcLuIJarAjkAEjerHJb2S%2BjWZqet4TI6tYOIVR8ZxbcLwUFm9U6iytlQUyiLscRl6hkV0rpDz%2BONc933sYoJhSwCTKO0Oc%2FoAApe2zGvpLD7VLU3AygBRmSlYSg1DhQG9XGDWwNiNOca3O20tGX5A3yIbId12J7A02jr01o9tF1BYtkPJy5qvi7xq1%2FpaTKX9m5a8z0DtmDKEf5ecInAal1l3uo7uzJbdHXJkisUMlfNjwIaXj1sDxH1Iojes976VvKrmxs5wOq%2BxgzD1%2Be9gKVNjDRod3JBjqkAeqQmaSSCJqjcZZfLccRsrG5O14BYO%2FFaSYIQUj8VQTZJ1CwFQznwYigzX3BexrAJcKEyL8pjQBSuIO1Q48lhnTbeSqZy26AjpGha5hK8NJbVD4pEs7haKS959ngVNDdIl%2B4W%2Fnnjyib%2FQ3EMYGqFS5ZTVXBN%2Bn3olL3sza260jYlA7lKv9U0PjaP3DyArwTNQmFDxq6beyhk4UxhNxkPSQx7upt&X-Amz-Signature=62dd03ab056f890187b6b4fe33707a35486f88da72dd8d1bad903e86286bd43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
