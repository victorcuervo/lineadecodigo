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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLFFESET%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDTzyfzDnNbQtNvycecyKyHtRjlvniSqK6sW%2FkhBHZUpgIgFJpGa2mpW2%2BitLVHGVrmshOQAwC0kw7l2pKD%2Fit8rhsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFW7x5oIq2Pd%2Bw0D5yrcA1sG7Xy3cZIIiyyFXmbKRyHyYaNidzkP0%2BwovKx9Ni8v5tScaKzvNgPeLHxluEb9Cgfe0nc5sOMYL5FGb548wPMr%2Foqm60F9ihCmnmjmU%2BRZOXTwalmepQs%2F35W%2F07ju0V7%2Fi2NiYoqY2ihv1wLDzvFju8PxvD6MlyP8LbV00n98uLKDv8kSlqJ1i%2BVf6ErclpxYPhf7t3tyWAeTc3DFhyYWGitp1n7MLwU8AWrNFSLIP4tjhZ235d4lYkyBb%2FU66JGEgJ8DOPijVvxEGNY8r5nQ52H9DDBPoUCMFKhi%2B9iCvmesnaecTiH86%2FXGhYsf%2BPVNL%2FPjNqgACitrkmnPg3RqFOSKkstgY8sHguo3FpRIZ6B2bmKTurSANLJ%2BR0LX5TqQWoluZbn9tkE1HDR9FTBi%2BWQd3Uf%2FC4nKB3N9eDJjihQ%2BBz2gqPAcRGSsQ5gWra1k8s%2B8EfcWEb4tOPfWrePe7re2V2y7%2Fu6iujKmJvm3V03JOCIqIvCVD3i9qcHyYHRNksgvkGDcGwLPW%2B%2F%2FrODkq%2BS6i0ftyeFZwY8vLOC9Mne2KcZ6cNSOnmLIOa89KuoAREnu3L0YGWNveS7TwTPX0felbb%2BFuCOfWJRhUf7JiH2y%2FM%2BK2QsHvXw%2BMNy%2BxskGOqUBDxj6%2FxjKKdHxBcsDurQZAhML%2BFAASs2Gch9vTPGCYGspjPXa48DeQKt1T5ztdT2hHbiCViOPxdpGX9dc6ORBIokypts0bMzOVCXAr8UIJ%2FYrRt6Cm9LVZBH2Xt5irJHk7oUXJHfNUht4pTWco%2FObsGUHpuGymTCZ6Qtwbp8i09rZQrhihoG%2FB0dxx%2F4jClK6FP2JkRpE4NAlVqrVyE15eVPa2jBG&X-Amz-Signature=00b402ca4237287cbc44dfb319c43437489856f7f0d67418b0d2aaac2f2b8303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLFFESET%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDTzyfzDnNbQtNvycecyKyHtRjlvniSqK6sW%2FkhBHZUpgIgFJpGa2mpW2%2BitLVHGVrmshOQAwC0kw7l2pKD%2Fit8rhsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFW7x5oIq2Pd%2Bw0D5yrcA1sG7Xy3cZIIiyyFXmbKRyHyYaNidzkP0%2BwovKx9Ni8v5tScaKzvNgPeLHxluEb9Cgfe0nc5sOMYL5FGb548wPMr%2Foqm60F9ihCmnmjmU%2BRZOXTwalmepQs%2F35W%2F07ju0V7%2Fi2NiYoqY2ihv1wLDzvFju8PxvD6MlyP8LbV00n98uLKDv8kSlqJ1i%2BVf6ErclpxYPhf7t3tyWAeTc3DFhyYWGitp1n7MLwU8AWrNFSLIP4tjhZ235d4lYkyBb%2FU66JGEgJ8DOPijVvxEGNY8r5nQ52H9DDBPoUCMFKhi%2B9iCvmesnaecTiH86%2FXGhYsf%2BPVNL%2FPjNqgACitrkmnPg3RqFOSKkstgY8sHguo3FpRIZ6B2bmKTurSANLJ%2BR0LX5TqQWoluZbn9tkE1HDR9FTBi%2BWQd3Uf%2FC4nKB3N9eDJjihQ%2BBz2gqPAcRGSsQ5gWra1k8s%2B8EfcWEb4tOPfWrePe7re2V2y7%2Fu6iujKmJvm3V03JOCIqIvCVD3i9qcHyYHRNksgvkGDcGwLPW%2B%2F%2FrODkq%2BS6i0ftyeFZwY8vLOC9Mne2KcZ6cNSOnmLIOa89KuoAREnu3L0YGWNveS7TwTPX0felbb%2BFuCOfWJRhUf7JiH2y%2FM%2BK2QsHvXw%2BMNy%2BxskGOqUBDxj6%2FxjKKdHxBcsDurQZAhML%2BFAASs2Gch9vTPGCYGspjPXa48DeQKt1T5ztdT2hHbiCViOPxdpGX9dc6ORBIokypts0bMzOVCXAr8UIJ%2FYrRt6Cm9LVZBH2Xt5irJHk7oUXJHfNUht4pTWco%2FObsGUHpuGymTCZ6Qtwbp8i09rZQrhihoG%2FB0dxx%2F4jClK6FP2JkRpE4NAlVqrVyE15eVPa2jBG&X-Amz-Signature=09fcb647a8ead399a5179027a06fb09fd37f21ceb248e332627a41bce79a4827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
