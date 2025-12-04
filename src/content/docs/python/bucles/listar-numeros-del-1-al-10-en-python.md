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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X44RSKAJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIB%2FBsB4TJplqmRYVXYzSulo4NHX%2Bc8lsmWnhaQMCSFgaAiAY8NtN2Rns7q%2B5P86ZqNQc5O%2BXnX0c1%2FK46qaQ1%2BZ9RSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMo35%2FZHbR0Ct%2FqDDiKtwDmOwxhPdl6o%2FJYQBUfbd5Npl3EpYqxvaeOQz7SoaQLqlU%2BCrFsjagKVo%2BPA%2BR7tA3YhMRRt%2BqEj3ojKX6hGplwgPQcBWuAcu96Ehn5CHHe2nzgpGzF9GckzK0r7IrNP8jnpgYU5dKdOVeUO0pQUkHDFsf4ogbYqdAHk7%2BnDcxT7DhecC6H1rSRihmz7kJTTx68gS6RBGaQj6H2sIGuL%2F2pM2b9%2F7%2FjrO2xJ63RdCi9S%2BFxPcuioK6dkFyYZbpGVsjAoj3xgfe1eRjtvvu3DCOFce8nadtYLM6ZEkxvnJNjl%2BIWxgWrpuAwcGvZ9eKGaNjFg%2FXhFllnkRZp8MfKDf0DA%2FAQ%2FPN86YmFEFCAS4iIAScrxQ0S4aPdR6qmTvZ%2BdK18R5kNBqfxYSpHiZsLJuyy2kIb5%2F8VI5PlblgUCUsfmEd1Vz1jqaUKDE7YSC0mXROTq9HLaNDUmbprANoSoL%2B00uGVXUXoJ44YxozxboUDXvu200TJgxcIyoyqOeVA%2FUiFNgFmCFqKbsWAiv9TopUgAOCOUiYKk0uCrKIklaBXHn%2BWfpty5uoChxyEOpjvRxi%2FzVvpHUuIOkseFXJfIB858nCBbAvhK4zN0GukaAibz6jfOG0HjVhzuR%2BsFgwkvLDyQY6pgEPRgcfKQen18GO9%2B3VP5WvsPCBdcIc0gA9hKBze3ElenEBNCoLt0Gr5lh8EQg81BCdh3rCShuiIosKf%2BPNkcSdH3VCnQcqGDpXcYMW8WbrNmaCYM2HrOJtrThzQqjfASLNN8uqGDW06EKgjg8Un%2BSSn3KaAKpcqoQNTeSXOIOJcerrR7ELoiljlhRP4Zmqvwlt0eQRI4JNP6CJLe2YUn8Ej8hUQoBa&X-Amz-Signature=68515ec5e57498ba633ee4236cafdf7ed8fa8e459275ee8ca86a89934cbee32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

