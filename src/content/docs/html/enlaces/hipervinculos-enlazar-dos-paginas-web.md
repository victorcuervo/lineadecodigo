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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5FAE7UV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr%2FjfsMMB%2BZ2KB7PoHkxZpyfPhpL%2B0xiZ507TxQ0omYAiAH%2BucD%2BLLqjV%2FiIhZ%2BQfTIbqtx%2FcCi8msfURipzkG%2FkyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaNt2td%2FZ5HjZTpYxKtwD8SqNrhUd5E7oZTs%2FFNYTJnIU5%2F4riEi8zhVMGDcBYCB5LAznRhGznq6tr%2Fm8GfSHb7kSII8kEsj%2FAAPRrkFtf1mFgF6XfBoAtGC49YhDC%2FnkSgocm0Y%2FA%2FdA%2BU0mmjP5nwIh1OrcN0kaXmlZB9thy2IQF3Qofdi4SL4lUWTuP%2BTwkJu05jtdRleVsJqI7EXHfSegQvUffJs269VtLdjmEMX5KBfWlca4B0CakPf%2BJHnMkpz8CnWzhCgP3y3YCnok5weOZPrgfEtBW5uX822uUlTqUouVS%2BUSuacbel9pbhLp6I07BmFmkWGoaYvjo0py0C5eyOWF1%2BNURE1opL6QvEuAqxplg%2Ff0IOp8IY2n9gJKqzH0tQ34L0f6WtvoqDSaJqUJGc359t0ByrZZ25FNLNgw9bTnRtz7QpxXNugm0c3000XmTkORgReIaGPRPGfsyXyC7DY1giOyzBqfmNLSEt2myaD%2F%2FfBeVmhKuXa%2Fq53ZFbPv1N2P%2BnAGzMt%2FbSL3rJGSd9%2BwRkdnjvgzFEpA6n0%2B8JpWGVT0iX4hE9W4QDxV3Ul%2Fdm7iuZ%2BhmKkVxKnfHfpu6sn4s3Iomm8%2BmIrqLoqjQBt2IQodNTByLvkcrTNE93PakAJIYGpAznwwuJrVyQY6pgGoZrl3MLfZbm1pTx%2FXOZTZfcnK9xLtTNNUdsZ5pSWONoNWOgW%2FTtQDBlZ1Smh0NrakH%2FV9PEeRxWdUZqITpazu53UxV3fTqpDEiOXwu%2F3yciw7GJDyD8HUsc3qAR524SYQIMr6fkzXeT%2F%2F3QTgbDr%2F%2BJkD1JIGnVp67fDOGBDlUcHW9MTGGPRy9JYpzgnotyxkZcTqY4TwByCtzEXIe5EAnnnIt8CK&X-Amz-Signature=42b34832b5bc7c9e732b54a67f1eeb133bc6cb017f799405437a041f6401c975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

