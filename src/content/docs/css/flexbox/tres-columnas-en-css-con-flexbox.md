---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG5MAHCF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH%2BP7cB00nqebqjGwzNeJjCuHbhGiSMEXUrurUIwVsTIAiBNoc%2FPX33zF2wTmnm%2BZg7KUjC69utcA%2BPO0OVUhrszNCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIakhsHMm75%2FURaekKtwDduxA50EeYIAXnwcoT4kVuuJu7CoEavUbcWz0W%2B6UQuBZymCJz30sj5cthe6Kp6E0A7dx1aJSKNA7QtEK34A9LkO7qkXfDXHR9Et0Una2pB2K51KQYmdm4t44I7ch%2FHbfxKFVmuVgSqUPCBe6BsZXU5eHOLFu8oN0HjO%2F3BMNDt5sUV891Q9BMrjkx1a8jRlIRLGNCVI8ggv%2FDqCcwzouFr2pNZhQvUK6m4ZkTeS4VuVoBelX6MSXsODooNKay%2B%2FKlwPhgPqmuhmy7fw%2FfCnHyZKjh3cgAScuYyobE1y6Dm9jdsUyZ4YORiTa1aS6jhUF6edfKD3LoWRWceyy2sMkCc1ZGuT0ZNviVA4p4r2ohkz1gZyyk%2BvWDy9tAGJFI0eMJEog49%2BajctgpeAZ1cguTtAPjRzuPVrsHkIsU5PLjfXMzpl5cNuN3mrROP%2FNvopCw8W5JK669SD0NWlVaCjjW18d0%2BUo7nM3Rvwpq6ML0FDXHWFidGSBk77BdMK9jybXpCrE5Sn6SmHxZE8Rr3mIn1%2B3sFerDc8xvXfoTArGDyuE4hpO1tsgx0svPQhCzi88fZ4ztU39O5%2BVoohc7%2BTRp%2F5mvwu7WavTP3s6KR3nwMt%2B7ghV22xoNM0smXMw1JDEyQY6pgGPGgBH0CiG6qzod95%2BXIdilsqD%2BZNcj0IKiMtWR0HvBYvUQpULPESBs4N6II9SfgrLoGpazxkoqUow0JM%2BNHVt2w3rrNFm3WdRF2eKcwLxov6%2BtLqNxcs6Bk%2F5A7F9xjPSy0STG5T15xPzRq5ZFpo18cUkGjMZlZqaKOAE9bTEHa6Y1dvZGffX5WsbF8NEye8PWxVbr6H4AL99useUAAq0PMvmg5zn&X-Amz-Signature=ea06f6a1d1533ad09f33521d5e6f677cd32ce7b0ffc74b75e67e096e8871c1ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG5MAHCF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH%2BP7cB00nqebqjGwzNeJjCuHbhGiSMEXUrurUIwVsTIAiBNoc%2FPX33zF2wTmnm%2BZg7KUjC69utcA%2BPO0OVUhrszNCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIakhsHMm75%2FURaekKtwDduxA50EeYIAXnwcoT4kVuuJu7CoEavUbcWz0W%2B6UQuBZymCJz30sj5cthe6Kp6E0A7dx1aJSKNA7QtEK34A9LkO7qkXfDXHR9Et0Una2pB2K51KQYmdm4t44I7ch%2FHbfxKFVmuVgSqUPCBe6BsZXU5eHOLFu8oN0HjO%2F3BMNDt5sUV891Q9BMrjkx1a8jRlIRLGNCVI8ggv%2FDqCcwzouFr2pNZhQvUK6m4ZkTeS4VuVoBelX6MSXsODooNKay%2B%2FKlwPhgPqmuhmy7fw%2FfCnHyZKjh3cgAScuYyobE1y6Dm9jdsUyZ4YORiTa1aS6jhUF6edfKD3LoWRWceyy2sMkCc1ZGuT0ZNviVA4p4r2ohkz1gZyyk%2BvWDy9tAGJFI0eMJEog49%2BajctgpeAZ1cguTtAPjRzuPVrsHkIsU5PLjfXMzpl5cNuN3mrROP%2FNvopCw8W5JK669SD0NWlVaCjjW18d0%2BUo7nM3Rvwpq6ML0FDXHWFidGSBk77BdMK9jybXpCrE5Sn6SmHxZE8Rr3mIn1%2B3sFerDc8xvXfoTArGDyuE4hpO1tsgx0svPQhCzi88fZ4ztU39O5%2BVoohc7%2BTRp%2F5mvwu7WavTP3s6KR3nwMt%2B7ghV22xoNM0smXMw1JDEyQY6pgGPGgBH0CiG6qzod95%2BXIdilsqD%2BZNcj0IKiMtWR0HvBYvUQpULPESBs4N6II9SfgrLoGpazxkoqUow0JM%2BNHVt2w3rrNFm3WdRF2eKcwLxov6%2BtLqNxcs6Bk%2F5A7F9xjPSy0STG5T15xPzRq5ZFpo18cUkGjMZlZqaKOAE9bTEHa6Y1dvZGffX5WsbF8NEye8PWxVbr6H4AL99useUAAq0PMvmg5zn&X-Amz-Signature=60f784c570a489cc238788d11ac2c19f412f926d235766afb7cf3624d4576525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

