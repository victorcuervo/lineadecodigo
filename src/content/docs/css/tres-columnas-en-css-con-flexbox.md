---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMX6G4B%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDWYBXTF%2FiAkm13FIirob1uBrgRcK5rB66%2BZCXoFJHWzAiANyJWGL8rga85URVWl6w8JVVRRBplllK00yQFdjA0rJSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMjuARy2gzj%2Bt%2Bl%2FaaKtwDon4EfB46CQDDL3xyoGU4%2BLCKC3zKvEAW7AQzcRvXjn4uQrkFt8fHhVaHUN3vGrBl4Urr7cGOxIJ14ShRCmvilBuKj%2FtRIkP9eC9QhdWMiCwH1%2BqDO7x8JTeZBgeeywnbx3zzCBvwnUS33HO8yQbaiFlDcodBpxsAvwSB9D7z2rQBk8eLsykdZkqfM1G7ZeTm9WpVKKGTqV01iI5I8ZRoffrZoGxF5H1nOKNi%2BSMlDY8zhIuFFRVuev3G5ghD%2FsFhD%2FrKI7Crt8QEVuwPae8du1UfZ7tlT5LqZKIdlyiM85o%2BQEl2kkGmcsLBvwxQiB1tbouSqaI8wmgwqasab%2BLpcEn9HrnDeZ6BLIqX5epEqFObXNNA8%2B1bXb1%2BmwCLM7E6juVxz8xdz%2FldfSGs9HCMqJHc0yXrvGurQHnDRYvCjI686s7mutcEPQXD4YM3SnHPBmAdCf7GkfOiQHAU%2FCSdLZ0pNfT3bG7x40n6ysF%2Bb3pY4Pi8zcokuc1087J%2BBHppHYPcals0xc8Qz0x%2Ffkii9%2FGSqsyEGgpD9QpNLvdsB9kx9xFplDGNNulmI8BU8LJ0DFS%2FWQRMnPUgthq2WZctAUwYjzSWg%2FHU1%2FgKHPatlEXRhqmsYqiRwp90w3Iwxb7CyQY6pgFNrJsst1lF1Dqe%2ByauCXzhsWn2m4KaKKIn%2FXb9wtvVnza3dBguN%2FFW8%2BnVT0J5M3ZhgXlps5mUnQ%2Fj9RRXL9pybuRdfC%2BozYc5srTLekKJ%2FMLaYq0%2B%2BUN7TfrDTQjC9gqhWDtaRCV4S6dpr%2F2%2Br%2FAOoo9Jtxg41O6dgrRx7O%2F7HFeJIDoZ%2F0%2Burqaal7hvm74%2Fn5wnrENk8DNjCvXqELBpxSxW87Z6&X-Amz-Signature=4652d25753cfc38f6cfa5c930aec271a0af4ba124edad71f82dce649735dd61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMX6G4B%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDWYBXTF%2FiAkm13FIirob1uBrgRcK5rB66%2BZCXoFJHWzAiANyJWGL8rga85URVWl6w8JVVRRBplllK00yQFdjA0rJSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMjuARy2gzj%2Bt%2Bl%2FaaKtwDon4EfB46CQDDL3xyoGU4%2BLCKC3zKvEAW7AQzcRvXjn4uQrkFt8fHhVaHUN3vGrBl4Urr7cGOxIJ14ShRCmvilBuKj%2FtRIkP9eC9QhdWMiCwH1%2BqDO7x8JTeZBgeeywnbx3zzCBvwnUS33HO8yQbaiFlDcodBpxsAvwSB9D7z2rQBk8eLsykdZkqfM1G7ZeTm9WpVKKGTqV01iI5I8ZRoffrZoGxF5H1nOKNi%2BSMlDY8zhIuFFRVuev3G5ghD%2FsFhD%2FrKI7Crt8QEVuwPae8du1UfZ7tlT5LqZKIdlyiM85o%2BQEl2kkGmcsLBvwxQiB1tbouSqaI8wmgwqasab%2BLpcEn9HrnDeZ6BLIqX5epEqFObXNNA8%2B1bXb1%2BmwCLM7E6juVxz8xdz%2FldfSGs9HCMqJHc0yXrvGurQHnDRYvCjI686s7mutcEPQXD4YM3SnHPBmAdCf7GkfOiQHAU%2FCSdLZ0pNfT3bG7x40n6ysF%2Bb3pY4Pi8zcokuc1087J%2BBHppHYPcals0xc8Qz0x%2Ffkii9%2FGSqsyEGgpD9QpNLvdsB9kx9xFplDGNNulmI8BU8LJ0DFS%2FWQRMnPUgthq2WZctAUwYjzSWg%2FHU1%2FgKHPatlEXRhqmsYqiRwp90w3Iwxb7CyQY6pgFNrJsst1lF1Dqe%2ByauCXzhsWn2m4KaKKIn%2FXb9wtvVnza3dBguN%2FFW8%2BnVT0J5M3ZhgXlps5mUnQ%2Fj9RRXL9pybuRdfC%2BozYc5srTLekKJ%2FMLaYq0%2B%2BUN7TfrDTQjC9gqhWDtaRCV4S6dpr%2F2%2Br%2FAOoo9Jtxg41O6dgrRx7O%2F7HFeJIDoZ%2F0%2Burqaal7hvm74%2Fn5wnrENk8DNjCvXqELBpxSxW87Z6&X-Amz-Signature=1e44c55d712714e74acd174542357c75e0815fef39bf60b604df425054cc1f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

