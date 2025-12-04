---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6DIAW5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIB9o80l5QDiFKZFl6%2BCgeBXSAzkK8fbFgcNdssuFoRVCAiA3%2BPJ1YKOCBHF%2FZr01OSU7MZIySQx24iADV7IM8Y7YgSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMJN4IGqSuqdstvKpaKtwDdxHQP5TfyO%2FegWHHGCOWTOtJk8esGlDdRNmadHwg1ndhinAUsTQbw%2BXZy2BoKCODhakBjLlSvXTSG%2BQe8J%2FpCRkhjCfZ5d23qpG8cbLEMmDCAk4wCFclaJn1n064ynF9fAmuFskQsFIwkNRZBpgTWE4ttAc8WPi%2FuOKiyWXltldzkY6FeFDo8AxlPGpRHoz4A77Cfml5C04u7sNag9avSqaeAfu6YlBexVzhA0dWJrfcUEeBmrkKHCSDpLqdnW7skjHIZCkDnCCu71zBHsRoyJtlgLFMrT82mGr9Vqf%2B9InmbHDa%2BI6bfAarmMBkt8Iuc9VXCOQv9qc5kOAFJ2uEsGwpm5PJNcX5BzS3GWfigS%2FTBYcpw81jGQfz%2Fg62v4iv%2FucJPTGNfrcMqO8I0fW1Yh1ktlkFajJeBiAbaJG9PgYtr726FieiW40V4zfOdm0tVi1vsEKTTf2aQMAjIFr%2FQVlfU1W1qDpYtacYv2jnF%2FPtTPOcdw8j7c%2BTO%2FmjktRZbCbjGx6cu%2FsdGNVnSPofFuszMCpvrCla%2BPWbHgykCwgpKm8nirwRREJFUFmRmPbPJ0PdJEbpjABlb6e82aPRRakFY%2BEbRJ3Rjhq%2Ba9x0vnvriLL%2Bhtp3lBoeXEkwv9TDyQY6pgFeGTEs0hE5vvr8geuyznFSIcaLGc%2FLErvhdxmKCzVBmCil9wFvxemp93hz296jePmwLnZ7hVyKAzu2%2BYw3tgA64DgUTeECR%2F6VrBn6Q4ulL1qLf2fiUrhR%2FdJWUSsO%2FjFUUJdyfvrxoqjAiZse4qMJQESF8b7JpI2%2BFhaJLT8%2BGZWaAoVEu1Vp1uhF4Od8eQsxmCKmK9mfsTcgyqLTUxG2PS2WO8rE&X-Amz-Signature=f95539b7eaded2421e9004582237781f690ca3b423e10e7a0a53e8eb020aaf11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

