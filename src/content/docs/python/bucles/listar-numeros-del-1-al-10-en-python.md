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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WRRLXDR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQk9Gm%2BdH8iC%2F2imfiR4taZPLDkL44K3Bem88Od0jJhAiEAx62Yod6EnyLeB%2BGs5q0hLpiM%2FVuFRgf6gE6JQiGIcYIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPM2jhaUE%2B5ygtquISrcAwj04PLrzd6OS4b7%2BtgBOpuaNAlMhB8sQgn0vtCpsxZJrlGCaB%2FJlBWGQ4DjjsK1ced1O9k2DiPCxldBDEneVxdiJBLErfHNChkI0mEQb95OOquL%2BS153me1ksF%2FXqsj%2F%2FU%2Fegy8rEzGobT3sRAm173X093%2B0nvwZ%2B1W3wENdDv1Gs67Co4LUOEZ1gqxMfJ%2B2Bkqu7F5VICU4UbDsEC%2FxGMDMA%2Biglp8OTUm3AUo5pA3cfEkLEqdrAmg52YxUryO1wrKHrsbmN%2FyPecAs8ZXvRc3fkvI0fXTa5Ro6EqeWwmg%2FJt8rQch7wPpsaehEQFY7%2F7dLqvRifhbru74Bix9aCTd%2BZaTreTxE%2BY6r5VGP1AJ7dmANTKBxokYvPNU%2FPIXKdEnoOmxkhytTAY4bg1d7plgR84YhJ25JYRkPUoqhkvIfTgRgvQKMIP9eRn79PDBO3w28SF%2F5hnUF%2BjSVN8SbkMOtTlrwN9u0Emdy6spJa4ARqP4jbLL5iKVUPLqqoFY1amDk8ICLyUzAVXmDA8%2FBWmbI0gTMLlsenm3HOEa1axhxDwFH8XMANUKWxqiU18KKVDEvLUF7JYgBx3v1QBzcpXdup2SV0Cv6u5o8ixLL7%2FD9eyU%2BcxfhvOz%2FPpEMKr9zskGOqUBq4EDL3scpp3laXcmIx7Ud7AkuOjpyCRjaqbf1gv06GZ6QXzwcW8qo6zApqbnYYt0wfGGrb4tdClubQf0ZSAtAQxz4fHZFcxNdO%2Fb9%2B2wm9bkAudwrwajVQhIetz5GXOVh5qP6KP1mNjcXjY2fkuL20Xvkq4hCaCOvGLspC0VC8%2BLBe7XP0kh1Nuj2jtmPyY1KHrQB1FWHJIxmuyC6kFtIfUEgVWn&X-Amz-Signature=e8adfcead16cbb52b3f8c4bed5475e398282e80cba424d2c7eaa8d4ab738d5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

