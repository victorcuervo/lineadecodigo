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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZOIIHQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICep01S3fdCobw8ftRcHKs%2FAQzsjEIkMbWL56aPn57UGAiBtKO%2B82EvrsX2sZstRNMTYy9ftSk0cnQnGKeLb4tIPhSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYMLuEtbmNYmtQUOQKtwDWcyYB03IZDa6HEOIC8bGNrn26g%2BG820bAWDqnipdiRv%2B74wgILtAo%2FswhUBssSarxmVAaISJCaZVZX0vMpg0aVTp3Gfmxd4LqdtUFasCg8wTK0la3n8lKWf%2B%2F7S%2FXr86KHot6vr7MI%2FEZpw36Rw7K4yBIuWqNJJVn4TKH%2BlsOu6Eye5qG7F2tbZ2HloE6StHFC2GfwBQMYM7B7OsVcuISI7qLeHMIOnHLtvHWbkeq9wgjv3%2FA3fG9TsWzyyDPKqyS%2FgFUPORpP9FNs0Ij4YiK3dv%2FMuO9ZLwtEEK1Z%2FzhmMmHyWmEvyHuU97Ys8EboAQpSGBbF5%2Fe%2F%2FhcVVvqASkduVm47jSmOD3Mdsu1C7qVucbyYWKQLIsFt99ffqS1B0haooXYH1iXNiXZ7UBukwY4txAT4zOEGJbPdV7XToYB81JO8KLEoQFlto3aUN10W6HFDq%2B3oim9xekhUmdmgTlOGl%2BEdmCXbI%2FaLib7H3pDvCkfYqV5C31aXC3CeBj0Ujt%2BcboHtakNG3bhLG5m1shTqcbaaiy095nJb4jyvr0IBCyYgVqQPL2IM%2B2bM63NsHs3EvkZQ6l5uqK8AR%2BYBugh9loXgEJsV%2F542%2BBQASGAm1jvBiUxcmDlf7p678ws8jRyQY6pgGqpEJYBbVDi711Z4e%2Fb6gaFKzpu6Wsth4%2FDRwOhSJbYwdZD%2B5CzU7z0jqS3ZhNV3Lsay27ruPDcFLLwF4xXtkVo6%2FFbLyMyQm98nkzllTws8esCgAzvv8Q8t7eHKeVxxSuuRMIitp%2B0VXqF9Arw%2FfmutkQ7ZdJEt0vD741V7hM44mvPu%2FzpMYoUT6CssodVIFcC6GVm6w3sFg%2Bvcod6%2BYxmnN6wzOA&X-Amz-Signature=01dfe21d77ca7fcd37849d5035213f6dc7d9378d9c0136abb6645c9bb9cb0332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

