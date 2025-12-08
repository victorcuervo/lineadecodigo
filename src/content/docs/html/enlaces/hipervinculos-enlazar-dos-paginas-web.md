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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKR5XJ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZTqkuVju1wgRvHswjGOK1E4DRNvh9XGlIOgiCN3A0zAiBKaEehOor9PFxNxiCND0bMMiWyQRg%2Frr27lRtEsyCJtiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BvHqa6Es%2BjUPyPwkKtwDPv%2BIvDZdYCNgkZer%2FDfQujdTbfiGjCYQ%2FEaPbaCPdSkeMsWoWO00ZJ7W9S4xzjaMX7XfQ0HzP%2FAj9In34eAoQcMpLuM3z07cDW8xXeIPeOGwcHQsqo6IuvwAvlbkfD3r9QiTtUAz%2F6OSgXDZJs4HhwxxXTixlslxEzTvmgSmGspoU2kS8V%2B55NwZY69KOHwi%2BJFh9phaFuB4I75HznDAgAz%2F37g07jfqUV%2FOFsr4G58CQMB3JoxMMiKtnmjk3BKNSrIbTbk3szn73ui5xuZiRxGQXLfKNAk1tq%2FCc8JcrmryBTekEMBcPr2Ot6nbzjCx1WMwm%2F0ZsOQ3VDo6LLpGdmocozWA2RB7Tszpj6qjx6Oe0Ys5NFdHEUh%2F60Yz9VZ6Fh9rpt%2FxWh%2BeC5dnptd7vGGC8e9XT94Ky5B7ihav8FapjVwe11r0AfRV6F%2FB1PlPfeJRVHsthvaIUCTzQm8OGrQrKf%2Fu72%2BChgbA8Dg5oKrtiEvWpvH3Bm4iMWuiKThKeHPfMUAjeZ%2Fm7D4dHW4JPc%2BITMPTJ7l0dLasff9ZE851ZbTPvTH31e%2FiIFwGkduAt0YWc8yppSE3rbjD7oISiyhguKtvqXDuY5XWYd9JA7GhFSwKQG%2BjLhrdMaMwvs%2FZyQY6pgEMAeYpUPan6VGmMWN3Nsu5iFcgG%2FYbr%2Bd0SNbJOOn1pnVILXKKpVnHhbREcfkYQ0qp8d2DZkMDQ5VxCT75xHAlvvPvn9DpP%2FQaR%2Fc4wGLdcgKBJGNpn%2Ba79JNt8DO5PR6m8tWjPTuq12kPK01xRkJDCw2k9d88B4u7YnEutZy4hpyxyLk%2BjEEh47fdOtWsyLQNLxhHcFEw0rxbRysd9Fv75TeqyWOY&X-Amz-Signature=15269165264d55c56c26c9c10a556edc45ea6e53843da27ca6c2edbd38df75ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

