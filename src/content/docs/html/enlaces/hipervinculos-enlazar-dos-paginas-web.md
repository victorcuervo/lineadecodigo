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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OUNZMFW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLQxSaX1bNBlqTXegWU65ttA1MTkzsV9m540NVH2mdxAiEAxQpO%2BhA2pAeIjUgntuOD5HJS%2BE2tWqTZotYuGosy6wcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbjygp%2B8Lgtuw43YCrcA46YIe6lHvzHdxZZA0yVb85x3kjeJ06wdA5AVLHkes0258URBwIjXdgvF5CDUsQjv%2BNurjzpFwMniC9n%2ByC30dOy8SMJkBLQrj8nKmU8ec%2BbaWFHskRIogBDCmSQqPF6q8PL1QKfqizt%2FozIBfzlaHtj6cVL3h1dCAMQCZvigr%2FIJjR969Er6FjB9wr73sFCI1nB6ZUUvcDe4xt8sQ0SKlTWgQk%2B5TVWNkC1zdTKdD1GL8%2BTWdna0%2BLOguI834eWnrQ34T3JjPOQxUzmjc9PO8nT0u%2FQFOThkoeMqfqjjiY9TC9ZdF0n9fPm9GK%2B1mrrq6KJI2xJedqmHAcPZhiFkYu8usKq2%2FNsLmJMh6n01NSMsNNxmfHi%2Bwa%2Bn0bOxN69h6iML1k3%2FOkJqDK5i%2FP7S1cMbl0tFwp8WEsmPxE09DpVYWFIyGdxCY7CbBl%2Fn7mqa%2FWBnOdWsXVypwQxhfgqMRBlmTKYgTlYjiYnlnosct9KJqWFw%2F9y8P1ymAYobAM3RjRDx%2Fq1pOvdz6lIRXPYaZVcetbNzZdFCB%2BXVdFQMV1a6y2J4mzcdUVePockk6B5%2FKKcfgOpKIQ7Q0HPdVmG4dWtRZ4usnadvH8B5MZoEpOI2Tp4bEEkPt7kOqS0MPWZ1ckGOqUBHhLAkdoGR8phNMR0SkjRI126qd%2FUZhZXGE36fVhto6I3ckqfEHQm5pNwAN4QrXQOHEvX8HvDMeaDD%2FpyyTZZ8OYt1FudfUqh%2FjRZ1mk5is3H5%2B97pp64UMxHNLUsiDm96BDs3QgLBM7cVyDJILaTjQni5WkYEOgIwDttwbsAcn3Tpsajghr8L8igNghF7TLbJT8o6G%2BNfw1Shw4coI1UbnzwiJF1&X-Amz-Signature=e21752d0bfee0c90711fc543faa3fe4f301fc01793a27d1815f93fa8dcd63fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

