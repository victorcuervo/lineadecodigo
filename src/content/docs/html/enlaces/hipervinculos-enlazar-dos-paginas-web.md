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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BPQDU3G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOz5djoiO%2FV%2BTtjpeZ2KQxi2oQf%2FFTu5%2BzAH%2FPWr2WPQIgTsWvkuR8bkPvqfh652aFgnvQbGMO9gZ0DXMR%2B%2FUyN8YqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGMAt1e%2FJ0sl41asSrcAxGWil9p5leGXlFeJ1dP2dPP%2BcfGwhUTXsDW9O71guxnFNBnlUKzsKb%2FcKXbs34pU3y69Ig3n9iVCjh1zXWbWhj6tzKFxxCPU2sYNnuEta3IP7UuwOX5KfV5W9tiaJFueLovC9N4N1B88LLjGPnFPwQBHIKFM2PmFvfxfnbupXge9yk%2Bvw5n%2Bs7BeYlA28CeT%2F7RTNmvDF%2FTvpDOi0k4Q42IhqyrzwOvgDS%2BBkJvbAaQXMfIIOWJ1i0apY%2Bo4dQpHVbR%2BWoswICgaMVceXdhjbYANObSsz%2BZUqleG7gz0VaVLrMnTON9rHVdUCV9EiPFOzMUCWHKkA%2Bsjf1hVu5BzmepgETlhlu5o6qN9Zuc3yPvId%2Be3ccVU2zSPd4gYBwMovAkv4mJqFV0K12ztkzGvcQlgUkWXwwc0Fp9Qs8Va8yWME%2B%2BYrCGGGytSoACtDv5u%2BaYWmdANDlDD8CemG8i%2FuF01EpQFF69P80ASaIuNbivkHWu3KSjibMwseCx6lfTaUD9cEkdr7OmgJjeQ3CfMDzRxIF0fDCE%2Fzce%2Bllf1tBKPYMDkHpJ9DoZ%2B2ZLMYd3rLjeh7qGLyAsnud51Xc63UVV9%2F9zL2bN9idtI1GLz1wLke40tJMRwxonXbORMLmh2MkGOqUBJXzasvGs8exUmO8Xf5kh%2FOa27SdCu0QeYiJvEW6eGLQzu4vDkGz7%2Bl75T%2BjaPDVos6tc6TiJbCqJWUQRcBMFkIq47qmlA4wWC1I%2FG5K8CEeQTKDtnck5Bpn9wywyUc4Jc3ZgWgKBQftKqAvqGum%2FGiL8gQTGMNXTV%2FJwoCjorrUmP6eT8O%2BZqmTOs579pWBRMF%2FfFr39jy10uqBPcumIIe3s58FE&X-Amz-Signature=c2cec91fa0c460e53dcc2e0cbc40c7a6ffbfd0b314aac996e32992b756379d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

