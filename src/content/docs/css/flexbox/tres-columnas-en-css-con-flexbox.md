---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64XH7QC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOnap%2BwhhZMDZ0iJeG18xTDvnChtzUJiEUZb28pS%2BNwIhALnEENn8Il%2FCD7OH%2Frj0G4LP%2BvsyRQx2gUteKfGUwY%2FlKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Zn9G0bPw2Nno67oq3ANFQLRk0YMLUEWIGiyA%2BemYvbCyKXe0fpqLNMTAWtoMGNFXd%2B9ThlgxdF7686rWvLLt7iTpTNU4mWjbHXv1sRYHo1al45be5ACLVflQBsxNIJ4vZFVlDYncoYyqxNc1v4JzXl6FrPQ1MMP5KS57d2tAgKeBg3zj5%2BlzDGvvbr95QtQjyre%2Fz1aClTS42f0og81h3rsxm999xNwUjXfAH7zZB4qEAuKRlGR3eQGd8uLKmbtj%2F%2B9WGIXahH%2F8UW0Z4lWIE3JeAgN%2Fwua7GteFqU8tHPY024VaVPRTeuY3yo235Ph14w9hX8GX%2BBo5SYXjc5SoOT5xF%2BmFs6x2jPtKh%2BdT7pnQC9XJLUOdbzjUa2Aq6WRIu6uLTuSusT%2BXcuUcxotOBjJOvdtaV69x3NaC1AwfOEpWKkqjFuzTSSW0g%2BGy7C2pVW0jFa53nYDNEEaD2xclQSVzRbQD3dVBpj9LFXVS%2F4F7SAJ6ACaWNDq3tYG%2BD5yJYhTsGVxYEY5Uyd5zAadjm3B7eZ0Bzu3AuzFO1t7RHurs2jYTvMoJE8UbYnKVGZh39pZJfTmHnyc%2BVWKQiKqVqXV7H8WLLdS%2B6U71dIO161pfAAK3xlFh%2FkuQwW9mrmP%2FUXp6Z33JI%2FDqDDDKmNTJBjqkASqTFKZroSHdeMxGNpTcIDSDfflmm9Zr26J3i5Fdjhsl6ACvaRPNUHgrSC2ben18%2BcmmybcGWDiNMa%2BfRn%2FtcrjLEkfL49YOn2AgmD4CAQKfV%2FxfbwOxHFv%2B5eYCIzCUoHU5%2BfuE31EkxlG1WhZlikZWwb%2B7gxWuUZ%2FpCMisPZbVLJPY9aOWaaXwm5VApkw2Bkuyd8x6EnIXOMUCZaOrf9HlQKmR&X-Amz-Signature=897c9c0e7c4c10830376cac4004040c77edef85962354a0aca0bb3e331f92fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q64XH7QC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOnap%2BwhhZMDZ0iJeG18xTDvnChtzUJiEUZb28pS%2BNwIhALnEENn8Il%2FCD7OH%2Frj0G4LP%2BvsyRQx2gUteKfGUwY%2FlKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4Zn9G0bPw2Nno67oq3ANFQLRk0YMLUEWIGiyA%2BemYvbCyKXe0fpqLNMTAWtoMGNFXd%2B9ThlgxdF7686rWvLLt7iTpTNU4mWjbHXv1sRYHo1al45be5ACLVflQBsxNIJ4vZFVlDYncoYyqxNc1v4JzXl6FrPQ1MMP5KS57d2tAgKeBg3zj5%2BlzDGvvbr95QtQjyre%2Fz1aClTS42f0og81h3rsxm999xNwUjXfAH7zZB4qEAuKRlGR3eQGd8uLKmbtj%2F%2B9WGIXahH%2F8UW0Z4lWIE3JeAgN%2Fwua7GteFqU8tHPY024VaVPRTeuY3yo235Ph14w9hX8GX%2BBo5SYXjc5SoOT5xF%2BmFs6x2jPtKh%2BdT7pnQC9XJLUOdbzjUa2Aq6WRIu6uLTuSusT%2BXcuUcxotOBjJOvdtaV69x3NaC1AwfOEpWKkqjFuzTSSW0g%2BGy7C2pVW0jFa53nYDNEEaD2xclQSVzRbQD3dVBpj9LFXVS%2F4F7SAJ6ACaWNDq3tYG%2BD5yJYhTsGVxYEY5Uyd5zAadjm3B7eZ0Bzu3AuzFO1t7RHurs2jYTvMoJE8UbYnKVGZh39pZJfTmHnyc%2BVWKQiKqVqXV7H8WLLdS%2B6U71dIO161pfAAK3xlFh%2FkuQwW9mrmP%2FUXp6Z33JI%2FDqDDDKmNTJBjqkASqTFKZroSHdeMxGNpTcIDSDfflmm9Zr26J3i5Fdjhsl6ACvaRPNUHgrSC2ben18%2BcmmybcGWDiNMa%2BfRn%2FtcrjLEkfL49YOn2AgmD4CAQKfV%2FxfbwOxHFv%2B5eYCIzCUoHU5%2BfuE31EkxlG1WhZlikZWwb%2B7gxWuUZ%2FpCMisPZbVLJPY9aOWaaXwm5VApkw2Bkuyd8x6EnIXOMUCZaOrf9HlQKmR&X-Amz-Signature=1ae735f8d5289555c8d037e67cd033d8bbb043eab292a91f3d2f1be7db445d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

