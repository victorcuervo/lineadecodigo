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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSGBIOT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGspDQBePBaJq2twJHFEJZar6JxRiY3RkRw1Nsd4z6nxAiBvqNHcj03kxWWnDprkTG7Uys%2F4rmvDIT4EbDJCFx7G7Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMXKVX3cHf4ZZuleC6KtwDyWMyvslF%2FnCEtuKIs%2FIHuC5GmjDLtvCrR7EBZ8ap9oiSkUHD44hW%2FqyqT2QKW79tc2cMIECL%2FMIz8d0RmW9OCs%2FVszc8fgiGKRc8HT9LMZjl6Q8nZyeUDDRUABzY1jCjCkw2kfaaXnOTr2iyQTKQuhCrgFmUWejf3fS%2BoJIjzGRbdPycyPIwuNh06edvZCsdUQErqcd21E1seHJggt7EQHqUyogio3lpUrq7H5m%2BewoJpSe1abt3ZpuieMDT23jvKcqIiQNW%2FLub57wz%2BL7te8eHcmINEJq9Ha0WvwvyAf0IHwhj1Lq4WQyDK084ytCMkCQpLaF0Qd3nfYKhpTffcCef6%2FGWA%2F%2BbLRMqe1Ck%2BRUX44%2F%2FFoLVYS6%2Be8bK6Wv41IF8h13ojtAkD25FnwSwduMFSYKooQFJUWI0y4%2F39MEfQ40N3gzvmPDqm18k3O9GA2QYJZS3KzU31QA2%2Bbqi2yyTot4YiLZqX2c4RQs3w6DwXM2PTP2KTUR5Vtwje2YbBtZ6RLEr9ZVd7OlvcBF5tcetIMSwQS5H03hMxg0Y7ZnhmXz03BR3gTRKgaSJzRp%2FlwNYgBRoqftpx3yxUnyi3c01anxZhm%2Fz87xDNhoHttAoltprpG56J6KQkO8w0KbQyQY6pgEyFfO6eNA1OQd1wOAnD10T1ytM96siajI4aUiHtl%2FnBAWrQyv2B8kfhxdvGq610fY5ARmjdpQXkHtJGSRZAIttGC%2FepBN2JSq4beQ%2BYTEbVhCxPVoWhzlYaex9milmn7O6sUlLp2nYgmYcQOAjq71U7nI%2FGTuy7FQC%2FDXkfOUJyvsMSUZ6nihuW3gD3hsU4JciBeLi96894y%2F1sgRWSmC4ArfNranQ&X-Amz-Signature=e42d9ed25deca4c3bf6e56b27a893b0f6d4f8b806244a2ebd46b60411a3894e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSGBIOT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGspDQBePBaJq2twJHFEJZar6JxRiY3RkRw1Nsd4z6nxAiBvqNHcj03kxWWnDprkTG7Uys%2F4rmvDIT4EbDJCFx7G7Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMXKVX3cHf4ZZuleC6KtwDyWMyvslF%2FnCEtuKIs%2FIHuC5GmjDLtvCrR7EBZ8ap9oiSkUHD44hW%2FqyqT2QKW79tc2cMIECL%2FMIz8d0RmW9OCs%2FVszc8fgiGKRc8HT9LMZjl6Q8nZyeUDDRUABzY1jCjCkw2kfaaXnOTr2iyQTKQuhCrgFmUWejf3fS%2BoJIjzGRbdPycyPIwuNh06edvZCsdUQErqcd21E1seHJggt7EQHqUyogio3lpUrq7H5m%2BewoJpSe1abt3ZpuieMDT23jvKcqIiQNW%2FLub57wz%2BL7te8eHcmINEJq9Ha0WvwvyAf0IHwhj1Lq4WQyDK084ytCMkCQpLaF0Qd3nfYKhpTffcCef6%2FGWA%2F%2BbLRMqe1Ck%2BRUX44%2F%2FFoLVYS6%2Be8bK6Wv41IF8h13ojtAkD25FnwSwduMFSYKooQFJUWI0y4%2F39MEfQ40N3gzvmPDqm18k3O9GA2QYJZS3KzU31QA2%2Bbqi2yyTot4YiLZqX2c4RQs3w6DwXM2PTP2KTUR5Vtwje2YbBtZ6RLEr9ZVd7OlvcBF5tcetIMSwQS5H03hMxg0Y7ZnhmXz03BR3gTRKgaSJzRp%2FlwNYgBRoqftpx3yxUnyi3c01anxZhm%2Fz87xDNhoHttAoltprpG56J6KQkO8w0KbQyQY6pgEyFfO6eNA1OQd1wOAnD10T1ytM96siajI4aUiHtl%2FnBAWrQyv2B8kfhxdvGq610fY5ARmjdpQXkHtJGSRZAIttGC%2FepBN2JSq4beQ%2BYTEbVhCxPVoWhzlYaex9milmn7O6sUlLp2nYgmYcQOAjq71U7nI%2FGTuy7FQC%2FDXkfOUJyvsMSUZ6nihuW3gD3hsU4JciBeLi96894y%2F1sgRWSmC4ArfNranQ&X-Amz-Signature=21275e19913f40500b0c26cbde9c353e4d1b8e80f7fbea173d2ab4058ed13da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
