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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2EBGGW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq%2BzkfB2LpUl8Jek4tlgTOfLdWqKYtT3I5tWlBVzl%2B6QIhAI1FhhrWwcE8VkvC%2FUfhIlBONqv74lkSMAYKpHfq7ESvKv8DCHoQABoMNjM3NDIzMTgzODA1IgzzZqnemjhAhaVifCYq3AMUkhGXrT4I%2FNVXnAWZU%2FlekrNVpZcYOGJqZlrofx1aq6tF8GLQh84mGLLyeYnY0nvsd0j9NuOYKrTZ7Hnr7Al%2FeEV0Lfv1uV3euwZu57Fkybw9nWCzmzWK7eLNcUylgUN0p77OwGM4nr%2Fb7ZzHTB2GeYhaG8vdWmefyhk0DafM3jlpBsURWuSbrcNKqDPfnXYQ5oh15RNUEB913yQuiWgbpuw5EKDZ%2FbFhufYkvUIOvsTCQqBC5lgyo2cKsoLwpqGUmPCb7TVU%2BP5jRUSItMXe6wy8O2A2jsbeESEtPt1am2K0y5xTGx6aY9FLyy6rn0GLFWVLEIy9gy7QA5k%2BXbOm%2BIdOdW6dTwMjKpm26aVdacpn6PfhRLVe3zA9Ao3iXk4b3IXBVZ0ZzSXI0MUF%2BU%2FXD1IRLExca7llLNEjJ%2FX2qjLKjI1iQMvbSSWfvcfTwDNEnFAVGJ9eO%2FHBlca4WSgkYPkmLNVNgetdXct6YWK9%2F2dAjJU%2BrTEgdj7WmRQXKGYJE3Rh10dn4NhuZSBZM8VGMoB%2BR54MIoDFo%2BaHw4rS4vYvOvb0tNMCSg2N2QxIC1T9WJPgV3S7c04VQ2UCRPOlH44iJdfB188ExCYh2NRn%2BJcujZiS0CTA9MyW%2FTD2w9HJBjqkAbd6Ci6MtR4GjMsOD2MTpLrjFMw6XQNqOwkgvYrKqXCImfEuwCGzkGP2mLNq%2Fb2sMnzZY4cx5LdaU%2FHfnx0k3Wi0G4BdlKaQB32Hi8tkRKXXgpS9TBnZBBvZQha3nBkuuenuv1lk82YVNxJQOTakVVe85Q97%2F5EhKhgG%2FmQ97HVUKPM2TK7t4%2FiMGF5gxFehs5O71UVb8FCWmhl3KUPEyV8S%2Fn6Z&X-Amz-Signature=02402cbdb376ffbab9877af4dc3736866da9c5f6979308b8ee474873aa41b457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

