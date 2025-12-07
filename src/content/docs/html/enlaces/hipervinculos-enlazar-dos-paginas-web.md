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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUUR2EI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDznd6wGnpnqKkYQNvFKNXJQSwZWNv0b2ESiPBIEJm2WAiEA%2BCQ6w5huzJcUK01N9M4dVuHHKYiGmVoYaNThZhXQuA4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYA%2F4TK9hgD0y8XYircA77MgrqA4jbGgl8%2FuLGlyUtkz1EbEJyj7GG9IYzKlSwDJs%2BJt8L6mkymViFNam5AwmYkHIbW3Gwb2vpqBdUyAu469DaiSFYxx7evQIzILd4hq%2F8FNETWSqQh1%2FX23Xu2yOWOp%2FitdQvitIt2vRT13PIUxyM6DqqCpRPt8JmfIbWmQUzSWDq8omZFGp%2FWbmNRiCrwWGErOcl1ROYNF6V0RSapCmzv0cWngfuyejFsHlyb1fM9cmEU2GLQ3xJPm4mPBbeXI4zFSAtrDtr6j5RF%2BkI0lu2NKS6h0lbAXUjBeBTVAp8NPiYE6I67toYkmdPvTlpSRDSE3CrJbII6bYE6vWljFnsnOhcyU8%2Brw3DNUDK9dNbAQtZp92qsXblYkFPlR2qrC74XsDL%2Bf%2FbpbJJ%2BZZ06CkLBNAYyPRM5CZcJGILL6TqspS4YnfH7eWljXtURJB9OfVWMQK0m3%2BHKiX6EYMLc%2BF3PFO36gQi%2BezTF8nfqaIrr97buVLWp%2Bf1J121EIcGVpFgLRuCefyL8MgJXZ9g5JFTjvgCGl5cNeXQ9rxQ7lD1%2B%2BOYAEGuwS5%2Fly7Q6iXhFnc5S8imRhIaXsN4UEcIefql%2FpP5dCsFR7zNPBJAeyY%2B1A26sKJ1lFG9xMJuZ1ckGOqUBv08P5R%2FgUoaviNFJCJtUBBfA9Qfqem691jCQjybEtoW9%2BbiE1zDrHtkoPdJ%2FrNjbXoaVIY02UTEtpFMkHZp18lwS6n6%2BMiXz3mHEbO3YhZsUU7M2V2ivizetZMA0dDq11D6TXPQ5QVOI70JPcJUc8qHZmDf9lLUgeyoNzGfikmUygoyAT3tuW6NgsCL4dp3ua82i8Q%2FnO7jE5LgATZYdeH76uAMu&X-Amz-Signature=958e0e28a89cce881622462b0e0622cd5974e768b8238ea07b72caa83921be51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

