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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y3DWPNU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDObC3XqpoWtK8D6qbGescGMPz%2F2ztM8VlNwE7lab6cEAIhAICOSnjwnGF3EQ6lTWq11tD9IBWK11ZcIZ73S4WElaRSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztArcyIuAax4g31FQq3AMvSGHwgTIezN3QaLUk%2BcIIc7gvfABwB2qtBbtm468jISKJrBXqSl481BLFQBRdC7AJ%2F8WUIZ8xoi0EEMULjuauxx0zeRQf6brWbUiPoUE7l6Wgu938imqnB3Idz62l%2Bvsh2xhEKKKvDO9qMe0A1vhJCMyZtoIY%2BzZJXIRovk6hv%2BDpD5xEbjpmTppdIE9uTBF%2FNl4MpK4qARHcQ0HKcaUDP%2FZ03qbZBxhJvEeiFb983FW2saL73k3MMEH6XnbcnJXBFaOzygYFQkEfoc%2Fk5Z8XCWn2jHqq9UUnZ5F9cegVCan11NXQbYraKwbHl%2BNY3s48iWhZEl%2BYW73Zs%2FfpKuVKtMg2a%2Bo9n1Q%2FPdCgJuqGe%2BnERWa9Dr68gErCbeBmZ%2Be4aYKfFQUVhxFeFPtpg%2Bi0ad2HvLa3bJO%2FQ37Z63J5AKHMohAylu1yn59Gze3hbF9kIL1ATkfDcsx1VCfiAJg5Ha5s5%2BcYpaJ4PZ%2BeRdip9Lx6IhTSSsqufK936eA%2FFZLMoi7T93UwdkiX0O1lkHfaHt0nZFN%2BBkBpdWEMK4iFizeCjVMHyf2wElzRliik3iD2gZ2b4fncj6ZzL7TeDRJcOypm33EFCQUDJImnbTF3nCb%2B2jEVCOxn4VbfpjCDtNzJBjqkAaU9522ghYtMBjUCJBpIfvpxs%2BdYzgsCh8t8aY52FqPL%2BG1F%2B5KLucipryqptTSdLS0Em4ptTdjIOkWSjrRjr3b4dBTlenWnFZCBhP4c9Cwy2pbNjHU2I6USY2FI2nDcwFD9NOphhfXYIVPNEzraPeA%2FvDsgPXfuH6H%2Fw42Hr6IPsoFXBZooCMJSprZq1huBGcYn0hWiLlXyAyR7D91sw8yKYnzj&X-Amz-Signature=759ad47a77b4233a06b55739e8c91cfdf35c33a283cce63efe439c9f99e22525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

