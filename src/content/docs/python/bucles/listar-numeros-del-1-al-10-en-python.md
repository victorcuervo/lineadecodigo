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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIPCCGW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1NEbWEIz0gtR8aAXjlTCn4vd8MyPJfArXCBE96MxsQIhAMhuGxl2HFQgTtFSEx412P4UTJh%2FkrYOeQMBmMyVGy%2FNKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS5P%2BXyz%2BBdWY68o8q3AM6Py3%2Bdo2ea205DjCFSI74DTy2vm7n%2BGKkFFbNZNlXqx2EE1snHj8zxCiQFAaWcOKQrOHDWnSNRp53VYcleZ2cbrtfZnVt2sT9ieWsQQBfigrI1fezvNAtK3gYKUtqskn8detiYCDYwzNoDdAXZZAqJyaUxcNcasY0KqXjLFW5bKU5UZ96L%2FK3ur7m9lJRqXWX3s8NIzd0SPZkMQQIZaSrax3N2CgxpLiFSTE%2FSNnpyoxEIuvdtjuzOheYWXAKc5lUqa85ii5zkzEwdLbjWp5AU6IE2Tat9AY8IXrpocV5EYyRhOqcxcub6AKGk%2FclWWWZdfvziDhbiti%2FmnQLmiPe3ET4x5tSCnlgp8u9dfZha7EDL7F%2FMqzqNPnifDy30CobimCCP152SBNtiJCnG42GIMHoCJTH3qbz7uoBgb1QcW%2BMa5XwXV7k1eS5763XbJwj2cjmAf8%2FFBX2yoi1Fgv0AdWRlSzeS2hErS80hAfX7A6vOP%2FysXM3mesgjXVev5cGIfkxwbKw9rMe%2F3jlgP25WAEfCQV92hCySy206Kxv%2BzGeyiaPZV92hGmbm%2FxazY6UjTUphPFC38DIxDZcJvHwDdMtaJPaSDxZXOZusjoXIG5%2BFqdPinrx3NfoxTC189rJBjqkAXEKa9VTrN2KvTGdpLAyqugNpqv53k%2BPEYUKWt7PF1Oj5WTgwgGKkFGXX0tY1D3N6WmzTaLaMc5BPjVKAbe5sJeYLPjHlDzGub0zxfONRUCVVyArexao3ySr8bYrV0rOi9izEc%2BNu%2BuzfaD%2B7Ze45U9SnWlSpK%2F1lk110YOBW87d%2Bvxes5kM6kSn0%2Bns%2BVw6aGqnDEJaI9zuwRmg4B6SQVazZrdz&X-Amz-Signature=33d8d4cc26f3ff6594e0904ca7efaf3fd095484cb692dab074075b1d217aedf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

