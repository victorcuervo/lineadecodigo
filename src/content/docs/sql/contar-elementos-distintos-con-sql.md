---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7QQKNTX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDnw6iJ0ol1ETP0d%2FRlK8ZMvk4W6jhNcdWdVlUg1gF9HgIhAPd%2FQipli5JAWUpWWwFRe5PIXV8KVPaSmfZJebpAn8aoKv8DCEMQABoMNjM3NDIzMTgzODA1Igw9eTijhKkZzOUNv1Yq3AOdDlniv2xrNbZV3vJ6aLihzCtL5tMPqFuJ1r5yunby4gz%2BOlZTFI%2BMA4vzHqqvpLvYCj2DCEuQt7ClDtEq9YhKBgDlfa3CyqUmf4%2BNXn42p0BjQ45%2FPlvThzxtBD82AuyTYl6sqCsXoX%2BrFQDqJ9H3OUXGe61VD%2F4jbiVXLcNo%2F%2B6JXDq%2FkUYQVGGn7lrmRPxKKMpA66pbBVr8ejjpe5%2Foxyip04JD9AYD6ye1ORqLR223GVRv36E%2FygtktTgd3kzZe6IMmmv%2Bg%2B%2FdFlqzSsnGo50yYdb1eLtGbznps%2BStsFannenKg70ehhlZ6RV0%2FaKC5KEvuTlX3Xdk6DE7CO7YHAKda8eBHB9QHUMZmRReF05XBgsd7N5H%2BkAnXm6TqDLupeYdJfmKQQX16Y5J8Zv%2BM23RvdayAEzogGMUlgu9prKHx23p%2FW4QAQRJbmpurdEtLlRhPc0U7kE7F3b1fcraCfol%2Ffd8XapU6rK32pdjQg%2BSN1TvXidn3YJuuLSIcLcFI3AlCCqR%2F8T%2F7KA%2FoXrCCbcx1NRXEIu2ntvfc8c59O5zTAnNxqWWDvj4WCLgjAtl0kgQcshHiZMiwdPggjdyIlXjeISEM5kIBSX6aLRtamX71m2Oy2R2olGRrjC1q8XJBjqkATi5VAr2eqMgh2RU4GMXTxWgRumsj1LdraWVXRied8YPXVvehBh8IwMGL17Z85DJ8rx2CZ0Zspc01mfAsLVLNDT%2FYFAmi7iW0lZjsjqUmd4uRL5af4emoGaMltdna23ENIaj0nZpFxAi%2Fl0wJr02AAlnO%2FYiZLzlAw5KDfurcdOBszLuTw3mmPtxLPcR5FFNtlxZrNhGDmEpkYZZT%2BtnqFJp7iHB&X-Amz-Signature=6bc5bcc5d41ba5479a90844b82a8557992424e4a7cf7dc1853a5d431e101b496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

