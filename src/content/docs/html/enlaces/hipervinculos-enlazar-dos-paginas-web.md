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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBX7SS3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4TLdCot6%2FL2r0Ogbg7CD2kdHlk1EcQEbQXo8zU4JFlAiBu5mUORwTc780dwQSgeGpBFWrVg8RSVSeHD9Y7%2BsCSkSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkPXKyQ%2BjZ7gD3cYDKtwDIY62HnSya9vRxUeMV8YTmMr0uhw7JqFI60DuIs%2F2VvI3uLsW6n3C2%2BH%2B7zKkYFhQ2VMafQwK0y0jKOFyrv5w%2Bw1lpZnI24WojP41dPnPfFW5aMD0eYYJXpodmT0P7YykwcVSsKGZUKjYUQKesB73wrUgYrxOMPloPaRfAjQfmAN6vK4mGaU4fKigyaw58%2BEXzhDyLXn0sfB8ZVbo7T5jsarYhfE0tahL6DzvfZCOcGlKvOxexBPdwpvfDCG9%2Fm2zgf7xT0FP%2BNdYHUk0ibBjjEde%2Fz28BEXIte2JodU6AZtLcEy4JwbJajVbXmwhaJr2MWS91%2FMA6BaKDLaA6W2aSq3nwXZ6%2FuWd1940Al34x%2F5jrZ7KpR9kcx%2Ft7FHsUkgsBXsJ%2B23gmCP3MUFxnPDO21es0bSv85qaZXDOnKk05KRdWhf1yblZ3AlB%2FSTkuWdErbMSDbzJ1bdJx5F0AC84fcLwnlEhMMRLjoMau01B2rogXMZvPFSqPMZUVD8AEJJAbk2pUH0i5zwKhR9vOPayCJEAm%2FqVnHBKZd0hjUOYNpocvlFr819p2hITbMQkogHj7BjOgJmbqwMoVE9hjELVTVpCTWEKhb6rkNVRyCOZTg0pZtiwSloQ4mr%2Bn5sw8OTeyQY6pgEeRKP%2B3b%2BTDZgyeMz3KDncuTv9XaSKeCM2UiD1B6BpiVHoUUejqVmOtPeHu9eiX%2BFd0Hp%2Bf8d2ZglhsT7wJeosdAVYMPBpnOfwV3AAOnRVNNQGNpkgQ9n41ZZD%2BdPafyv3BwYTw8IXBAtP4kgbES2V%2F5wZ4RlXHduZZ3ChVhUGpeY16vwqVbxfC%2F%2FH8ZBUIsRAU3l4GKH1oSoogYGp9ErviUYHAhgv&X-Amz-Signature=02006d3ca0ed1395430615e6693ada044f777540677164da60a3bdc7a20f474f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

