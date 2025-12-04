---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727EISXP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDcu%2BA%2FBCDG2%2FvSFuuQGN3wPsnPvpBMFj4B3MimDgCgdAIhANbDZlqOnnCbtAeT9TrofVYZfBuzh18tVqCZfKAdFC5EKv8DCEAQABoMNjM3NDIzMTgzODA1IgxbZONStZfG1gJcEEMq3ANjjBJDztCfKtdSvWQVKKJitabwdiG6Y5T%2F2q6HcP4n6VYAxIGqyFuaOHcC70Lv%2B51JDAN2g1Pa1L2OM1w%2B0LkmqwHoeyDRMwQzY4LziWwlBUz0h0PS0eZHZutt7PZ4UpVwp7nStOdfJIYt5LTJLlxOakgvjqCofhjMqB%2B39akPvU%2B4fW3g59gTb6Ec6%2BSSU8i%2FFKIXFQOjnqQr6skZDYv2CPwSXyQzMGZQjP59Qom6kdsnN7DafvyF3UZltbXvGNfHDsGvaGu1tMLpynUUsnvwMxD6l9CiYHzgudqhWpi6KWe7Z0fGh7V71IM%2BDAnG24PKdxr6OScDUwnFqgjVXLa9Bel%2BnfzoLtVdPbuYqN4nIRSHz5PdE8YV9wtNvu8k1SbVG%2B2CF4y3VIlda2fSK4%2FfdROhoZei5ZtfZTxcwF6oG%2FIDUhQudQA12b9crZv4Ik3y0TUnEEAYHFrvVe%2FrC2HdiLsMJFfJHXIu3KBMiX6FOzm2jM8vrgo4e4ZZVi5UyuU9DzY6nNoxiVi6pUGfUEP7VK%2BYfpHzsLTV40uiKXVtNrEjLIBGGi3ex5fI5LqKvsPReGlfRA6WWCZgKITYBHt1isJynV3iKM2tzaLXaSb4TNtd5JQ1C%2B%2Bjx54nFzDb6MTJBjqkAaD3Ggf8ul1e09U0ml4jaoJjoy02Vm1rfGfe0GGmk%2F4VyEklWWoHznv%2FNkCSSaIagNOS0YmVkzAHY%2F0Ouxsg39Oc%2FV0wk6Zzg2rg02DA3obfM19%2BnJN5CEPoJZ3jcdW4JfSKZgXMFsJlld5oe1t2S0AlzjbdJzXJy1tMu8T3kl4QpGQjpJzjx89bCn3GesCeDe7cy%2BE7w%2BIZYxMaNlBBcHxmbmUm&X-Amz-Signature=35e4717946653902f2ae977a3f3cbb2ebb9254d33f3260aa6c8914cf5b3767c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

