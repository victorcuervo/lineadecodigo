---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS3XTEYP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAwU3knsZ9tj3YEr3ab53lNDCAmygP5QTkjK4Xxk8ICgIgTmAYYTcqoFARe0TMIBCyrvb9udOMhGA5ExnUctbaO8sq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCUwA7WtNiywcFwPQircAz6UwXqsuxXCRvwrVluIOX1RlTTnk93zVf9UqnDAVsrDlrg7iW6OSSYlqMuKFgs0YTiaGLoZeVwwmIz0jrW63aVVAJBuBUmX%2BPMyZUCpIl%2F%2FY5A78aP36ZaDIxiVaS3KW6JKhE0rxG3UWW2Uiq9VobDkGyD%2FrZ6nZ6UHkNMpX7oqVYDpTP0%2BphLwBa0bt4W3OqiPB0JV%2FQXhrrqTf5q8Y6ehkFrjvwaqQvUvHarHGgqK2qMKHwQZXnymgUlocNk5fb4hwkURp2lYkOMqByZQpxjA13%2Fd%2FDG9lV%2FZx%2FrdwA%2BqbSr54ryONIwZymBdJDBBrg6MdUItCPvKTy660HIURMhFCwAmin%2FlqZ7um5l7vD7kgFaNU5S768xSiYdSTcnHN85t7UwO1Iv4TCdgTITAlKipb3xCwJCUsGKW3iBwvJYIVzwnjw1LZV5m35cpQcH6VBGFnWQ8sfUm8SXz0R662SepHlmOhDXrFNJg937o%2F7WesyiqkJc%2Bvhn4Zzbzb%2Bun5M98tAJcwe8sH%2FMyzqNaTnrs1Z1Y6IjdAH1VcqkDBSiMX7jT4Om4U31GB6xClyf4iyfqdPctGw3p0zrAbzyje9%2FQdB8Z3mCLqJwrjcHIjZcQFrA1khtMbyAbbn%2FeMOrbxskGOqUBsubvYpUH1oQF%2FRskto%2FFzAjiRfvAJyyDeEnPw0giN8uvs634jBLLod7s0ShgY9JwbY2k8lRRbzHPtlyaDxo6Goiy4xxgnLfNdxPmo7XiKWL7WN5VkdjsswBiBKRmcjyLKfKfSlAO6sQDPAGu2NICuCdvzWvOLXGB9pB2vabuNg5SZTGInuqzhHCTLst6YRGggmrKN3Xdj8EKuGjUaP4VuYw01GhF&X-Amz-Signature=f749c323ca253af8ac0bcb3e20fdf33c036b63deaa09f3c1ec511f408b7e1ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS3XTEYP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAwU3knsZ9tj3YEr3ab53lNDCAmygP5QTkjK4Xxk8ICgIgTmAYYTcqoFARe0TMIBCyrvb9udOMhGA5ExnUctbaO8sq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCUwA7WtNiywcFwPQircAz6UwXqsuxXCRvwrVluIOX1RlTTnk93zVf9UqnDAVsrDlrg7iW6OSSYlqMuKFgs0YTiaGLoZeVwwmIz0jrW63aVVAJBuBUmX%2BPMyZUCpIl%2F%2FY5A78aP36ZaDIxiVaS3KW6JKhE0rxG3UWW2Uiq9VobDkGyD%2FrZ6nZ6UHkNMpX7oqVYDpTP0%2BphLwBa0bt4W3OqiPB0JV%2FQXhrrqTf5q8Y6ehkFrjvwaqQvUvHarHGgqK2qMKHwQZXnymgUlocNk5fb4hwkURp2lYkOMqByZQpxjA13%2Fd%2FDG9lV%2FZx%2FrdwA%2BqbSr54ryONIwZymBdJDBBrg6MdUItCPvKTy660HIURMhFCwAmin%2FlqZ7um5l7vD7kgFaNU5S768xSiYdSTcnHN85t7UwO1Iv4TCdgTITAlKipb3xCwJCUsGKW3iBwvJYIVzwnjw1LZV5m35cpQcH6VBGFnWQ8sfUm8SXz0R662SepHlmOhDXrFNJg937o%2F7WesyiqkJc%2Bvhn4Zzbzb%2Bun5M98tAJcwe8sH%2FMyzqNaTnrs1Z1Y6IjdAH1VcqkDBSiMX7jT4Om4U31GB6xClyf4iyfqdPctGw3p0zrAbzyje9%2FQdB8Z3mCLqJwrjcHIjZcQFrA1khtMbyAbbn%2FeMOrbxskGOqUBsubvYpUH1oQF%2FRskto%2FFzAjiRfvAJyyDeEnPw0giN8uvs634jBLLod7s0ShgY9JwbY2k8lRRbzHPtlyaDxo6Goiy4xxgnLfNdxPmo7XiKWL7WN5VkdjsswBiBKRmcjyLKfKfSlAO6sQDPAGu2NICuCdvzWvOLXGB9pB2vabuNg5SZTGInuqzhHCTLst6YRGggmrKN3Xdj8EKuGjUaP4VuYw01GhF&X-Amz-Signature=bb5ff5acee1811d4c1da2044ca98b3bf5791edb368b0d1033b37f3c1faf66000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

