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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW7JEJWA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDel7nFuXUxv4DqMPJhCvBTFAwVs7hhHuVky3r5zk%2B13gIgCVwg7Z%2B1YsHOHZFt7IsPIQSmqWuVM6%2FJGTRroIBLvOMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDF8e3h6KAIM9sUL9OCrcA0RFM%2BW1U0j1jAUpN6CEQaFRbWyEHBkmi8JcdMKvSukyrNtVfRf3bk5GCvycPJ1iQeIQ0tGNsEOTBAmtsS9YmJ8eh8gAO4K5Kfpj8xsjRje0kAK55tuPUItnfA35twTqcmdH44VjYPPPXGZvqTz%2FiC6GB8gAjw2%2F14m1BEJiGQXMOwii1as%2FoS43Q3LGp9nmAZLObYS3N0yjXzrgANK5PdQVXnQp%2BTjeDODo%2FobsfCvubY5Ea60Gs08Rn4F4P0awG7ktRXnLXMflTkeRR9POtqgNRaAipW1jZNW1P1K5B1hLM5HZ6mYIBrxGi6YuEOLjNNgn3xYotH%2BvyMsvxnBVOzRa9%2BO5T%2FIWAFUsMgsyxNtPCbL2WmNmSzgkM2TTinqU19cV57IHRWndvE9Rvb%2B81rtD8Crt1VM0rQZIyE5EFmwbbwpfFlRxpo%2FqJE2UWExIFy5l4QYzLCP3D837qfRiP9wsddyZtf3lB9hAB525dRStKN5BKhPjm5EqrqmULqlxGvZ3l7jf7NuJiPyzSMYDMrOhBH%2BWIG8wTQ7k7nklrJNVqjNmTn8igdLdh2xaK3QXy4ixkujVzJphZvWStCihIegmYLswBU1uZGBh9%2FEzB3ARwd6uJIPi15Z%2B3kzfMKKixskGOqUBQFDMEuqiiL%2BA%2BXfte5ZMkrU8Jw2OVD%2F%2BJx6fzSEgAiP16qwEMdtnDkREEkbyW2pRQAm7nHVNL7uI6Fz6qozuRdAXZ%2BTAX2k8ZE0gRPAIcND%2FzN%2BZYYFiOSXFSEtfjVwQPClUasfXvn4K2EECT9vXf%2BpKxJgpNzJH1qrNTf0ssV9Mvx7aMMflLrUEwkwqvZhv%2BQEeRmprEiVZV%2F9n086y4XXgml94&X-Amz-Signature=4b33a2ee1f227ca19396984c220985970a34c5313d4e2789c037617072b92206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

