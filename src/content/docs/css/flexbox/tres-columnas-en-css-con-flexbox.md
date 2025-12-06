---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXOYXDW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERCl557r1VzTJrZ7UFEU6P5xQIc41b2JAYIrrs77TVwAiEAm3oTUF0pnNJ3G0IPExa5tBZGa1Kl44IRfdrdSEYGdt4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPdu4lBru3cMJDcoICrcA1xbmdU5guPrjCTC%2BD%2F7mtWN44ecX41Q42pkshTVOXe6xW%2BM6Kcv0bBMjBXx9U6MZ0EJxRWc4bIVNNXXradsByoE2YE3aGiPeyJfkkNc5EQGCAsvhG2QlJqR5OiQIvMifO1r%2Bynon61vag0%2FdPnpJUwH1scuJOy7xCYD39wh459LFoyL8Pn4o3KSyk8w912FD63%2B4Pxr2kuSzR7ko5EAG0oBSm8ceWWzCTpU7zhLATtcmITFmCBf6KOdukswTA4W3JwJuAQUFIJNDH9rjKEW90iJGQrMnIxkLZ7jfZlpPTPNy3mS%2Fr14vd4Lwz8xyBGbrG60t21p0D2jg6EVNara7tu2zaHtUyqWijn5zqWwPrgcSkAm9l7PIlhoQRZyknjY4gjyed6sqWm%2BrCvwK1mtU8NhWYLHyZKQcVaFf7S3lkCHO0rerDEdQgMRa52vm75keS2%2FtrU2v1hVtOfZJEm1fcfTt1PrqaEAmKtFlgRVjCBlvCqFe82oPYVhUEA2JsqTjJSkwqj0VejZ81GedMPJFFTQYNciJAffjn5Hg%2FsONuFFOxQH8KgyC9f3jDZShiD3SST3gudiyFaiFtzaZ5mjhjN8aaTFNFmHUOI63YIzYl01s1E1fGeiLc27nCS%2BMNzDzskGOqUBwkTyHOxgf7OzawAm1VdCmp7kPEGEHJFECi%2BMR1tcghiJALZtBkKW9tvYSJ2wpRVCVGMMBKuBd2%2FKZbvtOf2p%2FMELhUt63rAcNxDMGoZXn19pRJupq9u2DZ9aC6vq7oTuKPYf3oY5%2F3A7xVEsM2nzpztqwMq5wEYoQSyDKGIXORKkz6vijIM0mFcLvnLBGIYGVfWjEAjgfZJLQgeXYO62sqO6j8io&X-Amz-Signature=0f1fbfb6d5aa9d9653815ca6cd73bfd6be0033aeccab624c4273c6c48a1fc6b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXOYXDW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERCl557r1VzTJrZ7UFEU6P5xQIc41b2JAYIrrs77TVwAiEAm3oTUF0pnNJ3G0IPExa5tBZGa1Kl44IRfdrdSEYGdt4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPdu4lBru3cMJDcoICrcA1xbmdU5guPrjCTC%2BD%2F7mtWN44ecX41Q42pkshTVOXe6xW%2BM6Kcv0bBMjBXx9U6MZ0EJxRWc4bIVNNXXradsByoE2YE3aGiPeyJfkkNc5EQGCAsvhG2QlJqR5OiQIvMifO1r%2Bynon61vag0%2FdPnpJUwH1scuJOy7xCYD39wh459LFoyL8Pn4o3KSyk8w912FD63%2B4Pxr2kuSzR7ko5EAG0oBSm8ceWWzCTpU7zhLATtcmITFmCBf6KOdukswTA4W3JwJuAQUFIJNDH9rjKEW90iJGQrMnIxkLZ7jfZlpPTPNy3mS%2Fr14vd4Lwz8xyBGbrG60t21p0D2jg6EVNara7tu2zaHtUyqWijn5zqWwPrgcSkAm9l7PIlhoQRZyknjY4gjyed6sqWm%2BrCvwK1mtU8NhWYLHyZKQcVaFf7S3lkCHO0rerDEdQgMRa52vm75keS2%2FtrU2v1hVtOfZJEm1fcfTt1PrqaEAmKtFlgRVjCBlvCqFe82oPYVhUEA2JsqTjJSkwqj0VejZ81GedMPJFFTQYNciJAffjn5Hg%2FsONuFFOxQH8KgyC9f3jDZShiD3SST3gudiyFaiFtzaZ5mjhjN8aaTFNFmHUOI63YIzYl01s1E1fGeiLc27nCS%2BMNzDzskGOqUBwkTyHOxgf7OzawAm1VdCmp7kPEGEHJFECi%2BMR1tcghiJALZtBkKW9tvYSJ2wpRVCVGMMBKuBd2%2FKZbvtOf2p%2FMELhUt63rAcNxDMGoZXn19pRJupq9u2DZ9aC6vq7oTuKPYf3oY5%2F3A7xVEsM2nzpztqwMq5wEYoQSyDKGIXORKkz6vijIM0mFcLvnLBGIYGVfWjEAjgfZJLQgeXYO62sqO6j8io&X-Amz-Signature=d953e4a3c640fc6a8a5f53ed7512766797b419da458e63cb26596a86dee1259d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

