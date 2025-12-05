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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCUBZTNZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7T7GzhhiCmhkkMjBo0BKmwEdWBbKL8R%2BEO2P%2BpqGpvgIhAJRteP02%2FMHYoyZ3is%2BsR2J%2BASPxXUaoBSloFAzFOjxBKv8DCGYQABoMNjM3NDIzMTgzODA1IgzPgRxo3j99adlk7OYq3AMee9DmM%2Bc6MKtmK1yv%2FKx7FEfzD27EOsRLV%2FlKXhBeDJA9ZZzUxxz98%2FjSQ%2F8%2FjKC44IEYXm0oYCPTewwMniJNZsPrtT2PPi7k1n6Zw9vtoYzBkeQCiyq0jeRl%2BsUmOTY3mrZ6vAeUGnGxp9DYT8RPl%2BdvrLs8NFvtbbX%2FUQzUIgkVbEGpnxgXW22BH6EFmkEggK85H8nkDfDSaI7Ur9ESCEYhSejntwt4K0l5zyab5V%2Bp57zCVsTS%2FtDKWIbq6dBXJbbVTgmfrCGwBMHSX9gYOkH9k8EedosiB7wqOskc5aI6YHtoupjfjuABMXw4Sj6pagkzGGPBySz5K4MWuAB3MmqFFxZR2jRzcZUMcNYsBCc7zPgpozbsSh32HKSOyhzIBQynfkOCC0eHMwuAKMmyX8soZ%2F%2B5JbIRJwTf%2FMWD6KvNvhTG2TgDbmYXRHwEo3J%2FtgR9LzBqeh5AxSmtoKGw8BIWxxm2%2FH6pp5h%2FzZgk%2ByVnROMWESrMnJOgGhZptux1lnGvv7ih2sV1jVd1gvl2Gvfr1VYNop7VlNdas0cAAnLevA8AQZVKvcanE4pWw7MJG6FOj7LuC5vprX4eRnO%2FTMaFEY8nZcUQcTi9HyWYoE8fZcZFm0a33D8d1zD5%2F8zJBjqkAZSHaVqwl7OKTu8HKuJYEz1CgQO1QZIBtlq2i96jxlfh6bk%2FhB3uVyQnz13PBw%2BHQsIwCNjLBUzw73dfotQ5SfrBr52ELSu2bJO8%2BsZb6SIgBtbkGNq0%2BT1C7%2B0q936v%2F5ojWl%2BdEpj7jYAnUWE2ynsZW90Mh7DDkWR52ayOkNGfMaK5PMU67LP%2FtWlRaTTU7Z%2BenN3yKQhYiS6maGNrnywP%2FIau&X-Amz-Signature=63567dbff31ea623af5d366a351ef2cbd3aa8fa9f579ec02a8f76827d3d03802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

