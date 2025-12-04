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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THOWSWPJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDMEWLc8Fv9jFektCh%2FxfGUJgmQjLLs0ITahkaE%2FWUVEAIhANATmkEqJlqVikUj6QJ7cR4fAVavyXaXvsVL5rkXOIptKv8DCDsQABoMNjM3NDIzMTgzODA1IgztUk59l4eS6SXq9gIq3AMFs%2FUTKEUn%2FdT5JL3L%2FayLIicdXAf2I6OjsN1J3Klk9eaJ0BFlxb4AMI2O0UtHI7rifwYVnqaGLKY%2F4UjnXNm1AA4aScMCqpq%2FU8jYJeavJPQGozWe9nEcga1vzYsth62RInJ%2BKpyokuy2jJSdeaxNiReElk4zzOgZNbdIORuMcxmxKYCR3DwdbQ0%2B8WntwZLH1DxQwwLF%2BbfOhw7mMkCuA0CswreFYTCnxwF4BTXeLlrsgh8M5Mh%2FmrmLn9u0Rn2H9nnSdZ3O9P16OEfoEetzAjRr6Eu9Bcuh7wcII%2FSXZyIMnfFbEfwkw4yu7PR0ma2BIGntxUVYz%2BY49ED41JcZk7Qdub%2Bhxc0o6pnhPmB6J9pQ2d0%2FHBQs4oBbYbazj3DcjsSNofYdDTmKA%2FsLMx57eFE1RzybE0CZGUsOtkzQQBEuw6NjLmhdEYIK%2FhlAi90p3YQ1OR6qhwz%2FvueKiHFcjW0QtkehENsSrvTzaHOSYbysaMWp1j6%2B9PoPT%2FvmfmY22Qyn30zTgo%2FHPzuxybuB5Eb6wBOyqTsCUoWmjucF8h7oKukIBe0Ez7pxNuYI9h%2BVHNZfNVkpf6O4yF9tmQz34pHW9Gvtk8DEp5VaGZC67G%2BCwwN2ynjHCaFKkTDB1MPJBjqkAZNKagspVzJK%2B9oDumGVIUbQmhK2wExU1sRgq4LUV1Bnx9vp2YcqlbTuMzUVc3Wvo54GeOcXH80tbNiy9rD4M1HZXqfIHrxKouoRp%2BAHURrLNRSYNjODl9y94%2F2pV%2BBeCaWSafOY6pYZkkL8PdM1fn%2BvfcglcAgxgFZWKO%2F0hRZOpPTmxzyk03TKIMKz1CPcM9MA%2F%2FedJTE5QI2tT4xBh79veUBD&X-Amz-Signature=02f397427e11d63250e172d48ab3427c1dfbea00e6b1d776ba48c3a6976a2c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THOWSWPJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDMEWLc8Fv9jFektCh%2FxfGUJgmQjLLs0ITahkaE%2FWUVEAIhANATmkEqJlqVikUj6QJ7cR4fAVavyXaXvsVL5rkXOIptKv8DCDsQABoMNjM3NDIzMTgzODA1IgztUk59l4eS6SXq9gIq3AMFs%2FUTKEUn%2FdT5JL3L%2FayLIicdXAf2I6OjsN1J3Klk9eaJ0BFlxb4AMI2O0UtHI7rifwYVnqaGLKY%2F4UjnXNm1AA4aScMCqpq%2FU8jYJeavJPQGozWe9nEcga1vzYsth62RInJ%2BKpyokuy2jJSdeaxNiReElk4zzOgZNbdIORuMcxmxKYCR3DwdbQ0%2B8WntwZLH1DxQwwLF%2BbfOhw7mMkCuA0CswreFYTCnxwF4BTXeLlrsgh8M5Mh%2FmrmLn9u0Rn2H9nnSdZ3O9P16OEfoEetzAjRr6Eu9Bcuh7wcII%2FSXZyIMnfFbEfwkw4yu7PR0ma2BIGntxUVYz%2BY49ED41JcZk7Qdub%2Bhxc0o6pnhPmB6J9pQ2d0%2FHBQs4oBbYbazj3DcjsSNofYdDTmKA%2FsLMx57eFE1RzybE0CZGUsOtkzQQBEuw6NjLmhdEYIK%2FhlAi90p3YQ1OR6qhwz%2FvueKiHFcjW0QtkehENsSrvTzaHOSYbysaMWp1j6%2B9PoPT%2FvmfmY22Qyn30zTgo%2FHPzuxybuB5Eb6wBOyqTsCUoWmjucF8h7oKukIBe0Ez7pxNuYI9h%2BVHNZfNVkpf6O4yF9tmQz34pHW9Gvtk8DEp5VaGZC67G%2BCwwN2ynjHCaFKkTDB1MPJBjqkAZNKagspVzJK%2B9oDumGVIUbQmhK2wExU1sRgq4LUV1Bnx9vp2YcqlbTuMzUVc3Wvo54GeOcXH80tbNiy9rD4M1HZXqfIHrxKouoRp%2BAHURrLNRSYNjODl9y94%2F2pV%2BBeCaWSafOY6pYZkkL8PdM1fn%2BvfcglcAgxgFZWKO%2F0hRZOpPTmxzyk03TKIMKz1CPcM9MA%2F%2FedJTE5QI2tT4xBh79veUBD&X-Amz-Signature=dc0b657588e2af8d76c73b1e023884736b41177e35f55118748394da116b2d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
