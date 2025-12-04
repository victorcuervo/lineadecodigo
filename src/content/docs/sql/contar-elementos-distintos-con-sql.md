---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLCF4OH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIAz9uE9z5colFpAOpKVUnB%2BRH5FS8FuA1DbVvUUWpYqwAiAvDRBE%2BufDJnMwtms5Wm1hJFHWy5cP6z2nbHJPQKWtZCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMRzEwLNzz1J0EfnDlKtwDRexD2L4dIIqgyDUjT%2FwbRktCPOyjKq5aR6oxCMIA58RzG2cLlB4kKMlRAaGDXMrKVlHMphhq8ymZAqao%2F2cyHZL%2FIOyGMpnfMy%2FE%2BFx%2F01SanqKDZTk9yditMoNJ03l06mxUf9p1rwaAjDbaY1NOplhNkIG%2Fj7Q0Vd%2BTN%2BAitkAsB2SszE69AwQZEWepM5BkUhssY4i3BAZYzKhYVNKnZcpzGQUM%2Fs7u%2BwPxu9FA99d%2BKS6ZckHcuE9Ns4ZvCD2v3sMfEe069Yk2cRsXP4%2BV%2FrtmLbh%2BDBJXQvQkSThoNO0z9BT4jeJZsbeS%2BZ%2FbQEdVpkCiGvJ13Zm30uI3khESqmSejnS1t1UfCmcPXvkMz5h7wk8YnVLmwZy1%2BtfLunH35WVUpDp%2BcGQZZUvSvJ%2F%2B9Rr%2FD7NR3ijDIyJrY756Apzbo04XNra8g4JYrRYpcqPGLx2za%2BYpcj2IFJOQjOFp4Ioga5fIqndzfVQUZTA40cl7asAY9J29bPQAX8aBL4PjViTctv1cGJXiU4oc%2BSp8sYzg5SNEOpw%2FudQ3dUz8JPqLYk%2FCyhUggZy08mauduvawZuuiCzNfh%2Bcr%2FhJMGmFXIS%2F16poI7%2BVDCDXBLsWFqnA2bgItV%2FEiETaFegwsefEyQY6pgHJS8EJ6lgx%2FIz6Btq6DVShRtVDcMLTuhrzQzah3d%2BYEDZ059MTVzqNV%2ByyHuOL9eHGbbxFHyp17RhVmUTOyrR96yREZKYR4Tp7rNlnrvFbR6y%2F8YLgAQI7wi2jokpNhmhiVxDaR8FZU11up1XJvrPk6rB%2FCPF9gqfLyXdQaXspRJF1vo2fQJzBgr%2BKKY0q99r6lm4DVw8EnhFL0vAdOwpN5RDODhqE&X-Amz-Signature=aae72ea1bb9908a1cf53ea93304f4dece998e6911cb910ba1e0a59298ea360e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

