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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664USDGSK2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDvgyRNGR%2F4BTwoFifuwO0jrInXgf7C2e3BxBeR6y%2FK%2FAIgfBSbXKHyIe5%2BEYtfIar5Y6h1EJyM1htQv5GMBXGMgnMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLY06IA24bkrBxHW%2ByrcA1WU%2BArLZJLSEfWIMbakn4MjwlY9H7lbBviBlUxzX0dfTFgiTsTRramQDsC8A%2BCgjKqAqSQAhqAnCcze6pBBL6a3a8GZz9vQ%2FFYaULF2DhDWwwvLpKyjW2eayjlmhNvhg6lNdsc%2BYKl8hYYXm5g9fGH31SG%2B5RYfqVq6SjSlYec9grF%2B0W%2BWku0wGAHKnuh49OjvZJBQlCKErsfWXRn2g8%2BCUorJJdfJDIm6W0AcqEWXNYT6blbcr2tI2d8zOP7XRzJHqc3p%2Flpu1oQUkMfVxvDR1TGa%2FStfnQjlDO%2BAYJILFb%2BjXGA0QPYLtCUaY6WBAXrWlP9VpBsFxJj1MePOq9BbQ3UOUkEW%2BY1nbEhCgU%2FCf74XfBg8BzB3gW8NMM39qxfpIuXDqDR9u8w15AqzPVW8SmMmUlcAeUOJweb%2FtNgUrhAoxUPFHnvnq23lBFNIGo5p1URlTYuRmDhpuCtRw%2FlYQNfqNFujiu6ZwDwoYG4NvlfAojVvZYVLuElHdHworaWmJf4n2tnYTo6ALzN%2BLE1si7hu9BbTPt2dL2npFFG4GnPJOop4R58nyOayY0nLHV%2BZw12GFG%2FZsKlXf%2FiWvc4ckCwiW0ZU5dDiwzEmhWB82IM%2Fh6ptZEckbXmrMIGGxckGOqUBvM%2FE%2FqdZWmrVzZp%2F5THDRptQJ8S%2BP4cAmWHp48DNtqZdFHBp1IHMU7pPMMgQ9gR7EVJ0S0F2XS0I47oG5WaHBZig8mVgSQ4nMa7iHlJWpxU%2BU5n1mVHB26LFgiQIy6uBu3AMHgVK%2F2EBL5KI27sb%2Bo%2BIne05xXft1ndnVjBXeVe3hhSwK%2BocNm8Ls7hCwsKg9IOE6MU0Z71zATScbHO%2B9%2BJz9qxw&X-Amz-Signature=3dbc4aac6974104f1afff45c571d227bc91c1cf22b58726d55f906035c13105c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

