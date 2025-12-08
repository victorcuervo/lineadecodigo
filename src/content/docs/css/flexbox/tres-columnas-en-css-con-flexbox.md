---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSY7PLPV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTt7HaMAJGYZqbdI70sVHpRQkGS%2BKGhclTDs2ETWgpzgIhALmwHoH4vKxrh8zSuWoqz7hT9VtaaLcdsfOd2e2bGvtHKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCKHbrlqvUDcSS0Z4q3AMuIEJ3VMIZtlNFCgZJH9vntN3p3xVaOLMc6UpSsn80fxV26zzl768EfaJbhQh%2BnEwrCtiYp%2F9v7KaVQkayHY4ovgpiktzfF9PqC0I0xGnV3IvnsM4oDJwqWrnZi7%2B07GIN8fKz6qD4FKBFUmmMpiWm69wwKDfkRyJQWL4T3Wd8UH6nK31wugpLjHV1QwoNmMPzHPrfd4z4XPcRUVOpYNzoNbNPMA0VYJHLvosr01JI8eDLYLxMxDP7259F%2FkTmLw3cg9ekqhWlTrJonBAlJFG9SkixPG%2FgUG%2FM2GAYQsFQbIooHMzyxF3M0SPDSF%2BDw1OqxsxHS571rr0VDNjS9aoCj4gwyfE61B77F1%2B6EOjzEMb2yaIFaXJYi9%2B9oM%2FfBfaQzx0HuNk8BfZObFOu2nfAx4SrktLR34FaS0QQK4fUa09T5MP0FZcC5ddxoV9jjISGyWqKgL%2BqERYhpcBZFlxNe57rOMzbixjmBsiSTsuU%2FfROScuFXxSb2BR22IHkiCO6%2BeEzbUGR0ucszgPkvqtEH7GhSxUuOOQDqY9uGtGJZSlqZwwRCCysss8R2nAXtkkPvc%2B%2BrTmqG5jX3JYw0AJAakXHfR5B8MY3q505vP4fcPi2yxEU3CLwaJjdMzCb7tnJBjqkAbK7mlryBkf5vvnDS%2FK7xOrfz10PcvkWFeNgGxSl9uncTVxEimW%2F5hen36ptXUqU%2FljqZz2a%2BJfPGenQZt5Jq9iCOFuIpqRZWER7Bh30PMB%2Bh%2B9gWGopYoI0vCtwr%2ByS9XF7K0Gkv7rrWiYSM3TW4KvUjzT%2FuSK4ybdWRmD3nOwAM4sNoY5S1JjfPf6aZkUHPoNH5JrqPNAfc3%2BC06%2BgyyQa1U2%2F&X-Amz-Signature=f56c6f4e58f9dc505de13cc39d03ecbd216b26cf33fbb18d41c302cda75a1b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSY7PLPV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTt7HaMAJGYZqbdI70sVHpRQkGS%2BKGhclTDs2ETWgpzgIhALmwHoH4vKxrh8zSuWoqz7hT9VtaaLcdsfOd2e2bGvtHKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCKHbrlqvUDcSS0Z4q3AMuIEJ3VMIZtlNFCgZJH9vntN3p3xVaOLMc6UpSsn80fxV26zzl768EfaJbhQh%2BnEwrCtiYp%2F9v7KaVQkayHY4ovgpiktzfF9PqC0I0xGnV3IvnsM4oDJwqWrnZi7%2B07GIN8fKz6qD4FKBFUmmMpiWm69wwKDfkRyJQWL4T3Wd8UH6nK31wugpLjHV1QwoNmMPzHPrfd4z4XPcRUVOpYNzoNbNPMA0VYJHLvosr01JI8eDLYLxMxDP7259F%2FkTmLw3cg9ekqhWlTrJonBAlJFG9SkixPG%2FgUG%2FM2GAYQsFQbIooHMzyxF3M0SPDSF%2BDw1OqxsxHS571rr0VDNjS9aoCj4gwyfE61B77F1%2B6EOjzEMb2yaIFaXJYi9%2B9oM%2FfBfaQzx0HuNk8BfZObFOu2nfAx4SrktLR34FaS0QQK4fUa09T5MP0FZcC5ddxoV9jjISGyWqKgL%2BqERYhpcBZFlxNe57rOMzbixjmBsiSTsuU%2FfROScuFXxSb2BR22IHkiCO6%2BeEzbUGR0ucszgPkvqtEH7GhSxUuOOQDqY9uGtGJZSlqZwwRCCysss8R2nAXtkkPvc%2B%2BrTmqG5jX3JYw0AJAakXHfR5B8MY3q505vP4fcPi2yxEU3CLwaJjdMzCb7tnJBjqkAbK7mlryBkf5vvnDS%2FK7xOrfz10PcvkWFeNgGxSl9uncTVxEimW%2F5hen36ptXUqU%2FljqZz2a%2BJfPGenQZt5Jq9iCOFuIpqRZWER7Bh30PMB%2Bh%2B9gWGopYoI0vCtwr%2ByS9XF7K0Gkv7rrWiYSM3TW4KvUjzT%2FuSK4ybdWRmD3nOwAM4sNoY5S1JjfPf6aZkUHPoNH5JrqPNAfc3%2BC06%2BgyyQa1U2%2F&X-Amz-Signature=5e4e0a2954eef27e4ef2a78f7ba7e6a735cc3d60570b9e15ffce04778273b253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

