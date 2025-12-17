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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHBQVU7G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BrrSdz%2BUV4xKRA2n3R7R33fm1iipM95kiXRQpAW5LMQIgT9DwQh5xZcWmrbv443Dw2GkO8Qc7xzOxJnWNOCvyN90q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHuOtgTsbC4xBkGqICrcAzbau%2FgPL4iaRUl704EZfuPyQkPPx5qu9xf7A14oUpVPjdkjwDH0C8GTufF10%2Bg6DQPopq1LqaZKlYzsQedUrzNMTYV1K9aNVDoVQz6P6DFcqoNTVroWqCOcoHwKVbTcmSsaRsrLONzz2gDG1WumiWsu36JOjnZFeY1KdxVo8nz7OkMn3zhNvzQ0jfjviucyg6Y18%2Bhkdh6yc82mfcZ2AkLgVdjvqWRGq9SJY1o7NYb8kL9f6YboCJmWLzZHW73wgTJOyObalGNClEJjpzQVSJHJCeM8R5KtawHvNdmF8gy60WVGkO9QjAEBeRnHhLXxoATCL9pfxE1sMCY4dO%2FymweKMys%2FXCRu51KhrFQlcSYBb%2FispU%2BmLkudioDxX0G6I%2BSPZkurWx3wiCD50pTLswakmfuxU5wKkda%2FCEgRtofSo1HoLeHvJmWINsxAFtym8iyu1dE%2FYkUjgIfAH6v8L%2B5qOZ1gxtLqg275D50jO9i1HgvYo1StnLoT%2BzXliY1lJDg1LVBmgwmc1zBG0TUG8dXmyZwu%2B1cD0%2BPGuWqWEIs3djHGRpxQLkYZrelmue03DbU8JdZxzoa7dqXQpiyBO0h7pOYmCpWiIwWGqUHN1K32QLBPMPYKysB1msjhMNbhisoGOqUBv7h1px%2BlTaywWpZ8y9QyJiyWN9cht%2BVpzQ4UYzg%2FAAl9aXjnUeCFo0l2eN2CLiq%2BgU8uSQQR6V0zPChXsV3GBNclW4JWSIktKE0Jazf%2Bssrj8C0uk45o0WHoIOjn%2FPjA0gJ7KlzZNYlJLNujoODUQtETEo7G0DsogUFQr2BUvsY%2BKG8IXxLtAdQPb0JX5VL7B7aucYE6zHtBN50fTnYdmQcQFPEt&X-Amz-Signature=71b55c5ad0c7ee43f991dc76bfc9bc10945f41ce08bd7e2d89f420d6b9c17b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHBQVU7G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BrrSdz%2BUV4xKRA2n3R7R33fm1iipM95kiXRQpAW5LMQIgT9DwQh5xZcWmrbv443Dw2GkO8Qc7xzOxJnWNOCvyN90q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHuOtgTsbC4xBkGqICrcAzbau%2FgPL4iaRUl704EZfuPyQkPPx5qu9xf7A14oUpVPjdkjwDH0C8GTufF10%2Bg6DQPopq1LqaZKlYzsQedUrzNMTYV1K9aNVDoVQz6P6DFcqoNTVroWqCOcoHwKVbTcmSsaRsrLONzz2gDG1WumiWsu36JOjnZFeY1KdxVo8nz7OkMn3zhNvzQ0jfjviucyg6Y18%2Bhkdh6yc82mfcZ2AkLgVdjvqWRGq9SJY1o7NYb8kL9f6YboCJmWLzZHW73wgTJOyObalGNClEJjpzQVSJHJCeM8R5KtawHvNdmF8gy60WVGkO9QjAEBeRnHhLXxoATCL9pfxE1sMCY4dO%2FymweKMys%2FXCRu51KhrFQlcSYBb%2FispU%2BmLkudioDxX0G6I%2BSPZkurWx3wiCD50pTLswakmfuxU5wKkda%2FCEgRtofSo1HoLeHvJmWINsxAFtym8iyu1dE%2FYkUjgIfAH6v8L%2B5qOZ1gxtLqg275D50jO9i1HgvYo1StnLoT%2BzXliY1lJDg1LVBmgwmc1zBG0TUG8dXmyZwu%2B1cD0%2BPGuWqWEIs3djHGRpxQLkYZrelmue03DbU8JdZxzoa7dqXQpiyBO0h7pOYmCpWiIwWGqUHN1K32QLBPMPYKysB1msjhMNbhisoGOqUBv7h1px%2BlTaywWpZ8y9QyJiyWN9cht%2BVpzQ4UYzg%2FAAl9aXjnUeCFo0l2eN2CLiq%2BgU8uSQQR6V0zPChXsV3GBNclW4JWSIktKE0Jazf%2Bssrj8C0uk45o0WHoIOjn%2FPjA0gJ7KlzZNYlJLNujoODUQtETEo7G0DsogUFQr2BUvsY%2BKG8IXxLtAdQPb0JX5VL7B7aucYE6zHtBN50fTnYdmQcQFPEt&X-Amz-Signature=4acfbd0aede05513ec8b4ae5753e077b2453f4f690e7ce4f2053ad787a076c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
