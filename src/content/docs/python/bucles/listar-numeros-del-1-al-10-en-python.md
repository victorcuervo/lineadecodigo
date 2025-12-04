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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGFETW5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoM5Zx2%2BWQbUMhj1ycCc6pM%2BSaZzUHmppIM6nymvmwQwIgGvs7iUkm21%2FifnZzZZqWG4XLOpyrbb3Gn02SY5ZcrRIq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDK8TI0N70uRlTTSubyrcA9TkKPSb1OjitSELL%2BoXYb1ZYeJrZ%2FCqtNl8fciLjeobxwjzBBpvGkKoO20853U9IuVfcrLDI0TtE3g6ZIAJhfQC4x%2FQ5yM0YQfFWzSNMDmTqIkfgJ%2FL9w5Vy9RYWLIY4oKKgJLMPU6NoW9cl9hDeBhUF%2BoIoZQ77QcWnI0UMJMQNWWjlbXp14f92HB%2F5w%2BMsqBWBOZPlLN%2Fd42rW6r9e3WI5nuo1Z4zzzlLNxRDH%2BJlVm0BzETqDaaQFxUUWIMfXDWwjRjJEZYDLDkFFFH2ti1m8EeqYxKzzQIno%2BcYghTz2Wrs3aVQ7UGVGa%2BD1UgHHljFv84kl7oMQpKuCF8b%2FDDinIeJoQonIOEi52Qh11Elrz048t8RS07RaJ6rDVU0tapDfvQcSUdI3XBS8adh1mpN%2FJAIAwEF3burdSrcM2x9Bx8iDmtD6fql4yidrTUIv%2BTZNR6LDbVD%2BPcg7l%2FpyVzXDwD%2BpIS7U%2FLhH3dIGGabpPoVKWsaORIZGW6Uxi9RoqVWeuRo%2BzazuI9gCi9%2B1kITU%2BU4PPEEgWu053GQZJF7G%2Blz%2Fisyer6Rrb%2FX1zHqCLW2Wllr6eJ%2BDxPZGahv3XtbNMJy%2BV1dSm7U4BP5HXJtH3ypZJsxmdyBJstcMNjcxskGOqUBnZQmc%2BRa9ViKFh7KZ2a4nzfxq%2BcDs6jBDTmZiNMLf0pyCtUBa8PobyRdFu2RfT2AKTk5o%2Bnzq0O3skdB30%2FW6yP9dua4MToD4vTkWG1%2F26ltYEUlhHjjiA36ctgd%2FYjP5mv7q%2BGCD8Nmg1bFwuTrqQXcOnkGqDTVfoXuH%2BW2%2BciBVO61aFMTEHbi8Vm25HsitOL0dd644MuwKDqKSkukvWVyUyJy&X-Amz-Signature=c62d4599c7ffdc4bcc71d8295bbd77d14b3a00acc8f93703700eca4c1c90e4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

