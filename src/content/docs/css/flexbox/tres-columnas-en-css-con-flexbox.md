---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAFGQGD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALjhMGPqlDhy1DWzC4LkYiaUj8o87KUNlEh8AYHu%2BDEAiA4dqS9nl3%2BPAKYR6GA%2BUpJgrqpOcagd3KwfLg35Y%2B%2BdyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUb4lLBBsW3TAnq5MKtwDlc2oXl7V9ga1u86yB2qzFBYio1H4DHZPM4f%2FubN4SY%2BXS%2BqiyMfK6J1w8yxpWlPk%2Bs3QteRKIhrNkk4n5Wmyf0OgDORkr3N8TMw2P2QjLyPUNdEW%2B%2F%2Fru2VHfdMco4tTUzTx9aQyPASakYUlF9SoYg6IRDOuzxYoN%2BZRozukGj%2BSBoBPr9K8A0YvpzeBWfNl7MVEYOl8QA6W%2BOoP7TQiq3O3bvfMdfs%2B6RSPWq%2F1HQWv4X1N7VYtIUn3997pg0wXe6ttSrD7mcqgcQ0%2BnzXgfU7GxoqCzzgNnCbTEi29ZEfoE%2FniHDDx1tlyhKD7nnQ%2FDhi0MXM0IG%2F1xmOZDjAMuTO0LE3kKsPc8Z%2BikNUqUXV%2Fwaph9T0s02oLZ4kWGCwGSFH2bZJNKo6AXEVwqr5o%2Bm2kyG%2FSVbkiszmEt%2BmHXoKwhO4oJNd31JorwfGuN1IxPWrFTPFt2HxVjQwxXK2FBHUZBksrRGg3fZP0i7wLlTyjgTxaex4IHHN4zSI3dMYBdDyWdz22atIFhpCVdDnUAgrzyUaJZp6Cn6rN0OgQJdIWwQPfIxKKSZ%2FLp%2Fj5VIDyVGJdGh1%2BDfCNBsGF2ot4cZifLBX7Tvxaf82vueWM6KMAMM%2B9alaf770jOJswyI%2FbyQY6pgFkX9n8BKjh6e%2BqvTWHbVYNPLhjhFNn610Z4MIfh7V07nP3XfEG%2BmzYfIPfpbUCjv2VPdhk%2BFmJDsxktGT2tnnwWlWmIkNPpGbFrNrT%2FwCUihXaO%2F1r6nNkx%2BHF8l%2BpGkXKpKpDbuP77zFb29w%2BNaIhKgnmG%2Biwnc0BN%2B%2Bu0Wt7ZwBHPolS1SV8y0452WyQSCVC9Y4H%2BhvQL3KBMp83p33Z5OEHezV%2B&X-Amz-Signature=42ad5ce82b362620adab34b8f118038381f40bc5982b6406cfecbeee5c966f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAFGQGD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T133015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALjhMGPqlDhy1DWzC4LkYiaUj8o87KUNlEh8AYHu%2BDEAiA4dqS9nl3%2BPAKYR6GA%2BUpJgrqpOcagd3KwfLg35Y%2B%2BdyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUb4lLBBsW3TAnq5MKtwDlc2oXl7V9ga1u86yB2qzFBYio1H4DHZPM4f%2FubN4SY%2BXS%2BqiyMfK6J1w8yxpWlPk%2Bs3QteRKIhrNkk4n5Wmyf0OgDORkr3N8TMw2P2QjLyPUNdEW%2B%2F%2Fru2VHfdMco4tTUzTx9aQyPASakYUlF9SoYg6IRDOuzxYoN%2BZRozukGj%2BSBoBPr9K8A0YvpzeBWfNl7MVEYOl8QA6W%2BOoP7TQiq3O3bvfMdfs%2B6RSPWq%2F1HQWv4X1N7VYtIUn3997pg0wXe6ttSrD7mcqgcQ0%2BnzXgfU7GxoqCzzgNnCbTEi29ZEfoE%2FniHDDx1tlyhKD7nnQ%2FDhi0MXM0IG%2F1xmOZDjAMuTO0LE3kKsPc8Z%2BikNUqUXV%2Fwaph9T0s02oLZ4kWGCwGSFH2bZJNKo6AXEVwqr5o%2Bm2kyG%2FSVbkiszmEt%2BmHXoKwhO4oJNd31JorwfGuN1IxPWrFTPFt2HxVjQwxXK2FBHUZBksrRGg3fZP0i7wLlTyjgTxaex4IHHN4zSI3dMYBdDyWdz22atIFhpCVdDnUAgrzyUaJZp6Cn6rN0OgQJdIWwQPfIxKKSZ%2FLp%2Fj5VIDyVGJdGh1%2BDfCNBsGF2ot4cZifLBX7Tvxaf82vueWM6KMAMM%2B9alaf770jOJswyI%2FbyQY6pgFkX9n8BKjh6e%2BqvTWHbVYNPLhjhFNn610Z4MIfh7V07nP3XfEG%2BmzYfIPfpbUCjv2VPdhk%2BFmJDsxktGT2tnnwWlWmIkNPpGbFrNrT%2FwCUihXaO%2F1r6nNkx%2BHF8l%2BpGkXKpKpDbuP77zFb29w%2BNaIhKgnmG%2Biwnc0BN%2B%2Bu0Wt7ZwBHPolS1SV8y0452WyQSCVC9Y4H%2BhvQL3KBMp83p33Z5OEHezV%2B&X-Amz-Signature=678870fd6888ac955af696f3a20c6efc9c83b6b7ef76cb209dd4293e2dbf7c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

