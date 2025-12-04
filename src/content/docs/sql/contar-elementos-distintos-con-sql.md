---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GXKM7J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIF8wVzNxeKpY%2BSpfrI3zBFGV5WEiTeXrnxEAp6W%2FeiNrAiEA5y5db168mIgFW0RRaZdNp%2Fs6yKMx47DuprXEwzesQYcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAVsedsyhtb%2F1ssz2SrcAwWl2HHEerfpwcAi%2FKcrt%2FO7uh6lYeXtRGEx6Z%2FHR6fDEiBMhdXq54MUlV7JTO84V4arAx4EdIpBlknX5WiE2EgtbXiFehsR7z6PCANSS9vD2rCkknV1hCMd%2FsHeERNhgLDQSmP%2FKls0GAz1vhynS3eVBswnlUDoDv%2B1NLDewBGMjZDasdp6JrEPPY2%2FnMHZkkj%2FsLWnhgCXHbdMHDdyzsLXUeMi6h7XH%2FI473QUgpbg7i1b3%2FH9DXpPY68aszNnHLJ7ggu5yOnkmIBavvkBEpvcRy%2FLJ9AZaf5prnNBj0CIUDPEM0x2YXqDuIv9n2Uk3ZCQhVhD06rY0PsrIls%2Be6ukc8YX50x0%2BcOargOaPNaMbDlYRq8BvVuKnOrCAAwB0DtkLTxmPeyl9vA26eW1kuD5FWSdw%2FAOAooAEhCYTjblnNmzJnAyzqorbkj7jTujdwT9Vz87%2F062F%2FreeQZEZRp229TEG%2BkX%2FixN9%2BqskcL568A8knDe9niDgdzKMr6p6IKUITw8%2FZ7BidejVoRpwBkoMKGCihQZYAfe4JNFXvn68r8iMvV6kCc2ia%2FXk3%2FjeBEaZFPrPr9Rxlm7CAgFIhTDPnV5ZywnHyGXyHAMfa0Ty8e1l%2FmG32ZdRwCjMIiGxckGOqUBcTsDFtYloYFwxHMufszjzPq4034EqKtQiOYRQn3THypKHBcGoU50pKuJcnmU%2FPqhKjWqsBpoGR%2ByhA4kjyVuwzIw%2FDWaz3O1EtM0MRN2WUbKWMrDr%2FiRzfavAyMPEtdNPvbaFRg1MEsIGwe6nL0Gg5QE0GU%2BW%2Bbz235C4KcRRiN3PVnsIRi6hZYn7v6S7fCw11aO9bKx2dGBM74krmNyw8LwtahE&X-Amz-Signature=444793fbaf73500ca3473c39a8434ede5dca17d7833c8a6d9d3b4ecb0e23369f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

