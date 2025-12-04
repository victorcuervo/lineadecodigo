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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W77QCKKM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC2ibDSjAvjpbohh854D2Q3l1mvQhxtE9HFMZFias6nmQIhAIjDHPQG74pE%2FbgkmAgfcXLAhBDDjJk1gYfji2pcKwPOKv8DCD4QABoMNjM3NDIzMTgzODA1Igx11%2BRDBFzlAziEx0Mq3AMOUwjfFTrgTYA1JjPfjOZ%2BJWQY%2BPZNLHq68wcrqiQKZ3oysAcHKpnzLox5cJQw8k7AD%2BDHFzodK7Dtv9CioQuGT85YydW%2Bgd1lDzFZRZu3WQ3nTXCe8XLVYS2eHzG1OaCIy98blOsgvRQ4Cc96s7BMEqX9P%2BJIHHNXThsSDIAvrc3YBDB%2FCSAw%2FYHd1pZkYGSlNWnQ9RhXq%2FqdsdK%2Bav3Vk3muO98v5Q%2F%2BERIrsPO%2FiQ1uWmJp0YJBt1ovAn8HBYHPHi7p5gWpjmqc89JBDUYd5hUZoqMTdkhkkJyb6r%2BMjxxSV4%2FnW%2F5s52LK7RS4qA6HYPjZH1bsu04InU7WaQGK0ORBkcpgORtX%2BlyCwWxvjHtOwErddznSOdLdayazw7UEApSZ0DnJ%2Bmi7h2%2FoZUtDGgF8C3jDLUqWdFA1ZBraQTyTjtakFReZctRc05LPg4IKU4gUu1hydTeyyKVmk1ikg18PGeOBQhlJFEpdtlQmUVKdxNptO5a4caqF3XhpzWMkpCCvi9ExAp5UgSzXCOFntnqOsnuaAISDNUqKZuzphIsoopDNBVAMvX8Rt61YGxPBVnwijP0ADpwABYqCwQngT3m6J1KzGECmDymMc00C8TZKclO5w9tC4%2F0m6DDkrcTJBjqkAfcyg5XBAI3ImBSkKRkBSucC6udScUUJ9gyNkWhdkNUQkNjcFbEXL8pqj2FJGqn4V8%2BXc5863JQ666wD7WhXhL26o0yq3YPeOOoWh3c72mCMFgWFB9G6NqhR1r4KJVLFP%2BeRHFt3foyFibmb1dgrcMzWIWOnPQfLIOIuN4wQzI2qbZCTrd4Z2VP%2FBDRb47lhBLsDcz0C8Sg5DAmIudcxRiSdOuQd&X-Amz-Signature=33255172dd5a150a7797c0af549bf1220ce2f53301e2bf4196cf11b21303815a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

