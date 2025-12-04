---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFWDJ33%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDjVxiOBOTC4t0ybzVHQvuqfLNAMYl2sp5uO3KyghKAwQIhAI8V1MUzONaUQrpKtg1FltnHdSdfre9idy4DZB7syRHNKv8DCEEQABoMNjM3NDIzMTgzODA1Igxk5XcHz%2FyPEJhQxJYq3AO89HJGFfq4MPbT0XwF6fBZRKHtnpNyF1Oh5WuP53DickGZxSRLM7y18FpSlTBb5nLfAF0RnWI9PkjDSx7ewhLiO1CmQW4yZEqz0W1TKkxbq6%2Fu8bAZsaJAFHHcWRwaDNGNvhxCXO7IR%2FSbV3Nz3R3vDWJbb6qVXylAc%2F2UotHA4m%2BkmNf%2BzL3e5AfnN8URB5o3LKr0Zcuc%2Bi7qH93ucHquh%2BqEg66XusX%2FGrUg771ItfdVo6s05Fs%2BarW5%2F56z0Bxadme3XDWqjzQOImZpZmM5%2BI7lEcXjpNmkiNU4H6vBAmm13oQHhaS%2FePbYZ5svdx7tDLOlcgJ2o20V%2BF%2FOvDDJrdcsZaPQk0Jdo1roRz3iOYR5PrP%2FeH%2FiywdopZieGrC4xe%2BH3v%2B283KjU9LVAfSoHzK0nmbp7yIhzPRDCwA5taRKMDK3hVRpvA1IzADmSafShba%2FWwl4lccWy8Pl9XzRonmQXgohjgVvyVj5REhEWt0%2FmOg4TOqc%2BSmiXBUD9ZwWHgetX1GhjaJNs6BDq4wY%2B9ZvCuZ%2BxyrKZ9%2FU7VPz7zvdEyd24YXSbc9t1CK2Mh05z7%2B6K%2FleWUE5uo4ZXrumqW1M0dRRRH%2B0jZOp8CMvc%2F0PA3mrtulwECx2VzDrhMXJBjqkAawhUHeBAMM1TaWwGCrBpsmWmcouX1wIa6Gmeh6lm3b%2Bx0dYapGEBfsH1fkldjPVuwuS2rZvRabOw%2B5PkacOY00QPRghinzY291K5iSTWsWFP9K2RtmIiPFvXrDFgYm7I%2BHnbx05T3nPTF78zGKNBjrTp6AyUxiiiaTXM0R%2FxRTxMxjm%2BSbf3ds2A0cloAGSqBf2Gn4qGLxwv5nb20qIq2JS1wY9&X-Amz-Signature=32478c13ee4eda93342984e537ea60853a68a74c84b319d7334a4108e52b5771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFWDJ33%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDjVxiOBOTC4t0ybzVHQvuqfLNAMYl2sp5uO3KyghKAwQIhAI8V1MUzONaUQrpKtg1FltnHdSdfre9idy4DZB7syRHNKv8DCEEQABoMNjM3NDIzMTgzODA1Igxk5XcHz%2FyPEJhQxJYq3AO89HJGFfq4MPbT0XwF6fBZRKHtnpNyF1Oh5WuP53DickGZxSRLM7y18FpSlTBb5nLfAF0RnWI9PkjDSx7ewhLiO1CmQW4yZEqz0W1TKkxbq6%2Fu8bAZsaJAFHHcWRwaDNGNvhxCXO7IR%2FSbV3Nz3R3vDWJbb6qVXylAc%2F2UotHA4m%2BkmNf%2BzL3e5AfnN8URB5o3LKr0Zcuc%2Bi7qH93ucHquh%2BqEg66XusX%2FGrUg771ItfdVo6s05Fs%2BarW5%2F56z0Bxadme3XDWqjzQOImZpZmM5%2BI7lEcXjpNmkiNU4H6vBAmm13oQHhaS%2FePbYZ5svdx7tDLOlcgJ2o20V%2BF%2FOvDDJrdcsZaPQk0Jdo1roRz3iOYR5PrP%2FeH%2FiywdopZieGrC4xe%2BH3v%2B283KjU9LVAfSoHzK0nmbp7yIhzPRDCwA5taRKMDK3hVRpvA1IzADmSafShba%2FWwl4lccWy8Pl9XzRonmQXgohjgVvyVj5REhEWt0%2FmOg4TOqc%2BSmiXBUD9ZwWHgetX1GhjaJNs6BDq4wY%2B9ZvCuZ%2BxyrKZ9%2FU7VPz7zvdEyd24YXSbc9t1CK2Mh05z7%2B6K%2FleWUE5uo4ZXrumqW1M0dRRRH%2B0jZOp8CMvc%2F0PA3mrtulwECx2VzDrhMXJBjqkAawhUHeBAMM1TaWwGCrBpsmWmcouX1wIa6Gmeh6lm3b%2Bx0dYapGEBfsH1fkldjPVuwuS2rZvRabOw%2B5PkacOY00QPRghinzY291K5iSTWsWFP9K2RtmIiPFvXrDFgYm7I%2BHnbx05T3nPTF78zGKNBjrTp6AyUxiiiaTXM0R%2FxRTxMxjm%2BSbf3ds2A0cloAGSqBf2Gn4qGLxwv5nb20qIq2JS1wY9&X-Amz-Signature=767a94af5364ac91ed03cd05e302b7ec2df4afee88105d1056920c1e42e9cab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

