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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOZBRWVW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3uxZMuvfD%2BtIWh4l5T67I2if0%2Bbn%2FXhBkZw2ozeKGUAiEAomHQnSPy3yCo3qd88i%2BdsHRVsJLXieWeAiIn7caktd0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGDx%2BRCBXCLHqaQX3CrcA4Ks2TtcmyNKaa6EdswdiIyPYOj2DjWNM0QCIVOpUs1wRFl1BDlV6Ow8DMbkH35HgF80ZZYQQAKpY2O887jcf%2B6cMs0EH7FRfYEPf%2Borbwi37U%2FJKj5AAFlXLalqFmCIDAnKfQiwZhqSgD6tH6ReYAsN%2BL8gKyu5pKh7uV99zS32R9%2BBCHaTzpurLX3Qv46rAB266FwRrmz2HTax4gP3u4bpTyegnC404XP%2Fqkz2Dn4a5MTG2mf2MMSssBUTek1uneIAvukdv07yRRFlflNoCGUaK10HqnHDpWZDUdFVAPqbe8wFmsBI%2BmHXjcsOLuMJLwYHt1YgA1PDhHd06%2Ffyc9yk5bD%2FIl0o%2Fl%2Be%2FAdcz%2BgId8u6jZEqlsmcDgtOj2%2BxuvvNofqjFvMFrEuHFV0diqIUKcc8WfgUjCwIWRgqhif0vNS0c7P2d%2B66UsGqd%2BZ54Y74EL9vVHN0u05mUPnyhVm7TUfXW15zQrM3yKL7wVXWI79HuGlN7sOxPu7usashYkWObLAlOMKBQgvPU1Yu44blonvRoo6S%2F9ck2oGRH4U7qC1ArwfnnX0XudPYnE6KVbrjsUTkWMsjCVCPL9IIvFpkrl31cGpauWHA9NBZs%2B4tmBgiPc90j4IHxOSuMK3B0ckGOqUB3%2FgccSDij8EGhBUTlaLtRD7ZvYgR3RwHE%2BDlMiRDnODF9QixEVzr6bmCZnb1KTuarDYh5gBM3Y2g0%2Bh9psUvUPlVPioci%2Ff5rDfvLDfBpWMYe2n%2FSd9CVWD0hSl1xpW3wJAz475tsk6%2BjQg1D2O%2B2WMEbfvYPwAa2Zz%2Fk0c6xbqVd3keNHAuvW8%2FPq1zJyjCuPBOVewf5q1yUiHJyeqUIdMOOO6q&X-Amz-Signature=de74229e0afd3a79405fd6eb851a611697b324cec40254070b026de22e4a7665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

