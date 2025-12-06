---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPU7ZUCQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7qkMV%2FkfsoSZQ%2FvmT68Yxn4zkbIf2PN6Xfx5i1jVuYAiEAlMXM6tLMPY%2B04XVr8KEV4wX7mmDQasJegiXE4Phy%2F9Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH%2FcKHQXChrN5wEwGyrcAxt4copVIgKBRT%2B8uofJgW12OPjfVB3FJ6AJkv4wn8%2FSVoVYTjAAzjgeQqcKCbEGswQpP9AwktXu56DP7JFVHFDTfWEQk5cr0HiK2XAmzttKiId9T1M6Ua5C6hkUU97D07dLjxJCnyRKxs1uOxyn%2BpVFbJ8XLnNIGYgRpnAwBSeEmvL%2Bps7h5eeL7pjzrJtfqJBjxvWwJzP4yw2EGk9UviBQtIu9VXsmkY5W%2BSTg0ggeGuW5XrbH0REpndsi2BP74LX06BDq0YOhbRZKqB0tn0mXrobKJNU6tG9N4gQZlxUx3j4Z4eZeJ4B7rHRBP5oQdNT%2BQtkOs8u3%2BG%2Fp4JLFrRN6bQoD3qDcTVsOQ%2FELOj4lxivp5Gqu1VoMsDPaq6WHXYXzhz7VcOZy3OqXkxlraZXH23baFqjz7XqwpuHgeXcZWVmk%2FY%2FcDp2TXMFF%2Ba44VEofN9L4odD5mC46lCshyGxqNzvTny7FrTx59xNzYYcNxkQP3EBHuFwaKUNtqM3mSdol7QGxdasQzUPmRKaRKs2H9h%2BnB1qq2H6E4%2Bc5tUQfchQiTcDHSyZPJkezUlegEBu7YsaiIO8TBet48ilVIQ%2Byf7I1ieM2g5GXPAelTzrnnVPcqwwnU902A2Z3MM6m0MkGOqUBG0UaHYqyGqGknHKEGLzcP%2FJYotATgpI1cg9tsKXODtUm5sNDLWhNeaw0ZKfYvsTQrnD3t%2Fq%2Fj0%2B%2FGePfNMov%2B4WG19RCjr16Ufm3joCXHNFbyXb7QiAllXJYdy5fKaTaBzSZmg3xRZevbppR%2BO0gbufDhhiQ8gKjE2igsX0cLm0HzU4qyM3fz7H6lkYm6MPMt4VPQOWOx0HwZcwSut1m67qhqxcs&X-Amz-Signature=d3ca96d00da157e74a9031aff0afc1ce6817cb624548129ebea71d139f5e0610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPU7ZUCQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7qkMV%2FkfsoSZQ%2FvmT68Yxn4zkbIf2PN6Xfx5i1jVuYAiEAlMXM6tLMPY%2B04XVr8KEV4wX7mmDQasJegiXE4Phy%2F9Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH%2FcKHQXChrN5wEwGyrcAxt4copVIgKBRT%2B8uofJgW12OPjfVB3FJ6AJkv4wn8%2FSVoVYTjAAzjgeQqcKCbEGswQpP9AwktXu56DP7JFVHFDTfWEQk5cr0HiK2XAmzttKiId9T1M6Ua5C6hkUU97D07dLjxJCnyRKxs1uOxyn%2BpVFbJ8XLnNIGYgRpnAwBSeEmvL%2Bps7h5eeL7pjzrJtfqJBjxvWwJzP4yw2EGk9UviBQtIu9VXsmkY5W%2BSTg0ggeGuW5XrbH0REpndsi2BP74LX06BDq0YOhbRZKqB0tn0mXrobKJNU6tG9N4gQZlxUx3j4Z4eZeJ4B7rHRBP5oQdNT%2BQtkOs8u3%2BG%2Fp4JLFrRN6bQoD3qDcTVsOQ%2FELOj4lxivp5Gqu1VoMsDPaq6WHXYXzhz7VcOZy3OqXkxlraZXH23baFqjz7XqwpuHgeXcZWVmk%2FY%2FcDp2TXMFF%2Ba44VEofN9L4odD5mC46lCshyGxqNzvTny7FrTx59xNzYYcNxkQP3EBHuFwaKUNtqM3mSdol7QGxdasQzUPmRKaRKs2H9h%2BnB1qq2H6E4%2Bc5tUQfchQiTcDHSyZPJkezUlegEBu7YsaiIO8TBet48ilVIQ%2Byf7I1ieM2g5GXPAelTzrnnVPcqwwnU902A2Z3MM6m0MkGOqUBG0UaHYqyGqGknHKEGLzcP%2FJYotATgpI1cg9tsKXODtUm5sNDLWhNeaw0ZKfYvsTQrnD3t%2Fq%2Fj0%2B%2FGePfNMov%2B4WG19RCjr16Ufm3joCXHNFbyXb7QiAllXJYdy5fKaTaBzSZmg3xRZevbppR%2BO0gbufDhhiQ8gKjE2igsX0cLm0HzU4qyM3fz7H6lkYm6MPMt4VPQOWOx0HwZcwSut1m67qhqxcs&X-Amz-Signature=241e372afc510931317d3a538fb9051c6b3b94d98ec5647aaa872a528f5929b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

