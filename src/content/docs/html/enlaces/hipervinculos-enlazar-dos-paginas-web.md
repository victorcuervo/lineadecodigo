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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4XT7K5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxJWJfrv%2FQpr8iBNQIGF780LjhUnTqTaI0Pv8s%2B%2BQN5AiAr0NwwsuiNWfB36WaLRciWbYIQSa0U%2F%2Brb%2BZBo1wtLJCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZWWgFU%2Bz0cQmfOMTKtwDDlzaXQe6lzGsh80cXQ%2BvBkQE2kqRnR29YlNrXStgujgJG2LjqFNDHNHD2C3%2BUOvzJNAn5olBIjN%2FHGI4EENMEK%2FrXSX9qa5GcptXkmJFcISYlc7kM3au8Xo%2BnHr%2FzphCi4S5UuEh3qNuIfihFHwH6gN85ildk2z8WrocILRVEsgK4tY6lu6ISUiXJaR3sMZVYveGlB51%2BPd1n919BIrHbRdEA2hPa%2BEqrtPETnYEV8zLdIwnqmdmtA3zt55WL3cAjzj2Sw1ylCN%2Fri2RS8x1CWHRBFykem82EQ%2FS%2BrPdloBkJt3wtUc5dPUWCIGsLnq2s8M8gLbXqY01VPi6EPSt8zovuR1wEcSU1c6zZJYgQ5NkhB7Ybc20wvqeGIWwANTZOFDw2ZcPIyyLEo5%2FT3Bjwat1lXhKMkKoJB9BrGNPEVHlVhEZBVGwGdMt9VSeTZAFW%2FWxrl1njcFGSFFh%2BZ86MSdDatBk6bn%2FXqsz4Z2H8jVJMOOKAFfuDq82aYYRVAybhqctWE8w4GLHj%2FybAXeHJDpSSfoCgLX2LE9GAdD60JaOFmbLjAA3ehSALBgdhH3aSqeKoSDEpf66NCg9MEnTTJ246P%2FZAwJTKv4paKsaLc9SAlgu6zaEM9%2B08TYwoP3SyQY6pgH9mj358cpc63SNNCVQlcr3rncIg60f5%2B%2FIuLvqdfDxXVttSC3rh313rluEuRzsuQ5pljFbDGzZZetq7fFjvs0UNPWVykQBLgW1RwFsd4q0V9N0LIPM%2BERY5OYpegURopI3v%2BaPTp%2BAUUH%2F8u0erPr8eUdVYXmsuagDGkbu906jswjQtFBxyIy7OPkned0gyLCcPjBNgylSvGoEKxr9ePiam7353%2F%2Bq&X-Amz-Signature=d1a5857a3bc7f1f654fc4d4daad71eef2767f580b7ffd9606b022be5825e2309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

