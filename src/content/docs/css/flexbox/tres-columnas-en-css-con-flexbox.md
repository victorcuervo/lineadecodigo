---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVAVH2G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtjypsVrPWaa%2FCsyJzqqa9AIjyv%2BMTMTMefRQQe7raIAiBhwZU9n1mup%2BNEAyzqGuuVIqA1hy3KvPGSEDaZydBOzCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP%2Bbw4XFXOE5fn%2FIrKtwDYP0ouD4ehccZObBPzvzOIYgnAyLsLY8SSyJ3C4TTEEbjNbiTYD3oy47GUBVnnPVLKwF5hqvvdsFuhY3q6ksluaAC%2FJ6QiBZRJRzFUr4RpY4D4%2F76K7fRGxqgpJnGSRZl433LnyTPQ1HDuBgMzAAzQMvh1N%2FgHKNVblqZE6Ega%2Fr%2B3sGnQUi1fkRPh54X5YtliPjOaP0WDr%2BklUBTGrWT0OYsciK1ssnYxo4GOICrryDwcgmt0ciXde5vKTKJqX4XecENP5qzMgidvMUoXb91BH1ujGRBMxTLvoX%2F%2FjzSAcmeoSp2HdPZQONEGRX4d6UEDz8bHBViLeskuvDYEerSUwR3X5iMxdqPJNg9mVTljzBgWt3CZZhsTFt2hL0lBPcjnXzjMA1suZZ3LlyzDHS9i%2BC%2F1%2FnE7c3WLfD2DEgeED1GvcPM%2B4pC8fnegqOnJwYE9MysKqld31wD1MIeEmbgbo0WP8x3bvPiZkqr7sWnCI5Jt1YzYeYDN5OWPP3o5jKerwQeOEtvae8d%2BZyGfB6X8km5kKSNDPWvOiitoyv9UxUNI0KCUDLkAIU6UpeNi2MtIs2FsOoiOryRgW60mo9PSckzx7sKqyY683E7LW4H1xoaQPcStpDtKL3xA%2Bsw0tDZyQY6pgFH%2Fs88w0hQ3X41aq77exFcQoCuvcREnyzZGCmB5YWcFjN%2BaDVWt0ZyHEs4UkTX8CfFOr5Tq3awy9%2FRxrWgDkOMKrsYX%2Bjkf7Zttp7GgBWpOknvl1Xx79euumWhnYJAtVloX25V4DJ%2BtiyfgHHdSIpzm6h0QS6FDoNh7LVCqSuHSxXyk2GZGddaUXkxic5C7nXXZfOmSHrr2%2BWKWi5Ruu1TUkOWWhfy&X-Amz-Signature=b6016274fe8324a6c502201a8836697577a3a9576ba141fefb40934867aef17e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVAVH2G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtjypsVrPWaa%2FCsyJzqqa9AIjyv%2BMTMTMefRQQe7raIAiBhwZU9n1mup%2BNEAyzqGuuVIqA1hy3KvPGSEDaZydBOzCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP%2Bbw4XFXOE5fn%2FIrKtwDYP0ouD4ehccZObBPzvzOIYgnAyLsLY8SSyJ3C4TTEEbjNbiTYD3oy47GUBVnnPVLKwF5hqvvdsFuhY3q6ksluaAC%2FJ6QiBZRJRzFUr4RpY4D4%2F76K7fRGxqgpJnGSRZl433LnyTPQ1HDuBgMzAAzQMvh1N%2FgHKNVblqZE6Ega%2Fr%2B3sGnQUi1fkRPh54X5YtliPjOaP0WDr%2BklUBTGrWT0OYsciK1ssnYxo4GOICrryDwcgmt0ciXde5vKTKJqX4XecENP5qzMgidvMUoXb91BH1ujGRBMxTLvoX%2F%2FjzSAcmeoSp2HdPZQONEGRX4d6UEDz8bHBViLeskuvDYEerSUwR3X5iMxdqPJNg9mVTljzBgWt3CZZhsTFt2hL0lBPcjnXzjMA1suZZ3LlyzDHS9i%2BC%2F1%2FnE7c3WLfD2DEgeED1GvcPM%2B4pC8fnegqOnJwYE9MysKqld31wD1MIeEmbgbo0WP8x3bvPiZkqr7sWnCI5Jt1YzYeYDN5OWPP3o5jKerwQeOEtvae8d%2BZyGfB6X8km5kKSNDPWvOiitoyv9UxUNI0KCUDLkAIU6UpeNi2MtIs2FsOoiOryRgW60mo9PSckzx7sKqyY683E7LW4H1xoaQPcStpDtKL3xA%2Bsw0tDZyQY6pgFH%2Fs88w0hQ3X41aq77exFcQoCuvcREnyzZGCmB5YWcFjN%2BaDVWt0ZyHEs4UkTX8CfFOr5Tq3awy9%2FRxrWgDkOMKrsYX%2Bjkf7Zttp7GgBWpOknvl1Xx79euumWhnYJAtVloX25V4DJ%2BtiyfgHHdSIpzm6h0QS6FDoNh7LVCqSuHSxXyk2GZGddaUXkxic5C7nXXZfOmSHrr2%2BWKWi5Ruu1TUkOWWhfy&X-Amz-Signature=22bb62c000374643bc6523199be1f31bbe0066b14af25b022ba52baf6b8e09f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

