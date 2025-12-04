---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665YKZIP2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH6rQfieC3O2Z3ZEPoa74wM0TaCZLb%2Fr5IHVsl1JbIAPAiAgynoICivoUBgKPcbhTcR6CQOae0XFYIh%2F3%2BcOjACUGCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMFzQLSLq4KeNDuEqpKtwDQjwLuYJugnlAxlXOIXhFxWdCyCQT8jqwUjvFgGH9MdfgfEaes36MF9NCXVYxJ42hrwegb8WZWFy2pBqZcIcH4B7kpydTv4VnWJVbn4PBPpOWek9ZQYvhJt5V7vf2WlPhxW9GwAh09PRGbcPVwVCp83G%2BNWnZp9b%2BVwFrKhTHGFq90Tt4L7DnbarhOx%2FpCfkk9eFClrjhtFD9oHBVr4AeNaCTLsXcANtKBOCJSWaTGmX6LDUWw8O0BtvG8tSmEddTJv%2BsMtxW%2B9hwPMlTplYd8kNsrqnInrQ0WIuxcxe0TvNbaOX47y0%2Bdhrxs44P7WjtokZ3E%2F2v7PPlXONRFqPww5l%2B%2F%2Fhl9hHdZC989L2bo0H9ovFMqZMZKL8kFRBN%2FN3HP9vl2fZFfRpmtKp6CnTDFwDE%2FnHqc%2F7BX0qEC7Q65Vd3Tva72wQcTksxjkzQniE8dQRTxza2LpINKhImc%2BidVB3oxJb2JJIrRkwB4aRT5fFkaQZGwHyRedL0vCJJFDD%2F5uCE5oyUaO23AOcOkiFIyIiuLg%2FkhpyJbLFCtHHSAPWky3ca1H3xOYTbSQjWapJkv0r0Eap0U1ytUO6inPcJkrZW5voMjqIfOau1A0YV9tfWq9LAPoDAevvAAhIwipHEyQY6pgGCeLM0c3Il5RzDH%2FRuuZ2q4CBIp1Vzp9K0X7khvJWYj49noZ%2B1Z0mSDxv%2F6aSq42wsvgnaUlWfVSADy4IyIUk4mIQ6gN5JfV6TDpKGjCFdPdxdg4C9dRef8vrV8la3suxlgbyGiSBnmnFrAFVv%2FbHYHMZAgdMU9xzfUNQ0iI30CvpCO4PZ23OmAqGYZUyA7%2Fl8kkiGJkT3aCFhjLQRmrMaCK%2F1BXzW&X-Amz-Signature=ceb444bff36726dbe83bcc4b1e603c7cf6a58e24b6413cbc195984b9cf99ad94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

