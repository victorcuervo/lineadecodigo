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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDILWZTZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmX3MhMbwUgNSQDXVNNha1036EttpIY%2B6%2BgmzLY5%2FCrAiEA3D8F71xwSglZ2D7Lxk4zuzt1vz%2FkRfUFJ3zYQTfqztQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCp7UWU2A%2F%2BcsPS7TyrcA%2Ffx6IwQnfx%2FjEoWyxn8Dcam817rytpekB%2BGoCN1xeTLoFVy1aN6RiGKO3xf7lzd1tY33zqWUjphKDHZf5w5K9NckrkljwB%2BnQ0Xh8eGkhtHZqFRAORU0GYkvMa9wH9i5htp0xULqqg0fXOl%2FznfN5pdJj22SgaOm0mj8ZJj3FBWzqR8%2FKkM05I49u7x9ez5mgGJnfw2TusDxGYrgYyrcdSYiINqEmXk1GoAxeG3XJAAZ7ZBhye7MCQRGl3WalA389nj%2BsDlXzbeVvAEeYYfYS9ffwizlI3%2BWtq194ILmaVSpRbALJ35raQfRTeNP7u%2BGAJSzVZVuCGCHx2fJWHWo7Wcf73%2BG59cmp8PaPH62%2F%2Fjwr4WpDypnezJfoRUwVSFbtcmBll9s7Y05qdj2jMUvfQCjbfawaNI5Hcgb5o9L0YNuZkOJ2GbWmlgrYRTaJrSjvFWdT9O9Vc2sVOM7rMqno6%2FDuUihrzW7gKBeq73dc3S2mYDuv2qj%2F1l6jt3FZD9LP9uTzYgyUYItHlNdgBwUn1%2FlrPJFAuCQWn0OSG3BilaIQE9SFBcrcYjN7ScrxLFCWiYi2A%2FaGCU1IGpk2eB%2FqnHarVdrARMowoy43mpggq%2Fc29dPJYmESW%2F886YMLT3y8kGOqUBdvorBl5Z0jmwdA4YmViGubJh6KpN4knWKuZrj4cveZexJ8BvY7cdYsMvikcdvfqSXnAX4FC7qQePzqAKu4GuM54ULqyilNJFo%2BWAvj7X9KGY5%2F2eJCKobQDtqa4BW%2FxPNoSg9Ric5FFoWBlGgAKgBAGMD4wvGxb%2BXdJPsKLMUI6rzhMBZVM8tvm%2FazaUlcVvIzOC%2F5%2FrUB1ClbbksYRqD1LYkJxc&X-Amz-Signature=1930beeae94d7bf0d896a75dca4e0a0bc54bc2bc2dc4b9f74f083587929ffd11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

