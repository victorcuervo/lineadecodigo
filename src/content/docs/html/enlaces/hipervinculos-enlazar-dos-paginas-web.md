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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6QIAJMX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHVie41IOF5NK3XvhXcaEcFhD98wGPdmufzXEwFFZ7SXAiAShXkq5kZypkgqRehwwLdizcCYApyRjSifiBIkvV6b2yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMihUQgiE9PvRn4dKEKtwDcuG9ZogID%2FdFil6Lm0tBoB47n%2BeBqS4VMUXBj3DsoXLfNcVEldSqAHA%2Ff4UVmrGJ3aKaXk%2F2RtLbs51xSTgigiPIXrWICfWIbwasQfHC1HcMSbn%2FkKy0FFSP1ttaLRhDjIzg%2FuUHD%2Bw%2F2m8Hm7GjmFKsRxtq%2FoBYXLrSclpyIhScCXc9NzzuG1WXNOZPPgcRItcPNuq%2FXrM%2Fz7nDzmBsjdUjj1VTIpGH%2F8sKGU2gEJxvw43R%2FPY6lj9MmeGwzUnK5M9zTsbIZ%2FZALxxIdkUg3eHhTOeBVLqofLLMRYiP1ZbwOa%2BJ0BqscMWBmubn1zCMXu6d7EO7ojXfS1sDVYLFuYoMGnbpbbvAu8Dj%2FWjgdgUCARrlzC6TX0JncXRi8yufmpCt6GmvnkZ%2FLDkw%2FxEL2j%2FpCenvih31KOH%2FO%2FWo5FL5Q6EYVfTxbTrvI4k3xZ5pl6HdjGM4E1DgOfbyCeIgAPGgF0%2Fo1yGYmJR%2BRi2rr5RLVJOtrQroeC2FK9P2MpxPrydsqZUhtxV5GETEFMC6CJoegYx%2BcDl0mlCVDQZOOy4QnneoJGadLKVEZ1YBjoJriHbtAANt84XkD9WvLzyo5u6MBiKuvWncBxohb%2Fwt1cy2GEH7riD%2F4UX11aww7dPDyQY6pgERI09UT8FcZZtQij7Llu5ok1KcQAHDs8Na7RaY8ufMMsgNAF9MTe5JMHoLvw%2BBAuyLbLpcOpzIOcv6Qv2NOhnf7%2FqDGCCWkXGCLWRUdN2Fm5LUtfR8fv95NhSOeTXSVNe106TPpLlz4IR9%2Bydc%2BjQeuIfFuBAu03Fj5J%2BDp8PsW3UwWwXSxprF5Ih0BM9xvJxr4U%2F4en%2FhWMYzXULvOwSuSZN%2FCofI&X-Amz-Signature=076d42c4b31d1b2a4a8f0e87494b80b2002506f6bba12fa7aa8de26adeaaf280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

