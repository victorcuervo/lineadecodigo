---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M5AME2C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDlMn4VhE1OYTRIdCeOoEWauHTa0RxpEbpGxSNa1gtoKQIhAJ5YuLFghXPM9xQ6%2B4J86ngGy0AmyrzmCX%2BafIy4uZJNKv8DCDkQABoMNjM3NDIzMTgzODA1Igwb9tGSWDX4VefDzaEq3APsVUG45Fnt88yMKDL%2F8NEGJcZPSR1%2BoiB%2FxgWjGxSDLFMctYD%2FlRFoxXDahads7r8jndZo1QfxmIVbb0QxdZjpCYSmkgP3oi8sstkUYK%2Bz9%2FrrFObq5yWSy7KM4B%2FsTKf37xWx3XTlr1sx49Q9SusCv9GnRjqTmpNlky7hV%2FCV7JbuuPnQEDqggSKyQZB5InirUezS5yWseWYuYww%2Ffn65ctZ%2B1Dtrost4fOtrPpnIh25qtDhgjuMEVT2pj4w7RWDTFONfeSdASv9QZnAJgFiQSiDFKcyGyRaFJoY%2BIhgskWZ4BHkSaPmDQrSJ%2By5wLDQwF4H8bS%2FfXu3SE%2FziDnOcozNZNIMCeo6kpZ6NsttC1rx7m0zLdy8e6CIGeJ605nKR8WPkIImZAq%2B%2BXK1ItxzhvFNTSdO3sZ6wYfZUht3BVYgBtv%2FJZwy0CjRwcugg6wGEJEY2KwSfKjzYEJTL0S15RZgmfsG3DOcGAFTs6fIc3qpQLSIItLDEUBr1zZev9sB6%2B9NwBViHKZjYWgkCZ6Y%2FtT6yy9BH%2Bp3TSKfo6VZ5eZCPVXhIwbcTxIsn0rIhl67E%2FIcFntkNTXPmriAQV1NQ9rGuVsaMywuiJzJoYxIAB%2FWdb27SDCw3GaexPTC7lcPJBjqkAYiefXg5mf6NjbZ%2FVsfElAuzx3MQor2QhXhJ6DLtUJS6vvPzUEoHPbT6hv6kn0Gz%2BnBmGhuLXnmiMTLxcI7zqAo31Wzz%2BP1HaPNslPojXcastEMYP9mw%2BQOS1vAmtvW514nU8E3rPFsu6kwLndbU1vU7rdo7jbL0FI5IY0p0ArlZXu6cUSavGxTQEdbQ70hzpdO8gz1L6l1UrF9seftIu1qAV5nR&X-Amz-Signature=13a09ce8e317f636acc8727aa5488da3e89f1f8480d87c60be0f146cc856a79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M5AME2C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDlMn4VhE1OYTRIdCeOoEWauHTa0RxpEbpGxSNa1gtoKQIhAJ5YuLFghXPM9xQ6%2B4J86ngGy0AmyrzmCX%2BafIy4uZJNKv8DCDkQABoMNjM3NDIzMTgzODA1Igwb9tGSWDX4VefDzaEq3APsVUG45Fnt88yMKDL%2F8NEGJcZPSR1%2BoiB%2FxgWjGxSDLFMctYD%2FlRFoxXDahads7r8jndZo1QfxmIVbb0QxdZjpCYSmkgP3oi8sstkUYK%2Bz9%2FrrFObq5yWSy7KM4B%2FsTKf37xWx3XTlr1sx49Q9SusCv9GnRjqTmpNlky7hV%2FCV7JbuuPnQEDqggSKyQZB5InirUezS5yWseWYuYww%2Ffn65ctZ%2B1Dtrost4fOtrPpnIh25qtDhgjuMEVT2pj4w7RWDTFONfeSdASv9QZnAJgFiQSiDFKcyGyRaFJoY%2BIhgskWZ4BHkSaPmDQrSJ%2By5wLDQwF4H8bS%2FfXu3SE%2FziDnOcozNZNIMCeo6kpZ6NsttC1rx7m0zLdy8e6CIGeJ605nKR8WPkIImZAq%2B%2BXK1ItxzhvFNTSdO3sZ6wYfZUht3BVYgBtv%2FJZwy0CjRwcugg6wGEJEY2KwSfKjzYEJTL0S15RZgmfsG3DOcGAFTs6fIc3qpQLSIItLDEUBr1zZev9sB6%2B9NwBViHKZjYWgkCZ6Y%2FtT6yy9BH%2Bp3TSKfo6VZ5eZCPVXhIwbcTxIsn0rIhl67E%2FIcFntkNTXPmriAQV1NQ9rGuVsaMywuiJzJoYxIAB%2FWdb27SDCw3GaexPTC7lcPJBjqkAYiefXg5mf6NjbZ%2FVsfElAuzx3MQor2QhXhJ6DLtUJS6vvPzUEoHPbT6hv6kn0Gz%2BnBmGhuLXnmiMTLxcI7zqAo31Wzz%2BP1HaPNslPojXcastEMYP9mw%2BQOS1vAmtvW514nU8E3rPFsu6kwLndbU1vU7rdo7jbL0FI5IY0p0ArlZXu6cUSavGxTQEdbQ70hzpdO8gz1L6l1UrF9seftIu1qAV5nR&X-Amz-Signature=5bf0ffa2797ae4a35475a58c78a55245e7c9db33adaee9347f5579fcc570af93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

