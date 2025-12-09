---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHXUWQ6E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHN3q2I4HmqCWyF9s4L3EiIgE1opxnJUazp4M%2FSutE93AiAKhM8wuLFgBrkBVbA%2FYKL%2FewHQxJ34v%2F34BRA2W3yWNSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrsl%2BIbnnhuXPy6PwKtwD9oQUECuYuPbpQum%2BR06P5lDsfWDplmvN7xPmMpKZf9LkiUA7IFdLfkuveYve2NjJtSQcYHHYyAjY0DGANMGHCUHgIzxB2iGpCi%2FTN4FZVt8JFGVgYSW33Ty1gm%2BQCfeED2aoXRmbhhimk7CSE6WXC9IKkr90nmRPkY9S3u%2F5c4GnoYv0GM4GGZe62%2FNgrLNgrq8xJismEKCSzPP7IIC5v0mPO6nyLVR7JPAGOxkN%2FgPR69%2Bkf0GqQeDtm7Ku%2BY6QiXJfGvwk%2FbBvgo2nKb9nvpy1MiuBczNC0qGzU6jNAWghUvSIbL9RI1a%2FZ6IByy12cccJ%2BzSRjrbB86jjXQBpYDK5ns9yHTsbGeQhZnFIkOjM3f6uuWkxQM3V429%2F1Kmtib8RtQTDWeW6D0EckOkoJrjgy8lqG3aG38BTwkA0%2F%2BMn6b%2B%2BPPv7pqbhn90W8X10zyv0q9wz59tJa9GO07YGyIzo8ztwLf%2BcZgvHlawovHBS21pokP95Lh8ppZ3%2F8wB05WUBl0N8dO46FAQye%2FgESsezoCxZu6tR79jHiNtHkWijrp7a1FQcSEdCaVIgpVBJI34iGxgyItp8V1BRVGSIsClK0mPWgJ%2FT%2BwdIKHkoHu7T3oOitF1CeEvttmsw6%2BXeyQY6pgHSefoLkTG2Og%2Fw3D%2FcLjx7wopjHVaMQemqxhA9yyXFv5DXaBF4UYpPZx2FKSKFVK%2FQ3QeUhEy0X0RkWCGFbQ%2FCWB9GSTQGPHkb50HKl0SYi7IuL7CHTnPYwbKJQNareQevtc9OXPITODD65fD3PzmZ9XFFdSj9cIdRzO9L98TYS5LE7z2jzSvjxdhozChOEKfehAfc15vzMHHJkF0YudOQdSkZ8GDx&X-Amz-Signature=c6a46094dd64ad331f79c3de8a0be55242bd72384ec0b91114efe89690992542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHXUWQ6E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHN3q2I4HmqCWyF9s4L3EiIgE1opxnJUazp4M%2FSutE93AiAKhM8wuLFgBrkBVbA%2FYKL%2FewHQxJ34v%2F34BRA2W3yWNSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrsl%2BIbnnhuXPy6PwKtwD9oQUECuYuPbpQum%2BR06P5lDsfWDplmvN7xPmMpKZf9LkiUA7IFdLfkuveYve2NjJtSQcYHHYyAjY0DGANMGHCUHgIzxB2iGpCi%2FTN4FZVt8JFGVgYSW33Ty1gm%2BQCfeED2aoXRmbhhimk7CSE6WXC9IKkr90nmRPkY9S3u%2F5c4GnoYv0GM4GGZe62%2FNgrLNgrq8xJismEKCSzPP7IIC5v0mPO6nyLVR7JPAGOxkN%2FgPR69%2Bkf0GqQeDtm7Ku%2BY6QiXJfGvwk%2FbBvgo2nKb9nvpy1MiuBczNC0qGzU6jNAWghUvSIbL9RI1a%2FZ6IByy12cccJ%2BzSRjrbB86jjXQBpYDK5ns9yHTsbGeQhZnFIkOjM3f6uuWkxQM3V429%2F1Kmtib8RtQTDWeW6D0EckOkoJrjgy8lqG3aG38BTwkA0%2F%2BMn6b%2B%2BPPv7pqbhn90W8X10zyv0q9wz59tJa9GO07YGyIzo8ztwLf%2BcZgvHlawovHBS21pokP95Lh8ppZ3%2F8wB05WUBl0N8dO46FAQye%2FgESsezoCxZu6tR79jHiNtHkWijrp7a1FQcSEdCaVIgpVBJI34iGxgyItp8V1BRVGSIsClK0mPWgJ%2FT%2BwdIKHkoHu7T3oOitF1CeEvttmsw6%2BXeyQY6pgHSefoLkTG2Og%2Fw3D%2FcLjx7wopjHVaMQemqxhA9yyXFv5DXaBF4UYpPZx2FKSKFVK%2FQ3QeUhEy0X0RkWCGFbQ%2FCWB9GSTQGPHkb50HKl0SYi7IuL7CHTnPYwbKJQNareQevtc9OXPITODD65fD3PzmZ9XFFdSj9cIdRzO9L98TYS5LE7z2jzSvjxdhozChOEKfehAfc15vzMHHJkF0YudOQdSkZ8GDx&X-Amz-Signature=aa5db0fb61cf7b9011d88e036082c141b5b3925f2ea72a5ca9b4280384a4e8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

