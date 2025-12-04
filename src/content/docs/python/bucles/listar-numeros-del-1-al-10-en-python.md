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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4IZAPT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDG7mml5H6EM16S4xSa7ZSUaiixrrYJ5me3Z%2Bf7yWyoBAIhALiI2c518W8EQ8O1Ti3cY%2Fzdlvj8AiV9EsaCFKm8h9FwKv8DCDkQABoMNjM3NDIzMTgzODA1IgyH4uzqLRe%2BSomqIJkq3AN3kDP8w2i0LdyqbQbDOxzJKBV%2B3jQeofFZISY69FyQcaWivVOBn8B8YDl37DWaTjCo6fNkmD8EQoeuZ%2F0jYS%2F442Eh%2FvFzS1Oy2Y1G0CiDueo14gNjE2NLpfgmIQPXahUBE09ynPUApNTCsVYOs2ZQE3AYOZ%2FipwF%2FNswijh6XeleClfAFrBxtjR3M9VZtlKxpFLKa63dZIseZAikUfBje6NihJBkQ%2B539TeO4RfTYbTSappGX8kbnXE13ANUF6%2BRrgqQcYwHqdUBL5PoD79BF28cAbYhH4K6%2FwVQ98Y%2FBSFkwa8MuMJz2pla50vTMwTcsxOi%2F726Q7kXWIfpiULWcHkDlYW6u2dJ%2BEt7xBjTY7oLWr7qfd2aWAmG1XOphVOaSqEqjsJ4qj34VMaLHq4rydAA0%2BYD%2B8J4T0pg6C%2BtbQ679UniaHGjRZFBFNiXHr5WR7QLuefMF%2BYterRrsr23WZyZLQHUMEKjQahmZv0qPEKCwq09cD7Sb9iLuFsksQFtpn%2B19TOd4bXsE16LyrDDm4OczVM9Wvnp7PH%2FFXfEUcv%2FOROgiZgyphYs%2F7rrdLofSTRAycX7ajYgv7%2FotpKOEfe2QON1NV7TXTXp0W%2Fa%2BlND1bU7WROfz0%2FRBfTC%2FlcPJBjqkAfr6td2hV2iXELe3oK1h8A0PwaiUZA2fAEfGRszBx%2BYVNGah%2FESIWsfATiJuHB7cFhj5fSoGWI%2FnDVeiqUDCuEpSXUdoY%2FZvolVOBVQupVIt%2FhrEYDvFcZcfyiULvj1hyPjOpSqEeZDQW9%2BVqUFVWigWfQw70Z8g53fnfDHqnX9KiTbnqc5l9GFhTWGX0A4YwPV48RqXONmv1ONyvng%2BJgMTnQCG&X-Amz-Signature=41bfe82d61342d94fd9d7e1fc1c00cd68d671c05e144fff855ec87a2e65d1b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

