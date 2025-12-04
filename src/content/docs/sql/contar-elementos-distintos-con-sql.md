---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGRQZBL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCa5t%2BJ6pJ1r0aktzdFpMbuBwxydAcXI08z1SLRpDupoAIgJRRVNtLOoTHDh5%2BuCZXg43vTyUkvWX6rwQlm1HjBVQQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLK42ZOz%2B9ZDUVO6VyrcA14GyFNU1LXyluThYqf%2BxhnRVi6pgJmR6mAL7Mc0a84ZK2kX%2FPfLwk62waCP28CZXNxbD2Zib8Ia9ZW2fyGQd5LdiJRMEeLuU7%2BtqIMqpkXgSNEUlI3eFeEzugyKYwg1AGPpXgkA%2BHROj8eByOnZkD4bxcPDxJ01YQepZdoYVHsBIdpSRfMDNvKAASDnlbaKqSA80Xh4BW54OM%2BOrxyP0axhiNU%2BoEPQioHXSuNGbT94uEkQTl7Tnm2tWqTXSu7MpTQUkbqLTpsrsiu4%2Bf6JwqMMjKcWd2LwrJgOmDESTKR0WyV56zq11l21bEkUuLTgUYB5JzMcZguLXBU3FICUum%2FhK8JVoxj5zuZsCmXQs2P3KFzlzP7AGJ2aO2%2FIrn2pR5TbZ9bVmS98J2Qc2czOGjk2xi9H9OioA23BRI%2F6AlsBdbjh1diW6tdMtlrM%2Fserli%2FcnKBj3uSjOG%2BxSl6QJB8aHSSKeS7NYmeCYSSa5dgd%2BgEQ%2FE8Pp7wSd5kSQxhGEgPyUYl6Ho4o%2FFeEzyxhpFTtHHBBrocrC%2BvC8i%2BqotXV8egyvgrAs7Ppvm9m%2BpyP2h0S2sN%2Fwhifj9fbxSpxAAu%2B8JVcgvN86UTgNJHNIYCs%2FWSImFLHaxdXYjb4MNXnxckGOqUBTlb4%2BCotTQItPTZvsIdnah3vcXMfQRqpzz2qV0M0zUYlOF%2FkHLQQEgIFddSySfhwc5mBkGBOglmYwFDqCi38hAS%2FbJbkklypiCTZFD9wmag%2B6ZVcdSoRjv5DVoLCNJNYHX8eKlOjebmICc5KTDo15fk%2BjDolEYH29y%2BtnWQV6c%2FYWqwLjslOTEj1fgVZt7ZVtWq%2BrK%2Fq25U7pdbldd6xTe3YWFtj&X-Amz-Signature=4db57e00023b2bf1381b1492807392c33d81cc4a43558638d1aea84e8a709ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

