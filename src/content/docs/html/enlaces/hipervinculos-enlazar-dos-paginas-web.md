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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCLQVRL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClO0nRKIGkeTE3Egu2Tndb8EJFw4uwdqJ3SsBPqQc1IgIgF0Q5OmynYW9kDv7uLMlEMIdQASidB%2FywpCL4M%2Fb9kBcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAzbMg6prKLJOq5s1ircA86aJPVKWlCcCfaGSJ3gQ0fdAu6zuDr8iHhAXuVxcwg02wCVhnkuHAqntczWc%2FnUuNwxC%2F4bL9qQFhWsROZ%2FqlfpcPuIT1h6xwR0oVOt4Z0%2BvQhaIzHfO9iqKygNpsoe%2F5SQFS0wLsWyOEg0320dvIa4zw%2FZY6rVKAkCdAzQSfaHfoUhpEG6ZQc7IQe%2B0EosRhNWh%2FpBXLwPOMVKTyrn14ZKpmIoQ%2BAEPBUg%2F97Tr7lPoYk6oBF6AisgNtn645YuGuBEhWTn5Hoq0JPGuAMA5CKNAznoU1lMriAZDKOqVNN5zatjIfPUbnDdp3VlVWlG46LAZt%2Fs%2FHDgKsiCbms8RraXHC1FV7MrU7eulbGxjz1kIs4oOblSCm3y08O946D2IExTkkd71WFR7yqiV0bg2XgSP%2BltDRIjEDqPjHfKirvru2FnA5%2Bp3kctcfY4qDA6el%2FP%2BORZescJvvYLAJ9Dl969%2Bo5%2BQSxXt9FFlQL5YnkP1arUrFPMOp8YIhT5cbst25K26e9CTe%2BpXsMPGyGhjapS5TrOXZ1l6KFuv%2BzcmDqpur7FxyJ3B%2FQ9I2CvF19jb2Ni%2Fqhk0TNjuHINI3SbvdOR%2Bh1lkPCstATT9KsxVs9OgLdGby2Pj1YynC15MNjmy8kGOqUBaHVpyevaGvjKlogPYBYXKFiwfrzlPy59%2BzhNrVbjl9ttJqEwi7EgYIGBmISu8itpyyGNMS9fhWRtR3XBlSfSOWBbL8cNA%2BETMB1bkHFlDL7fRNfZDt2uIZYVB1k8wOPVHI3jMCtlRQjLfuYZPVd2evWwhyDDgRsxdcAl0EGvm%2FauhUJWLIKk2j8edzrHLh4hGd5i5XA74MAPEQJUKGg%2BQCb1tC3x&X-Amz-Signature=5aeeb30c9c31797ad35726ac43100c5ae9f65cb5a2355031f183ebf731bddaf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

