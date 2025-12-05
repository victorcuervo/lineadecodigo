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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIGMD2L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdF1NMspnvjaLR7OQps%2FlBuhtM7uOBrjTHlAN%2BVk5puwIgdwC%2FkHFp2dQP%2F6Xh2LerOmjLWfbs%2FjPTo%2F1Cuj6rliIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDE2WmQCrzncdQ5Jd7ircA7kzCVxg8IgMpmsw1jHkKb4hGCwZ0P8%2FVDaE66VN3nS0QWLZ4s5HrDQLciVK7fQANUCDYGujjqn7bU9WYtMWqzLcAvlJrjpwBvDd9FT%2B9meeimpYOVB4jl2B6x4fDVNt%2BZ2Fp96x76i5HbPcds8YaqG%2Fd3sKXN3a0sjtWqsDamTB99sTiJ4kEKfPErdINdVj4%2B%2BumoxiZ%2FYdw5hGpe6L5ObcEp6u6tjcOeJ5OwyrmgbS5TBFhCrCdhMQ%2FedkQfvqhwxscapEqhF2Qavvi1ibfTEFQRNNF5ujj3K02%2FRLfTZQ6w%2Fos%2FHm01J6RtRI0YO0yr1KeUnaqzhVnrtk5QCtLTEZpYrOIyM1Mwp1f3ks7h%2BV59hEkVbi%2BtcSu7ACvnLJAKvFwnitn%2BjZpNJsSkC4Mox27talFUDtfHvOxMjmPoaQTEeauSntArkKu26BY62wxlKPfQoTdRYgpl0tytGPTpkPEl2aJ%2FW%2FTuz5DlOswuGudKHLubJzzARMBT8pstTtJVVFMOZfSwHsRSa7e1UqCJCmD5Yq%2BwIsqqu6Rux30TmGQKkYrAYyH%2F4VTGusUpSdsZFKO88QzDj1V1YvjhlvMI2NnFRUwTnDYe5F%2FJN2pSZdbrYo3f8BCXKYVSG2MKuMyMkGOqUBXxXrFzTmELEDMof7jGXp0UnqGbUMDMWJ8z9JkrDrip2oIw780VdoyQWjAencZUVS3TebJySZ12HtUFBMspvxTxzSu8qgE%2Fy2ywlbABFEK02B2n%2BCL2huItAAXL23qAd8W1YMKh%2Ff0rto2H%2B4Sy5MRADyIYmvzu0ow3DD65Ugdlj6mxwHou7g5Ekv6%2BbWACQTCvc4u8qWgRF5qyw6cFMAaWW0ola0&X-Amz-Signature=bbdb3601d7754676b50600c49d1a0028b93ed53eb31485d3ef635a0fd2d1f543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

