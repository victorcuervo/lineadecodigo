---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQXBJXQU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDaZDvknfbj3GEpMFJ0jkx88rN1K3k%2FeHj2Qxi5O6NYKAIgG69jjxH6x1yJJddYVIIHDOC4vGv%2BxYjY%2BboG18k6xboq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGJ7ZejIhVRnGKSViCrcAw8piAaX3dABhpigFONCDPlCYQdnYPQYy2d6Mr7wvTKXB3y2MuvaIeaLdasiDEFH1KPehoNie5IcVuv6R3xQMZcP8R83qz8hiPH4NdqEqmHp2GIyejQK7bDcRTkqEmj0twj2rlDznQUEdPhgvJkoWn9yXg2ORhC95q%2FUc%2B0grIOZvj%2B%2BJ8N6FCgI6SGCfsKxpCrI%2BteXOo2s2bJlhIMp%2FzsZ4MPYmaAkJwrED0tJNb%2BEnHO8tu0PZt85hL2c2BPG25POvxAUQputHy4uIi4WdJEelAMQ2RBQiAtakF6kn6tNMUdnkw4JoB8TCvNVAjY%2Fk9wBBQ3P1cis7YVIgKvcKy4pXvrac79i8sXOv6c8K4GCuX%2Bw%2Fp22dJ6o1Fzil1zZiNYwCnikg4tqxffwwdJYZTjzo4csAruomVeGzRE7H%2FL%2Bm7jIoAqUwk5iJP59LflGL6YM88IKkyJsp8Tv6bxxXgAYTZXIXE7B8eDzSwKFjHdZ38VnsymmYn%2BJiNKGoj0Cwn8F46HZSy5PFMW4c0QcxInK5N05TtObdbL%2B2marJJ3XHR3LQ%2BPM0OdC8qrHbgPoqcuExUIr%2FACKyXvBN5N5eIMqsfYn6pXshiuMLpWt1YF%2BdbbXg71NEtXPqVpEMPTKxMkGOqUBEz8fQ6Yw93wf2nl4qSLB1%2BJHH5D7JzUuhws6rf39g176mRwV49OfO8aXXZRX60O%2B6Hn6H2IdssRJRSLmfg5jVftwu%2BziQEedwqWU9te2nV165F9qXGqu3Q7wThnbAsoo3m5VQwl4tTmaVYKFJ7PGBOdUGnr55hz0zr7ywgE7HRAZbbJxCZ6CfuUJT%2BIAZBVd8VpxqC77dw%2B7P%2FBU1gtS42hU5fgs&X-Amz-Signature=95ac23142656620ad61e5ee0b2c9623b6525d80fc32a4c073d05e8b34b1788c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQXBJXQU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDaZDvknfbj3GEpMFJ0jkx88rN1K3k%2FeHj2Qxi5O6NYKAIgG69jjxH6x1yJJddYVIIHDOC4vGv%2BxYjY%2BboG18k6xboq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGJ7ZejIhVRnGKSViCrcAw8piAaX3dABhpigFONCDPlCYQdnYPQYy2d6Mr7wvTKXB3y2MuvaIeaLdasiDEFH1KPehoNie5IcVuv6R3xQMZcP8R83qz8hiPH4NdqEqmHp2GIyejQK7bDcRTkqEmj0twj2rlDznQUEdPhgvJkoWn9yXg2ORhC95q%2FUc%2B0grIOZvj%2B%2BJ8N6FCgI6SGCfsKxpCrI%2BteXOo2s2bJlhIMp%2FzsZ4MPYmaAkJwrED0tJNb%2BEnHO8tu0PZt85hL2c2BPG25POvxAUQputHy4uIi4WdJEelAMQ2RBQiAtakF6kn6tNMUdnkw4JoB8TCvNVAjY%2Fk9wBBQ3P1cis7YVIgKvcKy4pXvrac79i8sXOv6c8K4GCuX%2Bw%2Fp22dJ6o1Fzil1zZiNYwCnikg4tqxffwwdJYZTjzo4csAruomVeGzRE7H%2FL%2Bm7jIoAqUwk5iJP59LflGL6YM88IKkyJsp8Tv6bxxXgAYTZXIXE7B8eDzSwKFjHdZ38VnsymmYn%2BJiNKGoj0Cwn8F46HZSy5PFMW4c0QcxInK5N05TtObdbL%2B2marJJ3XHR3LQ%2BPM0OdC8qrHbgPoqcuExUIr%2FACKyXvBN5N5eIMqsfYn6pXshiuMLpWt1YF%2BdbbXg71NEtXPqVpEMPTKxMkGOqUBEz8fQ6Yw93wf2nl4qSLB1%2BJHH5D7JzUuhws6rf39g176mRwV49OfO8aXXZRX60O%2B6Hn6H2IdssRJRSLmfg5jVftwu%2BziQEedwqWU9te2nV165F9qXGqu3Q7wThnbAsoo3m5VQwl4tTmaVYKFJ7PGBOdUGnr55hz0zr7ywgE7HRAZbbJxCZ6CfuUJT%2BIAZBVd8VpxqC77dw%2B7P%2FBU1gtS42hU5fgs&X-Amz-Signature=5c02a40553abb254b2d5766f97f84b2cedfa2c791d1e159a10dd553edb1d0728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

