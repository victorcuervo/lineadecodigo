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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MEGTA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD21SBScWpcLPPyYlsqwQe%2BSEQeSA%2B0nS1hHV%2BHtJh0hgIhAN5tpNkoij33sLaxMb4fPwc%2FhkRf%2FZx8I2GTG%2Ff0f9lwKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSNsUhBpjY4NGqBVoq3AP96PO1PsJE83vd%2Fl%2FyZ1DfkG503Jis5Azo1JCV1ExCLwYolWb4S5ed8XZYUh8zqeFika50S87zmTRiQVrtmwNqdK3KUlcGpEjAKN08RdEVDD5zr0FNhfsTzCLuKeMpLF2QEk83ialOeC6LqS4LkTZWxz9tNgYLQ5ovGhKJgbNdCXzr3DzO2gQLvg3VOhZolE3Xr6Q%2FchGInbSw0f%2BHptESZqcqLXidSdZLk%2FYHJ5brtk%2BedaGxUJehtZCDnH9vnlTBNgtbd4c%2FWU6JA%2FSuV3xOde5gru8tZwSTp6fvx5CPRRSHTfgKE5O01V7mo65PNzqHa5h4PYaeOvOCP2VsPCrw3x%2BQbPzD97Wbxo%2F%2Ba2byghAazY%2Ft8vnYDEtLBvW7cTzVuSFJCxWb2Gf1B1HS4C6AnXNEShN8X1eAduoSiAYUV6y2PoeRhI30Qq7mZVcPtdjhjrZWfiWcmKKV6I98nUfvrM3C62eh1x7qDIgnisR3S4fwU67TaajPgExMN%2BiDbvxgyJaHdNJow8aOTZcsSZZmvcTBjQQq3lQ2QbNSHsJC2SOsWIs%2Boo3%2BJAvUr5rD12KSgYtzjcm2GTQB51gWWjg6Vj%2FivoBiAgOKs7neZr9XsqGngtDmZXeiTycyLTDL5NvJBjqkAeaWtafJcOKeMyf3X0g5T1tGJb6%2BXh1GYu29DzxxCgWrrAOzJtf1%2Fux1I%2F%2Bm2geYNUqXrvvShAgDSHIUm7YrNmpEGEcbpmQuTLG70tmUErd7dWdojJh2nlD%2FFvIdc%2FaSWxD5StEaMpRdbKCk62f8rjsFsfioAifDQJIUcOemplOFuldRj9XFqs43K2SWpQHqkMD%2FkkrqwX8b10hIikcrppTpN2ts&X-Amz-Signature=3a260a72c90010a12ba8536997a19527ba72d925419ee1ab35152c536a08b13c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

