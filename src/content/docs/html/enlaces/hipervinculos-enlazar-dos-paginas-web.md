---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OAUVCSI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDbmXmlrix1WTiOn4HdpxVkupzHJhBQYD1VPecIbFbOqAIhAK9RZBcvizYPP%2B%2Fr0tm8fE6Lzebb9BtirHiVGNTLQ9UdKv8DCEUQABoMNjM3NDIzMTgzODA1IgwBphq8MTENbvjcFk8q3AN6ZHk1sZmLhio1WmJ%2BwhrxdldihMU6atSm%2Fdw4sr0EdEDfpe6g0anEsvOtCLs3gecac1pSw5O5PkdMwbS2SdSmiMXJf1%2BAcNHIvg1X%2BT%2BEJLVjj%2ByjhnU17MscJ8mJdRM0BPFg7X470GktB0om5MpHpjHkzZMFDftzKXe7KIhk8Ei4M97wIE%2FIYYIHp6mEXxeg9k8by8M70XNiyj18JBVQ92uT%2BAdQk%2Fbc28%2FR6CtSQw7Ok0kaDqDME1O4r0qb5KjQXQ1Iut7%2Fklxp84EmDvsBBrNXVJLwwKLbbNsS7zYT%2FcLMnyx2H8mRX%2Fm4BMV2TLZudPm4hRm7%2BRwiXo3O1CU%2BOC6CHp4hBPnSlOv8sGo5TonC6LcKkycENc1%2BHqOIDkAw9j0%2FxIlEbSD%2BwuhwVYPcsWTC0NZ%2BBz1%2FGLN%2BJjr5E3dpSMrNg6rTISzJz0AaDlOHzBn5i%2Fzr34BGnqUiJx5eWyvdPjVlJB9m%2FEhRcuOih5slM4bZZ%2FWDEeysk20ww1J8hiieQgKrCRnBGrzSVaxRvSehBaJwEKpNHUBgjEJVpf1xaH68tFg4F%2BEJkvmyzVYdwQoTwE164b2XSQWeQdaOUK%2FefrNPjW7m8sFxj8u3DSFKjhyrByVNoGVxYDDD5sXJBjqkAZ8ltYo7CDeNpcLOu467snnMRXPhnGyOTXdJVrwIL7WSJr4LTfp%2BWpnLI14tZlnrVDX56q2iED%2FjhI25PPgaaGhXQ5Ns3Hy4hVhwR3xW589oCuEZgg1Z8tMQ78NJTY4O6dbdOBReY%2FeNaD%2F8oxfMvu16wUmwgavujAnEUbebSSc%2Fa89M4JNCD5j5iUwVYVelcMQJNdBQY2UQxL9N6XYNwYjGNMLA&X-Amz-Signature=6926a39897290a07eb93139e2a371a9ea5e8a83d977f6e129dcc72c3a8faec3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

