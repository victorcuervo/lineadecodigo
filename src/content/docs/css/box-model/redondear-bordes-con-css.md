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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPOXT6S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkb26VhpOiA1ZY%2BePjbUODGXmWTG%2BeaYQwXsBAaMz36AiBKtts%2BbQ8gij7AY2rBmaVEpyYapBc19pyiCxJnCFoRDir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK9ak6879CGHnjdyNKtwDOdu6cPqZqw9YKfz1w2S9CoNQikJSr6ycHWqeofWn%2BeBePqphbtIpKPMIPm5Rdzf5LjaTWokCQ%2BzmqQAOa3fSr8ErhRR7ftzlmg0c1p4pHBGm94ssHYIV2OaSBCsa9JLm0YWYgErNt%2FBpY7e3eR%2FqUlcR1dQrS23L%2BrLDP%2BT1gneMtrKNjKuzs%2FmQfytEK9GlxfrLdA4eakeuzsHKacMvmbBpDOLak9WpKbfXTuk3YV%2BCjF41%2F29PacHPlB6LBM%2FJvJtlu6RbidbmQSSoaoOGIkeMNXT8I95WzgvcWu0sETyJQFfJXYqCqdsS3jO50%2F%2B6UQiyTav%2FykbmrLUTfwN1AjVFIJFhUktoYL2dU3Dsy2xywvGHhAuPmSXPMkfOkFUK8f6dXReJLtmScv3t94L1p4DYQQqDSPSAggPHO2UKk070F4LYYLieh2bwNzZ%2B%2BQRFls%2FZwh8XCTLcRyi%2BJz9erQSMXfrZN246lC1wYw8058xO80F88s61Uj6ZO729t0Bf07V09pqRztUGM9UPZzRLSqmigpjKia9RqbEt6YrlF8PI%2FcxboGji0KlqxQcu5fegotMm0yNYY0A7%2B6IHiQQIl6FDIMIamOcrIGk2Du%2FN%2BamTlE3BOzlM9UzQzjEwofCJygY6pgH5VbOBLUzjJQ2UiKUMRSWI3%2FtAHRUzX7dQLbB%2BeIEXtH3KZ3yfR7NysbNiKhA93bAQLwhbp5S14vsKKcaARAR6z4q00LqVxxijyogFsW6NYF887ByPFtkH2CoSDMOsybF16DTzS4gl8YtqT2B00Z7VIyudMulzUIhsPuiITsBj2pBNpnYkXHq0eZyy4J8arDliyMfTAEy9hQhh1LEZn9dOdkworeOl&X-Amz-Signature=8a39ab266e132f4adfcfd252d7bddb0220ed53da036923ad9bebad124b74e8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REPOXT6S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkb26VhpOiA1ZY%2BePjbUODGXmWTG%2BeaYQwXsBAaMz36AiBKtts%2BbQ8gij7AY2rBmaVEpyYapBc19pyiCxJnCFoRDir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK9ak6879CGHnjdyNKtwDOdu6cPqZqw9YKfz1w2S9CoNQikJSr6ycHWqeofWn%2BeBePqphbtIpKPMIPm5Rdzf5LjaTWokCQ%2BzmqQAOa3fSr8ErhRR7ftzlmg0c1p4pHBGm94ssHYIV2OaSBCsa9JLm0YWYgErNt%2FBpY7e3eR%2FqUlcR1dQrS23L%2BrLDP%2BT1gneMtrKNjKuzs%2FmQfytEK9GlxfrLdA4eakeuzsHKacMvmbBpDOLak9WpKbfXTuk3YV%2BCjF41%2F29PacHPlB6LBM%2FJvJtlu6RbidbmQSSoaoOGIkeMNXT8I95WzgvcWu0sETyJQFfJXYqCqdsS3jO50%2F%2B6UQiyTav%2FykbmrLUTfwN1AjVFIJFhUktoYL2dU3Dsy2xywvGHhAuPmSXPMkfOkFUK8f6dXReJLtmScv3t94L1p4DYQQqDSPSAggPHO2UKk070F4LYYLieh2bwNzZ%2B%2BQRFls%2FZwh8XCTLcRyi%2BJz9erQSMXfrZN246lC1wYw8058xO80F88s61Uj6ZO729t0Bf07V09pqRztUGM9UPZzRLSqmigpjKia9RqbEt6YrlF8PI%2FcxboGji0KlqxQcu5fegotMm0yNYY0A7%2B6IHiQQIl6FDIMIamOcrIGk2Du%2FN%2BamTlE3BOzlM9UzQzjEwofCJygY6pgH5VbOBLUzjJQ2UiKUMRSWI3%2FtAHRUzX7dQLbB%2BeIEXtH3KZ3yfR7NysbNiKhA93bAQLwhbp5S14vsKKcaARAR6z4q00LqVxxijyogFsW6NYF887ByPFtkH2CoSDMOsybF16DTzS4gl8YtqT2B00Z7VIyudMulzUIhsPuiITsBj2pBNpnYkXHq0eZyy4J8arDliyMfTAEy9hQhh1LEZn9dOdkworeOl&X-Amz-Signature=29c43f33d0f99239d78658d4734f17345ec1dbe209c49f4bc601773567b9522a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
