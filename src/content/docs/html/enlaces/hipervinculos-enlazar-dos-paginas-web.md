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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV7QD5CN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5LxsIWvdCFXZfKfYEdfCUpeW%2B3bs3m%2BAg9xy0ptvBvAiEA73vqTPfVc0tsuWSQ4iNNl7aEuZxdaHwtKXUpHjWz5lwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAJ3XymZOodguMFfSrcA8614fdGBT6oAU7kPHyVvOJfGaPFIxq%2BzzWvNkfZLBQbX%2F%2BmHoPM8mnGGWNb%2BQZlKAM%2BxP59CSjtCDAq%2FK5%2FSutRkIaZVlc4L5UvLvRPZxwn7fMQnM49k9YANHons25sIGPw3xgaCBag%2BRggAEvY9yumcN5m7xer9ST0SJYg8OSmrq3BxOexfj8LK4RVe0pQHWOrCSzRQyQqAEacxElJZLQFG2R%2FKkuXd8eO%2F%2FZxMz1QIl4Un7f%2BU9H9qnXGuJKz3MD2RgpBZP7NiHlr6zI9m%2F4iN2ovdkl2ICBisHrTY0VX2XgE%2Byd4wwOhfTxN5EGUs7QT6%2Bp%2FiXk0mZWYsLan1%2B1L2s0qBqy%2BTjX%2FeOH3mQcSkZr1ytA8TyMV4hNB9RiQOtU95muGPq09Clt%2Fug44p%2F9myn4Y%2Bc30Zl0q9dWf9P9M4Uj3SXKUaKqFqc3x3uLL08uHKLlC20vuGIYkB57xoltVOJKn9TAiZaJG1kk%2Bv0HFmnnrr005G3V4ixQXnbnhcawpWFhIid0TNcHUN%2BV0l3yl%2FvvqBaff955n9xqC8BSVxpgt%2BbmKJ7PCsChkjD5UymMiiIIOBeYZjsBIrW42NT1LawwMkkS41Gf%2BEcOZfTQeFD3iDKuqYlZ6Vu3HMN2G3MkGOqUB1FxPd5YzpuwVYsQikZqDFg17FTHd0ODHkpyMP4AboMyBf%2FENweqqebY186HXOwpVpA%2FZ26JA82uNh7GvGZj%2FBJEyDIfApkxSEGd7NpAhPBF9A5E7xcO6GEVRxRn6EJqB7dF0qzFtT8X4cPv8UaeIzrM2r5YmkPSBqquZBkElgg5HIIlBWvDXYk26FVfRBhBpmQBH77cmm63ATvJo9bviYiorZ04u&X-Amz-Signature=d76de69976227aa79d6f08419b3122e35f9a8fb3eca8d06ca34edda699df698f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

