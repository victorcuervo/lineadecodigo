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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3FQIAC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbBSFDGsCLtxgk%2B%2BHkxfVBumuwqGo3w7kyVE6VV2GD5AiATeyCLcVkuvSDr9KjqgiIFA9C5Nmg%2FKTv9%2FtM%2BD%2F8dvCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0h1OIHGe%2BuXGbhT%2FKtwDXKgNGNt%2FsqUaQjLExa%2BRdXd6wQdjd%2BkgdfVMfYWaYnx%2FuRruzIGz8g33bdsNdKYOo5Faf%2BOZc2k4m9kFFy5qxp2KFrce3FoaV2V1CsIFH%2FElth1cyBhpXl4reqX4um%2Bu3MCXV7f0oAGZpuoZ9yrc9GhLkYDh3SwDdbNQstALkE6lvvB%2BBVvbw7w9P3oDF9CyZM2rko7RQS%2Bb9itEvZWQnm9BOOdcg0V6oBDCDB%2BzR4FgYj2lauoNki9ZKE1A9mRzEK6hbZTcYZ28MxtHwJNzK%2F1hY0yJat8lZloCOK85E12uVCSpFM59x2dzSPwk4kac6uG1SjqK%2FR5cRGlBTDNN5PELuZnnE9RatOq7GEkQDkuDJK6oeyPNLxZstpB351Un6IeKI73VlSguwVLbk9soWEqXMSElkN3R2Wiu7LTcWyt1%2FOzCd6kNw2PnovJ%2FHg2C5T4HQbi7UE5ozNNuIQQy9nqU537Oz7neS%2B0Rsdk3O5zQCyLuOPEj0vS8PeyFQ6fhM6QjTVeG8JpReT%2B7Br9aFlMTLuwWUkhm6dgedecWbAecONt%2FdbVeQVDcaMc0uUUoRWnA9FLA%2FpMlZD6c58ED7dKvMOxBQP%2B9AZXUUYHaRbDKcf55VXgLZN5ToNIwr4ffyQY6pgHk9haju8MHuP9mI2YkgDb6okwNyPAo2nH724DRkFq12JqcCx3OcATVhDCJyE2N27FVKddPma%2FHzlMfHH7Ocn4dZ9dHFvWzxetHH0EAWvYVL8leyzqqvAUXhrjN%2F0VvtMFgXw9VAvybRof7%2FX0Is6ARxMTUdgIG%2FWqKJgcN1Y%2BCsN6Wq2v%2BPotQohFcoYKJOtt4zVjW2re0IahhMmjf%2Ffyz%2FvREkBrm&X-Amz-Signature=5c0135801b290a3953a4d3657bfa7f0b70362d7d956bd74df122b8a0b293977b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

