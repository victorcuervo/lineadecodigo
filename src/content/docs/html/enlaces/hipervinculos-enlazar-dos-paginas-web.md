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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654X3XUXR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBU%2FNPHtwHISl%2FkhNjmCubQndI%2BXY4uSTPrGUrvCKBpQIgHK3wArL6XPX2yUwyrB4J2HYLD1f3Qz5qqiJhxgfrmMkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnh0wRgKPPbvgKDmyrcA%2Fu8qy6Fcojayl%2BUPLgloERzk55yOVxCcMhX745i5%2FXJqmU9fRqh%2B1XmwMstflzcdc2kTaOj%2FAwAp%2Fe4LRc2Z9gVAcKnlANbIQUveeB4XBYI6nymC%2FNaeD5nHbsJp1UMOKZtVEp9mlrjX09WgIg96zuGqhte4uj20s%2F3%2Fyf9TVZB4t3f3Bz9E7plehUtJmZ1Ds9wASkpp3VAdk7EA6qYceOY3Q4TiEK%2B%2BetHreY%2B8gLJSnL3QU9j1iEZcGIQgPlHOR5g%2F8YI3dh4xXjDrVdvMB1HUjeOyH4RkVudDoas90v7cxl%2BLqB3kwlvnDEj%2BEod1T2brR3Y0E%2B6UsLfmf5QVRMST18GYe2dcuIe1ZBBtwrKUaaalQ8lB6aEWY52Ga0c%2BQ58AiJ6Lmn3b5vJRFJOB4Jcw9oea4OnGaHh8s%2BHwn1d9IzwG49zfhhV%2BxVUbEI4LowSonGhCx%2FUOdsMttkHuO%2BM8GuNszNYzM96jpbgvDXja%2FwtdQOpid2CiuRDO2YhV6vfdHdiQFM8Xd7PgwyegcNb%2FvoBmUoa4zlv7vSFlH1KLlC1gpO%2Fj2oCzAUEYOtG%2BtfrMFZxkWg27xCt%2BFwUD75XlkdIqjtDb82462LTywh0q5%2FVjh%2B7yQVF1AT%2FMKft2ckGOqUBI0qH0Jc0jB%2BFxEi4gvmT0sS9rhqlVkhGporI31QGleHh5O8BsxHMlgUNxpFQOzT7RQi%2BpXKz6JfWqQPap80Zq9JXSeo1ekhig2wU%2F3HtQMUtT9SHwdWYmEYV0LQcy2l1Fn2EMijsMoLgCuCJngNKk%2BhFHvqOH%2Btzuz2TFZ7IvmM%2BB9rbJZJB7eUP731pPpE5e2uaBmMFTkMKV%2Bap1mOIiytyzFcl&X-Amz-Signature=9195ad8d61c94c33d54d299c149ad60b5df4c11484a55e0fecd706588fd75407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

