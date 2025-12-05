---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3XGAC6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCiWFkx0JRwPZBKDFnlgKKylpXLZ4qqY8T9ZGIi6INmwIgTWfruyj3RY4PmxxPP2TiGbtlgNsFyN%2BNWDYT1Bxt7Eoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDG%2FhKEpUqKq1wyac8SrcA6rKZrB%2BByC8JckGV%2BDYA0c3TMM5enVg9TIjbLqDfQY8XgjTALgr0TYqOsabRJaQ1tSVyOrXTMqMGi2DevAH1z%2FOBym%2BO%2BorxiZbVYS0g%2BjswORJ5WKb4GjHien3K2I5gQMS%2B1CoNzJgJTVxYq%2Bv0HcLeWfl5xh1QiRsy5hh3w8f9MoO%2BGatU40gr0WZ4iKBy2PHW8rJ9KZfy%2BaEYd9Q7rrvar7CDAMEH6%2FZ2hZYrnuKvC9A4NIVJ7lcVYSCbwFZfz5JLEwwyi3wzDNMh2gCGuDAQ2AsIKggrUT3I5xTU3s3BjBkys3oZ2sjSuwhx710obn0YIpI7z6oF42vyJ0%2FviorZQ5nI7wWi6rHKN8TMKPoFUJeG3WntwKg8hH4gYipf7tJgV1khbbTmW04NDWC8mOGAyfqW8cc64rEp0WI3tiRdjwb8z5DvbH4jlGLaqcq8RnLijnTUQhE%2BG7UXH1XRFhBibKaoq%2BY8ZZEe71oCrLzlvjAJ4Cb6o2j9JwC%2BopD5M1OBioopWCeB2s7GT7XaG8%2BmCSKZJwz%2FjxIbEbbSG7r23ktJKYg3VstaYBk7oXer0WKiqOLAAhQKhZo3kZfMNJIzLI9LjHfjOEIGnl6%2FlUvu2kOjMNBBZxqnXejMPfpy8kGOqUBQSlv%2FALs05wPNSqTM04HiALvS%2BD9O8BRz6XbvrIu8tX07QtJw195pqlpIkT9XJ03Ww9YRyJbdCWjsiD6dUUOYDzlmSV%2F6bk3yNXJ%2FNhwNafOwLBiDfYZXnHIdhhQaUEgtoxFj%2FCtiCXH3F%2BjIfvx0j0oJusDJRFeAovyzTiflsMW8N4tuNx5ogmGYmED79NgXZHM%2BV7H%2B6ryAtNuexQ6QusbtnGC&X-Amz-Signature=4625d1a0ceb2706a3d0a30afcb4fb2144dba901258917f8c4f022406e52e043b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3XGAC6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCiWFkx0JRwPZBKDFnlgKKylpXLZ4qqY8T9ZGIi6INmwIgTWfruyj3RY4PmxxPP2TiGbtlgNsFyN%2BNWDYT1Bxt7Eoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDG%2FhKEpUqKq1wyac8SrcA6rKZrB%2BByC8JckGV%2BDYA0c3TMM5enVg9TIjbLqDfQY8XgjTALgr0TYqOsabRJaQ1tSVyOrXTMqMGi2DevAH1z%2FOBym%2BO%2BorxiZbVYS0g%2BjswORJ5WKb4GjHien3K2I5gQMS%2B1CoNzJgJTVxYq%2Bv0HcLeWfl5xh1QiRsy5hh3w8f9MoO%2BGatU40gr0WZ4iKBy2PHW8rJ9KZfy%2BaEYd9Q7rrvar7CDAMEH6%2FZ2hZYrnuKvC9A4NIVJ7lcVYSCbwFZfz5JLEwwyi3wzDNMh2gCGuDAQ2AsIKggrUT3I5xTU3s3BjBkys3oZ2sjSuwhx710obn0YIpI7z6oF42vyJ0%2FviorZQ5nI7wWi6rHKN8TMKPoFUJeG3WntwKg8hH4gYipf7tJgV1khbbTmW04NDWC8mOGAyfqW8cc64rEp0WI3tiRdjwb8z5DvbH4jlGLaqcq8RnLijnTUQhE%2BG7UXH1XRFhBibKaoq%2BY8ZZEe71oCrLzlvjAJ4Cb6o2j9JwC%2BopD5M1OBioopWCeB2s7GT7XaG8%2BmCSKZJwz%2FjxIbEbbSG7r23ktJKYg3VstaYBk7oXer0WKiqOLAAhQKhZo3kZfMNJIzLI9LjHfjOEIGnl6%2FlUvu2kOjMNBBZxqnXejMPfpy8kGOqUBQSlv%2FALs05wPNSqTM04HiALvS%2BD9O8BRz6XbvrIu8tX07QtJw195pqlpIkT9XJ03Ww9YRyJbdCWjsiD6dUUOYDzlmSV%2F6bk3yNXJ%2FNhwNafOwLBiDfYZXnHIdhhQaUEgtoxFj%2FCtiCXH3F%2BjIfvx0j0oJusDJRFeAovyzTiflsMW8N4tuNx5ogmGYmED79NgXZHM%2BV7H%2B6ryAtNuexQ6QusbtnGC&X-Amz-Signature=3669985824919b71f357c350126bcf3847dc5a1d20afc5f4896e617df9081761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

