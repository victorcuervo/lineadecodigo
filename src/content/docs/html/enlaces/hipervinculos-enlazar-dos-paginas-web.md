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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PT6DMBL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T222250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FY6M%2Bq7QsEcsmMvSfSFR6UDKSJ8BfijJOGVUd70uWwIgUsBgL1cYjhoVI7eYYQ12qjLi%2FYz00cvpCtK3elADyV0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQ7WHrjUgSYt1eY4CrcAxPN6xqRkWcq86L1KPG%2FIx3bcYpqOWy%2FnASBTCq8yZMzbzTsyGiMzf9dY6b65p%2FhcctgMqgMU5g0DNtG79t9nvbPyvE26UB7cSAg61qnrK9qo3BrUIvFDmnq%2FcxWwil7wzvBm8BB7XZOkbvFALOZVh79k9LW4Dl%2B3J52llyo%2F%2F4koe%2BssCmjc6AU2U6MD1oTmf4prYeKtV7GGDhcMzKtm9bkNHv5GCJYIE%2F4kWScRPQsyWRbFuJhAKTAWuVRyzoHkGOmyWUkM3S4GC28Z%2BYaAnzM%2FjuWh%2BIVDqQG%2Fnc6m1AyG8Llr3TdEytwDGzLoQaIywU3nysSfrpwgeoFPRMDYFMJxw36JKgk4S3lu6qUq1c8gtFhh7BPIVZkacTt31hlr%2FutSIHipMXKW1awDryt8EOctb03spDOdjp3HqRpwHL0rpg8Ioza5Mj9mF4GYV47YPe7FdgF0gngyOdm1Ae8wETFp8UIwnTjNRSHNreQx2Pp3QairCZRmN3NsP1SIkFAZoBIRAJqt44kQYlzWIi24dCeqhkHP3dI%2BD2OlyPxBgxzW0O%2BSkxjNMTiC1jLU0NAWt36%2FHxNBFeOLvX%2BJ%2BXeaXQuMyjc75oMpc08fnu2QNIKbYXfJuHaKlbVktS%2FMO%2Be4skGOqUBJlk5jDuI5%2FLJyuH%2BW6NKNwgU3h1wjQ5gVVCKQqBioGAEw0mSCwq9N8D7MvREj8Sga2oigCVDvmaytUfp7rWfUb1SeOw7A03ZBaTZX48bjDJunbBflKihUBfB%2BkXhjV5L3YPVVRr4QXC3bLPenUrYOhU1ey1DoutItkMhfMT8blAy24JfW7ZyaV7SaTvJu6vCL8pOTRcYff1qTk5BPoT6RjLXb8Wq&X-Amz-Signature=81f4bc8149c8bf55dd783e33660f55c2515cb76f05298cd8dcb579080b6a6b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

