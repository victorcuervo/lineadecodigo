---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IFVVDX3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCU8SvCAiM7O30BGTGRES5bflxg0TiRh2oKobH5OPOT9wIhAKXRQiQYysFdnh%2BG%2FFpQlFbAoFFJv%2BP2t%2F0TPQlmyFm8Kv8DCEMQABoMNjM3NDIzMTgzODA1Igzv2OTAnrZq%2FudQ9Xkq3AN%2FrllKCxWHjBMnuSjM2jHNRftlIlA4TeCXqSQZcXR%2F0igq5cUPTeUNBsTHEudNEHyObCPsKDgj5jqSWLCfUQvx5Vupc8z7wtGEg57eimkndlPZuoFVnsXE%2Fs94HXSRWGtoblyanAkAMWsxrArwn6CCYxBJ%2BHjbIRfMVImKVe6KsAVuMc0ga7uwxML7t1kvKNBwC89qwaulgFGd9nNpH0Biwb%2B69BFlbwVf4M4Ul2BvFZ1UwMml5n33j9gueZFQBQsunfdqSCqN1PEDh5WKHscMmr7LmldCOxvjt79XydoBacFmhH1jmD8yalNjzSAfjGYsLxXd0SkG9rwZ4%2Fg8heQQBiptg0w7tihr8npo5x3UzQ8qB83VMyo0pnduh5zQcTfSebYoB2JNASSURaQvsPJ7BZisiXg390cG1pf1GQ3Nxk43%2F87TvkiwbeRKqBrEldzcHwnjdtYMA0WB8fl9RcXlFZQKD%2FwDkUXHymKNePkP6%2FxEhRDw6dqC9hQd5TQLmyhVIGsrU0l09gVwLC4v%2Fa0NRVjQw%2FDecjItjlmym5rQv9snORQIoUMo6jbYv3yPVc6DwGdrmk%2Fpzp%2BJTNcFvJI2I7iPqDWeYQ8VrPC6h4cIHRE02X77ljsrwvZAeDDtq8XJBjqkAUzh9mRN1XU6bGDfLJkgZuX9VtvTuSPoW1t232ZdMQ%2Fy1bSGfSpJDrbtSpkKm9ic90kUp%2Fpu8Yg6W8DZSZ03F9Y48y3hEfoMm3XAkAOjFhJpTMuF5oA2pHISV8uZoW6vsPNNlvTK08%2FXRonajYHOkv8NK682ZYXmDgZSDiUmnto6SLT4ZUu1G4UpZ56efA%2FlyucFhHaCF91KCS%2BuYJ2uk0hceRVh&X-Amz-Signature=5b1539f054fc8f198088fac390f53f26702e3e6435076da2a1ec8c5a4fd37570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IFVVDX3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCU8SvCAiM7O30BGTGRES5bflxg0TiRh2oKobH5OPOT9wIhAKXRQiQYysFdnh%2BG%2FFpQlFbAoFFJv%2BP2t%2F0TPQlmyFm8Kv8DCEMQABoMNjM3NDIzMTgzODA1Igzv2OTAnrZq%2FudQ9Xkq3AN%2FrllKCxWHjBMnuSjM2jHNRftlIlA4TeCXqSQZcXR%2F0igq5cUPTeUNBsTHEudNEHyObCPsKDgj5jqSWLCfUQvx5Vupc8z7wtGEg57eimkndlPZuoFVnsXE%2Fs94HXSRWGtoblyanAkAMWsxrArwn6CCYxBJ%2BHjbIRfMVImKVe6KsAVuMc0ga7uwxML7t1kvKNBwC89qwaulgFGd9nNpH0Biwb%2B69BFlbwVf4M4Ul2BvFZ1UwMml5n33j9gueZFQBQsunfdqSCqN1PEDh5WKHscMmr7LmldCOxvjt79XydoBacFmhH1jmD8yalNjzSAfjGYsLxXd0SkG9rwZ4%2Fg8heQQBiptg0w7tihr8npo5x3UzQ8qB83VMyo0pnduh5zQcTfSebYoB2JNASSURaQvsPJ7BZisiXg390cG1pf1GQ3Nxk43%2F87TvkiwbeRKqBrEldzcHwnjdtYMA0WB8fl9RcXlFZQKD%2FwDkUXHymKNePkP6%2FxEhRDw6dqC9hQd5TQLmyhVIGsrU0l09gVwLC4v%2Fa0NRVjQw%2FDecjItjlmym5rQv9snORQIoUMo6jbYv3yPVc6DwGdrmk%2Fpzp%2BJTNcFvJI2I7iPqDWeYQ8VrPC6h4cIHRE02X77ljsrwvZAeDDtq8XJBjqkAUzh9mRN1XU6bGDfLJkgZuX9VtvTuSPoW1t232ZdMQ%2Fy1bSGfSpJDrbtSpkKm9ic90kUp%2Fpu8Yg6W8DZSZ03F9Y48y3hEfoMm3XAkAOjFhJpTMuF5oA2pHISV8uZoW6vsPNNlvTK08%2FXRonajYHOkv8NK682ZYXmDgZSDiUmnto6SLT4ZUu1G4UpZ56efA%2FlyucFhHaCF91KCS%2BuYJ2uk0hceRVh&X-Amz-Signature=b238aa54f5ad0afc1d786595edaa6284049d68105f5f503f5553fb5100d1164d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

