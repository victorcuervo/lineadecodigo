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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSIZHYWD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrKL4%2Fwx3Xn5DMQrELqJzu3ht5MFSVhhZvcYxgEpewnQIhAKiUh1EHj7zpCoF0QG50FJiOI0bECbNGtVIcf%2FeEjAoKKv8DCFsQABoMNjM3NDIzMTgzODA1IgxoKAccZ3CsTFwQDvYq3ANk7BjgYrQuwSKgQtdq1yuDADOXm%2BicW75rwxUrDhoUFMXdJ77xeuPSF6kSg%2BYtzYP9l%2B8WRd8Ws9%2FY1PUtliR1RhP%2FVzPI7y%2BLog%2FPZtGyQTyVnht56TUVFVvPbzHjnH3IGy%2BB6kc1Eqd0iAZnZo1mBN%2FOve8sHhHMDFzo6KzbVi636TeGiJzzHtrywtJd3UyFsZ%2F8d6UgLinLdYyA03%2FwCwWrSsoTyxDr77EnZS9YJJby7MaJJ%2FJOvo798JboJl6ooxiTCMU6dE%2FjCFPuWmHQcdl%2Bpb1qRjGCJrGjkTXwdR5VBOBuzzhq1tgXTsMfTAd6IT6ZiGIqC%2BhQNkAI9zgYZLhbSadZLrNYB%2FX9%2BZU9zS%2FK4KfYURnE0jtweuIlzMKCu0PMmluhk1CXYI5KPeRDHo46xlfy2Eln1vKPekRwqMX03bR2%2B6DDw5jeddN6b30lPAstZMVl%2F0KQo0xyPKY%2BMm%2B8a9x0xQjhm2WMdn9q%2FMO1nA1Sspi5WSPYEDyB39wC6BWvHFkCpy2a7VPrNu%2Fg9TXcTTeDmNb2GU%2Fv2ZjBlk2n8ChiJ%2FtXe5JmLHYeZLxsxr%2Bcaeq5Zk%2F7rkLqZkQodGAW89SJY1mpSvNloS2kTa96QMb9sPTOSjHVMDCO2MrJBjqkAVLJlnSgFXaCDfTLL7WC%2BpQ9vp6mLLDMYgcySaNjNk5wWlxa4y9SOr3BZRLjzHuff7ArJ8l%2Ft%2FCVBf1dpcuNl1LRY2CykX73hG3mDbpw3cvqkpiu7NMk6xuZT4FWZbfsVWH4%2FY6Rd8HExJW9ZUq%2Fhsv%2Be6V5SfboWzPWSXazbb%2FDpisOpHiO8HygdBH6KsDSYmijfhlR7ivUsDJmYqQCEy3Ql48e&X-Amz-Signature=32bd41beae533f8be9d983a1c55b2ba111097438091104834f3375ed763bf31c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

