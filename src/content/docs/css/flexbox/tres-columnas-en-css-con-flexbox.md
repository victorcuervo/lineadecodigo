---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VP7IQWQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD5IeXrdUTKxS7W0YBJcoQVpmM1rNblm4aiNWyDTDOvwQIhANVXqx8lerZajvuNHZXkDs2PM9kxrNpS8h6EkW75pwK0Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwMhPtd2wtGVH9dqrIq3AMV74CNEw3KCMB02MheI%2BpEUx3DMa3X75aYqmAHQqPkEA1iuJmbcXr0hUUm0t03MVins9VOi1XJdkH4977aS2sfmCVtrZ4e8gVd%2FoOBhaGeMbUV4y%2BnHG0bZm22Oi1MqitcsB1PzI98cUEKoTQmY2y8F5UTyPemmeRI9zCT5m4DeFdBE9vk%2BdLugTfys1ly%2FiGYCwHd5aXdw%2FOrnrYiEFEsxgYbpTQNbs9Mrpr339ptj9X2wuQcZMqp2LhT%2FE2c3yG6K0PWbuU2XrGQX028RmsvJWIs1IG%2BUev7nnfkOc%2By0kekul5n6%2FXEg0CIo8TAHKHN2s3GpdADVYjSOxGFz0%2FJ7xyEHswae3Iju69%2FaYz88sDJzx6exb7HxJJ3u2JpfJlLhijEUdo1rrOFRKCsJukx45SsLM5Q3Ep%2Bb5N4haFX7YfluJKurboSJ8%2BwdVeU5LimzfFsOQcU0aMB4ApLGiuoxAnMVwz%2FwOyUx4Zm9jrQFRRa%2B9j3Ku1C%2F2tKUyER3Pje6OpNofu%2FkdAKwKuJCi5DilGZuIb5o5%2B7YzVl6DnM1wiHrM3JK7pDPbZkpJPDqmBbZOm%2FsR3l2FnGkA1NWRM0BL%2FzUrC9lMMlCiXujnemCMfw5mjL5C%2BhpzmzDDCKlcPJBjqkASmg1o2x8%2B1%2FTiQPEcQM7zup5nTQRQgRH409t0yQ519sIvtrz8N6hLmSIqtjKIY51QW2miLDO%2F3%2FjiItKzb%2Fnhq2XoBdLaaWwZ74LkMMO7p2yJyIMxsviAq2GnrXNDZ8B%2BBCTRgJEge9IciX%2BUafnZG6ky%2Bsgf9d2mUCUjLIg2xigHOe3%2F1gQ4xP0mUuxfr2UHQSg5Vv4Si6%2BQewM2A0BEaxPdp7&X-Amz-Signature=8eaf11e68c43d72f8a9c6a75191cd750cd498e76c59410807df3863834c540f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VP7IQWQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD5IeXrdUTKxS7W0YBJcoQVpmM1rNblm4aiNWyDTDOvwQIhANVXqx8lerZajvuNHZXkDs2PM9kxrNpS8h6EkW75pwK0Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwMhPtd2wtGVH9dqrIq3AMV74CNEw3KCMB02MheI%2BpEUx3DMa3X75aYqmAHQqPkEA1iuJmbcXr0hUUm0t03MVins9VOi1XJdkH4977aS2sfmCVtrZ4e8gVd%2FoOBhaGeMbUV4y%2BnHG0bZm22Oi1MqitcsB1PzI98cUEKoTQmY2y8F5UTyPemmeRI9zCT5m4DeFdBE9vk%2BdLugTfys1ly%2FiGYCwHd5aXdw%2FOrnrYiEFEsxgYbpTQNbs9Mrpr339ptj9X2wuQcZMqp2LhT%2FE2c3yG6K0PWbuU2XrGQX028RmsvJWIs1IG%2BUev7nnfkOc%2By0kekul5n6%2FXEg0CIo8TAHKHN2s3GpdADVYjSOxGFz0%2FJ7xyEHswae3Iju69%2FaYz88sDJzx6exb7HxJJ3u2JpfJlLhijEUdo1rrOFRKCsJukx45SsLM5Q3Ep%2Bb5N4haFX7YfluJKurboSJ8%2BwdVeU5LimzfFsOQcU0aMB4ApLGiuoxAnMVwz%2FwOyUx4Zm9jrQFRRa%2B9j3Ku1C%2F2tKUyER3Pje6OpNofu%2FkdAKwKuJCi5DilGZuIb5o5%2B7YzVl6DnM1wiHrM3JK7pDPbZkpJPDqmBbZOm%2FsR3l2FnGkA1NWRM0BL%2FzUrC9lMMlCiXujnemCMfw5mjL5C%2BhpzmzDDCKlcPJBjqkASmg1o2x8%2B1%2FTiQPEcQM7zup5nTQRQgRH409t0yQ519sIvtrz8N6hLmSIqtjKIY51QW2miLDO%2F3%2FjiItKzb%2Fnhq2XoBdLaaWwZ74LkMMO7p2yJyIMxsviAq2GnrXNDZ8B%2BBCTRgJEge9IciX%2BUafnZG6ky%2Bsgf9d2mUCUjLIg2xigHOe3%2F1gQ4xP0mUuxfr2UHQSg5Vv4Si6%2BQewM2A0BEaxPdp7&X-Amz-Signature=90e5f31424e077a02abaccb6d2d54d0b324c6f66d48fe0bf319acc6c1c561ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

