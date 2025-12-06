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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKD57F2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLnH2ged3RUT3f12fN%2FCUecwPRW5q5c%2BxSWydHMzNzqAiAazz5hnQMnUg6NVmFoTKb1WjX0IbEhCQ6Ykpcdc9ipYCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMe%2BJKhFpr0piKzUXEKtwDXpPO6%2BT3wAOJqz6wpf4QqhCKEqlmTlJQC4vFIQ3YL2FGzvUwVzCFQQZxPk46YrznSZynJbhzc%2FCRWAVXLX7aOMkEubAKk6XULrZ6mnHPrsDuE64zOM4Bg3eRV3UEpFJZh8GonOlhpUTvIap1l0LuV0XJiLD3346orCHpn5JtgrDDugNDABZ%2FkKtsZD3D9LQEfGJLgRmjpmMAwPodN5kULgywNzUNUUX%2FDIEgFnrbB26VE1%2FkYCrn%2FWRiqll%2BSGg8jbf4admDfL%2B2X6Oy%2BdPCpgHjzUie4us6wdyrwUimim9GfolgN24LQpi07HtJ84aqWp%2FzTP%2BwcYEopIN3x4m%2FDrFSYq72cjOkD30Kd38OaeWBYpoFXX92wKSjSfe82VhOL79yxr0z2lxRX0K%2BGFOHG%2B7MXruLWLFEVeEpXgXg6fdmPvMrTaClw%2BN%2Fq7MKRgyRK09ksnZ1yazEZbjByblsz5VaR7j7Xg1OEQyafKkYLanmur3SWty4KMFCpa4GMUrROAj2HVRvioAZ0PeWcBQJ3YqB4I0Thqq4CBKciaaKmrTknmTWddSOlflSMhXdKCbh8d%2BfpVMDps%2F3NiSRsNnGfEF8KTR3zifJbJksYx5aHYQTOHpfatMHr0v65j8wssXRyQY6pgEUz9Oxg71DYlPK3rKPxVXZNKwlTC1QScD%2FPm9dXY4qaIBkGIhy2m0bupg%2BOCYqVpnakSvQiEvRDgPbhmvY45KkkkZIu7eO3It1xKiowDqrVoo2fleHXyz6PLPaQ9PqHiIerJV%2Fg0ZQkKKd9f3f78vP3nDK8v%2FF8Zhl5yTyRInSIHPrENBJWScuNQpLgHO3ft8rfyyH6nqK6UVJg9TTrtzG%2FCs%2B8Lwq&X-Amz-Signature=4e4e75743ea38c3652bd0b817e5947b7a776b16f36fab9e2b99cf3ed9005930e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

