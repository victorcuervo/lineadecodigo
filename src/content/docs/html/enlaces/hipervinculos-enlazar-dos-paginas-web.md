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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3XPFK4X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi1o6xOirrjRsxErbtSNa3aVNcthwnWjI9LgsuCj0%2B4QIgdSQJfNYlSmtOkTuj1J%2FjSCwZDaPkSd8EIfvomL%2FznNEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBt%2FdXJQi%2FRxUnkcxCrcA%2Be3LCeasBW%2Fst9okf3oIglc%2BBnpjyacbiu1rQVSstAVkk4L96Yp%2FwjN0nYQD5AznkbHACCa1wrl8%2FXP4V%2FgFQUMq%2FOIa89%2BqaCbAxPjSm9H%2FBbwzy%2FFTfM0M59bzL7trtPI8PCVbWgEGFB87FoseJ%2FdGPhdJX3XvymI6KYdDuZJhafJ26nJGDu60Ka1v3px2j0WHWTKvkqPEuo58K1pnFqMqHG8j6ViJJ6YPOx8b4DW8TJvETCwbGDzEp4yeEWm%2B67Nba%2FLpr4N%2FPhPmxs6TH%2BzEp15AegpJs4HegtCo64rogchLjHAvTNtYqkYFDYzDE1eyAq1rOtGfjth0W6sEl5ISZ6L01YurBnpxFkTPz8ZQrc4iMKuC%2FM3xXut8krKQ8HBBb69BWqv5d5btnYsrBd4uyrEGuzb8aCaO5tqxj9eJY6cnlMzg20%2FPS4soXMskJEiZJ8EwekAWeO0GGWYhuGdjLzy4%2B%2FTLNzqd%2F7VpzLZ7sD7MjtWXQvBJpXEDUoKGmZ31a82v0fdzxBQUewTxW1P21r%2Fd%2BxyFsByOV84BiFG%2BehhvVqy4Tlv9kPq%2BrSiRanT%2Bj63VEtiPhoDKzcjiWRZC92WOSpz7MIF8YmmgbiV97MPjs%2FR8YpMreY6MJDsy8kGOqUB5iPmSEUu3Btri9Rfd2Z%2BymUTnOPU3mKrtsRWaMJ7PLq9E4lsZi2nY00ln97QPUPtAzP0fwyL%2B7iO6j1xbxdrpWpYWcSx2CAGJX8XdscGfbXLi%2F%2FzqGntn1zhlT8tA3ESzxvWiRb%2FV4Um1y0ZFex6Hu5a4LLVo1GJqI%2BKM6JR8ctlOC7OQNdG3dJtNneFQX4U%2Fb6WVYFQaV3KsSIxw1IyN%2BEcQkI6&X-Amz-Signature=03af8e6fce99c6631349e342aa3074bb5380295532fa486f76353b44a2a487ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

