---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBZP556%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC7L2sGsHGkp6deau5DqTGdWmp3e1U5TDxUKZbX0m6LzwIhANZoOSMbe5qryfoazaiRYu%2FarNAuvf6lGljWiqYslgCBKv8DCD4QABoMNjM3NDIzMTgzODA1Igxj01dvlJxR1b0kLTAq3AP9pIwA65BziVlXYfcSvN2kmJZbbXyXMoV1oe%2F9jt%2FDbgTZF%2B%2BDxj9hZ5sVaHr1E1UElEc1TABE7knuaBpJqh1gUY1qEiazkYnw8bLmIfpfq4yEBOtTCzePKWiLwf%2FV8hm4%2FQSPCcmWa8WdUYNWH4mydmEUgFcqtEiDNdXrGjrz3BEJyHncyOKvSPG4YbVAHcaDT9%2FWn0eVVxIsFRunTCGNh0TJFjzbTQPNPl3H1WLz7TuAZiiwRyZY%2FgxF7qqErNCWnt3Zyaz13REYvxm6ESrvj6mRsvvm6o1%2FnQ6RNapHu7AVnhftNU%2Fy%2B6WJfaVnp7MAOcDdrWZyFSmDADe4ia30E2t7K%2BXlAXtohInnnu7waNg6ENn7Xe0b9WWMm73N6OLFIhEunqhwVjpAMgXj%2FAXNKXMS2%2Bc6Pe6R6juxLzIyQohjGEmta36ykBAvureoEgj1lmi0SPineMps7RJJ9NLmQSQ%2FV2U%2FeqbQZIGq2seZ%2Baho4AAWv2mAMPFkFat76NX6WSN7GfFPmbt0mrZN%2Bk2a75oCmAs0ed7lEllULri7SWIuwTU%2FQj9FEyRYbVT5ZglP2peF9q8w%2FUjGAYZ92m7wDaSxGlqQLgR2u1BD58VmKJtrtE1lDvFx2%2B3iyzDZrsTJBjqkAdL7lt8m2%2Fl1B3BdsRddIn8N8gkeJBGDQsJq1eTXhiLHxKdz03VUG%2BdK7UishH5o30JHWChPdtMeMhdUqgnl31Db5QcTpCldcTF6W1W8%2FzDtpumESh%2B8DoUxXCeqIMC%2BayzezggTfRbfyEU8aR17HCnHEa0keq8b5uhS8Yi5byFHmAN3Z3j%2B4Q6M9glYaUvNAm2ljA%2Bnx04fclFpFcUPhMfSXh6h&X-Amz-Signature=389005cab3e183f8920380a4610fab9b997e0991e726045597c2a4f39f749625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

