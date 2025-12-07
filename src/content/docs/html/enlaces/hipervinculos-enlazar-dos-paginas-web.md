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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZEZ3FB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdN5BijbJIqkvtJD5iQgqioPsqH8iRWSf6893XIarf%2BAiBXthOOzuqGW2uBfNAZiqORLtUe%2FWVpMSRefhoahZjL3yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEY3GTAKeO%2BFRH5EjKtwDbsHqiGLCSgLEnqcW8Osc6bWTM%2Fp5XQLKFReYjCHQtRmDFeAKSuIWB7ba9gj5LSlQ63AOfi2O3WHriqq8MhMJjO5f240rjLrQZ3DlA4ylMkFMbd72pKYKM1qU60zYDI7s0U%2Fi4sdoG6%2FB8U2hgfQV3oh%2BpwyPtT8FzgBmsVYKADTpPze22V4A04o9KS1ONMwhHqTDXulwVg%2BH7aEZBGAjNg2OnhjE8yQ478K%2FmRY0jcgQUNRNPNDrWs%2BR2xXs1oBwRWMKndNMA2ArDQUtAn1PREAIy2UpCcmezge7B2x0pbzmIFhZ8aFgrd%2FtauhgJBYbHvMpnkerGmM5bFYbCFA1BPJQJeXSg5jNzwTEF7iiiuNHwmkLsVpHBBY6A%2FjKRcJ6%2F7qtjvD1ovYmOpUs7Aev9GqKvmQSqWar%2FGpVSgqXX3Z6PZL3oe4c0%2BVOaxt%2FOyUwkR5t0%2BaqFlDiUPTarqaEAfYs0D7AB8jmhiavP%2FXmFwNp3Due6MvtX094UmLEZg%2B053Hox%2FQNB87ysBhS3FUAGeNfnhkhllySEQ6WY%2Flooapp8YyZGlO6HwrPHJoVPcxPOHfex4rmpULdcMcnO3pGQgvXhy9OT825y%2BrrxtkohYNRhYqJ1QcrZ%2Bx2O6sw0sfXyQY6pgGW4JVXDtrYRPsbyfjOkydupG2AQDEho%2BqamjW29BsY6RIA13zYj0Jm8J%2ByTo2DoLDK3z7L6R4CUHrmz7v7tE7cHsvXeFpPwVOJnXyVwy418eO6JXlVkxvxyB1IqQ4GWpRWnXK6HdgCf7fDWSIUsccH91TPXyaLmfhGNHLUa08CNmoMcVwRXRpoEnqmU5VwisBTVv7xa1nSr5VbCzYwe6qEpbmg8Fwb&X-Amz-Signature=613b5055ba4c0bcd0c22a8345099af763ceb5244319612f6071be6e3f06e9079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

