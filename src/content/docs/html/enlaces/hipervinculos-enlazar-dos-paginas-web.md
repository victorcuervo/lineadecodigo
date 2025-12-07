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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWINAVG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqGnGW5zJkL0y7EHpH0evvnt2pIBMqToOHhHg%2FuXFzcAIgDJlqmEjxCQiOaEZUGXeksddumaOU4eEQ3nR5C3dYrTgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpMWJOj24FuyJptWircA7V6%2BrGa1kzLKF22gCOC9A8mThApxAbB0nRvrD3E0mAKwTABmlif1wyc1JGgLJhSsXU7jW1K107PBIPlEiOambMmkhwDvIHjbWK%2BrXopV57EyWs2%2FypRCXttGLxtFYf0EjP81Tj9A5S4X7pgbCh%2B1EgvKirGo8%2FY%2BJJ9aQDYR3Yv%2FBsF3YNBs7eKChkwdjfRWiXw6DDfI%2BUTkSvFVEDsG%2FErD0f5vNptaj2jft3RQqDK4jRgjunpNsABEs8VUDldDNJ%2B2lVA2GgWzUJahniVCnTnwXTzeYuc5a1Ab0S%2BxtRG4ZE1d61aynY9phNeTy2LSsZYk4Mj6Iyl3qQCuyFAwR6JfDdsRhbjQ8pN7ljB%2F%2FaiRxk0b%2BfVc3mrswoapVClnBDNx8cp81d%2BqoGv8K1QyZbcWBXcDnees7vUJaLhJ6yPh1xUBi0rCRzBBccfh3ULYNoZ%2BXm1Iosfq9Ru2cqe0O8KpSNd3qHd5ZQ3C5h1aTu5QItlObzyXYqvjTOjMPu6lW6H6UZv9zCyZJaxc%2BvHKBdrLyxZvx2yvR2%2B8vWw4vOiOBtMSs2%2BxeNf3xB9kR9D4%2BuJ5Q5MexzzG5yFzUovu38%2FzOtCDwkg42z3%2BYqbU3uIsZAIzmd3cJT1uX2FMIv%2B0skGOqUByTm4pPQ4S7Ia8cSavoggntJ8BvP%2B4QF%2FP%2FbPE0wHzz8WroCjOkyUtOAC8s%2FyvRWRZKkZz1dmf301h84t0%2FTD2ddUqz07MSSpBD1ft5Rk0mJ3WC0IximFMKhkOMxGtr%2Bx2l%2FkzQIR4oml5eSvFeupeyubcAqfwX%2BdDIRBBR%2FyJftzkTb7ahcISexdnOT8z7oICObq6Ml8%2FXA7x6QQQ4wlNR7qGxOX&X-Amz-Signature=ebc097a39aa9471280513d2f7e7eb109735fa4809fa425c5b5ca649534556497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

