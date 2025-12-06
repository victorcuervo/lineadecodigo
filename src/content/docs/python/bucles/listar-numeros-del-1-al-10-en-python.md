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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDP4GDMT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmlgA4dN%2FxMWGhxgLVMR%2Binbz55IvPDrhRTx8jI4A9MQIgeRjnNPRsEBfhleZnbNp7OJGdm0sXtZ4sjS6B9IHbnqAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAl23B8%2FtnKLl84V1yrcAyfSlFdo4j%2FAQ%2FBywD47rukzweafsgNBE3t2eivNbLCGEyGRmt6uA2MUV99i%2BxF2rCGK4ApFyQZuZ0J0DpaHNcWDcQvFcpRae7rPLI6HGbhLrJjjW%2BMbtitI2n3h59sDaP5qvXdxWa23EM%2BxqoKtHETm%2FO4hj0agSkcELqjox64kNXI53K8GM8sYU5XNTpl68DRk2fg1ecrIk3MDV5NkIibiRJSE1Ml067keaNLjEUaHwXzOgL2oMpmE5mh3JtTNi0zMB2p86a1RhDqeQ8uz%2BfQm0otYdpHm3bFzrrb8XvaWHB5xuJZmhddc%2FNjCIt5oWerAuoz0VSSlB%2F%2F9UB5dSlcGy4anOZfnH9kYHnJl%2FNFuKBHpu3KxzDZ4rN82n8ch4g6Fuq3xwjgcXn6j02dQfrzkIId7w9tPB8AdWuhtJk0q%2FXqv%2BL%2F%2FNo7Yzmf0cK8AAhcvXdE%2FUQGH3sbGB9MOAQC%2FKV9SzUH2xB2ytGN6TAfx7yAKtr6BOLin%2FzOcaOJvbY79qu7YFcfKeAXcrv3Q02Qpq4%2BbJ0FU4OVUL2nF2jLwkl%2BxOh7fS7UAiAAYUm6HiVH2zs5EEYdKH0jUfhH3d52WfLKyF5mNmYVRfHe7dV1P%2FaLoXnnaqq4h027qMMWm0MkGOqUBRlHBnlEokmcpA1b91ewdoKjNxJgGdCIB7xe%2Ff%2BySvS3JPiphdeW24T5vFwA%2BJJxiYLjYIDwJMUrEGgyCPWDQTPMIFB131hYl2o%2F5%2FMckFjTIte6M1YGTEAIILSPpmoIChha%2BizFC%2FgRokaTDhn7K%2BK41mKGR1jAgtW7Mzncp70GCIQ91i8jLZOKVadQrbRuIFBTiCRaakA4sD%2FD88%2FPsO6Wjb1zE&X-Amz-Signature=0967ea1aaab77f41a5439cca19ebf957447bd26e510551267921f19982d41149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

