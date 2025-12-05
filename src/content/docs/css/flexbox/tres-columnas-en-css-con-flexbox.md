---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEUYJYVZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9A9MESp139VbyiwooYaCIOk0IsE8%2BmsfmcqW5ZI0f7AiAiJjeNE9wViZRs7trqPDqGDdRs9ruo%2B1%2BnXdTWURjiYir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMbMDdzdbGcB0Zlqe2KtwD%2BPXtJDZ0SbIqfzQarEdzbyiqYMHC7sSz1jMjBZoJtEQ7FmYIUlYuuSvqVb9NYHRyEZ%2Be6G1t29qGzV4cJm11vlWvxArJq60jj8E455HxerphnrlbYhNdF3GCFHKWOJHvbJP7uH2vhPESXu9SDAvLhQNKQbQpct6fkQad48po4AHL%2BzCv5AIkiKIRg9V5qis6pLKVril6RD%2FoUJJwQpUr82VdecV2jv%2BLiR%2BvzXRWoQmmnWoel0qPnDz2U69IRm8QVjE1wkviY6ZXOufRVR41dkOTYloJh39SJDMPii6nvgr95EEw18FqJHaoYxfVDG%2FNZVUDjqm9tCidXb8VEGnv5UlITHAKFByK7dCCRG7uvpUxSGCgw2Hppl0udsz92y4N3TAyBM1rTcM6ArvskazZLQGOD%2B2aXRMy4wiPemcVzh3S2fUJ2hulBGoWUXyTSHVeW4PWF9ATTxMoeoS7Qz%2FFYgu50C5ngf%2Fgz8LyCe3afBl8JQEBMjBY7yoSAHEMWCzScZgREO4fWfTKvInvMFo4lMAHg%2F3%2BEZ20rpYxRk%2F6fx3Ub41G0mYLprQMBJ1FUpjtw%2FnJ8wgS6rsa4gml%2F6K85HRyVAOpCoDTRMQ%2Bt6F467NQjxnXpXPBNsWcDHcwnozIyQY6pgH7a%2FUCU19UP%2Bb%2BA%2F2Jhnw1tb7AfFBdFpsbchKQwJZFNXV37cLXPJbU9%2Bz3aSe%2FrImuN%2BxfmYbQ0MaPFBK03lZE4300Jj9rUziFjCn4y1TGHtForrCUly%2BMAIIC7PI3RHH2nGcpuE69l%2Fm3ClR1bJeGVfMfeS5vO%2FaLvWY2jmYqJ1ef7Moe3i1%2BYpdDfHni93JmdSKhWLMVhu1dFmT0QzKpPyti1Q5Y&X-Amz-Signature=99aad63abe8637ea662d3070adf6e7b623ed98475bed92a2ad361305d84bbf6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEUYJYVZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9A9MESp139VbyiwooYaCIOk0IsE8%2BmsfmcqW5ZI0f7AiAiJjeNE9wViZRs7trqPDqGDdRs9ruo%2B1%2BnXdTWURjiYir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMbMDdzdbGcB0Zlqe2KtwD%2BPXtJDZ0SbIqfzQarEdzbyiqYMHC7sSz1jMjBZoJtEQ7FmYIUlYuuSvqVb9NYHRyEZ%2Be6G1t29qGzV4cJm11vlWvxArJq60jj8E455HxerphnrlbYhNdF3GCFHKWOJHvbJP7uH2vhPESXu9SDAvLhQNKQbQpct6fkQad48po4AHL%2BzCv5AIkiKIRg9V5qis6pLKVril6RD%2FoUJJwQpUr82VdecV2jv%2BLiR%2BvzXRWoQmmnWoel0qPnDz2U69IRm8QVjE1wkviY6ZXOufRVR41dkOTYloJh39SJDMPii6nvgr95EEw18FqJHaoYxfVDG%2FNZVUDjqm9tCidXb8VEGnv5UlITHAKFByK7dCCRG7uvpUxSGCgw2Hppl0udsz92y4N3TAyBM1rTcM6ArvskazZLQGOD%2B2aXRMy4wiPemcVzh3S2fUJ2hulBGoWUXyTSHVeW4PWF9ATTxMoeoS7Qz%2FFYgu50C5ngf%2Fgz8LyCe3afBl8JQEBMjBY7yoSAHEMWCzScZgREO4fWfTKvInvMFo4lMAHg%2F3%2BEZ20rpYxRk%2F6fx3Ub41G0mYLprQMBJ1FUpjtw%2FnJ8wgS6rsa4gml%2F6K85HRyVAOpCoDTRMQ%2Bt6F467NQjxnXpXPBNsWcDHcwnozIyQY6pgH7a%2FUCU19UP%2Bb%2BA%2F2Jhnw1tb7AfFBdFpsbchKQwJZFNXV37cLXPJbU9%2Bz3aSe%2FrImuN%2BxfmYbQ0MaPFBK03lZE4300Jj9rUziFjCn4y1TGHtForrCUly%2BMAIIC7PI3RHH2nGcpuE69l%2Fm3ClR1bJeGVfMfeS5vO%2FaLvWY2jmYqJ1ef7Moe3i1%2BYpdDfHni93JmdSKhWLMVhu1dFmT0QzKpPyti1Q5Y&X-Amz-Signature=582f9d8c8a9baf38cd96fe3f26d290de3147ff3153697be872b32eb4d8fa1782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

