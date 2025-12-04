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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CSHFAQL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsMqTUiPc%2FOpCddpvc7Z9VmgEYViGmWDn1WEuTRZTi7AiEAk0ukPwy0b96nnfhfxIrpkDC%2FrmGNH4hSIKslwWyNpUMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDxF7kme6bjZ3eGPVCrcA9hv6Ysa8R0hPeJP9XCnNRdRIePG08zoGHvS7oGyHbolA6qoqky6Jzk9%2FqcovHzQ3tAdZW2td2wRSys0FToyiecLEk%2BxqZ9uaf1HUTWxiNi5jI2lDLKDixhsMZidlrx%2FhDgUa8oM54kcpgsIppYTg2JObkuv8U9ztlI%2FZZJIQXJx3VvbKBktCCRPnczSlxFWVi6XL4wmBgNa3h2nLFFbRrhWyN%2FaPzwWl3rKkb%2Bf8gtn0N5pL11XYFg3OAs%2Be4SiAShD0Vxsnj9Lux3B9hnCBAUtYsk%2Bnhq1Kx6%2FTVMEFefc8gAS%2BYT12BOdMnXiu3ZP%2FT%2FkeWlSX8Ok91I8xmIcGbJr6G8jIZwXIg7bQ6UFSwz0YP9QoRFeSmFDD9G4VmqxlK%2F7%2B%2BShieu1oQJMSnn%2BsTXAOxtPQaiXELeWzMdU039rzQnzSjPusCSQCa%2BKxGryLjCjSHwtlEcNEYioKGFxPRe8R9BbY4V8PnMrW6xK8wRkjxOS%2BUOGny9fqwmLUQkyE0XvOqEAzR2AxjCbBje1wrPpSRuu0zzlpRvaB1oq2VJ6d%2BHVRxgFUBE87JSILf3I5X0j7Qs10huSHCAuiue5ie4kj699gIdPo94uuOBtZknzrSIIdHhHc64yjTYOMNSMyMkGOqUBsiWMLEPr3bs7fE5FIb2zHac7U4t1FVFbYepVDj1qFdE4qx6j%2Fda%2BDfdUMjMRtQX%2Bq1GnlvmBBZckraZ8kK63EC79ww50CWHS0j7GzXP8cXNy4B2Z6%2BIv8tfNJZpQFToxsxvswQDs3tEIwjhFmqb7H70FP57Ge%2B5Er5VrovxVKQruBJoOlBQ8yD6c6WonK7VVu0Xet2sknzy6BiYf1dpZCYZgwzTv&X-Amz-Signature=2d3f1da29a582c2266c50ef71b671794123bb1088cd43d5a4849209eeee92d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

