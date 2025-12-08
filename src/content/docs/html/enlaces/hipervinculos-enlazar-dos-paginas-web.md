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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYB5YLFE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUGEizNUxgFjK2MmMXL9gt%2BewFuBM7H3v2f%2Bb5ZoynygIhAPqEs9p%2Fpc7NxVlW3q9FcJxEEWkTNVcQ1L43jGLnEH7WKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGCTieCqv7aJ%2FsEMQq3AON%2FutWTS6bwkpR%2FMAA0QHgGP6CpAFVpMlIoyuDleYN23yIE8k1MenYq%2FQROLxqEJTsbgn3aiX2eItCbcnhSbHblYgPlKUBt5lBfZxgPFbgO1Mztbr%2Bee2jY7gQLPYBqj3S6eKbCPy8DpUkVYaS32puKZkF9GbzTgeKZqIp0ApMKRDAcaCTEKmw3zu7hyMqoirIJl9WK5eTOZz0NjOvFm2Sjy%2F7dj9bdprH5RhRZ5Qmntv4%2BwOEn1OKmS%2BeN9EplERli7pDNyupha4KSJGQHIasYTBxckguv80H6yJrzM6N8pK%2BgIcK9ExM%2FFSC7iFKZ703JbEPLwnIllL0%2F8y3O4dllwkBT9aDtUmvMSSllFWtCZtfo0Bf3ru51hkBxeJocMbVxVCsnAS877oidYMGTpDpxEI49RYiqrLlKF5QAba6Qz6aJLbZLamqx0hUOk%2B7o90cNXe25fwjcZop%2FCtuhvTQ4WIa5cZXSEMVf0qGXWOi6Ny%2B4Kge%2FpSec5pLNIMEO411A81cDbTuKDMYpHlnE3PMHqmNXHjXhAlCfIl%2Ff54BZmuEEURYGpnQtBiGd%2FFofVSvkNkIddeHIt5Gcm13lCnL0XKGMWPXX3C2tGSfeZiVILShIHaArND93Su0ADDYod3JBjqkAfT97nTPnD2r5rqTEb%2BeTH5rbfn6r5rBETnNv7f4auBDwezz8CVvg6igx%2BozsIIip7rE0zd34y77Tm6cACIf4OsEIdtGUYjoZ26hHrzHlpV%2BTeLVPSKUCp6l0tmOYAj3LOmOVs8kzMM0xiyHdvA8NGeH%2FWbxUJeG%2F3nx8xMzrmWussYsuavTRN4c8utuTouaPk10V2Zz787eUcxsobnyEavhxott&X-Amz-Signature=8f2eeab9e009266fc4f1db1ccf6f379006b1817f412637ba5d2d08f4247b3ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

