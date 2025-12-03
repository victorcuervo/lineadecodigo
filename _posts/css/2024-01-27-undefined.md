---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RBVGID%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDv7VIXhisUapxpxwm352GiF19OZjkNa1I9lINcMtWvnQIhAINjYfYVcfNPNYi6o6kKFc0m4kbzLfAfxm2u7an%2B7rBIKv8DCDEQABoMNjM3NDIzMTgzODA1Igw6rWwe6FzWVvyYphkq3AMXEqDdK180Gw1cGdnKziffukdrKSibcA1s7oIgncX%2Fv7eernRQX6qi0H7eBlJmsx1GMi1zOaH0RsEDJ58lfLkxv%2FYm5tleOS11PwQGLw63FwZnKHrMnmXEfebQAwXl3XmrZMujQFmCJ3GXXwd3hZQQdSdXGh1LtMK0hielbel7yC6vPl1v0u3FElkkcHpaPqRHeaSDxYvJb%2Bfo5oN5gs72mvqSe4gloOPYc4xdAmH%2BRwEolGXPRO4ToJlU83eMssLuWE4vFP0SwLeiSpmgmgvRPjplvwp96p6ieAhGtcZN5u7G92uXCuJurdpPbtMIHGCdZGcW3TZcChiYesLlvTB4pwRBII56RUvoSHqvgGCJbaBKf9NzNRFEi1PnKL8GimCZGQnuUyRWeFgiD%2BtOyX54MjyoGsedfprraUMvssgl2A7EuRq2lciIgyOX1b%2BBuxxT2P8zv3Z3%2Ft27%2F%2Fsvcdu2scSipb3XYe%2B4fFsNod8%2BR4m3oqg9Qhtah3Kxuch627NuRQZjDFH8lbOseZMJR8SGZX%2F4hOt91hGMNqlqn2htHz9HME1WFv51m9Q%2B2iGv1IWbqg9pL5l%2Fu59ZvinEQWaRvola4ZEr%2BxeV4y2o8gg0%2FYhwbexFcdybrcSU9DCYwcHJBjqkAeNrDbKTZa3FH%2BP0y9KkW40qubbwUk5r2%2BprujLlYcHnak74AzHDRM6ezWSYUHXf37pruICGts7lfBFl3FzOXKWj7P2bZRtgylEES7X6HEf1fq14coROGU4Z0bfmstjNlWibkHvrCblTlsJiUwECrw5Zmsgb%2FfVQ2R7KkR174b%2B3FiPt9A8InKMWpBvSQxvNaDflj5SVG3wBobvriaXk0RvhsMw3&X-Amz-Signature=81136c070ebc0863397eb4c219f4d14604524a6c7458c292d70b121de78f1b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RBVGID%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDv7VIXhisUapxpxwm352GiF19OZjkNa1I9lINcMtWvnQIhAINjYfYVcfNPNYi6o6kKFc0m4kbzLfAfxm2u7an%2B7rBIKv8DCDEQABoMNjM3NDIzMTgzODA1Igw6rWwe6FzWVvyYphkq3AMXEqDdK180Gw1cGdnKziffukdrKSibcA1s7oIgncX%2Fv7eernRQX6qi0H7eBlJmsx1GMi1zOaH0RsEDJ58lfLkxv%2FYm5tleOS11PwQGLw63FwZnKHrMnmXEfebQAwXl3XmrZMujQFmCJ3GXXwd3hZQQdSdXGh1LtMK0hielbel7yC6vPl1v0u3FElkkcHpaPqRHeaSDxYvJb%2Bfo5oN5gs72mvqSe4gloOPYc4xdAmH%2BRwEolGXPRO4ToJlU83eMssLuWE4vFP0SwLeiSpmgmgvRPjplvwp96p6ieAhGtcZN5u7G92uXCuJurdpPbtMIHGCdZGcW3TZcChiYesLlvTB4pwRBII56RUvoSHqvgGCJbaBKf9NzNRFEi1PnKL8GimCZGQnuUyRWeFgiD%2BtOyX54MjyoGsedfprraUMvssgl2A7EuRq2lciIgyOX1b%2BBuxxT2P8zv3Z3%2Ft27%2F%2Fsvcdu2scSipb3XYe%2B4fFsNod8%2BR4m3oqg9Qhtah3Kxuch627NuRQZjDFH8lbOseZMJR8SGZX%2F4hOt91hGMNqlqn2htHz9HME1WFv51m9Q%2B2iGv1IWbqg9pL5l%2Fu59ZvinEQWaRvola4ZEr%2BxeV4y2o8gg0%2FYhwbexFcdybrcSU9DCYwcHJBjqkAeNrDbKTZa3FH%2BP0y9KkW40qubbwUk5r2%2BprujLlYcHnak74AzHDRM6ezWSYUHXf37pruICGts7lfBFl3FzOXKWj7P2bZRtgylEES7X6HEf1fq14coROGU4Z0bfmstjNlWibkHvrCblTlsJiUwECrw5Zmsgb%2FfVQ2R7KkR174b%2B3FiPt9A8InKMWpBvSQxvNaDflj5SVG3wBobvriaXk0RvhsMw3&X-Amz-Signature=c75ec4ead56323a7ae7ee8757f2e9328eb46040613a1efe2a81da1dd9f8ef096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

