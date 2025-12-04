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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIXNTME%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD97Gh4TNNvt6Xe2%2FJuyh4XjNrQXGF%2BARs8jD1cb7%2Bo1AIgXLatEIab1Do9yGDs6kT7UH48tDTLDRmdZC9Or1t1tM4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMsKaAS0rQw9f%2B856SrcA4uyAohbY1gW37D4kSWujN%2BkrXi3LQVA77qlSHnvZdZjTo7yFXIPgBizYDhZll10jS5rs7sbAVc2w9ve0uSIz9SstBxEsULiIrUHT9OjHR3BSvuZ7Tjr2WWe4uWOrNp%2FWwikzsa0ITK2pIX21dD89cJtFbJP9ZALd0PcAj2a7ggweX3TdJei8Jq8%2FlLJWtBhUDiEyf6jVnuS7S%2BeB2JrNgqvTOe2Gh2JUmRMddZG2sYG9k4ym32UEkevo3tRuLGSX4K1SqK8W%2F8kQaJxZxCNQfgZpUGRRij2xuzcliscq9LY3OEzNJLQmjzOSD9wuLvfnwwVnR5aT4LYHAqRFnGkqe%2B3UYAXCfPB88GeSkszLOp5e%2BYwxwcENc9KtUstR6Osmp%2F8Ux08gKWyna16aQxZSwx1%2B%2B1HH4CgYJOWX7AdElGPkwUbPgHIhonM2YqNY4B50liRFIbjdFo%2B9C2JlUFlZ4q%2BgKp4N%2BHETGfb3sJfX6JFFX1zfGMQ1hwnXivPuKmDjHMZUaSpGGI3EPCKgsZJ2tM3GZ9WqszebUmnZSSj0tH1JAisXQbeDlRDWr2THKdMwSUgkPOAyB3uEknfdBLuvrfodVNLDMjLGr982bgt5P%2FaS%2BRCqcckbJLLVNcOMJXnxckGOqUBzX6lWKY6pXJEyumxcTO0R0RvpULVtXa2eVvOCjXyuHINwMou8%2F0mFth8EvTr97DMVLYaqSUsZ0%2BnV9qG3ulV7qxojxya0A4FwMfBUAq7CvgrQ%2BcRGIWN8pJ7HtiHq5vqEZzCZK8RgwaI47J4Vap9DZNeaAq8xeQr7J8%2BjLir2QyV3y5sHSzkNxeGvUoUXPI9Tv23JG08Pa85kXoQ14KmkFh0pHQ8&X-Amz-Signature=f9b3572f5c66876afd4de550dc4c9984145093797ff539015030ccc2161fce9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

