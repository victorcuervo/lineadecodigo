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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOH2ZEQD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICY5OZPP1XhVLb0N1DhaJ%2B98a%2BYlZnFvsc7UmFU3NUg7AiB8jF89OzC%2BtSS9gtJOYUgpUsQqE9Z%2B5XdUC4SInQPO7yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMtsfdKdwGo8r4nJdnKtwDEF2J4HgxeSpFt88IFMZxl1MsIm%2B3G1B5Rb7XaZ7arKBJuHTVDVNHx2r9Z7BoA8mIkbNdQbvNCTJULMAdMPHDf%2FKVMP1bU4xOdhP4iI%2BFUk9glWLE8e2gD7QAnqzKV3oWGMgI7hwN20Y7uog9QmCga4FFMHAhR5UDwHRJUsqrAkaC6qPXvZuJtZhhQpL62XsdoK513EFxs5zCzIkNLvY41zMZt6%2BuFnhr%2BxYBIhVKpmSPFxkqHakmuZRr3W5v7rV5bhxTBbt%2BVWBBDq1MiGTwauLNpK3jNoKGOuiNMX8Ti2cBSZQTfqrKHmjynVUDCnb829EMr1gM3xDL8V3ba8AP14kRPHjRGqgGdU%2BsMqwYkqPR5a7o0s5dq%2BzyRbCGvBTp0PMXBBsk40iqgIxweom5ByRNGE4hDL5CQBxpSan%2BnrDj8E7l%2BbIE9GTvcK2PzA6KnsDd3RqFSD2fdwL0pkZ5xAI5%2F5mDt3SO4OobaPHCuZVeEXZ2RJAsFJcyHB914ZMPiBiakqRY%2F3fe0JZabXceee7M8lFiZFmU8lGFf%2FG1ddIiwwCDuyr3y4VlAKojo1bpuQIAcFJNKo3jRROTnCIk0TZht2Nx5L3LOOyS%2BJKc%2BMU96iEDaOGQBAYx7akw5KbQyQY6pgE5rDGxzA2%2FP2cSrNNh6Yt9q5nJwHqXax7pYHVpLBsBMO0XkwX3BFBsw5LdOllCpzbbVUXtaJY2YsFZt9xJr5EVg5U44qgZmTuy8v0Rii5CeqsbLWnqdt2aEJvR9xE8QCj61OYncCnt4g7JFwTawBzkk5ecJHDY1Jn7fnSKXFoSXTsp31WkWSBkMtFz%2FTShY5XqLCPNiNCvC941fh6TPbZLY0xvWbiX&X-Amz-Signature=c6ae55a29591e3260afdea6f6ea5ec06b7a74465b6b9e019c4bb4d3cb82b2bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

