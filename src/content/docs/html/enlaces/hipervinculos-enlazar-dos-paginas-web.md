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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ND23OIX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCwsqSz6oyPwETOS95JcYwVIan9piYS%2BAAKZAeonwOtMwIgQKd58gqkJFSEDmagiEvIvdzQiwHUcdw4veA3heSyIGwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFQLMlvuAJ7KT27uPircA8L1Iz8TadpAmZGH8BVSC6OTKN8lNLyd4zng9kaiMHlqpdlr1cYzMhq13L76L03pbAvmqAHIBZgBC%2FH2%2B0oH95BUMX9Sk6L01w3I3c7grqSXO7%2FnlemXnc7IgotjykIVqYeRVOcySAqOuTL1upLQblMAKe%2BTUhJylstCu6sF4JSQNjMRDk43KTJGI25dWhCbTOWfNfmXNhTLSxE60Hhh%2BqvrCZ66RWweJLdQA7uUW1e0zGh4aJcCJiza2jzqxgdQo8DjTssKvwLNt3C%2FYMxAtMMmdphuGQU%2BFVHcp388xa1ijZ0EmtSOjaaRm9MN05c6FnyPvFDHwGKtInBuH5DaMMPDPCTMXUOyZW9MEhpOZ6LHlQhUeRklPov0j0ATDYd1EYFqyAh1BOyoBhA0w6QByvFodUMwUcf4udlFQMJ7YorwaHnVZ%2BOX0C%2B%2FJqjoMPLummGhH0Xy85V4JT%2FXLkcnj4%2BlciNI8O6y%2BxgKz1d7rSVh5qGJrDwqCJ555R8wv1OWTo3o05Kr3YvCbgx7IOsf2qboMviXnahgQDqfDuEKjBjbzSA4LHmWypWvAAAFSCcXioay%2Ba1iZT2Cr0DZMOmZZD6xSWffy1g2UtnPX9jPCdDtuXw6DtmHDsu4mcWKMI2GxckGOqUBvB80JsFL9YfcXZp6OmbeQkh0ZRnPAvrB30ToEAC6f7HVAcBesgt3sc2%2BozUoHH%2F3fxHveTIfVyJ7R3jVeQx0pO4%2BYLmZK2CFfYYNvuuZ2JqXaQjXCkHvqVRPWf%2BVsifkHz8n9Wn8KaiAfK2KJxs2qy1QMo%2BL50TKAuMg%2Ft4UV4PCIxmFyAoTHwwxzfVvHeE3PE%2FWKOFbUc87PUYNJOdrkCgOSOO5&X-Amz-Signature=13364ac05ec1b5be44659baf90c3bf2ff230fa0498dd83bc5b53f0826f57db87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

