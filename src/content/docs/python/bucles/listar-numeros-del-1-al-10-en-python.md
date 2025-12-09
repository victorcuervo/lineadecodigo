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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2YTKH3I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX7xQg%2FWMHNojrOQ4qj96NoOnklSkSn4kWaw9J8fxlYwIhAN%2FDygR4j1zSzVq%2BasZzTHksTTzFKuLYyGlmQAQoCa7WKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGRaKlPGeQnrbl8N4q3AMTX43K858VGMSSCWa1gibIcKNpcnOCedyOpkOdu4ynXIOKoWey0GHBY5zIcOR5QnX%2FrIaS3yG4K9%2FtCPfPKq11YeVLTGVjX5HOeujAxqDO8kIu5YsIbJUAcm715pry4rSN3I1%2BDGTCeeCt6aA79n%2BZlmoDHtwlyAG0V%2F59ZOj4Zy2N7koNF3kuB9rNH%2BbiQLj%2F2xFv2gn%2FIgfLmW1H2oc8ZP2tFRy9Felcqu3MmXFMM5ftSH1825EpKuKNf%2FhW8VrHYOewWG8tVlBIGs0Xe2vMNTtBw%2BRWPy0JCVmu%2BXpFwjIWDySUJ%2FFdFp4Hc1oULD81tDvFa9m0ElNnR8f6ostrq9y%2Bb3wyitSq0MPD%2FRo7aZvc7VOPjZ5TldwCmDOsy6HxGgM7quzjLghB%2FYlPTkPjXRJvXofvapoQZsGIb4HOzS4%2FZPJ9g62SPXLw9nY40fzAJ8NvZ%2B%2Fm3fe%2BLQE9uux7WC81G8%2FyjdtJmvOn1q2B7vTtZU9j13GcGXbYnW%2FYsI61u9IkyIw%2F4v%2Bt0nI4uvZTeTAwA6AMekJkzVvNS4dZD0vjdRj9pMHijZeIkBTQyaMN1StR6faYWQkxXozr0nPUKruvk9CIQAXA3sIbjDNJeN%2BbrSPH42oKBK%2FPvDDHpN%2FJBjqkAbK3oyadXMpInGAiJVMHXh1LVc9iUln2Nrt%2FBx6UU8wEvfNNUvQa4F5Kiyfncw1E%2FVuEiRXtCRsZYj58WR%2BUEXKIgDseq%2FtUMFP%2FknZ%2BdLEw%2BOvRaY176SSxnDmM5Q5Z2xSxfGIlAf8SdRimCCVeq8Vy9vGJ5cYAdqpOW55Ijsiy8DTt0VyWU6zM5Y0wPo85Ji4WLtOk7kojKwV1DusV8GYhkUT7&X-Amz-Signature=c02da984b7ab90a2e7da143cf6091866d6d701d85b397658f2fec3eaaded9747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

