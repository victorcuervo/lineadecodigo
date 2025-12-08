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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TJERQRB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQkWsUx5KbtDS46xRIVi7lyTLChItr8f2RiiDV4FStOQIgSHfw%2Fk6lYse9DurpHXyRmJu2QHbTY3Xqzpn9XHUmYD8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPD4dSj24%2FQjOPh0mCrcAysKJjrPmImRkgmmYSSJUwgPtNuIk09qX6qY%2Fmd7%2BF2bCdL6nib0SQOgYaTwad6B%2Fw%2BpFAzbq56Pjzm5NGWva%2FGLeiWnayy9mopzZvtLXhfr3h%2FWVIwyFKLkFt%2F1tcz3sSLFzVnztAjaQcf2CxmpFTZ63nc6vTenYq%2B3lla53P5gRvggZ1M3H24wuIH5WDsFhXAfaSki%2BtAZ7OzqQ%2B2ICmtLbaHL89PqjhJVE%2BG8DabF64pMAfb1aZomq6DiFLSQ6OGzw1B3MFm0zbQ3e1QYZdoWMV1P4IAgh5BM6RHCJHO8XM8IFgsRc3HvD2%2FX9n6YN68fByMJilTchGh%2FoeJNyAT3%2BaMkOZA4j4CZnkEVc9cRxdG1OspJLNvKiuGipGOZIcnWnNAAWxT4iQ8kaA%2FA%2Fmey5cVrLMx2r8%2FNkZgSV6ZzZWmWxr1AXxLXpgSad%2BWNTshtRD1aITdjkUK8Y4M%2B48DQ4LXFAI%2FhdR4y8hc8rJe1pICnReo6Og20OZbo9jqcKJ7ayWWfyp35D%2BHoOLmWdkOwDk%2Bnt9Bc5a3qv8Pl38c7nDsskhb8ZhCrJVdYL0AHnTEG07DHcK%2FWc6uN7D1aDUq3VvifUXEl8%2FjjEyaIHFNaJDalMDlG%2BqeMUgzDMLHt2ckGOqUBbBSkRm%2BTRm5G%2FHVZvVb17Qc6zhdjQtobrf5uG1z5CvdWr%2FsG%2BP9Jhw8eYMjcsjJVMOg65TfMnf4OXAOrmCHZIAU7OIYRx6701VrS%2B1YgIHPm10Fzr1HmzH0X9OXMGXlaSjuj9o66pT9JtAd3SUTxUWDviAytaZdqCu9AUvNgDU5qHEo%2F%2BPsW6ul0munYzqej%2BKOmVxfrjP3EEZC49To6J3xGAouV&X-Amz-Signature=f80ebf3278d6ecea455df9ffeba7643702cfff573a3da1e546a31d7dccd4b5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

