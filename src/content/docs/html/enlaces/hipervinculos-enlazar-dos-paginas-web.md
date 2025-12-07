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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU4PKUDL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE30LW4AnctbPjOSh1xs0BOv6r3ro7mGOL%2Fe6cT54EUAiEAuRGZERIjCNjMIWuYUJe8CZVtjf2ncTLqaP3blqe0cfkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2F6hAmkRyGDUxZmjCrcA0%2FKcRzJblt7ibri8yxARm98hDyoiUqULOJ6FpYJtV1TAND4mu3FG8Dvq3L%2BJyWy4Wev1NMRPtUQ6YtaaQWYuNspBOh8f6YPsNPl7wgkyhUb3%2BDasj%2Bw7Rd5kJyqx4hgqeIrnXnmIgs0xGHiMoZNw8jtKxtexPxxba8FktBk0HIdpA4uQcXjBtg5T4nMxcyFceBw46R8c2vf4VN3LsJh5W6qtBLgSCyY5DyPbJYkmTl0XJbmivifZzpUA%2FXgfz4bshKDYaHf7Mg9itzfxv20pMuzChPV1T2UVeZHb%2FFTNebdccxA8g%2F52tLnbS0IcBrRaSTGG4JQela%2FuaVwfdG5jM9jzoRb262i5CDme%2B6%2FvzCV4V9RKQXIa8sWXgZOvYB3mGIipq4zd94%2FTpHFvdI%2BpSJVWQwAxkcd8rjFAdQBH45c%2BxSisp%2FeADekFvOPFWsq2ntp7fH%2Bc71iCQG%2BcoSLKtKHp4BLLGWEUzN%2BIeukXp05hbCBvFMq34KiPVgqv4GIPWaenC4Z%2BTIHCg107E9bfXnShX6QvLPSZ51o1KF%2BIOKlV3HLCJXT%2FqeLcsNFQ%2BNgUcEv530%2BlK%2BbNhcc4x1s9p0v%2FAwxWW3J5RuyK8OibsZrKl22021CZwRKQLz4MP%2Bj1MkGOqUBcf1vHdgqE%2FZmTpcjB6cB110b1uj6jdWEreG%2FQFsMB9DWFlI84tLnOtzo7kE336yBYKg43rReyl3t9f7OKBVtOBL%2FXHyTwjRYbePsg%2FfC5YK3jop0kjoVqeI1fMcDbR7xX2ZYqEsh2ibChNlkRnBZiShixVHgoa6hJWc2B0PRguR6BIu4O7jJfnuevrUh%2FItzOKbdRXUKCElj0O5MAcX3F1c1VW5I&X-Amz-Signature=2058ca12a86b7ca45b493ea78e77fe4cd5e0cce3b978d564980db7b5fce1461a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

