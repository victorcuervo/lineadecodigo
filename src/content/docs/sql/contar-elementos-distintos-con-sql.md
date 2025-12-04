---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPV6JT2K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICYJDWFEQ5qk%2FSo58QF0lDq6h8%2FHkCr8oMI%2BX6PdG07OAiEA8kJVILyvMSFJ9vkmYTsk4NdfBiU5g0tiY94kEUklP14q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLu%2By6ojQi%2FwHoHhACrcAzPHnRIUR5fpUtkpfvPX63pZ86f8n6apLIec%2FbIyyJl6Q8Vsi53g%2B84pXe5Y%2BmwqZhQaEDOiI1m5FAoSLrbztBX8kBQmIhgtnTkdbYM0rIUjCxez8bc%2F91YnVQKZQbUPtY2NdnSEFnk4EWBTbUCiI7klmlKKAjNdeZw2F%2FugyYQCAGx4Z%2B8iqI9u%2FbBE%2BsmVgUlSH9szdBBpfZaIdAVkhPbVN%2Bs9UGvB%2Fp3siMBN%2BPhQFt9W%2B3hxuuoEBMuGoiuwgBFXkPtSSa96AfSE1%2F01PQldVzygXv1X%2F%2BgQz3flQjmdBch0zrgFP53SYKvOjda1cL0IWpB4GCsFFE%2FFXW63rQRUlFet2VZ3gukbHdZCF%2BAAFieMQE%2F2LNlYYpboWwzQKFoJbY6gKvRCSEWNA6OvUDuHzEPUkAmGqVe9ELVKm05u28sxlsU8FZjzDnRmIpRTiAVpGDQl%2B6MKR7%2Bu7MkteYQLbScT5m0Wptbm1ef%2BHCdUaj%2BjIM59RPk%2FPhR2JbVeDoKTvwPfHOFjVTZxOOGFhYfA3VwTgX9woJJm7hBQ9rC%2Fr%2B3K8BpCRsHwl7sXyB%2FSMMapvk6RToRknkdA%2B5YLFhF9F1ZKPKuehA8mZEiFJTbWNrc8n3xf9B4trkjiMPHKxckGOqUBE3WShjfW2wvlEKb9kKiTYgnu9XrX43AxlQJ46qvpzUwzLDRt%2FLR5AyxfotWStg4MT7KbXdm1bOQk%2BYrs39DWwFq7GdwLy4sydJ65DTuBgCfejCnlEDzd2y4PyWDWlwS6%2Fn7rUEKNENjea4f%2FoHP7WBdUOc4A0LtY0hZUkqis6sDhb6f0PbY3h8BWp6zIVwEAmYtB1fbTQQOSwZe18tP%2BHCzxAgpg&X-Amz-Signature=ecace9408ccbf98a079fbf49e4882d2ac7561969ffc067ddc6e62cf4714c1b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

