---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUSLOEJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHh2VlBGdyJMLDkDQ9YFRE5AsSqnqo6A6N4I9afqmfh%2BAiBmWO01SlACzT3o1KOGF6B4w5lBp2eWcwPcbwuDW643jSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM%2F7iAyCS1nUMkbz9bKtwDOotcnckUd7Gt7ddAMgAaAdGfnfzRJn4PjIVR66gJjz8zePPGIyFz0%2BA7tNX9cgJ3XdimL48ovAnsVsHbGWE%2BO78ewnJtXH1iR1OcDNoxit5NWqEDgj6oA6IMUrxjNayFqkgoMI4MT7U5DrO8F%2FuXoQFbpUAIcCthGSHx3yNS0DjcMHD6laxL0pjjJEWAAl8VZhQ3PSWBkxTujhkwmSZCe0wV9F5Iil9ReJTPS7iZdJuv9%2BGPkqWt5EY1aHwHPF%2Fd0BTPaqaf9VM1q7LYKeTuQPhHTMSj2mykDwVd%2BBHZJphbtTACkttVV%2FFu064zvnonl1Hy4DQqVPxhwV6E4vLbzlkxGnz%2B1FMc8uKzEs6YE5n2H3qAO0LFvYbo%2FNHhuk%2FYdJJe6B80TXu2y4HmKn9mDjuc8yFl47BE9VJJoTErQ0mev%2FkWUk%2FuyrxxbdB41IS8jRnCiR3vEsThJLuD4Z1GSlgWm0y47SO1V6DMrtfMqbDyeGNGWdHjYKGd%2BrR7VW5pkMngdQUC5lBFi9TAmItoSj4fRBS1wImDXa2bNyt7dWkN6JmxCcEswlMdM2FxH9QBf4%2B99znbehRUbN8shPKiJtcOlD9Zk3yx0R7HYMO6ExAGFBgMfPWRwFRNBn8wkZXDyQY6pgG8jN3POfApBsrd9q0U0eikDt7ByEJij1djnEOfnZDldjgDYwntIMxJOu6c0EHKrHG0kRFSmJaK3xmg1WID6rq%2Bq2fqguB7Y34CVRBE0Ek%2BzT3y%2FLoTg5HAOSx0AL1nL%2FMBefj8v7Wzebzxz6qi7iPDADzolOhCvzxqBcr%2BNSke4AHf%2B6aMKSP5Tm86NnYDYQD6vTn0szmifO7A5ykI0LeK%2Bietul55&X-Amz-Signature=aceffdd8acf195197ebd223ac544425dcd1987ae237853682cd864afc46bd1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUSLOEJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHh2VlBGdyJMLDkDQ9YFRE5AsSqnqo6A6N4I9afqmfh%2BAiBmWO01SlACzT3o1KOGF6B4w5lBp2eWcwPcbwuDW643jSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM%2F7iAyCS1nUMkbz9bKtwDOotcnckUd7Gt7ddAMgAaAdGfnfzRJn4PjIVR66gJjz8zePPGIyFz0%2BA7tNX9cgJ3XdimL48ovAnsVsHbGWE%2BO78ewnJtXH1iR1OcDNoxit5NWqEDgj6oA6IMUrxjNayFqkgoMI4MT7U5DrO8F%2FuXoQFbpUAIcCthGSHx3yNS0DjcMHD6laxL0pjjJEWAAl8VZhQ3PSWBkxTujhkwmSZCe0wV9F5Iil9ReJTPS7iZdJuv9%2BGPkqWt5EY1aHwHPF%2Fd0BTPaqaf9VM1q7LYKeTuQPhHTMSj2mykDwVd%2BBHZJphbtTACkttVV%2FFu064zvnonl1Hy4DQqVPxhwV6E4vLbzlkxGnz%2B1FMc8uKzEs6YE5n2H3qAO0LFvYbo%2FNHhuk%2FYdJJe6B80TXu2y4HmKn9mDjuc8yFl47BE9VJJoTErQ0mev%2FkWUk%2FuyrxxbdB41IS8jRnCiR3vEsThJLuD4Z1GSlgWm0y47SO1V6DMrtfMqbDyeGNGWdHjYKGd%2BrR7VW5pkMngdQUC5lBFi9TAmItoSj4fRBS1wImDXa2bNyt7dWkN6JmxCcEswlMdM2FxH9QBf4%2B99znbehRUbN8shPKiJtcOlD9Zk3yx0R7HYMO6ExAGFBgMfPWRwFRNBn8wkZXDyQY6pgG8jN3POfApBsrd9q0U0eikDt7ByEJij1djnEOfnZDldjgDYwntIMxJOu6c0EHKrHG0kRFSmJaK3xmg1WID6rq%2Bq2fqguB7Y34CVRBE0Ek%2BzT3y%2FLoTg5HAOSx0AL1nL%2FMBefj8v7Wzebzxz6qi7iPDADzolOhCvzxqBcr%2BNSke4AHf%2B6aMKSP5Tm86NnYDYQD6vTn0szmifO7A5ykI0LeK%2Bietul55&X-Amz-Signature=b2ee6caf9ee93d875c5a9d58a04171e5b4143eb047ed09f9207996ee30d8f2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

