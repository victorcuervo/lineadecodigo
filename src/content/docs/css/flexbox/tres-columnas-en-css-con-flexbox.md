---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIVE4UKZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYiNJGiC4Gltx8I097%2Fj5cO6AJ%2BUByySieT1%2BwK6xz5AiB0HMvdn2M7jZhHL2PGfx%2FqVf9rMc2RNKC2gDTL3LfTJir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMcIo9xCuanC7O8O48KtwD4xXZIZSUxSUJrDBvJ%2BTNYBTYmvgeQUhWTZiq7e9gTKMq%2FgR4aN8PR3CcLMt07QHZKFRnbQ3YITjm0W%2FJwLzubDC%2BGP0c1GKT5no7NsZ8JviLczyBaI86lC%2FkWSWcZGljdPjhgHdME8EiNEfEuxO0LGYrRQTZVpxx1tUQSHqezqb54H9GBdmP%2FVL7ipZLRht9XDd%2BEkwJ2f2qXp4AOuP6ZMwdtArLb3izoWF8s8KLmpxlFlNGpCVW%2FxzdxeQn%2FeK0XTkUQEe0B5BJ6A3JdBk3u7u5rR%2BwZYrOx15bdP9pvyELuBFt3HvF2WoDS%2BAikRn0E7JknnlyG7kPuVWfkp%2FhXfvS5MypxDe%2FmpcNIX%2FfTgIO%2FMaOFUpAiiitf13jowyjlDRTnkgUqEz60cCn%2BGbyBgpMvR6UEeGdUzYVzCKzTznk7ojVDF%2F6SsFAwXlzjmvXe4VlPA9f5BuEQR%2FryYXasoukDa8%2BTiOBuTp88Bp1Uybum4RhdKjmmamuon%2FRTqtNWyyjc6RK9H5Tm5igRdfCv7tpoegtJONX4RiXpkzpAD6cUSbWBH59iu1QTGBOVO7SFbozNs%2Fh3Uust1N7%2FSlx0BzkmSgcMqr1i1IlvXZuZxgLusDCVSDzQRyLRnkw7dvGyQY6pgGdPdJ%2FWz47iG0pMj9e0rV9RmzekNh1QF0MEwnZuq3wh7BlO8UcQfQn4ZSyIYPoYjA2G%2BvWMJHbZjZQpxjFwLd0cxeNHT9KyrlNhoGgTuSsBaIwAkTmqNOy1vcULjJm0QzgemEGqUKbbpb9KXqas01kH9lFklQGpHzPVA67JRdk41d81Djfxj1qau%2FAKj20w9QV34yUNwhHvs1oYAMQSLoUpt9WhFKM&X-Amz-Signature=514bcbb445913578bb2761afcff26c4a1f092f1097d4709647fab6d4bc7bd26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIVE4UKZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYiNJGiC4Gltx8I097%2Fj5cO6AJ%2BUByySieT1%2BwK6xz5AiB0HMvdn2M7jZhHL2PGfx%2FqVf9rMc2RNKC2gDTL3LfTJir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMcIo9xCuanC7O8O48KtwD4xXZIZSUxSUJrDBvJ%2BTNYBTYmvgeQUhWTZiq7e9gTKMq%2FgR4aN8PR3CcLMt07QHZKFRnbQ3YITjm0W%2FJwLzubDC%2BGP0c1GKT5no7NsZ8JviLczyBaI86lC%2FkWSWcZGljdPjhgHdME8EiNEfEuxO0LGYrRQTZVpxx1tUQSHqezqb54H9GBdmP%2FVL7ipZLRht9XDd%2BEkwJ2f2qXp4AOuP6ZMwdtArLb3izoWF8s8KLmpxlFlNGpCVW%2FxzdxeQn%2FeK0XTkUQEe0B5BJ6A3JdBk3u7u5rR%2BwZYrOx15bdP9pvyELuBFt3HvF2WoDS%2BAikRn0E7JknnlyG7kPuVWfkp%2FhXfvS5MypxDe%2FmpcNIX%2FfTgIO%2FMaOFUpAiiitf13jowyjlDRTnkgUqEz60cCn%2BGbyBgpMvR6UEeGdUzYVzCKzTznk7ojVDF%2F6SsFAwXlzjmvXe4VlPA9f5BuEQR%2FryYXasoukDa8%2BTiOBuTp88Bp1Uybum4RhdKjmmamuon%2FRTqtNWyyjc6RK9H5Tm5igRdfCv7tpoegtJONX4RiXpkzpAD6cUSbWBH59iu1QTGBOVO7SFbozNs%2Fh3Uust1N7%2FSlx0BzkmSgcMqr1i1IlvXZuZxgLusDCVSDzQRyLRnkw7dvGyQY6pgGdPdJ%2FWz47iG0pMj9e0rV9RmzekNh1QF0MEwnZuq3wh7BlO8UcQfQn4ZSyIYPoYjA2G%2BvWMJHbZjZQpxjFwLd0cxeNHT9KyrlNhoGgTuSsBaIwAkTmqNOy1vcULjJm0QzgemEGqUKbbpb9KXqas01kH9lFklQGpHzPVA67JRdk41d81Djfxj1qau%2FAKj20w9QV34yUNwhHvs1oYAMQSLoUpt9WhFKM&X-Amz-Signature=8cfe872d0d0b0614463c0774795eff029c6aad74e92563ecc682c299dd4b9b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

