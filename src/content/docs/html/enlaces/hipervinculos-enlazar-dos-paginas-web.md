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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYCYXUEQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCCp94giMEBhOwqrcojPG6QhxVv3TaU%2FaV%2BOD%2FqGsDqFwIgXRZaXhSGsUs9JSO0b%2B95SMwTOb%2Fr%2BFoMxpIQmYahXFcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMQydxUmwtRPCBMkcSrcA5UYcB7bHPzl6Js7O5nOWh6PfKAb2QkDyL1hBiy3DeB%2FbpT2bDaWqVAXRg7x7j3YWVSSODyMTra%2FO4cAfl0FQKpuU9kGgM8iltIhiZXU24Gm5w8sUPhQMj4ZmqXpwU7yCYWb3iEyAiYOGiBEokjhCQtHaAfDnb3JnizKzNn802kfHSSy8WbiPAQRMM6%2Bps%2BhLMvVY3WeIXNQh8Eo8dXo296EHL34CyT6L7jmrno7IwTmgyprpqFsFnrqzUXB8cVespAEBc6XQ%2FNM18pu3sD7WdGSujctGDaitgoBjwRH%2FxmyWoTAsL8D11LWbn6QhgsVZU1FFWRy06oi%2B4TgT%2Fw3MTQ%2BUFqj%2Fcu6ifu%2BOXzJCDBv8I%2BuaaDkXAPYuRYCAOdp0%2BMe%2BlfRWTvybiQLHUcm4YeTHC7%2Bv%2FiR6Qrah7zcHyy7O5%2FjaQXBxqP94fG%2BJxyISzoIIFCx0p8F9XrquxJVIdrZ5wQNAmZAhVueQ04AUEnPC2VxWEjU%2FhgF3%2BCBbElmf6gxkk0n1F3%2Fdj9BjZtmWg6TP6KAMc5WKC%2FPWvmiBIXufvCJGY%2FyPNrRTG1UkBbChWxiVgOoc7H51ZajkOzuQoPnr95bmYSJfYL3jESVQqtuW8Y9VmYJeMshDIH4MNCgxskGOqUB4uPwzbRdmLx6KxdxXJs2nmLZBZqddzgchBNu56QgAsWiVH%2B16fSLV0s6cKA6JREYqF6hvIRj7KjuXnnje92vF2WP%2Ba54WZAEudjNTLivpTy1o5m54BSmKP41WkvgsGP%2F7TUcFd0gVlgzD8ltVZjf7Khdwy5twNwyc812EbhvFr18guHvmfZRmEXJcGxljBdRvQudaHYmzLmp%2FCitOGkqn4AoyDJT&X-Amz-Signature=affe28d336e9ee6429542234842525fefdfd1c888d3d704dc46659a11da4661f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

