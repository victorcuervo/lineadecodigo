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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MK4IUFQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC6Y%2B5iB%2BKhwYNsF8RvpJuYLNo7nloskECiqzlzWRb99QIhAKttQETpHThlnE%2BkizoQViGjp1KW2oMt%2F71Q6tnjDp3NKv8DCDsQABoMNjM3NDIzMTgzODA1IgwddQqGQxmAPswD2I4q3AOoQJD%2FrYeAs2kH0ouZVGT3tBAhXof7KAocq55se2xR7a%2BtFRbslTHBCCxq7QtxzROYpOqXIJ674cmvvuv93bE3faPr6IQWC1WSQCehlpqC65M7SmktK1WI3yR1%2FUHNMWmV2xI31CFesTA8nTDRF4PzI7eb1AUq0IAHANUMEBSUMKwWnH5X10vEf217%2F5z0g0%2Fv1uVH1yUzqD0sevsV4ZLZYGmA4Un5KCVL3M9Hw68fW0DccWwGFqsF4YNjlzeU9dUYtVXKYSHPS6LAeBGUslRH4JZvhxelQrEycFZDpsBTpgNUermeFkH6i%2FImfDsaQW7ZTjJxaB5iF5fxdmf6gOWfe1eKnLGH3JbZ1tB0Gotxp9WlKpqCYJwdBB%2Frbjf3u9%2B9G5v%2Bx9ZyLXydZOI7Le58zyBWYCAF0tXpJSJ9F4H1rEKzcsI%2B%2FsVEM%2FiV7JNJ7G1zFzh18pJCzAzZm3bhTKlmtcniw%2BMpzuVXLAk49fh4xjCn%2Ba4gTyjiC%2FjcEtMEdTetbpYQ%2F8prfgfbLfOLxKgoMYVlOiqkiAacHIuxEIA96znqGwM%2FzExQEoOYArhKeMDPQZd%2BcIxta8o0l1U9s%2B4O9BP0W20eTPEvb0R7X8dtlKH60BO2NUtlec6sBjDu08PJBjqkAXdQauye6hNHBfmBBTTBOIrLliXLMWy0GE%2FMlESdzvVNgCkgH5negegM8IBNVvXc%2F678rhWLukgUAJ4hKlsE98Sp5us0NzO5mIvuZzZtnI3iAngEv%2Fut%2BF1DUUXCHWpwIVrGxUH%2BnidPKlVWo1iSlPU2qMkm9ObWjr8pU%2FHVvAtBOM2ykwZVn5Vo71b6tfNe8hkkYlua97ug%2FIN0X88VkoZ%2BDZA9&X-Amz-Signature=fe8cc3a7cf984e629b4f0ceb423212ba8ab7fc14914b35d821b2a3140b2d6b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

