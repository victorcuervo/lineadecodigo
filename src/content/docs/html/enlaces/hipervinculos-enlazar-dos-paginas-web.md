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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUGPQ7U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjNwdYHmsTkpJqIGRRLAcfjMIbztCJr27LOQdIeB3cLAiEAkd84QIm4YtiMPRp8vSKAd3kredYYzBXwBYfPH75fqhwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLMq9YfM4HOHZELRqyrcA3PAQdhvDWjNWPVtd8QE%2BkTY56N3jqjJjgSfrECxX1zdAWrW3r%2F9Y4iDeTmYqg0WbEy1vDYmdQ4rsLDNp6BZafqMkZA4ZhJtq1aQdKJJj7szvLpTmnG6uUx6fDc6%2FlcyaXXz82lsO9p6uMV%2BaeiCT3Xq%2Bif8tcjMvoI7RWBNXdi%2BqvkK63Xn%2FZP2Lb6276nUuDQqEM2LOOT5dmksH54SCMOH6H3%2BlN%2BzMDsw88qUiCa%2F%2FZcdVDHoa2LDDX5q9akFKUyEYjN13XjJgrJ78Qv%2BlJdSpabL%2BNgsruHxbcv8Lp0mf%2FJTC8HRyDWv18o7tERF0%2FBUpcqdbWzVrM3EAUEw4%2FAYDppyPGaIHU%2BBB3aS6ifkEFZZ7irrWuBi53Vbe9W0RrSfzYdTEp7isOwJnB8IAbrKqGPunIl2KW4gcHbFRiL2YkqYfKqms3pOVVSbM2sXhv%2BDJVhiTHnRajIb%2B8arUxN3usB3%2FnA2hmMCbtEiIw3bVcjxIYKJZXMc4oeh2wFdt9BAslr2LPIQEZGD%2B%2BNWBWlI24J0wuJXZiMUK5r6Rmy9zXFlM7ZyOyAhKlOaSfdQiDeaL5SlOh0AQ%2BDBJ%2FGiIPI13mUoX9tvyiaKxzp4zHdyfrANwupu9OpiE3KUMLSMyMkGOqUBt7MYbquvTuymNG6KNIsJptjJg3JJzCQaU8z0vRCifUUSZwcnl7pfRFEQ9xN8%2FdAfxhe9TdQLvVzCv09xjncnPwGaODRtLWsYEqSDZOW%2F0REpL9ZU40CEeaXOY7zWQE9RLfWl5kmA5S2RIIHq0zxxvAxCP3YGkefxFrgMo263LwRc6de9dmH2DLuGcZV3Gwwvh2zv2N2sFQgp3ISS1r9ImZ0I%2FeOE&X-Amz-Signature=459ebadf5d213429227bf91cdcd007389348ea90fcc697d2892ab52eff495f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

