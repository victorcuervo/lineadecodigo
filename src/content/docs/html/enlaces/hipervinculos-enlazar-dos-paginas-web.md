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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y64OZAB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJM31eS1JL0n3QdrdyrWrR3wQch3wDJ%2Bug4RRA9MF3eQIhAPBMw0ur91C33hnBnm%2FoFqwm6hNXP4B%2BUZ4vbCTchzhTKv8DCGAQABoMNjM3NDIzMTgzODA1IgxVY65jXUOfofjsxAIq3AOWjon4TUWRQSkSc8IVJhzKqJppf3fjmb7n0Dk4HOJwHfvujvVy0kxv9AAL4%2FotH3eD4xubYCoLJVtMvTf2uE%2B9ir8hsvZOVfyR9RSSbmcN9mKz1ebiZ3YgoBxgJ0ThGxRiUzEMvEUBC3p%2Fi3zxn57fqbFkdsvSdFBg4kJnlXk%2B8kHe6IqgN0VBHNYgtHhPzz5fwhL%2FqQN3ZnZjun7aQrhpQuqW5GD44QgRh8e2njgPrpdhix3C11X9iRhOlwwcSyLCFMC6rnxml5oNDiTIGM7W95TkL0jvA28mVMJgtvxijx2fpK%2BWhWlmarm2TLRv4uhkGGviVUKjX0WtfgjoZvzsRhhhQ%2F8iZsQTKXDryl2ZzPQSfmJC00EGxK4aG3wVq9EsDLX2fJ5%2Ffb8NaYgnR%2FjwNTbbqr%2BKyTa2sekFQX2j2RKjFwuTOsQ%2B0rGWby4Es0tfc1QV3IkT%2BndDaHD91IhA6phuhZ2WUjECkovihoFXk2cJxFYS7TKZuisBFo1DHBkxZnTZx9LzG%2B1K9VDl7DRdbmPYX01PwcRCgmiAIVeQrD2TysN59EuqLk9MtKKa55JP4qNNuglBYOFIB8C1ho11fLr8kUrIKnvMjemd%2BwCYjMOUjUSR8EU9afCRrDCO8cvJBjqkATefoVMuglWcaYm6J7Ny6iLXeaqU1JfT4Wuh2zKA2AR4Adc2NZvo6ewYAuRIWg8Uods%2FzxUGKc6EvwmGnLRMN1epD22S2YtYhKlz5Y6Bmw6j3s0ND5Gx817rzc4my%2FJ2gMflB2RqKYYpokPeQvRTnAvDSB85T%2Ff3CX4veJ6Gzt3f4BoQENjrYsjpJD%2BEQHG6G95w3Ya0K0TvypeS8N0R8fqixww6&X-Amz-Signature=e096aebf422f61d741127ffb9c83eaa35a08370f91e3ce6d4f5695dc977f44b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

