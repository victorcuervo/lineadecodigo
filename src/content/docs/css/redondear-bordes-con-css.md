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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCM6EXRU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzpnqTXKyg3lu6u6fu7EvyvyGDPq1DgRQ3b1duExtdwIhAIV3OJyI3MUNF553fX2zOGPvsNAu5Tr3TjJOtAILBzzfKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaJMBwNGWk5MwK51Eq3AOUxSo4HVbr4kVbh6Wrxjt6RQcstb9YqJ%2FULvyId2qL3XGoHQWO8FBbxU7jf0W%2F41g6rBMqT8dMFZiLOEvyaxVp1xJRR%2F7rta9HVINSGLMUv0Nw17Ts0Og%2BAXex7U%2FptmPLLrb80tXC94WFSZPr0uGvvbq4zTOHnfJtr0g%2F2I7fIV5YVNbrDlYZkG8WGyRug8hmGmw9fFX6FbjNw%2Fjxn22%2BAqV%2BgwQ1PCXBV59IsLhDEFSCNeyvhxvJMuzHDm44grPUx1heN2c4GLWtGG1yQ%2FImv9UhmeQIRHy1xs3nIKp59wfoD7RMgyv%2FRY39RZ96V6iuqlpFP7O0wtJrT80p5ZSL2vO6Vfz9WDlPujA%2B5YObSfsdw4ZXiIta%2FeXdHkRWZNkBxObpo0yHkezKd80Zzbe246Kb7KWBSUCfeTdHWgYicNaYw69po3yREjC8lBNuN9FQYZ1FRNc87uCIb%2FaZoRtPMXr22VEBu4F2EwQ%2BM5Y%2FizTMqf3hlt59XQSipI1PO3d3ASN9jzr7FJMVbHrOYOVqViqkt5TSdXGgzTMs35xQDjs9DzTZclwa7x6%2BL%2FHIeHUcgviKyMzFkTsXrFPm3gDucmwdKyF8Dq3yQnp%2Bm5%2FD3u3NnZy180UQNv4nezCApN%2FJBjqkAfu2fx3BUj77oKqAYM%2FS7qIGwx16B83iXhlIyD1hmACA3n4ohE8xK8Z2hT6GpBITwLFQnsEadTYKFK6fsPppq81QevBukyUuC%2Byb1XXFoCKrSaoJZ5cxiXbqHxTNJzJUoR%2BIXEqBfdIYEW0otH6Z%2FyYE6e9R74%2BKcrLN3SElIDw%2BWyEnBOpsLMY%2F7h%2B8vk3gqFCt3SmlLr7DkhwS6lHaX0poL9GA&X-Amz-Signature=caea103c11cb844201716b7836264b8fe521317a526a79da3a1f44e4e35a38c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCM6EXRU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzpnqTXKyg3lu6u6fu7EvyvyGDPq1DgRQ3b1duExtdwIhAIV3OJyI3MUNF553fX2zOGPvsNAu5Tr3TjJOtAILBzzfKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaJMBwNGWk5MwK51Eq3AOUxSo4HVbr4kVbh6Wrxjt6RQcstb9YqJ%2FULvyId2qL3XGoHQWO8FBbxU7jf0W%2F41g6rBMqT8dMFZiLOEvyaxVp1xJRR%2F7rta9HVINSGLMUv0Nw17Ts0Og%2BAXex7U%2FptmPLLrb80tXC94WFSZPr0uGvvbq4zTOHnfJtr0g%2F2I7fIV5YVNbrDlYZkG8WGyRug8hmGmw9fFX6FbjNw%2Fjxn22%2BAqV%2BgwQ1PCXBV59IsLhDEFSCNeyvhxvJMuzHDm44grPUx1heN2c4GLWtGG1yQ%2FImv9UhmeQIRHy1xs3nIKp59wfoD7RMgyv%2FRY39RZ96V6iuqlpFP7O0wtJrT80p5ZSL2vO6Vfz9WDlPujA%2B5YObSfsdw4ZXiIta%2FeXdHkRWZNkBxObpo0yHkezKd80Zzbe246Kb7KWBSUCfeTdHWgYicNaYw69po3yREjC8lBNuN9FQYZ1FRNc87uCIb%2FaZoRtPMXr22VEBu4F2EwQ%2BM5Y%2FizTMqf3hlt59XQSipI1PO3d3ASN9jzr7FJMVbHrOYOVqViqkt5TSdXGgzTMs35xQDjs9DzTZclwa7x6%2BL%2FHIeHUcgviKyMzFkTsXrFPm3gDucmwdKyF8Dq3yQnp%2Bm5%2FD3u3NnZy180UQNv4nezCApN%2FJBjqkAfu2fx3BUj77oKqAYM%2FS7qIGwx16B83iXhlIyD1hmACA3n4ohE8xK8Z2hT6GpBITwLFQnsEadTYKFK6fsPppq81QevBukyUuC%2Byb1XXFoCKrSaoJZ5cxiXbqHxTNJzJUoR%2BIXEqBfdIYEW0otH6Z%2FyYE6e9R74%2BKcrLN3SElIDw%2BWyEnBOpsLMY%2F7h%2B8vk3gqFCt3SmlLr7DkhwS6lHaX0poL9GA&X-Amz-Signature=e19ce3f11dffc1a4fadf0de49f6611758606c97a7d6eee573fdbfeb15e785d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
