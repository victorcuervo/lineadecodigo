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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHOK7BBQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0aZSpm6UJmg1bFCyhiCWniOLiKNDTxd0R9GyoJN7FtAiEAoblJSIs8jhrPJzmHnXBZSJDo3CrCJbWgnMtD1sggpOoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzA1V8y0oofBiRJOSrcA9VeDGgskvLJYUVVJpBZ8QXT25YKyw05%2FLqWV%2ByTLRNYKD0MBqtqGnwLNzP8SJax9kZP%2FeMScy5D4EjzXE4%2F%2B64353DwNAGB52XFjFd6v6re1ZkUsMZC5%2F7hSTCruHiEu7TTYSaU5GhqPOF4f83VzmYd9uoJ84aAGBi2%2BD5c%2BVcODNDDwuPzgNF9QTTTCG9MI9XaZeg7Uk7gX%2Ba5%2FLNc60hon4aa1eHg32c%2FUnZFuzPu2IXMkuq%2F0jEqo6hCMuiyLTt72tbG%2FBChj5Yyt6zBc4LlIHVlcq9s4z%2BY863Q9hA4WKavoK3YPKnAQTyoFkxnWRtfj2mJ0j3WndkYDIhHouwCT0wN5s1lCDlHLKEm5dQZm7G7dxobYAgB5jokLW1qjTnH%2Bf4uq9V3Tse1v%2BLc4i4mPWyyoTwumNx6f6ot6iH%2FiRI3MMU2iqKhZFnutDPdqGE446JVgGDgi1j8x5NVr81kJGhDTMZuIX3Xp%2Bdh7pzS86iTk34N4hrJ1VstLvjpj1pd%2BnnMYAD8tQViYZcL41fySR8Xgs7hH%2BY3nG5eisbEkB%2Bnx1PUwvG8NGAm9vUrGsgNwcOnHn6nByXTrBpnMOhPUpzCHIjGwcfjjw%2F5jtJFJMOmn%2BHWXwP6E%2FdaMIOQ28kGOqUBbWlsKt3hVC57WpFByLpOMM22uapuMc%2B6m6eUsvMpwm%2B%2BtQf1gwEy67BQ8UDshfJg6j1sjp%2B0%2FzCfBgvKi33rXaRp1On9dMxdrpOmgPD12DnpTF7ahOEUz7AphdHOL%2FZNAoBkeFanJpWoNtOGOpG4%2FED6zf3O0vZEyjfynUKgjyd%2FzXbYcsEDNDzdj2CzoFscqbJxZ3ClUb%2FmTaRgbmLPbA2zWDlh&X-Amz-Signature=84771a987c733659957be41afb89d940fd0109ee7d36a44b29ddb605953269ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

