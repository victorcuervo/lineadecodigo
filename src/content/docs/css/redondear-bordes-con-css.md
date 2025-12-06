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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJQ5LPGI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu6YiwMigGglqlzXxslGmSlZJd%2BMUuzuC287YG%2FCOHbAiBscDskgvEdiekC94w6nn6bKKN%2Bn8sK7l30J6%2BKQVIhHSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMMyCUtv1R54iLIs4SKtwDGMBbSuySiYgxivkof2AymwJMOyxe0JQLSMqTNLtDL6cic1LXMJG5O6q6Xshwsf2Lce4Cv0Nt1qj2GTPE6b%2B2lN0joJriKRlttVAleFsELFFB4SsjSWvheyiNWxwxJWW4OUHfQw2HBogSW3NILDfmyboQ%2FHfEoeqwaSRR9%2FyuPSh%2BbffasxTaPXCwxAro1%2BMQiTUyvj3wSU7D%2FTFvS3lbbyT%2BYPjK4yJRfC32Krzr07CnNZMG3IX4rpWm0ke%2FLN0COAznSWQDEOXUX%2Bdhp4UM%2BxtpNOektpiXwIcMxayjb4zWpKYFla%2BstorG2k65%2Bx4CIaN3l%2FO9TSHxbU5NmgXdwLIB2aBO2chZM%2BcQB1KbDG%2FSweBx6aU0cehD%2Bmar2%2BFQO84DIIojll2qqS8gItzMLWfRHQO7ieI3ULu%2BudYB2NXoaXJ6ySHn%2B5tz9I5W%2FEd7khR4TVlYCLkUzalQfMs8YTAviP4rv5S0coIsnRGlkQeWVa0wup29FzIu72sddSH21GrxBIGhooU4cIM%2FYkr2ikqPkRvl%2FDhjZPnsosYdMhKLqdiYecgxCKO0twyE1Ooz%2BtszKaAkFdecfaOQ8yqBTcAEQxPQayX0GuVGsNrWVitNu11w%2BFDBBaxzLNkwqf3OyQY6pgG21p8%2Frl4X51sNjdmsThcTxNtfm4rZzvm1IFVJKjn1crvLBUKTyDwI%2BvdkbJh%2Bm9VVi%2FN4twLRVs%2BEPaMrDg0IXmkac4FTZ4dMAkcMhtyAlsw1RMhRxjxNOfKby9mpfAS6r6Ct00LCWQincHE7SnzIYq5t03bqkhUjUUW60Hm595wopLfy2W9bipawi31iNZqaFKBPQBo%2BT8YQKb2fhCqxgysOd2%2F5&X-Amz-Signature=9f04327d58a3940ac32873ac8b5a5d9d3401cceda77cf77beae9fab00a219ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJQ5LPGI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu6YiwMigGglqlzXxslGmSlZJd%2BMUuzuC287YG%2FCOHbAiBscDskgvEdiekC94w6nn6bKKN%2Bn8sK7l30J6%2BKQVIhHSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMMyCUtv1R54iLIs4SKtwDGMBbSuySiYgxivkof2AymwJMOyxe0JQLSMqTNLtDL6cic1LXMJG5O6q6Xshwsf2Lce4Cv0Nt1qj2GTPE6b%2B2lN0joJriKRlttVAleFsELFFB4SsjSWvheyiNWxwxJWW4OUHfQw2HBogSW3NILDfmyboQ%2FHfEoeqwaSRR9%2FyuPSh%2BbffasxTaPXCwxAro1%2BMQiTUyvj3wSU7D%2FTFvS3lbbyT%2BYPjK4yJRfC32Krzr07CnNZMG3IX4rpWm0ke%2FLN0COAznSWQDEOXUX%2Bdhp4UM%2BxtpNOektpiXwIcMxayjb4zWpKYFla%2BstorG2k65%2Bx4CIaN3l%2FO9TSHxbU5NmgXdwLIB2aBO2chZM%2BcQB1KbDG%2FSweBx6aU0cehD%2Bmar2%2BFQO84DIIojll2qqS8gItzMLWfRHQO7ieI3ULu%2BudYB2NXoaXJ6ySHn%2B5tz9I5W%2FEd7khR4TVlYCLkUzalQfMs8YTAviP4rv5S0coIsnRGlkQeWVa0wup29FzIu72sddSH21GrxBIGhooU4cIM%2FYkr2ikqPkRvl%2FDhjZPnsosYdMhKLqdiYecgxCKO0twyE1Ooz%2BtszKaAkFdecfaOQ8yqBTcAEQxPQayX0GuVGsNrWVitNu11w%2BFDBBaxzLNkwqf3OyQY6pgG21p8%2Frl4X51sNjdmsThcTxNtfm4rZzvm1IFVJKjn1crvLBUKTyDwI%2BvdkbJh%2Bm9VVi%2FN4twLRVs%2BEPaMrDg0IXmkac4FTZ4dMAkcMhtyAlsw1RMhRxjxNOfKby9mpfAS6r6Ct00LCWQincHE7SnzIYq5t03bqkhUjUUW60Hm595wopLfy2W9bipawi31iNZqaFKBPQBo%2BT8YQKb2fhCqxgysOd2%2F5&X-Amz-Signature=d338f51cb25b9b2d7995c54940f14e5f08989b459b2620965c366a86f29f71cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
