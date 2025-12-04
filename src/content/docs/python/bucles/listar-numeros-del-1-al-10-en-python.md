---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6MNFQLB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgU28jBzLTgbaEdMjb1zDVoD8wN3HeT1%2FliLzSo6O3WgIgYkY6O1ENVA7HnxCUFT6yFfk%2FiS%2FT8NVp2RsYsqV09gkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGHFG1W4iE1n0XXleircA94%2BytHp4jm2G8rqgjQQdctJ3LoxcUcLMaF4mVhheh6lje01ZUGjbu%2Bg8IHEPxuzp0hNth9tVqO9LySzhChK8%2B1MfYlQCAMoNrLt2IqkToVP2mc1WYZBA5CKgsCLqOvAQepE%2FKMppwofbhMnWaD66ULcdgIU9tEYHdMsFbF4n%2BN%2BKYeyiHOaFuZ1QtZA0Bw948%2BXAlJ4np1Gn5N4W4Jh%2B5CwpJx5eEp59olaRvx96LNlig%2FjhUghJRZF4Ad0X6Zrsg%2BdiaMlFLnN1vMgsW3gbxIqVpBXnZ8FYN816Ktpv6aM4UeO%2FhUZz2FJYek9iytjAn%2BzE73dUJSMmOH4bhwrXbjbXcwoeISZ13%2FnyMETLAxeU%2BYxIUsyGnUNh0zhWzKdFLXg7yHubM%2BO%2Fvmt%2FQm%2BNZ7vtM4pg1ez%2B6ykw%2BzCiS5KfK8ST37H8WCfVaEX3y1zgIqwwOK2csNlrpA9RgG8KX4%2FKsbuD%2FlDxbzgpZdRDoaTsVprGxwWDgp9TZzHhuKKOFNhIG2qIL8VsKXqY2U5754IUL%2Bkeg4hExjLMNrKvFrmOKrCM6vGI9IBeBO4iGQMEsTXFZteHi4MJbD4IcxPnez3%2F337IjC%2BcfmaPbG7J6mMk3GiyWPQ2zab0sUaMOHcxskGOqUBiPyhpkDxpr4xutmmIgshI2z4E6FHiN6nlw%2BfJ621TcHcJFJQ2dNZBfbT9TWzE7o6l58guvjEz6x5C5fqHFXXe9NsH2abxHNBuZTrPbtQ5t5CmCLqSdzq7YyjSDLb8BefSbd8cvXCKqpkc8eMpSrs6xCP1lMPfNh58R5YQaeK1W8meVLusEgqYqedx%2F4zyS5yMKjqLOPaaBJ5v0nk7Sz57n1JouMS&X-Amz-Signature=3e34ec2862edb42a9b04e6e15bf9f29c2f64f475253188b5e6ae6dad47eb21e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

