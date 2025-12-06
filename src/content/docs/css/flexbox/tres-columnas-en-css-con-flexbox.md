---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDAENTB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzLpHu9fBSJvAqsa8u1KWRdAl1dMwh9AZBD3eh5BmFagIhALRYMc2hYvgcDvylrN%2Fasr%2BwDgXanYZc2oFzd9p0U0uMKv8DCHIQABoMNjM3NDIzMTgzODA1IgzAH%2B3BKORzLsgk3Hoq3AMTyBkWrLtH3%2FHztF6iR4AMb2ZZP%2F68occl%2B%2BMyZ%2BZNEg6cnKfZ8GQnZSQaxIdFZECYwUn5alpV6f8BiNlG8QglbSh%2FOAAE1iarX7sPxvtluRKHDAQoDBbqlM6AyTr4UFJJjNIipIs4B3B%2FBjAv6dTOaYSXHsUCo2GDNnTOg85JY36cPnW8ufj8TM54BLFMDL9UGYziFOHfiAKM8scGGfj08FpLuVxhSh5ai%2B%2BFF3eiwd4hFq0KRpQKv1gNZbI%2BVw%2FnRARHbx6EJ1rGvxAq2OSx3BVvHyIlU58ms9Ywp0sLh%2F0aNJb9S1cik4Og8JZjdaeJHzjmS7R0NwrvyksbpnBPskCyRUb4tJ%2Bwh5pExSjcYg0jJNZZfi%2BG7%2FPBsNEWluQMxnkry4NiNF0gFkBBok65vzYGiagaJqfP9TBnG8o7kyelyAGZ3HBKCsZh37dM2Nx0%2Bj5OgGOIiS%2FWTjB9cvesCa287WqX1ETvHfXMzWIMFq%2B55gpYmcz0K7IXPhR98NegSa9FuS%2FQHP0dom1h6npVorobpFRKhZjZQ9ooa41nCa9xzGwdK5jGmz28NBQ1ZrqFfMoqPaqk8GOImXvokmh8gF6SF2SuJ9ZbkEJITRn8lxJ8VNdhZdKlElRPvDC868%2FJBjqkAeY15b9Xr25zzh3kgvRQGoXwB9l4K%2BPZS45p8PvLv7398DCyszDcty3GtN%2FfNXGozj3dQo1jZ%2BUUfrxJOJaI4DVb8ad1JzyX2%2FKjPPnhbwwnqvnbIM3MhiTj%2BxVzJstEZMaR0GXqveOzL9X0RZNMleqyCznAtwXpRMHy8OiCcIh8ystzFFI7ptRswr7HNoz11mPaZbj7T%2BwT%2B3XrNTcNatFijZa4&X-Amz-Signature=dde23893645dd25f74e47d6edf2413df45e9ae428e693190e8168caaa0778d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDAENTB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzLpHu9fBSJvAqsa8u1KWRdAl1dMwh9AZBD3eh5BmFagIhALRYMc2hYvgcDvylrN%2Fasr%2BwDgXanYZc2oFzd9p0U0uMKv8DCHIQABoMNjM3NDIzMTgzODA1IgzAH%2B3BKORzLsgk3Hoq3AMTyBkWrLtH3%2FHztF6iR4AMb2ZZP%2F68occl%2B%2BMyZ%2BZNEg6cnKfZ8GQnZSQaxIdFZECYwUn5alpV6f8BiNlG8QglbSh%2FOAAE1iarX7sPxvtluRKHDAQoDBbqlM6AyTr4UFJJjNIipIs4B3B%2FBjAv6dTOaYSXHsUCo2GDNnTOg85JY36cPnW8ufj8TM54BLFMDL9UGYziFOHfiAKM8scGGfj08FpLuVxhSh5ai%2B%2BFF3eiwd4hFq0KRpQKv1gNZbI%2BVw%2FnRARHbx6EJ1rGvxAq2OSx3BVvHyIlU58ms9Ywp0sLh%2F0aNJb9S1cik4Og8JZjdaeJHzjmS7R0NwrvyksbpnBPskCyRUb4tJ%2Bwh5pExSjcYg0jJNZZfi%2BG7%2FPBsNEWluQMxnkry4NiNF0gFkBBok65vzYGiagaJqfP9TBnG8o7kyelyAGZ3HBKCsZh37dM2Nx0%2Bj5OgGOIiS%2FWTjB9cvesCa287WqX1ETvHfXMzWIMFq%2B55gpYmcz0K7IXPhR98NegSa9FuS%2FQHP0dom1h6npVorobpFRKhZjZQ9ooa41nCa9xzGwdK5jGmz28NBQ1ZrqFfMoqPaqk8GOImXvokmh8gF6SF2SuJ9ZbkEJITRn8lxJ8VNdhZdKlElRPvDC868%2FJBjqkAeY15b9Xr25zzh3kgvRQGoXwB9l4K%2BPZS45p8PvLv7398DCyszDcty3GtN%2FfNXGozj3dQo1jZ%2BUUfrxJOJaI4DVb8ad1JzyX2%2FKjPPnhbwwnqvnbIM3MhiTj%2BxVzJstEZMaR0GXqveOzL9X0RZNMleqyCznAtwXpRMHy8OiCcIh8ystzFFI7ptRswr7HNoz11mPaZbj7T%2BwT%2B3XrNTcNatFijZa4&X-Amz-Signature=41aa1988770f2e2c95164a9596ea1c5817f8db763747a4d3eccf71bf2fad6473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

