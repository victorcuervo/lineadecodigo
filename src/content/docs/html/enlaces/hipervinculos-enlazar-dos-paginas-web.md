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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SVT2VRB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZeF8A4ZHN0hnQvFqskxt%2BmBPeJHW5b5QcTVP4xjhk6AiBVl80aTrSfr2ZCufb6oROBIzCz8%2FjBVkM%2BuOSictU%2BOCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGUndKFdpuKc4CD5jKtwDuCRtSQVmLsozay0%2FCm92gk5wQgtOxKk%2FhY4cHkHBWHCtbhujA1%2Bw%2BvIFBSYvqZZuTBh0cWBqPeSY9%2BBtthjfO1OgLmAGif7sP%2B2l8SDltpOM618iZslljtAZo4p645zOntUsYhPrQJrDxO1Td%2B7wdcy79BYiA1%2BjAZY9azMk8S2CRnjvzfCfwlysl4wU8k9e%2B4fuU%2BZMvLY34UaLn9%2B%2BmTnssFOLULgIPCQLfF7ZS48ENPXzMGojxAUfbdX85EILV2Y%2BNXlyUBzwhHUFW%2FsIjPMnVGPx3QQ7G92JmNfEZRx3vPNojTBNTUaMsuB9q42t5xZBMTqCq4p3U%2FSTAFuzorl%2F1Ou2A1u8SUY0FXEADZUwAUFbfRnJJYU5XAboB0GGSQxptx%2FwhnUqYN%2FCATYO6jdh%2FNEE%2F0rgwtqwh%2BvWZzRwGKDdRyMLbJ5%2F%2BH4enJ%2BbMJZcG2WLrHJ7306Mz8mcVbqd1Zxf60tMLKXfhLkbf3WeLu7y6Nov0Fj47C%2FB80ux86negxoseirMh0JuVzodPRYnbh51KBlL%2BbSuyTaJrYq0sK%2B4Y96YFJsiMqKx1my3rfCEL3n%2Fl%2FBuSuJnh1IeQl2WFsBzNE%2FhUhJZZCE%2BcUJEdWLGlZxXt4UwKIQwocPfyQY6pgHEUv3FM3ilmQ6Yq61OX8xRWUJdfoX4n45BLxt8O4JbqZyf%2BkuZruDGLZjdvUfkAwUor%2BftPht%2F1ja1HMojzBhMmaWo45F%2F0z7ygvgysKbdt7LLrHteTEmoHVxfWgOV20N%2FJSp41Ulr69D7RW9kPNftFRLtHKqfg%2BUvulljUJNf2FdZNjZ7BByphZzNpLxqhRSppvrZTp9CRJWUf6bBuppAo8RZrbTu&X-Amz-Signature=13bbff36fc2803805b7fdc0e735e1368054c0660903705bcea837def713c5d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

