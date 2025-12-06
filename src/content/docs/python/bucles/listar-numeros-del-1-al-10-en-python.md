---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXT3UDOV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtU%2BOjzZHaAuxjt8gFygd6QNfcTv%2F9jvHMJGm%2FPmDScAiBJBE6V7sTkKS%2Fy9DJuWyrpuA0goCkTdv3NM1rAJLA4Oyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMEVWOWvHJ0tOy3jvGKtwDgVwakveifs795J%2BAOFoJE%2Bz693eR7CHPcvXzMc%2FQTgy8cHonruho5UHMXEk63niIIGu6cFmC8ELIZvVWRWiH3uyo%2B7T6h9Bwy345Xaksx1kcdIozU0aUbL1J9bDRkHtWF1zO4gEZsP6%2BXOq47asjodUQW%2BN%2Bw8bpjxdQeUOlJSVVQK2UfSN76YaZVpWAGxEw9EuK4qqxW18PJatF3KTf61kTEKeiNwMAHX4ZpRv5cYNyYJ8y7iIrMwfKOXCn7hcI1Vew57VEkD1YpTkUso9ZzAvibqZJwtMNCnWtet8SvcD9rrK4b2YHbJsMvLeI203%2FZJnU1h2rngePxWXYb5igBmQtMBDz5hsS52Vp6ONO7lOvdTKQD0YWZWRBeu3l9HE2GP7ee%2FnvTPK52tblYGQSLr4Y226m%2BQ4WC2Qwe6F9JWaIEdXixPN0MLH6TxsG0OzY9Zj%2Bi5IH6FupuMuPB7DG%2BTtNfe6VIsKfwDoZDxgvTgPa2YMf%2FPzg5j6LsOzfr6kR%2Btj7dLG3zttBhB8imSWWmAPvbjZu6wMqeiW9lLX%2Fhdk%2BMFMywLiiBlQth2cE4WpAXyfNq08xczVxbuFLWOSJkAiVuMySGDiZs9q0Vxdbivj542%2BtucDuK0EjADUwgqfQyQY6pgHCDVok7ajyTtcSMk4g%2FtdD9wTW%2FJkA9WviHvcw%2BX%2F9fsDhirHSUV%2FkXITLmomqHk8oxI7aNVyPKfl5Bo%2FS%2BoveG0icEQlY6FckD7O8LVFwYL5tVQOrzzLvjGROhnau1EJauSR9UhKkhEw2f7bCrWODzK26l2f1232sPoxcc72zj%2BPNIUEHPrSVCn2zs%2B8sYkwqULkbMqV9uNB5U1qiCquGkgadIcn%2F&X-Amz-Signature=3391ce32fdc5a1ab8eea8af18a30d078442a4fd4c3f1e8a9784a61a0813ae79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

