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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MLDCP4B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMd4dtPgjOJARPaJPlOBrrc21FBS0980uZefaaqF8TbgIgGdppLlDbFBcXxQO1IvaBmEfXZSn3zNUOXMf0OVszofAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOADp9ueebsZbtEECrcA2YXx9oFbj72Cteful0HIqd82ENCUkF1%2F3LijODeZf3xIRdiMcZkIZ3uXBkvA2S2jHj8iCFRk9zbSiFgsWOUF3TegR9mydsvjmC8uYm01kL%2FocaEDv7d58%2B8thw8iRHOoqOjutCVtVzM9ukk5fuD0uTkLr6IYCzpDXSxkW7%2B6QvPsdzWeDzBglaDpS%2FTKHNfh2VX%2FC%2B%2B9zKogrDmjKWtvwmnF45si8pvnyHgE%2FZSsAa%2BMTn90WzjDjRy5vwz6Ao2h2fIQvZllzzTI6aMDVz%2FtvvkY615VTA9q%2BWttVDxphs4VI9D463dLVWX%2Fh3nSORguJXWt3iGam1lT0p94Xn%2BEdZx8WDIfWgKGacXxPO8OQYoktsVTIiGiKUocpYCZfKMUVwrAvX16OMnVlt%2FYRMsditZpeXZJ1AQe%2F%2BRWXvYHOL23LG%2Fj2SH84royWHFlyY6fsgIYY%2FWUQ0w2DjwRX9jlaB%2BwKkJYEKyHj1HPpq2%2FrzFd%2FfxTPKcZEROYMPeXw%2B%2FvBqryUnA9HXbQbOkCGDoN6fBUTTreLRg6g5tcnU7urAMMQO3H8YGN%2F0ifppACvc%2BDi%2FiHGAsFK5S3WpkeHJkcaRXWcXynyJ9TVp90b2xMOhy6sfw0pZvLYzaoZpkML2Q3skGOqUB9aV%2Fyxo8qZeWP6ldnc53B87IcLV56fIhIyDSS1Jjw0RbBAdbqkvoVZDwIzwXWzCqsYrvgQy5n2a13YVvdejRbUUM3RbW0CbYlGxWEtZMoDUihFFOD665EEfzfU1oeh1QE4MasX%2Fy14O%2FsNYZUksMA7WuR0gFja0YN5fqOloYU9v9XAoi5gdnBy6okLdpO4%2FnZ3hkKUcbMEOrXZ9AH%2F36%2BmpehnHK&X-Amz-Signature=b1ef05346a66a8c96934f4a3c36385682e9efeffdd2e2c2512da598a14fb90b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

