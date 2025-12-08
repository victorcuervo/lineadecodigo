---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OMWH45K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bt5rpYxX3UOyJp6XkdWI%2BhhtTv3Su8ugW1ZA6wl3PswIhAJVHK4hEYn1ay0iH2tS0gx91fuK6mQ%2F3bqoxX7VpwPNNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTYwnF6IZYvjQttywq3APYL2K3Uja%2FwM5yPG2oA6L5KOK8YNwWnr7KvNa%2BlUViZGQJRUy1OFj00HvZhvlOuZ0wRu3TZv8%2B105mMVwcLfVwbFXiLRd0xk8dJ97Ahqp2R8ZKxX0OAFa7Iu5DP7tuoXDRfSsIT8l2%2BA7%2BUnt4Wem4XPVwEFiYNHLvxEZg95YKT0EbxOZurv2Uw%2F%2FVKkmhvHWGA0v8gVspS2OBeB77UXELxXOAQNDD%2BuTeGQF9gMoezgqZJg1mAIbxGUr8pTPs1N0HnTmI%2Br3Jr8WlDqDdqX4sE1N4%2B49Enq6%2Bqe7Ql3rVKZlLOUHOus52UYhoBegH5EYG5LWWwKxHdRRoQp5VmKgOdtTRkHq2oQ3xjj4M%2FTtrxY23w5R9l7mixC8N6ou9A7QN%2Bjyx9B4%2Bccwj%2BGFXptFqgMsPU7hTbILrYRRu7f%2Fkg7K4w0LSYKes436u8w8%2FTbJ%2BAeD4RikMnZKrk7gxeeGmHg8vz%2B625TW%2FDNHkEcrCaoqtwVpH1B1QI9KBF7vt2dWwFzyDyS0Vnuwb%2Fuejo%2FH6VW9xqZsDtO99BQWKqruQTTcXp3erg9C1iVrlwAUmYMmBanZs1ZpOCAOsriihXIMNC%2BPI5%2Ftvmxsfu4JjYdd71DJ%2B7%2FkT1dSxISs7%2BTCmkNvJBjqkAVqZBou%2B%2BJd%2B4WKp1lvnPmgKBIg5S8XGyCuNvmw2WLgFEVFvjC0Upe1ZHGQbXbbqEm2KLSk6v20ReijiXXjaaToC9iZYqETPojFOLRO2zykGcokS7YdVW%2B2rxKQKIekzX6FELLVRJYmH5Jo8FP9PWPHI4jJ63%2Fu%2BCDexwjaCVS4E7fcZY68z1oQhH2VYdTZfLRmaKzfCnCOMPDzkxFoaZRif3u0w&X-Amz-Signature=29ec6540326e1f9a17250ae3d8e0ecec77bda8653542600a534b1b9e1ae14e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OMWH45K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bt5rpYxX3UOyJp6XkdWI%2BhhtTv3Su8ugW1ZA6wl3PswIhAJVHK4hEYn1ay0iH2tS0gx91fuK6mQ%2F3bqoxX7VpwPNNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTYwnF6IZYvjQttywq3APYL2K3Uja%2FwM5yPG2oA6L5KOK8YNwWnr7KvNa%2BlUViZGQJRUy1OFj00HvZhvlOuZ0wRu3TZv8%2B105mMVwcLfVwbFXiLRd0xk8dJ97Ahqp2R8ZKxX0OAFa7Iu5DP7tuoXDRfSsIT8l2%2BA7%2BUnt4Wem4XPVwEFiYNHLvxEZg95YKT0EbxOZurv2Uw%2F%2FVKkmhvHWGA0v8gVspS2OBeB77UXELxXOAQNDD%2BuTeGQF9gMoezgqZJg1mAIbxGUr8pTPs1N0HnTmI%2Br3Jr8WlDqDdqX4sE1N4%2B49Enq6%2Bqe7Ql3rVKZlLOUHOus52UYhoBegH5EYG5LWWwKxHdRRoQp5VmKgOdtTRkHq2oQ3xjj4M%2FTtrxY23w5R9l7mixC8N6ou9A7QN%2Bjyx9B4%2Bccwj%2BGFXptFqgMsPU7hTbILrYRRu7f%2Fkg7K4w0LSYKes436u8w8%2FTbJ%2BAeD4RikMnZKrk7gxeeGmHg8vz%2B625TW%2FDNHkEcrCaoqtwVpH1B1QI9KBF7vt2dWwFzyDyS0Vnuwb%2Fuejo%2FH6VW9xqZsDtO99BQWKqruQTTcXp3erg9C1iVrlwAUmYMmBanZs1ZpOCAOsriihXIMNC%2BPI5%2Ftvmxsfu4JjYdd71DJ%2B7%2FkT1dSxISs7%2BTCmkNvJBjqkAVqZBou%2B%2BJd%2B4WKp1lvnPmgKBIg5S8XGyCuNvmw2WLgFEVFvjC0Upe1ZHGQbXbbqEm2KLSk6v20ReijiXXjaaToC9iZYqETPojFOLRO2zykGcokS7YdVW%2B2rxKQKIekzX6FELLVRJYmH5Jo8FP9PWPHI4jJ63%2Fu%2BCDexwjaCVS4E7fcZY68z1oQhH2VYdTZfLRmaKzfCnCOMPDzkxFoaZRif3u0w&X-Amz-Signature=683ce5cfa95788a7621b8a8836a5a2b4702bfdc63d88bea9734fa638b9d7af0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

