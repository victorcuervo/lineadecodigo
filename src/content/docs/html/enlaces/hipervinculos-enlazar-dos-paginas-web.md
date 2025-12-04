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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDYVHE7L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDlMv3gl6idOh9UGFYJfPQJzvYWdfclFmfPJz7EZDy%2F6AiB0M1U8OoAWUBuS1a7vEgmYhlwMWzr%2BPddRn9CBfYUIEyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMpnuCWB86rUFaFkukKtwDzGtjPHZR0WRqmOoNMeKgF2%2FFKDfw0PGPMfVH%2BOD8JPKN0kyk1cUOXsZTHk3JTy2xArUmXl3nacX4bFHRD6gTWgTNsjRhZClC5B%2FTpaqto%2BT7Av6GSLaUGKDQ9wH3sRqP3lVL1RBYmUrZ949RHU2QJhU2LprB5zhv8hMqE%2FWBwKCN4e%2B2dfpefQ%2BNqbX8fDx3JOTxmWbHPhGbkovFZnTt8yxt5pVx%2F29fIQ6L1DFfSpQdODo4ry%2BYx%2Bph1wxtZF1gdzRSm4uehMS2uJ6dFKs%2FrN71%2Bin9f%2Ff2hnaTSUOlD4uVVpmve4DAIAk23ibbTKQPaMqJW2qEPHgP%2FKc0DSJ9pGxMhM19%2FaeNXq3aZIVLT1SR83Awlv8FTPaXKF5gPUrIMMNzGPfjw%2FUWZIBnFuFo9mTqpTH23%2Fv0XSl9BwbmBLKQqvDUzIzJ6Wxj7isTxfLlv%2F7XyF4cU8gIUYqRRIOriZJB7k5uGCuSMw5YYrILPOqnmKDZxneCHOyAcmlRHXqYvWAdfHDKLU7%2F9ZzI5%2BbD6NqNlbpUZ4qm8%2FT24WTyUu5dYbvyEfgXRUj%2BmVbHiwkTUqGbmv1yR7A4K1VqN1%2Fy82tPDBD0Te7GXQTqpPa3VHEp5bZC3sIvPLDiJ5Iw7OjEyQY6pgHaFKH8duSeLtHfbjs57spyytXLQnPsT4KBJS178MLlI7%2B9ER5H68FAZiZAn9ES6dGdoIYfFJzxOru%2BbK3iNUIIps38CHY24UPIhRmgGf8wFtAifFtXOv6lOrcih9vsesTLI0jjMpj%2B84bo1QuRmONipBR12WK50s6YbaQWn72Vqf5TgsIfg6pq42XuP5P%2FyzMgtyWAmETE22JWmsajlHREBflRDbnn&X-Amz-Signature=c6fde20d85d509b0dcc69c64b2ca7755ccabeda6bd515f9f641a3c7d8e60f904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

