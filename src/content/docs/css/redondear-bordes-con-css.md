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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMGKOGH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPQTgcNUXauE6vbhJxBMIXYvexzYDb8okDFzq26AwQ9wIgKWGdEB%2BIfXcV%2FpG%2FgJu9jLLMA8H49vEx1hlDXaQGiewq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKNGbwDVkiiH2kJWuCrcA8a76alJf6Xgc1XRSqI5HVC6XvIM73Jvk8N3Y2mOAEY4gfCNN3vbHnkcb%2FjQ2ERkciRfIeO%2BufaFY5CnPYYnfrCFy1A1%2FwEIKyNtnkUwCeKbe8cWlQALjHTWfcCsiKztUCo5KJQhOibubNjBsACHqs0B540Zq1BDkQuR2uRAhujsRYgdFoJbZGgNEUQv4foQPOma%2Fmojkw7vuixwWRJDNAhvcK%2BWLpFecoAu3eZzhaR%2BpRNo83Ra30oBhUgyzQ2t1iUBcBYZc1loQiXwfFZKyOPbFUrb1M1SttzhysFSdjmNXtBxkI61x2ZP4pRt6wtU33%2Fb7gnQpyUuQuRpE8c%2FIJOijdur75FpF6h9mXN7gY1DcitAHDUbZQpt%2FAVPjOCsKUZe%2BsTnmgnW4RVu7COyetCRrxCHoiqEmzzUThAG0SGYgOPc3t%2B3CLadlpI%2BxVPKu%2FsppI1Of4nR8XGba2%2F6q1shDey9VyIF6MiCd1qUJJ9gi%2F4JOY2h8fqKuSfUSaYmEpqeiQ5O%2FDzmZJmS53eiBj2tc%2BRqnd%2BfQhn%2B8nTfStF5l%2BYNJn%2FJoTaARFglLIT4nCbF60oqgPrW22ZVb4EbIlYWQI2TYrfjeCXc%2FRgNcg9RrSjf2fQGpsg6fDgfMP%2FozckGOqUBLrkRGFNV3bJUqFCMUv9ClQjPkgy1dEsJsyVzOJu%2B7BOIAc1eCq2h%2FADaxcSWDQD8AVmn0D3DTgDp%2B9xnm0kIfRZ3a3rVjMG%2FzGYI2jxGvXBbhvOaoZ6sfIwYU6rLo6PJg8sW1iT%2FzxqJuIyVKpyVH3S%2BxS7WRb0U5Ht%2BmWwx4BluYjDnBFl2e%2BmEpiuLAMqyEXeWpYE6KdWJ3L2UsQnGgWoqLqG4&X-Amz-Signature=c6c7bb3bb94849c4c59191f84b5392de5e4cab62a614153d5e7b74b351ed0ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMGKOGH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPQTgcNUXauE6vbhJxBMIXYvexzYDb8okDFzq26AwQ9wIgKWGdEB%2BIfXcV%2FpG%2FgJu9jLLMA8H49vEx1hlDXaQGiewq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKNGbwDVkiiH2kJWuCrcA8a76alJf6Xgc1XRSqI5HVC6XvIM73Jvk8N3Y2mOAEY4gfCNN3vbHnkcb%2FjQ2ERkciRfIeO%2BufaFY5CnPYYnfrCFy1A1%2FwEIKyNtnkUwCeKbe8cWlQALjHTWfcCsiKztUCo5KJQhOibubNjBsACHqs0B540Zq1BDkQuR2uRAhujsRYgdFoJbZGgNEUQv4foQPOma%2Fmojkw7vuixwWRJDNAhvcK%2BWLpFecoAu3eZzhaR%2BpRNo83Ra30oBhUgyzQ2t1iUBcBYZc1loQiXwfFZKyOPbFUrb1M1SttzhysFSdjmNXtBxkI61x2ZP4pRt6wtU33%2Fb7gnQpyUuQuRpE8c%2FIJOijdur75FpF6h9mXN7gY1DcitAHDUbZQpt%2FAVPjOCsKUZe%2BsTnmgnW4RVu7COyetCRrxCHoiqEmzzUThAG0SGYgOPc3t%2B3CLadlpI%2BxVPKu%2FsppI1Of4nR8XGba2%2F6q1shDey9VyIF6MiCd1qUJJ9gi%2F4JOY2h8fqKuSfUSaYmEpqeiQ5O%2FDzmZJmS53eiBj2tc%2BRqnd%2BfQhn%2B8nTfStF5l%2BYNJn%2FJoTaARFglLIT4nCbF60oqgPrW22ZVb4EbIlYWQI2TYrfjeCXc%2FRgNcg9RrSjf2fQGpsg6fDgfMP%2FozckGOqUBLrkRGFNV3bJUqFCMUv9ClQjPkgy1dEsJsyVzOJu%2B7BOIAc1eCq2h%2FADaxcSWDQD8AVmn0D3DTgDp%2B9xnm0kIfRZ3a3rVjMG%2FzGYI2jxGvXBbhvOaoZ6sfIwYU6rLo6PJg8sW1iT%2FzxqJuIyVKpyVH3S%2BxS7WRb0U5Ht%2BmWwx4BluYjDnBFl2e%2BmEpiuLAMqyEXeWpYE6KdWJ3L2UsQnGgWoqLqG4&X-Amz-Signature=b001b9a57bee1b5ae2d348939d8ec2bb6f5bc578278dcd7bd221b0a391f375c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
