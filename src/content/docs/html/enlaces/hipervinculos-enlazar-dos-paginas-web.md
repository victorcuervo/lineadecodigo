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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H73EMQ5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3BJddl7uZoJ2OA%2BRFd72KyAEAF2dUEmVFs10Iyk%2BzbAIhAIBJKuUxhnjhh62fkTDxtRrCJEOfK27cEEZ0RFrArK36Kv8DCHUQABoMNjM3NDIzMTgzODA1Igy7Xg%2B3i0CaGDnou8kq3AM%2FWF8v1KhTsKB735fGzdL%2Fg88G52QvLK1%2FcahqUDDr8BY2i5OdwvNk2rpdTj%2BDo6CRqnZ%2Fow2Cn6uGz6cDnsou1jctN6V%2BQjcQ8kTZh3Qv7pf6L%2Byw7c40FEmJotidoL5knM%2BT3CM%2Fx1veh2bLxnnif8m4RIJiMARwWF86ByVnxTTSqfVxjNunvo0Nu3FCnBWn%2FESSMeJpogAlnps51WLAoZ1x0FXursTwBjvfal75BJvffNJDwgwb3Yf3q9DMa6vLg97AJc%2FbU%2BqCWoxNXk4MIz6x8ziky462rHeTYXjCNTgtVUN9Z7AAVt%2FqrHMROtdvnvz7ENBqtz0libAMwBEdPrIC9Sbib%2FGf7Rzihkn6ojl1KFhe7oyWSM%2BIHZRh48YJz3%2By4HkMSmb0Kky33RVHqyI02O6A3sYs2tXv771eM9wkQND7cOlkiEBctmUs%2BTRVmRBAxN0aNHuja6bCBBqtWN6BP6oOvl2NZLgyJCI6JsKfziaZz0AySRTSNtrht0Wo%2FvGWEU%2BXdDRb%2BwB2dzyB0EKGGSBdDTg2yzdB2xt33OCGFpSEo5htu0CP%2BJnAGwNevhmu9mcPo7j5%2F6Gr2CSivKitBZMvaGQKs6zF7HRUX6F0y2EXj6zsKdrUjjCOp9DJBjqkAfTvjgsDHqeNiL63sig3DxcELJpGYGt9zPTrDcT708gk8TC3d6ARQ6R%2FvUbXfmT0GKWfEoGtmvgv%2FQRijATU8C1z9pX3s799iEU26wrKmQbD%2BWN49SIU53aBOw%2F%2FSPINdXh3F4uoJj5H2MPNXh38HzqXnceq2ictoOd56jYiCbVIw%2BylBLGaXoBvtBKn3Jl1xkQ6l0%2FrECIDkQUJP4na3ZZ8AWPD&X-Amz-Signature=c4219bb93c2b6fb1011fd10b26fdcce7c86e4c43adb941450586c4eaef53051b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

