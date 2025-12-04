---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOBY64Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICMgfoE1UV8%2BcDvBC2L0IlDSErS7vFM%2FS5fjpu7Vnb0NAiEA%2F5wPB4m8MjwTg3rVXbPb5w0%2FfCULAPb5D9b4ds7Xqkkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCXuZKxhlINpz9qJDyrcAwv%2FEGUW4r1TPxP4TDouyiPmVFQKRMRCd6KFJ42u%2FYz6kDwB3tNRAiKIinueorlbE6DQfSy7fAvB%2BA68TbyMK8X%2F033zOH0IkvpOV%2BYKsMvkngFglqcX5N6jOT56QfdIExIEHYSb%2B24eLiz4I%2BiWdvnM2IEvNRiLUjoWAOnY3alEjZZkiKEcacfraWUftMMfgG6EfcuLpgSfN%2FJNVJ%2BeX7STafLbGIaeAI3wd57Mde99w5kJkLyRMFA02j34ETPNtA2yptrltI%2FzCgIV27VaTZkHr1WtDm7pa0A0sDtEdjreOwiGf5cpcUSLCpzgVLjzLx9phZ0CZ2SDUDoQ27ItJE3nnDps8VmYkrVVtWAGtXOaJDWXU%2Bxybyn6DOdrgkS1s7iw6ExTdG%2FNc%2Fl0M12Sy1hA0xrGu8sAFC%2FaNbF0XNcnLz%2B9LpFg3ng8LcgdK97rIUBoYfnHqKkiveN3f3w7b7BjdESWHepUN%2BIi8jpFkqhkTWbnR1rDY2S8qtpBsULCVqpRPFvcwWxsvzL7kPRjyg2zhMe5DlYuOuCBpATajgff5EN2X6EDlbcY5d96HS8T4Q40Vn7ayI5mx3oiSjoaWRZTLBNNWtSeL9oZLyoucSJ5dY4dmd8wogV9WGhlMN2qxckGOqUB3HFE8MYUzoZBcbVI7bZ5D7C%2B6ylxPKCNFJUS5rAMy7ULAdn0jXPOXemh6tpbmLwCp%2Fr83JdYqLg%2F9J35167VG5oe2Dcd7lRlOhE6RbHl2WydoVf6hMUhrixeCmsZSl89fHDPAu9Feb6VKdImjAJuf1gBVJUmqJD6LYruxm6LCllSpSR0JWh6W8%2Fxj%2FtTC9VRIs8%2BKXPYsJDTppNCywJDD4mZW5e1&X-Amz-Signature=825b729394450a6a8fa8277369e90153eb36655438167600c4cc28b729dd1dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOBY64Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICMgfoE1UV8%2BcDvBC2L0IlDSErS7vFM%2FS5fjpu7Vnb0NAiEA%2F5wPB4m8MjwTg3rVXbPb5w0%2FfCULAPb5D9b4ds7Xqkkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCXuZKxhlINpz9qJDyrcAwv%2FEGUW4r1TPxP4TDouyiPmVFQKRMRCd6KFJ42u%2FYz6kDwB3tNRAiKIinueorlbE6DQfSy7fAvB%2BA68TbyMK8X%2F033zOH0IkvpOV%2BYKsMvkngFglqcX5N6jOT56QfdIExIEHYSb%2B24eLiz4I%2BiWdvnM2IEvNRiLUjoWAOnY3alEjZZkiKEcacfraWUftMMfgG6EfcuLpgSfN%2FJNVJ%2BeX7STafLbGIaeAI3wd57Mde99w5kJkLyRMFA02j34ETPNtA2yptrltI%2FzCgIV27VaTZkHr1WtDm7pa0A0sDtEdjreOwiGf5cpcUSLCpzgVLjzLx9phZ0CZ2SDUDoQ27ItJE3nnDps8VmYkrVVtWAGtXOaJDWXU%2Bxybyn6DOdrgkS1s7iw6ExTdG%2FNc%2Fl0M12Sy1hA0xrGu8sAFC%2FaNbF0XNcnLz%2B9LpFg3ng8LcgdK97rIUBoYfnHqKkiveN3f3w7b7BjdESWHepUN%2BIi8jpFkqhkTWbnR1rDY2S8qtpBsULCVqpRPFvcwWxsvzL7kPRjyg2zhMe5DlYuOuCBpATajgff5EN2X6EDlbcY5d96HS8T4Q40Vn7ayI5mx3oiSjoaWRZTLBNNWtSeL9oZLyoucSJ5dY4dmd8wogV9WGhlMN2qxckGOqUB3HFE8MYUzoZBcbVI7bZ5D7C%2B6ylxPKCNFJUS5rAMy7ULAdn0jXPOXemh6tpbmLwCp%2Fr83JdYqLg%2F9J35167VG5oe2Dcd7lRlOhE6RbHl2WydoVf6hMUhrixeCmsZSl89fHDPAu9Feb6VKdImjAJuf1gBVJUmqJD6LYruxm6LCllSpSR0JWh6W8%2Fxj%2FtTC9VRIs8%2BKXPYsJDTppNCywJDD4mZW5e1&X-Amz-Signature=d1b09ce24ceafe780cca2ff5781e14a14851943f7f29539fa1d7d6388ebbcabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

