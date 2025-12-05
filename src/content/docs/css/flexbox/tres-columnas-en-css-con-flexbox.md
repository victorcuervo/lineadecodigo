---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ERKRE6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTVN1A5Ncoexqbz2WCZ5%2FVylcyII1vdMJ9s3gqigM9HwIhALcnB1DqZl%2Fhrf2UIcY7SgAZDVCnlSxTMOm1p98dNgkXKv8DCGEQABoMNjM3NDIzMTgzODA1Igx0NaMULc56RQPj3Ykq3AOxVI7RicWghj7Iuv4mDNW7R9OedAVe6v30zCVYUMaNa6zMPJumcrLhMZA8z4QvPkgmYiQ5QelpAs7Rg7ZSEWGaKWjou9Gn3A9qQbJ2HIo0jj%2FMFP9i1tPvWn0Qd2NBmoRbeEewrbzwyGYS7%2Fc0T%2FLppG%2B2SaRpVmXvQ3MPHxLOFbEYlEHmLQc4D7%2BSZe8UtC7wed3PzgzEZsKO%2FYCQrZF5ODBBboNwHpG%2F7xPtgDaKlXVtxzcWdXtWorQ%2Buct5cHJ5pkUTMAETalTMvdzA4qqHyQv3Apab3Ends7irgXe%2B%2F4xnEa%2BPdy9jOgpquyxLUKXx76t3y0gxC0RlUTmvGpWrtrIBmKrFv7h01eGnKjpfsVNOkunA75AadRYUmYKVCODXAERYajNPkzPw9OaCh3lOlJkdZCQ3kWbcbxjq9J323gtcJmocQWHPgc5o12mlx3LISlGHHSCSO9jwCkoEz8EmMoK%2F6DRdyZP%2FNaf0DxwOZp12jCt9UT%2BcK0TLXVDtyJ7D4XZ7Qw849eNRIsKS6AIaMe1cKwl7ttYD22OIip%2FtKrMNuIqFpz2S1NEc2wf4RawgH0QMMWTU%2BYK4qQ9f%2FTzc8McB69D8XvDlSoDzvDPd3XGbB7digHUcsDPxBDDD88vJBjqkAYAdb6PnIVkXUQ%2FiWWlfwvbtZ9DS3ij7PuWgNTC5bLVgH6L0YAANSMtAjTniV6YpIGS1qS4TPsmIypXsVUDAMU5zohNpPwn%2FYknkwAlt43zRlTFwTniSLOlRKxRAwIRBhnGn%2FtdM9yyBtjSI30p60NHo%2FXlnQlpoh0BUe%2BbSjStd6h6QvTSDQaGzZXNS%2FrGv%2BkDPzRHmZAJPO1lk%2B6wnCli7TJJp&X-Amz-Signature=112aa06a9aa741dfcaebcc7beea484c79b59db275b03b9d4c86f7a6c197f13b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ERKRE6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTVN1A5Ncoexqbz2WCZ5%2FVylcyII1vdMJ9s3gqigM9HwIhALcnB1DqZl%2Fhrf2UIcY7SgAZDVCnlSxTMOm1p98dNgkXKv8DCGEQABoMNjM3NDIzMTgzODA1Igx0NaMULc56RQPj3Ykq3AOxVI7RicWghj7Iuv4mDNW7R9OedAVe6v30zCVYUMaNa6zMPJumcrLhMZA8z4QvPkgmYiQ5QelpAs7Rg7ZSEWGaKWjou9Gn3A9qQbJ2HIo0jj%2FMFP9i1tPvWn0Qd2NBmoRbeEewrbzwyGYS7%2Fc0T%2FLppG%2B2SaRpVmXvQ3MPHxLOFbEYlEHmLQc4D7%2BSZe8UtC7wed3PzgzEZsKO%2FYCQrZF5ODBBboNwHpG%2F7xPtgDaKlXVtxzcWdXtWorQ%2Buct5cHJ5pkUTMAETalTMvdzA4qqHyQv3Apab3Ends7irgXe%2B%2F4xnEa%2BPdy9jOgpquyxLUKXx76t3y0gxC0RlUTmvGpWrtrIBmKrFv7h01eGnKjpfsVNOkunA75AadRYUmYKVCODXAERYajNPkzPw9OaCh3lOlJkdZCQ3kWbcbxjq9J323gtcJmocQWHPgc5o12mlx3LISlGHHSCSO9jwCkoEz8EmMoK%2F6DRdyZP%2FNaf0DxwOZp12jCt9UT%2BcK0TLXVDtyJ7D4XZ7Qw849eNRIsKS6AIaMe1cKwl7ttYD22OIip%2FtKrMNuIqFpz2S1NEc2wf4RawgH0QMMWTU%2BYK4qQ9f%2FTzc8McB69D8XvDlSoDzvDPd3XGbB7digHUcsDPxBDDD88vJBjqkAYAdb6PnIVkXUQ%2FiWWlfwvbtZ9DS3ij7PuWgNTC5bLVgH6L0YAANSMtAjTniV6YpIGS1qS4TPsmIypXsVUDAMU5zohNpPwn%2FYknkwAlt43zRlTFwTniSLOlRKxRAwIRBhnGn%2FtdM9yyBtjSI30p60NHo%2FXlnQlpoh0BUe%2BbSjStd6h6QvTSDQaGzZXNS%2FrGv%2BkDPzRHmZAJPO1lk%2B6wnCli7TJJp&X-Amz-Signature=386887a8d81aed61582757aef33e9d650422f904e54776825224633e18693f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

