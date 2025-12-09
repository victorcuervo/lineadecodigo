---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCGEKIAU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T221216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3W5Qlg%2FlQ2wW%2B%2B93%2BepWIrzuHb7pgQvQdCkDQ4c%2BDSAIhAKHWuusuDZ8zk5o2Cn9P%2BiDr1zjcjan%2F40YAJry%2BHJIBKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzASVFFbJJub6bGpi8q3AMEibkxFL1gJspnjUjWMT5NJva6bABmwnzTXOBe1hPGwz95%2F7E44dzS4BURQzmQl5a3DBKApMxdraGyVZLFozsR1urMDVvoLzk2Sjp2R9e53HieaQMYu%2BW6nxVzUJEowuwBnjAxRMpfoiqagboKyjPtrr5N1lqx6%2B6UDJ2YpqQg%2Bdg7evOix5%2B2iWgrxZB%2B9JlhlTSv3nF33FUYO4aUuWOSrkin2y0vayv5pjVNDrM0kbZclW5fF%2F1W9UTmLTEjdtRzCdXCvcyhwuLt4ft%2BVWckf6ZmEZToLF8VED5vyCBrDQorOigGnx0tj5yBHu58uj1e6U5ki0p%2FgVi%2FMhlGprTeJYi3yRDxw4NTNdqD5i4l7bki9CLaCMo30zLy7cZg2doHa1UAyPSqQdZzcy%2F5FbfGYixvJSa%2BzvT4X5J2S8DR0Nw%2BZJhJyeUkdh7oevInaI6ByKi3C0SoysS7feMeTiQGWaAEVE3e3uoi2PkDlaxqDG7%2BceLuEs9D%2BsX7mCGL%2F1l4IqbAwryfVUctO3AM9LltcwxKOS2fLm85ufzNpLfScxiMAXig79Fh%2F18TRSOJ3nRIR3Z%2B97Rm30SqndODMS3C8QDeUoYmsGdEIY8ElSRV0wJhA5wCGDEZELbP1DDcn%2BLJBjqkAfzIsDa0guOPwR0GmPCpVwzNt5Gu7yiqlKWTKJzIzQ3YbHVc3yhNynkNTeIaAYMCw%2FFSBg9UV85yuhGYyySnmgOUT5nFWFpDnRQZkLqU3B2yusKxHeashA%2Fr%2FfHd3Gmipcsf5eehVoSN%2BuiX9C06Jt8bM2fHn7YpiHDcaTH4jMfwFKo30h64xrPIl6%2BirUC%2BycgWdjkklxYus5Kn670bP49Ldq18&X-Amz-Signature=f367b4b64ac956b7ecc1fa58d9f9887a3d7305b644f346026d7d57662d233039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

