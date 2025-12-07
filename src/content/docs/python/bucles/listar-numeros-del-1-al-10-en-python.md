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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABCYSFQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCCU4%2FE5FYGYM0%2BpaI0lHYRkvTTPVw2am5Q9JlODvVnQIgZA8aREe%2FTUHLDUxBvzwr7LL%2BgM%2BSrvbCrMR3TsGFpdQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvTokLC1c%2BzZe%2BnVyrcA7ynV9eAEYeb%2Bukl70aqaxB3v5ZOYgk8ivxOsql28AV%2B9JNNX5tkYKaAojYZIY7FZ0cupwXNdhIB8fcJCaG5Yx57e9K3%2BGOodb9U3suF7rm63Dvjf6j%2FJ%2FXHYCUUt03FxvSFEU8PDYwMKTqa%2FMNc8A5i3S%2FSnlX6qsO8vq9UVoIC4BopCzPjiuZQka2w2XIfQzP1Iz6JXk%2Bvmg8c3Eqx9QgE23caKpHZlY2HmrihbYj7w7MZpwe%2FTb7KNWTA%2F3A%2Bay8dXsji5EqZArCYBpe5%2BfP%2FfIa%2BTddnf%2FTVvpcgq%2FL9VD1%2FFoJNbsb82UC9p87JTSeFyP5nGJqlDaEMbpanYtvv6cb9tNl6vt5FO390pCd5BRe7OpHH%2FSo%2BXCZTGkAp%2BX1QErbG3CISa3%2BKlxtf7SDsEi9RSz4pq69UuPx8H1U76TRouJhl6rfljUpoH8wFdFq3afkpERYD5oS6yJ8TAWLRWJO01QmroaKY%2BeJlFtHdo2ZiOlyC53vioLzu3Ns1X8As%2BYQWjHd%2BhRiox7S0KlMJLKtL55%2Fwupkjr4ZDB7eQZyVDvzO6msaDfl7hc3ecvmsgeyIT1iwOaOgUKnXxLmsEZx73rAq%2FcLnpxLtdysFn92rOA5kkIZx8SetdMMbH18kGOqUBymynvVdGaT6DqrSXpXFkZ3MtdzbCJT2ExuAWpwKKXHC4Xd8yLoUmblQee3%2By0lVTpt8yhQ8vqGKJx78G6SKs4xnR6DWxgo3W21NZzmP0l1FhT%2BaMOvN3COvhIrYqW5ntq%2F4mTBPS35VMSn4tVFK%2FdkowL7%2FnZlc9VGXh5zRg2O0KXE6NBY0poblYlO%2FygdckOXGoi%2B6OAhV6yLq9P08e6LjvnqB2&X-Amz-Signature=99d265e00c24b8be7bd0e8f8ce0c8973ef6621325252f10ea79612a9b4e4acb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

