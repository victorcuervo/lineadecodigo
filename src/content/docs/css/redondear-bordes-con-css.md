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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AMOHE6P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEs%2FjnNXEgnEqQ7GNvo6kZRCwGslhzabQIJd33dGrSw2AiASVgdZr4Yx%2FLPIupKWCIE52SDbvDkUujlw4Evv0a9IoyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmfMfDqTrLJ1Jnv5VKtwD%2BKIJuDtX5%2FiNqT3MFEkkFDWsVV3Dg5tHzUiqXQPvxMXFz44G5dXsTAqOywiNOzU6krg9PYIRx8miDivf4bAFiL8GnDRoaeiHCZKZzofK46HspTQLlKf2Ahj84g8ChMHp1skUeesrkN848PPl5Gpbeo1CQNS%2FLikUSaCjaYsgXFXszijQh6r%2FWgX5E%2FoMEQlby%2F30oXrYaBx%2F8Ly1Tg%2BKRoxM5d6JT96whYAH4J9Lix3I1rvjTIE5H6drZyZF%2F3M3DZuzQk8sVvqJvzRi%2F%2BAzcopTd2akFwrgbygVx5tbdJr3FfVtmLAF5Gk4VFhKLIGgjITRntU3Xpo%2FOyvu06gzBsvx%2BdLevpZZlUVc6G1GR8i6VkXDfJUVgxURD%2Bw4nXddbhqCj%2BxP%2FEku1M9teYlQqWKERwxQVZU0ywbcz08LxVY4%2FJDeDN3noSQCfqm2kPjKrRpeEgmA75ITy15S152ZGKy7JukIgwthVgv4al9p1uQhQ9K48kgGpOVPN43a3in7OJMYbZRgaYbiT8JsSDjqrPGuaxac%2Bf%2B%2BuxdLu%2FBC9MO1%2BAR%2FQu1yOBhU9%2FwVRREGM%2FjBlRQ4Q8tY7Cy7TMRtBf%2BDRFN80Hr3kbvpEs4bSofD6wHdBVgCjKAEFUIwhO3ZyQY6pgGFPAO2XJogPCFVHVDdy%2FDhiPObAohkqSuDz8v3VDhNh5uAeWqoOct6NwlUStcZxsw5Ti8eNIPlpPSsRFBm0c%2BtsLR3c%2B0wylNXAdptoNqWXW8TsQwh3ppF89z%2F8or5W3EJXImNIclxD84T5HL45SkqNFFi28LwRmAzsvk3ZF1JYeNJyTfQOlMshD9LFSAMyNZH7NGjX2P5AL%2B5ICwvdGpFb9Gd5qNC&X-Amz-Signature=21ea3112f9bbad696d641eff216f7b5ff7d0fc21093cfe1fe9a7f7ec820149cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AMOHE6P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEs%2FjnNXEgnEqQ7GNvo6kZRCwGslhzabQIJd33dGrSw2AiASVgdZr4Yx%2FLPIupKWCIE52SDbvDkUujlw4Evv0a9IoyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmfMfDqTrLJ1Jnv5VKtwD%2BKIJuDtX5%2FiNqT3MFEkkFDWsVV3Dg5tHzUiqXQPvxMXFz44G5dXsTAqOywiNOzU6krg9PYIRx8miDivf4bAFiL8GnDRoaeiHCZKZzofK46HspTQLlKf2Ahj84g8ChMHp1skUeesrkN848PPl5Gpbeo1CQNS%2FLikUSaCjaYsgXFXszijQh6r%2FWgX5E%2FoMEQlby%2F30oXrYaBx%2F8Ly1Tg%2BKRoxM5d6JT96whYAH4J9Lix3I1rvjTIE5H6drZyZF%2F3M3DZuzQk8sVvqJvzRi%2F%2BAzcopTd2akFwrgbygVx5tbdJr3FfVtmLAF5Gk4VFhKLIGgjITRntU3Xpo%2FOyvu06gzBsvx%2BdLevpZZlUVc6G1GR8i6VkXDfJUVgxURD%2Bw4nXddbhqCj%2BxP%2FEku1M9teYlQqWKERwxQVZU0ywbcz08LxVY4%2FJDeDN3noSQCfqm2kPjKrRpeEgmA75ITy15S152ZGKy7JukIgwthVgv4al9p1uQhQ9K48kgGpOVPN43a3in7OJMYbZRgaYbiT8JsSDjqrPGuaxac%2Bf%2B%2BuxdLu%2FBC9MO1%2BAR%2FQu1yOBhU9%2FwVRREGM%2FjBlRQ4Q8tY7Cy7TMRtBf%2BDRFN80Hr3kbvpEs4bSofD6wHdBVgCjKAEFUIwhO3ZyQY6pgGFPAO2XJogPCFVHVDdy%2FDhiPObAohkqSuDz8v3VDhNh5uAeWqoOct6NwlUStcZxsw5Ti8eNIPlpPSsRFBm0c%2BtsLR3c%2B0wylNXAdptoNqWXW8TsQwh3ppF89z%2F8or5W3EJXImNIclxD84T5HL45SkqNFFi28LwRmAzsvk3ZF1JYeNJyTfQOlMshD9LFSAMyNZH7NGjX2P5AL%2B5ICwvdGpFb9Gd5qNC&X-Amz-Signature=962ef70e7479d6e59df03eef302a9341662b6b0aaee48236cbc4e245bb63ad48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
