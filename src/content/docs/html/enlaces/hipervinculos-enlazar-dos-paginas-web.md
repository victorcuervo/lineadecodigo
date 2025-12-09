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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2F4YU5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5M%2BP6Jf2543pFXWS7x7A61wYpkfuMrZSJstx5PI7MjAiEAm7swlD8DJOM19J2QxHs9U%2FboAFnRXET%2BNUg23DrenZ8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxcqiAcxFcnfA5IeircA3AVtL8ZB0cOT9vy7v0G%2FzZehY%2FKTXeW4hPnf1hmRZxU3Yd7UrXbnNvO%2B0lOiB%2BtdRINJmX7D7ocCqIHNCLo%2BJsQKcy0jjPBYRYXIxwNKYTn5b0%2FK%2BeElDMyDKkqfQ8ag4edsm83NdxT65RqtnGQqM5d428kUHmaKS59ErzeYDubSaJTyDryKMqe5pXo%2Bt1bdpRe%2FzL6ednVcN%2Bnd97E6PUg%2B5zFw7umYPfA05giyHPstnlMhaH0McV4n33Ug3qJSLD9uvStNARMgSqcU6IFYkvuiblqTtyrwgdYtB%2Fy9MNVXvnOZU5bo2q4zXvf5w2L7dBZ%2BkQosWesrh4rQb7Ve9Reao2hzzDFON2Y%2FyveotyU4soYjQHl8sJJKk3bEtw5gyUPmNEvEc00b0GC2iaupXr1RsRj%2Fu91zwRZH1HktCujjRezaw%2BfSdqs7xdHpJJMVUo%2F1yjcB8imR%2BV2dwqW3FxM1JIL%2Brj%2BjvOnJrelBoy6Gsb3Z6QMGycdT9Nbfq0hkv0pMhhZi4VrGW3SCKXwoX%2B5pjCzzGqsrqzIP3D2OI4pxvoeIf9II8GkwvisafXr5A19TDM4Ff%2BLFWxdn803Ny62zeIrgzunnUSzHkUG9iwBMM6b3HDuJBLpVhMCMP%2Bj38kGOqUBsO0S9yj8mottTq1esvDUkRs9SfR%2F5d5k1jU%2BOGtVhaVyxjEhXzGX2w8CnsudgtV9Wq6PRrF%2BaMgnoqa38wj0U27nfs%2FWol%2FC7AiweygTUDVAIkfg%2Fr9RMOdH%2FlT0KCEEnbqXKAK3a3mrzuBzdU6KumATrdd0%2BJsyjiw81f4LIoqqGauLSexCihhYO1ISneTbtA7ghUFK0YoNivmkgIfSb5n65CoP&X-Amz-Signature=a59d0921125dd680142c1f82350f8bd75f19df9202b6b44ef7b38f8e566834a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

