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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHO6VYR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6okQsH12An3JpSBacK2dehP%2BOt5K%2Fi7%2Fnzr21DGYDsAIhAItTL668KHBFY1PniN542Aibmq%2FmTWH9VgY6pUDOUpJdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B%2FoFLqhPdnQV23gsq3APULUeg6RPaF7dxFPB4wX18L74avlI9iDStTMxtei%2BXcQq0GXCU8cK4eKTPfgxWNWtpmajNLDN7g21p9f5cnub5TXViPj5ZYtncgVWq8cbrb8pMgAivJEl7V2Wdnxho2FSRYZrHR8gSqGYIgU4N2XxoGE0AJ8rFuyrbYe85AoF25MF7LtO0G5qSXUwJqwxxJ2egVHuN1ubIhsKWw9sw5X5QT%2BIVwAqNXk0dUs80JsA82WyNVmQma8xpjWv%2FzviZbPLqF4745fUU%2FjZPJFcqOCWkdn1Fc6oPo%2FEZPJt%2B76%2FMnA2VvZ55AV5J6ThHfh8Vs2EbmgFMuHgAI%2Fd%2FeqnELO5SB7a7EzOwF%2BV6YKCGUxQ9BVZO6inYcWeFyOY%2FQEc0Ch2fi9l7jKa0%2FrM33803fMSPA17CvZ5Prv0OjWuUeWzKMQbSPJqm%2FqcEHoOvfGCbemNo6XMbvptv6QoplKFTU9La%2FrVvediBjI2wwSg0JhVJhhJUQ6lNYqT%2BpdpIeHdD9XUREPH0SZRnBjdsKFpCSsKxueXGu9Ncv5Wo0Wy%2B5FWQnEvIAqQdcKlct723Y1bPygWXXwweM7T7CqeHf%2F3loGOd7aRPNu891%2Bl4FnI4SX0uAMh2ANZuxgvlJlgr5TCEndTJBjqkAf7G0Oz4vfmlbEUT6ZWRSnSi69iESUZVdWibo%2BjOINUjtLSd1TQCBWL%2FigfjHj0Jomys0p34RSsJIDIIgxrZcNdyDS9Ypvu9TGLFT%2FRuyszVISBxPCFmAZwdgwkyYLOcbJy6PPO4LPucQZuNyHuH7kIQ7YIriCnnYu4yfFaP8oTqPgzgQTO6WENk5ThYQA%2BOwIjCup4W4Bb8paxGJ6xSvMda3Op9&X-Amz-Signature=5c64a71aaab2fd64ca5078cd3a7e7ce960aeeb3cf11e1cf51faf803b3e2f2a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

