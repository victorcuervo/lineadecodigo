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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W465MW5J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEpv6LltTpo6RcMLhsPebDGRuhsn0ofXDUbHoZMXXJSAiEArSg8YF%2F3Jho7VTkgueZx0J0kwQXsFKkt9JMaB5kMphoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFflR6XLOLI%2BPsVW4ircA5nG8ZpWcD0PiR3phdjyDve0t7w3HNa%2FQnunhrHK2yxEWRhaMxapGDphUrnTsw2w8gO9MjhrJzQ9mlEJ%2FooRvKx6C%2FLGBMsBJYenCwjD5ztX5m0kS2Tu8DxjU4ZaNFbi1Z7epbiTc7TOCSpWr6ucOzQpp8oaMYf2JvL%2BnoGZa58qtJTjH21ZdIFzEku0GicvDxK%2FVu6jzAc5E9hWldBdlQHeUWFuKiUfkT%2B%2Fw0wh4m1BzDnTauJ544nhFM3Wt6bXOuNb72OrGghbIugxkQAbN4cQbv%2Fs%2F%2BA%2F4dXXE1q5KFOai04LxDSppJG3CBrCmXIpOvSysqkOpyhRuhSVhZTfE%2BbusRJoiIAkz8%2BO52GNBmUyz%2F%2BLTjDw970ZDoxbaWkQqAJ%2BNsLwzwtRVjjvF2TLuogRDhaVBzrffRLC7ednr%2BbE9yVMoggjXPUnhX2L6xSSU4%2F9fU%2BJq0kVHrD73m%2Fs4DX05kUaxy9SSXSFg4XEgWadUfUx0Hy0LxYlD607UAEPx3DnE6IflEMj1B8c9govQY%2Bu0oVMfx%2BJw2S5PE%2B05D5sE%2B3sGiKxkCj8D%2FiISW%2FXFvQ3Y8QFz%2BxHl3nDQ9NAHEz1IUroEnQUeM%2BxAQoKe2HahS6z%2BO5ouDkyMRYFMNf9zskGOqUBF6EYNztZhxWod%2BhETfXudx%2BRTODTmG5lMoIoffyhgOBxuYJnf9f%2FXWUmEdd6Fy0xgUnJNVZM2k83bJLfzEHE3S2c2WvTLrM%2FCChvi2cbONClbq5ps33UvBz2dGnpqvGvulCYvdHEYndH84QGsNLdUPVFruqrNT566E%2FqZ9MFHk%2FJz150sU0kQ%2BCow36I1aahl5yAH4J7x6hygu11O8%2FilFfFCgxJ&X-Amz-Signature=c83ea56888d07cef0d5dbe694f2bc76d7d9c1bd7ffe90183c9c2ba9e2d37ba7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W465MW5J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEpv6LltTpo6RcMLhsPebDGRuhsn0ofXDUbHoZMXXJSAiEArSg8YF%2F3Jho7VTkgueZx0J0kwQXsFKkt9JMaB5kMphoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFflR6XLOLI%2BPsVW4ircA5nG8ZpWcD0PiR3phdjyDve0t7w3HNa%2FQnunhrHK2yxEWRhaMxapGDphUrnTsw2w8gO9MjhrJzQ9mlEJ%2FooRvKx6C%2FLGBMsBJYenCwjD5ztX5m0kS2Tu8DxjU4ZaNFbi1Z7epbiTc7TOCSpWr6ucOzQpp8oaMYf2JvL%2BnoGZa58qtJTjH21ZdIFzEku0GicvDxK%2FVu6jzAc5E9hWldBdlQHeUWFuKiUfkT%2B%2Fw0wh4m1BzDnTauJ544nhFM3Wt6bXOuNb72OrGghbIugxkQAbN4cQbv%2Fs%2F%2BA%2F4dXXE1q5KFOai04LxDSppJG3CBrCmXIpOvSysqkOpyhRuhSVhZTfE%2BbusRJoiIAkz8%2BO52GNBmUyz%2F%2BLTjDw970ZDoxbaWkQqAJ%2BNsLwzwtRVjjvF2TLuogRDhaVBzrffRLC7ednr%2BbE9yVMoggjXPUnhX2L6xSSU4%2F9fU%2BJq0kVHrD73m%2Fs4DX05kUaxy9SSXSFg4XEgWadUfUx0Hy0LxYlD607UAEPx3DnE6IflEMj1B8c9govQY%2Bu0oVMfx%2BJw2S5PE%2B05D5sE%2B3sGiKxkCj8D%2FiISW%2FXFvQ3Y8QFz%2BxHl3nDQ9NAHEz1IUroEnQUeM%2BxAQoKe2HahS6z%2BO5ouDkyMRYFMNf9zskGOqUBF6EYNztZhxWod%2BhETfXudx%2BRTODTmG5lMoIoffyhgOBxuYJnf9f%2FXWUmEdd6Fy0xgUnJNVZM2k83bJLfzEHE3S2c2WvTLrM%2FCChvi2cbONClbq5ps33UvBz2dGnpqvGvulCYvdHEYndH84QGsNLdUPVFruqrNT566E%2FqZ9MFHk%2FJz150sU0kQ%2BCow36I1aahl5yAH4J7x6hygu11O8%2FilFfFCgxJ&X-Amz-Signature=f6ca4fdd8c0cdff1339a2c00037430f73adeacb358fb78ea26d57f0cded2702a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
