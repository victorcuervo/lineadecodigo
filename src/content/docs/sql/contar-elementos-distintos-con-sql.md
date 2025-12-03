---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEFNBU6A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGots4s%2FY0H1K%2Fz2N1d3UN8Wawo35mrJbRGYGwysit%2FuAiBO2XoJvp2BuZxiWrODLVJBGaoVQUocjErJgxzD9efmsSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMgiG0dcMIm8kaxK2bKtwDzWb1uMI8MTn6DH9eLZ3qGe2MXcVfkjeMyrgWNx6yHxApQRCRx4id0LvbiRs6QhgovyyhPEdSbt6O1E9Nx5qU%2FeYnt6OB0nn3J7d2suTxgaOP0Q3Ec%2Ba3BUNNeKVNJGOY24vacLQTDvbW7hDF%2FgdACcPAmeMKpY2%2Bjo2pXlqM1iomdFxmd%2F8XInoSUt623XJOLzXfYRvwYpccaYZY8BU2oQ8%2BH2tbdLvdXA%2BbFIf4IqwwIReOuUo2%2FyCfnhl8qYBlIArAxdkKG0RDM7Ys4Aca8X5lRVb%2F1xQLPbkTnonDaxLKbMnkrQliZx%2B9RWFXo0%2F24VPQrhjMQVKwkqYSXitdgf8adFwO60%2FVJ30J1TcS0wNaqeozF9PO1c9s0cXsDuJ91y1sAJtTI7UBnYHlwud0sBoLnazCQoAiZVtGMRPU28NUapB8pOgk%2FmydEriZhgVMYLPuGnkL4ETH7XEMo7arpOPR0qJrlxC0%2B5KW3xIJxp6OF9Pp0PcRB1xpkq3q465nCjani3YVa3%2BXrmcEAUKomCTca95N%2FwzP5KeYtWwZ5b0Cxdo5%2FaKzvjNXvAxtdntC%2Ba1tczON1drCic4ZLtTfKhw%2Bn5WH7z8%2BQcA%2F6O3OvT7LPL5Lo6y61libUUAw1vjCyQY6pgFJU8gga0WxNAeNr%2FiXevoDBriOLYZoV%2FPBhl4XnpsFxUtlIv%2FmR5Y10ME6Josmj%2FMH1d3G1F15FcnkMPdlLSNv9SGYRUGzj7RneiVHxPceuST4rJcNYg2AdDyz4cPpQT5kMZMo%2BAukNwWhxkYZzPlMzmgPfODTkpTryKu%2Fc%2FMxhHdRPRcb%2Bf6A3aPYDlmS%2FDxxNj2OsMLuu7TpI%2FqWcdnwXMLsETF8&X-Amz-Signature=c6df4dcf5a488546b050cf5b47b45df6f273bb0264e55f7649ced9fd07a855de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

