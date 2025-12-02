---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSTCI7DB%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIG9r6G127SrXFHd6js7znJnHGmwEPB9dqR%2Fk79vPffg1AiAFCrXiepu4t5PZNdsPUqS55HwiQ2b%2BT8jJpkJ321g9Dir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMt99lUP3CFcBuXaosKtwD1vILqtH94iCKZROEBHACOy398TSVqaeajDNvcHtu6bXG8x0nx1C0M3qODcI81yCtDvramLqTX8L0H%2BQDwqCVFxFN%2FciC2keHJD4h8NGNSjDoHUWAI07bCNMXkz1KnCwc7Iypypan0H1KZ2vr4cwyqiIuR4WIjLFqOXGmVx%2BmL%2FBmy4RfbVRS%2FT7AGTy4R1hpqvA1g%2FXwZkiKU%2FslYOpLTUxlpQ%2F0X6SAHZxCXpndasFpU9VOH1%2BRCp6XgaSQf6vbAm3qNcu1k%2B3Ci7XDvW%2BpMiE7EtAXe9LoRVbsDhpoYWNnxzmZ37GSk9V%2FAQjUJgVJYtASopYUSngHJkG%2BZMG1o4%2B0Ra98I1ImhmR2vlOL4xB6Q2URI8GiZoxJjfkLwSh7kC6W0kwRZs%2BAQZQs68FcUl5sT7MFrAkZZmNWPqaa1IDNoS9iITeBNG%2FgSJtW610NftdExGa%2BXxiPd4egBzUBRBfSh0BAHZbRe61lzs4qlKS2XnrC2792o8rzPcYG5Mu%2BqJz09lJSP7hiqTnhJWgtZ4vd1EQtMQPUDFjOxlJPDfNbe0SkuuYGTscKfYb8y%2F2NOZr3wUB%2BEbuXRUlQhCWdXy5HYbSQ0A1nPvq3T4CulMPKVSPhs%2BQpma8a3Okwy%2BS9yQY6pgHViKxnCA9kgOf1Ude2B3cJRu5BNcvJpqL3CpDXbDF3OLK2E8VS0mIsZI3psmbEoVOT8Rs3GyUFWD2TpjCztG%2B%2BVb2Ag3Zb5nW2LEXcShwDH8edaxxC2D3fnbXCw32lOzN4LQ9LiCRXAa7vhH21eK5ZLyLrzjfDjx376rgTmHbg4v945CFze3f%2FBcpE7TQZJurTyNAqgpk5JtkJrMHW62Grjh8SurW9&X-Amz-Signature=e82fc796096ff1d5660dd92bd06e50b46e0f645db0949f41262d2c665ee9eacd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

