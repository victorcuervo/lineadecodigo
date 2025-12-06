---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5K54GDL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnKyUFQ94sjdPejaneJoBHftU3T0dezl7G4tVAlHitgAiB4ERznO5Be9ikeaVJLQPFMW0z4MYV%2FD2m0kMMkss%2FM%2Byr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM2POtGTdQI5AKRJrwKtwD9CmHf%2BsnHL7GPZQe630Gbi5DMYwYL0WwQZg%2FeahkCiC4zfEl39xNTvOPR%2BQLxQUBOVpy851reiRyW665AcH4%2FrNvSDjBvMak1j97z7AQOApvs3Cw7IGVGDlFJxGf98i%2BNh0mB4B3vwtH%2BulByce51dC507sIj0p0ru%2FC4aYgQfWxQynLU%2BlRj%2FCwMj8uNZuDksG%2BVhX6AgmMFWYi5csCnChud29Wm%2BmKNgGjmiACbBIQ3xv12T2OP%2BqMSHjuCRxtfKkrC%2B2QyOBJkQHgUd1mPEiI56wi%2BezBh4RsIGPW2EbZIXUpMVaMY%2Fu8GhiGyMz8BMs2izNJXUxxTXgFEKZ53YKwCZm1ne2IR8t3bE55O9VvG5U2x7SUYG%2F9Qb%2Fv4XE9bEcd%2FRu7WSZSUS%2Buejvw6ZaCMoc%2F1ANhCUJ42WmrNP7TgfQ35AatJt13wmzva0eXKOyU3vXb2nYYJBSLfpMS6z7F6lW5d50nPdRT1hWIDJnDTue%2FYlGqo96HPc59ld8LW4d17Gj2Dg42XvIRifAc6xx0oZ30ndXmr%2BqWKkOv%2BGEttxWXGF9FYKicbXiAVrICd33VlmwhxsxY3RLIs8x7J19rv3X%2B2BQcBcWiJbmRLA6ruEDtVrOeRP82UHQw9evPyQY6pgFScQLB6xvbx18xN97wpJ0Ve8tQKKNwXlswY1USVX6ae0Y%2FihtgZ4GzZf4c6dnsyzT7w81PU77UtZ4P810cX5cZKnKR1LWEUTN1PuN1p12d3FfJ0XfdF1c%2FNSgwovQStt3NTFkY0bpqL8t%2FNb0HZwrr8HTXPi6liXMi9ZLxWBtElhtunoFJxNxGwWqvT98Yk1NMixSpwWkbROWaxn0054%2BoMgQ0ksxs&X-Amz-Signature=e4c2a4a90eeaa4fdf85339ceca17368c82676c2d42102b8fd536a12fe0b7a59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5K54GDL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnKyUFQ94sjdPejaneJoBHftU3T0dezl7G4tVAlHitgAiB4ERznO5Be9ikeaVJLQPFMW0z4MYV%2FD2m0kMMkss%2FM%2Byr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM2POtGTdQI5AKRJrwKtwD9CmHf%2BsnHL7GPZQe630Gbi5DMYwYL0WwQZg%2FeahkCiC4zfEl39xNTvOPR%2BQLxQUBOVpy851reiRyW665AcH4%2FrNvSDjBvMak1j97z7AQOApvs3Cw7IGVGDlFJxGf98i%2BNh0mB4B3vwtH%2BulByce51dC507sIj0p0ru%2FC4aYgQfWxQynLU%2BlRj%2FCwMj8uNZuDksG%2BVhX6AgmMFWYi5csCnChud29Wm%2BmKNgGjmiACbBIQ3xv12T2OP%2BqMSHjuCRxtfKkrC%2B2QyOBJkQHgUd1mPEiI56wi%2BezBh4RsIGPW2EbZIXUpMVaMY%2Fu8GhiGyMz8BMs2izNJXUxxTXgFEKZ53YKwCZm1ne2IR8t3bE55O9VvG5U2x7SUYG%2F9Qb%2Fv4XE9bEcd%2FRu7WSZSUS%2Buejvw6ZaCMoc%2F1ANhCUJ42WmrNP7TgfQ35AatJt13wmzva0eXKOyU3vXb2nYYJBSLfpMS6z7F6lW5d50nPdRT1hWIDJnDTue%2FYlGqo96HPc59ld8LW4d17Gj2Dg42XvIRifAc6xx0oZ30ndXmr%2BqWKkOv%2BGEttxWXGF9FYKicbXiAVrICd33VlmwhxsxY3RLIs8x7J19rv3X%2B2BQcBcWiJbmRLA6ruEDtVrOeRP82UHQw9evPyQY6pgFScQLB6xvbx18xN97wpJ0Ve8tQKKNwXlswY1USVX6ae0Y%2FihtgZ4GzZf4c6dnsyzT7w81PU77UtZ4P810cX5cZKnKR1LWEUTN1PuN1p12d3FfJ0XfdF1c%2FNSgwovQStt3NTFkY0bpqL8t%2FNb0HZwrr8HTXPi6liXMi9ZLxWBtElhtunoFJxNxGwWqvT98Yk1NMixSpwWkbROWaxn0054%2BoMgQ0ksxs&X-Amz-Signature=0f10da349951fbbc8a10630bce761c808a26ebc556c5d464de690c644ab71e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

