---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ3DVE6K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEXIQWNkkosPTuarIDQ28lZOscvLvkSEGtQHsMywiP%2BJAiEAtVGXQ24UrUkGBzd2WtfIhPM5y1EYMBGE%2FHmKpeIakWEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJTegqyPBqMGm7MgNSrcA%2FlU4cZKnSMpvxvnMqHoCuo6vjMYGGEUZ7oMSSpZnuNzvrhTOcPNi%2Bzq9EUCH4GxoHSEkVVevORBbyPMul1cOqYnwthXNCSyNMrFtLmaBlFZpcBVQpeFg4fELOj2bVybQhG7wqhJuTmdKrJCX3C%2B%2FoARcpU1TJO45M9w0bipPoIlf%2F9oS8UDyba%2FxsZ%2FOl4mI1wcbGG2HHiD8d9KiRP4eKew5D8reCsWDp3fDPYANllqHkqP0D0sgx2Su0aPTPbREQ5jorv4XHik9vSt6qNNKE7tFFqnMxPsMlQcFCMiaWi5AgPXD6GeXN8QvxGomkudUqjAyQQOlV5PPe4zPECPz74opFlVv0J2zUEuDHbz%2FdHKV1DQTsvANKQiTGib2oTQ9Iu5oNLGVpvTmFA2PAnTvXa5mD0LY4Z9O6DgXS8EclZpLpt1aNXiBmlG0vj5fsoBusgLMpF%2BH9cmB3MGodrinr4kyZe7mHitKILbywzDWx%2FlGKZn7nrwyHxcQfXlAxeIO183J2dp79L3%2BjOdDQJROGDaEjB1SwtiTE6bM7ECgHH1EehwTGXtp8AOp9C4Sdqlv9C6UTvKmRBY8%2BocHy3cwxbKd6PXoIM0ke3zBOflsdnTVJNmmsE3pazjgh7xMMfnxMkGOqUBNXKUHhLXzOj5gdrIULNO3WEWOZngBLhLxkIWLh1Ep1wJgL0DsbtMwuDzCQLJZLWXRZrDVw5mji%2FgZvg%2BPYxCkVlHtB1M3%2B%2FQA3s%2BETxBW3BwJ1cak773q4hrIYNvG%2Frj%2BXpPGjP4ueuKccFZgH%2F5tqOfDUStTkyWk50nGDYV9jCWl4XsGPmwRATjS1fMOYtfJQapTYsb353tL5bDS4MvtZ7OuuQA&X-Amz-Signature=cfee3eab37f9ac08f1abafe6a59eb344d0fbbeac9d40534ea012979e3bb5c602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

