---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNCAO55%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEG6jG17m4UO225AZ3O7BI9KjBEydE5hQEqOLLyKLuXDAiEAw8im1ZXIr2qB97M%2FxW1U%2Fs6kWlPh7WiRTHuqIMMiLw8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDL6q8v83Gc5OwPqWryrcAx9w%2FDL2vKaYThV7p2MUxrFCEiNOwld3TG3c5JXXIZX06dyWPYM2ZJefGedVSou2cifCHAQVPn%2FOM6VHUAVVOruijD4zZ%2BYgiJZ2T43zOZPexT9eOWl24Uie%2FOyv8QVURgEzI6Ev9nNkYWEmXGvdrZvgESPfBsLoXn4TsyxomsgohfXmrBX1iVPaJvDPSpqR9dUpd680cZzFyxhD42ORc6PON0DJ%2BjZ738wCFuUgZe%2BjOOgTY1fQGjPDv5sDw3XE6fBg7k%2BwUMx7rw0PJp7p0%2BfrLwsWER6GZV8y%2BFPCb3nLStPBiGqYRzxZpEVO%2BNIvLw7ntEHd6v3urpYXl5d8J%2BG3tk4u5emAToKxMMtrrPNJ2gXyXzDGCMJG%2BG%2F7rydCsPngGrdyT6pFJQ5H6nrrA2xmGYGmFugsYGXxEYAXSiYxQNKGdbf6Tv9EUvJC3il3o93QGOEi8Ny7GYkbKfdryqBJ4PlQp%2F8wDuz3bQS4dH2gPmQa6UAD%2BMmeuE7ye3q979TWUq2MIgnsDeR%2BsCxPv20Cv1KG2evzs5xNtZ1tK4vbP0IF65w%2BDLu%2B0jN4yJiOk613IhqemMR0XLFt5KZP9mkIXDHMFvywXO2IG4jFlFgcbewb%2B6s1PRsYq9QlMID4wskGOqUBpTMpLunhaB71cVl7rtGL4MOeCjRknCuYBbk870PY0BZAkRO%2FeQTlnSPL8sZYKnYDSizF%2BZER3iIOF3baGtAkhhdEQ8vtYPcFApJS1O0iU62GGfvZSUmcc9RCRuBNh5HgYDQS%2ByRYBNSMPYdhXC12zyCb4z%2BAqNLVoF%2FT6wMNg6be%2FgdFHaW7zziO6P54Xg7xPd68NjX%2B%2FgpCkg%2FRtTQn9PScuRpF&X-Amz-Signature=2c589718b0ca1a9b5ee6092de4fdde99e0c88b0ac7d06745f0bfa67039e6543f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

