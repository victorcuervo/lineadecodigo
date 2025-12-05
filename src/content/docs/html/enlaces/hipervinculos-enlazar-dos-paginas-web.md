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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5TKT57%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEU0OJ7Kq7C8TKmKNQd%2FBQt%2BSO42ch29D5yv0zG2KTzRAiEAlbfKey1UIHu7a%2BQbQAPBUpU4ZJKSp1EghBI%2BjZhTndsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDC0%2F67RNhr%2Bl8SVoISrcA%2FC2rVeVcRWorY9ba5D9QpF2w%2BRLzHlsCK%2F%2BStHLeDEYzn4WR0cxjVgFjffcRGBSFBwJwqVBGaGL88PN1jWd29w8km2K50iqi0ZqhZqf24jmS8KUeoSbLNOv1GSHGFHPilGlY0YE9Hvp0974flndOqeD2q1b7Gn2GBap2CWEg5Dhczkj6XI1wcHSKdbCCNWyq1qWdaInfXH4fFTSxNRH%2BkS1vH8KRoQKQn0jDNHl%2B04cYCRuVbvlztP33aCYDEGxQZ5YG%2FnlA6Bhq636MHcrTcBT42qs86C%2Bsh2f7mRMBX%2FSRNL1NUF%2BNRrpiv4ibK4JLHzpAp943n%2BGGlm3oXOUrhLxH8Rg9VL0zFIwvux4XjOuttb2VWCVyshy3KAHU0OLer9XKzIIpQ62CibRMAscPrpdqfDPAS58HydK0Ngz34K5NBaeSi4vpKHORpUd9RP%2B66jl5STp%2FUAXX1nCzL07XRPVaLNBelf1N0MPPZZm7PEifvibKPOJhJrmlL6YRIAGV3zY7Azpknnwjtl10usuYaXAWU5YdNxwUMWtSxyR8%2B%2BmsL%2B862vkOkS27xC8blCMnU9TBdYNgp6qv%2FUpynTArKWJRGaMnqkkmnPVa6YdxFVXnxAw%2Fiy19YtjbdasMLSuyckGOqUB%2BTJfHNBbZRv5fate8%2BE%2FhNFx6ssWt85mp7hadKERdKfxoFJJc8ezlnHbAKFrPB793PesjLnnqNmEMLe0td4hG1ibAx9Itk86KU%2FDxctZ%2B60y2g57OC7xT1fUgDGIdqqC44iNN%2FLNZ72JGLVS9v2QQkXy8VUX42ocTKVzXmZS%2FFpOW83c9lEMvBdNtakjoEpIgl0p%2BQk1Qxt5GAeoaUoJ1MdlpHxT&X-Amz-Signature=e6269b4eb33cdf5610fc9ec63105295e3d002eea011dd53af967bbaee4434884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

