---
title: Eliminar etiquetas HTML con Python
description: "Utilización del módulo re y su método sub para poder eliminar etiquetas HTML con Python de una cadena de texto."
lastUpdated: 2023-09-17
slug: /python/eliminar-etiquetas-html-con-python/
author: victor_cuervo
---

Seguro que más de una vez te has encontrado una cadena de texto con código [HTML](https://www.manualweb.net/html/) de la que quieres extraer las etiquetas [HTML](https://www.manualweb.net/html/) para quedarte solo con el contenido y así poder procesarlo. Pues aquí llega [Python](https://www.manualweb.net/pyhton/) al rescate, ya que eliminar [etiquetas HTML](https://manualweb.net/html/sintaxis-html/) con [Python](https://www.manualweb.net/pyhton/) es algo realmente sencillo.


La idea es la siguiente, imagina que partimos de la siguiente cadena con texto y elementos [HTML](https://www.manualweb.net/html/):


```python
codigo_html = "<div><span>Esto es una cadena en <strong>negrita</strong></span></div>"
```


Lo primero será saber cómo puedo localizar las [etiquetas HTML](https://manualweb.net/html/sintaxis-html/) dentro de la cadena y luego eliminarlas. Como las etiquetas HTML se identifican claramente por delimitarse entre los símbolos de menor < y mayor > vamos a recurrir a un módulo que trabaje con expresiones regulares, en este caso el [módulo re de Python](https://www.w3api.com/Python/re/).


Y es que el [módulo re de Python](https://www.w3api.com/Python/re/) tiene un método que se llama [`.sub()`](https://www.w3api.com/Python/re/sub/) el cual permite realizar reemplazos de cadenas buscando un patron. La sintaxis del método [`.sub()`](https://www.w3api.com/Python/re/sub/) es la siguiente:


```python
re.sub(pattern, repl, string, count=0, flags=0)
```


Lo que vemos es que los parámetros que espera son `pattern` que contendrá la expresión regular de la búsqueda, `repl` que es el texto con el que queremos sustituir el patrón y `string` que es la cadena sobre la cual queremos realizar la búsqueda y sustitución.


Así que la idea será utilizar este método [`.sub()`](https://www.w3api.com/Python/re/sub/) para poder realizar la búsqueda de las [etiquetas HTML](https://manualweb.net/html/sintaxis-html/) y reemplazarlo por una cadena vacía, lo cual implicará su eliminación.


Pero, ¿cuál es el patrón para poder detectar un [elemento HTML](https://manualweb.net/html/sintaxis-html/)? Pues ya hemos dicho que los [elementos HTML](https://manualweb.net/html/sintaxis-html/) se caracterizan por empezar por un símbolo menor y acabar con un símbolo mayor, con cualquier contenido dentro de ellos, ya que la verdad no nos importa saber qué tipo de elemento es. Por lo tanto podemos definir el patrón para poder buscar [elementos HTML](https://manualweb.net/html/sintaxis-html/) de la siguiente manera:


```python
<.*?>
```


En esta expresión regular vemos los símbolos de menos y mayor pero dentro utilizamos otros símbolos como son: el **punto (.)** para indicar que puede ser cualquier carácter, el **asterisco (*)** Para indicar que ese carácter puede aparecer 0 o n veces y el **símbolo de cierre de interrogación (?)**  para soportar si hay una o más repeticiones de la misma cadena.


Con todo esto ya podemos invocar a nuestro método [`.sub()`](https://www.w3api.com/Python/re/sub/) con el patrón descrito anteriormente y sustituyéndolo con una cadena vacía. El código sería el que vemos a continuación:


```python
re.sub('<.*?>','',codigo_html)
```


De esta manera, el resultado de la operación será el siguiente:


> 💡 Esto es una cadena en negrita


Una línea de código muy sencilla, la cual estoy convencido que utilizarás muchas veces para poder eliminar [etiquetas HTML](https://manualweb.net/html/sintaxis-html/) con [Python](https://www.manualweb.net/pyhton/).

