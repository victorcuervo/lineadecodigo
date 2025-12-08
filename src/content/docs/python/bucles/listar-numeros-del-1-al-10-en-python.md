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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RNWO3SV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrsySBHHWW8%2Fa7sQn6UxxZWbmUwXk2FHJTA%2BgqoBNx3AiAXgun4BASEyUFCfr2mVqWtdQzErtV25lIMy3Jfj3zTbiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcUulAky6TEvPX57VKtwDTLneT96z98KjAZQgI%2BMd6%2FbSDPsNlt9j4iHMXU%2FQuAeUHPX7UozgzSxJmInO2WOCOFokp%2FdPeiY%2FbRIi5ZInJzRpAx4X24v1A%2B2BzvcsCPrrRoxp%2FVGiM2MAFdgB5x0eLnbOSgHtkN%2Ft3pp5%2B43tS%2B4BuI%2FZ1vThURftglWgkyqCbzPLzAmaIqLk2Bu4UCVRORIJidJ3A2wTAE35aHRmrUGgq2K%2FRB94ac%2BIDrjGGWJBYSZcXiAN%2BWhslieH7T3er%2FmMV5CUzpgKElbpRZXi%2F65WU2lCG83BOFFGxueZsKo1zap72lDlhHnSlAy%2FDZ5sNR%2BEMI63inpOchZeZLCFZsW1EoY1MgavOBWgR2L1wJhOgik%2FVloxCpMloNiHPxpUlOb31fqka3HLKWAKBGb5Z5uTSEc%2F%2FNhCx%2BxAoyR6VASporu4LtaS4NLFAHEaE2Dd7%2BwEP6%2BkTmxoBl7wgguAqO77EYHTwRgQ4RE0RWYu7XggmHsgRGCJkoKSuPpZ8xHc%2Bntlp0n%2BNyf%2FjYlkhyZNVLePGT7TUfcz9njOeOFuy%2FrNWgQ9rvV9po9L3pxAaVw%2FUlGwZxHNbLPQjQMvqMDCgrNV402vaJfAyCL8vCk5COwE1%2F8mw2US%2FVCf4Qsw7NDYyQY6pgEupGiD21x0nOYAZSQuka0L9GoKebowmTg1Uw7C5XdFywtVYlJmn5%2BmrfGp%2FcdeQa70P%2F3kfdAcgHJ1Q%2BRuPfqYt9HxInGioSC2Owx%2FWpSlLeEhnjBaJ84uhweRtYZzAbg3c8SEI7UWPobDD3spLccqKtp3UK9piZ4WoGeYdeUgfKQCpBUab%2FtA78yo89B8hRKvslFHZJnu%2Fgtjf8%2BbCR3M0wqWcMHH&X-Amz-Signature=8ead38173e906203ab376a0cbb7cf868eb5f23583192630659e5722416663292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

