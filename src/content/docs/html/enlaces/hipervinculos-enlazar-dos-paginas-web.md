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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YWGZUA4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1ZP%2FEXD5WRa23tZDUO1rnKBsAZrKsvEOwuRhhVd9pMAiEAxJCNZ9fUeYbNsdwMUeulxejyQc%2FIKZGz0xwI%2Bzx1bbIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENHT6INZLid3lhSnyrcA1owJjh%2B3L5CHUVNItfsje3xaP3yIBqvqa9PxoDaykMz7wqbSY1uDuq5WEIuW25PXi8RGdVIxMUdNedrN6jykerQa7D8kW6BqZuEyKYPSAgXvLMlc2V6l0RHPN8emCH1rJfwiHJpLvAn8ItWLvzhSQrhkVdzZDYl5UhXcAit8mlNpRPCeuQHVxrNdyDCCTvZSwvZijov82lkvmk78bp%2BZa39scOiDpFx7TBF%2F%2B%2F%2B3X0gAJTOL7KhQU76dh7RXIbp0qTUUCb8sQFPnWFUkM5rgKIVZfIsRM3%2FWVoix2mOgiY94g5FE3LFV7jGr821ZKmc0mtZJjPf%2FR7CYf30X8kRJNKzKGWotTssPCtqWUyOpSd03AUoAKqi%2BmfjMQDv0dezJsCcPPmGjS4lzjrQR4NuDBlFwBJRM%2F8YeK2JIIr%2F2obgiJDhjwUniDtfbpX6SsqJXptihgcRcUZMN%2FVPtI4oPlZKATLXQmKbOU53XCrHm%2Fivk26lpdBXHH2GVQWjP1Be7cvYcz9HiiSonwHYi57omnaTAISj2CB7Mmp8LcDjJxNd5Z%2BB%2BlHKpoARhhcwR9W%2BpliX9BMFDkexJwUKFg8%2FA5dWu3ZZnIkVsmcuIgRBnyySe0EqJEk%2FJSpoG1SgMO7G18kGOqUB1nuPeYN7M02pyeZ7N9YfsgO0UBRisWGUk5ktU6Oo5OEDpytGwP%2F%2Fn1Tpzl8%2B8H564yF1xqa3WxpnpKPD3FkvYYMWz2g5yiKGJaLL6eSuhm7e5sJGZ7If4fK3o%2FqzwM6%2FgIfMlcXf2pqrVjdHhyShYHYtdloak8kN64rmSS4RAerO8HnHctQC9xGkGvf546bda%2FCR7lzAUBnNE5IzDtBGqaz5w4Q3&X-Amz-Signature=d66f2254f926da86c6a790ab62a588925bc5a8a774c9342681c740de0eb12ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

