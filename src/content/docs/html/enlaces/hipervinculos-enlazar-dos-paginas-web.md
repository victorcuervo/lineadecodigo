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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAYCD74Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKCh4nuTXnjpHQPzT6dmm1pOH90TcdoV0wFOu%2F8Q35NAiB4RPq%2BB26TunYW9dwt6BKsyfo2PtwHD2bVnC4WPcrWrir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMbVFtdzndgT2dLYaAKtwDjZi6GFu4ECVzdIdMKbHqddHkWtys4ShPIHIDOmlWazkooW82SOeRfPQOhVlsVii1MCKlDHkPV3V4N2Be3f8q%2FxxCrWimqM96ITnG6agjLJVfuQtWi2DeVs9A78lOfcSdKejj4K866wxP8qRm4A2dP9HC%2B0as1FWMTPtn55Y3DSQtMXU3DkVj4%2FglF4SGmLSHXG6fA0AFJq2RaQK9cPOL3aZkZ12R4sgRkWAAqz5UFj3RmcfxuTFmh91RYnbmt7OfE1HL0dAQJxY96SFjZyOoAsu0wf4LB1lctrCpCL29FUzY1SR4qLxrfS5KpEsGBXFM4fmumUN30bZ%2BTsqyzZWCLRG5PyoGK6DeFzzyYYOCM38Zu9nt7w7LLLW5iKTlbAQYzvES7Ce9z9YakzJUsXdTPzDIB4rr2mTjeFHr4vTKuM7%2BGU1eky1H%2F5AtlLfKFiBX2KQvCkmUeNbO%2BKZ0r80ZGZJ4acYYHs1WPf8VIDb7RtF0OQYZBcvp0%2BrV%2B%2FfQ0OEw%2F0VtX7BgQLAXWTJveKkYy6Kg5nqfeZFYYwWDk0LFiXn2zmHp%2BT1yi7Nn%2FIakG8M26aEQXZbZjl%2F%2BO1OGQFKUcKJMyLKPMnoH2vP0Ge0tv2Fi74p4V9PEokvxG2oww6zJyQY6pgHADL92b13kQBrK6Ed%2BYixyw4PeQuDOldXIWcPy5gRCxon7Bfkrp6d3WAbeARrnjm7oWn0zh9RvEPXxdANRDhAOZ%2BRP0ZRMZuifG4lea8UMci8eY5vlighkIoewX%2FlbgnkLrdEJyMNavi0%2F%2BvH0X8tM2tiwHKL0CmAHKOZlY1XEUwJxFtlZI1BTtAlDNFWbJzYXoOQDXC3s2BAepytD6qNDlLdbW1%2Bi&X-Amz-Signature=233e2bdaa29d159260e6f4b63ba6bdbe6e4598a3db7c57a09d45537a194665f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

