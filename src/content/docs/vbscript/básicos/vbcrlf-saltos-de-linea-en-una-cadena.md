---
title: vbCrLf, Saltos de línea en una cadena
description: "La constante vbCrLf se usa para insertar saltos de línea en cadenas de texto en VBScript."
lastUpdated: 2025-12-10
slug: vbscript/vbcrlf-saltos-de-linea-en-una-cadena
author: victor_cuervo
---

El uso de la constante `vbCrL` para saltos de línea en una cadena de texto cuando [programemos con VBScript](https://lineadecodigo.com/vbscript/) es algo bastante común. Y es que no siempre nos encontraremos generando contenido [HTML](https://www.manualweb.net/html/) desde nuestras páginas [ASP](https://www.manualweb.net/asp/).


## Saltos de línea en una página web


Cuando generamos saltos de línea dentro de una web tendremos que utilizar el elemento [`br`](https://www.w3api.com/HTML/br/) del [HTML](https://www.manualweb.net/html/) y esto conseguirá que las cadenas aparezcan separadas en diferentes líneas.


El código que utilizamos en ese caso será parecido al siguiente:


```html
"Hola,<br>
Espero que todo vaya bien.<br>
Saludos, Línea de Código."
```


## Saltos de línea en una cadena


Pero, en ciertas ocasiones nos encontraremos generando cadenas de caracteres que van a ir a otro sitio como podrían ser _bases de datos_, _ficheros_, _emails_,... Será en estos casos donde necesitemos algo diferente al elemento de salto de línea, [`br`](https://www.w3api.com/HTML/br/) del [HTML](https://www.manualweb.net/html/).


Uno de los casos más normales de esto es cuando estamos enviando emails. Por lo menos es el caso que he visto que más se produce y que más de uno ha padecido en sus carnes.


La idea es que se está generando una cadena de texto que formará parte de un email, que posteriormente será visualizará en un programa de correo electrónico, ya sea en un cliente pesado o web. La actitud más segura es enviar el email en texto plano. Ya que si lo enviamos en formato [HTML](https://www.manualweb.net/html/), corremos el riesgo de que nuestro destinatario no tenga un programa capaz de visualizar [HTML](https://www.manualweb.net/html/). Aunque esta situación es cada vez más rara y se puede solventar previa pregunta al interesado (si hablamos de un boletín de suscripción).


En todo caso, si estamos generando el correo en texto plano, estaríamos buscando como generar el siguiente mensaje:


```visual basic
"Hola,
Espero que todo vaya bien.
Saludos, Línea de Código."
```


Como podemos apreciar en el mensaje, hay tres saltos de línea. A si que la siguiente [línea de código](https://lineadecodigo.com/) no será válida:


```visual basic
mensaje = "Hola,  Espero que todo vaya bien. Saludos, Línea de Código."
```


Ya que nuestro usuario verá todo el contenido seguido.


Para generar los saltos de línea tendremos que insertar los caracteres de salto de línea y retorno de carro.


```visual basic
mensaje = "Hola," + chr(13) + chr(10) + "Espero que todo vaya bien." + chr(13) + chr(10) + "Saludos, Línea de Código."
```


Y en vez de poner los caracteres ad hoc podemos usar la constante `vbCrL`. Quedándonos la siguiente [línea de código](https://lineadecodigo.com/):


```visual basic
mensaje = "Hola," + vbCrLf + "Espero que todo vaya bien." + vbCrLf + "Saludos, Línea de Código."
```


Por cierto, todo este esfuerzo para que ciertos clientes de correo, por defecto, eliminen los saltos de línea. En fin, una pena... Pero espero que os haya servido saber cómo es el uso de la constante `vbCrL` para saltos de línea en una cadena de texto cuando [programemos con VBScript](https://lineadecodigo.com/vbscript/).

