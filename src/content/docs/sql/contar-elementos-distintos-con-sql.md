---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EUCFRHG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDbofrXt5Sqea1FMBsuvireutJhmz8k48FtBdgyDnbxAAiEAs5C1F9JA1Lk5ZqFhlVCvGzV1xH2JmtRrftrQsPc4SPoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAK31EVaf%2FFQZobs1CrcA3F3GwtLKUgCp52wJF35Y9jtiNoHGh7ssUkpsDvjScdJVaI0LBtIn9SsmRZLeQ9xtbVR279ersd6m5YfMqnKDyXY9ilc5CPddZBNxXe%2B3tH96wjM57%2FIUT6Uqj5oGoEKRjRGLpenV3npOYzDxdjzkArofAGGN897QAQwnUrc%2FHsQ3oAJV8yGuf4GjvOGBigG9DvajVo4hBjVkM4DVCaG8XW3Xx0HMrF1uM0W9NNFtVILByFWJz9WK0jBAxqoPOqRjXUO5e18yPtwgHV9oAhpyQuM%2BO5i%2FMHUle8DE9k%2B9QvON7DNZuFHZk0K9tfkdivBGuLyPdw74oT8cP3VIQbkMOtiH0i3d6bgO%2BvEi8Vg3Iqq9uFHCgbfva9DLpaimqTzhJO4BptrUb2VMqDeCxK1AcAEg6a4FxrUIn3EPL3EEffl48rDpik%2Bprwikop%2BnI70fpY3OoOE5iMC%2FC%2B2Ur6S5RWSeD5VMr7GmgT%2BDHPQpjTLuMPIHKVXBTXUyAM3p%2FtPt%2FG45u9xF%2BVOOiQpLHNmW1%2B%2B2e%2FMdrrAlcM9x3hVIUdxaUGM0JWrAIRoe18iG1Nm13Nf%2Bt0CiEiP%2By9q2sNpgue%2FCZZYC5eTVjYReJKmYjPkBhFw%2FOGVfKKrMAJkMKrcwskGOqUBnU1BPp0kM5aD2toHcUq%2Bo2JmnG9%2FNSTWwlOzWfeojxQhO0e1Uh4nFy%2B38BCi%2BbvM0v%2Fr5ML5RjDW%2BhpoiTnbJs%2FxS5ijg9LycvclV0o17zcrmLAlR2FntTFEZOSMPyrYdFztPLQuk5KTaUJK%2FFgchF974pvuZDsdOVkyGC3HGYJqifEMyEHo7l6ZqDRafRMUVlTIFACSmV%2F8ovdWKFZ9E7ALSHva&X-Amz-Signature=8a32170ac7cf03142903c73614b6e1e36e28a422313d1e03d0e4ea8dc63db679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

