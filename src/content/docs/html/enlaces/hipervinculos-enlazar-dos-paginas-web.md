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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQJJ2UT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCus3IYWKPu3NWc4jKwk5Y0Lc%2B4t4DOgRoir64mYVcYDAIgIX5mKkYFLW00C3XzbUPYrW30dsWC%2FH6Q024OYVT63poq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDByOzzyRRUvncIuYnircA3J3JrOiXFI5RoyQJ5haFw8TUBPKlDaIzpfb4MF4dJJgOmY%2FsxD%2BSVgdUdTvPjKsxnxkx1pKUgOfVlZmBIb9DpwscrKoGStda56HOJoAzpLgo9oeeBIZLgF43kyaW%2FvVP40%2FrhzLXRW6CYfqBAXnYywNqwwU49iJOKTj3ZnBLWXjKFkI%2BBGjr9VQDDU5EgSxMOczP%2FW7rvSC5bbJSgP%2B84Zcrdj7i51TyoIn8ObCBrzGkK9uHzgWBo%2B3S4F4IDp7Ro4ReJ39SuWwpj6UTp0wQ03MsadzDa2D5hAwQ7diIvEDERHRWVGAsdX4Ctu6Q98BUopijtjR3DSYUc0iBQtWSWQ4DmcGnUnKJAuCohOO0MqOLstsWl7kAgFw9khHgMD%2FKvsGp7r69A1ly%2BfDy40t8658DMReP4YzkXOdYTAExz4InxWqLARbiWF1cV8Trz4KHWqClWiTvUbjC%2FAnjs8lvFtooV9jIqjNq%2FMxrVadC2yMtjFww5He4qRmeJA3F2YDv1CCeVavnmBUs1prrSUs4FnNuBTncwHk%2B1rpdQEZyAamc1OrwpUWwn1tsuGiL6ViLthlf%2BQnsMEmX2gXM21YFZ4RgWTucn2dpSyIIizdA6D0EyBuT%2BFPRJmjaMEuMIu8z8kGOqUBS0mQ5W1T4NpIR1LLT2pXoyGZA%2B3cG1VKOq5ofximPzsUf1DQveoYFjz%2F5QgD%2BBfe8QBbXcrHXJt0lRP1NFyHw16n9vmv%2F%2F1LALpuLex6Gc3scxSoN1Hdz5NlY40iifgGC%2BzWVzXymjKJ3E7KIJOzJT0u3tTNPKYdEXHNAbRrUIkraoK7dGVCN4mRbQsFytr0SjV6X92%2BUQhzB1uhl5xGP7pKvEcP&X-Amz-Signature=598414f2ed46ea79bb6922b0b7ad83783093763a13ec19a3a5c85aafdbd994fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

