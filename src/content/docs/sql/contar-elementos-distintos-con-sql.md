---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
slug: /sql/contar-elementos-distintos-con-sql/
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCR5O5DR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUwx8FD2CakPpp0vLFedOVdLIi5M3otqQLJ52PvVxHmAiEA0vRQT4qKBSZUiuTNAtArCPDNDliU3I6SKn8QqMHRPZAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDzlJiozgp63TPghvircA%2FpeKuieBDLD6C0ZFOrL3RNKaMd3yFelcIKPvfKcpmpejDIC89J7MXaPvURCA6u2OX5sVlu9SqrqzOZYPQ2oeqjaMcoT236Pvn1twkd9d46le0tbAokBRcjay%2Fx6dauwNjTyfM8AWlBt9t8JX%2BuVcf%2FAkNBv5BWe7lDl%2FNtC%2FAVIyZxC15XfkFHPnV7pQTZE2YM3nvhTUFYtMn%2F6GiS4MLkGy291vxv3GOHq%2BIoimBHBkyJaKbR%2FIZrk6vPIz4pOwApb5O7hwZaunPp0hCrGrhSf4JjG9%2BSANC4DYG%2F708%2FQhjwLCkr3tM7stf3VzC2Q90Z5kdEMhqhdY2pBMjsXBCI4kyiKEbW4bSU0pFrQRiQElSm13wRtgoU15cXH2PfvsVoKZmUQyVqWxbaUPO9SDiQy1brLKKbov1SyZyYhKNaWnrbOkNSO67yKUmExxsAXzaStMlgr6MvoFWVkJFUsMwDssI9L6T7v5%2BVCl012D1iTSbZZLSB8ktfXdWl93b%2F1tcnuzWIB4wrDoGwfeLijiWdCceHf6CkSbq8%2BSjTVXHYLh89qP76GmaOPiv9Nrw2p08eb2H6o2NYM17nOhPWLddciQPUxMlglftQchHbFSam0v0FW67Qs20ddmouoMIuMyMkGOqUBnny3HzJKIKSLVyNL9rnrBuW%2Ffr%2FwkgtbdZ8JZzuf8uf4p2szge8fPp0LPm2aVb%2FSD0p9wRcIjrQVvtb8%2FwgALbgKB7TK7DY%2FuJki7%2BPIZo83G3r19HHbG9db5XIyCBg%2BJJkUIUJ97ryBHMzIEbns6JMpRhH4O8LQ5lErk4yOcaZDh7Np1XhBp2au7y%2BWxy38%2BgR%2FjXzjhVIsRQryIcZ6%2BgwiVLWX&X-Amz-Signature=00527284d0afa4e7fd487481ed072b39a799e0c1d0d5cc8f51eab62409515560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

