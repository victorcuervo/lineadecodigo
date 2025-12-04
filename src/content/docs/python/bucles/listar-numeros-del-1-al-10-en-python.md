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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQV3LLVR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHnVtYxDTKXBipt23awFg4hsule7jYso9hXeezLeqWvOAiEAxxOs9sYmtsNBdiovjx3sKVy5vzkHCp3%2ByNq97%2Bm804cq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNHrIDKJ3v1Ay37S2yrcA7mR7rSQ3BXUJOFWdbstXqbzA0eybxxFOcVo94QJmx9aDjdcqWAC%2BDJ1KkZ8f3e0%2FiS2aohkF6VB62tFr6kXdthK%2FM9w5QTVd%2FpPIUfxPfUFmuEO7lKKRdDXBxvcvaSWUEPNZhKRZqUAsM1kPurBBIeFf2jJLsWgpb2IL1NSeHpKHXYLpYn%2FEATH2kpAf88Ube2t6XQnA3ixnIU0lJJc1VsbFdLXQqdJdLPEeW3r85aIPjyavaNTcf5%2Be0LjwwSgvspU4qPDHMrH%2BTvYe%2FfHF%2FCFnDiISjtJ6Rqk5QG2aFmy6Ptj%2BT1bJxK%2FGzp8zlzp2HJ%2B91H6UkjxSxEyi21pXjhnpAfsQun9%2FHWBzphygTP8Eb5BC3gKb3JS10ovFjITKvyU%2BG1F1drjkr8ZAlG3EPLtu7zLBhXNee64Yk4tbg5Deuf1rKwKrMr3eD7b%2FAGJFTLRyyHGbT4uBw0Y59dnLuSWT3gNzXdkAHgJvT%2F6xleR4ZNvCKwx7vP9lVgoBgADr0ZI3uwpjCLecMxF3kxJI0m21Nl486DX0TSxLh5RZHAMQ4P2s%2FhHKWVDrCMCzuTfTWeiqZGUEgfdkeL3U7hbSXhO4nUuTT6r6h5p%2Bt%2FaH9ImHPJVAlzigiJ%2F%2BpDwMP20w8kGOqUBpgWfLevIqGW5NkNoNT1fuW1L5Rehf24iAsQGbpGJ95Zx6uFZnBLF21lV%2BGJsmX8AbfK3Q%2FVdV0YIz7gQsfBB%2BA98RnCrkLT6sts2q%2Bd%2F36XctpG96KgQf8UZuzB7xMK%2FNyhT%2BkCoheN9m85ClES3rcFd9lhj%2Fnk0hDApJIt1%2FK0TXSJaOYpTESTfpa%2F0YQzXgzvuxSn0xIRfabgzzdvQXUD6Koid&X-Amz-Signature=bf46fc1b4f39f4e3750a17de16b15ec679c3edc04a8e3abe8499a2bb67155c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

