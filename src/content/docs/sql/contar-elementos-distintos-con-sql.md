---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAL6X7WQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDK1ejeEvddFizJzaH3cAE%2BkonTprpNXDd22mJYF688NAiEApdDekQbndqqm8xMdGOU5ZwO0sM7kkAkK7ogxZUVK4qQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFrEjzINn5iDnezJhCrcAw62zy5e%2BHY%2F16Mvvv5UEiEGul9vrfcQr58FIGoIzlygqKGMIGDMDT0ta3xAUnEmN6NoM6%2BtKofi0Wz5%2FfBF0MONJSm%2BeSb7Wn2Mq%2BGpuaRKT371bRHj3uiDvL5pznXtriUom1ISwnM5aA95G3ArLTKBMQVRbTI69Fzh48nauQPJuTgHquLaiRiDgooNgq2JKdVPQJwn%2Bmhr3DQDXTmCXsc2X%2B%2FPQHCZxQ9uX7SMgivOnM1t6protLIOkOcyDXo6vHFq25ACBgdfnWSKNCpA9p9jLxCLVXoVzi39XLnalksKE4dEShMJ9ksTdP%2FCqiVhoKPVUpLZvaKaeeMmcn4J%2BfgK9ogWq84Bo68Z0A25ghnjc2xL4GOzd8DHXfsTnxh0Zqy5mRoOdYkQ6nt66DQm%2Bvslup%2FdwrmvyaBz%2FuEtOEhEEg1L8OzCgOaAMU2GHNuy72hGlQFH6%2F70nQ9SCN9CQwMdBLi6gbCJ4B3yMhNXPMvRL2bu0niH%2FeQQT%2BSjYiHlGS%2BZPa3OW0D2%2F%2B0tZfIuCnWd2SikbkNXK%2BaBUWg%2BTkOUFP%2F9W5LF35qRfLrC82ThgYxCA6LkfynKJP0SVI6U7SWkcrkzgKoCpZtYke8LfLXuHakoFDd5NjzDzY5GMJ3dwskGOqUBRwTnj9K1PzAphcwL77AjODZ%2FeNlBXJ7u6QqqOEbxIvpHDtF9iv0HWMbSc%2BAZPrvbhsQ2Vo%2FKqQ6%2BevUD0q5yWv1Kq0ljxIUvQyueOIx4cQVanB3TX0yqx%2Fb2NRRHmwGn8paPJza2XtvlHP0WoNmZ9C2nNA2J6xeXSTOkrXApAZlPnRg39GsO5SbIhuseqTdz8p5g18xC70PmEJkiHHmRrpqKmnhi&X-Amz-Signature=9c32d3b29337c8423d99987b316003aa692aa02385f099c28cbcbd8208bce6af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

