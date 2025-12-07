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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHBEPPL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS5p3AafvNBC2pTs4iu6aVrpwzpwI0U534u4EkjJ2QKAIgeTvetEl4H8JX9ClKlGe6590UDBKMI5KN060J5%2B1YBEgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjgYpO%2FGdG2dswPNyrcAyqlN0kh1C%2BX%2B5OnBTjOlRBmghGWkTNzATRm4tjTZ8zIhAyKMp9GJ3YqL3mCk5HkIeUcJGAyaKLhdihK5LSDidX1qj70I6yCqe1d1TYLTevO17nQjqOBFX%2FaLggfOEBv%2FGNzR34X5W%2FvSCvi%2F9QOlckkvZoYgvHF5%2FEUPAnko6WrE%2FEle3zDcAEcsCWITfsoaRKOunoRKeyarP8VmFeKok0mzqTiKZDQnXZjKLPLU%2F%2BBySJRfqJymOjkSdeXRutl%2Funlu54gE47GyFrVtxGPhJrN6AitwkDxm2Ms%2BNvXmRFX0%2FdBC%2FpPGRfGoxyK8zFDFGer7a3AsjbjTJ%2BdG5Tjrvcq6gBEKNV4mkAM2W4zvWsLkZ0UuHqrM7luDiHfnfS%2FefTWT5torv49Y7V4K%2FJVArRj6HcHVhY%2FZNL%2BC6fDnDtyflBhdhEa3WYR0HC48dkAwoBsTdN%2B8Fb39xNrFqBDdphM9dfauGD6althf4dvPuWwCZScXnUOfXiXoXU5bJEVetJNLbtjklaOoBtKPjMdl1rX8ixRqflrj8J%2FW72G1Mcb0gxBR1pHylItNIhrB2gaqkt7XqE5kwYZy%2BLdYbwqufl3ZyunjdAynhIt%2FWSHzIyt9RU6R3evAepLkDJzMI3%2B0skGOqUBD0yL990HuCBOgMZ2OiOIXranlxDQmEEzapvcL7%2BgHrtGZg8uRgjeFDb6X3g%2FxIU1XX7YHD50V4ew00XT%2Bsw%2FC5JsjesaRObH8CxGvGwWp6oSlTf0okp%2BOCeGCLW0LAlX0UIf%2FMnCqKBpQfpO%2B2Yc0XMXL1mUQVFZxN4%2BcJxOgEGfj8MT217CofJmNzkLieFh29hmXEZM360mHHZ5P2Dk0CiIo0wk&X-Amz-Signature=d3b9bd66170468a174121aba162f79d5d3b622a694fe42f7bedabd81e498fe37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZHBEPPL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS5p3AafvNBC2pTs4iu6aVrpwzpwI0U534u4EkjJ2QKAIgeTvetEl4H8JX9ClKlGe6590UDBKMI5KN060J5%2B1YBEgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjgYpO%2FGdG2dswPNyrcAyqlN0kh1C%2BX%2B5OnBTjOlRBmghGWkTNzATRm4tjTZ8zIhAyKMp9GJ3YqL3mCk5HkIeUcJGAyaKLhdihK5LSDidX1qj70I6yCqe1d1TYLTevO17nQjqOBFX%2FaLggfOEBv%2FGNzR34X5W%2FvSCvi%2F9QOlckkvZoYgvHF5%2FEUPAnko6WrE%2FEle3zDcAEcsCWITfsoaRKOunoRKeyarP8VmFeKok0mzqTiKZDQnXZjKLPLU%2F%2BBySJRfqJymOjkSdeXRutl%2Funlu54gE47GyFrVtxGPhJrN6AitwkDxm2Ms%2BNvXmRFX0%2FdBC%2FpPGRfGoxyK8zFDFGer7a3AsjbjTJ%2BdG5Tjrvcq6gBEKNV4mkAM2W4zvWsLkZ0UuHqrM7luDiHfnfS%2FefTWT5torv49Y7V4K%2FJVArRj6HcHVhY%2FZNL%2BC6fDnDtyflBhdhEa3WYR0HC48dkAwoBsTdN%2B8Fb39xNrFqBDdphM9dfauGD6althf4dvPuWwCZScXnUOfXiXoXU5bJEVetJNLbtjklaOoBtKPjMdl1rX8ixRqflrj8J%2FW72G1Mcb0gxBR1pHylItNIhrB2gaqkt7XqE5kwYZy%2BLdYbwqufl3ZyunjdAynhIt%2FWSHzIyt9RU6R3evAepLkDJzMI3%2B0skGOqUBD0yL990HuCBOgMZ2OiOIXranlxDQmEEzapvcL7%2BgHrtGZg8uRgjeFDb6X3g%2FxIU1XX7YHD50V4ew00XT%2Bsw%2FC5JsjesaRObH8CxGvGwWp6oSlTf0okp%2BOCeGCLW0LAlX0UIf%2FMnCqKBpQfpO%2B2Yc0XMXL1mUQVFZxN4%2BcJxOgEGfj8MT217CofJmNzkLieFh29hmXEZM360mHHZ5P2Dk0CiIo0wk&X-Amz-Signature=3f43e2618a98e54e2f49c3509984c35ecafb8e1a9c956860aad1519a5705e4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
