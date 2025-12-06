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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DX62HLA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3mKEHslB5iV5JaPnCPBFREJvwjiBFWLPfITYgNfpRjAiEA2sD70BWeWY6Pb1%2BOAWlx688kacmhzdxZbQwpBX3wKTEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMHDfT5zVIKk%2F9TJVircA%2FArjJ48QRsBS%2FIOIlMHTkkfO6NtpbTAEIa%2B%2F0E8fuQxC532sQE3FxOmxVJVCIao8xl3PsKJGsp6YgOefX%2F%2BrKhs1AM0rwEtKp1ozGtzb5Dwkg0wAS718WwvwPa%2FEr8fjI06lAX0snQDVJr2JLHqLRAhJF4vu%2F5Z2nBw59CzomVNR6ugpQEVnT0L7u095ayCf1UaWx5I6CzMdFQDBLTA%2BHIOIZ7MSFt0NCgzZg5bCYV9%2BaF%2F28H4qGC%2BKcN3KQn6hqpdL98vTa3Vd59gAIN6%2BSc1BwMHNU54TM9Iht6e3452EtZPbXy0IsML4kskJ5bWgmqo9Zfvz7PbYBBGPJlBgjAbAjZC22l7N5c6aGeEEkWrOzk5qFXvQP6yo3A5er8mZivrDSVPFfDRvfk15M%2F8Z6j8qD3Ew7jypWDX2j8r6%2FB44vn7J4A4OKzJWsRznyxZwjsca1tM6P4na%2BYV%2BwIEj4viscPo9NtZROeqn%2BJ35aIAr9DC%2Fza62%2B9iJ76uNzSUh9xm17q0nEKSPzWKFbsVo436C4E7hcJ89R%2FMhM%2FdmPIMS37dlTIQCaRs5CLQjHSREipXxDFUcW6R5bv259EEEtSPO4RYsmD%2FMkVtn1t35tHOuhRSEgWM30i6CHx%2FMJ3DzskGOqUBt0paNntBj%2BZoUWXbih97uaCHaOf1nU6IMWtQtl%2BCX8baTgOrBkeQQPuIx%2F7Ar6AnqUMovztmb295F4WWoRFcvuwmHhHFLj7KfpQ8qHMZKk6Boc%2BAPFISJTeS9PxRk%2FnRgnOHRq08mLlvqnnxKd1WC%2BzVIBuxc8k3thMC3XJpdN8yMuD5lfchfy5gZdQG59xq4wyuYwcs42sszIWsJROZuTPmqgTA&X-Amz-Signature=63ca6632bed57c4200013139588dee740a29af6503d093e7cc3f41957daaf0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

