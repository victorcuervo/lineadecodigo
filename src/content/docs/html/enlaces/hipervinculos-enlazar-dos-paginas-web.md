---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KGJ2DH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T213713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8dGsM2EGtYJxgEFro%2BZDy8a0KWzJmgNQt2ypVXXcFsgIgSGDHB4EbN6q8iHnbZoChydmut%2BOE0a9aF8pHbkimzQYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjm7chWZmzg4b9%2F0CrcAyA%2BXPys2IvZ5lrHQgtOF1ehTGdd3jzSO%2BgXQ1%2FAK3q1UJFbUwZ63hff2JCCzA6IwBjrwO8Xnf0IBZpmvwhytY2cU03UmpxZCo4bdQzfNYmXnbNx38P4e9xUTvmf3%2Bdz8jgxNtgoigAI5xBS3zg%2BZisuCPWqRddi3EuhlPMa%2BbnH4nWQe3ufs2wY%2F89M9yJiWNybwd4MGzhdGT8lbZ31TsyAR08tEU6IsK6ViQLQ4ipMWA1FzQBZwkbrpw%2BY8M65lU1PcNnx9tof7ag7c6XPUtnbiUXMLkmiX3XfcmHiFRXBbZZ0uKmNo9EyB6sxIRRRoiJMxteVW61ehNf3tyIDkATFlTxG9GFvaFPz7LjgdNqB91wgkwB2Kh6aD0cOCaWwxuUr2iEZOPjWV%2Bjy71mKbM3KAmlExGk0yJgHNU9vsRcnDRXyjxJ%2FJVPWVkUHNN3MQG6hPyhdvywOafmaakFw3zgpAvqK1%2FDgCM2wTgZcdlkc5hPnAAOXkRug7iAoPhdZ%2FH1P0qGlyh5RWGy%2BpeeGaJeUM5PBG7WgvIcqEVTV1tkj02lmRw7TRPKXPr7ZgKpWng%2BBaWvC8fyJvKhE0XXSAKFRHvK9mULOG5VHt6d8UQKEP%2FXHcv9TxyvGqZH8MLGf4skGOqUBiLiLvbKu72IUNSEk%2FFB9N49IdHWt9kyVmtnoWLuyq6s2WmpHVVTBPGAAt2ZvXgoXOWxFUb%2B4HV%2FFqhB5E3lzMbZllfNrN05lh9vAHxFQf08mSPuzazdGiAsASs96yM6zliWfgvi6cH6yxVBbKo5UdGHUMa6EO2K0k0XOL2v%2BtKIegaAkyR81nkxTbB8NgPVXkL6Cth%2FNOe%2FTUvxXxXxBkdDG8250&X-Amz-Signature=27d4950a6ecfe56409a3aaa045cdf631b147846a7ff7143b7cc028d5d31e1eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

