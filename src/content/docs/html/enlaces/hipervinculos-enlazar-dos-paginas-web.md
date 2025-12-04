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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUORJPG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBRxfM7u5yr%2FAwH7Fc0HFNCHxqS1UVgOe3yoUeJgEQWOAiEAmn6X13ujFm2BI9NL3UE8%2FCo3ohLvsCd6Q88pIL1BJvsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDP2JnkiXhABCCxgt7yrcAzIV%2BtW634Cz%2FWQAGPuzK%2FcKK61T7azuib2npvvt%2FuWGGJWCiWD6ntPshelbrdfO88sbfwHUJPuM97Jd5hRDhUai%2F16xJyFY6enNefWhykfRk0UjiDKeQmPbvc9Y4xoxCz6m%2BXTgZTOGZEQf0pzTBUJBgJjYcJh%2FKEC5W%2FiQ6KJIVb9tAcbtTf9P%2F4mtBJD7omlFsbr%2Ftgu%2BWOv0oZ0oMokQU1msGNHhXqj1rierTANew4yWF4xVc8FYyQsSy5Aoqlp38jbzh80NCG2wcNwDWHNO6pz2f%2Bc%2BWbrzLp153ocLFNBCzxFWnh0%2BjaGBPSLFjUdOh5kzQzaAQjY1PAH6LTYOJHJH1wLQTaFz5fZbux5yYrly31g3ifUkNgd%2BNbz65lqFgcKVZFS0x2pi35vB1h0nSeLgLz0Tp1x73h3Z0%2Fa6VFHi3ynRjDxPi%2BbciGfhgyi2RT4khWTlys%2Fct0ZEWwitJxZsVsYvEn849oXUoTGicVcmQccI78FJB6F27KbdOk9kpzcj%2B%2BKME8bLewIfzcns%2Fv1tcHNdTXXKPT4G8tY3QrXR9uv2g3AY%2FftCxbBVdjdWztC3u4XvtO80FjRaiz3ncL5gjwRUe0%2FeHw7GThqWfelmQgCh11j9s9SAMMzzw8kGOqUBinzUXrMqLrrByqBvCPffj9HcX8wxpVHMQDfdrwLjdFBX0Ve1cavW%2BUvHlo0ToPfE%2BXWki8w30Temo2GP7jwOErZgS9%2F2%2BwrGTZqr2dvE09vCEOl7kbDDmxkf1rML9iJwWHVXDfKe7ezyrSgh84mfddeC2V%2FfBtgorI8vrvALUFK87npZKFO7INier4amsoLi%2BrZ7SWx4Z2%2FmyhHTP%2FGF%2Bi7f0%2FXT&X-Amz-Signature=732caa766222469ab7911d1e04cb5bd77dfcdd3b4fa33856d84aeeac0091dcd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

