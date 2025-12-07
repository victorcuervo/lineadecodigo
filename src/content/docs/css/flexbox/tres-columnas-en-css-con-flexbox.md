---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633MHCRG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERG2hsHHUNYh9lXFkglsAHbDtKsQ2qQE6n2M00hNMOjAiBnzydv%2F9P4g%2Bbe%2BAjQqR6jJDoTa%2Bh1LNzoK6yvwyjVxyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx1TMP2%2BO25YZ2x1sKtwDqkHIw52nFV4VIo1Vrf5FKQQJLtMUjnM7VfmSU8J6K64NTZNiIlLly7x80p9oLzBl%2F4QkNgUR8AuVPQ84Jg9cOAbJElY7LAisN%2F5mszqR3hLdJGk32JjhYVsrNV9U4Wk09HplzXy7Xjf8%2Fk9YCMztwyKOlMxGqPeGXChFauMu0D%2FQ2BVr7A1CaJPDng6Z4QMl%2B2nUC0ZIr4T5484mNWKcOCn2S2u%2BJjpQl22VL6nBai7uQLBOi506RmkqDpZbhskmQm9rAwusYrcIMbszVIScmBPU7IAXa5NRJluFd6Ncgu4lNIzPFgYlHBjbkWAknK1ybxSXzhzVGJidkTMsi0ntYUZ9ngJPFUxd0DfMeAERIztU27tc3NgN3tyAX91q1v9n4fAK7Gp5iwecFP3yimHRW4zDbrGB0JxSYnBPW3JshzRpTs3PB%2FJWc4Z5a1VcIzhGPjCLo0pPtmxKNHAqRibHddkmFafqGM0hnu7YLI6cxEysHNUb3%2FWZg8m0Vw7k2zE0CcN7HkgFoLQl9kEc8furylbGeowmHzJJlzvhSYEEdeFyyfkLXQYGtFzbtkZKy%2BYL9PFwMKgEdvdbmfRjvp3TMEq2QcpaAVzy52HxeqQD9FKipHsPyFsvbnKQrCsw2ajXyQY6pgES0tCYpP3gzyD7dwFE2M7GeQQf6ZZ9LLnCsKhdEx0hpgksFmh%2FuquXVaUKeHgcS2mLuF0jLWN%2BZ27eMrvNBxZOfJPq03Vfm5kvjpPneMNubipJP8%2BGoYRgUG5ySOY8X9KtR6Jnfyud1tvU4xAonXtn2t%2BC%2F6Uohq8%2FdCNDn%2F1qQAUo2kB4%2F32XSaNY%2FRIOnS0UX62kW85XjlLh6neFWX%2F%2FskrqS8xd&X-Amz-Signature=f77895e975368b5d5fb0f34f9c2238617b11bde7035708a6b3eb7393dbc65490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633MHCRG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERG2hsHHUNYh9lXFkglsAHbDtKsQ2qQE6n2M00hNMOjAiBnzydv%2F9P4g%2Bbe%2BAjQqR6jJDoTa%2Bh1LNzoK6yvwyjVxyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx1TMP2%2BO25YZ2x1sKtwDqkHIw52nFV4VIo1Vrf5FKQQJLtMUjnM7VfmSU8J6K64NTZNiIlLly7x80p9oLzBl%2F4QkNgUR8AuVPQ84Jg9cOAbJElY7LAisN%2F5mszqR3hLdJGk32JjhYVsrNV9U4Wk09HplzXy7Xjf8%2Fk9YCMztwyKOlMxGqPeGXChFauMu0D%2FQ2BVr7A1CaJPDng6Z4QMl%2B2nUC0ZIr4T5484mNWKcOCn2S2u%2BJjpQl22VL6nBai7uQLBOi506RmkqDpZbhskmQm9rAwusYrcIMbszVIScmBPU7IAXa5NRJluFd6Ncgu4lNIzPFgYlHBjbkWAknK1ybxSXzhzVGJidkTMsi0ntYUZ9ngJPFUxd0DfMeAERIztU27tc3NgN3tyAX91q1v9n4fAK7Gp5iwecFP3yimHRW4zDbrGB0JxSYnBPW3JshzRpTs3PB%2FJWc4Z5a1VcIzhGPjCLo0pPtmxKNHAqRibHddkmFafqGM0hnu7YLI6cxEysHNUb3%2FWZg8m0Vw7k2zE0CcN7HkgFoLQl9kEc8furylbGeowmHzJJlzvhSYEEdeFyyfkLXQYGtFzbtkZKy%2BYL9PFwMKgEdvdbmfRjvp3TMEq2QcpaAVzy52HxeqQD9FKipHsPyFsvbnKQrCsw2ajXyQY6pgES0tCYpP3gzyD7dwFE2M7GeQQf6ZZ9LLnCsKhdEx0hpgksFmh%2FuquXVaUKeHgcS2mLuF0jLWN%2BZ27eMrvNBxZOfJPq03Vfm5kvjpPneMNubipJP8%2BGoYRgUG5ySOY8X9KtR6Jnfyud1tvU4xAonXtn2t%2BC%2F6Uohq8%2FdCNDn%2F1qQAUo2kB4%2F32XSaNY%2FRIOnS0UX62kW85XjlLh6neFWX%2F%2FskrqS8xd&X-Amz-Signature=0c8110be57b18bebef554ddac0753c10a3387663079950fd015c8b07a1e6a583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

