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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJQIGKNX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAf4frZRBaQPoy0jFGgHQilAJsyTOAFTx4m3Rj%2FrZW16AiEA5BYFi0DHWgl%2BUBU%2FgCC7prXj4SfJBIqSXbsRksWmT9oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHlrYmvtTqcHiY%2BqgircA%2BMc6KatdKkLxpfM2G5Ku4PMumIYdUw9Qm%2B1E6OFWJJASnw92seA4vwYPp7idiFtxlwDr91Rjn%2FabYXxBTV2ehVU24V847tJzElVgJAmdInCitAXHxqPVZj9aro4GpSFuVXH5ijKpIfg7ipyl%2BEIvEa9ky%2FkHpvMmvZFaKU%2FQzmHAx2xXp9RmRDpuEg7dPbJxhNEGvCncZMSrErTI095FnB8dqWa9S8viHK0HeaOk7C1x0Vx9RifR85edpwI%2BTBbuEXIdCySHJCikS4D5gJH5lQe23VCqRIVDlZQaZjSmahL7wLij1CFVAqGCAfBLIarSQIVDEdxcstN8jBpX2CIb24SCS0OFip%2BR2qiEKQ45r1vbXWA4GBuVpaegHMR8I9FJEx1M%2Bn%2FKsrSNXTxIepw3i38pRbNTK2hn%2Bf0coXblU8fPUNqAZOS92Ak9tGifrFiGemh5pq6tHDNKBH4jY0u7%2BwxxsUYqZwyiRKov5mggtgGDWb%2Fzcy3d90AjtoqeZvyXgxO22YJCq0qxqBYR7D3yskN9sAx%2FeyS07k7OdmnUG%2FpZOPy41%2BSkJW6118ZQ3fsEmGRV0mry8%2B%2FkjoVO4abqGVZiLNZULEzDROU%2BXg2rabNPMD0xsKtlVAOTtXdMM6m0MkGOqUBt0cL9Ej1zw4Y178eYZPGcD15gnKUjR65PgPPBP6TzyTGXHn67AyiUR4vqRMA%2BTnGmSmzYvq2GR%2Bq8sAj2ItCZ1utefC482EzplB6%2FbRl2a2Lw6ZOYJ%2Fv8iUNTu4mzwNEAJ5pyVzAJsyFNNbxgpyQ1Gu4L2KkiLnhlueMRcXT0lW9329tSaa0J4RU6qRb6hTWAHpdiycHaOspEzlIoqrtMWfnuf5r&X-Amz-Signature=e81aa6be0eb1202832467fae5554098dd1f040b6cd585b34a83eff8786b2b6cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJQIGKNX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAf4frZRBaQPoy0jFGgHQilAJsyTOAFTx4m3Rj%2FrZW16AiEA5BYFi0DHWgl%2BUBU%2FgCC7prXj4SfJBIqSXbsRksWmT9oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHlrYmvtTqcHiY%2BqgircA%2BMc6KatdKkLxpfM2G5Ku4PMumIYdUw9Qm%2B1E6OFWJJASnw92seA4vwYPp7idiFtxlwDr91Rjn%2FabYXxBTV2ehVU24V847tJzElVgJAmdInCitAXHxqPVZj9aro4GpSFuVXH5ijKpIfg7ipyl%2BEIvEa9ky%2FkHpvMmvZFaKU%2FQzmHAx2xXp9RmRDpuEg7dPbJxhNEGvCncZMSrErTI095FnB8dqWa9S8viHK0HeaOk7C1x0Vx9RifR85edpwI%2BTBbuEXIdCySHJCikS4D5gJH5lQe23VCqRIVDlZQaZjSmahL7wLij1CFVAqGCAfBLIarSQIVDEdxcstN8jBpX2CIb24SCS0OFip%2BR2qiEKQ45r1vbXWA4GBuVpaegHMR8I9FJEx1M%2Bn%2FKsrSNXTxIepw3i38pRbNTK2hn%2Bf0coXblU8fPUNqAZOS92Ak9tGifrFiGemh5pq6tHDNKBH4jY0u7%2BwxxsUYqZwyiRKov5mggtgGDWb%2Fzcy3d90AjtoqeZvyXgxO22YJCq0qxqBYR7D3yskN9sAx%2FeyS07k7OdmnUG%2FpZOPy41%2BSkJW6118ZQ3fsEmGRV0mry8%2B%2FkjoVO4abqGVZiLNZULEzDROU%2BXg2rabNPMD0xsKtlVAOTtXdMM6m0MkGOqUBt0cL9Ej1zw4Y178eYZPGcD15gnKUjR65PgPPBP6TzyTGXHn67AyiUR4vqRMA%2BTnGmSmzYvq2GR%2Bq8sAj2ItCZ1utefC482EzplB6%2FbRl2a2Lw6ZOYJ%2Fv8iUNTu4mzwNEAJ5pyVzAJsyFNNbxgpyQ1Gu4L2KkiLnhlueMRcXT0lW9329tSaa0J4RU6qRb6hTWAHpdiycHaOspEzlIoqrtMWfnuf5r&X-Amz-Signature=88575405bc0fcd3312a9ee402f83467755887e653852896fb06c44a834cd0658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
