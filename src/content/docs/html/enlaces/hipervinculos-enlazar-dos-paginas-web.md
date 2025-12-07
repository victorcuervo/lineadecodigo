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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W2DKRX7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSOqg9kk7GeNiQPYJG11BgAvrSnPIRz1Kz3e9eRf%2BiKQIgZfHTNLnTOhAKTUTle3aihAfgGNSR8zMRaCzYtjPIzukqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZMG%2BhEeVSOMbp67yrcAy7PYEVK1eNMF8tpz29oUcjXpBCPJT6X13vnl608aZWsh7RMftP4E6ZKpy17UfDo7L81i8bsj86351IkgX0b%2FQ4UoyGNtkPXJzC3WcocPvrbRZrh5HVbMSOzfMxTPQSP05dWSfzqAl0wGAuqjgdZCBWHRIMI8LHENYYgZC0y2HwGGvK%2FhrYQixBXdbkBZU01Kl5MNfkbOdSERmGAQKVPKSAdvvbHFKKl1LYFMMf3tCOqX8CUBo%2FtZbivRaJsQFGXqAB3A0SfWNUz3Wqqp4pGTh4vQXnWsDeXubOS8LX2IjamwFD1Qu1AnYkHf1aBBblF%2F4y4PEAAUvBeP7Nj3kEoxWKbKB5JIUADkEziZZO2bZDHKmivJ70yKJjTD0vg0MBRqMKcZ7jZ3jXfd4C21sB1n23kA5%2FrfxVQO9hLH3FRzEseUaWJFjK4YScibW828YpbY8iyEtSw8xByrPwfoJbFl5fLgH63v%2FwB8SS6Ey59CjScvM628x7fKAn%2FNmVBSZioJlaRgl6rIdsB5mMOvwpHNxb4YGvvezHLXWrz9jmYsAI8xKcOxWZVEY4nAkmxoDBG3iLzhDFX0v9KnXcuYaOTT%2BZOlTy0fijfHkQQlwd4SWh6gV%2FSxUM7RK015PDbMOS81ckGOqUBbBTyo81r8P5vVCf9MxTz1922Dld9LAYSdX4HWFoHrdy3%2FUIAV1P627WcRr7%2BYRjJt0UnK8oJ%2FJUl0fRUQH3gf9iZR08V%2BYGwkmbJC8zcqWW7BgpbKExOwCelleS07Zb4kNMMvRXAXd2Z2lS0E1%2FIRJardBDhFwVRRD5yqIIx5B%2ByzAoDn6C2fyYGQESL0eFrEMHB8lBq2VPfl6UZ5tlkaFxvdkHG&X-Amz-Signature=9ed5b8371cf65db708c026ab24f5ea40af995e6be5cc8766805e53741b971bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

