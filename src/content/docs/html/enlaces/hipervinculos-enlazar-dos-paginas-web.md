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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GDX3KMA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNnEfcseEVUl%2FCj4jbh6Cz9YaSxgurGISEfWPItegCWAIgbMUWj54PSZDxy%2BkZTjtWwzLzwsUzOJtqyOcylFKFzkQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM22TwrSNSuXatsNFyrcA%2F2DcaIgJ%2Fyvz6YieClmJUrekxRwZ125eQmilEClSzT2iSVBdBpPygMO5L5P3xTGN7J8LZ5vK9o%2BTux7iNQ%2FzMHS8WhOb5KV8phqxv%2Bc9R1ku7Z34UWdzY%2F%2B1oLTw99sFh3gIsG1QvLYeHLjOyhg7tmrvBKyQYLcld8SkvwuDVnUFVDva4yBE3DAAZeoFwViFlruMXG1SpE6eeUC6gTT%2B9YCkXOqbZ2Dg%2FjFDjJgMk716TXWn17Yiky%2FTZr1bcMIhNdGgIZlVHQkA%2FlakAfzjUaVPX58GdhtOVeOnNvvFbwnAJs%2B%2F6UStr3w%2BFQV9bcjbjKUTAchbhw204IA3rzaYN7V7Xwss%2F6mphAhTOLEaC79uq74ecetXlSY4URuTcVBZA0QOK%2FCVL8yrxwxpUXrB%2FF%2BpLqHZCAE%2Bsh%2FrYWbJEKzBThmPOOrqifn59pcLyHBLPi8Uk87whNXL%2FKphmaTowbmKL4RAIyQbz%2BYy679RserqzCaXL2%2Bnw5%2FQS9TxWPvOKbr0JsVdw8oUB4xeQxW37c1kKSdlfbPAq4KWqzeJxz7XoXqDMzltr9HCbrAl%2FbvwlD9VrD9o2AeNzREKlpxBMCvGUDYHEbwNbyU5R76NF9v6bZkkQIhiRrg7%2FDVMJ6j1MkGOqUBc7tfkd0%2BD1CdW5ng7PypAQkfZwjmcibP%2BMor9C9RBGaATYAQ2I5Wm3EkJCy9fxTocs4nJ4BJ3%2FAyjQtpfZMUmjAmOdBou7n61O6xDCsmuvBwXE01ZlECARZmwDqhS0nFvk0Eq%2BSGh%2Bu7d3XsJzKNDXOqUaNZ6lTsO6l09mItAon9OU50Sx2UOJHz%2BOVZfYnK5gyjlp1IfaRtZ%2BwAiEHxd4X%2B3Nsd&X-Amz-Signature=011dae1669fcaff0e349ba870e7210f2619a6a5752a76388faaae5f7a8a763e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

