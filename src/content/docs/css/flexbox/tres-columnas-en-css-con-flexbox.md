---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQJJ2UT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCus3IYWKPu3NWc4jKwk5Y0Lc%2B4t4DOgRoir64mYVcYDAIgIX5mKkYFLW00C3XzbUPYrW30dsWC%2FH6Q024OYVT63poq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDByOzzyRRUvncIuYnircA3J3JrOiXFI5RoyQJ5haFw8TUBPKlDaIzpfb4MF4dJJgOmY%2FsxD%2BSVgdUdTvPjKsxnxkx1pKUgOfVlZmBIb9DpwscrKoGStda56HOJoAzpLgo9oeeBIZLgF43kyaW%2FvVP40%2FrhzLXRW6CYfqBAXnYywNqwwU49iJOKTj3ZnBLWXjKFkI%2BBGjr9VQDDU5EgSxMOczP%2FW7rvSC5bbJSgP%2B84Zcrdj7i51TyoIn8ObCBrzGkK9uHzgWBo%2B3S4F4IDp7Ro4ReJ39SuWwpj6UTp0wQ03MsadzDa2D5hAwQ7diIvEDERHRWVGAsdX4Ctu6Q98BUopijtjR3DSYUc0iBQtWSWQ4DmcGnUnKJAuCohOO0MqOLstsWl7kAgFw9khHgMD%2FKvsGp7r69A1ly%2BfDy40t8658DMReP4YzkXOdYTAExz4InxWqLARbiWF1cV8Trz4KHWqClWiTvUbjC%2FAnjs8lvFtooV9jIqjNq%2FMxrVadC2yMtjFww5He4qRmeJA3F2YDv1CCeVavnmBUs1prrSUs4FnNuBTncwHk%2B1rpdQEZyAamc1OrwpUWwn1tsuGiL6ViLthlf%2BQnsMEmX2gXM21YFZ4RgWTucn2dpSyIIizdA6D0EyBuT%2BFPRJmjaMEuMIu8z8kGOqUBS0mQ5W1T4NpIR1LLT2pXoyGZA%2B3cG1VKOq5ofximPzsUf1DQveoYFjz%2F5QgD%2BBfe8QBbXcrHXJt0lRP1NFyHw16n9vmv%2F%2F1LALpuLex6Gc3scxSoN1Hdz5NlY40iifgGC%2BzWVzXymjKJ3E7KIJOzJT0u3tTNPKYdEXHNAbRrUIkraoK7dGVCN4mRbQsFytr0SjV6X92%2BUQhzB1uhl5xGP7pKvEcP&X-Amz-Signature=25a0488f9ca6e8c6313e10f233753fcf309f411e47bf4c0210498f3af3acfe39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQJJ2UT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCus3IYWKPu3NWc4jKwk5Y0Lc%2B4t4DOgRoir64mYVcYDAIgIX5mKkYFLW00C3XzbUPYrW30dsWC%2FH6Q024OYVT63poq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDByOzzyRRUvncIuYnircA3J3JrOiXFI5RoyQJ5haFw8TUBPKlDaIzpfb4MF4dJJgOmY%2FsxD%2BSVgdUdTvPjKsxnxkx1pKUgOfVlZmBIb9DpwscrKoGStda56HOJoAzpLgo9oeeBIZLgF43kyaW%2FvVP40%2FrhzLXRW6CYfqBAXnYywNqwwU49iJOKTj3ZnBLWXjKFkI%2BBGjr9VQDDU5EgSxMOczP%2FW7rvSC5bbJSgP%2B84Zcrdj7i51TyoIn8ObCBrzGkK9uHzgWBo%2B3S4F4IDp7Ro4ReJ39SuWwpj6UTp0wQ03MsadzDa2D5hAwQ7diIvEDERHRWVGAsdX4Ctu6Q98BUopijtjR3DSYUc0iBQtWSWQ4DmcGnUnKJAuCohOO0MqOLstsWl7kAgFw9khHgMD%2FKvsGp7r69A1ly%2BfDy40t8658DMReP4YzkXOdYTAExz4InxWqLARbiWF1cV8Trz4KHWqClWiTvUbjC%2FAnjs8lvFtooV9jIqjNq%2FMxrVadC2yMtjFww5He4qRmeJA3F2YDv1CCeVavnmBUs1prrSUs4FnNuBTncwHk%2B1rpdQEZyAamc1OrwpUWwn1tsuGiL6ViLthlf%2BQnsMEmX2gXM21YFZ4RgWTucn2dpSyIIizdA6D0EyBuT%2BFPRJmjaMEuMIu8z8kGOqUBS0mQ5W1T4NpIR1LLT2pXoyGZA%2B3cG1VKOq5ofximPzsUf1DQveoYFjz%2F5QgD%2BBfe8QBbXcrHXJt0lRP1NFyHw16n9vmv%2F%2F1LALpuLex6Gc3scxSoN1Hdz5NlY40iifgGC%2BzWVzXymjKJ3E7KIJOzJT0u3tTNPKYdEXHNAbRrUIkraoK7dGVCN4mRbQsFytr0SjV6X92%2BUQhzB1uhl5xGP7pKvEcP&X-Amz-Signature=ab5bb20b619befaa8224605311835b46323564ab05296db3fa54be255318d6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

