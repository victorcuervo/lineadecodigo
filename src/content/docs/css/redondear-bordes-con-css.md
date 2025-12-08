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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4IO6UK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE0Hvz4%2BcJlou81A0gvptFqlpLyN1pw%2BR3EnxnXBKY8AiAz6pWiRXINlSY2Ivs1Lw1Z109fmSQB0oFIEvNkYkfLcyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Y9qgK5VfL98NCWMKtwDcUo9Vg9sWJUpc%2Bv5fQ1oo4QL0qOxQfbaOC4NGVBdp%2FrOFZXYpcyjN4xncMBD6zfmd%2FOPJMANMHOfOB9F5phxJaLwTSdb46UAP45ltUS5l9X7WwKMkWCioBUbo0P%2BDjeaJW5tStVKwh2mggYQxGZLqxb9z%2FUifRqbxOluzOqqvtQCEH8JOsLKD3AFrQE%2F3iaGfMmpdY2wKqHEFtHNivQGrVE5loplARV6HY0qY0ah%2FxlfNUf1syJeTCjPBfQqadsYXIe%2BK%2B1pr3qdHnJmyY80yQaqxf26oV4UKhLK5SHaTzDLIjcoPHg2tY5wz0%2BZ7e0BpGYRy0g%2F8189DZwn7L61wUHJzhx0bUa0r5DZG4qOTqpz6HNZCh5QoU5AOPaM31l2q9Ul3BBtJoAj6lTqjaszBCxbfQfJR7NzgDZzarYZ9MeDB55W6OfoJdIM2CdznSERZ%2FTxmyT29Jtos9Ed2%2FaQUV9an13sqkpAEXd4C67ZoG%2Fqc5GjnZ1WyDpyArJfng8s25A25aTBeqTrrL0LPIl5DGTcT0iHMgtC7ar8xJA1NnZGVsOA0GQbYXCIy0vzuxsuGwD1kYGew0bPEO2HVTC07yydg%2Ba21xtyfG%2BHHFVFBj3doNJ9MoCotS%2BCYn8wlO%2FYyQY6pgGDtKQTdBYsMsQHwYTQ2hqmZv1JFLucrtUWmsIdsNRHyMb6JwACg3C%2BVp1rP2DhTz7Nb3jTNAC%2FiN7JxJ%2BBUfUpBsLpfd4WSy9EH4EJnkU4rvgTXu5Uofevu1%2FWJ6tfFcyFmXz84RN9OST0LBg%2BhrRmVKgO75m6KlvYsaOsmeQyOnpHiScUAkuJBLzAPdcolmgZs816OlNBM3HCNTAiXtAa4jCmHFk4&X-Amz-Signature=ae1acd20975ea42b360a260aa8294802c05738309e639f83c0c7f10a960e2134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO4IO6UK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE0Hvz4%2BcJlou81A0gvptFqlpLyN1pw%2BR3EnxnXBKY8AiAz6pWiRXINlSY2Ivs1Lw1Z109fmSQB0oFIEvNkYkfLcyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Y9qgK5VfL98NCWMKtwDcUo9Vg9sWJUpc%2Bv5fQ1oo4QL0qOxQfbaOC4NGVBdp%2FrOFZXYpcyjN4xncMBD6zfmd%2FOPJMANMHOfOB9F5phxJaLwTSdb46UAP45ltUS5l9X7WwKMkWCioBUbo0P%2BDjeaJW5tStVKwh2mggYQxGZLqxb9z%2FUifRqbxOluzOqqvtQCEH8JOsLKD3AFrQE%2F3iaGfMmpdY2wKqHEFtHNivQGrVE5loplARV6HY0qY0ah%2FxlfNUf1syJeTCjPBfQqadsYXIe%2BK%2B1pr3qdHnJmyY80yQaqxf26oV4UKhLK5SHaTzDLIjcoPHg2tY5wz0%2BZ7e0BpGYRy0g%2F8189DZwn7L61wUHJzhx0bUa0r5DZG4qOTqpz6HNZCh5QoU5AOPaM31l2q9Ul3BBtJoAj6lTqjaszBCxbfQfJR7NzgDZzarYZ9MeDB55W6OfoJdIM2CdznSERZ%2FTxmyT29Jtos9Ed2%2FaQUV9an13sqkpAEXd4C67ZoG%2Fqc5GjnZ1WyDpyArJfng8s25A25aTBeqTrrL0LPIl5DGTcT0iHMgtC7ar8xJA1NnZGVsOA0GQbYXCIy0vzuxsuGwD1kYGew0bPEO2HVTC07yydg%2Ba21xtyfG%2BHHFVFBj3doNJ9MoCotS%2BCYn8wlO%2FYyQY6pgGDtKQTdBYsMsQHwYTQ2hqmZv1JFLucrtUWmsIdsNRHyMb6JwACg3C%2BVp1rP2DhTz7Nb3jTNAC%2FiN7JxJ%2BBUfUpBsLpfd4WSy9EH4EJnkU4rvgTXu5Uofevu1%2FWJ6tfFcyFmXz84RN9OST0LBg%2BhrRmVKgO75m6KlvYsaOsmeQyOnpHiScUAkuJBLzAPdcolmgZs816OlNBM3HCNTAiXtAa4jCmHFk4&X-Amz-Signature=e2d412b36663ffe4e3a374a2a7a447424f8f7070d75b47a728cbdf8e37e46a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
