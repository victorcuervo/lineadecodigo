---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRPJALR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICwTmlvgpYlN0dFDXKwAtnntZpxictSDKSOm%2BOT%2F%2FjQpAiEAsiHBRDWSfZUT7QyJhZnpZdcRtke0M34ojSGg%2BMdWUKgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJaW%2F0TWLUqYCqEJpCrcA8khI4ejLbFPx67ZddrqxjrsZKceEKieYnBabnlV1MG1f24vuPM3znrnpnbu%2FxZVQSbZhT5NQuDOg3J2r6rkuidc5Lx%2BhMR%2BZiLAyKDg1f%2BHgQoJAPww7g4HyWXgLe85MVpJyazwQ3z6Xf7vguOT3meFnNAeSu1Z%2BKowazuC29A0v3zfvGJTWVsfhR%2BIuUCcTANB5GvTtb3lPLSOYmWLB5xQ2Tm67LxVEHH6it%2F7Q9oS1VzT6e8S1p6t9Uc5537%2FfdDDu2%2FufmlJZieFpbzbVHJvLHgDBsH6JoYgziRl%2FnhGUc1DtppSpvt7cA%2FTYUnqtiN1de4uaF9B%2Fq8xF%2BSaOjIU%2FbE09c5ggFOkVGwOZPhyMoe3O2x8L%2Bp3Ol8Nea%2ByzTsfAYe8bO0eZlLdJLfs6pOd9J3mr9s3n82Q2sWp2gU9%2BiI352Umzi77mbm3zTANX3oKdgdsLgFcivEHYex7wi58DWrV%2FWE2LRqBVrTdsZ6Yt3Pm5mF6x4Guh0erXo9Op4Zm2HGyRo8JaXOXmmvORbJcautM4BiADkBxPs03ooKzEzt5o3rBRIpK7DrmD0RwMVZ6Fs0Dhdv6dbbAeVvh2ErbF2s4Wa1tZaw724U%2FNgC%2Bt07V4tC8vD2Dx3YmMNnzw8kGOqUBSyq%2FCmnX2Xs2hBQto6rcNR%2BKpp2VeQzpPp7BTOMnGo2gXr6TmoLrhGP6YAcaSXFZ3wSNxcIt17LZ7QzqzkvfxCe5Ma23YwBblTNenIVLjT8Nypshy9y5%2BkVwYil%2BiswTyAbyCD0qQm7qn3zsL3nN4VgTbK9NIRFU7AX5TPAENTIiuG3SWuEIgoWrYHc%2BOKZb2FDS3j6AqJVPaKGAoM35koM9JUgC&X-Amz-Signature=902e13ab9a4fe9cd8046f4853fac9afdeaeed05250bb722787cbc7c725145d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRPJALR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICwTmlvgpYlN0dFDXKwAtnntZpxictSDKSOm%2BOT%2F%2FjQpAiEAsiHBRDWSfZUT7QyJhZnpZdcRtke0M34ojSGg%2BMdWUKgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJaW%2F0TWLUqYCqEJpCrcA8khI4ejLbFPx67ZddrqxjrsZKceEKieYnBabnlV1MG1f24vuPM3znrnpnbu%2FxZVQSbZhT5NQuDOg3J2r6rkuidc5Lx%2BhMR%2BZiLAyKDg1f%2BHgQoJAPww7g4HyWXgLe85MVpJyazwQ3z6Xf7vguOT3meFnNAeSu1Z%2BKowazuC29A0v3zfvGJTWVsfhR%2BIuUCcTANB5GvTtb3lPLSOYmWLB5xQ2Tm67LxVEHH6it%2F7Q9oS1VzT6e8S1p6t9Uc5537%2FfdDDu2%2FufmlJZieFpbzbVHJvLHgDBsH6JoYgziRl%2FnhGUc1DtppSpvt7cA%2FTYUnqtiN1de4uaF9B%2Fq8xF%2BSaOjIU%2FbE09c5ggFOkVGwOZPhyMoe3O2x8L%2Bp3Ol8Nea%2ByzTsfAYe8bO0eZlLdJLfs6pOd9J3mr9s3n82Q2sWp2gU9%2BiI352Umzi77mbm3zTANX3oKdgdsLgFcivEHYex7wi58DWrV%2FWE2LRqBVrTdsZ6Yt3Pm5mF6x4Guh0erXo9Op4Zm2HGyRo8JaXOXmmvORbJcautM4BiADkBxPs03ooKzEzt5o3rBRIpK7DrmD0RwMVZ6Fs0Dhdv6dbbAeVvh2ErbF2s4Wa1tZaw724U%2FNgC%2Bt07V4tC8vD2Dx3YmMNnzw8kGOqUBSyq%2FCmnX2Xs2hBQto6rcNR%2BKpp2VeQzpPp7BTOMnGo2gXr6TmoLrhGP6YAcaSXFZ3wSNxcIt17LZ7QzqzkvfxCe5Ma23YwBblTNenIVLjT8Nypshy9y5%2BkVwYil%2BiswTyAbyCD0qQm7qn3zsL3nN4VgTbK9NIRFU7AX5TPAENTIiuG3SWuEIgoWrYHc%2BOKZb2FDS3j6AqJVPaKGAoM35koM9JUgC&X-Amz-Signature=fa0688c6d4765673f48bb57bf8faac75242019ca0c6f8cefb9a186d53638f7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

