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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEFMGQD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj7eTBPH2o9b28IEbqZZ9i1FWSpi%2BTy9vEKQAgF3BoGQIhAIZpBdc%2FSeeQPnZrq8btjVyqd1YGC5alDbIKrGyLkFxRKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjvanS3Sa1WBHapK0q3AOO5QFDf9ydNVnNhmhpoiMNNOfAdOffnMuc0zvcJI1RcD8QSoKUz%2FZ29R2oZIM1HF9oU9vvDrHhaPaUb%2FrldksvUMIh4vROpBkNhLgYS%2BT9XSSEumntP8xF71Zd%2BTzMrUzt5%2FZdnOCJt4p6iso1gIV6QL7IWcX0d5rpNO6xMBvAOXJYXP2j9b3NS7zlxrLUIZEp4MLuc5JwB6hFb42I9vUlSePGo80DrTKT9o%2F5%2FRueiCnr%2FwEfUSwsbNEdnmGuIDJ74IwjYbji3GI1PP7C9i%2BHTfjyyvUOZ0TpRtjtlqHDHLzemy3mejrIfwmNv4ksXREzh%2FGzzS%2BxeyokrnlwY70lBMOJyuGM%2B5OCBdOpGhex3Dryg8PZdmASQ2HGKL73y1ROKqhw%2FTi%2Bb4tbMLESfTgQqF9HMcQc6TfivaRuiT1PLqtqA62r5tMyVApZOR1PBu88LAJqeuRIWEiIoMdqLj93LB784oQ%2FpVLITpMqbM%2B%2B7QwLtUKl1S5j4HY%2F5XIlH5zt3UW0V95IfyQZLIaOc6SWCPU%2Fuejihx3U1CmQ9buAvAoXeHi84HmB%2Fb7R3JrwHGFCdl%2FVju6zP%2FaQXxn9i%2FG1n6oGsjk982rO9aEWw%2Bo1jq9y041Xg8pI7AqHHTCo79jJBjqkAbVtct2Krr46wibPfoBPk6%2BobkEzHxUa4f86BEkRavf4LaXopyXrkFBaQYUtYItOX7am%2BWDZwzLi01aNbVG3jpn61%2BvtrZ7NZpB%2FeKotGEyYrwfoiqNY9MxQwIRoEMz%2F8lrpcIuKMD7fOuHKVb0e1%2FtIA2cILvW%2BwRixIEAgdfl2EVo1YqOJILN5%2FT9wSXRn5YyHuN6JnjiJimn2ByxYBhpCvvYx&X-Amz-Signature=e8eea8e8cad6ee80cd9fd5133e72ac52bf5a2fd24fc6f380bc9f3a6ba4f35ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEFMGQD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj7eTBPH2o9b28IEbqZZ9i1FWSpi%2BTy9vEKQAgF3BoGQIhAIZpBdc%2FSeeQPnZrq8btjVyqd1YGC5alDbIKrGyLkFxRKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjvanS3Sa1WBHapK0q3AOO5QFDf9ydNVnNhmhpoiMNNOfAdOffnMuc0zvcJI1RcD8QSoKUz%2FZ29R2oZIM1HF9oU9vvDrHhaPaUb%2FrldksvUMIh4vROpBkNhLgYS%2BT9XSSEumntP8xF71Zd%2BTzMrUzt5%2FZdnOCJt4p6iso1gIV6QL7IWcX0d5rpNO6xMBvAOXJYXP2j9b3NS7zlxrLUIZEp4MLuc5JwB6hFb42I9vUlSePGo80DrTKT9o%2F5%2FRueiCnr%2FwEfUSwsbNEdnmGuIDJ74IwjYbji3GI1PP7C9i%2BHTfjyyvUOZ0TpRtjtlqHDHLzemy3mejrIfwmNv4ksXREzh%2FGzzS%2BxeyokrnlwY70lBMOJyuGM%2B5OCBdOpGhex3Dryg8PZdmASQ2HGKL73y1ROKqhw%2FTi%2Bb4tbMLESfTgQqF9HMcQc6TfivaRuiT1PLqtqA62r5tMyVApZOR1PBu88LAJqeuRIWEiIoMdqLj93LB784oQ%2FpVLITpMqbM%2B%2B7QwLtUKl1S5j4HY%2F5XIlH5zt3UW0V95IfyQZLIaOc6SWCPU%2Fuejihx3U1CmQ9buAvAoXeHi84HmB%2Fb7R3JrwHGFCdl%2FVju6zP%2FaQXxn9i%2FG1n6oGsjk982rO9aEWw%2Bo1jq9y041Xg8pI7AqHHTCo79jJBjqkAbVtct2Krr46wibPfoBPk6%2BobkEzHxUa4f86BEkRavf4LaXopyXrkFBaQYUtYItOX7am%2BWDZwzLi01aNbVG3jpn61%2BvtrZ7NZpB%2FeKotGEyYrwfoiqNY9MxQwIRoEMz%2F8lrpcIuKMD7fOuHKVb0e1%2FtIA2cILvW%2BwRixIEAgdfl2EVo1YqOJILN5%2FT9wSXRn5YyHuN6JnjiJimn2ByxYBhpCvvYx&X-Amz-Signature=2f627d6ee520cb76d278e9daa380cb78abaed1f5800e2fa7e5c76945c4e03327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
