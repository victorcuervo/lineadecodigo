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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAW25MZH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLGimMVdfSZO3ZvbvfgwDatN%2BigMN5E9B9X2pUdmy4DgIhALhEIxcykCC3tnMs4yGLJigNhQbKXSyWWf48O37Hc16RKv8DCHUQABoMNjM3NDIzMTgzODA1Igx8IGYRZvteq9FkTtgq3AMrc02wgUZKZPFf9lSxqqDp5teX2WmYUZ%2Bk8UYAvHgEIybui%2B2Id0LeqXy4HUFE67ulRuH8GUUGMct7S9onH2DrX1h6ypKCMlobMgax8ceR9Uep8r3auVMWCgmSA83yuMTi3lGXUG%2F8sU7xOHf%2FTpKmFmJx7CnqVxdtwCmcbpJ9RDDEIFd4BTte0BxDKvT42X9%2BKWA20jRFEJQ%2FKOij%2BRyjGXyfI%2FEea64RuPZL8DEzdtqtfbDwfL3lKcL7MUt06X1b5z4%2F8M5Vqn1%2B79WBoe1D65V68vz2NrxPUzi3jiMx8Fm7sV6a81pgK2lVSRbLTWCgcZxiJ%2BUHIHAVkYABvuGudwKtakTh4xM4WozhdSgQRuxxfKsRLUBMBU%2BDmF%2Fq4XJnayncu%2FRWmh3rPuOIQ4A4Svu3AXuxvcKv1dVfhRE%2BcB04oKbBUrUGneRXG47ehKMeC%2BXtBrgWtHYnrBeeB%2BHnoRbVymi9u70nsgZvtHOccCVjeVhczYsULhZQtjqT%2BFYuzoll3cYY65pM99QotwW7895Z0dIPFjY2WOkLk8tqsodtZz2jfqxV%2Fvf2iRkDu1l1bJnZvt89RlX0F4GQ8NxCrJkXBUqb45Uj9vS5Q0bIDKsPqwjQ5nhj1VkoIzCCp9DJBjqkAbvP0r%2FNrj%2BKNQ6omwIVgxONxJ4wrCPvU%2BzyIofvDDp%2B0eistmWTTuvSXrXrrBM08qxoczLq0ZbWQX1kvP1rBbNMCnSg%2Fj9g8JhWaVzXSjJpCYSnatjigcGzIjmz%2FihIFrHxY5%2BKM2g6mVjmx1zGoFnSIhRxIVBsiLX4P22wmiv0pmP6mDnjo0FEEVP0HDixdp7btmWhTo1mSQttjeb5O55kBfYi&X-Amz-Signature=7c69b19d912d22399dd6d1a28df68e6ff036c44b0c177c550ca36884b82eaf54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

