---
title: "Remplazar caracteres con Java"
description: "Ejemplo de código que nos muestra como podemos remplazar caracteres con Java."
lastUpdated: 2025-12-19
slug: java/remplazar-caracteres-con-java
author: victor_cuervo
---

Estaba revisando las notas sobre la clase [String](https://www.w3api.com/Java/String/) y los ejemplos publicados por [Linea de Código](http://lineadecodigo.com/) al respecto. Es en ese momento cuando me he dado cuenta que, entre otros muchos, no tenía publicado un ejemplo que explicase como se hace la sustitución de caracteres en una cadena de texto. La verdad es que la sustitución en si no es que se diga muy complicada. Basta con saber cómo usar el método [replace(char oldChar, char newChar)](https://www.w3api.com/Java/String/.replace()). Este método busca todos los caracteres que coincidan con el parámetro oldChar y los sustituye por el carácter que tenga en newChar. Más sencillo no puede ser. Mi gran dilema surge cuando pienso en cual puede ser el ejemplo a usar para mostrar esto. Seguro que hay alguna frase graciosa para ilustrar el ejemplo. Y es que hay que aprender con cosas que nos llamen la atención. Esto facilita mucho las cosas. En ese momento me viene a la mente “Cuando Fernando Séptimo Usaba Paletó”. Creo que me han afectado las vacaciones si a la hora que es tengo en mente esta canción, pero vamos allá.


```java
Cuando Fernando Séptimo usaba paletó, 
Cuando Fernando Séptimo usaba paletó, 
Cuando Fernando Séptimo usaba paletó,
paletó, usaba paletó.

Y ahora con la ‘A’...

Caanda Farnanda Saptama asaba palata,
Caanda Farnanda Saptama asaba palata,
Caanda Farnanda Saptama asaba palata,
palata, asaba palata.

Y ahora con la ‘E’....
```


Vamos, ejemplo más claro sobre el reemplazo de vocales no podíamos haber encontrado o ¿no? En este ejemplo podemos ver varias cosas... La primera es que para realizar saltos de línea tenemos que utilizar la secuencia de escape \r. La cadena de texto nos quedaría de la siguiente forma:


```java
String sFernando = "Cuando Fernando Séptimo usaba paleto,\r";
```


La segunda es que el resultado del método [replace(char oldChar, char newChar)](https://www.w3api.com/Java/String/.replace()) nos devolverá una clase [String](https://www.w3api.com/Java/String/) y que podremos aplicar sobre ella reiteradamente en una misma línea el mismo método tantas veces queramos. Y es que de la estrofa inicial hay que pasar todas las vocales a la vocal ‘a’. A si que tendremos el siguiente código:


```java
sFernando = sFernando.replace('e','a').replace('i','a')
               .replace('o','a').replace('u','a');
```


Espero que el artículo os haya parecido, al menos, curioso...Por cierto, de pequeño siempre me preguntaba ¿qué diablos (realmente decía XxXx) será el paletó? Porque había desviaciones de la canción que decían algo así como “Cuando Fernando Séptimo usaba pantalón”. Digo yo que paletó y pantalón.... algo tendrán que ver.... Pues bueno, esto dice la [RAE](http://www.rae.es/). 


> **paletó.** (Del fr. paletot). 1. m. Gabán de paño grueso, largo y entallado, pero sin faldas como el levitón.


Vaya, tendré que tirar de la [RAE](http://www.rae.es/) otra vez....


> **gabán.** (Quizá del ár. clás. qaba'). 1. m. abrigo (? prenda de vestir).

