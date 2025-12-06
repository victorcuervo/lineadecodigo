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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2CHPVPM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0wLoSgr1xeuIucFFBtuXzdYsv1IKkFQ7ZjGEeTmKSagIgNQ6Tc6EbnDlbcuFqFtb0DuLoGX2sUYTTuOn%2B5OLietUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNwl%2FIJ%2FPYE4WJFEmCrcA%2F%2FiLbt5olaeXQxqhnKQv5WbaajJktMOBJ%2FOcUPTb6JiHxV0jTlvGea12UCDbQ8fAzyrsQG8CiymXXJ6M4fbtQRVJRCD3BWw0jMICsn8l83GEfgY8II1YrTHyLVK89nYKNkkJUezQiPNBJi%2BkScHhfA%2Fo933JoPmFhePjx7%2BLr0yERtbqWjsQm4s63mrBvBCqFFKKycCurgpJZ80QZzPGnLmntV4Bef119JE%2FxPJ6Lg46nIDyJ%2Bz26wsGSAf4l8%2Bsg3WPud6YAO12PFG5CRPWjuV5UO3%2Fl0Fn%2B0nmPozRmC6I1edNu4orbbCc%2F3NJHG5%2BpYmhIEnwJV8v6qEPu1b7e%2B%2FIyo8KtN9yT6a%2BYovBV0Uo8ddSQOeF05%2FtDFUqRvJP7RkFXJYCsqUmSxVLKxw6FXEH5HAmLD99CgspFa%2Bniz2E3M6BK2C4%2BHQtztSXFJbcw8wO8bddakuJEz9p8jgCo4SKiMwi2uulmD7G9uu3OI5fs41yrFAz3fobO%2FZ7fhlQNephmPSdS5IiNRnPTEoKGvKTY7SxUo%2FBR%2FvKtujQwlg%2BRdCqUCpMly1UCi2302TIAtUdeq65FdKvpVTtBHiaTeqwBVwdjhWSKbrsOpjv3BKMN%2Bp5axLkw0RlI4XMMHK0ckGOqUBqHzB1WdRn9H3Z688g2c3TdWOCJ%2FI%2B6GnYn1GoE4SJ0hY10qOCJA9jQtWGYfUi9QCG3TT1Arqn7WxHdrEr0K5%2BxfCmKFewBZOxTJVM4pSakmM%2B6AYu5ZsUVH0xLa%2B97KF1Aoa%2BuYU6n3pWS%2FunHAaBqkAeXsArrkpjcWWyu9dPmJ35pc2BuoH6HJQIGwJl5HD7dX5wPoizCOT03U8psCMzkQOg0kl&X-Amz-Signature=b8cc958ae6cfad4d9b5044eee228c6c27bbf57224aee13a814b47da33599387f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

