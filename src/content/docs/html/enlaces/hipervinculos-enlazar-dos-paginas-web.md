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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZA35S3V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBN5fe%2F%2ByYmvf%2F92Kg8%2BMb%2BwLIjsVkLvk2x%2F%2BgVmH5NwIhANlIDsFwh6O%2BG8wGVDi0%2B8pvEFBv4LwF%2BV7rAg%2BeEqVeKv8DCFsQABoMNjM3NDIzMTgzODA1IgzpDmAPhLG%2BaygYPtUq3AP0j%2Fn5%2FuezT4ZilD7Jcg2rn4FcR0KWQTZtzz%2BoZhRiDobLaVsqijrMheqBwMgxrKdxg24oYTngAZSodzy89rUIEc5xamIdIxLGwU2sek0X1LGQS9wrbjBeOo8L9SnSs4x%2BmeYY6v%2FhmTozuKJ0kB2n%2BNGLf9jjKG%2BMiHcT%2FAfBUuwXa77eLKRO%2Brt38AwhHrFvq08tu0WkEL3RtJKSWx9fmzhac1kFo%2BKTWlTeacO7OKHAxxtc%2B84I6vRvbPrZdSJWFqJM4Hym5MaiFLoM%2FM8%2Bl5GGilvfY6fqZpkJJmGICsnro%2BUUajV%2FE7SJv6DyGYgoJMh0hJPkN3nKy%2FqIOP5wMNP1frDOdpWZysVvt2msJ1BiybACsx7PvdwqJIpexZX7BitTCKznmypAF%2FOrlLUWEi%2Fj0BUF9Nl3UQtlZ6iGPZFgp9SetuSMj1cvTtR4VUalerFZ3LwNn6jz8wJWFC73nh9hKwDrjRxDCxf%2BlaKYKujmhpqXepeWD2Y9F7v%2FWtXH63%2Ba%2FxXsopaGpHe92pQP4i4SEMyjZ%2FQDTznwezm4gfp5Im7O6rzWtzj2f6sm2elGQLDoxGnMZaiH1FEpuxvK70NlK1I7atQsPgK4HIv7zoUnRyQwud4IXfw5cTCO2MrJBjqkAQzhiFtweGhRaxya0x81P5NfS4a1O8JqiP%2BApXxFJkQSXwoctQdf%2BPyEhMoRopGVjj2B1sYGz7X8lRi%2BFnxav1E3%2FTaO%2F%2BBQyRuLl3dlwYIB8dTT1pY672ZPXrb%2BGcwpCZiosi4PQv173PA1gUu9jjmAu22%2Bpe%2F97y5gs66kQfhjwnGIEm3P0gPX3p%2Buf9hiyUop2SYrYP8l%2BjNgb2UB4dOIIdER&X-Amz-Signature=d4b6fd806d66045b02d9ab409fc8532e7284ac3dfc16ac59d3393da71cae182c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

