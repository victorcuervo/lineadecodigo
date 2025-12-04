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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XH3JXAF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDnY1ArELieBTn4KQWHx0cy2BHB69Jar4bCD5ar3XhsUQIhAJweKaSJlhPIbXyfV%2FCvLLWHszI8JIHr9P6mCHZY1GUUKv8DCDsQABoMNjM3NDIzMTgzODA1Igw6JZ0Eq%2Fe0OTVhcl4q3AM91Qg9qkCK0WjzGJBSP90a%2BxkTJkkbsyVg62zUvCXTCj%2F%2BER29ABWMO%2BxSFVECR8BTVi4q4W9phfRLmtQnICvs8Y8JuaIwzPbcjmu%2FgbXl0Lv5jde2oWJTtLNajTJqWagTf2%2BhO2cnfM7lQfrd5B8bWopnQlP%2Bi3M8vNI8WFeODBgFalC6mnN1%2Fe%2B%2B4Agu3WSl%2BRYRLfpPEPzLJ%2FUSnmIyb4W4Zg1CjZSRiMNOuS4yxyLLB%2Bpjgu156KikPUVUihgz0A3pyR%2F%2BU9x8%2B3WFhQvrE35o9n45bVpKAwNvTY7NG6P5m6ql7wNrRa7Pk75aZ%2FUCfa%2FMU52bawolTSg0W32C6zYaTSLiNrN4ion8f4qKCMiEezM%2FvCEWUahevLFj5KVLmmeXot59B2tbVet0uCUFA05POT94DLSnku5QAfEkATt1BqnBrXT8PO03JsjB3jmFpbbfT3sRLQ9Q9bU2hYEEPuUAHKRR92WqSVqNWAmugwCwSq3HR5DMafs6QycZwVFOnTG2vRiOweDBfiCR0qvBU4MDdFlQpK9fkHFPq38riFeN2khS%2Bt%2F1RhzxktqXhDHxFw%2BHKC4QDkm%2Bt7thzeZMweYksBU4z%2FDQYT8ETxyo8ggcbXNUVy3zlPlYRTD41MPJBjqkAf7qLv5QVPamTn1C3wWynC3xSA5UqtOsNrxyhjtAEHC8fzOnT90DVOc%2Flfg%2BbM2VvaE%2BR6kcCktVGQVZtiOVjCvLbr6woPYkZ4O6fCXe%2Fxte5WaddC4MnGv%2FGJmhuu4GMNRu1drOtFpHa2bRnlKn%2BQXNsEucC%2B4TqGgUPTYDa8E9ynlvkCVPud8oGuOfIC7pfevSuv2W0AHN80TWp3TwruW51nEr&X-Amz-Signature=8b0145e548027d5e489024c0f87d5496a179f05f9a9f3dda7f69c77805692726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

