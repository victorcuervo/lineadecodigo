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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYZBZRPD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5NZoQQv4cLKMblKP1FdYpcmEShvCyBvxjh06%2FUufrSQIgTTyq0XfxI6f9hv2Rf8kOyAtCo8ODv0BvZXvtrXr%2BJhwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNy7lvVzZiR8YFi1IircA7Ds84WH%2FC%2BLqUM0dB9vlx9GUBttdYy%2F1kqgwPzEM1VR8YY%2BSB8kevUXHC07Lolfo1XEX66b6q%2FFVJvFLQwRXXiIU8aYQC7QEswHwcDTQIwVQzBCxbq5rIcndGoo4Hm9AA7gW%2B3gi2GeEVBaGLrQ14JqbsG7AeuKPnT74hRasMiNoDYLEemFmaWBEqy8FHhLdHe%2BGDYB44kWT%2FkC%2FgUJkdq5wjVhudBQv3Xa%2BZZ9T%2BXmqy%2FbWKxXHRk3TiRWNOMSShS%2FOUyEJiGNxnnvRU3PUodo4O2NkAs%2ByADjVv0F7Ux0WWiMbWX%2BzjiJmL5vSQf%2FM8LYIRrw9HsyUjNlPQqFo2Bu%2BfaxZSzRRdcSnrH%2FZli2xkDYWzM6Pz6byeooP2XjV%2FDlaY3aRTkn2B3D4xpgq7Sm6I9a6oxkida1g%2FOYZ6e0v6KJHoYMVYOfk5C7d6J7JF1VL%2BLqO3%2F8s6K1KGY2R75pAzcgqmFSASkTaWw6KLsCLAg38A7epo3RYZpijmAL28bhssQxQhoH%2BoA6LU0Q8IgRxXf2JP7cOi0lev4YSB7AAyvdSpXCXidJmvmw3aigrWt1CepE07GRQ4wOq5XzBbPI9wV7h%2FsoQai%2FvCuu6TOx%2BsUdeu5NvetTxV57MKe31skGOqUBmrHo38yWNvMLq%2FBN9f6td5KStVUb%2Blr5BZs5Q7Z7guDVS23BvwWVszMrqSzacnIkcoabiUPSprByWD3Punu5ODi44e11mUZ8XNMkHblpTcpcsUI6bu54%2Bfbn5ZmcpIMj7mn%2BGZjxyvfhP50rfDFW2DNVOfQyekDG2Bfk8JZ3zi4Oluzgu34P9nePeq7NETz23%2F0qDGXgXgenEQFQBXvoTMyTBonp&X-Amz-Signature=140d96c6a832744e64dcef7d0a5803cf05566fc91a675e01a1a1224fc623a5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

