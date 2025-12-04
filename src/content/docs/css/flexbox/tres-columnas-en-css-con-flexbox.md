---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPLBAIE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDwDjz4vGtJICsKfLVCROMjUxW7NUOtakZzcnUCJlZRGAiANPAi9KAogBA5tK3fBqgGtj%2F0qsp1lHH%2B3zSyT%2Fp51pSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMfbPdQysKACFctRw%2FKtwDl%2B2riCjY75k6JQyQGiwGqyrpdO56844iBVSNtF5LH1GybExXsd9FP1M%2BQ6rE%2B%2BZgaTeWezNBxcSp9VOblaQH7vcmGWQsCss12sECL%2BHe8d5R0%2BVullRRjiqFoS78cUcIMwN4H4eEdiZwgoUOLf0Z0Irg5MSB3bgj%2F3bLZU3GIDSll8wriu68sTbY8KM6BPmnEPvS0lpEj6lTGnjaUzyGZbi4gbymm5K1NrAmHBnaDqobs8JBku%2BoxHrf6yjLBlOyBqskO3UQJAzADxMm6Dbe3SgGopPKJRdQw3lJiC%2BWxprVBc2IPTIOYbMYNtHy2i3aAsMen3eC1sDd2jtV5gVZeVRYeomKGcOU4bzrvuTCbnOWvTvszxU5ldDholKFlvVgI68zqcbmeq4aJdXo6N8%2BBJ6KdPdnJsjWsmhY%2FkUYRrl3%2BPjNfmJ1td9euytZx6%2B6zD3IFIvoVKfaKOEB%2BY9NUGVvWiEqsN6y%2FaUUoe2eeRbAZ%2FG9c6pUtJQphfJQ1NmlNC8keJdPcWZiAQMpKZrvNL4iqq2HYt1SMDp77r6f2K82dIKnFim2DZLczheMX7SK%2BsRvRWjQInf2vm3gBRqgUtHjUsajUWPBvSPp8Wuswsuf8CsZvDTWCjVXz%2Fwwq5XDyQY6pgHRtNILcAdqecUdXQVoiSKsmK3p7Pb5RfCmnOXCjo4Xo%2ByMcrTPPtYqnqlEKpLi%2F2haaVYXqB%2B5PeAFVI7utTyyefLTQ%2F91zfouuKqWuM6f9Ph0hzBNlM8nkWylM8WLrgBR0gnjdyE6mOePjOjmIHzle3U2dp3YIoqXWbIv7Cb9fNOtUA3xu%2F1eaNJd9MGcxERBcUHNkN2OcyVJzeOu2Tylgkz3%2BRlv&X-Amz-Signature=f13c4199caf6f757e9e50b64a677d8dd70d4678d657fc1bf7ec7e54570f04ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPLBAIE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDwDjz4vGtJICsKfLVCROMjUxW7NUOtakZzcnUCJlZRGAiANPAi9KAogBA5tK3fBqgGtj%2F0qsp1lHH%2B3zSyT%2Fp51pSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMfbPdQysKACFctRw%2FKtwDl%2B2riCjY75k6JQyQGiwGqyrpdO56844iBVSNtF5LH1GybExXsd9FP1M%2BQ6rE%2B%2BZgaTeWezNBxcSp9VOblaQH7vcmGWQsCss12sECL%2BHe8d5R0%2BVullRRjiqFoS78cUcIMwN4H4eEdiZwgoUOLf0Z0Irg5MSB3bgj%2F3bLZU3GIDSll8wriu68sTbY8KM6BPmnEPvS0lpEj6lTGnjaUzyGZbi4gbymm5K1NrAmHBnaDqobs8JBku%2BoxHrf6yjLBlOyBqskO3UQJAzADxMm6Dbe3SgGopPKJRdQw3lJiC%2BWxprVBc2IPTIOYbMYNtHy2i3aAsMen3eC1sDd2jtV5gVZeVRYeomKGcOU4bzrvuTCbnOWvTvszxU5ldDholKFlvVgI68zqcbmeq4aJdXo6N8%2BBJ6KdPdnJsjWsmhY%2FkUYRrl3%2BPjNfmJ1td9euytZx6%2B6zD3IFIvoVKfaKOEB%2BY9NUGVvWiEqsN6y%2FaUUoe2eeRbAZ%2FG9c6pUtJQphfJQ1NmlNC8keJdPcWZiAQMpKZrvNL4iqq2HYt1SMDp77r6f2K82dIKnFim2DZLczheMX7SK%2BsRvRWjQInf2vm3gBRqgUtHjUsajUWPBvSPp8Wuswsuf8CsZvDTWCjVXz%2Fwwq5XDyQY6pgHRtNILcAdqecUdXQVoiSKsmK3p7Pb5RfCmnOXCjo4Xo%2ByMcrTPPtYqnqlEKpLi%2F2haaVYXqB%2B5PeAFVI7utTyyefLTQ%2F91zfouuKqWuM6f9Ph0hzBNlM8nkWylM8WLrgBR0gnjdyE6mOePjOjmIHzle3U2dp3YIoqXWbIv7Cb9fNOtUA3xu%2F1eaNJd9MGcxERBcUHNkN2OcyVJzeOu2Tylgkz3%2BRlv&X-Amz-Signature=568c0ed5e0c8d50715e14b57b18bd8066dad7e256179365e44c012a85866de40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

