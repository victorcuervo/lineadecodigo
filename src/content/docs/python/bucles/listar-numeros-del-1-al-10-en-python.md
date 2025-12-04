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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2G4KY2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHHrD%2BXnAWCSVj%2B%2B5rQHVohBpum%2FUxrxgl91lniPw6dcAiAazIpwPhUMPJ2E7ah4zOF8rUJHgjEBlA1C2PzHuPY8hir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM6zBi7eOUWM3cdfqpKtwDIEO%2F0AaC18V8JXrzeUsb%2F5AJX8VsB8c2wT2eoOTZSZtdVTSP9sqcxDnCnCD8sTEq7Xr5JOEXPxm2vt0jhX%2BL3DBrXpV6ix817Id%2BdxFf1mojKHBMToN7HpwHG6ohI%2FsmUZFTUAIACftZDTnk7h%2FZuKATzg7HSxjMaklQ%2FdHWlO6%2B59a5tfZ28WPXJ8HTRcernO8NcJcPob3jWRxTq0IIrraqOUw4J2K7ItfQqFmF%2B7hyVzB6cvbFlMZ8wJonvzyGJfW1gASIT8A7RHFqtbq5DXyG%2BK8stltAYsPWv9Wxbh0T2fW%2F2GfNNtadD0DR7WZEaDQiCLhsS59TEwD%2FsG2KTIfFzN09cg3iKEUdk%2Fxdb7BnArnKk%2BxWr5M4sehUTca2Y1JUNhDE3hkWzaKqGewSOc7MIaw%2BgsueHAWK%2BdnZ%2B9QllhYUqno7AV3LDv9qJlmav2p%2FmDCAsoqqLtUx%2FJfayI07zMNgKY4Bzca0677Tuc0zHOedA4v02N8aiS%2FMAUvoaW37Lv8gZeWwP3Icbjw6ti2npwselUdTtf8Pik6DmxRpCordn89lRi7LmyHXykfR7haMiii12hYRDSEvtTre0rDdlWn7IlcglPAV3fP8I42UuBGYVVYql78sghYwk5XDyQY6pgEgKPasMcxGNwmljMCGnMg%2Bq6VGUWG0gizHhlsJCormsuc3Bos4fWFgXOd%2FSrlTLzQ3LfNAdPhJmA4brl6RUUHyhPtYd5uks0wy0CKA8WDHkx6JYK56tZ4FEk94EmYi2%2FiyaQ8%2FFtgEzobAF9xykvM3qGGPVQCV9KfCAy5%2FtlC3byzMTqAho25nywWSZU0PwCvtrNqyGCqU7B5FmN3F4EP6SFR5gCn0&X-Amz-Signature=09c3da1cf82e5cd12e48ec44c4cd2b0267f60d4c9773b4608cb0ea29a3c614d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

