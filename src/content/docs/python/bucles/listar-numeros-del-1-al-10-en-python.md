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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFKTJQXL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvNFmVWAlw3e0qYnJfy0mapZLo7NnxYRG%2FgzYbA7OILgIgbcBe04%2FnPmmLFy5Mvg7Ze%2BoSb%2F%2Fh9sIsPU7c1emkMCAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEM18ztNopnXjEOeiCrcA4fu8VDSul%2B3kYDRCVq0g3kNhqTprtSvp0AlfZwOldIw0aiQyh8kKe8SKtB4LyeisPmmYx1sDFLiE5DqHvHhuOm29dWdJwRXt59ifsSBuybhQfZFjG4TOW22cgMN%2BFgjUjLh3Y206IZWoSXWy8XpkOzUsYaZA1jPYcl45ol63oZxgwi9NM0gVDe0bVBHH1f3t9oIB6f%2BcmsQoh5d66m7bbbyE%2FQE9b4V%2B07yj8b%2F1CDlNlE0YUDKJ1Uh8ch4wlRpWs1MI0SiECP0SCiHppYKOWdMO6Hwyb2%2Bq%2B3qAJ0VpcSVSSnpmOF%2BE2MsbajnwYjebf5d73WF6Zxb%2FBNu1RquY4Nnka9mIvilUSy9Mr9WW1G6GeWWEFJTVjL6XeordDiZ%2Bx%2FXt6oJY9L2FDxUwVTYnWeExdWSDtuZcw7LfeXaurdY8Y1OvokZdFSAnJ9I4gSmsjXCjEoAPkKUQSCJoPbrtMVPu88ldRG0pDG3MI%2F3mX%2F0L%2B6%2FDGCLnpTU8L15kKnVUxCyIo%2B9ugAag8krmhPpT6GDFBCyUXqEKKS5fKLbVlNEYzf9yE6%2FpI6DL0majSrIhqsJZIbuD1ihG982vjqXJVAU0Kukfr7qViuCmLCQT5ZGl5AKHzN5kVrq9wEIMMjH18kGOqUBgkuT6FkLKJ77ij%2FMEqYqOyPaoriony91s8VTx%2FqN3luS03LsrLKEjxx4IZ%2BtxC5V49y6h82mT5njUxzMqN4RhGLldNXmQnfr7KZrbloaEPm5Xlw1RNp7tFMEHNwslAO%2BJMbm8klO9ayz8mL0lcj12cm9hgvyM2z9UhBIaZSS88jqBcuapW49q5E7QFGbYeLUbpIqFsgzq8XKqF%2FfJDPzsreallvV&X-Amz-Signature=cfc6977c29dc7f9736fb2c7eb07c5c513384bf0d0416d560a4719da5701d9107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

