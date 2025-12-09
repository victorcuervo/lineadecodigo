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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFKR45W6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEx5Tbf%2FzvlcJ7IOKQ2s6DmNhN9iPhwu5USY4zgvf7guAiEAw3OMb%2BXjCbZIaZ64X4%2Fa3CnKmzPjW10SfnCYHz4Apz0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BZIUtr24jv9IQ1pyrcAwEsW5tF07873iCNREZxN%2BVvEuChI6vxctqo%2F4ChCab1O3dd4EdsIdSEKGbkhU85qPgRvdU1NEjEx5mTDMXxH5dcdnuFPctor0RCM0aC1py1ojRt8%2Fwr3bKKVZuOFpyHZV1ZlK7HKlCK4kUFlOk0SbkV%2FyJQSMII0Sncw5SdAjwTu6KGX1JMcwfa7tpST53UN1xkCAl3gmuKxFexod4CZ7dtedjX6WZ832VIeuRgpNlY3nqcHq%2B4JZQGtgQTfB%2BKXVZ5XVEf0cHfISizqX8n%2FLMugyLj%2BOIgN4st2ZxwvzyJo7%2Bnsts8f0Ut8Z9Fo2fk5SG3gIaIXZ%2Bht6qGMuv1rQZZxIF0g2mT9Ke0%2FkLnml3Cq1TZntUn0fdLVOSb3WfTXoREycKOyZG8ulWu3S59HlqVYJZwe%2FFXPJ3ZJqqViAvdjub71rzTj83VfxNxPxU8a8F57EHryoBzLwDNeSmE5mlfGD4F6UwHQVEq%2BZl24mICs%2F6aHHY4q1Wjh8w3Drqjm3OssHRBtDX9pC14JZhNx5QVmB1zDiqq334uLs67z%2FWmXyOf05fVHvLyaosRTqg7Lfde%2FOvCWRVz5PShEyeyhGQpApRAqaeEgiphmfTwTJMP3C%2BU7OvIyh17ewkuMKWu3skGOqUB7C13cZu4A%2FhFNZZFy8soBoka8as8i1d5eGuGM2J%2FYjQ%2FiJyyBG9eNoo5rXU%2B1TFJviFKb8tHIbdX%2FWnE2FIWsqSZMmHFoKDKkic9Bs9dRmZOTUfElu%2Bx5VuJOu1aMXhg9H%2B4JrofipNHFBCWbjQuAsnOat9c1ZJy%2BoRS7zbaSYDX%2F57%2F8lmcuRQeFvaYEhPlcSjkEsP3afzj%2BwjnvOdAmX3Wr6RG&X-Amz-Signature=2ad2495c86e5c7a213e1d153e73bad5a0e703cae61275a9d67e257546473b10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

