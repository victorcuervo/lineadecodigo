---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKWREI2F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC6VwnVZxYtqtrWzY3Fi%2FgPt9EzW7nIf6BuI9EDGPGuKwIgZFh%2FiF0d9I%2Ba505okwUVWXnEvK2XSbrtwxp%2Fkkd50oIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLlJA1gfJFZytc%2FBWyrcA5g8cbOu2w0CdptdUw%2F0oLyFvICOUZUOlLCE2LXF0oCIFTvYwDta30k%2BdjKsmRMof%2BSDcUTjHF9%2FeusfzzIeRCpPxMzLuw6TbvO5lbeIYjnXZ5RLc1kZA2K2mcAH5XGc8IoZdxNz1lEQB2zZANkpCT9V6eToMN77bmalwU7dZylF8sg0M%2FUJV8iM6jtDn2C5%2Bd4CavfZ6YFV64XJw238HyoOKOdk%2F5pMwCtejINZAd3zhSc5bK4IcUfCBbPhZthUTfMMxC8c5hpWdmAwif7f7%2B0fyTnzNS%2ByRhKA5B4inLAFyuErucUSRN0QhuuXe0P%2FVWgxboDg%2FP8oSwSxLCc%2FwaJr3wgQedNf0mPmGfhRwVaWKxO9FcEOaGN9zYDVossduS1XIpZkufNYieJd1XBIQ3q%2FQKZ7FwQ3PxWbDne%2FOxk%2B4R%2FdsTk1M5sEn07SK7qHZapP5r%2FbXTZeZ2eLwMH5yux8TU27pI7hjasj1UB8qAzPGHCbN%2BHd8S9AOdwoSALVuzyvFQatii5P4m4F7cCRjRqTeQWCWbxn59qwZHkGaLUH7vaC6rMriCjxErw%2Bt5Vy%2BNB1majHWJjh73okC3huQJfS1TpD3tpdhM2DW2zWmlQAu7B3F%2FXK7g%2FfgAiCMIvzw8kGOqUBDQmRdN3%2B%2BASvp8s1SYex%2FiqniXcu7ZFzU5X39cxXkJtafxZyLoDK%2BpSSOyo2gYroINYlrLqigPmdu2CbNTrHWrgCZXrLBci%2FIQoKeiO3AzDgPTOE4VoVDzJUEgYfSiLlKwLD5fKkzO2NQm62g1PcdvtPn4Rh6eJ1mnw52uX7UdIdO0MuXCQFYeUlQcsnIs00ZYMv%2BN%2F7Nu7rPOKuFUQoTpdzaAsM&X-Amz-Signature=4ae3d0e64e6fdaa978d8012dafdf75fdee98343a597e9c6e6b9b72fe568299fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKWREI2F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC6VwnVZxYtqtrWzY3Fi%2FgPt9EzW7nIf6BuI9EDGPGuKwIgZFh%2FiF0d9I%2Ba505okwUVWXnEvK2XSbrtwxp%2Fkkd50oIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLlJA1gfJFZytc%2FBWyrcA5g8cbOu2w0CdptdUw%2F0oLyFvICOUZUOlLCE2LXF0oCIFTvYwDta30k%2BdjKsmRMof%2BSDcUTjHF9%2FeusfzzIeRCpPxMzLuw6TbvO5lbeIYjnXZ5RLc1kZA2K2mcAH5XGc8IoZdxNz1lEQB2zZANkpCT9V6eToMN77bmalwU7dZylF8sg0M%2FUJV8iM6jtDn2C5%2Bd4CavfZ6YFV64XJw238HyoOKOdk%2F5pMwCtejINZAd3zhSc5bK4IcUfCBbPhZthUTfMMxC8c5hpWdmAwif7f7%2B0fyTnzNS%2ByRhKA5B4inLAFyuErucUSRN0QhuuXe0P%2FVWgxboDg%2FP8oSwSxLCc%2FwaJr3wgQedNf0mPmGfhRwVaWKxO9FcEOaGN9zYDVossduS1XIpZkufNYieJd1XBIQ3q%2FQKZ7FwQ3PxWbDne%2FOxk%2B4R%2FdsTk1M5sEn07SK7qHZapP5r%2FbXTZeZ2eLwMH5yux8TU27pI7hjasj1UB8qAzPGHCbN%2BHd8S9AOdwoSALVuzyvFQatii5P4m4F7cCRjRqTeQWCWbxn59qwZHkGaLUH7vaC6rMriCjxErw%2Bt5Vy%2BNB1majHWJjh73okC3huQJfS1TpD3tpdhM2DW2zWmlQAu7B3F%2FXK7g%2FfgAiCMIvzw8kGOqUBDQmRdN3%2B%2BASvp8s1SYex%2FiqniXcu7ZFzU5X39cxXkJtafxZyLoDK%2BpSSOyo2gYroINYlrLqigPmdu2CbNTrHWrgCZXrLBci%2FIQoKeiO3AzDgPTOE4VoVDzJUEgYfSiLlKwLD5fKkzO2NQm62g1PcdvtPn4Rh6eJ1mnw52uX7UdIdO0MuXCQFYeUlQcsnIs00ZYMv%2BN%2F7Nu7rPOKuFUQoTpdzaAsM&X-Amz-Signature=9b719e4c8b4a8ff7392060cce5f82bee539807e4ee445e1a99425a12094ce160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
