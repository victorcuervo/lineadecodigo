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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624IF5C2C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIfJkdqEVQvbyNKKJpmHXGAIrfL%2Br1U%2BKOnYSHPVeZKwIhAL%2Fywelup5YO33ImzTLfp04nJYXR01V6%2FoO2JogyHmMAKv8DCFUQABoMNjM3NDIzMTgzODA1IgwG5ZGUXoS9aF9Y4Hkq3AMNU7ZICAWjoUJhOqtuwy660ELGCA4V7yaZLJji31xONWln28h69cv2jDagSHte7uWSQLNJam%2F0NDomFkzXwyX%2FtP9KZ6cddD%2FfN7sSnTkhWav2kYu8iZlhYKJd1bO84jgHuPeLkF%2FPOu2u1HzsNaroFXF0ILf8sfBXELQounaFJB7JYS%2BHFVUSgVuWqQgJlrXlIUfE%2BiNzdgD18G%2Fm8cQoKg25qftQYF1ngyXfhcTiRMyHu9hHL91YOjuvpQpv5IHqoQyU2zrtEHBIPD5urbiBXytM2Bal9OessjFHffWCl5NT4etjHi5mlZBvooP2rECJbUn%2Fs46RBOBcYmMMyBy3j%2BCbhnUL3iFG67E4hfBpvKOe3Ta0A4omZ8yfl0Nyci2kjm2Q%2Bhd0F83ebAcCSPpsQBcaTCKWbXGC5txIScvZLw3xq6CnUwO575F40OFeuXwstNZdYchTpehVapS3hl5AdpYUV345JsuzkzfgcSpBOv9FImtYozrvrkRG5zAMBtNO1bSDTCWFwiuDfmGv%2FP0NPbT6Vevk0s2%2FkPJ1ZuMyB994wqAAa6JzHeK4y3QIwW5Rz740H2JKp32e8qxyBFZRwDb5bkmeYk%2BdoiN1%2B4BBUm4wRsqLhAMt1%2FSQOTCPpsnJBjqkAULS6Hv6STreHfeea1zAasKDv%2FeHngVqlYQsJPV1xZ4%2B20v9Y7eIFyfxhttnkj5fhRxEGMODl4Fi%2FC5g53q%2Fy9XHXtpow2JnzS2WNrEt24MfPa2U22cm9DjDmGiaGO7Vs3gaxy5fhWsMLB134d5UAhSZhUsgTDzrVuxunp9w7LJUM%2F0fG3lVK0k0KJ44h5xfJbCLhkefwztapNk0d6qBVCCUf%2Fdq&X-Amz-Signature=69ebb8b676fc61915638c2ca283e5f3a3d3bcee382b6cac081b8c46b0f2f635b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

