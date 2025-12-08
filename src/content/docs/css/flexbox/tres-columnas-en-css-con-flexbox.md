---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSSBIZXY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7wEf%2BVutAVu1NodZ9iQum36NSjRnShunCF30a0cJUggIhAPxYHQPedMN8HYxQVKBo92mjHdlwJXK6VrmrvokAeE90KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAWKbNZXyYd0y3HLMq3AOuh4TMga3iI27T%2FGzdGfm0Fw3xKy3oroo8K1RS1y4CpxGAIlQmj%2FTOJLojN%2BVkELaSkWjBPlz9W06TklB2yh9eeKuB8JnrFDH1b233xlXnDvv73Z3UM2iNi87V6MXcAUS2BtwFX6OomTfgvq4rbdMMU3NUzypxttegyNKuaChEnitjGyjplMzuMq2nspX4GNVNTkotuMRwB%2FHIdwIsXyokhy8lKsbQfv2XZgGPtUZbnB4uGxoG%2BHl5YMnJAVWVSipu68Q5bAj%2Fnkj5aIz13d5QJHtXGp7jkbIyd0%2F7aRAw1IJVs40YW%2B9SwwUPi%2F4wnyvH4Ja%2BwF7Ys2TLGeCtWAYHnkNpxgWvfUq7c2McwgeU9rRZyYQCQB%2B7nuxIPAv96KPCSygdnZFC%2FnFmSFKU2BWDbzYG8U%2BslEzX5TNo1mko3aw%2FmB94Ki1TTlpravNCEi0ctpWsKKReR0Rjvsbl0z9YFtch5TfjWgt%2FMw8BRyVdo7leJwtwUHNSd%2FjwFmIQ2ZKVUDZ6ju%2FvlJxY6yv37csltoPHUQYNme922cdrkbPT8j%2FsRXl6NEOBttKkSTlUyIyfYIkc%2FPD0jiHIJIb11grk1N539ZrOr0H4Ed%2BFD554hPfeHauZRX5tu8HpODCT0NjJBjqkAalkthLKbRHrdVLLqnlWRx8Dvx4FpaKLdNfuLJ98VdMd0KvK%2Fa8rMuyovezJf5QIUXeO0Aygaytw5oUsHBTKIBuzudrBfvL0%2FumGs0RinWgB%2F7IDNJKBqEfJ%2FxFaP07gF1wPY18C%2BCLW12PU46lXDorIx4eUOMVEI1DVR%2FgHGnARtu2oUZiI79V%2FQHyGb3KUPDNdPZu%2FyEFgDjmG2nm%2F2X3deqNM&X-Amz-Signature=8e4197c53dae8cf7f4b56780308e94464281839ef939baa95aa6b4012862c02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSSBIZXY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7wEf%2BVutAVu1NodZ9iQum36NSjRnShunCF30a0cJUggIhAPxYHQPedMN8HYxQVKBo92mjHdlwJXK6VrmrvokAeE90KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAWKbNZXyYd0y3HLMq3AOuh4TMga3iI27T%2FGzdGfm0Fw3xKy3oroo8K1RS1y4CpxGAIlQmj%2FTOJLojN%2BVkELaSkWjBPlz9W06TklB2yh9eeKuB8JnrFDH1b233xlXnDvv73Z3UM2iNi87V6MXcAUS2BtwFX6OomTfgvq4rbdMMU3NUzypxttegyNKuaChEnitjGyjplMzuMq2nspX4GNVNTkotuMRwB%2FHIdwIsXyokhy8lKsbQfv2XZgGPtUZbnB4uGxoG%2BHl5YMnJAVWVSipu68Q5bAj%2Fnkj5aIz13d5QJHtXGp7jkbIyd0%2F7aRAw1IJVs40YW%2B9SwwUPi%2F4wnyvH4Ja%2BwF7Ys2TLGeCtWAYHnkNpxgWvfUq7c2McwgeU9rRZyYQCQB%2B7nuxIPAv96KPCSygdnZFC%2FnFmSFKU2BWDbzYG8U%2BslEzX5TNo1mko3aw%2FmB94Ki1TTlpravNCEi0ctpWsKKReR0Rjvsbl0z9YFtch5TfjWgt%2FMw8BRyVdo7leJwtwUHNSd%2FjwFmIQ2ZKVUDZ6ju%2FvlJxY6yv37csltoPHUQYNme922cdrkbPT8j%2FsRXl6NEOBttKkSTlUyIyfYIkc%2FPD0jiHIJIb11grk1N539ZrOr0H4Ed%2BFD554hPfeHauZRX5tu8HpODCT0NjJBjqkAalkthLKbRHrdVLLqnlWRx8Dvx4FpaKLdNfuLJ98VdMd0KvK%2Fa8rMuyovezJf5QIUXeO0Aygaytw5oUsHBTKIBuzudrBfvL0%2FumGs0RinWgB%2F7IDNJKBqEfJ%2FxFaP07gF1wPY18C%2BCLW12PU46lXDorIx4eUOMVEI1DVR%2FgHGnARtu2oUZiI79V%2FQHyGb3KUPDNdPZu%2FyEFgDjmG2nm%2F2X3deqNM&X-Amz-Signature=116be9d68939e9156ebeac191ffe02600bea8b883356c01561c23af450bcea69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

