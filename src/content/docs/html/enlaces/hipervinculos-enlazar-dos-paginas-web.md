---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVHUFJXW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3fMvXOFqb8%2BE7ck3fboiwIi4%2F32C8J2Gq7nMKJ37RYQIgInTLad%2BTzEzw8XVNuq9IQfRBJKDczqtRwnaB48a1njMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl%2B6RSGHqBaap96eyrcAwlXLCYDSu%2BSUi5o4TySd32x3j7j02EUaH0KfZzBFck%2FNkuBsY%2FBVLjPeuwfwx32NxO99cFykZlYMmq6HRlyRQ%2BI%2FIAR2BIfRaDyMSQQdrn5VKQSO0Y7%2BlHILBaqrlyuo7jXKLTGTKYD4ekRDSLVldwkOzmb%2BoE%2BiN7ZEWhakmwuSFhV2zXmolJDHnbrgMXLzukQ1MLNlsKjxCv1KfsCMBfN6UnO%2B%2FGH%2FIKec9dCgCyn0zUmoaAaZgD8E9qtsaIdkckHr3efzRwJfCZxHuM3JRO4a8BkPmOnd9QQfPZHPVCT3NoBGIzIGEYHg1iu5i9IFRjR6SRzPz8f50Ta2Q%2BiowC59MQG8FuX6jA%2BE2tNeXkA4YBG2l9elNpgZuYn6%2BSKMZq0Uf%2Bk1Es3mI8SqJPFEeXiQKyx0rqKOvjuAjWNI%2Fu%2BQDr0XTgW8zH1HVGy8BaaHSaFdRAC3hCUPxIfMw00aAzAyzFkIyHA4xulNsWUJLhpfFRbEHwiWTU%2Fn7NFXC3fecYI%2B2nIVOl1NO4s2VIKTIHY0XK1h%2F7XYYd2A5iuojsh1VQGRwOxfykLf7rXoEYAqlJuToJNDIMwXIQIZ%2BNwNt9h%2BZlw20qJqgABY%2FqL7RkPu5rUiDKQ8h6xTBiPMLSZ1ckGOqUBtgFJqUeSm8ZumIUnnYSfkzpCMwiArHi9KypVmjiwAZ%2BfE45om5KHKVB8gWfC9vGYD%2BWgs4O5ft%2BzJ0HeHc%2Bo9RteHrJeiNTaTzKmvmz5%2FeQwX%2F%2BRnL0seWHSYv6ycmu0%2BwU69bIOTb2iyxyCOOyylStik3L0WurGpMhI9zHT1Exo7dEvCBVZWVafN8VlUaxHApXxcAIZ6sSySUAZq5C060rT9YX3&X-Amz-Signature=e412af3e86e41714a0822f0a54d0bfd19536e6eb37feb85b8ff1731cb959db29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

