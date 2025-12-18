---
title: "Propiedades de enlaces de email"
description: "Como manejar un enlace en HTML para poder modificar las propiedades de enlaces de email."
lastUpdated: 2025-12-18
slug: html/propiedades-de-enlaces-de-email
author: victor_cuervo
---

En muchas páginas [HTML](https://www.manualweb.net/html/) nos encontramos enlaces a un e-mail realizados con el mailto. Una vez que pulsamos sobre ellos y si tenemos un programa de correo electrónico instalado nos saldrá una ventana para enviar un mensaje a la dirección enlazada. El código que necesitamos para hacer esto es la siguiente línea de código:


```html
<a href="mailto:micorreo@lineadecodigo.com"> micorreo@lineadecodigo.com</a>
```


Pero además podemos pre-formatear los diferentes campos del mensaje:

- Asunto (subject)
- Copia (cc)
- Copia Oculta (bcc)
- Cuerpo del mensaje (body)

Para añadir los campos al enlace lo haremos de la siguiente forma:


```html
<a href="mailto:micorreo@lineadecodigo.com?campo=valor">
  micorreo@lineadecodigo.com</a
>
```


Entonces, si queremos añadir el asunto del mensaje tendríamos la siguiente línea de código:


```html
<a href="mailto:micorreo@lineadecodigo.com?subject=mensaje">
  micorreo@lineadecodigo.com</a
>
```


Si queremos enlazar varios campos lo haremos de la siguiente forma:


```html
<a href="mailto:micorreo@lineadecodigo.com?campo1=valor&campo2=valor2">
  micorreo@lineadecodigo.com</a
>
```


Así podemos poner un asunto y enviárselo en copia a alguien:


```html
<a
  href="mailto:micorreo@lineadecodigo.com?subject=mensaje&cc=miotrocorreo@lineadecodigo.com"
>
  micorreo@lineadecodigo.com</a
>
```

