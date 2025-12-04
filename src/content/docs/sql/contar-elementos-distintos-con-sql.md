---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP32SB52%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDtCBTU%2Fgh6B%2FsMSS8Bno7z6qRhu4y7K%2Bi5f5FNXxqQtgIgD1OX10VVd7Uek%2FG0TxwjmZSKfsz5hhfKAIhxCAjchvsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDA6CJsD0uhDLzdr9ZCrcA%2BTJ44O%2FuBr2Za5bGzgwKI9zeBBdINaqTC00tcjmvaswDMGD8mm4VNnhYxJP8m%2FAQ27%2BcVJLyyfWSrY3tQmfE4QSG9%2BtWJce8mCl0bU30%2FtYbO1eGfKzpedakCHMmHsUn0fE4Bol7F7KtgymsB42%2Fg3mm2Zp7XJaC8VL6Cfl%2F4kH89Y7l0pmHC956lnaF0lECBlWO7ogPVacayneKSKEJ9vIv3O7cPSfVUSBbESo%2BxvekCTTWhH5ebZZLZ%2B3b2qS%2B9OFoRdyv0g9xJn0umjTn8ZUxKy9vi42mOKha4kr%2FJ446GPr%2B0qdEPJUIiE5VRVUMdAm9ufrYW4L9bfKPMMJ6jA%2BHxC4YqU65WWnY0FAP80RQJpERCy6h63Unl3Vxm2NWT8fI%2FdiZMTHG37F8fOEMZmR3wal25TZQzWherj5x3x8n%2Fk%2BUw3YiXBu%2B1jGxTy901EiH%2BGGH5ZRcvYC0plvnXozwmI4ECpRx%2B%2F6w%2Ft0f7iQw%2B25JPDM7sP2oT4FWg%2B0eWO4dqJTNdf7dAljPUDzJv1ucbjD8KODgBuQi95JAXaVo%2BhQaF0Be9oNVYdM9tiAUtE894OeSJaw7ILX3iChz%2Fn6haQD6XaMR7ilfyAOxj6l8WpQ%2FmyU%2FE1LSMSWMOXyw8kGOqUBnpKAjRbXFULdQh1%2B2So6eEn%2FEOD1t0uIvjYuuE0Fq10iTPRTKNMnZLdGMBPSNnPNiaiTqCyN3pB2eImgEFufy%2BkLzflullQwomYXTXPvleCO7urTwJ8xfAO5zjfTqWBeWFVhk9sluHL36QSrrRHcZLCgM%2FkJKM843B2Y%2FbXjglDuwpJAtp7R75RBA3u4W5FCIYYyCpVUrFe2CRHt0kAHEbek1eE%2B&X-Amz-Signature=237b57f30aedca5a81e1eb20bf6823d4b235fd9673954e05813259c938305c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

