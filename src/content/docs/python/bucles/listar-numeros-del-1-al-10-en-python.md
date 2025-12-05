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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4373MFN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh5wiKzdO8zoVZvkCVHpLHhTOhOaT7kYvFNbIElC89bQIhAL9c4Aa0oJji5DVdQhAP1%2BAcGYk8eBvpl6EM%2BIWNJtEkKv8DCFsQABoMNjM3NDIzMTgzODA1IgwtbFPbjk%2FX%2Bx1KtzQq3AMn3Wrux0PfyP%2BuDUTWyYWs16WyrLNoLLtEh7T8oGxRrsRkILBo7E9AVWk%2FSL2wjfGPY53TvYmmvFtwv%2B7%2F0v8CQvnLvUo1rLCkgdAFv37wDrTmln0qqeSxVgZLGJKCp1%2F5V1l3iMEJj0F4n7vvB7BfJUF1FClVSQIqsYwlhAaq9G%2BtTGTJOr6KW4Yd%2BiaX4DxFj5SAqLZDJZxfJwXurKxCcy3DrZ1EHcA%2F8Qio9gdovWd56KgfX%2Fht7ZEOGU%2FXV7CtRn99Fo%2BDaDWWiLwqmDVk%2ByqqopKDYljCyUtmC87pghyEV1aaXLW8zsKnRuXPLN8iEprBf0RzvAnl3ziyXbMe7a0AqbmXRn%2BKxnoMV%2FsP8oWWLjerZNUyP89pkFn4rpsniA4TlXnF8a70OAnnQv8e9Ds2C8yknpLVLing6AFKJmZ9yd8dHcdsEZ%2F6%2FCAUGiYZhO%2FS%2BXIAq4La1VNt6JC5O7Bf3NMBmujuV4BuSKzhMz%2FQC2Rj2OK188PIEMM8l7d0ANeZYT%2FpDZYdQnKOVcfxunXOSuptKPiy1S88SHNug8Yc1ELaKa8weZR4RjqbtRwyE8vvPld27Cl0zmTFcX9lUoBBcjBT9do4jB1BRx8aUX0CVCVZ8Z7dt7gZMjDvzcrJBjqkAbgtlVzQT1ByXTf66QYYhECoC4hge2DW6dTSg%2BRE4NRPsOZC6esbFGZO0VI83%2FWZnwAa00eIFQ%2B2M9ZEGmYuV6u9KiNeZ7SN6mPuNf%2FNRSGx3jpdnV4U189x8HQvllJ9DQsd5eoPyJ6Mo6hbXwPaR%2FrMBsvbo9iVSGlc4UyhAtCQTl4sIUKow%2BHE%2BhVj1XT1YY057oCLswQTBODQNEIYrp3kJ3me&X-Amz-Signature=2b412b4cd6f0472ce7db715c7505d713ea9b3b1e18590c7bcec80abb9ebe417d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

