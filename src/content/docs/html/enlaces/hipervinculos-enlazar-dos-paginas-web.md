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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLFQB6Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr6imKFIYXCFVSfY7kgAkK8u9%2FnPNE7U%2B9%2B3tOoqPGXQIgBHEKlazPLKYjXP%2FYXmtWJNUaW4Pyk5dxBW5WvqTIUKgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw9etn14FCwUM4iiyrcA361dTZnG4J%2FC6npvyPCjZGPkWPmypJhZsJAQvJ1UhmrCYq%2FFkJMbkcnocFFvU6JBAgVnhfl89mVQ0ZAX5Ktg0qKkrEo2LMtVJyX0jhtFCibiXdKpGTjoEVbyrmjnWOqvxZyVRQ1apPZnDQWpzpoRLuqp1Vsoj8KYjF3F3OuIfm9RVQZTM9YV6wmVgSgodnfnsBSQtKUEu7OkFprCYRmEnY0fqXK%2FYOF7C0izC0W0dpEo3LE1SMdFcxYMWhmnn%2FzKRM7UZYXbWVZKVGExJXQf41hIkB8epZflEowufowX0zWC%2BxK1mJaRTG0R7z34FNbOE9%2Bx6mmHL5p5oZH%2B26mnHGXP7NDWEGJPf36CvZ5%2BV0gX60piwIbPmsOdbqhhb08%2FZlDvtQdNOjqD%2Fmdm3ax9u1m9oT3LkEuP38TclgGb3jk3q39NIlnGhPEQxPqKOIHz6QO4agjm7WTXgFugFIeK89A1%2BWKDMEU0Y0OXspB%2FKIJfhMruts0MvDcCVKS7aZSo2%2FZaw0MMk1mL9R0C9mOekKDdgTyBPTqD6P2P26Db4p0QmrvKV%2BPGcPKC59oy%2FAkc%2Fjz1jFgsELpeoRZjeB0%2BzcvynzkC59%2FeytAtMoLxGsXs9QItvwqfm1y977jMK%2F%2B0skGOqUB5IDQ%2Fb4JtXBHeEy5Su4ZJDLIUHqtPfWzBQ0rNRs2d1Jw3EoDqDBIJ960GDI%2BpjqFbO6WYstY2jL6Iwn%2BDQltQRyzXsnOSeIT629npaJ5gOfy4NBx%2FElVraxika8rD53WEwBl0OqBr%2BO8CCVMEO0IQ%2FybKh72%2BUrJghupdu0RLs%2BHBjOpa3USx9sOfu0525xRGPJn5zpcY4O%2B9shmj0t5OKHA%2FqUJ&X-Amz-Signature=079cea1f6c5405c31e28c8fe6e1c9f73cb86a3ebb15b8a261565b1d69d1ebf06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

