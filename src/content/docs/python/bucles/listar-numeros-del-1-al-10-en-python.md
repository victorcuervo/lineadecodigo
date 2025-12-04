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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPU4TXK7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCH2BBdd4J%2BQd0roPHk%2FOOZh5DbAp7DKeyhk4p%2FS7oUywIhANIxU%2BFEw4TYPjJfTXxaMlH6ZugeVrQ1QB4ueUugXDg7Kv8DCD4QABoMNjM3NDIzMTgzODA1IgzWjLGEFAI4NwkucU8q3ANrvdJSy6X1eq5QafJw5QIsCrKF%2FAyZ5%2BK8sbGt2JN4Ud%2FEjFbdXHK8Kmbd%2BC%2FqJj6ywWp3zPORBqqrSkHSPaVFwhOFhReYIju7e1%2BrfJlj4mg%2FceTDkNxhtCFs3iwLyf196gpwwyEZPREENrhQ6S%2BakLRz7%2B1FuEMf05zr%2Fk6vAlORc%2FHHCQSDzv2sUViSPIErpzHsFPW3l0UmL6rsQX2HdPpvGa%2Fzx%2BYrTend3hpIeOoPbCMdrPdliMA2y7whdRxw5SNv8SmpogdEsmFtQu3E6FfBhPPF332as6nlEP7PwBkQyWDEP8CLtXFZG7LUlKYiyM5BoHhUiV7q%2F1yeblaYpy%2FxSVFZCLyfNg6ZN10uPl%2F%2BxYfNRis6AUuXqxmPfEhFuCZtNUjZ%2BLoNkXSkeVDKMYpqyOn8nUHAyldUDp9f%2Fzw2tQx7QG6Swtv4TLI6w1G3Iu0yCuzF5qZXihEN%2FTU7v%2FwgLFvHJG2mfznxgJVxpmq6qBDECQ%2BSCs%2FarVMRLs7T%2Fm%2BBHQq0AQVniG%2BPZ2mEsoTZFD9IIqcu%2BYGHeeK1rGjF5gHfZoYy0O%2BhXB6Qi39PB8WHzeLOi21oViAr9wvHyCxHyoA8jLENT5J3MkY3cI2HdJy1iP9P3mm8wzCvrsTJBjqkAX8MfherjQ%2BJBhu%2FDGBHsZSp00ltSLQoEhAIKTXEImVHX3RxtJ%2BLU037WpnL4erlmCc6qr5nagE5GlqpfdfcrJiHW4B9dWBrmrZiw%2Bnu1mlUkP9mOmjeD%2BlGZNBoJsb%2Fa9tMTucNoLPPQE9pu1czkHV9hZ2ZbhIiQg2iOVWCVdtnx6whHrfCJpNAoNp6%2FMpH2A9iLSQP%2B5mh8bASHUyu2Ti8MnMr&X-Amz-Signature=5230793d9b34749df6d713cfbb7d567d4297259c8f8199aa94f04788c2b4c23a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

