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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBDKNSG4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxgINYJfdlMRTDh6OOYcbj8yTJ6U4mLG%2BnJAUYE2gD0AiEAtF1Um7Pz05o1iA%2Fe0mUCf5DzWHU4NiWqZwOOjDZQLdUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3X91wRn6O4Okpt9yrcA1tZzTcscaOcAQoP2hXq04UE8sxWL09LVdtMaNLcSIDfEmH6%2BsGn69BamBeLqYElzksVi5Nl7siIDbk3fZHrge2HLFgqqumLdL%2FqKyvVxYScfY7szqEcevvaHE2uXayx1ik9UgHUtp8GbelbXQxux0jIkcEFCPNgYE9WsPUlPp4qDsWFiIaQ6GrBsaNYRrbY0%2BXM%2FY5sUNioNZ1neRt1%2Badx0EB7CzaC8pi%2BMC4di4BJT2CXG61toSM2ynazjpcwLa1jhl4ZrEbQ6tEEwOZHZyhS4e6%2FzS628TXwSWbwIAQvnieC8ER2n1fWroHXkm9scgX4CMlN8Qplsdh%2BSfG6MeFaKQJEhdfKaaZK0IVMhpnkp9NS1IccyEOjDTvvA8bVaSy95gDlfT0Qb8JKGGPcYSbT0Jl%2BtoCGgJ%2FwsQQe2mgodCB7iVcxodTAZoIWM5eHo6t6oYgl9I%2BaXv8uqHy303FegAeKgs9m7Kq%2BQXO2YfMRtYODwcJrhDfKdS4BWXP6o%2BAjX81WwOFgM%2Fempfpsfo2pnum%2BpI4VuCqp5iDHqydq1EODze1W1hST9bnOyjraV0hBx4Se3UPl0SOi3ktOMLoxfbQpmfSGQhGiuOvTyIHCerK8svJQ1NJSvfPUMM602ckGOqUB3I%2BDnwkApAaumaMoCdu40SgzxrdeOLIO72%2Bi3QH4Ax1N57XWhydqGJEGzMvfUnJ19Us%2FcVpAB8zPIeAXFbmPS15rllTLxJqHaN4YOGNrikBdMPRwTxsAGwonHo5UsQt0uZTW9kZQL16SYp0TnlKc5LWCaOD3Rg9%2BbwZUZ3xpxcnug7RGZkyW0NuA%2F%2Bzb4C4%2Beelz5fM5g0fBq%2FCZiEmi9QxaR5n%2F&X-Amz-Signature=b3c6231477d82bad4911e72f6297574118965b1846dfb33486574b922ceb8c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

