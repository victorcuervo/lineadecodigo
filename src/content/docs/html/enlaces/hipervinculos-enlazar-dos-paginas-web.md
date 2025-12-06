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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN6VTBM3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJVf%2F36ZwOcQdtDJoG2wzEr1iZXB8n3cUqZb6Q2GMSsAiEAwTlabh1rWe6HmH0H4VTwqr992kMin6EyCjcsu7Ekuroq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIAqU3qAZ4b%2FX3UTWCrcA9Szao8hlvPvb96AylbeSBdu60DB6E5VBJYI8%2B9DewxaID88t60Bzr1ASmOKdP3aLKab79BlfUK9tU9k4CqefKxpekN25R1ekYrHWDYcIDdLYP62d%2BtuegZYya7ySdPwjRUxdmQmRPF%2FukcExerRHX6fhns37vFdS2%2BiMriz4FgHNMHAtCiq2aH%2BvrpqX4G5t7cUcgHEPEijycvCKC0hx1K3f9wBzwhTC%2FKdAc2z%2FputrHvpCAy3frtyMboH%2BPcatW9crgD9qZN1jbGnqgjoRGl%2FK9XJt5VbU9pU2XSgvRzTZWtXZRKEQK08Cr7s8BnbtxGcmByAO%2B5OgTDOLw1CKLICy%2Bab7NjmkLg%2FoL2FKhuewsC92sm6EX4FM3HLIWcHz5uzt18ARgRfdOAy%2BcOxYQh5Y5y8pRuDagnGDs7Z4U2jiuHl6gyLmqPgKIl2el26Kxounp8WK2wwAlrCePdfAJOYi%2FpVzdx9h6oCXIHMTcUV%2B9Ug81IcumgKMPgy93Mx8gG9gzWpJ5ksTx2rXwM%2BtmTPS2YX9dsZCSt7Sm%2BhIJItx1vd%2BwNr76zFYc%2BdjmbOGuPVcxcQ6WTpTuQoy6wIK2HDLmSZuuDfQwQtitukX5L52bg9OLX5QgANgdzHMNPsz8kGOqUB6eJdETpYCm7kB4u2G8z0THaTsydXIsCycbqbySfqoK%2FlJbClXCv%2BNWGXHWTEk9yMwPQUrf8V9Vai4hjPjeejAGw4kiPoq5PIlF%2FGvf3AZEPEz0CEZ3RVuJE%2Bxw9QYXMCXxXdLhBIVThZwILfl4f5lV2djlyAPxhPSM9CrMUgm80OEvhr5A8xecO%2BfWvXc1IV9QoctUd71UIXeFNmuVLEi4HpINCJ&X-Amz-Signature=cd67fb0e8728e83e825dd95d9e6f9d080102496404d4b0cab1fbaf2f6397dcc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

