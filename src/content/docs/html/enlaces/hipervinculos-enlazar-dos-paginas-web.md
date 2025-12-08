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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJPGLTWG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYc1FvzRoIRcbnd%2FYcc9DRLqAYG0IZQ6XbSP1%2FBnG7jwIhAO6OiF%2FOFPUl0M7IZnb4gYFI%2Fw6%2FqP2LytdzLJc7mfefKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIeACEOpm9RySZR0Mq3AOeOunKtvEQ34dgstHelMJtYlWZ9CJM1E%2B2uXj9BO%2Bh3eaXFnswWr4HHY%2BnCbPasSm1zCgO2nosfNSNcld0QrKNNhcHGcm2PBd4bFemYBv0MmkmjJJgv74Lln8pPiEidgyAgTywCCG6rHlSq52c6J6frpKzq4v11Eb6Hh6nHFrqtZhXaB4mPellfuv%2BxmSouRzq2CxXr54im0QWENdtpl3uU4MxYoaGjwvpvnt9k%2BHHJAag3g8httz9HIK%2FJNNMyz%2B3YuAxcgFOSgHFILfoY17sy4%2FcF3Q8hDgs2fNsgN3S8TC0Wsu3rxEEZUQPO%2FX%2FyPY6TLnD9gbZtThxH1IYPoBdSDMXoHhJXoAwz12iz5MHLkj0DPWe6WMILQN0H4%2FDo%2BaEW554QW0Q5LTQwBMXW96w1emqn1apyZYNjSuckPDNs8Jy9a29yrjTXDFyEwd7rFnkivMh6DtlDv2LYhl3Qu4ctDSDJN9iK0B%2Bx83aEyPnn8bkspPX5uW9QHB1q9Gu6UUfyXhjpGozhdK7%2BBVV0tv%2FM%2FEZzvB9p6kSrZJvj8EjlB6wW5V4OLMXPiSn8KTTDIBvpJqSwIU4EIrx9YUUbRJ3O6XAnulOWbePcge2XcoWWPCwXXYpxXr9Kgrx3TCq79jJBjqkAbLbKmPI%2B987CEh5MNBmvhfgwVj2V%2FWow2F8QwRv8sKayEXJzNuh8Zu2%2BlnB0s4tcEjicnPUuq%2FkOWCtZqoLcupHjw4ILYOlcGw3e%2FeGhnisUG1%2FsT1RDeZuYmioTmbFccUs2QhqmeusKlnmd6j2EnY%2BnTkUx%2BR3XnKa0cxFHKMC7kNF5FoenwFz4IbltLflp0vos5X5e%2FN%2Fm7jkAJDSnytPShi%2F&X-Amz-Signature=e4a912df3a1154f01df9ec2a331b7eb57e241a338705cb0eb69ad85fe8a01d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

