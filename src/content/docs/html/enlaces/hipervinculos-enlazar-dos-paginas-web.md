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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUW7SQKK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T151425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnUKQZt4zK6yyWSkpNxRcyXlyECeyFi4snVHy4bYlw6QIgEas%2B4rNHlZVlKWLiVIWFFp74jccs9m4xRE87C%2B4iwWsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAc3K68GGLRe4DG%2FOSrcA5xdxbZvPeyRZvB4WfwHZHuCcaPuFgyRftOC%2Fu9QgVqMg5tBg9ndEUteVmE%2F8VvcmKW0y4L9arQDrvb9oP0%2Bc8OcSmfEJKfPK8aG6FTqfefJKQELvjmsUalN%2Bya2uJAXl2IkK2P8GFInlTcmCbVPalSevGav79KJBP4uvBlKazqC98YwviyCmXsAyheFSR2bT1gog1K%2FP68zm0Cc3CwJXCXtCy1vGWnAVokhNZ5Spk7Fxdg1RI%2F3i0gJWEmpY1Ob9YQLpXZ611GT%2BQ5ae3HW2OpXP33Wem2tK5CmMxLrezrrdeNoBhIxDHtxtqd%2BDtFbZhxuUZQtDlcmgChggNMuG3vsGrXXA84bR5ThJ3%2BH7y4372kGEktNUI24vE6H3LXaxBwtVtM%2Bb%2FLX%2FsBVYgeFnvk5QvaSG2VzxRxS%2BhFwCTW%2FEIu5G8XoT%2B%2BZwV56v%2ByJk%2BcPN%2FhwbWPBMQjwe%2BC24scq20Y76BurbPRTgW3vVc43yuDCZK0f0tY7%2BBL2OmcEt%2BcDi3wKO6fl61krNEsbV%2FhXxwTnJ3SAbrGaRkpN7fRfZBV8iQAzH%2BdCgO%2FOM8Pd8RxlnC6xniKXNHt7JsZXxMigRDc90yTDT1s1NnkhIn6a3C7RidN9xObbsp3zMNnd4MkGOqUBGCU0l4SDxooaUQcwRi%2F2FkKDoW2Jo0aJjCEtK9V2n1FuisC5XsOR%2B0MtlwUBGY7l0Y8yk7vjh4VSv0Rl0Inofhl5995aSwCFyHZP7AvCroJLSnL4LvDRelTrSkdnQ6H6XcSEjHuaG406wO%2BrifUfovGT%2BlNpHs6aSoPCspLOatdI6N8ISQP7WVLLRioF9xn0V0MJSM3V%2FvdVrOy5JpnDoeMXwIwi&X-Amz-Signature=449d78272d14c2112ead1429c56fc29944a489d7cd2e5a9fb0328b6f70a870af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

