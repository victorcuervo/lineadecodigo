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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KCL4NOT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvKqCj5kGn7r4Aj%2BfX6Kc9ZVx%2Fzy%2BCMEycrW9ugkb78AiEAnc0nBswRSFKbxDOXzcfMNlSc40Oo2q8bG3C%2FbFjvoA4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDHcbm5CxKdntUUbHeircAwNITVgoF9DkfjIuvq315i5TCTfj7MMAfXfaq2N97fUQTA5TQu9rLZtA4ViPgzK0KgkYCdxLMmSFDdlcmR3Mv4gZDocKn%2B7ezY6zdplySoqYZFkv9BSp%2F8ylFTCyzL195LKu%2BUX0DOAl%2B7u11HhETHwkxcYZedH1rj7U9tvHM%2BRaCUbsf9ccbXN%2Bu0rFD9Dg2UYZ2YNcGPKqKEWsw4lwq9OctYm%2BSNhQiHmi6AXjbEVMyk4ZPsJFDMBmep7Yv8H5Zoxr%2BBDG2eobzj3Qi%2ByHa93ush%2Bp0L9a%2FYU0q5HdBUuwzvpw065gMqNkkYKteFlv6aIIPYBGxTXqW2ZMymihJjxZ5vGyBoCZo01UZq0oQE%2FR4YZVi%2BXVEnN%2FvbAJucgnWfUNoZacGVc2oNrhqyedlRepxa5EBo2PZillmEC3DqAD4a3P5p3EjWx6bE%2BbCc5ACucnA3FJWFfgFj9PpH%2BhZpghSnDLIe2su%2F37sJpO9xkBmZ4I87YoIseX4RGpN%2F%2BIQM5R68q9GCDT8HGP6WXIwfRbSSsrK%2BCSN%2FWmBi3la5kO7sjDRwqSMyKmlx3zVtB8%2Fe5%2BYGsu7qr4GUseG%2F6HbvTeFLe5Ya%2Bd%2FGbzwI3qNoBh67s9KbLoIV5mk%2FsvMLz9zskGOqUBg54hv2%2FQeorA4aJY3bCXJUTiDwdiOnwq9pLpUKmaY1mU2hw1wpK1Skk%2BC9TjgAzxPnaD0YUpS%2FOXS3ObgMIu37x5CA4SUZ42DeytE1Ic0QogK5lvA9L6vc0giktR1VBTc%2B%2FOqItmokRNysYeMP%2BEXXyUvgrRNrFtrVevD7T2VWp6bjg26DDFLjlTb7Fq7kg%2BzCnXWeE8JET8LJnLJTckKymQFahu&X-Amz-Signature=44ae308124c210486715d54b059667318f54bbe192e305a70d247fb6fd6ccf94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

