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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY4AH6EL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjCyWvnglAIVPzKo9BnPssTFSVf3RP%2Fzo8hm84OfJzZQIgfO7WCFAJ52a4v5l2CDv7URfmjk4%2BHi%2FH7wqQ9Y5K24Uq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHCwJ39x%2F2uK7IVFESrcAyI9NCdudPWPMqIF4TFExPW3vIhsJUWCb48hv%2FiX%2BsKctmHMqzohdFOO1%2BW4DOTrFmhh7hX4Y9CvJ8RYbfPoN7fPI9US1lBISqhUVQ8e3hSm0aENrYpajoC5HBuy6%2BrCRERvQP%2FJEmlJCdLPBNnl20i74XOO5Jg5JQp6W3WHI2o4lUMWmN7XqiXL%2F4fOyGkjHYhUPTt%2FBHR5%2FALWve41Xz0MrfJxAdCpVI%2FMjVkO4dNiPWrQzqry9ory48wbmen7X5E0LcrvnIwtu8Nw5kuFIqySm8FU%2FF2uX35jU1qVAbA%2Fw%2FDgiIcaRm8ciZTVtOfyGYtp7pAO36tMF92L2pvLYmkETRIFuSqxEI55BsxYgrTJT%2FdBW7I3TpWE%2FNwvVfQ9o9BJrvaVWx68V6h1wxWyzA72DFOl%2F7wn7z%2FyItcZKMYOeH6l4IEbZp0Mbu8UNb2MRz5WTeE2rQBaAq55Ko0xuk4ySilp%2BBg%2FVCH1slm9tuzMw5g75q7x9nMxraiiXNhfTFajUiBfLmPjAISfNjrSbHjPWLmmljPFb0vk70mEPHN8ZIJYpoPNPFtHWt3uJe8zexdkeNYcdiIZObCdYdoax%2F4Q0GO74naPMzFLr%2FMMbBLoDQ7sT1jO02UzS%2BY3MIeJ0MkGOqUBror8SinjAVxhZdlx3sDnFzeU15rP2Ugv3ooYHYUXL91RNjPB4EGOBI4wyPNmQwWgVjr1xL9Zai8LhVki7yBM2K0FEy6q8S8LTnHPlAKqaMaKEv6YaU5ryxUFcyckignuU%2B8dybF%2FCjQQTpR1CsIdJR8dbFRZH7j9PSeVWxROlteZBeoiiKhN4t2Iidx%2FDbh6GPmbGbrio51QIOBFVSBnfhmHCeDd&X-Amz-Signature=2cfa8bc78ec79858e1faaee1734a0ba97e0d05f92be3de74d36bd81ffd50d6ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

