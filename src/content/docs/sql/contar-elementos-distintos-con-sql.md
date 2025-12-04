---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG4RONHS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD3YscQJQRiMQvFEPMedVNMtzzrbWMFqkQ9F4M7CS%2BH9AIhAKF2Wc%2BJl2lg5VMk6be4053vz%2BVCNxBJ6xEMoVx%2F0d%2BKKv8DCEQQABoMNjM3NDIzMTgzODA1Igys%2BtF2TYg%2FbY5YlQAq3AMXRNFws8u63L3Y2Nj7bTFYZ5H%2BxTfUR7Rdq1z8wjt5ekl0Tmg7PESSzH%2FshPupae5bJXmSmxkqEybikg7DO5ey4%2BtKxK7V1Z%2BUv%2F7woY6Nu%2FL5DE2Y6aORQ0aUud1QOYxW0l4wS5pvhifZHjnBwM%2FdJP4tw8R8owN3ayfS%2BTWrl9dF2ivAChhvDL2uterjZqxlaTTZgRQsRDeqLx0QXPggPMuwgUQ6RspQg%2BmWhY3Kz6NOq6MkQbZxpbk8toalk9voJXJd6ik7P1O7y7WfsvcWAp0S1t0lLzG3dzEnECd0pSS8YPSTjFmupzBGZTCRrCjFE2V7yH1LVNQzaEECiv%2F7FhGDmZTOT0e%2BTr4gesIf0Bbgwum2qbKcVwyzrEL2dU%2BUl%2FrHHP2l9J%2F8pox4PdvEL80a0jnMB%2Fydq3zVZ84ShIpI%2F6sz4OFJn6E1YJ3AqjldDHlAfIWrwMPrEGnUEx7Vwa8x3fvgagJpZVp5MahDNsaBFjId%2B%2BBZd7Q8q5kHe8oTGL513DAx7vVygw5YLs%2Fg%2FAxFML7MP%2FAoG4X%2FnlWEVdfNYflkd%2Fa9Iv9HvjFjtPn%2F%2FC8Ewgp7AZKzQC%2BcyhQaha5%2BxPeAh5Jvl2eSDLppJz7GBiHTI74AH5NnlTClysXJBjqkAdN9BHcufPCGRhaxycgK51mWlFJ6wmKbP91hEC6h8m8b807vGiSSfMoJvwBNpWHconNYZw9%2FRQQnT4Qksf%2FeqtpI1hP2QB04yM0dr9uXYCCWc9tQ3abZabtdtmDXazQVO0Kb6TK39xDJmprJ%2Fzo4HYp6%2F%2FZo9zv96E0xBJ09PwDVyGao5J5YfDHgChSJJk7VIp9w4HpV%2FfI5XM4MPz5IaePdX2QC&X-Amz-Signature=5af345b5abd11f9c89ff16599f1ca624a37245d14f245b4bf5ef71ab36125751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

