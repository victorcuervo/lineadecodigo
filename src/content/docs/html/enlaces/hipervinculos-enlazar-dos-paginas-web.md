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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOCIM4I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtCVfllkd3VB%2BxLsVfDyhxSg1vGr64SwpZQbaDL4wwNAiBIElrkCjo%2FNrMvLMf2YnGTTumdtL%2BmsE%2FUojOkiUsoeir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMfpzBrLFHtyVvBwrlKtwDmFoZtYkhuai%2BfP1%2BTktHlPCNJDNljtF1MOWAJ3rF6gGtjtc%2BiToOFipwB2Ym6bqeg%2FgVNiHsOpWwKla4anPbh81sNWySTR99IwZtya%2F6iLcX3dU9TnWyhK0CQGMrd9lwJsQZJ4Zt4GuX97ntSZ0DSoIdJjKQGyCdYFDAEHP9X%2FG1Nmyv02uvs9Kcs70tihtNGZmDQ0B4yPnaDxSmeHd3QpFaIG%2FrhoB27S2EmBq1YGZTPnCEiS9XQTlcqDxiBkSJ8cfulauhbb0TUapP95KHcxPZbQzHRX7UKiUfcXEO6soIoxq1O1huY5FQQNi8iED9eTQcxtSbtM9fgrbx7Co3PkGxAzzz4jGb5P%2FwKQRS%2BOyP%2BmHhRI%2FqyClIgIrAruM8ly6%2FIoOw6qw7JbrpeO8Lnjad3Cxyy3WUt%2BXUkj6USmbtXWJ0C8ez0eHdux0IaxsYe6VlCGxU4pOQ2Of%2BrjI466mzMKiCU8mBYTQGD%2FTH5S5YZ0jn3dPQqwbvHIpb8Hmh2uFFq%2BuZdHouqcsGHgXs5kTwsUDNtP03k51YRoBQsrOsjxnZWNYhoOOIm18ddoLy5TSSCLVf4bvuiZLO9qguenDGmWrjDh09wOe%2FDJxxnEshfA16shIj7NcAC3IwntTKyQY6pgEms5sZM7vtv7GA%2BIkl%2BHJPhuVNlBPPj3YZtz6ElB39tYic4ZVFi82P10X%2FWUoSNA0komJS2bsIDh%2FtgdN3oLT1KYfCtMxVAZbxo562mi1WjV9d%2FeFCsHbqxXh8HH3ZFQtsXjNEjKwTFKV5y4sjciGSWt%2BGyV7yQOa0VZWZHT56PcKjCN%2BKg%2FexQ%2Fo%2FPKxRw6w5D6ehs5FyhSF9CmRuJ4s5xbpemx3O&X-Amz-Signature=d93311d35c53565cb6cdea7801e177a18bb24306a1ccc925e1e60da38f937b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

