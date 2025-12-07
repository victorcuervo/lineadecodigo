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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPQVD3F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8z%2BSktL%2FT212xMy0VwkABeoUrXRBOd%2FWFf7L0raP%2BCAiEA%2BPoI%2Bomf%2FFwIaI9D9PrzLLo%2B4X1kZF1I0t3qo5ho%2BpcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH908I6VTPHntEzXAyrcA%2BypIDKceotODtCxZRLR7aliEIse74Iv%2BEWfzjQzJZRuIprIqQLReYOWiHa87csY9VlrpC5gcdXixBQiRyUjSkgYw%2Bxg0USQ0ZhcblPI48eD2PNFjYYqia8jav7aKx4JmSZ1CvMb9pPMTZgCb0OT2guNrZhOYV5stLc3OLcH7%2Bdf%2F5WD6bNia1Wht6JqXN2N%2Fs0dMNDB7hFhDhB90PZDIRpzx3EgoZNgpptMVF2syVaB%2FyPwThw8L6aL%2BJOid2qwUyMwqYxPALkZxZJYwq2BFXEL5lDpO2TL4Wu9j8tPODEooc%2F8C%2BfiJurpBIUyJHwrvws2CN5v%2B4AQ1hnPpcQWXd615yqHW%2FTr3PDuV0LbqaamBmI3cpN7Dse6yFCGXNrh6Wt7Tx16tEfFwUZ4WTdBBMx3aNzvMJLGWjj3hCE9Om3pGCx4GNxkSsoIk4s3XUWU%2BqcPPUpwgqHr3d79zAVshrjcJ9DMQQzbzASjxdLedKU0J0vDiqZ3gXX6MVCcfiy4KfiHzwTHoP1JMXa9Eiej6pfPCRNNPJmw%2BL5hCPKKKHbD7%2F2nou6e21uZ1Ed%2FepawAstiCY6vmm4U71eR14ycmNR8USoyacc1BePa3N7DelgN6Duhzk7Skpf5u%2FjbMPu61skGOqUB%2FOcjD0iB%2Ba5CR%2FKD5VaNeCPXVsP3MW5KIQgnmeMnWmUJNFL3Os4k0uisDehCs9bfxYpt8b0cUKLpIjBQOSz7yB7bvvkpUTuA3a0gKg2jVuqBRLlZMl%2B58T8yN42ryr0GhTjgbjf8gP%2FCwQeQSRQjIvhTx7deNzc9smMALh5IgDED632oSA6TiZuJ%2BadkQkXCEt20nDVBaGuue4elm1cqf8PvGpec&X-Amz-Signature=1e3366a69993540335416ddce00a19f731e212e244ae2725f1789c962370268f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

