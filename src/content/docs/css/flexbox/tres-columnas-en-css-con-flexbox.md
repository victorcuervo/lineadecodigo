---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUW4BGV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5Reunl2Tfw%2BBPAgBen5MuxV1t5cHfTa782pjGum9axAiEAltsa%2BvHQAQ7%2Fu3ANjuSyFpxHL6Ii3jnva%2BMOFpOy9KAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOklUwSdEC1z%2BCzjcircA%2Bz4cpmWix0bhi9KdR15NTIIGvj6KGVo97P2iaHCf0uNos%2FQvvFQrQlIWjc7OYFoDcVS61ndpJ293mLi7hZzWYNl3aXjStVGji2IiRBBrWw0%2FCYLe7vI8RR%2FQa8xk3aQqxVu8SJlETJQlopq2Mt7an9S7RfYQ03KstYbq3LnvClzHOYaKFrCZpDxCpfsZLpklC%2FuWtq71MHubD%2FL2Yhs%2B2YaWXoF7voqWFL%2FfkyFK8SFUcv0JZxZghZp6ZuVhbA6H%2FoayeBZbkzsHNyPVsiPLDNhudAZivcxs6IcAsaKWQltxKAHcKxjjqvLIt76Vztn%2FrclR4jYr9u1w0LaUBcVJfH2xJnCHO%2Bzp8XQqJSn3na0jRzeiVVI2pdxz4R99UkOGqI73%2BZ1dNPE2ldEtyLXCFUADIO1cIc29j1tQmvKetF0rGAZYI7f%2FJr%2BOTXY66bQOXCQeNrSHpps3kZaYw%2BLOs5EQD67Rj%2B%2BaytubpNCVGxjV9oNH8TT6uLXK6fgpOqgl9VrfW9Df%2FsFNSCz4ZNJyKV12RJ8kb67ZF9wfQ%2FG4im%2Fwj06o%2Bqq%2FDOgyQEq0zp85TffYcGG%2FcaUSLPJldHqosLSFVeE0exNt%2BUuleUp8UylF34Zy1JipBH1yFbBMMeZ1ckGOqUBdIbnnp%2BWFwPpu6hJ7gdKeeYv%2BVB5HL6Wnu2ptmumJaCMqa3qqpkdaNyvnQgUEMCtSvjieLZdy5JVQmxI8xBrBWlp3I3SI8U8aURFHwqfrkQNIGjtctsHnlEu15Cut6UEH3zZ69cPtViFC0mYjWEH1yCb%2FCMMg4NQILDoamowf3NqaU7d0IdY3Q1WkSMTUoRZxXAx6Ag%2Bde8S2TPEu8hfhpQudBYz&X-Amz-Signature=c02dcd10584d07dd4e195aa725db5a8cec732a9b297f03ab1c1584bcccbd3e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUW4BGV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5Reunl2Tfw%2BBPAgBen5MuxV1t5cHfTa782pjGum9axAiEAltsa%2BvHQAQ7%2Fu3ANjuSyFpxHL6Ii3jnva%2BMOFpOy9KAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOklUwSdEC1z%2BCzjcircA%2Bz4cpmWix0bhi9KdR15NTIIGvj6KGVo97P2iaHCf0uNos%2FQvvFQrQlIWjc7OYFoDcVS61ndpJ293mLi7hZzWYNl3aXjStVGji2IiRBBrWw0%2FCYLe7vI8RR%2FQa8xk3aQqxVu8SJlETJQlopq2Mt7an9S7RfYQ03KstYbq3LnvClzHOYaKFrCZpDxCpfsZLpklC%2FuWtq71MHubD%2FL2Yhs%2B2YaWXoF7voqWFL%2FfkyFK8SFUcv0JZxZghZp6ZuVhbA6H%2FoayeBZbkzsHNyPVsiPLDNhudAZivcxs6IcAsaKWQltxKAHcKxjjqvLIt76Vztn%2FrclR4jYr9u1w0LaUBcVJfH2xJnCHO%2Bzp8XQqJSn3na0jRzeiVVI2pdxz4R99UkOGqI73%2BZ1dNPE2ldEtyLXCFUADIO1cIc29j1tQmvKetF0rGAZYI7f%2FJr%2BOTXY66bQOXCQeNrSHpps3kZaYw%2BLOs5EQD67Rj%2B%2BaytubpNCVGxjV9oNH8TT6uLXK6fgpOqgl9VrfW9Df%2FsFNSCz4ZNJyKV12RJ8kb67ZF9wfQ%2FG4im%2Fwj06o%2Bqq%2FDOgyQEq0zp85TffYcGG%2FcaUSLPJldHqosLSFVeE0exNt%2BUuleUp8UylF34Zy1JipBH1yFbBMMeZ1ckGOqUBdIbnnp%2BWFwPpu6hJ7gdKeeYv%2BVB5HL6Wnu2ptmumJaCMqa3qqpkdaNyvnQgUEMCtSvjieLZdy5JVQmxI8xBrBWlp3I3SI8U8aURFHwqfrkQNIGjtctsHnlEu15Cut6UEH3zZ69cPtViFC0mYjWEH1yCb%2FCMMg4NQILDoamowf3NqaU7d0IdY3Q1WkSMTUoRZxXAx6Ag%2Bde8S2TPEu8hfhpQudBYz&X-Amz-Signature=edd6afa44b17ec93fcf53dd37c87b4983005224bc7c201885c2323a0ec13edff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

