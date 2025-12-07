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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA3UUBJK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHaqX9KH%2BZ4k9c9C2F%2FSE4rAYnhYoogwV%2BtSs9cpei9wIgP2jYFC5AyzOeP9Ylg5cReCqr7W7ls55u3GsrAnmcj14qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJ7LIjYiebY5jQzzSrcA6WD2jvPn4to%2Fyhj5zslwy6vQaxD%2FIlJSX230xRG4ItDuVas0BzOhWXL0UbGUTwiw3YbKKo24mkzMGhNHtI7wbanGnVVSUrpfnmHRHjJELABFmFaN%2FxpUjOhR2NCflPWNBu0YlwlDDPphbWsSvf7sODSNztG%2F8Q1a77%2F9tyGl%2FRi2eNqbMMTEik%2FuGqcBNYLy2xa3ts%2BcQOrR7IJWWIHufPMMHTRuSwTAEdPSqo%2BEA7FpIewTrza96SPHWU20Si5C7vDiB5lMYiEZ9pGxamuvAbU5Svq0v%2FNJPCSvlVPF41ZvxBc9GXUCm5iE7IjbrR4DoMDY1wBpNQHtZf6CIGJvxe7A7tCmPpsGWB2mScc54LAktXIVXRtfRLrwjiqAdkwVlkk2HYEjf6Lb46I55PdcnXTNYnArWQYNoDCfszusUL%2FHxP7McJk0Wn1E0YgNfIeKHuanxHwuBHl2SvgQjRCUtXzSh8tdbLWDP%2BGVK5FKJhkrEzL%2FgiYvdvwP%2F5f3BlSW9n%2Fe%2BvRF5K2JF9uhoQTgAfXR1Ni2wkXOInDvwumxaZfV0MqPai1jvRvN1LIxPzdrYSwMKByo4DWmPtiD5QPhmkLBzkHFGzZypTHu%2FQ1Mlbckd3gaAYwnsIXXiKKMMuZ1ckGOqUBruPwqJcLvDAzsvl9Z9jsGGaES%2FVkp4JnpenThcEGB%2BBT1MpID6GztkxbTpunVgwldBPrIIdbzHF7IrIfON%2FQSkWg0XaFaEra1sQRfPZLTarX9kwi3Padl9uM3kW5oe7S3ACCqOH0ci9nKGFHRH8PLckynEKIhgZFT1DBc187p9TXBXWL%2FZ%2Fu878odgsYn1Iai0%2FbAVSgco0MoZ7%2Fyd5F%2BW94uoWD&X-Amz-Signature=7aea7a3ad0abb010e7a2e50d72cb395cb528743a3b17b9f1f5755f8f619826d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

