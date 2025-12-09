---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAASOFD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FmNmev91mjyOcjrjVxnB1fUIrGf4Dj%2BlWj9HyrPva6AiEA6BpQ9k3fe%2Fdnj5uPKEQJN6J207k4oymy7TkyQRUAHroqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEST6FeIQnGe3ErbayrcA%2FQ4KsLErGcgM19nEgjRJCbjXf36v%2FF%2FmJhubB9aFs0BKmb%2BpTnmFtTlpGiV6G%2BSvAzDBAaaqEXU59UsRAeRcW5H2wVQvTFeZw8WzUbf8lujCYuAv4AsgNYSx2VFBVUxGmsHp5Byh9%2Bdo5EWaYzt1OluCyg28TrvVmW9DP%2B1SXHBp%2F%2BZnFngE8Q4CF1KfHmU8Ta2vRqtL%2BuJ3kvZuyC9y76IQPrWUwv%2Fo4rQZhbt42LjU3RthIGwCupKtnfI9A7dB8JAZ7aPwvdkStwxCPOWdQI2Hvr6m%2BjSs4cTzQofSIDeL%2ByOqCTf5RWuoyL239BZ05JaSGJXo6l8YafArru2bYE0cfrLqzdoIVW2IPZzKBXr%2F5IAfxctwsTGCIrckAjUXQ9BoO3V%2BPmx9wW8eS7%2FJYl%2F0KkagtDBUw7%2FquX6NFoAbEeKJClXZrWV%2FvcD5rGbTcStcfsu2ni1tsSN4Oqgml%2BgSciMICshSTqa6kTVTe5IXCx23Gt7aJTSZVeFOYx%2F%2BdTjO08sDKiD2WrLLssePWwKfjMttfk3jp9EfR7KBLDmaTf1Acp8QRdWqm9%2FkSAxcym5ZTo5jwiuSfvI4UkZwMf9CLitNSpJV3cwHj8%2F7boECsDcM8MFbj0nMJwIMPiW4ckGOqUBwr1ykx973BqEGaTPbPUBWEpjIslGgadT3mPeO00z0c041aF94AuhPBMprBCF5OPAT2D%2B1QFqNq%2BUhIEy1Q3uvYAiZ5NvZyKdLB97Z8YFX%2FhDP1I%2BwFFnsEyK7L8MMh6rmGF6t17rU5wyYHL1sRObdZqzwPNFq5kW9x%2B4aktFaIVeffdRu0ADFXYZL5anott9yPkV2DyJkmnJlhk%2BWhKmVHk%2FhO50&X-Amz-Signature=7fe9fd6218852c79744672689250781f805645a898d7ed31e9866d7b223e47d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

