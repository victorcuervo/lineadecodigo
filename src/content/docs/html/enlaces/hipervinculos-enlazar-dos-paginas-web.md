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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYMQDQ7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRmsgtzNodYuBXTLxNDcwCS5F2pfW1O%2Fi5DafRFQMJyQIgZYv8JPrW5IMBo%2BPRriEl9oVLEJcT43Cr3rJllvB4ocQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMQAFOwwu4epwcKJmSrcAxz8MdGH5rGm%2Fp2Jqx1ol%2Ba1AZFcEt8ZaFr5FluON0vaQVc0CFLVIkghS6f87CCLXEGgBculJJvXI6RvwDaDqkEkMpKe2kUIGEf3ws5lQ3fwp9Ddu34xR9sGEgAjmxGMI5hqEaYnDGXdOFKOAO7AIvWyMvBoTJ7yrIotSwvhNDinlM3cEFzz34V6Wcy6cc0L4g8%2FoLOSA4bXwFnjp3fCo4wFvlqT3UDwIZQnXApCKbTPJoV82XTHhS13QeXfyE60x16MDHtfNff0TcUeOCgqBnOHAOVHjFGGH9OCRQF0OmBDQm%2Fe%2FTZV%2BpOrlXoF8Eh1Z8jDGx%2Fcw2GUaZ0%2FQi79Z8JnwNDSBorkLYUUXnNNJNP98hv3tZyotkvma%2B%2FdSqxaU1aCMb86NV1O%2BQIQL1CMPCLY3r5y4MpvFUh09nhj1zC3KzFPNNDW%2FeVlVrjatH0AVeYOPE%2FGEQu1Rx1b3gX5Hok6gITC4vJdpwsER9vYBoVEWKR%2FJPaPx4tJDlZO0Va0U2%2Be5bowvuoFeNqXy8wIBMEo2vTCWTu%2FDwQh4yMdVl%2FqQtr%2BRLX56WCZhlvJN8GLVkv6gj3Em4IGwPJ4KZp%2FewvzkMB3LdkCfA6TZROqdzqwbS4gf2ZbDdz9ZXuNMKOm0MkGOqUBWaufHCZ6nANvCUNS8An40DE%2BgvYzLz2n8TFtvBR%2F249%2BZKW08yXyYgg8hwURTPKHZ3wOjwJo64NmctuN554PsrhU5QMMwb2XzXTEsurUK95zQBODXYL%2BJJ1zYvJZRgzcH0l7IIlJIW2SYvNQxfRm%2FkQK%2F0DVPOxfos5vRsKXGGq%2BFhBMLBXzD1lk2WZsgwozNcvib0fbR1dmNrE%2B74LjlNNu1Qcs&X-Amz-Signature=2a85696d47ed3448d38cb2d66924937a386929174adebeb746193645dd90f0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

