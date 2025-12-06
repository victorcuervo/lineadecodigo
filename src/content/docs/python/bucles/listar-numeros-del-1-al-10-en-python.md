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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUQO4BO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCahYvoIFbVS867V2AspBvkuTinrBnrKi8SJ7l%2FK6jqjgIhAMzzJ%2BpHmTOQZtva9XmDQweM9wkdXHaRxZLxS4K5hpooKv8DCG4QABoMNjM3NDIzMTgzODA1Igxn%2FO6ZOvGG1EsqljEq3AP%2BQgUzgnH6mtaIcYnpcMcJoxD3zg3Az5SEputdocEnOwQJ%2F7oG0ZKeea%2FT033zZXvZHoqLUo%2BXF0zl1OD7nd0vIqKV23c0rP3jK3qyX3G3cTdUZ0ozEKaQAwzLq3uBvJgAIJug75y%2F5oLRpoLMukSXnw6TCcAnBKSADHSpCXjwuAm%2BjzfrTuA1F9UHGDjZZTqltJTVM2%2FrENtvtgIfwi524dEgw5SK7v%2BIqJxbGKdXO0VZy0%2BR5VI4Yu%2Fpz1pTHTWvOpBuzInpKwhomqnkqvVfgUO4z0%2F%2BAmKMmJlOUcy0uc6c5mZdvY%2BrhoAEjjYff7I6fNAaSSf2v2XgXYPz1jMOouu0%2Btnrdx1480cmUJyfGb%2BkDCLeincCtTAr%2FsD%2BQrvRN9ikQrcJdsiTwjBeG86uosftp0Q5s%2FnazAhRD0skChPXyL1Uj6ghbdJU2AfXRtEJIvK2fGbuYxnhohCzzl5Zl9tSWwtULKqv9wtqFQ68E4SVZ8sUcvWq4prfmxdbZ0txv97qqXByzVjHcBOfK5xdhNCW4RqNuCdTXE%2BZEQfDlKt2xkIQJLzF%2FjihWU4QyOAaQBDMHydBlT3fD5Wo0HisaBlmlDJr2C3e5MIaFhYYhy7nHQUrX6OqX%2BHW1DDW%2Fc7JBjqkAUXw6%2BChTq%2FJO1xqLU0zPKxtZM5yNpXl3fdnas9Jt3CGvdxJG6k6BaXmdKCr2YeQmLjwUw9tuI7%2BvaDWOc1i49eTMYrbNaiY%2BukR5zfQFUIL2a4eSJTG%2F%2Fuq3tHNLxyeo8UpSrhjuVBQdyfPJ4O17Yb8Pkx0G7NnLTEErCyxxhgtJFWLDu%2B5%2BNuQ6Pot11mHxUl6Xq0%2FzZHbg6FtxE8O%2FL%2BeV9fX&X-Amz-Signature=38e320e08ff30642275fa00f192391f7637fb5f99a996d964c84b31f6663009c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

