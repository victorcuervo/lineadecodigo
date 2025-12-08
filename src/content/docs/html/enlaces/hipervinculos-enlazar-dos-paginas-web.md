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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP56WRIR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCXLpPLHp74VJI9ZeTwgdbm9QitXBggKQRjgmycfYcaAiAws0F%2FhfFIHmP8uu2sNV77vqwbzwdPjNyypgS4EoNIjCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8OPMarhoQX7WI59bKtwDk1NAjl6lplK2To34i9aOgXKOgqVpgS8lGCQ3p9yxz1DWEAMUXW1zwKsiFyWQ9nfsA%2B5GLMiIAJqdyEKUf6yh0x39DpIhORGMBkHrMt%2FtqfEV5tonH9KvOwkGwp8kmW5uqV0c7IIUFRWMUEdTxaes1ZMUVxmmVRvnuc3VRZ0pPbWxt216zs1zsdU34zp8N31bbBrfCxCu3b6zhwnCY3qaD6t8hCkb0Q0O139fwTA%2FzQO0xCr%2FciMWVA%2Ba5m5g3vSOgypWEUZc%2BePt90jHG78r%2BkPgyDEM%2BRfHHHOiJDRsKqCT5%2FH%2B7HJ8OOVIpQ7R5WPXJ%2Fi4vGdxtJl3S%2BLBvjjXoz65s%2B8eiJarkmYSQKInXUNng1AY1StrS1HUFzkrZEzBOkrXBTbOZkD9%2FyvimVt6Y8oaOuZNSxJKEZA6vWNGBFsu0RJwsVQeq%2Bs3KJECSyWvCUdDc532uTnsshLdGnl6Dp9rF8eBR55c6yGHZvfGSsz6WxzQDjhG1eULKSzOR5VVH%2BhYlvJ9VsvMBjaoo08sFPNDuPck3ak9uIWUUqYptNhR0YcH7G8ZHJNdJWYxnEwJ7yy6e8NfSjYJVZq1m8RYOXSFFc8dnM4n%2Fj3eaHl1vjmxWR9X815oL9DsFkAwtofcyQY6pgEWtQAVSRCEAhUhozLv%2F26ltN9LgKbu5q9ORiN%2F4rnJImbrbCly64YtAdJublSot%2FT%2BBbuQy%2B%2F7z7hnclVfW%2BHBRFAWFwi1creit8Veqk1XwhxC35jK4XCOWy%2FiIvyjlclqfInAZUmXV9DOx7TetYGvLP8HiJ1jtziXuTl%2B1lFaafe6WpERyCoq97ekqSlqBxH7Z5iWE1h4GYsrXS%2BpXQloIl71WyAU&X-Amz-Signature=877b5675aa8596fe97ffd89f51f7c7525a67a6f941dc9577756cbc80aea4caf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

