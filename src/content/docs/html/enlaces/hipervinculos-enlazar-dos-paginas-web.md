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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVBFPDZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFydWNjWj4DBkFhrCsTausLg7x41ORLMSy%2FAcdaI9X1mAiBNIYwO3EthgLK85SfEuoKRPRqlFLTyGgfF5FlbgOSP4CqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3zVsGn%2BR3ZXicjhLKtwDXM1%2B3Z1eH4WRYFVb74eqcvQOJR7I4MZSPvahg7T0nLt0kDt1xDdpVTI35nAKOnu8I%2BuPyrpsTugpGpcBM2Y%2BRP%2Bw861vFzBZ9NyQXs00go92s9Q9JVDbwAA7LkdNYhuBUs%2FxsKiUMoyh%2FuWbXq6zPbmB2xks824F1WmFByyOUTNwbPjzKFyMJfaj2wFzzuSGfDg%2FkVPX%2BKMRl3BDLjIrlMh7PJCwvCXBmWLd%2Fz8EkUgkq3JlIsYBmpR2rpcOmF1uH6tWjf8yQJeK89Fx56GviBXjnwI5FoUWd3%2FBFbMGkfiuVmk2xtMtWel0heBox3N6xvDnoSzeMViuZehuJSsZHiQVcdILzLmkk25ueMkK0T%2Fn4d7wm8vbWXtKwnl7kv7ttVlhRRqn1G5RV3Q3eSz0%2BCYsmoo7l4HFToE0m5Eq%2BGxS%2FYKjBZ01EK0vz3s8%2FO8AVBu9bGHkh9oWiNhWSqFYf8ck%2B0YpA9iK9Aqd2FtZwB9KPpMhV%2FUEepNjSuupJ1ok2unCGyrftvT6dhAtroV1Z67r70gMXY6Wm%2Fl8wM6Vu%2BbmKhb6Rb%2B0Mqeu36YNFseVKGMEA8bCdy7TK%2BrFMaaOt9GIr2yHkspCnrN39Srl5n6YFjWRv0wvkJ8vaD8wwprVyQY6pgHxhKcw2NiSdQnsvbbHxaJTacHzn0fVgoGc1yeFEQeuNiLd6u7WHrCgzxAlV3I7Pcq0OfebJg4GoMyFtYtvcHKXYTGL3ptNzV0hJSx8Mm6lzsyhQoGj4KnOyynFZo26I58ySk%2BQqDvObJMGJ8vYxy3g3Kqok8uw%2FrIxBd06EunrLU8xG4VNgnQ%2FfQMG5y%2F69yOqv78OaihSKo25cbNPJAl73H1RLgnG&X-Amz-Signature=88d5507246f0e73092a309395a5bbf1d35946096368a765252c4c99a7909dd85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

