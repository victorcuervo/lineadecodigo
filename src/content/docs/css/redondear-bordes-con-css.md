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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYAD6LD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFBihTmNhHGxmqSGQSSvGBvhfHOgCK7QZb7KjJLIr4VAIhAP0AAovzMojMgOzPopWKwbbgijBLLc%2FgmYenerPinIp4Kv8DCHoQABoMNjM3NDIzMTgzODA1IgwvERbuXIYtN%2Fieuugq3AMVfyoT74%2Bix6eKQUVk3Vg7qSifdRk5pPzZ%2FbCC5%2BZdK7hrlGd9GbvL67%2FMEUSgWhSkLLqF35AZtDsdU6lix0T%2F2sXKyO1wrAbDXxGNlWiE1V3lmo2bpIQ6%2FXillERStTWS%2B7zkV4KUy4%2FOxvu%2BR0lbKPCRoRcmOoObjXrQLk%2B%2FDfPCWvj3zk2woP1KVYkObDvblErH0BnZV1qZKSaI58YJ2PGbs4K69K%2B%2BYMBQGPdFhmb20ttL8fKHk53Goh%2FXuMCj8wXBvb9pnSzS%2BVAtN5MPcXEjxkw4AqF9XOlJBVx0%2Fi0cHZytvAbm5PpOVKGS3BISRBRltGtlXn8ipRy0p0q9GecT0FmH1CR0f8SzUg8M%2F5kasFHvo7MvtkACSagDbpyd%2FvAU%2FJ%2FSndNY7AxhXgaf14Wb576gtTTeUVbAAH5nhC4M6G3JeyB%2BTBtSgNiyx2wJsgHgeYSxm1pdStdSEi19fOCsvc14qECUpU8ytk%2Br7HuE1RW0f6z7grkqIBEm8voivwcJXOrJf5tzJf2awH3NFTI6yQSkgQSLgAw2DnwduByHeIHI1PeVsujPI3bHNYic8%2BgSmCKxs0fVH9iiw7SEHwutTmh3UnDW9maCneLGwcbuP68z8HKdzYd3XjCEx9HJBjqkAbgnCPo55I0%2FbMoLhC3rrRTESrgdbhyc%2F0oOwvLK8Ah6QHe9DIh6dLWdBM%2BAs1ldnOSKmOfG2%2BhPzJg3J7MFaovo2J4A1CeHQfgnMt34Xtd6MUFPd67OiV3amDLn%2FwVC%2B8Ek2YTUQgy1POoE7uIf5982eNcDQYFf2BZ0U11we1xJTR%2BuXKettFUcbxEZ%2Fskp0s2RVXlED7DfgSEEA9P6WZx2Dk9E&X-Amz-Signature=cd526676820eae4dffcc21622ac2cf83014f30efa1c6405f73ff5c88be017728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYAD6LD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFBihTmNhHGxmqSGQSSvGBvhfHOgCK7QZb7KjJLIr4VAIhAP0AAovzMojMgOzPopWKwbbgijBLLc%2FgmYenerPinIp4Kv8DCHoQABoMNjM3NDIzMTgzODA1IgwvERbuXIYtN%2Fieuugq3AMVfyoT74%2Bix6eKQUVk3Vg7qSifdRk5pPzZ%2FbCC5%2BZdK7hrlGd9GbvL67%2FMEUSgWhSkLLqF35AZtDsdU6lix0T%2F2sXKyO1wrAbDXxGNlWiE1V3lmo2bpIQ6%2FXillERStTWS%2B7zkV4KUy4%2FOxvu%2BR0lbKPCRoRcmOoObjXrQLk%2B%2FDfPCWvj3zk2woP1KVYkObDvblErH0BnZV1qZKSaI58YJ2PGbs4K69K%2B%2BYMBQGPdFhmb20ttL8fKHk53Goh%2FXuMCj8wXBvb9pnSzS%2BVAtN5MPcXEjxkw4AqF9XOlJBVx0%2Fi0cHZytvAbm5PpOVKGS3BISRBRltGtlXn8ipRy0p0q9GecT0FmH1CR0f8SzUg8M%2F5kasFHvo7MvtkACSagDbpyd%2FvAU%2FJ%2FSndNY7AxhXgaf14Wb576gtTTeUVbAAH5nhC4M6G3JeyB%2BTBtSgNiyx2wJsgHgeYSxm1pdStdSEi19fOCsvc14qECUpU8ytk%2Br7HuE1RW0f6z7grkqIBEm8voivwcJXOrJf5tzJf2awH3NFTI6yQSkgQSLgAw2DnwduByHeIHI1PeVsujPI3bHNYic8%2BgSmCKxs0fVH9iiw7SEHwutTmh3UnDW9maCneLGwcbuP68z8HKdzYd3XjCEx9HJBjqkAbgnCPo55I0%2FbMoLhC3rrRTESrgdbhyc%2F0oOwvLK8Ah6QHe9DIh6dLWdBM%2BAs1ldnOSKmOfG2%2BhPzJg3J7MFaovo2J4A1CeHQfgnMt34Xtd6MUFPd67OiV3amDLn%2FwVC%2B8Ek2YTUQgy1POoE7uIf5982eNcDQYFf2BZ0U11we1xJTR%2BuXKettFUcbxEZ%2Fskp0s2RVXlED7DfgSEEA9P6WZx2Dk9E&X-Amz-Signature=ee2b34f8996cfee08be77b8dbc9b7553e69118f09392083f7b7861cdaebd735b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
