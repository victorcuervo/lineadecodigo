---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMJBQL6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCIm18Fa%2FDU1fubkPiwddEWflxz7%2BlwgkGROOhDCw9Y9AIhAIuScDRq2gVtrejrti6MEeeWk4spfvILU%2BUFH5oL9RyFKv8DCDoQABoMNjM3NDIzMTgzODA1IgwNNIU%2FOxehWXzW34oq3AP4YjdFO4mUpCyAjSudLi3efMrueoaC%2FiBW2An63qvntNPhLHXHVg529IYuFxG3ryyQ7Iu9ftqJkiPBl8lAtmZLupDh6xx42DUeh5jBT7BpllO52MuhokwWBxEO1YIepMtPh69oOypBw6ZJIG%2FnqHz9T795QLlp1qiArsgeCmofsyV7fwmSiHXbkoqwC1sune8YWP%2FLKlUcpgwD9uM56nkln7KU9FmZrTnJD1eQORxgI3NL7Y%2BD2fXPXceDpWkiHJOew8%2BtNiO%2BwYs5BvJZnPbHCuI8%2BrpEtQ%2BRc2eMtN1tPOFBlA6NyUE%2FnqHdO1Gnv8ftRC7XEVSSeecmKrP0LYa9VsA%2Bbqrf7pCpGizz%2FVE9BUlWDMBvUM%2F0dSvj6sxdx42cIpLtk5mcvbOnS%2B62pQucaRsRVVHE4940BhgxKOS%2B2Fe9K4Y%2FOBV1SLvW8WfUsEKyiyKAZE8RoEIc4NEifh6ctgrhV5YV0mf1AHYxePWJ2REwpSh4FLAcOa%2BrjxK6S5o5ya0Ar6qrlfoigLUuf5182ctKq6XLMV9UpOkQD3tqqRAKQD%2FfKY%2BKWUAae0r09KbBPGvGMuVAziMiotsmGkhMEFDihD5hWR2afppoL2r7BWW19AHKsykBVPQTqzCitcPJBjqkAQf%2BP5WjAE%2Fv7U%2FgSoBKat%2FNyvEkZ%2BBAcJpQhWfmnPkC1Jot9Tro69tBeE%2FOKy%2Be45BntRaStSWEHgBivAd3LFZqyCbPHsXz2AN%2FOzFbzUbJj73QjmNmVuqC3dl%2BNMkPe5msLEQp1b8cJgY9c05Nc2db0B5wUtbheLRen3xAtynEJ%2BT57HTv0rzr%2BRIVFm2PfZtQMR4c5%2Fm2jeySXg8QYrhzmC8A&X-Amz-Signature=faa3acd310b7a5f9452db85d29fd509cffa5352dc465b2e42e3470ada499efaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Dada nuestra tabla de libros, podemos realizar una consulta [SQL](https://www.manualweb.net/sql/), para contar elementos de la siguiente forma:


```sql
SELECT count(*) FROM libros
```


Esta consulta [SQL](http://www.manualweb.net/sql/) nos devolverá todas las entradas que tenga la tabla libros. Es decir, todos los libros de todos los autores. De esta forma, ante una tabla que tengamos los siguientes elementos dentro de ella.


| ISBN               | Titulo                  | Autor             |
| ------------------ | ----------------------- | ----------------- |
|  978-1-4493-0814-8 | What Is HTML5?          | Brett McLaughlin  |
| 970-26-0518-0      | Cómo Programar en Java  | Paul Deitel       |
| 978-84-415-2348-7  | Java SE 6               | F. Javier Moldes  |
| 978-1-4493-1439-2  | What's New in Java 7?   | Madhusudhan Konda |
| 978-1-4493-1608-2  | Just Spring             | Madhusudhan Konda |
| 978-1-4493-2838-2  | Just Spring Data Access | Madhusudhan Konda |

undefined
Obtendremos que hay 6 libros al utilizar la sentencia `count`.


Contar elementos distintos en [SQL](https://www.manualweb.net/sql/) sería para cubrir consultas del estilo... _"Contar todas las editoriales distintas de las que tenemos libros"_ o _"Contar todos los autores distintos de los que tenemos libros"_.


### Count y distinct para elementos distintos.


Para ello deberemos de aplicar la función `count` de [SQL](http://www.manualweb.net/sql/) sobre los campos editorial o autor, pero con una salvedad y es que utilizaremos el modificador `distinct`. Mediante esta sentencia `distinct` estaremos contando aquellos elementos que sean distintos.


La sentencia [SQL](http://www.manualweb.net/sql/) tendrá la siguiente sintaxis:


```sql
SELECT count(distinct campo) FROM tabla
```


Así, para sacar los autores distintos, ejecutaremos la siguiente sentencia [SQL](http://www.manualweb.net/sql/):


```sql
SELECT count(distinct autor) FROM libros
```


Siendo el resultado igual a 4 ya que solo hay libros de 4 autores diferentes.


De esta manera ya sabemos cómo podemos contar elementos distintos con [SQL](https://www.manualweb.net/sql/) mediante la sentencia `count` y el modificador `distinct`.

