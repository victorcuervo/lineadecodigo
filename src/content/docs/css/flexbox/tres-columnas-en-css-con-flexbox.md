---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KK4V62M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdGjjtSZg47a8fkRL%2FkulzQESK2S%2FWfH0I83lqB6KO0wIgGnKGDGgcykFg3B4hF5KsupgdhA9hppo09jKjKJuGEKgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCC%2BX1l%2BMeYDk%2BK5eyrcA0TlMgwjJsNRWt8KCFWjvijybRjVnq0Vrekb0zNohjGbR0JXX1awKSVlXjnoPcc47CAQ1BacMJNgo5ti%2BGLg3mS62R8dCJ%2B%2B86ivgBgJgGMLi6YCQ7uVPABhGbvm%2FmimAxlvijpP1F7o6BI1y0TIP9kC%2Bqa2F9UlScWkbnKYQ%2F6oYqnillLYJK0XB7k1RVvEAi6oJsxFZ0lbWuvFTqz1A7%2BOlY0%2BA3CVal5ZNV980V8I3aD5pdT55BMRrIbecoIEKgyqYsLXCttX9bdZKtNJgM%2F2%2BxwWFHDPcywF0%2FoEciEIAKJlxzsYXmaa71fzgKsNpsZtBZj98Vh6jEjvJIfXiJQYrT5PzdAIBxLbzd6rOQtgezwSjALwbqawECsfUbwLt4FMe%2FBxQTPNjz7vfABe%2BP1yfzsS%2F3C2VLJjtcsOspboIeIq73KimF8z9T0jxb6uXAe0%2BhI8bHJ0oKRuvLIv8ZbHeU%2F3GyuJoMMS7Yutl52SIEXfre%2FnxyCxfnW%2F3mCBWMhUQTbDMP2JGdxUzj9%2B2muQKP8DGI%2Bq4dvCXHnRlZz6EonKmE5%2BimelBZV8iEefH3rDQ1NmK7rxqYKkmsPID%2BSusRNloLXzmqe6CmJ5Q9xZCrUXBYtmS43rNZ2TMJf4y8kGOqUBi%2ByuGZPdpj8VnpTeglDmCxd8DE0ttvA%2FCcjGISsOIY7Apmv5XPNLX1D6ygkvP%2BkR%2Fmby8L5r00WQ2kbz9%2BeJX%2BClXIOvYHepGYIgKV%2BKiyPkO8FUPfubxmVvT84UY6H%2B3BzMCi8NaDJ9gygYCl7nP254tGx8qMA8Lv%2FQVrNh9NQTKB8a3EFFX9BxJ0DAli%2FnXu8ltCNGv2vAd18FZTTuLs9vIvh6&X-Amz-Signature=7cb50755fbbc8871c98cead242546ff92b40dedc9cdb75aadbda6162a2f1f3e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KK4V62M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdGjjtSZg47a8fkRL%2FkulzQESK2S%2FWfH0I83lqB6KO0wIgGnKGDGgcykFg3B4hF5KsupgdhA9hppo09jKjKJuGEKgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCC%2BX1l%2BMeYDk%2BK5eyrcA0TlMgwjJsNRWt8KCFWjvijybRjVnq0Vrekb0zNohjGbR0JXX1awKSVlXjnoPcc47CAQ1BacMJNgo5ti%2BGLg3mS62R8dCJ%2B%2B86ivgBgJgGMLi6YCQ7uVPABhGbvm%2FmimAxlvijpP1F7o6BI1y0TIP9kC%2Bqa2F9UlScWkbnKYQ%2F6oYqnillLYJK0XB7k1RVvEAi6oJsxFZ0lbWuvFTqz1A7%2BOlY0%2BA3CVal5ZNV980V8I3aD5pdT55BMRrIbecoIEKgyqYsLXCttX9bdZKtNJgM%2F2%2BxwWFHDPcywF0%2FoEciEIAKJlxzsYXmaa71fzgKsNpsZtBZj98Vh6jEjvJIfXiJQYrT5PzdAIBxLbzd6rOQtgezwSjALwbqawECsfUbwLt4FMe%2FBxQTPNjz7vfABe%2BP1yfzsS%2F3C2VLJjtcsOspboIeIq73KimF8z9T0jxb6uXAe0%2BhI8bHJ0oKRuvLIv8ZbHeU%2F3GyuJoMMS7Yutl52SIEXfre%2FnxyCxfnW%2F3mCBWMhUQTbDMP2JGdxUzj9%2B2muQKP8DGI%2Bq4dvCXHnRlZz6EonKmE5%2BimelBZV8iEefH3rDQ1NmK7rxqYKkmsPID%2BSusRNloLXzmqe6CmJ5Q9xZCrUXBYtmS43rNZ2TMJf4y8kGOqUBi%2ByuGZPdpj8VnpTeglDmCxd8DE0ttvA%2FCcjGISsOIY7Apmv5XPNLX1D6ygkvP%2BkR%2Fmby8L5r00WQ2kbz9%2BeJX%2BClXIOvYHepGYIgKV%2BKiyPkO8FUPfubxmVvT84UY6H%2B3BzMCi8NaDJ9gygYCl7nP254tGx8qMA8Lv%2FQVrNh9NQTKB8a3EFFX9BxJ0DAli%2FnXu8ltCNGv2vAd18FZTTuLs9vIvh6&X-Amz-Signature=7682cf937f46578804acfd9c9cfff09fb05eb97d2134158ad22c23b57c85224a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

