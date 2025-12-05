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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEH6UWMQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDpwvkMGvoTlLG2XQarmGqPQlRqLbcLEcd%2F6nTPyMaPAiBTQ4MZQBVDiGCU2%2F0JQSMLjP3rWsbrnPP0BaNfmpSyoir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMGu7mUF3C%2BDNWwKqZKtwDX9QJAjixQkjRtgJm6aWzlz0vlFkEmj2Rj%2FmegyiJYCvR0FgqMWZbZrq55BUDKH4XqQh4LU%2FaryepdrOVrHx721RRDTu83gmbuhYaD9eXMJZ%2BMQ70D2M7hmj4qhjXd59w%2FCP3DuXiB3VwWtP%2FRrYwZSXinXOLO3UfovyPR3QYCNy9QIIdS8oZdhPGhj88WysNcfZn3m1NZdG4Pv4Fidf8UJZVbSM4nfwL%2FaQkkcX%2F7spUk7Sr5%2BHJWjCm3Spi8KZnR1danZkPkn7xNWZ3OdMUgZN471mHTOd8oq2rmq8337%2FL%2ByI54j8dSCwOE5uFU9FZyc2jBEPNA%2Fh7nc06RSbrUGgkd6%2BuXEpaaHypJKARYoGxSCPI%2BDvH%2BRMV9TqY827c3aPqwvsUt1Qo5k1R9V6Jig9FzasMPQCs2b8JV%2FbBJKKAV5Gw8vRZYX8DkgN0b%2B4Mv7P3OZZYJlns9bHgk2fXjbQmENbVCXIp3hG4Vfn6MiPTPvbmjYiC50EztKBsPGm145WeglRA5u1nexn599ocZY7NBgG0kgyk5njLKQlR7dBVV1XPGVuzBmPKhZXWBn%2FA6C5LxHxyOUjWji5V3gEUTuU8lowjjijTmMKTOhS1Ff3DJhN3q3E9jG98K3Yw7ozIyQY6pgE4EG%2F%2BTmq%2FqvyPfusbWgAGU8%2BK8HbobDINU%2Bi4CDgDK%2F7ggS0ye5PLAdHj6hNnK3XTdPGvgwyWG5r9bVqDjQh7%2BLObTgw7eQkItOhHlO8ERxpCMDAxJnghkrFwLjBUEnADXH7Gfj%2BR4p9fbJx6ISjMy8tgIJLS9bPJtdvASPyJOm%2FliBhuTYeQ%2BAvY%2FSTPPKXznt1sFWE7JLYES46%2FmHD3Tbwk9nX2&X-Amz-Signature=83062e4b897f617c369dfe92deddebcc065bb402ced6fc6d1187ba98ee631689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

