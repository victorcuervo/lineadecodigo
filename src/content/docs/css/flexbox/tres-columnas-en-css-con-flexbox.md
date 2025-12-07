---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYUQVLNX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjrKfUaea35WMVP6vqwvfdIfzlRzirxExkucfNFaJ%2FNAiBOS5QID3sLQB9uRVaw7YKMLt9rAvHmFYD%2F4PnORUpStCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXGdKagEgq3bEMeIxKtwDEM6xe8L%2FtznO%2BUcz0643OAP1uHuG0%2Fo0EvNcGQd6Ao5FE6Wk26eBHpa%2F18cyDDZsbIDo%2B3iqtdgla%2FqrdruRsIjj4FcW6oVRmVYhNzv964sOfbC5GAx7cC8MGnhv6ZBLUVWW%2F5M2LgAxxLaa8B8KF1VvgMowJnDtm0RGM4Wu5%2BS0dsjRbZ999OdAujIF5NpUNNLFSUSMx4kIO4WhYYl%2FGijlHM3Km5ND0eszvqgDtySb40GGdUA0QL0Vm%2Fp0%2BH0p75JIHGc8yKIl5Zxcatq3XMxsjokqp%2FKGb%2Byl%2F3fPfLggWQHM1%2BJwAaDH3wRtIzh%2BIkk%2F%2F1sN0M9J2jyopM9Lt1evicLgDeHZm0NM7Tv2vX2AMMoG23md1Ss1zZL81mR2xg0UX%2B8j3sWveimjR4acA7oS%2Fao1NVjBvkycR3%2FQ4rfeuXifsPMJM5N3L4px6JzBgXFepBnRH9q3AvEj5SRoArqu7Td7qSySarfpA7OZDneCE1k4LXNawMWBr9qXEEIRWCgsAHjvZfN8QsdjOMXe%2BktKDt6kVXfMgrC7Xbg34HfOzrL%2BTPAQ%2B8QMU9wc6JoV5wv%2FqgjWLMQfqKUVxeR6QjboDG5oux2gQ7wf2%2FX5qi%2FLF6W5WUPdzssj8dAwoP3SyQY6pgGLgwoQ9zkGOClsmCnKtUjvvZseygf7Us0L3hCP%2BkjYC4eO%2FSZspBGtN8pFGcLrxYBIQGeJakHgPRC4l4f0Mwu8Y3wRBHwoxnee10Z5mljmXwTfhSwXO1WS04ZzIJAlZFx0%2BKtZgSAwLVywLeHOBbc81qelwN%2BEsMG9iU8C%2BRajd22hHArjK3VAe5%2FJOxR2ie48%2BepbKjP2%2F4Jvsu6EhgDHB5%2BvygG8&X-Amz-Signature=77ee58c0277d4e8f49214d3d665894a73286d3adcfd5fa7210c1c2cca2615c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYUQVLNX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjrKfUaea35WMVP6vqwvfdIfzlRzirxExkucfNFaJ%2FNAiBOS5QID3sLQB9uRVaw7YKMLt9rAvHmFYD%2F4PnORUpStCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXGdKagEgq3bEMeIxKtwDEM6xe8L%2FtznO%2BUcz0643OAP1uHuG0%2Fo0EvNcGQd6Ao5FE6Wk26eBHpa%2F18cyDDZsbIDo%2B3iqtdgla%2FqrdruRsIjj4FcW6oVRmVYhNzv964sOfbC5GAx7cC8MGnhv6ZBLUVWW%2F5M2LgAxxLaa8B8KF1VvgMowJnDtm0RGM4Wu5%2BS0dsjRbZ999OdAujIF5NpUNNLFSUSMx4kIO4WhYYl%2FGijlHM3Km5ND0eszvqgDtySb40GGdUA0QL0Vm%2Fp0%2BH0p75JIHGc8yKIl5Zxcatq3XMxsjokqp%2FKGb%2Byl%2F3fPfLggWQHM1%2BJwAaDH3wRtIzh%2BIkk%2F%2F1sN0M9J2jyopM9Lt1evicLgDeHZm0NM7Tv2vX2AMMoG23md1Ss1zZL81mR2xg0UX%2B8j3sWveimjR4acA7oS%2Fao1NVjBvkycR3%2FQ4rfeuXifsPMJM5N3L4px6JzBgXFepBnRH9q3AvEj5SRoArqu7Td7qSySarfpA7OZDneCE1k4LXNawMWBr9qXEEIRWCgsAHjvZfN8QsdjOMXe%2BktKDt6kVXfMgrC7Xbg34HfOzrL%2BTPAQ%2B8QMU9wc6JoV5wv%2FqgjWLMQfqKUVxeR6QjboDG5oux2gQ7wf2%2FX5qi%2FLF6W5WUPdzssj8dAwoP3SyQY6pgGLgwoQ9zkGOClsmCnKtUjvvZseygf7Us0L3hCP%2BkjYC4eO%2FSZspBGtN8pFGcLrxYBIQGeJakHgPRC4l4f0Mwu8Y3wRBHwoxnee10Z5mljmXwTfhSwXO1WS04ZzIJAlZFx0%2BKtZgSAwLVywLeHOBbc81qelwN%2BEsMG9iU8C%2BRajd22hHArjK3VAe5%2FJOxR2ie48%2BepbKjP2%2F4Jvsu6EhgDHB5%2BvygG8&X-Amz-Signature=13297c3e95e4a0dc67f935e5d39fe106fcae931860a36a70ed1eb9ddb00df67c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

