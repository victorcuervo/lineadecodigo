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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634M4RCAJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9DryXCHlJ%2B%2Fb5gjvigTS9frdbRyJl%2BOOENHcuStDXkAIhAIbO6x1eTKVcaPXu8JFbBSQ96h2w43b%2FJiPRdD7CSI2nKv8DCGEQABoMNjM3NDIzMTgzODA1Igw2yjPUn0bnyf2e9fgq3AMHrZ%2Fl0Hd0gQ%2FD0fr810rbEZtrBa6KRFnMWhnDzTEkrhDcICWPlGV6StCTxJ1HKrLb5RshQJMv9YyNeMVrpG1oggyD0Ao5qNJ14E1eS%2BghWCwUx%2FofS%2BEgcaH0FCnxOzeQtjOlNlFDO2IiDkAjhDxu2dyiHhclHXsAb2AntqXsHiO73IyYrDV3dIj4DZnagrjJAxtbTCCfmKUZhUikJvM%2B%2BiaFGXgQhZdEEAh81IMlgI30mNCFTo%2BjJyjD8TwDRSZrXu%2BP8SqABmlqlTqsmFslUQOe1fdqfQ5o4sfjdO%2BsMiQkv2%2BXhFxjbXp4Iz%2FT5BJN1QSNY%2BGWSzqBXX%2BPree1X7hJi8aXmCgQYJg4KZ2KI5M18XZBU3v6KCVvzI39ccQs%2FalDZU0mUU1L38NzRugrASCi7oGUIcoXnuwrWDImus2rE8v93%2FrFcHqaZmVaO1oqK3hTMqUzbEi2h4UDJLApS7FrrJD%2BUPs5F6SxAV3jzm3g3fmnKw3pahYu6bpdPHi5supgd6g3XdrlWfhIfe0Xt1JOTZNk7KwQs2LC8rSe1jT3L3Fm6C8Bgtt3bzGpWsEePLEOjRDWG6jXHXdaQqMPaIRb90km5TY2cgOVOCw5V7JhumUucIhwsIzCuDCw9svJBjqkAeVKrst4cKQtHog9zoiNszdkpIoahBtG6LtY4Y79EM%2FB9YvXjbxLaETMyEDa8p%2FrN%2BBkx8DjpZwxxaCeSFFQXxC11iEQqBVRPq8o9CjqkL%2FnmVari7cEwR7bzE95PEJ3mVe83BKkvdMrWzwOsBrckaoegdNaAxyi2ycsa2lgIwtjGvgkfBGAaAt8UxL01qfi6TdNkvLkSyep0emq8ivkQIqtVAeU&X-Amz-Signature=716126fab977329254339f6268d39888853752faea3ea0ecfab032247950ddc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

