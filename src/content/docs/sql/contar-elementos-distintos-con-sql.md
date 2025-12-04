---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYJBWTZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIExW2MW0kmDRXwoI%2FNIL9fdEBb1cfJ%2BtjnU2PegXkPO6AiEAgRXGC6TphoGn74U5Al7BtqNnX4jFwcRafeBOc5hh6tEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHIF1wIdZn4VL3mZ4yrcA%2BvpWbW%2F0rpJK1SGY5t09BdMWCmfeGpMyHsE8MPfjBUIWz2ftkV8RK5Tfbv6tG5MZAlbnE9sKYLmvJkneciMq%2FNEFRt8dJGzkTd4YiazFSL0zV%2BQ68n8f%2B5GvG1OT%2ByN1m9qrFibnj7%2B6QQEQI19VzU4exft9iUYJVuvCPmNdtw3Cp6QzUcmArsUvG%2BmamZMGL4rhvaxLS1trEB4ritqUdEkNqUqwlaBdFBb5aSdbJLi6HeE7BdbqwS8hyjIpGmw31PvNLSm7hwWa6v9s0va1dbjigp7WeZnvRkZOQHCwpZvBw6VIuBi4cw67nX4Ivr91VbNtrjvxO31f1DYVd%2FEnMEL0U6NAbX9%2FP%2F47J3afRchkky8lXwls5eKakDPTQ%2FHQ7TY2xra%2BEikHCu8%2Bfl6zq7vRs%2BiCj8I9L47I%2FRUkkE%2BLeF6HZF01iR2p9pVxS2bDv88uPdAUsaZugQKutjDd5J5aSQvQrnYTNnkUhYQIYKsuoLgs9S9TVqdBMOZKr%2FqO9WMdrwc8NslQE47kt4Q5G%2BNdldWEu%2BcX2%2B5wkKIKDt0jvm2Jp5CoVDt7AiJXN3MEZt5%2Fd0pYvujf6Sx8EA1KsM2g%2FZs7GeLjGuzi8Ur1Mya8B2TejvXeeOjgV7DMO7JxckGOqUB8NrMD46UXjaqie6m%2BiU3OlCzvTD3QQGp3SMoOiQYgXaGmHPeTPqZv41i94Wl%2Bs0x67HbcP9ObRyagw8i7rUgpCr5swRaZnhWfeqpOTs2a3dvta8NODhhu0mbtlUCp8DTdA3fulvQSdcF%2FgKLDx3UO9Hk6zyjis6otE22Vx1nF8vdMU8uycGLg5Uk1knL7ZRFnUQvCjXDpGio%2Fvb%2ByM7m85AazB9A&X-Amz-Signature=a1cfabc97e64705a64635d263e5fc42424952e56ebbd68624dc21126c375e8af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

