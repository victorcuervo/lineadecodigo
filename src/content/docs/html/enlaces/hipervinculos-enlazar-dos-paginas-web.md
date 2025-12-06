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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W44AYEF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBno6L8lUSSlB3S%2BQSfm4Xe6zU6GWC4S0B6V%2FFcdD66AiEA4gqZEggtc3dLq1XIusYgWFjn5EGfycEHJaRT6jAUDJEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAB3AxyA2n2nEGNXRyrcA7J3ypXwwpcVinSBunia4TaVwDEqrAktyRNEXKsUX%2BzAH8wxH1OcpzYQiqQrACd5%2FhsCL%2B9Wh%2BAr2JMaSkz%2BeXoirvUKzEap%2Ftl60wD7w5EpGE2vlH%2Bb3pdZh1N0%2FKXCTvVrDJEtgocZV5m36KQk%2FwRuIIHAMEDFwMYURpRufv0tuDwYCL8dPgXlDT01eVjrCr0s%2FC0gRAMb8HikGOGfvfix4PI5EgWeTdIt6bPqz6b%2BU1SndDBqpBVKsOXyUQO%2FaV%2F0LCL0lqLcxaAMu0b9AZADeTXDUKwUSx8yAJuouoWk6D7A8xDL4LwX4RNy7vnnk1DZ3dzJazAclvlnYn8NAk6ADlLSnm%2B0lzYifOhCLmsx6oU8I%2BzRkSQQy11NkyKgEjOPPDeUPwtrTHS6p0vxF%2FOrBcOkd8oxEmUN0Pie1Sms5w5vXtdnMHRsqRWIvMbaG4K5SNH1JP85V9sSl7fWgVpFU8s%2FzVL6ZbJ%2BZNswNPVoQKJvEdSlVgyWwGTjD0nPBjnvznFrLDy81OEpDU%2Fi2Uc%2FVKC4mZmzaIaqxz6KXATaNW%2BVPaQ9lmARDI6kZDPfpTvVbdi6Ku9AWTBEtyUj%2BtwfeOIZfmMGfRA%2FaiHpAipy6MP%2BtFtXkcmgwxW%2BMPHM0ckGOqUBxtrkYzf1nz2%2BuiiXnmzf6KBiCc%2FZrZTckMjxd5mQr4OdjWVRQ50EeIsoGfdfDEGs7seyOqMvO6WrE8H54KeV583JzDiKqIalCe%2FBHjGFqK%2FEAPPNszHPTkDB4Ap1imVDIyJ7MLosaOP62U01Hqs9JXOJAVc%2FxKCHZ%2BKkLqukC%2FykwKHtvOhZ3i5MGXNsHRMqIVI98ZOkHa1ZrRZfSv0ylb89KyoY&X-Amz-Signature=cba8afda28cb5dae76ddcfb14c2ee39a683d4ade2194dc0fd95acf2117fd0b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

