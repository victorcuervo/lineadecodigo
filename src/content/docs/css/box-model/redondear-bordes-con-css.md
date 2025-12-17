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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKOYJT5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbXUx7gBgnW6YxDI2iOl5OjYBlOz4%2B1FHnAbOgFE5yNAiB7%2F6bq7cWuxUKo%2B3qtKUM5LDDShM%2BSphRrfoInlLdPgir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMo5jYaDGKHJFEOpygKtwDigbpszO9SperbTGVx%2BxtoU3xiuKS3cvJn7P6RhpxxUAm9i0UaBZgJX7O3zIiWTIolv1ptMKQCxtwPitd78g5hzkNzHiv%2FhrcefSYpuCg%2FWNHnJm1yjA3mSEkq8cQD0aDjLVyF8lOKjAQfQshjim%2BbIr0TnKw50PuFhsuhHYZ0BkzqHmqqRo6a%2Bt47IC3YXUc%2FRknIk2vud1%2FiyEbHQLnBa3hqtgAhcsTpCGU3gSYirpbfn7Jac38A0n2u0HB0xqBplco9AKV0%2F%2FYY77SRpEtVGvvKXDo6AIV1ZkIIcjmQzRqITdTmSKTxBE0oQDzAX3kASEksVQt3M9ttfMzZb%2F1FOL3Lb7rcgsV99tfEtDV4RPXiuk7YnfBwmIFXF0YolZoUdKVuGwSvvjuc2VmBfSq0ueC8Qu5hMkn3e52n7GuYtHXUs%2Fouf5BevsCvgbHI3K1esCUEu%2FuD5BPrBRbCJZ7wliTvLUba8SCitCp3mK1OwBs41O22xzvZH3kXTPub8uOByMpt5E3ClNeF3xfKV%2Fr1t9vHtaVW4Zw8HryNuhGGOjiifQExU0orUdl6mPcY%2B7CEW98Zud%2BzoaKlDZ3MCuJv3KaFVpgmLdBROAEeMCGluGvAlgnNIcyL5mWkQsw8uGKygY6pgFvbKp22VQ3CTe3QFg4JIWbBvWzxCyRKXg9Co067l51U2qaF0dzB8Ap%2F6diEMYq39mzMmbdMdAguwnYUt7iIHw93tCEd9Et5tcDNZDrpGbgmMyVswmEwSIB343RMoswDx7YTZdxyNva6I51HNMbkG57oT%2Bn67rhg0Si3E3eVtVt9c1boK5tS5UXovX9JIi%2FfRtwR5SSdrIGRpwkb%2BKiQNHsMv%2FXeYWQ&X-Amz-Signature=eefd65599d67431c4dd4780472a7c3f6b268c1afdef5bd6c8ad76066fa27deb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKOYJT5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbXUx7gBgnW6YxDI2iOl5OjYBlOz4%2B1FHnAbOgFE5yNAiB7%2F6bq7cWuxUKo%2B3qtKUM5LDDShM%2BSphRrfoInlLdPgir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMo5jYaDGKHJFEOpygKtwDigbpszO9SperbTGVx%2BxtoU3xiuKS3cvJn7P6RhpxxUAm9i0UaBZgJX7O3zIiWTIolv1ptMKQCxtwPitd78g5hzkNzHiv%2FhrcefSYpuCg%2FWNHnJm1yjA3mSEkq8cQD0aDjLVyF8lOKjAQfQshjim%2BbIr0TnKw50PuFhsuhHYZ0BkzqHmqqRo6a%2Bt47IC3YXUc%2FRknIk2vud1%2FiyEbHQLnBa3hqtgAhcsTpCGU3gSYirpbfn7Jac38A0n2u0HB0xqBplco9AKV0%2F%2FYY77SRpEtVGvvKXDo6AIV1ZkIIcjmQzRqITdTmSKTxBE0oQDzAX3kASEksVQt3M9ttfMzZb%2F1FOL3Lb7rcgsV99tfEtDV4RPXiuk7YnfBwmIFXF0YolZoUdKVuGwSvvjuc2VmBfSq0ueC8Qu5hMkn3e52n7GuYtHXUs%2Fouf5BevsCvgbHI3K1esCUEu%2FuD5BPrBRbCJZ7wliTvLUba8SCitCp3mK1OwBs41O22xzvZH3kXTPub8uOByMpt5E3ClNeF3xfKV%2Fr1t9vHtaVW4Zw8HryNuhGGOjiifQExU0orUdl6mPcY%2B7CEW98Zud%2BzoaKlDZ3MCuJv3KaFVpgmLdBROAEeMCGluGvAlgnNIcyL5mWkQsw8uGKygY6pgFvbKp22VQ3CTe3QFg4JIWbBvWzxCyRKXg9Co067l51U2qaF0dzB8Ap%2F6diEMYq39mzMmbdMdAguwnYUt7iIHw93tCEd9Et5tcDNZDrpGbgmMyVswmEwSIB343RMoswDx7YTZdxyNva6I51HNMbkG57oT%2Bn67rhg0Si3E3eVtVt9c1boK5tS5UXovX9JIi%2FfRtwR5SSdrIGRpwkb%2BKiQNHsMv%2FXeYWQ&X-Amz-Signature=fb68aab11f7815ad3bc375bbc8c562eb88c05828916ad3cecfcbe290ff47ad0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
