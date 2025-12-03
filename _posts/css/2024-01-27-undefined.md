---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLZL53QB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCv5fDRWBF6iwD2%2BF2r63ukN9Q7qzuFKb%2B9%2FCMQB%2FkXFgIgCAJWm36tgp4GbcPuwkT8%2BTIFHjZXzyqwWovrPG9DD4Qq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDNK8QR3QfLWkxGsqJyrcA%2B%2FnhdGobDyFz4TyljPvz%2BAdXXx6r%2BjUFdIymPcA7ZJuvypWgqknq9FVpm6ylJSOkKy01UMb3pLBtoidzD2WJgvwD%2Bs6u%2FfSzfU6hjbdqtbjS9JgtFDOL%2FzNdXJrpD3Mj7O58tUnETmUUlFlSuKdBKZHmnGE9Ywh9UYkWnvMKRvGXeIx9gKX6nr71Qb8GBLSA%2FHj0Knn7TqTg3RtGo665hFWb7J3X62dLJLQjiYJTs1dYqsME42KAmBvU76EcGNXzomgdvVxYlJy4Y9vyMhzhzw3GP7%2FoP7vXja7HYtcwlioQwOBIeqggWvelfX4jFjIXs57lDYnPccwQBBDgFts2iNn2dMx6KLsBp358TgZurT3%2B6Wxn0HSi5ruV5pyLJpmjykUdWsTpIFYKqWOmoO28xakHKIBSf1kGBv3s4TVPNUuDbfrFfIGdB2jGiSAZE8CWH1UX%2BGUGddq0xfV9OUzXwLrOKxTYbBzCficn1rI6VvAqcZGjbino3CKzVdoQd3Fl3A20AtnaJoTg%2Fjhw0%2B%2FLgwBlpBmJoA5rt%2BzR0GS3EJQuHs35Bn5xbNL2yzWvMr4bQXXShzBJgf6GurCCvowVnx1BL3SqbGXxjkoYWHpvWJ0cTcQvan1fWjOiKseMKC6v8kGOqUB%2FkplT0dV9WLGsOYXabz0bSCU3vAa79ByvsQiE7cZY51uqAVq8%2FTsCvipm0n2huGdUuCAHAv3uD0bH8oCl5t%2BDAwZvY8HjZ97Z89NQrjwOgn6k6rGWwsa2suENYpMHp1fbqUlWaHpKRVWTX%2B0M4NTQXnq4sC%2FNdP8YeHvjE5w6MWNh01VQZ1I7lKlB7nXgGLvtFJwW8h1%2F6qCck1IV1lItnXzcXT%2B&X-Amz-Signature=4c854332dab6bfd3319cfbb58917ebfea0b098970cb31419a02122be1384c57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLZL53QB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCv5fDRWBF6iwD2%2BF2r63ukN9Q7qzuFKb%2B9%2FCMQB%2FkXFgIgCAJWm36tgp4GbcPuwkT8%2BTIFHjZXzyqwWovrPG9DD4Qq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDNK8QR3QfLWkxGsqJyrcA%2B%2FnhdGobDyFz4TyljPvz%2BAdXXx6r%2BjUFdIymPcA7ZJuvypWgqknq9FVpm6ylJSOkKy01UMb3pLBtoidzD2WJgvwD%2Bs6u%2FfSzfU6hjbdqtbjS9JgtFDOL%2FzNdXJrpD3Mj7O58tUnETmUUlFlSuKdBKZHmnGE9Ywh9UYkWnvMKRvGXeIx9gKX6nr71Qb8GBLSA%2FHj0Knn7TqTg3RtGo665hFWb7J3X62dLJLQjiYJTs1dYqsME42KAmBvU76EcGNXzomgdvVxYlJy4Y9vyMhzhzw3GP7%2FoP7vXja7HYtcwlioQwOBIeqggWvelfX4jFjIXs57lDYnPccwQBBDgFts2iNn2dMx6KLsBp358TgZurT3%2B6Wxn0HSi5ruV5pyLJpmjykUdWsTpIFYKqWOmoO28xakHKIBSf1kGBv3s4TVPNUuDbfrFfIGdB2jGiSAZE8CWH1UX%2BGUGddq0xfV9OUzXwLrOKxTYbBzCficn1rI6VvAqcZGjbino3CKzVdoQd3Fl3A20AtnaJoTg%2Fjhw0%2B%2FLgwBlpBmJoA5rt%2BzR0GS3EJQuHs35Bn5xbNL2yzWvMr4bQXXShzBJgf6GurCCvowVnx1BL3SqbGXxjkoYWHpvWJ0cTcQvan1fWjOiKseMKC6v8kGOqUB%2FkplT0dV9WLGsOYXabz0bSCU3vAa79ByvsQiE7cZY51uqAVq8%2FTsCvipm0n2huGdUuCAHAv3uD0bH8oCl5t%2BDAwZvY8HjZ97Z89NQrjwOgn6k6rGWwsa2suENYpMHp1fbqUlWaHpKRVWTX%2B0M4NTQXnq4sC%2FNdP8YeHvjE5w6MWNh01VQZ1I7lKlB7nXgGLvtFJwW8h1%2F6qCck1IV1lItnXzcXT%2B&X-Amz-Signature=0ec3b2d22776905340f34c0589a5637444fb84db5b3ccfcc23548ecc7bddbe27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

