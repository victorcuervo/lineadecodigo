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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3NZCEUB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7N3PU2kT2T7%2BScsZZ3vvkc86WjdxBAM61RUohu8hkgAiEA0K82KuDW4b7AFqnlqrpUUhlxe9fKaTaI7vYBIkBIhFYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMm1cC%2Ba4teQUAQmoyrcA2gy8iH6maYbq73iT5AAPFXxU4Xmqhv66qWat3wcJq2x8VDiAJieNQ9Z%2FsMA9VTMbjzvPg7n9vf7uZJXeyOHrd0EQ05TgaHMI37FJszaebirNvycc9V9twOnDEc0e1%2FXqekr1IPz7EqE6lsS2NNKVSkscdHxnZnvM0DckbR2tVWpKC0%2Fbfa3Ql2hcowPW76XiW34Oaga%2BHYtDoZgLHOzOYPzjyUsBhAFJGLjsz9FIp6as7D%2F31AWRW3wiGFP6LeTQJIxhf1RWeDB2njddmwFQqLjFa6zYNNytyAHB11qS4wThTx08tamlD8S1ROHkPABOjXWNTtfA7PsUjT%2FGTQ%2FSWyiunnGWjJmrIoc6QpPtuGq69FJnC2ctBRVzCK13I9sLXLvDv%2BaZLXB%2BfW%2B6ZNbHDVM%2FUJ3q0rUvqnaKAFycZIxBZVGAqtZe80eMdzx60d60TQJ%2FcWwGhloE2lur2sXYEioq11bMR2cRQlLmLmUgIUVAiKevAMKjQiN2evQdZpWBsm4g%2FcxVRoAOU8yyJg8VHYO01JHt8Q31s%2FB5tfkNFH%2FuwNJQE9WoXdE3LsYviHE281qb5bbMxl%2Bqjgp8dHnV5eRie45WdbBuj%2FULWDnIR5TlomnGjvpj6ZtTT%2BaMJCp18kGOqUBePGHr%2FoPOahnYSbHWv5KRNy9ekxu25QTfvtdQvBEJ1z%2BNwIUuXfI0qEgjsSiLLYyqqn63HrvZro9ztn5a4m8L4qsn0zOjRl6sJNCx8gEcYVFcHXUAVceHdYO0LzTwBocaxZ4iaT9Sip%2BuiaDPKWWvWOtNBqN5X%2BVNKlMS%2FcE64BabBSAoUfQQEP0b3AZNWvhZG2PA8rPzBNv4HIaSDzbZ0rBxrJq&X-Amz-Signature=753525707db156406162b463b600c59ae518ee2765999631dcaad53e3254fc95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

