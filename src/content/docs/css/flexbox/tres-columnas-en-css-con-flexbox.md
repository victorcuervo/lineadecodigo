---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3JYK2V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjv%2BufyT5OVk2NZErtuiI%2BSltM7lAsumXbgkAPK%2FcpfAiAFXPHorp6Zk8F1NU3y72UFTquyIvqxVeF%2B8Yp8IfNP1CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoUc3JpRhVWWyOSp8KtwDbFUx7PN%2FKuzGKA863222wL6Yvwveovuw%2FNni3X1WfR%2BSprriUOgVFu87V%2Ft2bm0UVJppJdiX9hoT9ZVIZT%2BlKbp6Lu91AIkf0OqUmiiiaf5t4j3DDcXd7lOAuV%2FVTLe6IekZoIxeIF3qL331rawIzSp7TJUBzBVBFgET6Ai9au%2BCDvCtmOJ2HG3ZBg6OQf4U8VzPxwBj3pa8NaNSLa3AhscX%2BLWFpHzuDWLDsX7z5QUfj5qhtr5H25oqHAZkso6XAcCRHwuK0eWdAW1%2B9IDc3mIKjTrNFG5ZfzzOXGjbKg9xCCMrzWy%2BIBlB%2FDmmIL%2BrW0dGozUrVc%2FWyqe20wXSTYY9EPZqkQFn%2Bfe8AUvW7vJcMOd5Ha7tI0PFs2zog764rYVp0fABB8SdppIC5AVDF5lkU7%2BsVy%2BwaOdWvPx4QD9lYM77g1sg%2FHwvznsy8hDt5fV5P8j30%2Bbo1vdA93SiKFfVDI6RxbpYRVzKxFoGaVCULqlnqIQYeTDZ48hcCVEnY2JClRNC1rgYRnistlVW5eoP2%2FfiEC8NumO0MsRE%2BboLIugBMHe9ndd6Mfr1bL5OskorcZ9rN4y7QjrsDLbLRJbmuEhJtEkvTeJhdA0bsdRBhqNJFbjFOy8hHIgwv%2F7SyQY6pgGje3Yj9q%2FM8Sx3I0C6ZvUrW%2ByWq7cO%2Fo0hf5ylag8OBAkFankBVSGFDVIOpXBufjHr0GzKj5sCPN%2BGbcFDrPBbZ5XNZhzVOwYfQmJqO8JbCRIs2oZDI0h0Ck4%2FKAazcH9cCRB7SosfBBX%2FYtDNqcx4XWnaXwuXbDQDSPl6AzCNl%2BRwX4krCkvqvcUJsEvALF1YLe6ACmpeJVAGD%2FugpamkoFHKL9bb&X-Amz-Signature=75710e3a7e36500d7c3b8110af7e7df83f530d6ca02699fb5d93b723406c45b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3JYK2V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjv%2BufyT5OVk2NZErtuiI%2BSltM7lAsumXbgkAPK%2FcpfAiAFXPHorp6Zk8F1NU3y72UFTquyIvqxVeF%2B8Yp8IfNP1CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoUc3JpRhVWWyOSp8KtwDbFUx7PN%2FKuzGKA863222wL6Yvwveovuw%2FNni3X1WfR%2BSprriUOgVFu87V%2Ft2bm0UVJppJdiX9hoT9ZVIZT%2BlKbp6Lu91AIkf0OqUmiiiaf5t4j3DDcXd7lOAuV%2FVTLe6IekZoIxeIF3qL331rawIzSp7TJUBzBVBFgET6Ai9au%2BCDvCtmOJ2HG3ZBg6OQf4U8VzPxwBj3pa8NaNSLa3AhscX%2BLWFpHzuDWLDsX7z5QUfj5qhtr5H25oqHAZkso6XAcCRHwuK0eWdAW1%2B9IDc3mIKjTrNFG5ZfzzOXGjbKg9xCCMrzWy%2BIBlB%2FDmmIL%2BrW0dGozUrVc%2FWyqe20wXSTYY9EPZqkQFn%2Bfe8AUvW7vJcMOd5Ha7tI0PFs2zog764rYVp0fABB8SdppIC5AVDF5lkU7%2BsVy%2BwaOdWvPx4QD9lYM77g1sg%2FHwvznsy8hDt5fV5P8j30%2Bbo1vdA93SiKFfVDI6RxbpYRVzKxFoGaVCULqlnqIQYeTDZ48hcCVEnY2JClRNC1rgYRnistlVW5eoP2%2FfiEC8NumO0MsRE%2BboLIugBMHe9ndd6Mfr1bL5OskorcZ9rN4y7QjrsDLbLRJbmuEhJtEkvTeJhdA0bsdRBhqNJFbjFOy8hHIgwv%2F7SyQY6pgGje3Yj9q%2FM8Sx3I0C6ZvUrW%2ByWq7cO%2Fo0hf5ylag8OBAkFankBVSGFDVIOpXBufjHr0GzKj5sCPN%2BGbcFDrPBbZ5XNZhzVOwYfQmJqO8JbCRIs2oZDI0h0Ck4%2FKAazcH9cCRB7SosfBBX%2FYtDNqcx4XWnaXwuXbDQDSPl6AzCNl%2BRwX4krCkvqvcUJsEvALF1YLe6ACmpeJVAGD%2FugpamkoFHKL9bb&X-Amz-Signature=c98e267a5e56ac06a38fe07674b81c6d7547f6473776b93b9726ca554dd02b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

