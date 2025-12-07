---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNAQSH4U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvAE69Ytzmod0cYh4bDOuc21x1fRJX8BPTDtr1q4sSvwIhALBe16%2FkNEFYRgLX%2FxqzfU5InBpDxrBndvrJWD%2BAUvj3KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRXni8%2F8JPZ318zFAq3AOqX9eBt6spZRv9LLsWNo0mTMXoJ9G%2BlT8zvBHTaPUbe2d%2Bifeto15%2Fn6C23YNpFuntqE9XxZSZMmCS2RmY%2FlI%2BlDkeAGOO9gkon9nbIGlLwCtSfw14s7YGpm8hSUIJ%2F4v9%2FEp1Vn8hWlsX6gAC5%2FA8Y8OvXo%2BeABfQ1BephBd5BlxWqoXnr2kaIv9cX33Ng%2Fb77UKmYPbtXptKkl9oL6UVYJjACmW77zjYiFfwNd5sFcDq3VZrGw42sRVtMoagVygXAxWXkqMnuWu%2FvBKE3Ebk40r%2BEq72JjOpCwtMOheKVuYL6NXJ0Z0s0BJ9%2FZXn6lKA1TUKlkQiZYkCMNkmlIdk0MjmimT%2BL0SsUUBV5WIYO7oi3Cvmx%2BSw0thxcLX8zPNzXv8YPQHhyl09aQAd5VgfopLw8p3n3AaP5Dkp3RXkN3TEEEOUHEOnENGH37XQbPhTtO%2FGNVKHojueqSB%2Fr5BwsUuFDmn2qb2SUtgZCebsQDIVJnEZU5x4HPJT8PtYYT%2BHy4jru1dS6d0rr%2BbypxvU8VWIHg2A3W04jIFm2Dds0DpmDcc60rCgUvHqDbNtoX9SbWEQGd4Nf2dwRsmbf3n1boeyK5FooJVozAy3TzpnnoTn6rZ4LjsShnWz8TCWmtXJBjqkAdaUBH8cdQdK%2FTQXBlZCyJJBcsVZB9I21f17MZ9F5Qi0UQyFRt1LcAOyIinF9nAXB6p%2BqCUI65Dr5nqHznfpRQuDkjwGLFg8HqvamrC8aa7GRtwqkuq%2F825qxVSBKPkoAW58UkCJy1WyeKCKem8W4V5lFZFuGPiLcV%2Fx9bb57oAOlx7EkWs8WM6tj5Y%2BMa1OsN3Y7mlw1P1Xowq25ytWo8Fv9uFq&X-Amz-Signature=714f7edde84bba28169503b078e043f3f1598a3fd3f0a47aa183f2a25f46a3a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNAQSH4U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvAE69Ytzmod0cYh4bDOuc21x1fRJX8BPTDtr1q4sSvwIhALBe16%2FkNEFYRgLX%2FxqzfU5InBpDxrBndvrJWD%2BAUvj3KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRXni8%2F8JPZ318zFAq3AOqX9eBt6spZRv9LLsWNo0mTMXoJ9G%2BlT8zvBHTaPUbe2d%2Bifeto15%2Fn6C23YNpFuntqE9XxZSZMmCS2RmY%2FlI%2BlDkeAGOO9gkon9nbIGlLwCtSfw14s7YGpm8hSUIJ%2F4v9%2FEp1Vn8hWlsX6gAC5%2FA8Y8OvXo%2BeABfQ1BephBd5BlxWqoXnr2kaIv9cX33Ng%2Fb77UKmYPbtXptKkl9oL6UVYJjACmW77zjYiFfwNd5sFcDq3VZrGw42sRVtMoagVygXAxWXkqMnuWu%2FvBKE3Ebk40r%2BEq72JjOpCwtMOheKVuYL6NXJ0Z0s0BJ9%2FZXn6lKA1TUKlkQiZYkCMNkmlIdk0MjmimT%2BL0SsUUBV5WIYO7oi3Cvmx%2BSw0thxcLX8zPNzXv8YPQHhyl09aQAd5VgfopLw8p3n3AaP5Dkp3RXkN3TEEEOUHEOnENGH37XQbPhTtO%2FGNVKHojueqSB%2Fr5BwsUuFDmn2qb2SUtgZCebsQDIVJnEZU5x4HPJT8PtYYT%2BHy4jru1dS6d0rr%2BbypxvU8VWIHg2A3W04jIFm2Dds0DpmDcc60rCgUvHqDbNtoX9SbWEQGd4Nf2dwRsmbf3n1boeyK5FooJVozAy3TzpnnoTn6rZ4LjsShnWz8TCWmtXJBjqkAdaUBH8cdQdK%2FTQXBlZCyJJBcsVZB9I21f17MZ9F5Qi0UQyFRt1LcAOyIinF9nAXB6p%2BqCUI65Dr5nqHznfpRQuDkjwGLFg8HqvamrC8aa7GRtwqkuq%2F825qxVSBKPkoAW58UkCJy1WyeKCKem8W4V5lFZFuGPiLcV%2Fx9bb57oAOlx7EkWs8WM6tj5Y%2BMa1OsN3Y7mlw1P1Xowq25ytWo8Fv9uFq&X-Amz-Signature=36490e2124473e0daaf15d373541596a087e3dfbada33e601a690cdbca724211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

