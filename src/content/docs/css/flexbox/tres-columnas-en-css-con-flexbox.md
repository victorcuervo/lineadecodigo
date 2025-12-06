---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKQKEFY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmOLYN0cZUhUtRr147%2Fqrm5yXxCPZPjYyGitafLF2wbAiAP5YP1%2F5ZW5TR0GeMm8DURbfxchCmqwo6Lb2lATxEuhyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWEExisvdCyPtgcsWKtwDVNNMOPuU1h1KR3s1Rhy%2FWiBT6dQCC19yNsjbeTkoVft1y4hj4KmH3OsaHizubAnIU3yudGI7XRCXCNqFOc3BvdeRWvzeQiOCJGo6FWPon%2BIO4ra5I%2FZtMCrE8A7vIUpUvgh6VW7YDkz7Naiy%2B6YB9vUY2LXNGklwjnqhWNNEojBly5wv%2FGkCMQVpu%2BW2JikuZp%2BnFlPiqqtMgIYxbQknfYrQ1cFLP94ByTHMWLPTNp92%2B7Z3NYOgmlL2StbfWEVHPQQt8ZDto11yLwODqHiFpYq8Qgh9lGjDQw%2FKHe%2B29NNJxyT8snD4i0s77Gbtw%2FHuyBS1nidm3jhtGHG8Ny7nOYONuc%2B7All51csmfu8ZwwEloh2GfT%2Fziw8jowovcDcDJbq0JuNZgpi2LV3wS3vHlbbh9qZlV901L46%2BE5qBPjxITFhT1mW9YT4yjs%2B%2FTbwLElWUN1a%2FcndkgQQARZ8i%2Fr8lIJU4y%2BuwRYKaChYKTddAPQNZaDnICilq66pMrlhWpUWDWbbPPCgYkiQdTHQYT2%2FxnVcnUGiVyvu7kjhdM8pkxobbg%2F6OUgQ5YlG%2BFhi1fpNAIoneNu7OiUerB0WWJcwCvZKSMNOFKkuzw4M1scwuNG8Yd9GjShmqUfMw9p7PyQY6pgF7v16DMeDN0Tu4H6gzIqIljlP2gYqYEP7X9pUtaktqfDbi%2BR716OAkpqX12WN5LyT6pjq2pTMJTqnE%2F1cC1gzWLD8hYUTJjssT9PZAbb%2FdyvSJ15CKYgrBWX%2FZ4G6VrUzGur4yz%2FKgbJkL4%2FT%2BbU%2F%2FafL08h1jpStELgR9V8H02bRh10t84oH%2FUv3PSNN7oPrEJt%2BRub2YsGhs6vEjFHt7YaAsxp%2F%2B&X-Amz-Signature=53f5d43fdba155a4ee112e236895857091a237a9576a6762ae91c764fb1fadc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKQKEFY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmOLYN0cZUhUtRr147%2Fqrm5yXxCPZPjYyGitafLF2wbAiAP5YP1%2F5ZW5TR0GeMm8DURbfxchCmqwo6Lb2lATxEuhyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMWEExisvdCyPtgcsWKtwDVNNMOPuU1h1KR3s1Rhy%2FWiBT6dQCC19yNsjbeTkoVft1y4hj4KmH3OsaHizubAnIU3yudGI7XRCXCNqFOc3BvdeRWvzeQiOCJGo6FWPon%2BIO4ra5I%2FZtMCrE8A7vIUpUvgh6VW7YDkz7Naiy%2B6YB9vUY2LXNGklwjnqhWNNEojBly5wv%2FGkCMQVpu%2BW2JikuZp%2BnFlPiqqtMgIYxbQknfYrQ1cFLP94ByTHMWLPTNp92%2B7Z3NYOgmlL2StbfWEVHPQQt8ZDto11yLwODqHiFpYq8Qgh9lGjDQw%2FKHe%2B29NNJxyT8snD4i0s77Gbtw%2FHuyBS1nidm3jhtGHG8Ny7nOYONuc%2B7All51csmfu8ZwwEloh2GfT%2Fziw8jowovcDcDJbq0JuNZgpi2LV3wS3vHlbbh9qZlV901L46%2BE5qBPjxITFhT1mW9YT4yjs%2B%2FTbwLElWUN1a%2FcndkgQQARZ8i%2Fr8lIJU4y%2BuwRYKaChYKTddAPQNZaDnICilq66pMrlhWpUWDWbbPPCgYkiQdTHQYT2%2FxnVcnUGiVyvu7kjhdM8pkxobbg%2F6OUgQ5YlG%2BFhi1fpNAIoneNu7OiUerB0WWJcwCvZKSMNOFKkuzw4M1scwuNG8Yd9GjShmqUfMw9p7PyQY6pgF7v16DMeDN0Tu4H6gzIqIljlP2gYqYEP7X9pUtaktqfDbi%2BR716OAkpqX12WN5LyT6pjq2pTMJTqnE%2F1cC1gzWLD8hYUTJjssT9PZAbb%2FdyvSJ15CKYgrBWX%2FZ4G6VrUzGur4yz%2FKgbJkL4%2FT%2BbU%2F%2FafL08h1jpStELgR9V8H02bRh10t84oH%2FUv3PSNN7oPrEJt%2BRub2YsGhs6vEjFHt7YaAsxp%2F%2B&X-Amz-Signature=1bfd8c46e12f7c294b9e06a06556a3df3640520173b0369e4a8e9dd214eb2674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

