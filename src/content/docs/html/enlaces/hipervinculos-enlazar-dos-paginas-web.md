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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673UNEY33%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmN%2F5aCW8Uro%2FtvsPczG5l5bNspOz5kczSQ3MRTvdDtAiBaK2ilGdQpLg5AvhtxJqk97HGrt8sHlkU29IIRTz9g%2FSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnalTW3xAxf2dyUW%2FKtwDwHnrZ%2FUsJKVW4sVNqEEccfcVHcdy89MqcL1DcWm6tR13VRXPuP3pC9a2XjYC6ksKu%2BfO%2FL3IFH8rQQd2We4NtM37ci8M1%2FOcFIkHz52Nq6lb264NyMNAJsbNJGz5l9B9%2BAmhI3VtVY2gD4yKgC9nBHtQkzIW48DRJTdd%2FL0ycxYAea1OCwx1bkJcNDAdaCrugDKkZUIzgKvn78voRCTir25Rii8BIuYBXJC60LXMv8o2Ztt5nKJtqBWa0p6W7w3B%2Bt1cLcBVID8fh6C4FdJDhAI1XSNGEz2GC0DL6nnuNhE0j3KxNKQwICISHGRp8nbaT1QzRZBto0nSaHF9HxKTaHW9wXItkxpB2I3I4Ef7n5DNuMa9fTJsdE1ORuvOYXA9lR%2F6%2F4UmKi0vOjhDv8MpcmRuOic7zhNED%2B3qRq9tkOTcn0tTG%2Fef422t9DDr17XIYZQSUKbIHXf3pdWKkNjtOrkp9Z7ixdcRuyqncIv7%2F%2Bnb95jhgyrfhdnHw5HY0qFeJb0uGgIdVNLmA43YCzeTdlbHkpvPyYDNxSF8IHdnQpFPaXyBRNnHvbPnuxBr3U4RgQ%2FpYYUyzNDnFfsvsTZMo%2F6VgE%2FaxLLwmGvfbMrJgz8Vv5He6%2BAtCODOwfowyo%2FbyQY6pgFomYwzUIIhDWfRpeJiqXsFKB3ymOAJcTdHQvGqjP2KzziWyspvdMkA4Lh1jlGR1XSqrw19dvmdSv5F7GDA8DQCxPTDgdbRVPMOuZLstoemSEfK99bWhG47KDSIJOoWFAObBrKNckgBGwhNKrJpLbeoH%2F0zbSM6NpgnZpqBfiSVAiFM%2Bzi0oyiGq0Unll3B149PD7r9BEKKx17xrnUITGu4BU47euDV&X-Amz-Signature=32b927db5d1eb399961b95fec11f32ee88d9947b89450040884f31a625af0708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

