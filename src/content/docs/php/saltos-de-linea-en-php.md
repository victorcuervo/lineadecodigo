---
title: Saltos de línea en PHP
description: "Si estás dando tus primeros pasos con le lenguaje de programación PHP una de las dudas que te asaltara será como poner saltos de línea en PHP"
lastUpdated: 2023-09-17
slug: /php/saltos-de-linea-en-php/
author: victor_cuervo
---

Un artículo sencillo que tenía por ahí guardado desde hace bastante tiempo y que seguro que sirve [a aquellos que estáis empezando con PHP](https://lineadecodigo.com/tag/php-basico/) es saber cómo se ponen los saltos de línea en [PHP](http://www.manualweb.net/php). Ya que seguro que cuando estáis mostrando vuestros primero resultados por consola os salen todos juntos y son difíciles de leer o interpretar.


> Si eres una persona que tiene un conocimiento medio o avanzado del lenguaje de programación PHP seguro que este ejemplo le parece una obviedad o simplemente de poca utilidad. Si bien piensa que tú tuviste un momento en el que empezaste a aprender a programar con PHP y seguro que más de una vez te asalto esta duda. Así que respeta a los que dan sus primero pasos con PHP y ayúdalos con ello.


Pues vamos a ello. Lo primero que tenemos que hacer en nuestro [programa PHP](http://www.manualweb.net/php) será crear una salida por consola mediante la función `echo`.


```php
echo "Soy una línea.";
```


Podríamos pensar que al poner otra vez la función `echo` dentro de nuestro código lo que sucedería es que nos generaría un salto de línea.


```php
echo "Soy una línea.";
echo "Soy otra línea.";
```


Si bien, lo que sucede es que por consola veremos los dos textos seguidos.


Soy una línea.Soy otra línea.


Si queremos meter saltos de línea lo que deberemos de hacer es utilizar el carácter `\n` dentro de la cadena de texto. De esta manera cuando el compilador se encuentre el carácter `\n` generará automáticamente un salto de línea por consola.


Así nuestro código en [PHP](http://www.manualweb.net/php) quedará de la siguiente forma:


```php
echo "Soy una línea.\n";
echo "Soy otra línea.\n";
```


De esta forma la salida por consola será:


Soy una línea.Soy otra línea.


El carácter `\n` se puede utilizar en cualquier parte de la cadena de texto. No solo tiene porqué ir al final de la cadena. Es por ello que el mismo efecto que lo que habíamos conseguido hasta ahora lo tendríamos con el siguiente código en [PHP](https://www.manualweb.net/php):


```php
echo "Soy una línea de código.\nSoy otra línea de código";
```


Con esto ya sabes cómo puedes crear saltos de línea en [PHP](https://www.manualweb.net/php) cuando estés dando tus primeros pasos con este lenguaje.

