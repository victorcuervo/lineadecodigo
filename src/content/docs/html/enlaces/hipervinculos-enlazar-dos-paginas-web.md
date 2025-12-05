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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPFIYP5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDX2kKFiKOCWlWijg13785jcL9tC4EcltR61Gzu%2F4ldxAiBuLskkHHk7QpF65QR%2FeBJ01ZtaxGeUJNNpY0dd%2FoujBSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM%2F9Zt3qLcWMlHCcXSKtwDETZzita9Twe5pyFqx8Ub84%2Bo8fSVMgtQamm3dk32RARh7KHYC%2Bfa3Fez0YQX1EqMwubwdUNV%2BMdmxlh88DCIPekkEtaTEohJnQ5xHidpEG2icjVHo%2F1BlsNQdf6f2PnNpP0ouXIqo2pZZfjYUcGmw6P7AePbV6O5UhOIuW7aELXQfjRk5ffkUqh%2BfBGJkQsKExv1M%2B65KUT0OjLq3LQlANjwduO%2FqrhuhYihb%2FkVBo2d3J4ovB0%2BqMfrynGANQBOgnxlHF4WBc4guleENxmw7qQLgZ8amE7cemguLy0LEQU7lSE01TY%2BaQ%2B8SSy0qxZ77xH96oS5pJu%2FLqEDe9XfphGPQ5qmI5foNBbuy3odDpMSLpf8XKfxwi5R7OZTcHYhIclRMnvGrtwdjD3vftEgzxmuC2O1KSK3uc9UVQU98FsGKTfG80NTjUKuRY3zg8ZsxvUfmO%2Bi2yHhnd%2BIvFFfl%2F4TKsQprxYeKxI0zNLgULY7LMcdVZn%2B%2B18xfu5hNAaWMUJkK77oJFb6h6zHXTLR1J6O4%2BmGM%2F6ZD%2FGKEQcyqphw2EGVuwjbfPFrRj6GRBejqbwP6lba3awyLIlQ%2B8s20bTrscE7a5ZlT27h7nZ%2BQl4V23%2BFi3%2B2m%2BrZ7m0wrvbLyQY6pgHp0iogATtV3Onz3IoXsah7Yz3aeCM%2Fd0HEB5LmSwoieYakKj1tnDtuO127N29KjlCO1fJ7MZn5feMcz7eySDb0inBHjUV6IkUlmKY%2BmdYQwJcEnJEYcN3TE4BuY4gDNimT8H4hcSxvHJK4EMhr9bWn6x37jz47TEgHY772avUxAu2g8c7re1jAPpVbm%2BRBNDQ2aSjhHpvVQJ6oNiJ2CkLPfrhvwtBL&X-Amz-Signature=96749963495f8fbaa87a948bc84a9602a1cc4221323f0cf925700ded04265968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

