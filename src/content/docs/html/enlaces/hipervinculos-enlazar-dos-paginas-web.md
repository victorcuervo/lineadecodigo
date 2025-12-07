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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKUBFOPQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxAApC6GvE1WoPOYxNSrtBBZkaAVyOU3RvP6zGtvMnBwIhAPsctphiiE%2F0pia77HvDrVCmeGaKco4jnl8Zq%2Fa%2F%2BnIRKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXm2JX9g9PVbqjpQUq3AN74DZnkdV%2BMQixCAde9vu4cHQsQaBSIde2Xq%2BoUX04cSQiQJ2sLxh1m6%2Bkdcjln0FxYogdzs3eU6HUo8X%2B%2FevCxMH4OMBHAibDExFgkIWKgf2qsMNezMTfFqX99V1X39t1doIAEblL%2F0F3grdxcIaGAu7DsmWBV43VfUvYZMIzSr8CxfPQ%2FqDjvkToWYCmoAC0btRJVW%2FxdfcHX6Ah8WdN26cKU0Xmzq1I84lOdG0juPv0Rg7USiTABPuji2opt6TO07oPNBE%2BvOX568EqYI4%2BuJwGkdUiKeeILuXaAd7PoSJ8fdI4hrVO6A%2Fc%2Bk1h%2FMczg6kIq1cXR4Kc00%2BdREgPfp0iZOuWyUJ4gBj5RGWhx0FgR9dZIXnxhbrsC8VBAfjp8rc%2FjAQlov%2BXBKCbhiCCPHhFwWCtfzeW2AuirL3G%2FNGDcDbKjUAI9W667m%2FmgiGuCobfUXWHF%2FYQIkln6m8S6L2jZpQgVWpe1l1VknyMcaItfzrN4ceF14ZR2JENVpFHYBnUc%2FiKpSKnNMgzENYsCVnrGV%2FiYSWdfT82w36Xh9vQpMRheaT%2Bs0Pg1Ov%2Fe3Y18sfHHbEPeqFmS57u3fUY8%2F8Ze7bRw9uJcKta89QqY4crwoghupTq66UMiDDLmtXJBjqkAdilQM3UE0etwVPdeMCtMa9DGngtJsrl4faKAmJa1zLFccwpBDjYMTdTgeaiFCmqF7n1vPuSTXWmN51AYoN2BYb3OVbL7eOwHCGar1YHZz%2FyTWXA%2B%2F4cp8pd%2F2YO2zTMD70B7BbPjnX5WqMqyqKuTa%2BfNvZvwqCwcjj6kyhGi4COYkwvHxoxxXvntkIgSQZKKeT0ax1dCio8N0ggWDJMlyjuZXK5&X-Amz-Signature=a0fd34d21a152b0725c76f55667cd5f5a989e8a2324fde9de43c89aa9d52de44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

