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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRA73SF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHh8uBXX2AbZYKhINKlfNpd%2BHBEUhevpPzHpST5l4WdAiBt2eUGnHkNJSlDw4W3tDaStEoQr5ae83FzMJmwvd%2FNiCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMxtPtHYwgm2zmg7TGKtwDycbgy3SpBzAdMVWq%2FdQKHy3ko3WZnx%2B%2F0WHJ39fqoMcIWqYaTPCEuV3FAPC%2B9wpLtYydJftnRnvQvDnD8FfPmxYBhbPZOqRKTPWoX429x5mAF1ktjbGWNQN1ZQ2xfYw191a%2FhmNqsJbPcwCp%2FErDGy2OzV0QKZVfsC0JVR5Z0PO6vMdv52Z9TU6vC2H8Fk%2B4bB9p99%2F54KK8HzHgPVFkZermUf6J%2BgWihFfBGuVc%2FOpiB4M7xSWiTdLXEMuozNg6WFoEDG28BKSISZLpiQo4O6Oe6QJ2gZILszrGLci6RYSJ%2F23S0d6QQ%2BRLeZf%2FQxe0ocARADS7KGYUL8ZbNxsKY4LF5aHGyt0y31AOcTY6z8TLL8mjrGBRADuEsWlSXwjzVIMo3Kx8mCZ0Z6%2BrbV2RZjgm5BhmfjSNWkyrXs93beP5T4WsIXB%2FCoi9ZKIhNEDUn8J9fq8M%2Bv2icWT331aWZ906fUDP%2FO6YfjNzGVbUOQgxCiqwokQTnfJ7380YrPvMvShf7JHJ1CRETWJtWy0qk1TzfwTD4qnne%2Ft%2BFLVDDXWpwhYcgSwgdxjulAZV3a8ob%2BNB1ep4fQUzYgT%2FPx6PYIWT3H2S8Ssd%2BrJnhXvw0QPRf%2BlnyVqlXCk44e4w3L3PyQY6pgH8o2lblZS95Vw4AaS8w3ltrGzJ2Aoz1BAubAYyrw5XDa5hhWu%2BNj2xiJIz7ouUA8I3vKHYxuf8VGA0GA%2BgLdVcpEmfh4R8ht2pYUXSH34KahB14MuQfFJ34CJCuH0KGs9gWm8W9UrZAWYl7xgOFqYHbRITQod%2F6NFFnZiiFcN9ZcxsfxEnhWzo%2BHJwp7plv%2FPFCuBobAgQo7OcSWFWA8kMREo1%2FlvI&X-Amz-Signature=2faf4810370a8cd74a663b37726a2d18b8ddd7d43e1e6023c777995ec3609bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

