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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ZYHWIV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICB9Xil9IaDoGB7aSSXjG0M6ziZ0JCqpXQ2avj%2BITFWPAiEAzzvDTAy9mcz1i9BZQp9HRoBexD25R3aLAPbyvC%2FLLYIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFb0TV3Fjrex5vJWzCrcAzcXpgK2Q3TikA5aLMlFdonSmTkoaoU%2FSVpcs5lqVFeL7V31UOA6loUp%2FM%2FUWcCfRmwqNdOLveA52vww904h1IrbjNYZAxvZ4zzU1EiqRLw1no%2FW1XJS0uW3OdOZnbIcWrD9xMbrkUrqpvyVxid5kBB1x%2FWrfmVue9jI2zIx30T6TRuTlhS4xS3f1tLZwNSj0b%2BzwKB71duqIuNaP%2FqSjHdiuvW3qNuG8WQmAAlrzB31GUgo0dYM8%2F%2FSogaM1hDX7UcR%2F1%2BAXUDeT8WxFxbssq6Fumy0OijMg179v%2FcnygWgOVQf%2BQn72oYzo3R8rHpbYuGC8gWzvIPnphv5bkJ4ryOXbTEZQZKQmzLUnrmqj58bP3c3TqobE8YaRHVqhTmn%2BD8MmN0sKqWPbI%2FMMv6nFM1trJOGV1yCUcmNmSwT8Z5EljiLAAv9hbitRIz6OqiuV9Ll7n0PY4pLjKQBynfhh5MytnfUPIz1beshXO%2FdKvFF616Hmbv1OQTPwsznLRCO2y8t6GXMoxzN7CKxxm5pTZKlfdIFVBAV64NdngmJ9S4U%2FjgsOIhaTQoGkgbufH2VRvlw%2FcO2EKhdGSKqA7cw3XJPYJvFHUOF%2FqlmPtlFouphhRFNnoT8Uy%2FxHFvNMLTrz8kGOqUBDhTqUZ5NPV4SfNusRRHtwXbAzPH7cxOxJLswm%2FGv%2BEZRj3HbO3Hcg4kzw0lV2flUpD15M7RXTS89mV%2BOx16dkrqvdFMuEMf%2BaRdVu3B8zZ4moWmN%2FU6Uf5sWGF9jlJ3Bf0fFUa8d0sJWHMxNw7eRxO5IkRhGvbqXzhNeJA4ndB2msYBP3vSC9AzIbX62p5wHAbmN%2BM1Icue1yjWSbivmRSUNckk8&X-Amz-Signature=af02b700fc4b238ab5763ec75ede3aa9ae2c1f27ad185e0df305c8a1587ca04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

