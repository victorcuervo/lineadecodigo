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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIWYCZWB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZkoIxQDHi2MBB9%2BYbCbgZ49MIe38uCbt69RtL60rexAiEA527ypDwptBgU7cCdLFjXSDc1AFkpUm2hFQFwhaI0K6wqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhxLjWVFb4smOog%2BircA11rCxMAK7YLB3P2ihqu%2F%2BpCdgxMXwEo5Xg44qvSxc5%2Fk%2Bu%2FwDbcy3wzzf%2F5EJMChNfYbx8copctc6dx3mdLPcptvLw8s2XEhGnHXweX1NchCszsOoxhjaCphwI%2BhsK0hx2r1YrAtJPCBCq1K%2BmOz2GIHzZ2XuNzDDeJLBBhwPIPrqMCHwfTt%2BVJyxo%2FvIwcWJ%2BmXWygmsscw6j1kbmtluQVHCNYHAwks7NzkmkvuxG676Ag0j7L25K%2FQuUbyVdF9p%2BIR5M078uoNj9ZBOPoNwEHaVvQzBU0CG%2FTPaNa%2F21qhyt0HIXhBjiICrt5v89YDM05MvIjw35Z3K2fwdkj1NYiASpXK9%2BBC4duZYvxv8DmSDSZFw0U%2FFmQhB9yDn5vwyfkFfARaeBfxMbVajjayo7%2BXrwXddyLdEaFDCDrEk569MsJzvjpnhBIy9P6u3bhgz1Rc4GvMpKQnyyKjzW90IT3QS53lWlikD3Beqg1Ip7SbSWc0JlfSNX7O36udXAM%2FXmW3fKsdjORryll0GpUcXGyuVD6QLl99C15ebou06oPYD8v1O4G%2F9XxsvGZmlXoTeoDx6Z6yDiRHUVrm1%2BTqotAd3onlm8yDNZ9DejzwpwIBF%2Fu8u3m539t%2FhgxMJCQ28kGOqUBdP2B7QYoVkwmf20X8dieGqOWvpbUH2dUhBHDr4xBgSeeW1jLsN7PKVDhsSRoG845lMg9UV0NpFJcQN8cwX4eNGBG5rV8X%2F3W4nmjGha1cCe0F0%2FqV1XXSvDbQP4ReXiRVRYSjbeRxLaNMD6BNsT6DOafs%2Fj8ON2dbMd2yKHGQwQIhCdBZgifxchYVilGXLZluyQKSMqaHkTUts%2F0Ugg4ngoXUkEi&X-Amz-Signature=eb241349b69c88f9afaea9cc6d9b3cc78d22c3b7a70502e2e9fd710019eaebbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

