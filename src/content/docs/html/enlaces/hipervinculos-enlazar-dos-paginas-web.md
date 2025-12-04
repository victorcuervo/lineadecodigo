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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEVRU5QG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFz%2FgBLKVrT9Yi0JISBjbprDAwGLzXeSmUr4gaeWXzrWAiAHe%2FbBYnD%2BDOA5n61sG%2FkuMb7JNl6zXTQycy%2FO0CjMqCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMYLsT2ujDdoWVgmrkKtwDxuQKknadmVP%2FNzpKuGoDNlTtvC5sDO4kDGOCfWQrwFfTwvbegXJAMdCpHlY3QYnhhqTOkOkNnbvbYimeDp9hgHqViy1xhJtHT5z%2Fm3EWdrEQtA2B5vNEMOiAQB9qm3iE5%2FGe9gJyafWMWjOawjMRST3ozlLVfMTc4LXEN3wwmV%2BnK3diWeX4dvqnzPRKvWUNAPxjq%2BT7gw1HS0yq6YiIQDGH0We1O%2F0KPBfGur%2Fcy2PrfJ2MRQDa3rQNcR4dxBv6V2nxYa0eJ99v6Mas%2F2E0jlv%2BlfvUbibVZioJHdWLvvB%2F9vqCS5WANAloVxTDAI%2FDtPpmSRMKIsbEfYpY10c6AbBKxApMBpOZ%2Blr3mIAXqAgMVawAVNOv3%2B6Q5YzJ28kKJ15SX63P6xZO2LtO9%2BEeT29UXQUGkq2N1b%2BnCykGrlNzxTwvFoDjHkqQ09QNJU5l8fmyYwMsx%2BnJa4EYDMtz9XdySxtxom7rjdNMLVc9mna8KxiKKuelT91%2BJgezqejEv93Gspd6uuZ4EtNJI%2FvOgsK%2BoWp4WgSv9QVT2raEKFS5DI%2Fa5VyzplD0cVFirlC0x23QBfRvBNOg7DNEr5GNZbg0zfxxRRfuxhyLXGxZOsJXvLMQOC%2Bg8Vqikvcw3dTDyQY6pgG4baNHNBZhw6M4fsd0HqtFFe8j7JghtCGpMdiyTCJ7oJd6GZPdBGflZLc8mv2DWYicJJIjM9aYWzAj1fjMgm0DEWbHoiVqBUzK2HARF%2FGxedzNNsdIY0yiDh8zAGMj9jY3MkTnQDjvSEj1w9eC2N7mf4N4ve1ZlHu3WaC0X2dIymDLRTa1EyHy8dG5moC7J1rffg9sQG0FEnwJzEnoGU6aN68nThRj&X-Amz-Signature=b47a1c7f5691d5f9d0ff73bad29fbd2d9e78aa7ce369b53e62814e0277dcdb70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

