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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2Z3DGTZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC01EiTnzVECt6OMANgy%2FdEHCUn%2B8K%2Bwka%2B8KsqQxoH4AiEAtHE6LGaQpsYi8GRR9psz1dg6D3W%2BgChH40ZJmiYAhCoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIMvlEdrVrd2kIN1mCrcA35pHRnrTbgGjDdz8sJx4fHA3CDgyICYxoXl%2B0qtzTrrvRm9%2BS7JjEnrCD%2B4EmFGj8%2B1z6THnpCsykk5XEaWgBMzWdbP5H7UjWSDId38YxkD95d%2BeVgWiC9b64uiLErNgBkqMNecsGIVLrmpjkplD2vjtZQTLz2enklUUyTvgC%2FXfS0tvXL8oNUatYCK6I3NVVebTENsVJHqTPkQY%2BDUQv9pBIpsBTny0FeuEfwc9tlomuVdd7Qf9QLzhcYqbj%2FeD93teSW5PyYbK74Cg6BVV9RzKgUojnbYIPO16dMdZ%2BxQZlkD7n%2BI6QurhPP5B4dNLSm7x8hVPTQeGSP1z19EIB4H9MdxlSQWl%2BS%2FCzF4KdF37frwgG%2Bkft8dG1tJ04brIGXxdu2gsCYiPLxximabllZCjgg6q0d5m4xS9N0U7VC1NNYssSbHAnU2nnou7G54TFArwiKrLblH2honqUgKAdAjo1STSALtkm8Rv%2B7r%2FM09vk1LvSIP2Ao5iYaqY39ly2OPAgfo4Aci8i5Obl8XgOm0zmTgobUp8ZUujyXNaC1A%2FpyLs1uPWhjt4qBzv86zg%2FkJGxygqmbcnyD49nCB8w95zGspimmYWO2nBEyIiZAa9A18pAth68iQoiqTMNTC0ckGOqUB7pSfVc1GFeji%2F%2BCUy3GUAH5yK%2BUPcQ8eo%2BVNjWOT8Epa%2F4GRAoq8kFFfHmwCCDa5VUx5cSsk5fDI8yiMXWPlhVOGqbEjKwXO3KK784Qu9qgEXHq3Yaxsm%2FmTPn%2BVgvIJTwNXPMuXsgB%2FhWS1BYWcSxEQtYaAxWRkXL6lBMloIHXpap2BQQP4bHG8cNwm3juUZsYXF0hu9a9SRGpAQ8I67zPdHHeq&X-Amz-Signature=a5dd5a1891ba2fa41a24339b2fdfb2efde6aeee906809b0f82419afd49f00f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

