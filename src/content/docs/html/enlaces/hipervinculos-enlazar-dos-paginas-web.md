---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BKNGMWA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCJj19%2BmtFfB7tG%2FOTS1SSrlq203qrRXM1I73PdGIjBiwIgOK64HlkT%2F%2FC2lkz30UJw9ei6%2BgTbac%2FcWNvdzOilhw0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJskcHTw39HiGjPsyircA449Mp%2B5wOGsijh%2FRycRvrZqMBO8ZgH5IApfgovbqXqC32vb9jU3LTCZ4HJ39i5CMNh5fRHVpMhAdDfU9c8q5RW6QHtfGDe%2FqN2Ky9zFrBHIxc8WgNeUdzXofEbddyG%2FYGVHoqQKr4A8Jau%2B0iR%2BSWOY4KYe2f6dzled9vywVilnz7idnmV7LWgvNF%2BRu9ZE%2B7XH7pPxiTwKPvkHgm5b0nDQRaWXdmj0mVz8oNvBQXS%2BfV%2B0gpMVuiyjoTpzaZyT75y%2FS34Cy7grbtujbGDUSI6NKNrvGVhT1D%2BCPm3HR1t8htYx7rBDQKbaWydXdHCx6mb7k1S5QI%2BWL8%2BAmMJ9KH51YVDudXZshEKFpAHwv%2BGVHyZC9EPeNEz2jxNOIM8lXzDqsxzdwfuOIgF2eo64Er21hUJgquBicPCwhNgvl2m5xSA3YkddCJS8IHdGqbfogAqg6B3DLfqoFWJM0NIUHRtY1dHenjwDgG5pDbvwcTTj8rH7lxGebmB7r9wr773LrIbzrRC0s2q910IkzI5RqdBLDnCZu%2BkYfvQZAgXwa4fsircCgq9Y7fFN5ebSqmf1nwRdlkQxBiZgd%2F4XzTaqP9j3kcVmVaW1xEr8ILT2Aci5NHHnATpXPXueH%2F%2FbMKyuxMkGOqUBuz%2FBX11vH%2Fy4J0UpI8u13afoE26VXe6cmbYzzYuOiba32csLQ6gHthXdPX2cqMnmYSXfRREVbSuZWnzUAOGwNkliPAkiAbHtRRFk0Gse096SCvKLz3c5zh%2FLXWsgeEByEU%2BYGKiRzHFtG9%2FcTrUiSu5%2F5ZKG5mgT7hT2RMNDApljDNx%2Ff1YW4ZjNEdSKIRgrJ%2B7GyJy%2FoXYR5axHNRnf%2FydRzX8i&X-Amz-Signature=161389a2b3153bff6629322454d89e89843042b2af2fc4364ef9d35a61a2bd64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

