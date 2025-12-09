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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2WQ34HZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T154702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6DlNFM8igxbvMQWyulm61UITrYCyGvm3zINMgAJSZ%2BQIgG1wG0iNk8cft6T5w5l43KtHUrQwLJXmmkDE9AjneEEwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElA8UqXDfhXLXPL8CrcA7mb3qQ4Dv95R4wrV8EPE9jPP4Yqo7Ng%2FOXK3MfAOr8eXSOds4ETyDzrBmLcDwL5c7KF6NRUgD9Tg%2B%2Fvi6OwpIktqXPSJgk%2B%2F5%2FCOdFo0qJlKrvrHFCTGRhxif9eTTaZ4DUnRXSiJ3CJKI2muoraVaFmfBVhFluPommmmI%2BdqlH%2BY1E1CPWBEc6kcq%2BHTRWwI1ds8%2FaHPTS%2BHE%2BT23NlMWefzf7KsvYA9QccKExQilDUVBfp6wAumz20ZqrLIzHVJtpVR61bPh3MpCcpS4M%2BM%2B%2FEn2YHVvPSzBes829cSgQcpuR%2F%2FVcc%2FH%2BMgwOAAy%2F8NKlDPbQMKSZWvRUPsubx1lUO2OmMOTvVSTM0MgDlsMZqG8Fl8KN3mRQP3L%2BGvdjdgntn2%2FDVwqPJvM2oWy7PbRaHSUD1%2BOX03XMfNZvJgDw%2BjaTB82PIvaKAo6CFMWrhMDONgrNJQ0C37zk6qh8nF8jhDmkyri2PGDLHebHGH0OHYY4mRelJOf3GMDPsheULtXPncn2WZF7r5%2FyA0ytqXcfELvInDNzfuqZ9QrJOJe%2F1aISTzOzVhQMMaV7rpz0H9PjpOElm4jjnbR19aV11UJwPjTWmExLISfT%2B%2F9k9uJZuKj6KmQukb4LqFJIsMM%2Fc4MkGOqUBom2CxQX6a7rhxiZ%2FgGKfC%2BfRCQ0HjmLBopVZnVYkcQc6KOUsZHcZ0M%2FXWxh5TihTdxQ2R0%2B5SU7zrzCJTFeyIaqtfbS7oXi6UbbYW1ttPFSazR0ZCsafLqy%2FtjM9m2DUlmqHANzVZfw4CRDLhhCFtIT7WuiPFJ8nIt29APl2tffNMbbJoZ6yirGKV65%2BG8JPfYVkNJQlrZ361sg4lRwtMg34G%2BP4&X-Amz-Signature=7310ca4843e66d1c4fa943f80c66476ad639a5c4fa5dedbbff055f32a3e7eb9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

