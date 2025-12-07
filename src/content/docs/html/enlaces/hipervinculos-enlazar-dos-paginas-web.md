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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNTRKOG6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICP9ZkLHQx9h%2BwsW9h92nWhwJM%2BjZqV4QANV1%2BTxGoYiAiEA3V44O98fXipYPlqgjWoFHt1kQHgomh%2BdKQ%2FFGQ7Y2XkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFauNP2MmjLCXEh9SrcA3S1secBEhLJcvVhkoOJveGNxUKSaOcU2paJATebw0Qlymd3kga9KyRpRSMFSyMo1QcEYOw%2BJHk9lnr6SjUq8joxRBIVsKuJ7N5ghz1Cr9E8h%2B6xScEI5dwWhlNfTtZ66q2u4pR99qKNl2ceCt7wZorHFAe1crwZhYBsQtZa6VD7%2FjSOubqldnJE0DKg5axrLnolSYFC6kA7TqeKM9axTg1ye3dfKvNJZS07TQ%2ByhiOj0ZFxscNG8DhAAK1vOEqGQ%2BeFMw8X3%2FGaUkTrOVy%2BimmyJmY55yF1v68GiKAuGwW10IwdObcnZkrzDkL7Or5Jxw2ZuDKS%2Frr7JDYuXgKV%2FUaeBnpVIvNomby7IfXxqz6ci0TDW%2BDIP6skCkSIMQC7cX7lY43iiQ1utq12WXuM1gY%2BZilZOQOBBiR%2BRQm%2Fx%2BNxD17iVTua2sALbxJq2NTg7fKOBMvs8j7lYZ7SrKvI1jYj7dMcrE3GAR0OoZEmKQlFnD3YPwkKRixzpsS2DL%2FuZFc6Y5Sx6Ia4FG6gwWdruc1onZCDRIrtdyWlgUIOLdA%2FsILX30P8B14pTgaL5M3FLBIdBq%2BVAQV0iEbuvhU6I4APOHvJip1zL90TAH6J3znUxgaTNYBV9pBvW47GMIii1MkGOqUBOFA2cFpngCtmwRub%2F8EIOLb8Mj7%2F0Ig8AYf8l4leaQF1sHIgRGgkisHfAmTwsd%2BdkGxeR8UP%2FklSAB5j2no2QWrXj2x6lIuugRyeyCW8yaOUO6o0KNfXYm6TFCHcPIO1TsSFnc8eDo5KE2%2B3jsLt%2FpeK8gtAqLlWP9ou%2FmtoYn5hSjldPM4IEGC1ctk7BzTxXMclLYyfpT%2B41dnF%2FI3dk%2BKRa0HG&X-Amz-Signature=47b4a2cc34118039dcdfee3de8ec5c079a898880f03eea3ff9f0fb847952e791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

