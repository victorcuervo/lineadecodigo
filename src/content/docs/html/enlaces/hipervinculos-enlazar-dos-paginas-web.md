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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOECTGFY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa0UpLxLUcIqH5IDgVK1G80fdW2kWU0YJljxrAdSBqgQIhAP6%2FOnq2SjxO9eD2616lM%2F3236v2W61UpyKogm2pQpn1KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya5Esn%2FHS1rW9qUO0q3AMoYTE4SaWqmCatUECRuB6fXJGe7QtD30fIYPZa7yu0OoDjlQ68R3IYxSrKC6rqDyCWLseBCklIpe6MXxt3fmWoa4vWfUxw7%2Bxoe8aZlB9b0IPPQcdBAu0DFkhK06mz3fFAtRGnAMEwyu9jsJ4Wdxzfq99vvSz%2B4RBFfZv2QkvhvDeqkud%2BLaLGmVaWjiye13t%2FeySLqFynFlRFDNuHxF7AsIrx%2BIOHvBQNgQgdeEs6PeR5Uq%2FxWeY4K%2B3Jq0PDy8jFS66qvMomAKegyCJgvtdfrL%2Fod4mVj%2FD5SsR3WdvJgCFjQOrx7QghGyB1NeYLlEgqOBCkjdyDT7srKfxHR0HXEZ069swgioAT4gArb6zu9oMpkUZubEsRU5i1f0jKZvWk1T%2BEZYqPLtlZmGQ5qDChYmSbwUAQ1jcuJTA6XXh9w1mIbWB5g%2BfFLUQPwKhNbrWp5MaCOhipRlPOGnJBRC9Keg%2Fol985zvVWJ%2BOIi%2FpczwQ3Og1keBOqhvYLCbngfKDYAQCJuxBZLG2oJ7gOdWtq6PQD0wG3efYxX4FBI3gSiHUfMIdJrGfrbLkgZXJB4LQqEstgqE7cZVZAmAHwbIPXhGMk7vD%2FeHrReukEW5WQFCwXkuQpdeh5sd%2FGzTDBmtXJBjqkAdmk%2FAYUp0J6Ox8zi%2B2HHGECvq9lR9K%2BfMIJ3N2I5Ybe%2B9mEVcU%2BT1h5MeiGZNy6WuhJFiyTpmFAFOshd0rynkRC7sdXozmxCP0SkdkqdTU3QbjOJcdMGs%2BjzqMsPiBbxXWJLIwkslEb1AXv2KU0Ohtg84ssJxc0Vq2yw11wphIOAZNkTNmOLpDKltJKj3weNnlxgvCPLzbFqZaqPHykiwR09QB%2F&X-Amz-Signature=f9536bdcbb2e79e528fefa5ea59ad57e5a0229268eec76de5f2b5ec117b4ae45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

