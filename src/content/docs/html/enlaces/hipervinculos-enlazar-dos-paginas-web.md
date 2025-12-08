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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQDZOJX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIWlVH68fqA4yxfXyYG4MILcXuFbt3M0dRfNMc5p%2Fq3AiBSEUsVAgFJQ1pAEz1TKFEOyZvZHQszJYeIl5M7frsaxCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGE4zJmssi7ha%2BBJjKtwDhhbs9XjXvAjlk5nufYwpwrUu4YLdHDbBgdMfufyQV4MG1gYCAemU4WkR3RSQR9u4IOIxm32U4krMwtp%2BtJgIZZ5TWHuP4Jd9jnoNK69jgr3AzZ5OCiudd%2BqQlfrfGYOBPCH8LdOPrG0NlAyZ01ywZORSXCTXA4hMRg7PAaswL3KNxfNUiF12jwafqzPi7mhGTGt3HzpQcsCN9Whd5NN8%2Fp7I8k9D880uQqZiL6tThMrsu6p1WpFQ06szgVCsaOaVJkICuGIUHdVuDrU%2F6lsu3NE5lpniZGgzq63i%2BBrEKm%2Fq27Gh8H3AvpHsrhOCmJ3FQfRIMcZJKO%2FvyXm3apEUOyDr0d%2FCqrxEv9y0As4jGH%2Fox%2FK6ZGGHjYWb%2FS6hs0SWEcBYts0TwOhKpKeP7F9PIhA8xjwxhCDPYw2cgdt6vK8OFe7mOCstFU%2B90vioKj%2FBfKzYUQzrZRSY66Hi3hdvvOs4cnwiCFBDTUUSdsFqcGBJhgknADrf3gRfJaf33%2Ff9y3vrbQV3ejpE6t7TAv0DqnTw6owtzf%2BKF1xb5RrC8Roqb6TIJq8xKfyiKZYIUO6C3RJs%2BkWuMQCLysWIJbqKLy3w3If8OagnPo8Tsl2PFchUgZue%2Fj7iPtpC5%2Bow2KHYyQY6pgF%2BjRdIEsWcMksUVTs3bN0xDEzAKZbxE1WgE%2B5tujecaQrv6FeFtdaCDOG6wZBxvVIM2nhLuD6q79CazhwbvL3GHyRkZUoGm6frzRJHEZbxkmHc%2B771Qet4WPlreto7iW44feRZZqTNHVoq%2BSxoQ7JEObE9XhRe3Jz1oKYrrJNgwIR31jBupi8Lgr5dw%2B1W4KA9k86q8BCyotl68vgRPceywkN2yifD&X-Amz-Signature=fa3dcc97d771eeade1b94220d3f72ca89799fb0c6f61aea45a8a342a1468f295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

