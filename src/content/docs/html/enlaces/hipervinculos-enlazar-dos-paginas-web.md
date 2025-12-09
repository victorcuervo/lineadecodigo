---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPS3OLAF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T173930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRbXNfOhRVg5mZkv8knim7qCmPyrgw3AXISDyyplYNwAIhAMzXIDU34OVl%2BaiMBM1mGUAB1TbrWgSss48Q30FP5lcBKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8v1XD1XdsrBDWElUq3AOqLnm7NF3DHyuyaWJ%2BeKBi%2BukVjldO6YkAnhUChztpTu9DM3d45Q1YIPCxuw2CGEbii1mjWPKWRlWb2odPR8Pg7ae1v5NMz4XhYa6iSg7Mon15Lrp4JLvfQ2GyTjK1IVGE21t5cgBJjPi%2BhLPQ00CuacCItf9GGVKu0Ublfdz84jOX63lvf593qJWOAE%2BRGtSj3pdZYA5klS%2FFwZk8ydzjaTv3lMJ7wWbRMsSQ8lQX1iyt5xyCKCrhWV5oUQeqaIBmxUOMstXFkG38XPt5w2%2F%2B16svwnzaCJtKIcv0eHqn9MHJrRl2JuCO8h7mCh%2FPBJe3BDUBsAbbc%2FO84%2BIvl9atMypdxgB3dyZvRk0sq3XAaK3ComC2N8CniqnB5fRyKnfpoBVU2EMqHo%2B0zjk0zULqXL8yF0%2BOq10LHUUsVzE05rDbj9xPnzRQbsK2qvUvmUOa0hCEDTslxSGQUgp4%2BZdjJdjRU5UCjmUBUwsG%2BPe0lQUL9FOLPW7PxBa2f8lnTBAM1N2b865FJGYRtc9fW4KX8F1VXtmY20kd2iE2Fr2UMk%2FiNrWF6%2FJiZAXS8WPvzUvCqjSodo%2BkRXwysMNZ5kykp4iGjAdI1oTs13ytzCDSD%2BjHkNaXiHfJSnK7KjCOl%2BHJBjqkAc2YGpu6htIryM16y0V3iwHQDIV4fuM7ZsSxddo1A4MTpumlB5MLqVQl%2BTwHEfia2B99t83He62pzNMlhA%2F0mTKB4KsP7u8OZOM9zKrZTx6968u6kViEuRUfUuCE4k1CDANV%2FwW9LnWUvlVGbqMmQTvJTAGq%2FpC%2FzayLt2b9Rk5X8J0WH1poYSS1DMAfPDRZV5Af7jK2o127tdlX%2BoNt%2FXNZJxbB&X-Amz-Signature=92d2de54444411721becb1fa19db4a91be0b42a8c376b3f97a71505868191cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

